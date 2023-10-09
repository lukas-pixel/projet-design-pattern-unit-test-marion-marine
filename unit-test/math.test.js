/*const { it } = require('node:test');
const { describe } = require('yargs');
const { add, multiplyArray, calculateFactorial, transformUsers } = require('./math');

describe("Add function", () => {
    it("should add numbers", () => {
        expect(add(5, 11)).toBe(16);
    })
    it("should add negative numbers", () => {
        expect(add(-2, -3)).toBe(-5);
    })
    it("should add a positive and negative number", () => {
        expect(add(2, -3)).toBe(-1);
    })
});

describe('Multiplying an Array of Numbers Function', () => {
    it('should multiply an array of positive numbers', () => {
      const result = multiplyArray([2, 3, 4]);
      expect(result).toBe(24);
    });
  
    it('should return 0 when multiplying an empty array', () => {
      const result = multiplyArray([]);
      expect(result).toBe(0);
    });
  
    it('should handle negative numbers', () => {
      const result = multiplyArray([-2, 3, -4]);
      expect(result).toBe(24);
    });
  
    it('should handle decimal numbers', () => {
      const result = multiplyArray([0.5, 0.25, 2]);
      expect(result).toBe(0.25);
    });
  
    it('should throw an error if the argument is not an array', () => {
      expect(() => multiplyArray(123)).toThrow('Argument must be an array of numbers');
    });
  });

  describe("calculate factorial function",()=>{
    it("should throw an error if arg is a string", ()=>{ expect(()=>calculateFactorial("FACTORIAL")).toThrow("Input must be a non-negative number"); })
    it("should throw an error if arg is lower than 0", ()=>{expect(calculateFactorial(-5)).toThrow("Input must be a non-negative number"); })
    it("should return 1 if arg is 0", ()=>{ expect(calculateFactorial(0)).toBe(1); })
    it("should return 1 if arg is 1", ()=>{ expect(calculateFactorial(1)).toBe(1); })
    it("should pass the right factorial", ()=>{ 
        expect(calculateFactorial(2)).toBe(2);
        expect(calculateFactorial(4)).toBe(24);
        expect(calculateFactorial(8)).toBe(40320);
        expect(calculateFactorial(21)).not.toBe(42);
    })
});
*/

const { users, tooManyUsers, expectedUsers, transformUsers } = require("./math");

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

describe("transform User", () => {
    it('should throw if no users provided', () => {
        expect(() => transformUsers(123)).toThrow("Users must be provided.");
        expect(() => transformUsers("salut")).toThrow("Users must be provided.");
        expect(() => transformUsers(undefined)).toThrow("Users must be provided.");
        expect(() => transformUsers(null)).toThrow("Users must be provided.");
    });

    it('should throw if users not correct', () => {
      expect(() => transformUsers(["users1", "users2"])).toThrow("Users must be provided.");
    })

    it('should throw if too manyUsers provided', () => {
        expect(() => transformUsers(tooManyUsers)).toThrow("Too many users provided.");
    });

    it('should transform users to the good model', () => {
        expect(transformUsers(users)).toStrictEqual(expectedUsers);
    });
})