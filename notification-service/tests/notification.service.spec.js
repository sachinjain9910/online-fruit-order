const { handleUserRegistered } = require('../src/notification.service');

describe('Notification Service', () => {

  test('should send SMS when preference is SMS', () => {
    const sendSMS = jest.fn();
    const sendEmail = jest.fn();

    handleUserRegistered(
      { userId: 'U1', preference: 'SMS' },
      { sendSMS, sendEmail }
    );

    expect(sendSMS).toHaveBeenCalled();
    expect(sendEmail).not.toHaveBeenCalled();
  });

  test('should send Email when preference is EMAIL', () => {
    const sendSMS = jest.fn();
    const sendEmail = jest.fn();

    handleUserRegistered(
      { userId: 'U2', preference: 'EMAIL' },
      { sendSMS, sendEmail }
    );

    expect(sendEmail).toHaveBeenCalled();
    expect(sendSMS).not.toHaveBeenCalled();
  });

});
