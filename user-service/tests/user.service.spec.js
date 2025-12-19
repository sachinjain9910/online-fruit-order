const { registerUser } = require('../src/user.service');
const eventBus = require('../src/event-bus');

jest.mock('../src/event-bus');

describe('User Service - Registration', () => {

  test('should publish event with SMS preference on registration', () => {
    registerUser({
      id: 'U1',
      name: 'Rahul',
      notificationPreference: 'SMS'
    });

    expect(eventBus.publish).toHaveBeenCalledWith(
      'UserRegistered',
      expect.objectContaining({
        userId: 'U1',
        preference: 'SMS'
      })
    );
  });

  test('should publish event with EMAIL preference on registration', () => {
    registerUser({
      id: 'U2',
      name: 'Amit',
      notificationPreference: 'EMAIL'
    });

    expect(eventBus.publish).toHaveBeenCalledWith(
      'UserRegistered',
      expect.objectContaining({
        userId: 'U2',
        preference: 'EMAIL'
      })
    );
  });

});


test('should publish referral info when user registers with referral code', () => {
  registerUser({
    id: 'U3',
    name: 'Suresh',
    notificationPreference: 'EMAIL',
    referralCode: 'REF123'
  });

  expect(eventBus.publish).toHaveBeenCalledWith(
    'UserRegistered',
    expect.objectContaining({
      userId: 'U3',
      referralCode: 'REF123'
    })
  );
});
