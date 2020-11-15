//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
        uri: 'mongodb+srv://admin:adminUser@plaguescore.e31br.mongodb.net/Users?retryWrites=true&w=majority', //place the URI of your mongo database here.
    }
};
