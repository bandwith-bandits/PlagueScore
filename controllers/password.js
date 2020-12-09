const User = require('../models/user');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.recover = (req, res) =>{
    User.findOne({email: req.body.email})
        .then(user => {

            //TODO set the same message if email is invalid
            if(!user)
                return res.status(401).json({message : 'The email adress is invalid'});

            user.generatePasswordReset();

            user.save()
                .then(user => {
                    let link = "http://" + req.headers.host + "api/auth/reset"
                    const mailOptions = {
                        to: user.email,
                        from: process.env.sender,
                        subject: "Password Change",
                        text: `Hi ${user.username} \n
                        Click on the following link to reset your password \n 
                        ${link} to reset your password.\n \n 
                        If you did not request this, please ignore this email.\n 
                        `
                    };
                    sgMail.send(mailOptions, (error, result) => {
                        if (error) return res.status(500).json({message: error.message});

                        res.status(200).json({message: 'A reset email has been sent to ' + user.email + '.'});
                    });
                })
                .catch(err => res.status(500).json({message: err.message}));
        })
        .catch(err => res.status(500).json({message: err.message}));
};

exports.reset = (req, res) => {
    User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
        .then((user) => {
            if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});
            res.render('reset', {user});
        })
        .catch(err => res.status(500).json({message: err.message}));
};


exports.resetPassword = (req, res) => {
    User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
        .then((user) => {
            if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

            //Set the new password
            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            // Save
            user.save((err) => {
                if (err) return res.status(500).json({message: err.message});

                // send email
                const mailOptions = {
                    to: user.email,
                    from: process.env.FROM_EMAIL,
                    subject: "Your password has been changed",
                    text: `Hi ${user.username} \n 
                    This is a confirmation that the password for your account ${user.email} has just been changed.\n`
                };

                sgMail.send(mailOptions, (error, result) => {
                    if (error) return res.status(500).json({message: error.message});

                    res.status(200).json({message: 'Your password has been updated.'});
                });
            });
        });
};