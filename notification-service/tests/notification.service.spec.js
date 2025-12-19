const {
  handleUserRegistered,
  handleWalletCredited,
  handleOrderPlaced
} = require('../src/notification.service');

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


test('should notify referrer when wallet is credited', () => {
  const sendSMS = jest.fn();
  const sendEmail = jest.fn();

  handleWalletCredited(
    { referrerCode: 'REF123', amount: 10 },
    { sendSMS, sendEmail }
  );

  expect(sendSMS).toHaveBeenCalled();
});

test('should notify user on order placed', () => {
  const sendSMS = jest.fn();

  handleOrderPlaced(
    { userId: 'U1', amount: 50 },
    { sendSMS }
  );

  expect(sendSMS).toHaveBeenCalledWith(
    'U1',
    expect.stringContaining('Order confirmed')
  );
});
