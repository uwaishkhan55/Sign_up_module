const router = require('express').Router();
let Register = require('../models/register.model');
const jwt = require('jsonwebtoken')



router.route('/').post((req, res) => {
    const {email,password} = req.body;
    console.log(email+""+password)

    Register.findOne({
        email:email,
        password:password
    }).then(user=>{
        try{
            jwt.sign( { id: user._id }, 
                "app", { expiresIn: 36000},
                async (err, t) => {
                let token=await t;
               res.json({token,user})
           }) 
        }catch(c){
            res.json(c)
        }
    })
});



module.exports = router;