const mongoose = require('mongoose');
const user = require('./user');

const MessageSchema = new mongoose.Schema({
   text: {
       type: String,
       required: true,
       maxLength: 160
   },
   User: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;