const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const sub = require('./sub');

test('adds 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
});


const div = require('./div');
test('adds 15 / 5 to equal 3', ()=>{
    expect(div(15, 5)).toBe(3);
})

const multi = require('./multi');
test('adds 5 * 5 to equal 25', ()=>{
    expect(multi(5, 5)).toBe(25);
})

const name = require('./name');
test('adds name to equal Raphael', ()=>{
    expect(name("Raphael")).toBe("Raphael");
})

const concat = require('./concat');
test('adds concat to equal Raphael Boa noite', ()=>{
    expect(concat("Raphael")).toBe("Raphael Boa noite");
})

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

const text = require('./shared/text')
test('add text to equal Ola tudo bem', ()=>{
  expect(text("Ola tudo bem")).toBe("Ola tudo bem");
})