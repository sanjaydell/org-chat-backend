const MessageService = require('../services/MessageService');

class MessageController {
  async sendMessage(req, res) {
    try {
      const { sender, receiver, content } = req.body;
      const message = await MessageService.sendMessage(sender, receiver, content);
      res.status(201).json(message);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getMessages(req, res) {
    try {
      const { sender, receiver } = req.query;
      const messages = await MessageService.getMessages(sender, receiver);
      res.status(200).json(messages);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new MessageController();
