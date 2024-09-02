const Message = require('../models/Message');

class MessageRepository {
  async createMessage(sender, receiver, content) {
    const message = new Message({ sender, receiver, content });
    return await message.save();
  }

  async getMessages(sender, receiver) {
    return await Message.find({
      $or: [
        { sender, receiver },
        { sender: receiver, receiver: sender }
      ]
    });
  }
}

module.exports = new MessageRepository();
