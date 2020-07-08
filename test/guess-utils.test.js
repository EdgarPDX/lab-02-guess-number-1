// IMPORT MODULES under test here:
// import example from '../example.js';
import { compareNumbers } from '../guess-utils.js';

const test = QUnit.test;

test('should return a 0 if given a 2 and a 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const argument1 = 2;
    const argument2 = 2;
    const actual = compareNumbers(argument1, argument2);
    const expected = 0;
    expect.equal(actual, expected);
    

});

test('should return a 1 if given a 3 and a 2', (expect)=> {

    const argument1 = 3;
    const argument2 = 2;
    const actual = compareNumbers(argument1, argument2);
    const expected = 1;
    expect.equal(actual, expected);



});

test('should return a -1 if given a 2 and a 3', (expect)=> {

    const argument1 = 2;
    const argument2 = 3;
    const actual = compareNumbers(argument1, argument2);
    const expected = -1;
    expect.equal(actual, expected);


});