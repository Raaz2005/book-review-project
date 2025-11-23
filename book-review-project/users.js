let users = [];

const isValid = username => users.some(user => user.username === username);

const authenticatedUser = (username, password) =>
  users.some(user => user.username === username && user.password === password);

export { users, isValid, authenticatedUser };