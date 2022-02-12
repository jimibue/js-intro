Data types
===================== 

01. Data types
---------------------

A variable in JavaScript can contain `any type of data`. Data types specify what `kind of data` can be stored and manipulated within the variable in a program. In JavaScript, different data types are available to hold different types of values/data. There are `two main categories/types` of data types in JavaScript:
1. Primitive (Primary or Value) data type
    - String
    - Number
    - Boolean
    - Undefined
    - Null
    - Symbol (newly introduced in ES6)
2. Non-primitive (Reference or Composite) data type
    - Array
    - Object
    - Function

02. Primitive data type
---------------------
02. Primitive, Primary or Value data type
---------------------

Primitive data types can `hold only one value at a time`. Primitives are `compared by value`. Two values are strictly equal if they have the same value.

There are different types of primitive data types in JavaScript. They are as follows:

| Data Type       | Description                                                                 |
| ----------------|-----------------------------------------------------------------------------|
| String          | represent textual data. e.g. "welcome" or 'to javascript'                   |
| Number          | represents numeric values e.g. 10, 100.29                                   |
| Boolean         | represents boolean value either false or true                               |
| Undefined       | represents an undefined value (a variable declared but value not assigned)     |
| Null            | represents null i.e. no value at all                                        |
| | |

### 02.01. String

- The string data type is used to `represent textual data (i.e. sequences of characters)`
- Strings hold information in `words/text`
- A string in JavaScript must be surrounded by `"double"` or `'single'` quotes
- **Example**: `02.script.js`

```js
var firstName = "Java"; 
var lastName = 'Script';
```

### 02.02. Number

- The number data type simply defined without quotes is used to represent positive or negative numbers with or without a decimal place
- Many mathematical operations can be done on numbers, e.g. `multiplication *, division /, addition +, subtraction`, and so on
- **Example**: 

```js
var age = 25; 
var id = 1;
```

### 02.03. Boolean

- The Boolean data type can hold only two values: `true or false`
- true = ON / yes / correct / 1, false = OFF / no, incorrect / 0
- Boolean data types is often used in `conditional testing` of code
- **Example**: 

```js
var isDone = true; 
var isMarried = false;
```

### 02.04. Undefined

- The meaning of undefined is `“value is not assigned”`
- The undefined data type can only have one value-the special value undefined
- A Variable has been declared, but `not assigned a value`
- A variable `without a value`, The type is also undefined
- **Example**: 

```js
var firstName;
var country;
```

### 02.05. Null

- A null value means that there is no value
- The special value which represents `“ nothing”, “empty” or “value unknown”`
- It is not equivalent to an empty string ('' or ' ', "", " "), it is simply nothing
- **Example**: 

```js
var firstName = null;
var id = null;
```

03. Non-primitive data type
---------------------
03. Non-primitive, Reference or Composite data type
---------------------

- Non-primitive/Reference data types can hold `collections of values and more complex entities`
- Non-primitive values are being compared by `reference` instead of value
- Data does not store in the variables but stored on the heap - a dynamically allocated memory reference
- Its a pointer to a location in memory, accessed by reference

There are different types of non-primitive data types in JavaScript. They are as follows:

| Data Type       | Description                                                           |
| ----------------|-----------------------------------------------------------------------|
| Array           | represents a group of similar value (multiple values in one variable) |
| Object          | represents an instance through which we can access members (property & value) |
| Function        | represents function (bunch/block of line to execute once)             |
| | |

04. JavaScript has Dynamic Types
---------------------

We have two types of programming languages:
1. Static languages
    - Declare a variable, the type of the variable is set and it cannot be changed in the future
2. Dynamic languages
    - Variable can change at run time (one variable can store different types of value as per requirement, we again assign any value any time as per logic, requirements)

