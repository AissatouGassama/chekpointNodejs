var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gassamaaissa@gmail.com',
    pass: 'passer'
  }
});

var mailOptions = {
  from: 'gassamaaissa@gmail.com',
  to: 'aissagassama@outlook.fr',
  subject: 'Sending Email using Node.js',
  text: 'mon email !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});