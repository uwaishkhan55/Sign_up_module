const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokenSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    code: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;