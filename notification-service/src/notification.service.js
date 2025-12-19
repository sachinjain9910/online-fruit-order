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

function handleOrderPlaced(event, { sendSMS }) {
  sendSMS(event.userId, 'Order confirmed');
}



module.exports = { handleUserRegistered, handleWalletCredited, handleOrderPlaced };
