const users = [];

function addUser(user) {
  users.push(user);
  return user;
}

function getUserById(id) {
  return users.find(u => u.id === id);
}

module.exports = {
  addUser,
  getUserById
};
