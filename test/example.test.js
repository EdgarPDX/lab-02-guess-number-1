// IMPORT MODULES under test here:
// import example from '../example.js';
import { compareNumbers } from './guess-utils.js';

const test = QUnit.test;

test('testing if this works', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
