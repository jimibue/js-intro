Section  Array
===================== 

01. What is an Array?
---------------------

- An Array is a special type of variable/object which `consists of / stores multiple values`
- Arrays are complex variables that allow us to store more than one value or a group of values under a single variable name
- Arrays are defined with `square brackets [ ]` and with `new` keyword
- Array items are normally separated with `commas,`
- Arrays are `zero-indexed` i.e. the first element of an array is at index/position 0
- An array is `ordered collection`, where we have a 0th, 1st, a 2nd, and so on elements
- Each value (an `element`) in an array has a `numeric position`, known as its `index`, `starts from 0`, so that the first array element position/index is `arr[0]` not arr[1]

#### Different ways to create/define an Array

There are 3 main ways to construct an array:
1. By array literal 
2. By creating an instance of Array directly (using the new keyword)
3. By using an Array constructor (using the new keyword)

02. Create Array by array literal
---------------------

- The simplest way to create an array in JavaScript is enclosing a `comma-separated list of values in square brackets [ ]`
- var myArray = [element0, element1, ..., elementN];

```javascript
// create array with array literal ie. [] square bracket

// var myArray = [element0, element1, ..., elementN];

var arrColors = ['Red', 'Green', 'Blue', 'Orange'];
console.log(arrColors); // show all elements

// ------------------------------

var arrCities = ['Delhi', 'Mumbai', 'Kolkota','Bengaluru','Chennai'];
console.log(arrCities[1]); // show 1st index ie. 2nd positioned element

// ------------------------------

var arrTechnologies = [];
arrTechnologies[0] = 'Java';
arrTechnologies[1] = 'Python';
arrTechnologies[2] = 'C';
console.log(arrTechnologies);
console.log('Total Elements: ' + arrTechnologies.length);
```

03. Create Array by creating an instance of array directly
---------------------
03. Create Array by creating an instance of array directly (using `new` keyword)
---------------------

- Array instance can be created using the `new` keyword `new Array()`
- var myArray = new Array(); OR var myArray = Array();

```javascript
// create array with new keyword

// var myArray = new Array();

var arrColors = new Array();

arrColors[0] = 'Red'
arrColors[1] = 'Green'
arrColors[2] = 'Blue'
arrColors[3] = 'Orange'
console.log(arrColors); // show all elements

// read/get array items/elements
for (let i = 0; i < arrColors.length; i++) {
  alert(arrColors[i]);
}

// ------------------------------

var arrCities = Array();
arrCities[0] = 'Delhi';
arrCities[1] = 'Mumbai';
arrCities[2] = 'DeKolkotalhi';
arrCities[3] = 'Bengaluru';
arrCities[4] = 'Chennai';
console.log(arrCities); // show all elements

// ------------------------------

var arrTechnologies = new Array();

// add new array items/elements
for (let i = 0; i <= 5; i++) {
  arrTechnologies[i] = 'JavaScript';
}

console.log(arrTechnologies); // show all elements
```

04. Create Array by using an array constructor
---------------------
04. Create Array by using an array constructor (using `new` keyword)
---------------------

- Array instance can be created using the `new` keyword `new Array() passing arguments` in constructor so that we don't have to provide value explicitly
- var myArray = new Array(element0, element1, ..., elementN);

```javascript
// create array with new keyword Array constructor passing parameter

// var myArray = new Array(element0, element1, ..., elementN);

var arrColors = new Array('Red', 'Green', 'Blue', 'Orange');
console.log(arrColors); // show all elements

// ------------------------------

var arrCities = new Array('Delhi', 'Mumbai', 'Kolkota','Bengaluru','Chennai');
console.log(arrCities); // show all elements

// ------------------------------

var arrJsFrameworks = new Array('jQuery','Angular','React','Node','Vue','Express','D3');
console.log(arrJsFrameworks); // show all elements
```

05. Getting the Length of an Array
---------------------

- The `length` property returns the `length of an array`, `total number of elements` in an array
- `length` property brings back an `array length - the fixed amount of items` stored in the array
- The array length is always greater than the index of any of its element `(Array length = last array index + 1)`
- The maximum length allowed for an array is `4,294,967,295`
- myarray.length

```javascript
// get/retrieve/find array length

// myarray.length

var arrColors = new Array('Red', 'Green', 'Blue', 'Orange');
console.log(arrColors.length);

// ------------------------------

var arrCities = new Array('Delhi', 'Mumbai', 'Kolkota','Bengaluru','Chennai');
console.log(arrCities.length);

// ------------------------------

var arrJsFrameworks = new Array('jQuery','Angular','React','Node','Vue','Express','D3');
console.log(arrJsFrameworks.length);
```

