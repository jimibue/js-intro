Section  Operators
=====================   

01. What is the Operator?
---------------------
- We know/use many operators since our initial school days, they are things like addition +, multiplication *, subtraction -, open-close round bracket ( ) or square bracket [ ]
- Operators are symbols/keywords that tell the JavaScript engine to `perform some sort of actions`
- JavaScript operators are symbols that are used to perform operations on operands
- Operators used along with our variables and constants to create
expressions to implement logic and algorithms

> **Note**: <br/>
Let us take a simple expression `var sum = 1 + 2`;
- Here 1 and 2 are called `operands` and 
- `=` & `+` are called the `operator`
- `= is the assignment` operator, `+ is the arithmetic` operator

```javascript
// Lets take a look on simple expression 
var sum = 1 + 2;

// Here 1 and 2 are called `operands` and 
// `=` & `+` are called the `operator`
// `= is the assignment` operator, `+ is the arithmetic` operator
```

**JavaScript supports the following types of operators**:
1. Arithmetic Operators
2. Assignment Operators
3. Logical Operators
4. Comparison (or Relational) Operators
5. Conditional (or ternary) Operators
6. String Operators
7. Bitwise Operators

02. Arithmetic Operators
----------------------

- Arithmetic operators are used to performing arithmetic operations (just like mathematics - calculations) on numbers/the operands

JavaScript supports the following Arithmetic operators (List of Arithmetic operators):

| Operators | Description                           | Example / Result                                |
| ----------|---------------------------------------|-------------------------------------------------|
| +         | Addition                              | 10 + 20 = 30 (Sum of num1 and num2)             |
| -         | Subtraction                           | 20 - 10 = 10 (Difference of num1 and num2)      |
| *         | Multiplication                        | 10 * 20 = 200 (Product of num1 and num2)        |
| /         | Division                              | 20 / 10 = 2 (Quotient of num1 and num2)         |
| %         | Modulus (Division Remainder)          | 20 % 10 = 0 (Remainder of num1 divided by num2) |
| ++        | Increment                             | var num1 = 100; num1++; Now num1 = 11           |
| --        | Decrement                             | var num1 = 100; num1--; Now num1 = 9            |
| **        | Exponentiation (ES2016 / ES6)         | 2 ** 2 = 4 ; 2 ** 3 = 8 (Multiply num1 for num2 times)  |
| | | |

```javascript
// Arithmetic operators
var num1 = 10;
var num2 = 4;

alert('Addition ' + (num1 + num2)); // 14
alert('Subtraction ' + (num1 - num2)); // 6
alert('Multiplication ' + num1 * num2); // 40
alert('Division ' + num1 / num2); // 2.5
alert('Modulus reminder ' + num1 % num2); // 2
num1++
alert('after Increment ' + num1); // 11
num2--; 
alert('after Decrement ' + num2); // 3

num1 = 10;
num2 = 4;
alert('Exponentiation ' + (num1 ** num2)); // (10 ** 4) = 10* 10 * 10 * 10 = 10000
```

03. Assignment Operators
---------------------

- The Assignment operators are used to assign particular values to variables

JavaScript supports the following Assignment operators (List of Assignment operators):

| Operators | Description                           | Example / Result                      |
| ----------|---------------------------------------|---------------------------------------|
| =         | Simple Assignment                     | 10 + 20 = 30; / var total = num1 + num2; (assigns a value to the variable)   |
| +=        | Add and assign                        | var num1 = 10; num1 += 20; Now num1 = 30 (assigns and adds value to the variable, num1 += 20; is equivalent to num1 = num1 + 20;) |
| -=        | Subtract and assign                   | var num1 = 10; num1 -= 5; Now num1 = 5 (assigns and subtract value to the variable, num1 -= 5; is equivalent to num1 = num1 - 5;) |
| *=        | Multiply and assign                   | var num1 = 10; num1 *= 5; Now num1 = 50 (assigns and multiply value to variable, num1 *= 5; is equivalent to num1 = num1 * 5;)    |     
| /=        | Divide and assign                     | var num1 = 10; num1 /= 5; Now num1 = 2 (assigns and divide value to the variable, num1 /= 5; is equivalent to num1 = num1 / 5;)   |
| %=        | Modulus and assign                    | var num1 = 10; num1 %= 5; Now num1 = 0 (assigns and Modulus value to the variable, num1 %= 5; is equivalent to num1 = num1 % 5;)  |
| | | | 

