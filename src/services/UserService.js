const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/UserRepository');

class UserService {
  async register(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await UserRepository.createUser(username, hashedPassword);
  }

  async login(username, password) {
    const user = await UserRepository.findUserByUsername(username);
    if (!user) throw new Error('User not found');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }
}

module.exports = new UserService();
