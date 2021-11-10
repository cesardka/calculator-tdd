const calculator = require("./calculator");

test("returns 0 for empty string", () => {
  expect(calculator.add("", "")).toBe(0);
});

test("returns the correct result when adding two numbers", () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test("returns the correct result when subtracting two numbers", () => {
  expect(calculator.subtract(1, 7)).toBe(-6);
});
