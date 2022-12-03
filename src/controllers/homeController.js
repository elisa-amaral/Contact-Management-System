const Contact = require('../models/ContactModel')

exports.index = async (req, res) => {
    if(!req.session.user) return res.redirect('/authentication/index')
    contacts = await Contact.findContacts()
    res.render('index', { contacts })
}
