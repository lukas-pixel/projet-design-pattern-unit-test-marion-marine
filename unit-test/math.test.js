const { it } = require('node:test');
const { describe } = require('yargs');
const { add, multiplyArray, calculateFactorial } = require('./math');


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

  describe("calculate factorial function", () => {
      it("should throw an error when a string is used", () => {
          expect(() => calculateFactorial("FACTORIAL")).toThrow("Input must be a non-negative number");
      });
      it("it should return 1 if n = 0", () => {
        expect(() => calculateFactorial(0)).toThrow(1);
      });
      it("it should return 1 if n = 1", () => {
        expect(() => calculateFactorial(1)).toThrow(1);
      });
  })