> **Syntax & Example**: `03.script.js`
```javascript
// Assignment operators
var num1 = 10;
var num2 = 20

// old methodology
// num1 = num1 + num2;
// console.log(num1); // 30

// new techniques
num1 += num2; 
console.log(num1); // 30

// num2 -= num1; 
// console.log(num2); // 10

// num1 *= num2; 
// console.log(num1); // 200

// num2 /= num1; 
// console.log(num2); // 2
```

04. Logical Operators
---------------------

- The Logical operators are used to make decisions based on multiple conditions
- The logical operators are typically used to combine multiple conditional statements and evaluate

JavaScript supports the following Logical operators (List of Logical operators):

| Operators       | Description                           | Example / Result                      |
| ----------------|---------------------------------------|---------------------------------------|
| &&              | Logical AND                           | x && y; (True if both operands like x and y are true) |
| &#124;&#124;    | Logical OR                            | x &#124;&#124; y; (True if either x or y is true)|
| !               | Logical NOT                           | !x; (True if x is not true)           |
| | | |

> **Syntax & Example**: `04.01.script.js`
```javascript
// Logical operators - basic examples

// && (Logical AND) - returns true if both operands are true
console.log('true && true: ', true && true);
console.log('true && false: ', true && false);
console.log('false && true: ', false && true);

// ------------------------------

// || (Logical OR) - returns true if one of the operand is true
console.log('true || true: ', true || true);
console.log('true || false: ', true || false);
console.log('false || true: ', false || true);

// ------------------------------

// ! (Logical NOT) True if operand is not true (means I will be true if other is false)
var isSeniorCitizen = true;

var isYoungGeneration = !isSeniorCitizen;
console.log('isYoungGeneration: ', isYoungGeneration);
```
<hr/>

> **Syntax & Example**: `04.02.script.js`
```javascript
// Logical operators - real world scenario/example

// check credit/loan eligibility - (if applicant have HIGH INCOME & GOOD CREDIT SCORE, he is eligible for credit/loan)
var isEarningHighIncome = true;
var isGoodCibilScore = false;
var isEligibleForLoan;

// check eligibility with && Logical AND operator
isEligibleForLoan = isEarningHighIncome && isGoodCibilScore;
alert('isEligibleForLoan: ' + isEligibleForLoan);

// check eligibility with || Logical OR operator
isEligibleForLoan = isEarningHighIncome || isGoodCibilScore;
alert('isEligibleForLoan: ' + isEligibleForLoan);

// ! Logical NOT
var isLoanRefused = !isEligibleForLoan;
alert('isLoanRefused: ' + isLoanRefused);
```

05. Comparison (or Relational) Operators
---------------------
05. Comparison Operators
---------------------
05. Relational Operators
---------------------

- The JavaScript comparison operator compares the two operands
- It compares two values in a Boolean fashion
- The comparison operators are used to determine the similarity and difference between different variables

JavaScript supports the following Comparison (or Relational) operators (List of Comparison (or Relational) operators):

