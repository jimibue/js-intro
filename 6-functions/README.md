
Section . Functions
=====================

.01. What is a Function?
---------------------

- A function is basically a `group of statements that perform specific tasks/operations`
- Functions provide a way to `create reusable code packages` which are more portable and easier to debug
- Functions allow a programmer to `divide a big program` into a number of/several small and manageable functions
- It helps programmers in writing `modular codes`
- The function is a kind of reusable tool where we can write code/functionality to reuse whenever we want (Function allow the code to be called many times without repetition)
- Wrapping up / making smaller chunks of statements / reusable codes together for readability or separation of concern/proper organization is functions – (Grouping of a repetitive task)
- Functions (logical block of code) are one of the most important control structure in any programming language
- In other languages, it might be called `MODULES, SUBROUTINES(SUB-ROUTINES)`
- There are two steps to utilize function: 
  1. create/define a function with `function` keyword  
  2. call/invoke a function

> **Note**: <br/>
Best Practice - First Define function than call/envoke it!

#### .01.01. Here are some advantages of using functions:

- **Code reusability** - call a function several times
- **Less coding** - makes our program compact, no need to write lines of code each time
- **Easier to maintain** - changes are done only at one location
- **Easier to eliminate the errors** - fixing errors becomes much easier

#### 01.02. Function Definition / Function Declaration / Creating Function

- The function declaration starts by using the `function keyword`, 
- followed by a `unique function name`, 
- a list of `parameters in parentheses` i.e. () (that might be empty), 
- and a statement block surrounded by `curly braces { }`

```javascript
//1. define / declare / create function

function showMessage () {
  //Body of function 
  //code to be executed
  console.log('welcome to JavaScript function');
  alert('welcome to JavaScript function');    
}
```

#### 01.03. Function Invocation / Calling a Function / Run a Function

- Defined function can be invoked/called/run from anywhere in the document, by typing `function name followed by a set of parentheses, like functionName()`

```javascript
//2. invoke / call the function

showMessage();
```

#### 01.04. Function Naming

Function `denotes an action/task`. The function name should be `brief, as accurate as possible and describe` what the function does, like a `verb`.

Usually, Function name starts with:

- "getSomething" – returns value,
- "createSomething" – create something,
- "calcSomething" – calculate something,
- "checkSomething" – check something and return a boolean, etc.

Examples of function names:
- getSum();
- createFields();
- calcAge();
- checkUserType();

02. Types of Function
---------------------

- Regular Function
- Parameterized Function
- Return Type Function (Function returning values)

#### 02.01. Regular Function

- Simple/Normal function which we use daily to perform some action/task

```javascript
var name = 'Dinanath';

//1. define / declare / create function
function sayHello () {
  //Body of function 
  //code to be executed
  console.log('Hello ' + name);
  alert('Hello ' + name);    
}

//2. invoke / call the function
sayHello();
```

#### 02.02.01. Parameterized Function

- One can pass data to functions using parameters (function arguments)
- You can specify parameters when you define your function to accept input values at run time

```javascript
// Parameterized function
//1. define / declare / create function
function sayHello (name) {
  //Body of function 
  //code to be executed
  console.log('Hello ' + name);
  alert('Hello ' + name);    
}

//2. invoke / call the function
sayHello('Dinanath');

sayHello('Dino');

// ------------------------------

var total;

function calculateSum (num1, num2) {
  total = num1 + num2;
  console.log(total);
}

calculateSum(10, 20);
calculateSum(100, 200);
```

#### 02.02.02. Default Values for Function Parameters ES6

With ES6, now you can specify default values to the function parameters. This means that if no arguments are provided to the function when it is called these default parameters values will be used.

```javascript
// Parameterized function with default parameters

//1. define / declare / create function
function sayHello (name = 'User') {
  //Body of function 
  //code to be executed
  console.log('Hello ' + name);
  alert('Hello ' + name);    
}

//2. invoke / call the function
sayHello();

sayHello('Amber');

// ------------------------------

var total;

function calculateSum (num1=1, num2=2) {
  total = num1 + num2;
  console.log(total);
}

calculateSum();
calculateSum(100, 200);
```

#### 02.03. Return Type Function (Function returning values)

- A function can `return a value` back to the script that called the `function, as a result, using the return statement`
- We can call a function that returns a value and use it in our program
- The return statement usually placed as the last line of the function

```javascript
// Return type function
//1. define / declare / create function
function getSum (num1, num2) {
  //Body of function 
  //code to be executed
  var sum = num1 + num2;
  return(sum);
}

//2. invoke / call the function
console.log(getSum(10,20));
console.log(getSum(100,200));

var total = getSum(50,50);
alert(total);
```

03. Different ways to define Function
---------------------

The syntax that we've used before to create functions is called `function declaration`. There is another syntax for creating a function that is called a `function expression` and `Immediately invoked function expression (IIFE)`

