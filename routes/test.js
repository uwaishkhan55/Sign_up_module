var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'uwaishkhanbns@gmail.com',
    pass: '7007Uwaish55@#'
  }
});

var mailOptions = {
  from: 'uwaish@gmail.com',
  to: 'uwaishkhan55@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});