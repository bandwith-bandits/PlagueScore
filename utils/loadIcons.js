const fs = require('fs');
module.exports.loadIcons = () => {
    return fs.readdirSync('public/assets/userIcons');
}
