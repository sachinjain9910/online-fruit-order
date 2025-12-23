const eventBus = require('./event-bus');
const notificationClient = require('./notification.service');
const userStore = require('./user.store');

function registerUser(user) {
  // save user
  userStore.addUser(user);

  // send thank you message
  if (user.notificationPreference === 'SMS') {
    notificationClient.sendSMS(user.id, 'Thank you for registering');
  }

  if (user.notificationPreference === 'EMAIL') {
    notificationClient.sendEmail(user.id, 'Thank you for registering');
  }

  // publish registration event
  eventBus.publish('UserRegistered', {
    userId: user.id,
    preference: user.notificationPreference,
    referralCode: user.referralCode
  });

  return user;
}

module.exports = {
  registerUser
};
