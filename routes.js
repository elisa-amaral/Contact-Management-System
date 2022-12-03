const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const authenticationController = require('./src/controllers/authenticationController')
const contactController = require('./src/controllers/contactController')
const { loginRequired } = require('./src/middlewares/middleware')

// Home routes
route.get('/', homeController.index)

// Login routes
route.get('/authentication/index', authenticationController.index)
route.post('/authentication/login', authenticationController.login)
route.post('/authentication/signup', authenticationController.signup)
route.get('/authentication/logout', authenticationController.logout)

// Contact routes
route.get('/contact/index', loginRequired, contactController.index)
route.post('/contact/add', loginRequired, contactController.add)
route.get('/contact/index/:id', loginRequired, contactController.editAfterAdding)
route.post('/contact/edit/:id', loginRequired, contactController.edit)
route.get('/contact/delete/:id', loginRequired, contactController.delete)

module.exports = route