- A JavaScript `variable can contain/hold any data ie. any type of data`, A variable at one moment can be a number and at another moment be a string, boolean 
- It simply means that `same variable can be used to hold different data types`
- JavaScript is a dynamic type language, means you don't need to specify a type of the variable because it is dynamically used by JavaScript engine

```javascript
let name = 'JavaScript';
name = false;
name = 100;

alert(name);
alert(typeof(name));
```

05. The typeof Operator
---------------------

- The typeof operator returns the `type of the argument`
- It’s useful to process values of different types differently or want to perform a quick data type check
- The typeof operator can be used to find out what `type of data a variable` or operand contains
- It can be used with or without parentheses `(typeof(x)` or `typeof x`

```javascript
// use typeof to find data type of variables
// Strings
alert(typeof "Hello"); // "string"
alert(typeof '12'); // "string"

// Numbers
console.log(typeof(100)); // "number"
console.log(typeof(100.29)); // "number"

// Booleans
alert(typeof true); // "boolean"
alert(typeof(1 == 2)); // "boolean"

// Undefined
console.log(typeof undefined); // "undefined"

var init;
console.log('type of init: ' + typeof init); // "undefined"

// Null
console.log(typeof null); // "object"
var initObject = null;
console.log('type of initObject: ' + typeof initObject);  // "object"

// Objects
alert(typeof {name: 'Dinanath', age: 35}); // "object"
alert(typeof document); // "object"
alert(typeof window); // "object"

// Arrays
var techArray = [];
console.log('type of techArray: ' + typeof techArray);  // "object"
console.log(typeof ['JavaScript', 'jQuery', 'Angular']);  // "object"
console.log(typeof ['Dinanath', 35, 'India']);  // "object"

// Functions
console.log(typeof function(){}); // "function"
console.log(typeof alert); // "function"
console.log(typeof window.alert); // "function"

// Symbol
alert(typeof Symbol("dob")); // "symbol"
```

 Type conversion
---------------------
 typeof parseInt parseFloat
---------------------

- Type conversion is nothing but taking a variable and changing its data type as per needs requirements and logic
- In JavaScript as and when we take an `input in the form, its data type is a string by default`, so do any calculations we need to `parse` to `integer/int or the number`
- Data type conversion can be either implicit (automatic) or explicit (forcefully/manually)

> **ax & Example**: 
```javascript
// Number to String conversion
let num1 = 100;

console.log(num1);
console.log(typeof num1);
console.log(num1.length); //error as number type variables does not have length

num1 = String(num1);

console.log(num1);
console.log(typeof num1);
console.log(num1.length);

// Boolean to String conversion
let boolValue1 = String(false);

console.log(boolValue1);
console.log(typeof boolValue1);

// Date to String conversion
let curDate = String(new Date());

console.log(curDate);
console.log(typeof curDate);

// Array to String conversion
let numArray = String([1,2,3,4,5]);

console.log(numArray);
console.log(typeof numArray);

// toString() method
let curString = (1000).toString
let curString = (true).toString

//  String to Number conversion

let num2 = '100';

console.log(num2);
console.log(typeof num2);
console.log(num2.toFixed(2)); //helps to fix decimals - error as string type variables does not have any properties or methods related to number

num2 = Number(num2);

console.log(num2);
console.log(typeof num2);
console.log(num2.toFixed(2));

// Boolean to Number conversion
let boolValue2 = Number(false);

// parseInt() method

let curNumber = parseInt('100');
let curNumber = parseFloat('100.41');
```

07. Type coercion
---------------------

- Type coercion simply refer to the JavaScript ability to convert type automatically (developer does not do it but JavaScript does it for us)
- Type coercion is the process of converting a value from one type to another (such as string to a number, object to boolean, and so on)
- JavaScript engine converts the type as per its rules (implicit ie. automatic conversion of data type)

> **ax & Example**: 
```javascript
const num1 = '20';
const num1 = 10;

const sum = (num1) + (num2);
console.log(sum);
console.log(typeof sum);
```
