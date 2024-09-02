const UserService = require('../services/UserService');

class UserController {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const user = await UserService.register(username, password);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const { token } = await UserService.login(username, password);
      res.status(200).json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
