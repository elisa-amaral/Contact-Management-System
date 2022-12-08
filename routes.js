const express = require('express')
const router = express.Router()
const homeController = require('./src/controllers/homeController')
const authenticationController = require('./src/controllers/authenticationController')
const contactController = require('./src/controllers/contactController')
const { loginRequired } = require('./src/middlewares/middleware')

// Home routes
router.get('/', homeController.index)

// Login routes
router.get('/authentication/index', authenticationController.index)
router.post('/authentication/login', authenticationController.login)
router.post('/authentication/signup', authenticationController.signup)
router.get('/authentication/logout', authenticationController.logout)

// Contact routes
router.get('/contact/index', loginRequired, contactController.index)
router.post('/contact/add', loginRequired, contactController.add)
router.get('/contact/index/:id', loginRequired, contactController.editAfterAdding)
router.post('/contact/edit/:id', loginRequired, contactController.edit)
router.get('/contact/delete/:id', loginRequired, contactController.delete)

module.exports = router