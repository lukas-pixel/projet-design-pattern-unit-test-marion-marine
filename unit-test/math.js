/*const add = (a, b) => {
    return a + b;
  }

const multiplyArray = (numbers) => {
    if (!Array.isArray(numbers)) {
      throw new Error('Argument must be an array of numbers');
    }
  
    if (numbers.length === 0) {
      return 0;
    }
  
    return numbers.reduce((acc, curr) => acc * curr, 1);
  }

const calculateFactorial = (n) => {
    if (typeof n !== 'number' || n < 0) {
      throw new Error('Input must be a non-negative number');
    }
  
    if (n === 0 || n === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }*/

  const users = [
    {
        id: 0,
        body: {
            userName: "julien",
            userAge: 23,
        }
    },
    {
        id: 1,
        body: {
            userName: "adrien",
            userAge: 58,
        }
    },
    {
        id: 2,
        body: {
            userName: "jules",
            userAge: 7,
        }
    },
  ];
  
  
  const expectedUsers = [
    {
        id: 0,
        name: "julien",
        age: 23,
  
    },
    {
        id: 1,
        name: "adrien",
        age: 58,
    },
    {
        id: 2,
        name: "jules",
        age: 7,
    },
  ];
  
  const tooManyUsers = users.concat(users).concat(users);
  
  const transformUsers = (_users) => {
    if (!Array.isArray(_users)) {
      throw new Error("Users must be provided.");
    }
  
    if (_users.length > users.length) {
      throw new Error("Too many users provided.");
    }
  
      return _users.map(user => ({
        id: user.id,
        name: user.body.userName,
        age: user.body.userAge,
      }));
  };
  
  module.exports = { users, tooManyUsers, expectedUsers, transformUsers };