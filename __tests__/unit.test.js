// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber tests
test('(530)483-8009 is a phone number', () => {
    expect(functions.isPhoneNumber('(530)483-8009')).toBe(true);
});

test('(817)845-9233 is a phone number', () => {
    expect(functions.isPhoneNumber('(817)845-9233')).toBe(true);
});

test('(813)86-92433 is not a phone number', () => {
    expect(functions.isPhoneNumber('(813)86-92433')).toBe(false);
});

test('(8)84-923 is not a phone number', () => {
    expect(functions.isPhoneNumber('(8)84-923')).toBe(false);
});


//isEmail tests
test('djkasbfd@gmail.com is an email', () => {
    expect(functions.isEmail('djkasbfd@gmail.com')).toBe(true);
});

test('swilcox@ucsd.edu is an email', () => {
    expect(functions.isEmail('swilcox@ucsd.edu')).toBe(true);
});

test('f@f.f is not an email', () => {
    expect(functions.isEmail('f@f.f')).toBe(false);
});

test('fff is not an email', () => {
    expect(functions.isEmail('fff')).toBe(false);
});


//isStrongPassword tests
test('H39dnq_2wd9_la is a strong password', () => {
    expect(functions.isStrongPassword('H39dnq_2wd9_la')).toBe(true);
});

test('m_A52fLB1Z_u is a strong password', () => {
    expect(functions.isStrongPassword('m_A52fLB1Z_u')).toBe(true);
});

test('h is not a strong password', () => {
    expect(functions.isStrongPassword('h')).toBe(false);
});

test('40 is not a strong password', () => {
    expect(functions.isStrongPassword('40')).toBe(false);
});


//isDate tests
test('11/18/2022 is a date', () => {
    expect(functions.isDate('11/18/2022')).toBe(true);
});

test('02/12/2002 is a date', () => {
    expect(functions.isDate('02/12/2002')).toBe(true);
});

test('0/0/200 is not a date', () => {
    expect(functions.isDate('0/0/200')).toBe(false);
});

test('999/999/99999 is not a date', () => {
    expect(functions.isDate('999/999/99999')).toBe(false);
});


//isHexColor tests
test('1edc21 is hex color', () => {
    expect(functions.isHexColor('1edc21')).toBe(true);
});

test('ffffff is hex color', () => {
    expect(functions.isHexColor('ffffff')).toBe(true);
});

test('h is not hex color', () => {
    expect(functions.isHexColor('h')).toBe(false);
});

test('9 is not hex color', () => {
    expect(functions.isHexColor('9')).toBe(false);
});