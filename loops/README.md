Section  Loops
=====================  
Section  Loops and Iterations
=====================

- Loops are used to execute the `same block of code again, with a different value, until a certain condition is met`
- Loops can execute/repeat a block of code (an action) a number of/several times
- The basic idea behind a loop is to `automate the repetitive tasks within a program to save time and effort`
- It makes the `code compact`
- It is mostly used in array or object (to iterate through series)
- Loops/iterations is an instruction repeat until a specific condition is reached

### Different Types of Loops in JavaScript:

1. for loop
2. while loop
3. do...while loop
4. for...in loop
5. for...of loop (ES6)
6. for...each

01. The for loop
---------------------

- The `For` loop is used to run a piece of code a `set amount of times`
- Loops through a block of code until the `counter reach a specified number`
- The for loop `repeats a block of code until a certain condition` is met
- The for loop is the most simple/compact form of looping
- For loop consists of 3 statements (), mostly `i = index` is used for loop initialization

```javascript
// for loop

/* for (statement 1; statement 2; statement 3) {
  // Code to be executed
} */


/* for(variable definition/index/initialization; condition checking; increment/decrement expression) {
  // Code to be executed
} */

for (let i=1; i<=5; i++) {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
}
```

### 01.01. The for loop - Reverse order

```javascript
// for loop - reverse order

for (let i = 5; i >= 1; i--) {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
}
```

### 01.02. The for loop - Find Even or Odd number

```javascript
// for loop - to find out odd even number

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log('The current index/num is EVEN : ' + i);
  } /* else {
    console.log('The current index/num is ODD : ' + i);
  } */
}
```

02. The while loop
---------------------

- Loops through a block of code until the specified condition evaluates to true
- In For loop, a variable is part of a loop, but in While loop, we need to declare variable externally

```javascript
// while loop

/*while(condition) {
  // Code to be executed
}*/

let i = 1;

while (i <= 5) {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
  i++;
}
```

03. The do while loop
---------------------
03. The do...while loop
---------------------

- The do...while loop is similar to the while loop except that the `condition check happens at the end of the loop`
- The do...while loop will always be `executed at least once (before checking if the condition is true)`, even if the condition is false

```javascript
// do...while loop

/*do {
    // Code to be executed
}
while(condition);*/

let i = 1;

do {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
  i++;
}
while (i <= 5); 
```

04. The for in loop
---------------------
04. The for...in loop
---------------------

- The for-in loop is a special type of a loop that `iterates over the properties of an object or the elements of an array`

#### 04.01. The for...in Loop - array

```javascript
// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// An array with some elements
let arrColors = ["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Black"];

// Loop through all the elements in the array 
for (let color in arrColors) {
  alert('Color is: ' + arrColors[color]);
  document.write('<li>Color is: ' + arrColors[color] + '</li>');
  console.log('Color is: ' + arrColors[color]);
}
```

#### 04.02. The for...in Loop - object

```javascript
// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// An object with some properties 
let objEmployee = {'emp_name': 'Dinanath', 'emp_addres': 'Mumbai', 'emp_id': '029', 'emp_age':35};

// Loop through all the properties in the object  
for (emp in objEmployee) {
  alert('Employee '+ emp + ' is: ' + objEmployee[emp]);
  document.write('<li>Employee '+ emp + ' is: ' + objEmployee[emp] + '</li>');
  console.log('Employee '+ emp + ' is: ' + objEmployee[emp]);
}
```

#### 04.03. The for...in Loop - Inbuilt JavaScript objects

```javascript
// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// Loop through all the properties in the inbuilt object - window, document, navigator
for (props in window) {
  // alert('document object properties ' + props);
  document.write('<li>document object properties ' + props + '</li>');
  console.log('document object properties ' + props);
}
```

05. The for of loop
---------------------
05. The for...of loop (ES6)
---------------------

- Loops over `iterable objects such as arrays, strings`, etc.
- ES6 introduces a new for-of loop which allows us to iterate over arrays or strings very easily
- The code inside the loop is executed for each element of the iterable object

```javascript
// for...of loop

/*for(element in array/string) {
  // Code to be executed
} */

// Iterating over an array
let arrDays = ["Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let day of arrDays) {
  console.log(day);
  document.write('<li>' + day + '</li>');
}

// Iterating over string
let name = 'JavaScript';
for (let letter of name) {
  document.write(letter + ',');
  console.log(letter + ',');
}
```

06. Break and Continue statement
---------------------

- `break` and `continue` keywords/statement can change `how the loop behaves`
- `break` and `continue` keywords can be used in all loops to stop or continue the loop
- The `break` statement is used to exit a loop early, to "jump out" of a loop, stops executing/running a loop
- The `continue` statement tells the interpreter to immediately start the next iteration of the loop and skip the remaining code block

```javascript
// break continue statement

/* break */
let arrDays = ["Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let i = 1;
while (i <= 10) {
  if (i == 5) {
    break;
  }
  console.log(i);
  i++
}

console.log('// ------------------------------');

for (let i = 0; i <= arrDays.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(arrDays[i]);
}

console.log('// ------------------------------');

/* continue */
i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    // console.log('Even Number ', i);
    i++;
    continue; // skip rest of the loop body

    i + 100; // non of use 
    console.log('just in even num continue'); // non of use 
  }
  console.log('Odd Number ', i);
  i++;
}

console.log('// ------------------------------');

for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // skip rest of the loop body
    console.log('just after 5 continue...'); // non of use 
  }
  console.log(i);
}

console.log('// ------------------------------');

for(let int = 0; int < 10; int++) {

  if(int === 2) {
    console.log('2 is favorite EVEN number');
    continue;
  }

  if(int === 5) {
    console.log('at 5 stop the loop');
    break;
  }

  console.log('current Number is:', int); 
}

```

07. for each loop
---------------------
07. for...each loop
---------------------

> **Syntax & Example**: ``
```javascript

let arrDays = ["Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

arrDays.forEach(function(day)){
  console.log(day);
}

```