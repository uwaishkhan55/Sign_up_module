const router = require('express').Router();
let Register = require('../models/register.model');
const Token =require('../models/token.model')
const jwt = require('jsonwebtoken')


    var email="";
router.route('/').post((req, res) => {
     email = req.body.email;
    const password = req.body.password;
    const location = req.body.location;
    const username = req.body.username;
    const interest ={"id":"0"};
  const newRegister = new Register({
    username,
    location,
    password,
    email,
    interest
  });

  newRegister.save()
  .then(async(userCreated) => {
     let userId=await userCreated.id;
    const code=(Math.floor(Math.random() * 90000) + 10000);
    const newToken = await new Token({
       userId,
       code

    })
    .save()
    .then( (user)=>{
        jwt.sign( { id: user.userId }, "app", { expiresIn: 36000}, async (err, t) => {
                    let token=await t;
                    res.json({token})
               }
           
          )

    })
   
   console.log("Still working bro"+code)
  

   var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'uwaishkhanbns@gmail.com',
    pass: '7007Uwaish55@#'
  }
});
console.log(email)
var mailOptions = {
  from: 'fromDeveloper@gmail.com',
  to: email,
  subject: ' Email Verification',
  text: 'Your verification code:'+code
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
   
    
    
}
    )
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;