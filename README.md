## Getting Started
This repository aims to assist you in beginning work on a MERN stack application for heroku deployment with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams by clicking the green "Use this template" button above.

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json. Alternatively your group may choose to simplify this process by using yarn workspaces as specified [here](https://yarnpkg.com/lang/en/docs/workspaces/).

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

## Learn More
To learn how to setup a local MongoDB instance for testing, check out how to [connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).