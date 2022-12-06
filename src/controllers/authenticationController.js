const Authentication = require('../models/AuthenticationModel')

exports.index = (req, res) => {
    if(req.session.user) return res.redirect('/')
    res.render('authentication')
}

exports.login = async (req, res) => {
    try {
        const authentication = new Authentication(req.body)
        await authentication.userLogin()

        if(authentication.errors.length > 0) {
            req.flash('errors', authentication.errors)
            req.session.save(function() {
                return res.redirect('back')
            })
            return // stops here, doesn't create success message
        }

        req.flash('success', 'Successful login!')
            req.session.user = authentication.user // adds user credentials to req.session as .user
            req.session.save(function() {
                return res.redirect('back')
            })
    } catch(e) {
        console.log(e)
        return res.render('404')
    }
}

exports.signup = async (req, res) => {
    try {
        const authentication = new Authentication(req.body)
        await authentication.userSignup()

        if(authentication.errors.length > 0) {
            req.flash('errors', authentication.errors)
            req.session.save(function() {
                return res.redirect('back')
            })
            return // stops here, doesn't create success message
        }

        req.flash('success', 'Account successfully created! Now you can log in below.')
            req.session.save(function() {
                return res.redirect('back')
            })
    } catch(e) {
        console.log(e)
        return res.render('404')
    }
}

exports.logout = function(req, res) {
    req.session.destroy()
    res.redirect('/')
}