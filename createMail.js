require('dotenv').config();
const sgMail = require("@sendgrid/mail");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);
templates = {
    confirm_account       : "d-d742dab8a0b84f258d2cb6fbaf4f6d6d ",
};

function createMail(data) {   const msg = {      //extract the email details
    to: data.receiver,
    from: data.sender,
    templateId: templates[data.templateName],      //extract the custom fields
    dynamic_template_data: {
        name: data.name,
        confirm_account_url:  data.confirm_account__url,
        reset_password_url: data.reset_password_url
    }    };    //send the email
    sgMail.send(msg, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log("That's wassup!");
        }
    });
}


exports.creatMail = createMail;