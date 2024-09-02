const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const generateUserId = () => {
  return uuidv4();
};

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    required: true,
    default: generateUserId
  },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
