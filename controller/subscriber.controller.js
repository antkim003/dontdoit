const Subscriber = require('../models/subscriber');
/**
 * DB controller
 */

 /**
  * Persists message into the database
  * @param {String} userId userId string
  */
function addToSubscriberList(userId) {
  Subscriber.findOne((_, subscriber) => {
    if (subscriber) {
      return subscriber;
    } else {
      Subscriber.create({ userId: userId }, (err, result) => {
        return result;
      })
    }
  })
}

function getSubscriber(userId, cb) {
  
}


module.exports = {
  addToSubscriberList: addToSubscriberList,
}