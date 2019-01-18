const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', function() {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', function() {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ 7', function() {
  expect(sum(2,5)).toBe(7);
});

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy
test('4 + 7 เท่ากับ 11', function () {
  expect(sum(4,7)).toBe(11);
})

test('5 + 5 เท่ากับ 10', function () {
  expect(sum(5,5)).toBe(10);
})

test('6 + 6 เท่ากับ 12', function () {
  expect(sum(6,6)).toBe(12);
})