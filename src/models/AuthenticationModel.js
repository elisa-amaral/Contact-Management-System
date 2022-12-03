const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const AuthenticationSchema = new mongoose.Schema({
    email: { type: String, required : true },
    password: { type: String, required : true }
})
const AuthenticationModel = mongoose.model('Authentication', AuthenticationSchema)

class Authentication {
    constructor (body) {
        this.body = body
        this.errors = []
        this.user = null 
    }

    cleanUp() {
        // makes sure all inputs are strings
        for (const key in this.body) {
            if(typeof this.body[key] !== 'string') this.body[key] = ''
        }
        
        // removes CSRF token to avoid recording it to database
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
     }

    validateUserInputs() {
        this.cleanUp()

        // validate email
        if(!validator.isEmail(this.body.email)) this.errors.push('Error: invalid email address. Please try again.')

        // validate password (the message below may appear for users that already signed up if wrong password is typed shorter than 6 and longer than 50 chars, that's because the method validateUserInputs() is used to validate data from users with an account and without an account in authenticationController exports.login and exports.signup)
        if(this.body.password.length < 6 || this.body.password.length > 50) this.errors.push('Error: password length must be between 6 and 50 characters. Please try again.')
    }

    async userLogin() {
        this.validateUserInputs()
        if(this.errors.length > 0) return // invalid email or password input
        this.user = await AuthenticationModel.findOne({ email: this.body.email })

        if(!this.user) {
            this.errors.push(`Error: there is no account linked to ${this.body.email}, please try again.`)
            return 
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push(`Error: wrong password. Please try again.`)
            this.user = null // if email is correct but password incorrenct, resets this.user 
            return
        }
    }

    async userSignup() {
        this.validateUserInputs()
        if(this.errors.length > 0) return // invalid email or password input

        await this.userExists()
        if(this.errors.length > 0) return // email already used to create an account

        const salt = bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password, salt)
        
        this.user = await AuthenticationModel.create(this.body) // CSRF removed by cleanUp() in chained call
    }

    async userExists() {
        this.user = await AuthenticationModel.findOne({ email: this.body.email })
        if(this.user) this.errors.push(`Error: ${this.body.email} has already been used to create an account.`)
    }    
}

module.exports = Authentication