#### 03.01. function declaration (Regular/Normal function)

#### 03.02. function expression

- Variables contain the expressions of a function
  - Anonymous function expression
  - Named function expression

```javascript
// function declaration (Regular / normal function)
function getSum1(num1, num2) {
  var total = num1 + num2;
  return total;
}

// ------------------------------

// function expression - Anonymus
var getSum2 = function(num1, num2) {
    var total = num1 + num2;
    return total;
};

alert(getSum2(10,20));

// ------------------------------

// assign function to another variable
var sum1 = getSum2;
alert(sum1(100,200));
```

> **Syntax & Example**: 
```javascript
// function expression - named
var getSum2 = function getTotal(num1, num2) {
  var total = num1 + num2;
  return total;
};

alert(getSum2(10,20));

// ------------------------------

// assign function to another variable
var sum1 = getSum2;
alert(sum1(5,10));
```

#### 03.03. Immediately invoked function expression (IIFE)

- It runs as soon as the browser finds it
- Declare and run the function at the same time

```javascript
// Immediately invoked function expression (IIFE)
(function () {
  console.log('Welcome to Immediately invoked function expression (IIFE)');
}());


(function(userName) {
  console.log('Welcome', userName);
})('Dinanath');
```

04. String Methods and Concatenation
---------------------

> **Syntax & Example**: 
```javascript

const firstName = 'Dinanath';
const lastName = 'Jayaswal'

const fullName = (firstName) + (lastName);
console.log(fullName);
console.log(typeof fullName);

// concatenation
console.log(firstName + ' ' + lastName);

console.log('Hello ' + firstName + ' ' + lastName + 'Welcome to JavaScript!');

// append
let name1 = 'Dinanath ';
let name1 += 'Jayaswal';
console.log(name1);

// concat() method
console.log(firstName.concat(' ', lastName));

// length
console.log(firstName.length);

// change case
console.log(firstName.toLowercase());
console.log(firstName.toUppercase());

// escaping
// let statement1 = 'wait I'm coming, that's good';
let statement1 = "wait I'm coming, that's good";
let statement2 = 'wait I\'m coming, that\'s good';

// string array - get specific character from string like an array
console.log(firstName[0]);

// indexOf
console.log(firstName.indexOf('i'));
console.log(firstName.lastIndexOf('a'));

// charAt()
console.log(firstName.charAt(2));

// get last character from string
console.log(firstName.charAt(firstName.length - 1));

// replace();
let replaceString = ('Dinanath', 'DJ');
console.log('My name is:', replaceString); 

// substring();
console.log(firstName.substring(0,4));

// slice();
console.log(firstName.slice(0,4));

// slice(); negative number starts from backside
console.log(firstName.slice(-2));

// includes();
let message2 = 'Hello Dinanath, welcome to JavaScript';
console.log(message2.includes('Hello'));
console.log(message2.includes('Hi'));

// split()
let message2 = 'Hello Dinanath, welcome, to JavaScript';
console.log(message2.split(','));
console.log(message2.split(' '));

let courses = 'html5, css3, javascript, angular';
console.log(courses.split(','));

```

05. Template String
---------------------
05. Template Literals
---------------------

- ES6 new feature `Strings Template` offers a convenient way to work with string concatenation/interpolation
- Template literals provide an easy and clean way to create multi-line strings and perform string interpolation
- Intuitive expression interpolation for single-line and multi-line strings
- Use `back-tick (grave accent)` character and `{ var name in curly brace }`, no + plus sign required
- The best part of Template Literals (Template Strings) is we can `use 'single' "double" quotes inside`

- It is part of ES6 but compatible with all the modern browsers and its latest versions

> **ax & Example**: 
```javascript

//old plain javascript approach
let user = 'Dinanath';
let greetMessage1 = 'Welcome' + ' ' + user + ' ' + 'to JavaScript.';

console.log(greetMessage1);
 
console.log('// ------------------------------');

const firstName = 'Dinanath';
const lastName = 'Jayaswal'
const course = 'JavaScript'

const fullName = `Hey ${firstName} ${lastName} Welcome to ${course}.`

console.log('// ------------------------------');

//ES6 Template Literals (Template Strings) approach
let greetMessage2 = `Hello ${firstName}, How are you?`;

console.log(greetMessage2);

console.log('// ------------------------------');
// ------------------------------

//ES6 multi-line string
let greetMessage3 = `ES6 Template Literals (Template Strings):
                    With Template Literals (Template Strings)
                    we can add multiple lines in string concatenation/interpolation
`;

console.log(greetMessage3);

let greetMessage4 = ES6 Template Literals (Template Strings):
                    With Template Literals (Template Strings)
                    we can add multiple lines in string concatenation/interpolation
;

console.log(greetMessage4);
```