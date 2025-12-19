function handleUserRegistered(event, { sendSMS, sendEmail }) {
  if (event.preference === 'SMS') {
    sendSMS(event.userId);
  }

  if (event.preference === 'EMAIL') {
    sendEmail(event.userId);
  }
}


function handleWalletCredited(event, { sendSMS }) {
  sendSMS(event.referrerCode);
}

module.exports = { handleUserRegistered, handleWalletCredited };
