const Contact = require('../models/ContactModel')

exports.index = (req, res) => {
    res.render('contact', {
        contact: {}
    })
}

exports.add = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        await contact.addNewContact()
        
        if(contact.errors.length > 0) {
            req.flash('errors', contact.errors)
            req.session.save(() => res.redirect('back')) 
            return
        }
    
        req.flash('success', 'New contact successfully added!')
        req.session.save(() => res.redirect(`/contact/index/${contact.contact._id}`)) 
        return
    } catch(e) {
        return res.render('404')
    }
}

exports.editAfterAdding = async function(req, res) {
    if(!req.params.id) return res.render('404')

    const contact = await Contact.findId(req.params.id)
    if(!contact) return res.render('404')

    res.render('contact', { contact })
}

exports.edit = async function(req, res) {
    try {
        if(!req.params.id) return res.render('404')
        const contact = new Contact(req.body)
        await contact.editContact(req.params.id)

        if(contact.errors.length > 0) {
            req.flash('errors', contact.errors)
            req.session.save(() => res.redirect('back')) 
            return
        }

        req.flash('success', 'Contact successfully updated!')
        req.session.save(() => res.redirect(`/contact/index/${contact.contact._id}`)) 
        return
    } catch(e) {
        console.log(e)
        return res.render('404')
    }
}

exports.delete = async function(req, res) {
    if(!req.params.id) return res.render('404')

    const contact = await Contact.deleteContact(req.params.id)
    if(!contact) return res.render('404')

    req.flash('success', 'Contact successfully deleted.')
    req.session.save(() => res.redirect(`back`)) 
    return
}