const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
  userId: { type: 'String', required: true, unique: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
