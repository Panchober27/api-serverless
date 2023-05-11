// this is file is to use the nodemailer package to send emails

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "",
        pass: "",
    },
});

const sendEmail = (email, subject, text) => {
    const mailOptions = {
        from: "",
        to: email,
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return false;
        } else {
            console.log("Email sent: " + info.response);
            return true;
        }
    });
}

module.exports = sendEmail;