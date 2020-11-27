const sortArray = require('./sum');
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//task 2
test('sortArray test', () => {
    var x = [1, 3, 2, 8, 5, 4];
    var y = [1, 3, 2, 8, 5, 4];

    expect(sortArray(x)).toEqual(y);
});