| Operators | Description                           | Example / Result                      |
| ----------|---------------------------------------|---------------------------------------|
| ==  <br/>(Loose Equality Operator)      | Is equal to / identical               | x == y    (True if x is equal to y)     |
| === <br/>(Strict Equality Operator)      | Eqaul/identical value and identical type| x === y (True if x is equal to y, and they are of the same type) |
| !=        | Not equal to / different              | x != y (True if x is not equal to y)           |
| !==       | Not identical    / different value or different type | x !== y )True if x is not equal to y, or they are not of the same type) |
| <         | Less than                             | x < y (True if x is less than y)|
| >         | Greater than                          | x > y    (True if x is greater than y)|
| <=        | Less than or equal to                    | x <= y (True if x is less than or equal to y) |
| >=        | Greater than or equal to                | x >= y (True if x is greater than or equal to y)|
| | | |

> **Syntax & Example**: `05.script.js`
```javascript
// Comparison (or Relational) operators
var num1 = 25;
var num2 = 35;
var num3 = "25";
 
alert(num1 == num3);  // true
alert(num1 === num3); // false
alert(num1 != num2);  // true
alert(num1 !== num3); // true
alert(num1 < num2);   // true
alert(num1 > num2);   // false
alert(num1 <= num2);  // true
alert(num1 >= num2);  // false
```

06. Conditional (? or ternary) Operator
---------------------
06. Conditional Operator
---------------------
06. Ternary Operator
---------------------

- Conditional Operator returns a value based on the condition, it is like if-else
- The conditional (ternary) operator is the only JavaScript operator that takes three operands 
- The conditional operator that assigns a value to a variable based on some condition
- This operator is frequently used as a shortcut/short-hand method for the if statement
- **Syntax**: variablename = (condition) ? TRUE value: FALSE value 

| Operators | Description                           | Example / Result                      |
| ----------|---------------------------------------|---------------------------------------|
| ?         | Ternary operator                      | var result = x < y ? 'x is smaller' : 'y is smaller' (short hand method to write if condition)  |
| | | |

> **Syntax & Example**: `06.script.js`
```javascript
// Conditional (? or ternary) Operator

// age category
var currentAge = 100;
var category;

category = (currentAge < 18) ? 'Minor' : 'Major';
alert('AGE category: ' + category);

// fees category
var isAuthorisedMember = true;
var fees;

fees = (isAuthorisedMember == true) ? 5 : 10;
alert('fees / charges: ' + fees); 
```

 String Operators
---------------------

Variables can also have string values, `+ operator` can be used to concatenate strings as well as numbers.

There are two operators which can also be used be for strings:

| Operators | Description                           | Example / Result                      |
| ----------|---------------------------------------|---------------------------------------|
| +         | Concatenation                         | string1 + string2 (Concatenation of string1 and string2) |
| +=        | Concatenation assignment              | string1 += string2 (Appends the str2 to the str1) |
| | | |

> **Syntax & Example**: `script.js`
```javascript
// String Operators
var message1 = "Hello";
var message2 = " World!";
 
alert(message1 + message2); // Outputs: Hello World!
 
message1 += message2;
alert(message1); // Outputs: Hello World!
```

08. Operator precedence
---------------------

- If an expression has more than one operator, the `execution order is defined by their precedence`, or the implicit priority order of operators
- Operator precedence determines/describes the way in which operators are parsed with respect to each other / `order in which operations are performed`
- The operations inside the `parentheses ()` are computed first
- If many operations have the same precedence (like addition and subtraction), they are `computed from left to right`

> **Syntax & Example**: `08.script.js`
```javascript
// Operator precedence
var result1 = 10 + 2 * 5
alert('10 + 2 * 5 =  ' + result1); // answer is 20 NOT 60 (12 * 5 ), actually * or multiplication have higher precedence so the actual calculation is like 10 + ( 2*5 ) = 10 + 10 = 20

// change precedence with `parentheses ()` 
var result2 = (10 + 2) * 5;
alert('(10 + 2) * 5 =  ' + result2); // (12) * 5 = 60

// same precedence operators
var result3 = 10 + 5 - 2
alert('10 + 5 - 2 =  ' + result3); // 13 first addition than subtraction

var result4 = 10 + (5 - 2);
alert('10 + (5 - 2) =  ' + result4); // 13 first subtraction ie. ( ) than addition
```
