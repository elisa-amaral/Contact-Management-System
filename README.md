# Contact Management System

This project is a contact management system where users can add, view, edit and delete contacts. The contact registration form is composed by full name, phone number and email address, the first name plus either the phone number or the email address are required to add a new contact. 

The purpose of the project was to create a data CRUD (Create, Read, Update, Delete) with back-end JavaScript (Node.js, Express.js, MongoDB and more) upon the Model-View-Controller Architecture. The complete Technology Stack used is listed ahead.

All contact data is fictional (full name, phone number and email address). This data was created for testing purposes with [generatedata.com](https://generatedata.com/)

## Demonstration Video

https://drive.google.com/file/d/1FHaRYZ1wInrqDiTN_YaOd2Lvrz6N6_kB/view?usp=share_link

## Screenshot 1: : Authentication

![Screenshot 1](/screenshots/Screenshot_1.jpg)

## Screenshot 2: : Contact List

![Screenshot 2](/screenshots/Screenshot_2.jpg)

## Screenshot 3: Add New Contact (similar to Update page)

![Screenshot 3](/screenshots/Screenshot_3.jpg)

## Important Details

User permissions were not implemented, that is, all logged in users view and edit the same contact list, as a public contact list accessible after signing up to the system. This was done in this manner because the purpose of the project was to create a data CRUD (Create, Read, Update, Delete) with full stack JavaScript by using Node.js, Express.js, Webpack module bundler and MongoDB Atlas Database + Mongoose, all running on the Model-View-Controller architecture (MVC Framework). 

For that same reason, that error messages displayed in the views are handled in the backend and the front-end design was created almost entirely with Bootstrap, except for the footer design. I surely will implement user permissions and other database related features in future projects, built with a higher level of complexity and other technologies from the JavaScript universe.

## How to Run the Project on Your Computer

+ Download this repository and unzip it  
+ Install [Node.js LTS](https://nodejs.org/en/download/)
+ On your computer's terminal (command prompt), change the directory path to the the unzipped repository folder path
+ Run the command **_**npm i**_**  on the terminal to install all dependecies (from the file **_**package.json**_** in the repository folder) 
+ After installing all dependencies, the folder **node_modules** will be created. Only after that, run the command **npm start** on the terminal to start the local server
+ Access the project on the address http://localhost:3000 (port may vary, the terminal will show the exact address when the server starts running)

## Technology Stack

+ JavaScript
+ Node.js 
+ Node Package Manager (NPM)
+ Nodemon
+ Webpack (module bundler)
+ Express.js (server and routes management)
+ Model-View-Controller Architecture (Express.js MVC Framework)
+ Express.js Sessions
+ Express.js Middlewares
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
