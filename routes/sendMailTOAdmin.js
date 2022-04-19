var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "xyz@email.com",
    pass: "passwordforxyz@email.com",
  },
});

var mailOptionsAdmin = {
  from: "kick.development.noreply@gmail.com",
  to: "ashwamedhpb@gmail.com",
  subject: "New User Signed-Up to Kick-API",
};

var mailOptionsUser = {
  from: "kick.development.noreply@gmail.com",
  subject: "Sign-Up Successful",
};

module.exports = {
  transporter,
  mailOptionsAdmin,
  mailOptionsUser,
};
