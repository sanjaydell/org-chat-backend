const User = require('../models/User');

class UserRepository {
  async createUser(username, password) {
    const user = new User({ username, password });
    return await user.save();
  }

  async findUserByUsername(username) {
    return await User.findOne({ username });
  }

  async findUserByUserId(userId) {
    return await User.findOne({ userId });
  }
}

module.exports = new UserRepository();
