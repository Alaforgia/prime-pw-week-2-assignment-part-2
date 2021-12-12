// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and assign it the name 'Dane'.
// Then we make an if statement where the variable name is equal to 'Mary'.
// In the If statement, if the name 'Mary' is run, then the console will print the string 'Hi, Mary!'.
//If 'Mary' is not the name ran, then (or else) the string 'How do you do?' wil print to the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We create a variable called secret with nothing assigned to it and a variable called code and assign it the value 123 (one-hundred and twenty-three).
//We make an if statement where code is equal to the number 123. Within the If statement we set variable secret to the string 'super' and variable code to code x 2.
//In the If statement we set code to 123 so it is 123 (code) x 2. We make another If statement where we set code to be greater than a value of 250. If code does have a value of
//greater than 250, then variable super will equal the string 'duper' instead of 'super'. 123 x 2 = 246. So secret will equal 'super'. The console will print 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We create three variables: isStudent, age, and zip. isStudent is set to the boolean value true. age is set to a value of 34, and zip is set to the number 55407.
//We make an If statement where isStudent is equal and zip is greater than 80000. This means that both variables must fall within both values in order for the console to
//print `You're a student on the West Coast`. Next we make an else if where isStudentis qual to boolean false or age is less than 30. This means that if isStudentis false OR age
//is less than 30 than the console will print 'What are your hobbies?'. Another else if following, if none of the previous variables meet their conditions and isStudent equals true,
//then the console will print 'Welcome to Prime!'. The final statement in the chain is an else. Meaning if none of the previous variables above meet their conditions, then the
//console will print 'How about the weather?'.
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
