  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
  "origin": "*", 
  "credentials": true,
  "exposedHeaders": ["Uid", "Access-Token"]
  // same for "Uid, Access-Token"
  // Adding "set-cookie" to this list did not work.
}));

const uri = "mongodb+srv://YOUR_ID:YOUR_PASSWORD@cluster0-uujh1.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const register = require('./routes/register');

const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use('/register', register);

app.use('/verification',require('./routes/verification'));
app.use('/login',require('./routes/login'));
app.use('/interest',require('./routes/interest'));
let Register = require('./models/register.model');
const jwt = require('jsonwebtoken')
app.get('/fetchProfile',(req,res)=>{
  let id=null;
  try{ id=jwt.verify(req.headers.token,"app").id}
  catch(c){}
  Register.findOne({_id:id}).then(user=>{
    console.log(user)
    res.json({user})
})
})

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
