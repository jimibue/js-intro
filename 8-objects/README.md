Section 12. Objects
===================== 

12.01. Real Life Objects
---------------------
12.01. Object Properties and Method examples
---------------------

- In real life almost `everything is an object`. 
  - For example: Human, Car, Building, Bike, Pen, Chair, Monitor, Keyboard, Vehicle, Mobile, Computer etc.
- Let's have a look on some Objects with Properties and Methods:

| Object        | Properties                              | Methods                            |
|---------------|-----------------------------------------|------------------------------------|
| Person        | Person.name = 'dinanath'; <br/> Person.weight = 65; <br/> Person.color = 'fair' | Person.walk(); <br/>  Person.talk();  <br/> Person.eat();   |
| Bike          | Bike.brand = 'bajaj'; <br/> Bike.model = 'discover'; <br/> Bike.color = 'blue'; <br/> Bike.length = 60; <br/> Bike.height = 30; <br/>                                             | Bike.start(); <br/> Bike.break(); <br/> Bike.stop();      |
| Watch         | Watch.type = 'analog'; <br/> Watch.price = 750; <br/>                           | Watch.showTime();  <br/> Watch.setAlarm();        |
| | | |

> **Note**: <br/>
As a practice think of any other object in your surrounding and list down its Properties and Methods

12.02. What is an Object?
---------------------
12.02. What are the Objects?
---------------------

- JavaScript is an `object-based language` and in JavaScript, almost everything is an object or acts like/as an object
- An object is a `special/complex` data type that allows you to `store collections of data`
- An object is a kind of container/declaration where we can group various `data, properties, and behaviors` under one roof (group related variables)
- A JavaScript object is just a collection of `named values referred to as properties` of the object
- Objects are defined with `curly braces { }`, the properties of an object are written in pairs (`propertyName: value`)
- An object contains properties, defined as a `key-value pair` (Objects are a collection of `key-value pair`)
- A property `key (name) is always a string`, but the value which it stores can be any data types, like strings, numbers, booleans, or complex data types like arrays, function and other objects
- JavaScript object properties can be accessed through two methods:
  1. .DOT notation: `object.firstName` 
  2. []Bracket notation: `object['firstName']`

### Different ways to create/define an Object

There are 3 main ways to construct an object:
1. By object literal 
2. By creating an `instance` of Object directly (using `new` keyword)
3. By using an `Object constructor` (using `new` keyword)

12.03. Object literal
---------------------

- The simplest way to create an object in JavaScript is enclosing a `comma-separated list of properties:values and methods in curly braces { }`
- var MyObject = { property1: value1, property2: value2.....propertyN: valueN }  

> **Syntax & Example**:
```javascript
// create object with object literal
  
// var MyObject = { property1: value1, property2: value2.....propertyN: valueN }

// empty object
var HumanObj = {};

console.log(HumanObj);

console.log('// ------------------------------');

// object with properties
var TechnologyObj = { 'name': 'JavaScript', 'version': 6, 'type': 'script', 'isStable': true }

console.log(TechnologyObj.name);
console.log(TechnologyObj['isStable']);

console.log('// ------------------------------');

// object properly alignment/arranged for readability - with quotes
var VehicleObj1 = {
  'type': 'LWM',
  'brand': 'Maruti',
  'model': 'Alto-100',
  'color': 'White',
  'isHighEndModel': true,
  'price': 400000,
  keyStart: function () {
    console.log(this.model + ' started!');
  }
}

console.log(VehicleObj1.brand);
console.log(VehicleObj1['color']);
VehicleObj1.keyStart();

console.log('// ------------------------------');

// object properly alignment/arranged for readability - with quotes
var VehicleObj2 = {
  type: 'LWM',
  brand: 'Maruti',
  model: 'Alto-100',
  color: 'White',
  isHighEndModel: true,
  price: 400000,
  keyStart: function () {
    alert(this.model + 'started!');
  }
}

console.log(VehicleObj1.brand);
console.log(VehicleObj1['color']);
VehicleObj1.keyStart();

console.log('// ------------------------------');
```

