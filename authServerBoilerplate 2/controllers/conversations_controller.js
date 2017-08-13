const Conversation = require("../models/conversation");
const User = require("../models/user");

module.exports = {
  createConversation(req, res, next) {
    const {
      buyerId,
      sellerId
    } = req.body;

    Conversation.create({
      message: []
    }).then(conversation => {
      User.findByIdAndUpdate({
        _id: buyerId
      }, {
        buyConversation: conversation._id
      });
      User.findByIdAndUpdate({
        _id: sellerId
      }, {
        sellConversation: conversation._id
      });
      res.send(conversation);
    }).catch(next);
  }
};
