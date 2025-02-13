const NodeMailer = require("nodemailer");

const mailTransporter = NodeMailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 465,
  secure: false,
  auth: {
    user: "3d8235baf95a6d",
    pass: "47365c2fb3e8fb",
  },
});

const mailDetails = {
  from: "sharanappa.talli@gmail.com",
  to: "subramanya.talli@gmail.com",
  subject: "Testing",
  text: "Node.js testing mail for reminder app",
};

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent successfully");
  }
});
