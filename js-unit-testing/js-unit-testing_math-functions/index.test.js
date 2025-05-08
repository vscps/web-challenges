import { add } from ".";
import { subtract } from ".";
import { multiply } from ".";
import { divide } from ".";

test("add() should return 5 if called with 2 and 3.", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("subtract() should return 10 if called with 15 and 5.", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("multiply() should return 8 if called with 2 and 4.", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply() should return a negative result if called with a negative first argument.", () => {
  const result = multiply(-2, 4);
  expect(result).toBe(-8);
});

test("multiply() should return a negative result if called with a negative second argument.", () => {
  const result = multiply(2, -4);
  expect(result).toBe(-8);
});

test("multiply() should return a positive result if called with two negative arguments.", () => {
  const result = multiply(-2, -4);
  expect(result).toBe(8);
});

test("divide() should return 3 if called with 9 and 3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("divide() should return 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
