const { returnTwo, greeting, add } = require('./functions.js');

test('returnTwo will return 2', () => {
  expect(returnTwo()).toBe(2);
});

describe('greeting tests', () => {
  test('greeting with James as param value will be Hello, James', () => {
    expect(greeting('James')).toBe('Hello, James.');
  });

  test('greeting with Jill as param value will be Hello, Jill', () => {
    expect(greeting('Jill')).toBe('Hello, Jill.');
  });
});

describe('add tests', () => {
  test('add 1 and 2 equals 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('add 5 and 9 equals 14', () => {
    expect(add(5, 9)).toBe(14);
  });
});
