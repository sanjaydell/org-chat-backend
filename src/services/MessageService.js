const MessageRepository = require('../repositories/MessageRepository');

class MessageService {
  async sendMessage(sender, receiver, content) {
    return await MessageRepository.createMessage(sender, receiver, content);
  }

  async getMessages(sender, receiver) {
    return await MessageRepository.getMessages(sender, receiver);
  }
}

module.exports = new MessageService();
