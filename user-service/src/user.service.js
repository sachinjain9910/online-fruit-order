const eventBus = require('./event-bus');

function registerUser(user) {
  eventBus.publish('UserRegistered', {
    userId: user.id,
    preference: user.notificationPreference
  });

  return user;
}

module.exports = { registerUser };