06. Accessing Looping through an Array Elements
---------------------
06. Loop through an Array Elements
---------------------

- Array elements can be accessed by their `index using the square bracket notation ie. [index]`
- Arrays are `zero-indexed` i.e. the first element of an array is at index/position 0
- An array is `ordered collection`, where we have a 0th, 1st, a 2nd, and so on elements
- Each value (an `element`) in an array has a `numeric position`, known as its `index`, `starts from 0`, so that the first array element is `arr[0]` not arr[1]
- One can use `for loop` in coordination with array `length` property to access each element of an array in sequential order
- myarray[indexNumber], myarray[0] // get first array element

> **Syntax & Example**: `06.01.script.js`
```javascript
// access/loop through array element

// myarray[indexNumber], myarray[0]

var arrColors = new Array('Red', 'Green', 'Blue', 'Orange');

console.log(arrColors[0]); // Red
console.log(arrColors[2]); // Blue

// ------------------------------

var arrCities = new Array('Delhi', 'Mumbai', 'Kolkota', 'Bengaluru', 'Chennai');
console.log(arrCities[1]); // Mumbai
console.log(arrCities[4]); // Chennai

// ------------------------------

var arrJsFrameworks = new Array('jQuery', 'Angular', 'React', 'Node', 'Vue', 'Express', 'D3');
console.log(arrJsFrameworks[3]); // Node
console.log(arrJsFrameworks[5]); // Express

// Loop through an Array Elements
for (let i = 0; i < arrJsFrameworks.length; i++) {
  document.write('<li>'+arrJsFrameworks[i] + '</li>');
}
```

07. Adding Editing an Array Elements
---------------------

- One can add/edit an array element by simply specifying `array[index] and value` ie. `myarray[5]='value'`
- If array `index exists it will simply edit` the old value and update the array else it will add an element to the array
- `push()` method add a new element at the `end of an array`
- `unshift()` method add a new element at the `beginning of an array`
- myarray[indexNumber]='value', myarray[2]='value', myarray.push('value'), myarray.unshift('value')

> **Syntax & Example**: `07.01.script.js`
```javascript
// add/edit array element

// myarray[indexNumber]='value', myarray[2]='value', myarray.push('value'), myarray.unshift('value')

var arrColors = new Array('Red', 'Green', 'Blue', 'Orange');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// add an element at the end of the array
arrColors.push('Cyan');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// add multiple elements at the end of the array
arrColors.push('Magenta','Yellow');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// ------------------------------

// add multiple elements at the start of the array
arrColors.unshift('Black','White');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// ------------------------------

// edit 1st index ie. 'white' to 'pink'
arrColors[1] = 'pink';
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);
```

08. Removing Deleting an Array Elements
---------------------

- `pop()` method `remove the last element` from an array
- `shift()` method remove the `first element` from an array
- myarray.pop(), myarray.shift()

> **Note**: <br/>
The `push() and pop() methods runs faster` than unshift() and shift(). Because push() and pop() methods add and remove elements at the end of an array, therefore, the elements do not move. unshift() and shift() add and remove elements at the beginning of the array that requires re-indexing/re-structuring of the whole array.

```javascript
// remove array element from start and end

// myarray.pop(), myarray.shift()

var arrColors = new Array('Red', 'Green', 'Blue', 'Orange');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// remove an element from the end of the array
arrColors.pop();
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// ------------------------------

// remove an element from the start of the array
let startElement = arrColors.shift();
console.log(startElement);
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);
```

09. Array properties and methods
---------------------

> **Syntax & Example**: `` 
```javascript

// length
var arrColors = new Array('Red', 'Green', 'Blue', 'Orange');
console.log(arrColors.length);

// isArray() - check if array (check the type of variable is array)
var arrCities = new Array('Delhi', 'Mumbai', 'Kolkota','Bengaluru','Chennai');
console.log(Array.isArray(arrCities));
console.log(Array.isArray('I am Dinanath'));

// indexOf() - get index/location of provided value
var arrJsFrameworks = new Array('jQuery','Angular','React','Node','Vue','Express','D3');
console.log(arrJsFrameworks.indexOf('React'));

// splice values
console.log(arrJsFrameworks.splice(1,3)));

// reverse array
console.log(arrJsFrameworks.reverse()));

// concatenate array
let newArray = arrColors.concat(arrCities);

// sort
let newSortedColorsArray = arrColors.sort();
console.log(newSortedColorsArray);
console.log(numberArray.sort());

/* exact ascending sort
let sortedValues = numberArray.sort(function(num1,num2){
  return num1 - num2;
})
*/

/* exact descending sort
let sortedValues = numberArray.sort(function(num1,num2){
  return num2 - num1;
})
*/

// find
console.log(numberArray.find(40));

```