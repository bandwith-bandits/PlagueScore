## Getting Started
This app is using the MEEVN stack (Mongoose, Express, Ejs, Vue, Node). Before running locally, run `npm install` to install all the packages needed to run the application.

The frontend part of the application is contained in the views directory. The layout/boilerplate.ejs imports vue.js, fonts from google fonts, and framework.css. Framework.css is defined in `public/stylesheets/framework.css`, it contains styling for all the websites components.

In `config/config.js`, the path to the database can be defined. This allows for setting your own database link.

Our passwords and users are handled by a library called passport.js. This salts and hashes the passwords, helping to protect users accounts from being stolen.

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 


## Available Scripts
`npm start` Starts the server

## File structure
- #### `public` - This holds all of our static files
- #### `App.js` - This is what renders all of our browser routes and different views
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
- #### `package.json` - Defines npm behaviors and packages for the client
- #### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
- #### `.gitignore` - Tells git which files to ignore
- #### `README` - This file!
- ### `views` - contains the frontend ui
## Learn More
[Mongoose](https://mongoosejs.com/docs/api.html)\
[Passport](http://www.passportjs.org/docs/)\
[Ejs](https://ejs.co/#docs)\
[Vue.js](https://vuejs.org/v2/guide/)\
[Express](http://expressjs.com/)