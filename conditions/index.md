Section 10. Conditions
=====================
Section 10. Conditions - Control Flow
=====================

- Conditional statements are used to perform different action based on different condition
- Conditional statements allow the developer to make correct decisions and perform right actions as per condition
- It helps to perform different actions for different decisions
- We can use conditional operator to check our condition: >, <, >=, <=, ==, !=, ===

#### We can use the following conditional statements in JavaScript to make decisions:

1. If Statement
2. If...else Statement
3. If...else if...else Statement
4. Switch...Case Statement

10.01. The if statement
---------------------
10.01. The if statement and comparison operators
---------------------

- If the conditional statement is the simplest and basic control statement make decisions and execute statements conditionally
- The if statement is used to execute a block of code `only if the specified condition evaluates to true`
- It evaluates the content only `if an expression is true`

If conditional statements are used to evaluate some kind of condition and do something/perform some actions based on the result

> **Note**: <br/>
Use `if` to specify a block of code to be executed, `if a specified condition is true`

> **Syntax & Example**: `10.01.01.script.js`
```javascript
// if conditional statement

/*if(condition/expression) {
  // Code to be executed if condition/expression is true
}
*/

let user = 'Dinanath';

if (user == 'Dinanath') {
  console.log('Welcome Dinanath!');
  window.alert('Welcome Dinanath!');
}

if (user == 'Dinanath') {
  console.log('Welcome Authorised User: ' + user + '!');
  window.alert('Welcome Authorised User: ' + user + '!');
}

// ------------------------------

let age = 20;

if (age >= 18) {
  console.log('MAJOR! Eligible for Voting');
  window.alert('MAJOR! Eligible for Voting');
}

// ------------------------------

let currentHours = 10;

if(currentHours < 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
}

if(currentHours >=6 && currentHours < 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
}
```

10.02. The if else statement
---------------------
10.02. The if...else statement
---------------------

- The JavaScript `if...else statement` is used to execute the code `weather condition is true or false`
- The developer can enhance the decision-making capabilities by providing an alternative choice through adding an `else` statement to the `if` statement
- The condition can be any expression that evaluates to true or false
- If the condition evaluates to true, statements_1 are executed; otherwise, statements_2 are executed

> **Note**: <br/>
Use `else` to specify a block of code to be executed, `if the same condition is false`

> **Syntax & Example**: `10.02.01.script.js`
```javascript
// if...else conditional statement

/*if(condition/expression){  
// content to be executed if condition is true - statements_1  
}  
else{  
// content to be executed if condition is false - statements_2
}*/

let user = 'Ambar';

if (user == 'Dinanath') {
  console.log('Welcome Dinanath!');
  window.alert('Welcome Dinanath!');
} else {
  console.log('Welcome Guest!');
  window.alert('Welcome Guest!');
}

// ------------------------------

let age = 15;

if (age >= 18) {
  console.log('MAJOR! Eligible for Voting');
  window.alert('MAJOR! Eligible for Voting');
} else {
  console.log('MINOR! NOT Eligible for Voting');
  window.alert('MINOR! NOT Eligible for Voting');
}

// ------------------------------

let currentHours = 10;

if(currentHours < 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
} else {
  console.log('Good Evening!');
  window.alert('Good Evening!');
}
```

10.03. The if else if else statement
---------------------
10.03. The if...else, if...else statement
---------------------

- The `if...else if...else` a special statement that is used to `combine multiple if...else statements`
- It is an advanced form of if...else that allows us to `make a correct decision out of several conditions`

> **Note**: <br/>
Use `else if` to specify a new condition to test, `if the first condition is false`

> **Syntax & Example**: `10.03.01.script.js`
```javascript
// If...else if...else conditional statement

/*if(condition/expression 1) {
    // Code to be executed if condition1 is true statements_1
} else if(condition/expression 2) {
    // Code to be executed if the condition1 is false and condition2 is true statements_2
} else {
    // Code to be executed if both condition1 and condition2 are false statements_3
}*/

let num1 = 200;
let num2 = 100;

if (num1 == num2) {
  console.log('Both numbers are equal');
} else if (num1 < num2 ) {
  console.log('Number2 is greater!');
} else {
  console.log('Number1 is greater!');
}

// ------------------------------

let age = 15; 

if (age >= 60) {
  console.log('SINIOR CIRIZEN!');
} else if (age < 18) {
  console.log('MINOR!');
} else {
  console.log('MAJOR - Middle Age!');
}

// ------------------------------

let currentHours = 15;

if(currentHours >=6 && currentHours< 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
} else if (currentHours >12 && currentHours <=18) {
  console.log('Good AfterNoon!');
  window.alert('Good AfterNoon!');
} else {
  console.log('Good Evening!');
  window.alert('Good Evening!');
}
```

10.04. The switch case statement
---------------------
10.04. The switch...case statement
---------------------

- The switch...case statement is alternative to an if...else if...else statement, both do almost the same thing
- This matches the `case` and the `value of condition` and if the case matches, the subsequent block is executed and if none of the case matches `default block` is executed
- The JavaScript switch statement is used to execute one code from multiple blocks of expressions

> **Note**: <br/>
Use `switch` to specify many `alternative blocks of code to be executed`

> **Syntax & Example**: `10.04.01.script.js`
```javascript
// switch...case conditional statement

/* switch(variable/expression){
  case value1:
    // Code to be executed if variable/expression === value1
    break;
  case value2:
    // Code to be executed if variable/expression === value2
    break;
  default:
    // Code to be executed if variable/expression is different from all values
} */

let grade = 'B'; // A.B,C, or something

switch (grade) {
  case 'A':
    console.log('Great Job! - A Grade');
    break;
  case 'B':
    console.log('Good! - B Grade');
    break;
  case 'C':
    console.log('Congratulations! - Passed');
    break;
  default:
    console.log('Sorry! - Failed...Keep trying!');
    break;
}

// ------------------------------

let sweets = ''; //cake, chocolates, biscuits

switch (sweets) {
  case 'chocolates':
    console.log('Chubby Chocolates!');
    break;
  case 'cake':
    console.log('Happy BirthDay Cake!');
    break;
  case 'biscuits':
    console.log('Enjoy Biscuits!');
    break;
  default:
    console.log('No Sweets! Try some other sweets!');
    break;
}

// ------------------------------

const color = 'red';

switch(color) {
  case 'red':
    console.log('The Dark RED');
    break;
  case 'green':
    console.log('Go Green');
    break;
  case 'blue':
    console.log('Boys are Blue');
    break;
  case 'yellow':
    console.log('Golden Yellow');
    break;
  default:
    console.log('Its some other Color, Enter correct color');
    break;
}

// ------------------------------

let currentDate = new Date();
let currentDay;

switch(currentDate.getDay()) {
  case 0:
    currentDay = 'Sunday';
    break;
  case 1:
    currentDay = 'Monday';
    break;
  case 2:
    currentDay = 'Tuesday';
    break;
  case 3:
    currentDay = 'Wednesday';
    break;
  case 4:
    currentDay = 'Thursday';
    break;
  case 5:
    currentDay = 'Friday';
    break;
  case 6:
    currentDay = 'Saturday';
    break;
}

console.log(`Today is ${currentDay}!`);

```