const router = require('express').Router();
let Register = require('../models/register.model');
const jwt = require('jsonwebtoken')



router.route('/').post((req, res) => {
       console.log(req.body)
       let id=null;
       try{ id=jwt.verify(req.headers.token,"app").id}
       catch(c){}
       Register.update({ _id:id},
          {$set:{interest:req.body}}
               ).then((u)=>{
                    Register.findOne({_id:id}).then(user=>{
                          res.json({user})
                    })
               })
       
});



module.exports = router;