12.04. Creating an instance of Object directly
---------------------
12.04. Creating an instance of object directly (using the new keyword)
---------------------

- Array instance can be created using the `new` keyword `new Array() with or without passing arguments/properties-methods` in constructor
- var MyObject = new Object(); OR var MyObject = Object();

> **Syntax & Example**:
```javascript
// create object with new keyword

// var MyObject = new Object(); OR var MyObject = Object();

// object with properties
var TechnologyObj = new Object();

TechnologyObj.name = 'JavaScript';
TechnologyObj.version = 6;
TechnologyObj.type = 'script';
TechnologyObj.isStable = true

console.log(TechnologyObj.name);
console.log(TechnologyObj['type']);

console.log('// ------------------------------');

// object properly alignment/arranged for readability - with quotes
var VehicleObj1 = {
  'type': 'LWM',
  'brand': 'Maruti',
  'model': 'Alto-100',
  'color': 'red',
  'isHighEndModel': true,
  'price': 400000,
  keyStart: function () {
    console.log(this.model + ' started!');
  }
}

// access property with .DOT notation
console.log(VehicleObj1.brand);

// access property with []Bracket notation
console.log(VehicleObj1['color']);
VehicleObj1.keyStart();

console.log('// ------------------------------');

// object properly alignment/arranged for readability - without quotes
var VehicleObj2 = {
  type: 'LWM',
  brand: 'Tata',
  model: 'Safari',
  color: 'White',
  isHighEndModel: false,
  price: 1400000,
  keyStart: function () {
    alert(this.model + 'started!');
  }
}

// access property with .DOT notation
console.log(VehicleObj2.brand);

// access property with []Bracket notation
console.log(VehicleObj2['color']);
VehicleObj1.keyStart();

console.log('// ------------------------------');
```

12.05. Object constructor
---------------------
12.05. Object constructor (using the new keyword)
---------------------

- In this method, create a function with arguments 
- Each argument value can be assigned in the current object by using `this` keyword, `this` keyword refers to the `current object`

> **Syntax & Example**: 
```javascript
// create an object with new keyword - Object constructor with function

function Technology(name, version, type) {
  this.name = name;
  this.version = version;
  this.type = type;
  console.log(this.name);
  console.log(this.type);
}

let JavaScript = new Technology('JavaScript', 6, 'Script Language');
console.log(JavaScript.version);

console.log('// ------------------------------');

function Vehicle(brand,model,color,price) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.price = price;
  this.keyStart = function () {
    console.log(this.model + ' started!');
  }
}

var Maruti = new Vehicle('Maruti','Alto-100','White',400000);
Maruti.keyStart();

console.log('// ------------------------------');
```

12.06. Accessing objects properties
---------------------
12.06. Looping through Objects properties
---------------------

- To access or get the value of a property, you can use the `dot .`, or `square bracket []` notation
- We can iterate through the `key-value pairs` of an object using the `for...in loop`
- MyObject.propertyName; OR MyObject[propertyName]; OR MyObject['propertyName']

> **Syntax & Example**: 
```javascript
// access/loop thourgh array element

// MyObject.propertyName; OR MyObject[propertyName]; OR MyObject['propertyName']

var Person = {
  name:'Dinanath',
  domain:'IT/Software',
  gender:'Male',
  city:'Mumbai',
  country:'India'
}

console.log(Person.name);
console.log(Person['domain']);

console.log('// ------------------------------');

// Loop through an Array Elements
for (props in Person) {
  console.log(Person[props])
}

console.log('// ------------------------------');
```

12.07. Removing Deleting objects properties
---------------------

- The `delete` operator can be used to completely remove properties from an object
- delete MyObject.propertyName;

> **Note**: <br/>
The `delete` operator only removes an `object property or array element`. It does not work/does not affect variables or declared functions.

> **Syntax & Example**: 
```javascript
// remove/delete Object's Properties

// delete MyObject.propertyName;

var Person = {
  name:'Dinanath',
  domain:'IT/Software',
  gender:'Male',
  city:'Mumbai',
  country:'India'
}

delete Person.name
console.log(Person);
console.log(Person.name);
console.log(Person['domain']);
```

