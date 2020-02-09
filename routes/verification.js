const router = require('express').Router();
let Register = require('../models/register.model');
const Token =require('../models/token.model')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('SG.AUGRUU5sTFqx5FQ42zigsw.QAO5mpDmTkxjikWhPKxPxG_WhhsSAfv290U945ZZjKQ');
const jwt = require('jsonwebtoken')
const express=require('express');
const app=express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const jwtKey = 'app'
router.route('/').post((req, res) => {
         console.log(req.headers.token);
         let id=null;
       try{ id=jwt.verify(req.headers.token,"app").id}
       catch(c){}
        console.log(id+"/////////"+ req.headers.code)
        Token.findOne({
            $and: [ {  userId:id }, {code:req.headers.code }]
        }).then(
            u=>{
                console.log(u)
                if(!u) return res.json({})
                Register.findOne({
                    _id:u.userId
                }).then(
                    user=>{
                        res.json({user})
                    }
                )
            }
        )
         
        
  });


module.exports = router;