# Contact Management System

This project is a contact management system where users can add, view, edit and delete contacts. The contact registration form is composed by full name, phone number and email address, the first name plus either the phone number or the email address are required to add a new contact. 

The purpose of the project was to create a data CRUD (Create, Read, Update, Delete) with back-end JavaScript (Node.js, Express.js, MongoDB and more) upon the Model-View-Controller Architecture. The complete Technology Stack used is listed ahead.

The **Helmet.js** lines must be commented in the **server.js** file in case the project is running on localhost.

All contact data is fictional (full name, phone number and email address). This data was created for testing purposes with [generatedata.com](https://generatedata.com/)

## Project Demonstration Video

https://drive.google.com/file/d/1FHaRYZ1wInrqDiTN_YaOd2Lvrz6N6_kB/view?usp=share_link

## Screenshot 1: Authentication

![Screenshot 1](/screenshots/Screenshot_1.jpg)

## Screenshot 2: Contact List

![Screenshot 2](/screenshots/Screenshot_2.jpg)

## Screenshot 3: Add New Contact (similar to Update page)

![Screenshot 3](/screenshots/Screenshot_3.jpg)

## Important Details

User permissions were not implemented, that is, all logged in users view and edit the same contact list, as a public contact list accessible after signing up to the system. This was done in this manner because the purpose of the project was to create a data CRUD (Create, Read, Update, Delete) with full stack JavaScript by using Node.js, Express.js, Webpack module bundler and MongoDB Atlas Database + Mongoose, all running on the Model-View-Controller architecture (MVC Framework). 

For that same reason, the error messages displayed in the views are handled in the back-end and the front-end design was created almost entirely with Bootstrap, except for the footer design. I surely will implement user permissions and other database related features in future projects, built with a higher level of complexity and other technologies from the JavaScript universe.

## Technology Stack

+ JavaScript
+ Node.js 
+ Node Package Manager (NPM)
+ Nodemon
+ Webpack (module bundler)
+ Express.js (server and routes management)
+ Model-View-Controller Architecture (Express.js MVC Framework)
+ Express.js Sessions
+ Express.js Middleware
+ Express.js Flash Messages
+ Embedded JavaScript Templating (EJS for MVC views)
+ MongoDB Atlas Database
+ Mongoose
+ Dotenv
+ Helmet.js (HTTP headers securing)
+ Cross Site Request Forgery (CSRF Tokens)
+ validator.js
+ bcrypt.js 
+ HTML
+ CSS
+ Embedded JavaScript Templating (EJS for MVC views)
+ Bootstrap
+ [generatedata.com](https://generatedata.com/)
