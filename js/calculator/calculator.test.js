const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 / 3 to equal 3.33', () => {
  expect(calculator.divide(10, 3)).toBe(3.33);
});

test('divide 20 / 2 to equal 10', () => {
  expect(calculator.divide(20, 2)).toBe(10);
});

test('multpiple 2 * 2 to equal 4', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('multpiple 4 * 4 to equal 16', () => {
  expect(calculator.multiply(4, 4)).toBe(16);
});