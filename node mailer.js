const mailer = require("nodemailer");
let transporter = mailer.createTransport({
    server: "gmail.com",
    auth: {
        user: "youremail24@gmail.com",
        pass: "your password"
    }
})
let mailoption = {
    from: "youremail24@gmail.com",
    to: "recipient@gmail.com",
    subject: "Your subject",
    text: "This is your email message or text"
}
transporter.sendMail(mailoption, (err, info) => {
    err ? console.log(err.message) : console.log("Email Sent" + info.response)
})