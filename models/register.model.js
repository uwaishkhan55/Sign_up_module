const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
  email: { type:String, required: true,unique:true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  username: { type: String, required: true },
  interest: { type:Object, required: true },
  isVerified:{type:Boolean,default:false}
}, {
  timestamps: true,
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;