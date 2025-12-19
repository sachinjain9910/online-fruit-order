const eventBus = require('./event-bus');
const notificationService = require('./notification.service');
function registerUser(user) {
  // ✅ Step 5: Send thank-you based on preference
  if (user.notificationPreference === 'SMS') {
    notificationService.sendSMS(user.id, 'Thank you for registering');
  } else {
    notificationService.sendEmail(user.id, 'Thank you for registering');
  }

  // ✅ Step 6: Publish referral event (only if referralCode exists)
eventBus.publish('UserRegistered', {
  userId: user.id,
  preference: user.notificationPreference,
  referralCode: user.referralCode || null
});


  return user;
}

module.exports = { registerUser };

