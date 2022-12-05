require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')
const routes = require('./routes')
const flash = require('connect-flash')
const path = require('path')
// const helmet = require('helmet') //uncommnet when publishing to the cloud
const csrf = require('csurf')
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('ready')
    })
    .catch(e => console.log(`Error: ${e}`))

const sessionOptions = session({
    secret: 'gM6=uY8=kS2#eQ0',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 30, // 30 minutes (in milliseconds)
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING})
})
app.use(sessionOptions)
app.use(flash())

// app.use(helmet()) //uncommnet when publishing to the cloud
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(csrf())

// my own middlewares
app.use(globalMiddleware)
app.use(checkCsrfError)
app.use(csrfMiddleware)

app.use(routes)

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Access http://localhost:3000')
        console.log('Server running on port 3000')
    })
})

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl+C)" );
    // some other closing procedures go here
    process.exit(0);
});