Variables
=====================

01. What is Variable?
---------------------

Variables are one of the most fundamental concepts in JavaScript and other all programming languages of the world.

- A variable is `container to store/hold the data/information`
- Developers/Programmers use Variable to `store/hold the data/information temporarily` in computer memory 
- A variable is a kind of data holder where we can store some value for programming or calculation purpose
- A JavaScript variable is simply a `name of the storage location (named containers/named storage)` for data
- Variables are symbolic names for values 
- Variables are used to store data of different types like a string of text, numbers, boolean values like true/false, an array of data, etc. 
- The data or value stored in the variables can be set, updated, and retrieved whenever needed
- Variables are declared using the keyword `var` keyword
- The `assignment operator (=)` is used to assign value to a variable, like this: `var varName = value;` or `var firstName = 'JavaScript';`
- By default value of variable defined in JavaScript is `undefined` (variable is defined but value not assigned: `var firstName;` or `let lastName; console.log(firstName, lastName); ` // undefined)

<hr/>

- **Example**: Variables are like `box or an envelope` which we use to `organize various kinds of stuff` and put a `label` on each box or an envelope
- **Example**: Variable declaration and assignment is just `like Maths & Algebra`: `x = 10`; and in JavaScript we write `var x = 10;`

<hr/>

> **Note**: <br/>
In ES6 `'let'` and `'const'` keywords are used to defined variables

> **Note**: <br/>
As a best practice of ES6, from now onwards variables must be define with `let` keyword: `let techName = 'JavaScript' ; `

<hr/>

```javascript
// variables defined to hold different types of data
let techName = 'JavaScript'; // String literal 
let version = 6; // Number literal
let isDone = true; // Boolean literal

console.log('Learning '+techName+version);
```

02. Declaring variable without a value
---------------------
02. Creating a variable without a value
---------------------

Variables can also be declared without having any initial values assigned to them. This is useful for variables that are supposed to hold values like user inputs, calculations, status updates, etc.

```javascript
// Declaring Variables
let techName;
let version;
let isDone;

// Assigning value
techName = 'JavaScript';
version = 6;
isDone = true;

console.log('Learning '+techName+version);

// ------------------------------

// Declaring Variable
let userName;

// Assigning value
userName = 'Dinanath';

console.log('Welcome '+userName);
```


04. Variable Naming Conventions
---------------------
04. Variable Naming Conventions (Identifiers)
---------------------

All JavaScript variables must be `identified`/referred/defined/named with `unique names`, called as `identifiers`. The naming rules in JavaScript are not much different from any other programming language. 

- There are some rules while declaring/naming a JavaScript variable (also known as `identifiers`)
  - Identifiers are `simply names` in JavaScript
  - Identifiers are used to name variables, keywords, functions, and labels
  - Identifiers can be `short names/nick names` (like name, age, num1, isDone, sum) or more descriptive names (firstName, totalDashboards, isSeniorCitizen)

**The basic rules for defining/assigning names for variables (unique identifiers) are:**

- A variable name must `start with a letter, underscore (_), or dollar sign ($)`
  - **Example**: var firstName, var _firstName, var $firstName;
- Names can contain letters, digits, underscores, and dollar signs
  - **Example**: var $num_total1; 
- A variable name `cannot start with a number or special characters`
  - **Example**: var 1num_total, var .num_total
- A variable name `cannot contain spaces`
  - **Example**: var num total;
- A variable Names are `case sensitive`
  - **Example**: var firstName='Dinanath'; and var FirstName='Dinanath'; here `firstName & FirstName` are different ie. two different variable
- A variable name cannot be a `JavaScript keyword or a JavaScript reserved word`
   - **Example**: var var; var switch; var for; var true;
- One should Always give `meaningful/descriptive names` to variables
- for naming the variables that contain multiple words, `camelCase` method is commonly used (camelCase is the default method for identifier naming)

> **Note**: <br/>
In the programming world, there have been two most popular methods/mechanism of writing multiple words identifiers: (Underscore, Camel Case)

1. **Underscore**: first_name, last_name, date_of_birth, is_passed, native_place
2. **Camel Case:**: firstName, lastName, dateOfBirth, isPassed, nativePlace  OR <br/> : FirstName, LastName, DateOfBirth, IsPassed, NativePlace 

```javascript
// variables defined to hold different types of data
let _firstName = 'JavaScript';
let $version = 6;
let $num_total1 = 10;

console.log('variables details: ' +  _firstName + ' ' + $version + ' ' + $num_total1);

// wrong identifiers
// var #name;
```

 Variable Scope
---------------------

The scope of a variable is the region/coverage of your program in which it is defined and exist/available. JavaScript variables have two scopes:
1. Local Variables
2. Global Variables

#### 01. Local Variables

- A JavaScript local variable is declared `inside block or function`
- It is accessible within the `function or blocks only`
- A local variable will be `visible only within a function` where it is defined
- `Function parameters` are always local to that function

> **Note**: <br/>
In the function body, a `local variable takes precedence` over a global variable with the same name.

```javascript
// global variable
var globalName = 'Global';

console.log(globalName);

function showName() {
  // local variable
  var localName = 'Local';

  console.log(localName);
  console.log(globalName); // recall global variable
}

// invoke/call/run function
showName();

// error - as local variable not exist/available outside of block { }
console.log(localName);
```

#### .02. Global Variables

- A variable `declared outside the function/at the root` or declared `with window object` is known as a global variable 
- A JavaScript global variable is accessible from any function 
- A global variable has a global scope which means it can be defined and accessible anywhere in JavaScript code/program

```javascript
// global variable
var globalName = 'Global';

console.log(globalName);

function showName() {
  // local variable
  var globalName = 'Local';

  console.log(globalName);

  // define global variable with window
  window.globalVersion = 29;
  console.log('global variable from inside function: ' + window.globalVersion);
}

// invoke/call/run function
showName();

// access global variable defined inside function
console.log('global variable from outside function: ' + window.globalVersion);
```

06. The let and const keywords ES6
---------------------
ES6 introduces two new keywords `let` and `const` for declaring variables. The `var, let and const` keywords are almost the same, just a few differences with the scope.

- In older programs` var` is used a lot which declares a variable `(function-scoped variables)`, but in a slightly different `old` way, with scope issues 
- Both `let` and `const` keywords declare variables, `scoped at block-level ({})` 
- Block scoping means that a new scope is created `between a pair of curly brackets {}`

### 06.01. The let Keyword

`ES6` introduces the new `let` keyword for declaring variables. Prior to ES6, the only way to declare a variable in JavaScript was the var keyword. Let's see what's the difference:
- Variables declared with the `var` keyword are `function-scoped` and can be `hoisted` at the top within its scope
- Variables declared with `let` keyword are `block-scoped ({})` and they are not hoisted

> **Syntax & Example**: `06.01.script.js`
```javascript
// traditional var syntax
var techName1 = 'JavaScript';

for(var i = 1; i <= 5; i++) {
  console.log('i : ' + i); // 1,2,3,4,5
  console.log('inside block:' + techName1);
  var version1 = 100;
}
console.log('outside: ' + i); 
console.log('outside: ' + version1); 

// ------------------------------

// ES6 syntax
let techName2 = 'LiveScript';

for(let n = 1; n <= 5; n++) {
  console.log('n : ' + n); // 1,2,3,4,5
  console.log('inside block:' + techName2);
  let version2 = 100;
}

console.log(n); // undefined
console.log('outside: ' + version2);  // undefined
```

### 06.02. The const Keyword

`ES6` introduces the new `const` keyword for declaring variables. 
- Use `const` to declare a constant `(read-only / unchanging)` variable
- Constants are `read-only`, you `cannot reassign new values` to them
- In Programm/logic when the variable will never change, they can be declared as `const`
- constants are named using capital letters and underscore **Example**: const NATIVE_CITY
- `const` are also `block-scoped` like `let`
- However, you can change `object properties` or `array elements`

> **Syntax & Example**: `06.02.script.js`
```javascript
// traditional var syntax
var PI1 = 3.14;
console.log(PI1); // 3.14

PI1 = 100;
console.log(PI1); // 100

// ------------------------------

// ES6 syntax
const PI2 = 6.28;
console.log('ES6 syntax const: ' + PI2); // 6.28

PI2 = 100; // error
```
