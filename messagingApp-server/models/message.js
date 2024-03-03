const mongoose = require('mongoose');
const user = require('./user');

const messageSchema = new mongoose.Schema({
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

messageSchema.pre('remove', async function(next) {
    try {
        let user = await User.findById(this.User);
        user.messages.remove(this.id);
        await user.save();
        return next();
    } catch (err) {
        return next(err);
    }
})

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;