12.08. Manipulating by Value Vs Reference
---------------------

In JavaScript we have two categories of types:
1. Value Types (Primitives = Basic type) - Primitives are copied by their value
2. Reference Types (Objects = Complex type) - Objects are copied by their Reference/Location in memory

### 1. Value Types (Primitives)

  1. Number
  2. String
  3. Boolean
  4. Undefined
  5. Null
  6. Symbol (ES6)

### 2. Reference Types (Objects)

  1. Object
  2. Function 
  3. Array

> **Syntax & Example**: 
```
???

```

12.09. The Window object 
---------------------

- Window Object the global variable/global object `available in the browser environment`, represents the browser window in which the script is running
- Simply, the window object `represents a window in a browser`
- The Window interface represents a window containing a DOM (Document Object Model)
- Window is the object of browser (`The Browser Object Model (BOM)`), it is not the object of javascript
- The Browser Object Model (BOM) allows JavaScript to "communicate/talk to" the browser
- In `Browser -> Inspect Element -> Console Panel` -> Type `Window`, check different properties and methods available

> **Syntax & Example**: 
```javascript

// Methods
window.console.log('Console! Hello, Welcome to JavaScript');

window.alert('Alert! Hello, Welcome to JavaScript');

// const namePrompt = window.prompt();
const namePrompt = window.prompt('Enter Your Name');
window.alert(namePrompt);


if(window.confirm('Are you sure?')) {
  window.console.log('YES - selected');
} else {
  window.console.log('NO - clicked');
}

// Properties

// full/complete browser window height & width
outerHeight = window.outerHeight;
outerWidth = window.outerWidth;

console.log('outerHeight -', outerHeight, '::', 'outerWidth -', outerWidth );

// document/page height & width

innerHeight = window.innerHeight;
innerWidth = window.innerWidth;

console.log('innerHeight -', innerHeight, '::', 'innerWidth -', innerWidth );

// scroll position

console.log('scrollY', window.scrollY);
console.log('scrollX', window.scrollX);

// location 

console.log('current window location/url', window.location);
console.log('current window location/url', window.location.href);

// location redirect

window.location.href = 'https://www.google.com';

// window location/visited history

window.history.go(-1);

let totalPagesVisitedHistory = window.history.length;

// current browser details - navigator

let curBrowser = window.navigator.appName; 
//window.navigator.userAgent;
window.navigator.platform;
window.navigator.vendor;

```

12.10. The Math Object
---------------------

- The Math object allows to perform mathematical tasks
- Math object provides several constants and methods to perform mathematical operation  (like `min, max, sqrt, pi, round, random`, etc)

> **Syntax & Example**: 
```javascript

let pieValue = Math.PI;

console.log(Math.E);
console.log(Math.round(2.6));

console.log(Math.ceil(2.6));
console.log(Math.floor(2.6));

console.log(Math.sqrt(64));
console.log(Math.abs(-10)); //return absolute ie positive number

console.log(Math.pow(8,2)); //64
console.log(Math.pow(10,3)); //10 * 10 * 10 = 1000

console.log(Math.min(20, 5, 9, 15, 2));
console.log(Math.max(20, 5, 9, 15, 2));

console.log(Math.random());
console.log(Math.random() * 20 + 1); // random number till 20
console.log(Math.floor(Math.random() * 20 + 1)); // random number till 20 without any decimals

```

12.11. Date and Time
=====================

- The Date object is used to deal/work with date and time
- Simply, the JavaScript date object can be used to get date, day, month and year
- Date objects are created with `new Date()` - Date constructor can be used to create date object, It provides methods to get and set day, month, year, hour, minute and seconds

> **Syntax & Example**: 
```javascript

const today = new Date();
console.log('today is:', today);

const date1 = new Date('March 29 1980');
const date2 = new Date('09-10-1980');

let currentDate = new Date();

const currentDateToday = currentDate.getDate();
const currentDayToday = currentDate.getDay();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getYear();
const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();

const newBirthDate = currentDate.setMonth(5);
console.log(newBirthDate);

```