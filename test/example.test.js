// IMPORT MODULES under test here:
import { 
    // myFunction,
    renderGame, renderTeam
} from '../render-utils.js';

const test = QUnit.test;

test('renderTeam should create teamDiv, fill it with nameDiv and ScoreDiv, and populate them with the name and score respectively', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = teamDiv.append('Sam', 8);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam('Sam', 8);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'should return a team named Sam with 8 goals');
});

test('renderGame should generate stats for the current game', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'should return ');
});




test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
