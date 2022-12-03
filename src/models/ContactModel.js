const mongoose = require('mongoose')
const validator = require('validator')

const ContactSchema = new mongoose.Schema({
    firstName: { type: String, required : true },
    lastName: { type: String, required : false, default: '' },
    phoneNumber: { type: String, required : false, default: '' },
    email: { type: String, required : false, default: '' },
    addedOn: { type: Date, default: Date.now }
})
const ContactModel = mongoose.model('Contact', ContactSchema)

function Contact(body) {
    this.body = body
    this.errors = []
    this.contact = null
}

Contact.prototype.cleanUp = function() {
    // makes sure all inputs are strings
    for (const key in this.body) {
        if(typeof this.body[key] !== 'string') this.body[key] = ''
    }
    
    // removes CSRF token to avoid recording it to database
    this.body = {
        firstName: this.body.firstName,
        lastName: this.body.lastName,
        phoneNumber: this.body.phoneNumber,
        email: this.body.email,
    }
}

Contact.prototype.validateUserInputs = function () {
    this.cleanUp()

    //validate email if user inputs it
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Error: invalid email address. Please try again.')

    if(!this.body.firstName) this.errors.push(`Error: "First Name" is a required field.`)
    if(!this.body.phoneNumber && !this.body.email) {
        this.errors.push(`Error: you must inform either the email address or the phone number to add a new contact..`)
    }
}

Contact.prototype.addNewContact = async function() {
    this.validateUserInputs()
    if(this.errors.length > 0) return 
    this.contact = await ContactModel.create(this.body)
}

Contact.prototype.editContact = async function(id) {
    if(typeof id !== 'string') return
    this.validateUserInputs()
    if(this.errors.length > 0) return
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true})
}

// Static method
Contact.findId = async function(id) {
    if(typeof id !== 'string') return
    const contact = await ContactModel.findById(id)
    return contact
}

Contact.findContacts = async function(id) {
    // decreasing order by date it was added on database
    const contacts = await ContactModel.find()
    .sort({ addedOn: -1 })
    return contacts
}

Contact.deleteContact = async function(id) {
    if(typeof id !== 'string') return
    const contact = await ContactModel.findOneAndDelete({_id: id})
    return contact
}
 
module.exports = Contact