const subscribers = {};

function publish(eventName, payload) {
  const handlers = subscribers[eventName] || [];
  handlers.forEach(handler => handler(payload));
}

function subscribe(eventName, handler) {
  if (!subscribers[eventName]) {
    subscribers[eventName] = [];
  }
  subscribers[eventName].push(handler);
}

module.exports = {
  publish,
  subscribe
};
