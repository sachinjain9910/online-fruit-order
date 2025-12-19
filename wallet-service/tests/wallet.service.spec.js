const { handleUserRegistered } = require('../src/wallet.service');
const eventBus = require('../src/event-bus');

jest.mock('../src/event-bus');

describe('Wallet Service', () => {

  test('should credit Rs.10 to referrer wallet', () => {
    handleUserRegistered({
      userId: 'U3',
      referralCode: 'REF123'
    });

    expect(eventBus.publish).toHaveBeenCalledWith(
      'WalletCredited',
      expect.objectContaining({
        referrerCode: 'REF123',
        amount: 10
      })
    );
  });

});
