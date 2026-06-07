export const jsQuestions = [
  {
    id: "js-1",

    question: "What is JavaScript and why is it used?",

    difficulty: "Basic",

    shortAnswer:
      "JavaScript is a programming language used to create interactive and dynamic web pages. It runs in browsers and can also be used on servers.",

    detailedAnswer: `JavaScript is one of the core technologies of web development, alongside HTML and CSS.

HTML provides structure.
CSS provides styling.
JavaScript provides behavior and interactivity.

JavaScript allows developers to:

1. Respond to user actions
   - Button clicks
   - Form submissions
   - Keyboard events

2. Manipulate web pages
   - Add, remove, or update content dynamically

3. Communicate with servers
   - Fetch data from APIs
   - Submit forms asynchronously

4. Build complete applications
   - Frontend applications
   - Backend services using Node.js
   - Mobile apps
   - Desktop applications

JavaScript is interpreted by browsers and executes directly on the client side.

Modern JavaScript is also used outside browsers through environments like Node.js, making it a full-stack programming language.`,

    keyPoints: [
      "JavaScript adds interactivity to websites",

      "Works together with HTML and CSS",

      "Can manipulate page content dynamically",

      "Supports API communication",

      "Can run in browsers and on servers",
    ],

    codeExample: `<!-- HTML -->

<button id="btn">
  Click Me
</button>

<script>

const button =
  document.getElementById("btn");

button.addEventListener(
  "click",
  () => {
    alert("Hello JavaScript!");
  }
);

</script>`,

    language: "javascript",

    commonMistakes: [
      "Confusing JavaScript with Java",

      "Thinking JavaScript only works in browsers",

      "Using JavaScript for styling instead of CSS",

      "Not understanding the roles of HTML, CSS, and JavaScript",
    ],

    thinkingProcess: `Step 1: Define JavaScript

Step 2: Explain its role in web development

Step 3: Compare it with HTML and CSS

Step 4: Show common use cases

Step 5: Mention modern applications like Node.js`,

    realWorldApplication:
      "JavaScript powers interactive websites such as YouTube, Facebook, Amazon, and modern web applications. It is used for frontend interfaces, backend APIs, mobile apps, and desktop software.",

    interviewTip:
      "A strong answer explains that HTML creates structure, CSS creates presentation, and JavaScript creates behavior. Interviewers often expect this comparison.",
  },
  {
    id: "js-2",

    question: "What is the difference between JavaScript and ECMAScript?",

    difficulty: "Basic",

    shortAnswer:
      "ECMAScript is the official specification (standard), while JavaScript is a programming language implementation of that specification.",

    detailedAnswer: `Many developers use JavaScript and ECMAScript interchangeably, but they are not exactly the same.

ECMAScript:
- A standardized specification created by ECMA International.
- Defines the rules, syntax, features, and behavior of the language.
- Acts as a blueprint for scripting languages.

JavaScript:
- A programming language based on the ECMAScript specification.
- Developed by Netscape in 1995.
- Implemented by browsers and runtime environments.

Think of it like this:

ECMAScript = Recipe
JavaScript = Actual Dish

ECMAScript Versions:

ES5 (2009)
- Strict mode
- JSON support

ES6 / ES2015 (2015)
- let and const
- Arrow functions
- Classes
- Template literals
- Modules

ES2016+
- Async/Await
- Optional chaining
- Nullish coalescing
- Many modern features

Browser engines such as V8 (Chrome), SpiderMonkey (Firefox), and JavaScriptCore (Safari) implement ECMAScript standards.

When people say "modern JavaScript," they usually mean modern ECMAScript features supported by JavaScript engines.`,

    keyPoints: [
      "ECMAScript is a language specification",

      "JavaScript is an implementation of ECMAScript",

      "ECMAScript defines rules and features",

      "JavaScript engines implement ECMAScript",

      "ES6 introduced many modern JavaScript features",
    ],

    codeExample: `// ECMAScript 5 (ES5)

var name = "John";

function greet() {
  return "Hello " + name;
}



// ECMAScript 6 (ES2015)

const name2 = "John";

const greet2 = () => {
  return \`Hello \${name2}\`;
};



// Modern ECMAScript

const user = {
  profile: {
    city: "London"
  }
};

console.log(
  user?.profile?.city
); // London

console.log(
  user?.address?.city
); // undefined`,

    language: "javascript",

    commonMistakes: [
      "Thinking JavaScript and ECMAScript are completely different languages",

      "Assuming ECMAScript is a browser",

      "Not knowing that ES6 refers to ECMAScript 2015",

      "Confusing JavaScript engines with ECMAScript",
    ],

    thinkingProcess: `Step 1: Define ECMAScript

Step 2: Define JavaScript

Step 3: Explain the relationship between them

Step 4: Introduce ECMAScript versions

Step 5: Show examples of modern ECMAScript features`,

    realWorldApplication:
      "When developers use features like let, const, async/await, optional chaining, and modules, they are using ECMAScript standards implemented by JavaScript engines.",

    interviewTip:
      'A common interview answer is: "ECMAScript is the specification, and JavaScript is the implementation." This concise explanation is usually enough to demonstrate understanding.',
  },
  {
    id: "js-3",

    question: "How do you add JavaScript to an HTML page?",

    difficulty: "Basic",

    shortAnswer:
      "JavaScript can be added to an HTML page using Inline JavaScript, Internal JavaScript, or External JavaScript files.",

    detailedAnswer: `JavaScript can be included in HTML in three main ways.

1. Inline JavaScript
   - Written directly inside an HTML element.
   - Suitable for small examples.
   - Not recommended for large applications.

2. Internal JavaScript
   - Written inside a <script> tag within the HTML document.
   - Usually placed before the closing </body> tag.
   - Useful for small projects.

3. External JavaScript
   - Written in a separate .js file.
   - Linked using the src attribute.
   - Recommended for real-world applications.

Why External JavaScript is Preferred:

- Better code organization
- Easier maintenance
- Reusable across multiple pages
- Browser caching improves performance
- Separation of concerns

Script Placement:

Traditionally:
- Before </body>

Modern Approach:
- Inside <head> using the defer attribute

The defer attribute ensures HTML loads first and JavaScript executes after the document is parsed.`,

    keyPoints: [
      "JavaScript can be added inline, internally, or externally",

      "External JavaScript is the recommended approach",

      "Use the <script> element to include JavaScript",

      "The src attribute links external files",

      "defer improves page loading performance",
    ],

    codeExample: `<!-- 1. Inline JavaScript -->

<button
  onclick="alert('Hello!')">
  Click Me
</button>



<!-- 2. Internal JavaScript -->

<script>

  console.log(
    "Internal JavaScript"
  );

</script>



<!-- 3. External JavaScript -->

<script src="app.js"></script>



<!-- Modern Best Practice -->

<head>

  <script
    src="app.js"
    defer>
  </script>

</head>`,

    language: "javascript",

    commonMistakes: [
      "Using large amounts of inline JavaScript",

      "Forgetting the src attribute path",

      "Loading scripts before HTML is available",

      "Not using defer for external scripts",

      "Mixing HTML and JavaScript unnecessarily",
    ],

    thinkingProcess: `Step 1: Explain the three ways to add JavaScript

Step 2: Compare their use cases

Step 3: Show syntax examples

Step 4: Discuss script placement

Step 5: Recommend modern best practices`,

    realWorldApplication:
      "Most production websites load JavaScript from external files such as app.js, main.js, or bundle.js to keep code organized and improve maintainability.",

    interviewTip:
      "Mention that external JavaScript with the defer attribute is the modern best practice. Interviewers often look for knowledge of script loading optimization.",
  },
  {
    id: "js-4",

    question: "What are variables in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "Variables are named containers used to store and manage data in a JavaScript program.",

    detailedAnswer: `Variables are used to store values that can be accessed and manipulated throughout a program.

Think of a variable as a labeled storage box:

Variable Name → Label
Value → Data inside the box

JavaScript variables can store many types of data:

- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Functions
- Null
- Undefined

Variables are declared using:

var   (legacy)
let   (recommended for changing values)
const (recommended for values that should not be reassigned)

Variable Naming Rules:

1. Must start with a letter, _ or $
2. Cannot start with a number
3. Cannot contain spaces
4. Cannot use reserved keywords
5. JavaScript is case-sensitive

Good variable names improve readability and maintainability.

Examples:

userName
totalPrice
isLoggedIn
cartItems

Bad examples:

x
a1
temp123

(unless used in very small contexts)

Modern JavaScript follows the rule:

- Use const by default
- Use let when the value needs to change
- Avoid var`,

    keyPoints: [
      "Variables store data",

      "Variables have names and values",

      "JavaScript uses var, let, and const",

      "Meaningful names improve readability",

      "Use const by default in modern JavaScript",
    ],

    codeExample: `// String

const name = "John";



// Number

let age = 25;



// Boolean

const isStudent = true;



// Array

const skills = [
  "HTML",
  "CSS",
  "JavaScript"
];



// Object

const user = {
  name: "John",
  age: 25
};



// Updating a variable

let counter = 0;

counter++;

console.log(counter);
// 1`,

    language: "javascript",

    commonMistakes: [
      "Using var instead of let or const",

      "Using unclear variable names",

      "Reassigning const variables",

      "Creating variables without declarations",

      "Using reserved keywords as variable names",
    ],

    thinkingProcess: `Step 1: Define a variable

Step 2: Explain why variables are needed

Step 3: Show different data types

Step 4: Explain declaration keywords

Step 5: Demonstrate best naming practices`,

    realWorldApplication:
      "Variables are used everywhere in applications, from storing user information and shopping cart data to managing API responses and application state.",

    interviewTip:
      "Explain that variables are containers for data and mention that modern JavaScript primarily uses const and let instead of var.",
  },
  {
    id: "js-5",

    question: "What is the difference between var, let, and const?",

    difficulty: "Basic",

    shortAnswer:
      "var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, while const is block-scoped and cannot be reassigned.",

    detailedAnswer: `JavaScript provides three keywords for declaring variables:

1. var
2. let
3. const

VAR:

- Function-scoped
- Can be redeclared
- Can be reassigned
- Hoisted and initialized with undefined
- Not recommended in modern JavaScript

LET:

- Block-scoped
- Cannot be redeclared in the same scope
- Can be reassigned
- Hoisted but remains in the Temporal Dead Zone (TDZ)

CONST:

- Block-scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized when declared
- Preferred for values that should not change

Important Note:

const prevents reassignment, not mutation.

This means objects and arrays declared with const can still have their contents modified.

Modern Best Practice:

- Use const by default
- Use let when a value must change
- Avoid var

This improves code readability and reduces bugs caused by accidental redeclarations.`,

    keyPoints: [
      "var is function-scoped",

      "let and const are block-scoped",

      "let can be reassigned",

      "const cannot be reassigned",

      "Use const by default in modern JavaScript",
    ],

    codeExample: `// VAR

var name = "John";

var name = "Jane"; // Allowed

console.log(name);
// Jane



// LET

let age = 25;

age = 26; // Allowed

// let age = 30;
// Error: Cannot redeclare



// CONST

const PI = 3.14159;

// PI = 3.14;
// Error: Assignment to constant variable



// CONST OBJECT

const user = {
  name: "John"
};

user.name = "Jane"; // Allowed

console.log(user.name);
// Jane



// BLOCK SCOPE

if (true) {

  let city = "London";

  const country = "UK";

}

// console.log(city);
// Error

// console.log(country);
// Error`,

    language: "javascript",

    commonMistakes: [
      "Using var in modern applications",

      "Trying to reassign a const variable",

      "Thinking const makes objects immutable",

      "Ignoring block scope behavior",

      "Not understanding the Temporal Dead Zone",
    ],

    thinkingProcess: `Step 1: Introduce var, let, and const

Step 2: Compare scope differences

Step 3: Compare reassignment rules

Step 4: Explain hoisting behavior

Step 5: Discuss modern best practices`,

    realWorldApplication:
      "Applications use const for configuration values, API URLs, and object references, while let is used for counters, loops, and values that change during execution.",

    interviewTip:
      "Interviewers often focus on scope. Mention that var is function-scoped while let and const are block-scoped, then explain why modern JavaScript prefers const and let.",
  },
  {
    id: "js-6",

    question: "What are JavaScript data types?",

    difficulty: "Basic",

    shortAnswer:
      "JavaScript data types define the kind of value a variable can store. They are divided into Primitive and Reference data types.",

    detailedAnswer: `Data types determine what kind of data a variable holds and what operations can be performed on it.

JavaScript has two main categories of data types:

1. Primitive Data Types
2. Reference (Non-Primitive) Data Types

PRIMITIVE DATA TYPES

1. String
   - Represents text

2. Number
   - Represents integers and floating-point numbers

3. Boolean
   - true or false

4. Undefined
   - Variable declared but not assigned a value

5. Null
   - Intentional absence of a value

6. Symbol
   - Unique identifier introduced in ES6

7. BigInt
   - Used for very large integers

REFERENCE DATA TYPES

1. Object
   - Stores key-value pairs

2. Array
   - Ordered collection of values

3. Function
   - Reusable block of code

4. Date, Map, Set, etc.
   - Built-in object types

Important Difference:

Primitive values are copied by value.
Reference values are copied by reference.

JavaScript is dynamically typed, meaning variables can hold different types of values during execution.`,

    keyPoints: [
      "JavaScript has Primitive and Reference data types",

      "There are 7 primitive data types",

      "Objects, arrays, and functions are reference types",

      "JavaScript is dynamically typed",

      "Primitive and reference values behave differently in memory",
    ],

    codeExample: `// STRING

const name = "John";



// NUMBER

const age = 25;

const price = 99.99;



// BOOLEAN

const isLoggedIn = true;



// UNDEFINED

let city;

console.log(city);
// undefined



// NULL

const data = null;



// SYMBOL

const id = Symbol("user");



// BIGINT

const bigNumber =
  12345678901234567890n;



// OBJECT

const user = {
  name: "John",
  age: 25
};



// ARRAY

const skills = [
  "HTML",
  "CSS",
  "JavaScript"
];



// FUNCTION

function greet() {
  return "Hello";
}`,

    language: "javascript",

    commonMistakes: [
      "Confusing null and undefined",

      "Thinking arrays are primitive types",

      "Not understanding reference behavior",

      "Assuming JavaScript has separate integer and float types",

      "Ignoring BigInt for large numbers",
    ],

    thinkingProcess: `Step 1: Define what a data type is

Step 2: Explain primitive types

Step 3: Explain reference types

Step 4: Show examples of each type

Step 5: Discuss dynamic typing and memory behavior`,

    realWorldApplication:
      "Applications use strings for names, numbers for calculations, booleans for conditions, arrays for lists, and objects for storing structured user or product data.",

    interviewTip:
      "A strong answer mentions all 7 primitive data types and clearly explains the difference between primitive and reference values.",
  },
  {
    id: "js-7",

    question:
      "What is the difference between primitive and reference data types?",

    difficulty: "Basic",

    shortAnswer:
      "Primitive data types store actual values directly, while reference data types store a reference (memory address) to the value.",

    detailedAnswer: `JavaScript data types are divided into two categories:

1. Primitive Data Types
2. Reference Data Types

PRIMITIVE DATA TYPES

Primitive values are stored directly in memory.

Types:
- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

Characteristics:
- Immutable
- Stored by value
- Copying creates a completely new value

REFERENCE DATA TYPES

Reference values are stored in memory, and variables hold a reference (address) to that memory location.

Types:
- Object
- Array
- Function
- Date
- Map
- Set

Characteristics:
- Stored by reference
- Multiple variables can point to the same object
- Changes through one reference affect all references

MEMORY BEHAVIOR

Primitive:
Variable → Actual Value

Reference:
Variable → Memory Address → Actual Object

This difference is important because it affects assignment, copying, comparison, and function behavior.

Understanding primitive vs reference types is fundamental for avoiding bugs related to object mutation.`,

    keyPoints: [
      "Primitive values are stored directly",

      "Reference values store memory addresses",

      "Primitives are copied by value",

      "Objects and arrays are copied by reference",

      "Object mutations affect all references pointing to the same object",
    ],

    codeExample: `// PRIMITIVE EXAMPLE

let a = 10;

let b = a;

b = 20;

console.log(a);
// 10

console.log(b);
// 20

// a is unchanged because
// primitives are copied by value




// REFERENCE EXAMPLE

const user1 = {
  name: "John"
};

const user2 = user1;

user2.name = "Jane";

console.log(user1.name);
// Jane

console.log(user2.name);
// Jane

// Both variables point
// to the same object




// ARRAY EXAMPLE

const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log(arr1);
// [1, 2, 3, 4]

console.log(arr2);
// [1, 2, 3, 4]




// COPYING OBJECTS SAFELY

const original = {
  name: "John"
};

const copy = {
  ...original
};

copy.name = "Jane";

console.log(original.name);
// John

console.log(copy.name);
// Jane`,

    language: "javascript",

    commonMistakes: [
      "Thinking objects are copied by value",

      "Mutating objects accidentally",

      "Comparing objects incorrectly",

      "Not creating copies before modifying data",

      "Confusing null as a reference type in modern discussions",
    ],

    thinkingProcess: `Step 1: Define primitive types

Step 2: Define reference types

Step 3: Explain memory storage differences

Step 4: Demonstrate copying behavior

Step 5: Show real-world mutation examples`,

    realWorldApplication:
      "When managing application state in React, Redux, or other frameworks, understanding reference types is essential to avoid unexpected updates and rendering issues.",

    interviewTip:
      "Interviewers often ask why changing one object variable affects another. Explain that objects are copied by reference, meaning both variables point to the same memory location.",
  },
  {
    id: "js-8",

    question: "What is the typeof operator?",

    difficulty: "Basic",

    shortAnswer:
      "The typeof operator is used to determine the data type of a value or variable and returns the type as a string.",

    detailedAnswer: `The typeof operator is a built-in JavaScript operator that returns the type of a value.

Syntax:

typeof value

or

typeof(variable)

The result is always returned as a string.

Common Return Values:

- "string"
- "number"
- "boolean"
- "undefined"
- "object"
- "function"
- "symbol"
- "bigint"

Why is typeof useful?

1. Debugging code
2. Validating data types
3. Writing conditional logic
4. Preventing runtime errors

Special Cases:

typeof null

returns:

"object"

This is a historical JavaScript bug that exists for backward compatibility.

typeof array

also returns:

"object"

To properly detect arrays, use:

Array.isArray()

Functions are technically objects, but typeof returns:

"function"

which makes function detection easier.`,

    keyPoints: [
      "typeof returns a string describing a value type",

      "Useful for debugging and validation",

      'typeof null returns "object"',

      'Arrays return "object"',

      'Functions return "function"',
    ],

    codeExample: `// STRING

console.log(
  typeof "Hello"
);
// "string"



// NUMBER

console.log(
  typeof 100
);
// "number"



// BOOLEAN

console.log(
  typeof true
);
// "boolean"



// UNDEFINED

let city;

console.log(
  typeof city
);
// "undefined"



// OBJECT

const user = {
  name: "John"
};

console.log(
  typeof user
);
// "object"



// ARRAY

const skills = [
  "HTML",
  "CSS"
];

console.log(
  typeof skills
);
// "object"

console.log(
  Array.isArray(skills)
);
// true



// FUNCTION

function greet() {}

console.log(
  typeof greet
);
// "function"



// NULL

console.log(
  typeof null
);
// "object"



// BIGINT

console.log(
  typeof 123n
);
// "bigint"



// SYMBOL

console.log(
  typeof Symbol()
);
// "symbol"`,

    language: "javascript",

    commonMistakes: [
      "Using typeof to detect arrays",

      'Expecting typeof null to return "null"',

      "Confusing objects and arrays",

      "Not understanding that the result is always a string",

      "Using typeof for complex type checking",
    ],

    thinkingProcess: `Step 1: Define the typeof operator

Step 2: Show basic syntax

Step 3: Demonstrate common return values

Step 4: Explain special cases like null and arrays

Step 5: Show practical type checking examples`,

    realWorldApplication:
      "When processing API responses, validating user input, or debugging applications, developers frequently use typeof to ensure values are of the expected type.",

    interviewTip:
      'A classic interview question is: "What does typeof null return?" The correct answer is "object", which is a long-standing JavaScript bug preserved for compatibility.',
  },
  {
    id: "js-9",

    question: "What is the difference between null and undefined?",

    difficulty: "Basic",

    shortAnswer:
      "undefined means a value has not been assigned, while null is an intentional assignment that represents no value or an empty value.",

    detailedAnswer: `Both null and undefined represent the absence of a value, but they are used in different situations.

UNDEFINED

undefined means a variable exists but has not been assigned a value.

JavaScript automatically assigns undefined in situations such as:

- Declared variables without values
- Missing function arguments
- Functions without a return statement
- Accessing non-existent object properties

NULL

null is an intentional value assigned by a developer.

It represents:

- Empty value
- No object
- Unknown value
- Value intentionally removed

Key Difference:

undefined → JavaScript assigned it

null → Developer assigned it

TYPE DIFFERENCES

typeof undefined
returns:
"undefined"

typeof null
returns:
"object"

The typeof null behavior is a historical bug kept for compatibility.

COMPARISON

null == undefined
// true

null === undefined
// false

Because:

== performs type coercion

=== checks both value and type

Modern JavaScript often uses null when intentionally representing "no value" and undefined when a value simply hasn't been provided yet.`,

    keyPoints: [
      "undefined is assigned by JavaScript",

      "null is assigned intentionally by developers",

      'typeof undefined returns "undefined"',

      'typeof null returns "object"',

      "null === undefined is false",
    ],

    codeExample: `// UNDEFINED

let name;

console.log(name);
// undefined




// FUNCTION WITHOUT RETURN

function greet() {}

console.log(greet());
// undefined




// MISSING PROPERTY

const user = {
  name: "John"
};

console.log(user.age);
// undefined




// NULL

let selectedUser = null;

console.log(selectedUser);
// null




// TYPE CHECKS

console.log(
  typeof undefined
);
// "undefined"

console.log(
  typeof null
);
// "object"




// COMPARISON

console.log(
  null == undefined
);
// true

console.log(
  null === undefined
);
// false`,

    language: "javascript",

    commonMistakes: [
      "Using null and undefined interchangeably",

      'Expecting typeof null to return "null"',

      "Not understanding loose vs strict equality",

      "Returning undefined when null is more appropriate",

      "Using undefined intentionally instead of null",
    ],

    thinkingProcess: `Step 1: Define undefined

Step 2: Define null

Step 3: Compare their meanings

Step 4: Explain type differences

Step 5: Demonstrate equality comparisons`,

    realWorldApplication:
      "API responses often use null to indicate missing database values, while undefined frequently appears when accessing properties that do not exist or when optional parameters are omitted.",

    interviewTip:
      'A common interview answer is: "undefined means a value has not been assigned, while null means a value has been intentionally set to empty." Mentioning who assigns the value (JavaScript vs developer) is usually appreciated.',
  },
  {
    id: "js-10",

    question: "What is type coercion in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "Type coercion is the automatic or explicit conversion of a value from one data type to another in JavaScript.",

    detailedAnswer: `JavaScript is a dynamically typed language, which means values can be converted between different data types.

This conversion process is called type coercion.

There are two types of coercion:

1. Implicit Coercion
2. Explicit Coercion

IMPLICIT COERCION

JavaScript automatically converts values when performing operations.

Examples:

"5" + 1
Result: "51"

JavaScript converts the number to a string.

"5" - 1
Result: 4

JavaScript converts the string to a number.

true + 1
Result: 2

JavaScript converts true to 1.

EXPLICIT COERCION

The developer intentionally converts values.

Common Methods:

Number()
String()
Boolean()
parseInt()
parseFloat()

WHY IT MATTERS

Type coercion can be helpful but can also introduce unexpected bugs if developers don't understand how JavaScript performs conversions.

Modern best practice is to use strict equality (===) and explicit conversions whenever possible.`,

    keyPoints: [
      "Type coercion means converting one type into another",

      "JavaScript supports implicit and explicit coercion",

      "Implicit coercion happens automatically",

      "Explicit coercion is controlled by the developer",

      "Use strict equality (===) to avoid unexpected coercion",
    ],

    codeExample: `// IMPLICIT COERCION

console.log(
  "5" + 1
);
// "51"

console.log(
  "5" - 1
);
// 4

console.log(
  true + 1
);
// 2

console.log(
  false + 1
);
// 1




// LOOSE EQUALITY

console.log(
  5 == "5"
);
// true

console.log(
  0 == false
);
// true




// STRICT EQUALITY

console.log(
  5 === "5"
);
// false

console.log(
  0 === false
);
// false




// EXPLICIT COERCION

console.log(
  Number("100")
);
// 100

console.log(
  String(100)
);
// "100"

console.log(
  Boolean(1)
);
// true

console.log(
  parseInt("25px")
);
// 25`,

    language: "javascript",

    commonMistakes: [
      "Using == instead of ===",

      "Assuming all strings behave like numbers",

      "Ignoring automatic type conversions",

      "Not converting user input explicitly",

      "Misunderstanding truthy and falsy values",
    ],

    thinkingProcess: `Step 1: Define type coercion

Step 2: Explain implicit coercion

Step 3: Explain explicit coercion

Step 4: Show common examples

Step 5: Recommend best practices using === and explicit conversions`,

    realWorldApplication:
      "Form inputs return strings by default. Developers often use Number() or parseInt() to convert user input before performing calculations.",

    interviewTip:
      'Interviewers frequently ask why "5" + 1 returns "51" while "5" - 1 returns 4. Explain that JavaScript performs different coercion rules depending on the operator being used.',
  },
  {
    id: "js-11",

    question: "What is the difference between == and ===?",

    difficulty: "Basic",

    shortAnswer:
      "== compares values after performing type coercion, while === compares both value and type without type coercion.",

    detailedAnswer: `JavaScript provides two equality operators:

1. Loose Equality (==)
2. Strict Equality (===)

LOOSE EQUALITY (==)

The == operator compares values after attempting type conversion.

Examples:

5 == "5"
Result: true

JavaScript converts the string "5" into the number 5 before comparison.

0 == false
Result: true

JavaScript converts false into 0.

null == undefined
Result: true

Because JavaScript treats them as loosely equal.

STRICT EQUALITY (===)

The === operator compares both:

- Value
- Data Type

No type conversion occurs.

Examples:

5 === "5"
Result: false

Because one is a number and the other is a string.

0 === false
Result: false

Because number and boolean are different types.

WHY USE === ?

Strict equality is safer because:

- Predictable behavior
- Fewer bugs
- Easier debugging
- Better code quality

Modern JavaScript best practice is to use === and !== unless you specifically need type coercion.`,

    keyPoints: [
      "== performs type coercion",

      "=== does not perform type coercion",

      "=== compares both value and type",

      "=== is generally safer",

      "Modern JavaScript prefers ===",
    ],

    codeExample: `// LOOSE EQUALITY

console.log(
  5 == "5"
);
// true

console.log(
  0 == false
);
// true

console.log(
  null == undefined
);
// true




// STRICT EQUALITY

console.log(
  5 === "5"
);
// false

console.log(
  0 === false
);
// false

console.log(
  null === undefined
);
// false




// MORE EXAMPLES

console.log(
  "10" == 10
);
// true

console.log(
  "10" === 10
);
// false

console.log(
  true == 1
);
// true

console.log(
  true === 1
);
// false




// BEST PRACTICE

const age = 18;

if (age === 18) {
  console.log(
    "Adult"
  );
}`,

    language: "javascript",

    commonMistakes: [
      "Using == when === is intended",

      "Forgetting that == performs type conversion",

      "Comparing booleans and numbers with ==",

      "Not understanding null == undefined",

      "Assuming == and === behave the same",
    ],

    thinkingProcess: `Step 1: Introduce both equality operators

Step 2: Explain loose equality

Step 3: Explain strict equality

Step 4: Compare common examples

Step 5: Discuss best practices`,

    realWorldApplication:
      "When validating user input, checking API responses, or comparing values in business logic, developers use === to avoid unexpected results caused by automatic type conversion.",

    interviewTip:
      'A common interview question is: "What is the output of 5 == "5" and 5 === "5"?" Explain that == converts types before comparison while === checks both value and type directly.',
  },
  {
    id: "js-12",

    question: "What are arithmetic operators in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "Arithmetic operators are used to perform mathematical calculations such as addition, subtraction, multiplication, division, and more.",

    detailedAnswer: `Arithmetic operators allow JavaScript programs to perform mathematical operations on numbers.

Common Arithmetic Operators:

1. Addition (+)
   - Adds two values

2. Subtraction (-)
   - Subtracts one value from another

3. Multiplication (*)
   - Multiplies values

4. Division (/)
   - Divides values

5. Modulus (%)
   - Returns the remainder

6. Exponentiation (**)
   - Raises a number to a power

7. Increment (++)
   - Increases a value by 1

8. Decrement (--)
   - Decreases a value by 1

These operators are commonly used in:

- Calculations
- Counters
- Loops
- Financial applications
- Data processing

Operator Precedence:

JavaScript follows mathematical order of operations:

1. Parentheses ()
2. Exponentiation **
3. Multiplication, Division, Modulus
4. Addition, Subtraction

Understanding arithmetic operators is fundamental because they are used in almost every JavaScript application.`,

    keyPoints: [
      "Arithmetic operators perform mathematical operations",

      "The most common operators are +, -, *, and /",

      "Modulus (%) returns the remainder",

      "Exponentiation (**) raises a number to a power",

      "Increment and decrement modify values by 1",
    ],

    codeExample: `// ADDITION

console.log(
  10 + 5
);
// 15




// SUBTRACTION

console.log(
  10 - 5
);
// 5




// MULTIPLICATION

console.log(
  10 * 5
);
// 50




// DIVISION

console.log(
  10 / 5
);
// 2




// MODULUS

console.log(
  10 % 3
);
// 1




// EXPONENTIATION

console.log(
  2 ** 3
);
// 8




// INCREMENT

let count = 5;

count++;

console.log(count);
// 6




// DECREMENT

count--;

console.log(count);
// 5




// OPERATOR PRECEDENCE

console.log(
  10 + 5 * 2
);
// 20

console.log(
  (10 + 5) * 2
);
// 30`,

    language: "javascript",

    commonMistakes: [
      "Confusing division and modulus",

      "Forgetting operator precedence",

      "Using ++ incorrectly in expressions",

      "Expecting modulus to return a decimal value",

      "Not using parentheses when needed",
    ],

    thinkingProcess: `Step 1: Define arithmetic operators

Step 2: Explain each operator

Step 3: Demonstrate calculations

Step 4: Explain operator precedence

Step 5: Show real-world examples`,

    realWorldApplication:
      "Arithmetic operators are used in shopping carts, banking systems, calculators, dashboards, game development, analytics applications, and nearly every application that processes numerical data.",

    interviewTip:
      "Interviewers often ask about the modulus operator (%). Mention that it returns the remainder after division and is commonly used to check if numbers are even or odd.",
  },
  {
    id: "js-13",

    question: "What are comparison operators in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "Comparison operators compare two values and return a boolean result (true or false).",

    detailedAnswer: `Comparison operators are used to compare values in JavaScript.

They always return:

- true
- false

Common Comparison Operators:

1. Equal To (==)
   - Checks value equality

2. Strict Equal To (===)
   - Checks value and type equality

3. Not Equal To (!=)
   - Checks if values are different

4. Strict Not Equal To (!==)
   - Checks value and type difference

5. Greater Than (>)
   - Checks if left value is larger

6. Less Than (<)
   - Checks if left value is smaller

7. Greater Than or Equal To (>=)

8. Less Than or Equal To (<=)

Comparison operators are commonly used in:

- Conditions
- Loops
- Form validation
- Business logic
- Authentication systems

Modern JavaScript prefers strict comparisons (=== and !==) because they avoid unexpected type coercion.`,

    keyPoints: [
      "Comparison operators return boolean values",

      "Used in conditions and decision making",

      "=== is preferred over ==",

      "!== is preferred over !=",

      "Frequently used with if statements",
    ],

    codeExample: `// EQUALITY

console.log(
  5 == "5"
);
// true

console.log(
  5 === "5"
);
// false




// NOT EQUAL

console.log(
  10 != "10"
);
// false

console.log(
  10 !== "10"
);
// true




// GREATER THAN

console.log(
  10 > 5
);
// true




// LESS THAN

console.log(
  10 < 5
);
// false




// GREATER THAN OR EQUAL

console.log(
  10 >= 10
);
// true




// LESS THAN OR EQUAL

console.log(
  5 <= 10
);
// true




// PRACTICAL EXAMPLE

const age = 18;

if (age >= 18) {
  console.log(
    "Eligible to vote"
  );
}`,

    language: "javascript",

    commonMistakes: [
      "Using == instead of ===",

      "Confusing assignment (=) with comparison (==)",

      "Ignoring type coercion",

      "Using loose comparisons unnecessarily",

      "Misunderstanding boolean results",
    ],

    thinkingProcess: `Step 1: Define comparison operators

Step 2: List available operators

Step 3: Show return values

Step 4: Demonstrate practical examples

Step 5: Explain modern best practices`,

    realWorldApplication:
      "Comparison operators are used in login systems, age verification, product filtering, form validation, and decision-making logic throughout applications.",

    interviewTip:
      "Interviewers often ask about == vs === when discussing comparison operators. Mention that strict equality is preferred because it avoids automatic type conversion.",
  },
  {
    id: "js-14",

    question: "What are logical operators in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "Logical operators are used to combine or modify boolean expressions and return a boolean result.",

    detailedAnswer: `Logical operators help control program flow by combining multiple conditions.

JavaScript provides three main logical operators:

1. AND (&&)

Returns true only if all conditions are true.

2. OR (||)

Returns true if at least one condition is true.

3. NOT (!)

Reverses a boolean value.

Logical operators are commonly used in:

- Conditional statements
- Authentication systems
- Form validation
- Access control
- Business rules

Truth Tables:

AND (&&)

true && true → true
true && false → false
false && true → false
false && false → false

OR (||)

true || true → true
true || false → true
false || true → true
false || false → false

NOT (!)

!true → false
!false → true

Short-Circuit Evaluation:

&& stops when it finds a false value.
|| stops when it finds a true value.

This behavior improves performance and is commonly used in modern JavaScript.`,

    keyPoints: [
      "&& means AND",

      "|| means OR",

      "! means NOT",

      "Logical operators return boolean values",

      "Short-circuit evaluation improves efficiency",
    ],

    codeExample: `// AND

const age = 25;
const hasLicense = true;

console.log(
  age >= 18 && hasLicense
);
// true




// OR

const isAdmin = false;
const isManager = true;

console.log(
  isAdmin || isManager
);
// true




// NOT

const loggedIn = false;

console.log(
  !loggedIn
);
// true




// MULTIPLE CONDITIONS

const score = 85;

if (
  score >= 80 &&
  score <= 100
) {
  console.log(
    "Excellent"
  );
}




// SHORT-CIRCUIT

const username = "";

const displayName =
  username || "Guest";

console.log(
  displayName
);
// Guest




// LOGIN EXAMPLE

const emailVerified = true;
const accountActive = true;

if (
  emailVerified &&
  accountActive
) {
  console.log(
    "Access Granted"
  );
}`,

    language: "javascript",

    commonMistakes: [
      "Confusing && and ||",

      "Using bitwise operators instead of logical operators",

      "Forgetting operator precedence",

      "Misunderstanding short-circuit evaluation",

      "Not using parentheses for clarity",
    ],

    thinkingProcess: `Step 1: Define logical operators

Step 2: Explain AND, OR, and NOT

Step 3: Show truth table behavior

Step 4: Demonstrate short-circuit evaluation

Step 5: Apply operators to real-world conditions`,

    realWorldApplication:
      "Logical operators are heavily used in authentication, permissions, validation, filtering data, and determining whether users can access specific features.",

    interviewTip:
      "A strong answer includes short-circuit evaluation. Interviewers often ask how && and || stop evaluating once the result is already known.",
  },
  {
    id: "js-15",

    question: "What are conditional statements in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "Conditional statements allow JavaScript to execute different blocks of code based on whether a condition is true or false.",

    detailedAnswer: `Conditional statements are used to make decisions in a program.

They allow JavaScript to choose different execution paths depending on conditions.

Main Conditional Statements:

1. if
   - Executes code if condition is true

2. if...else
   - Executes one block if true and another if false

3. if...else if...else
   - Handles multiple conditions

4. switch
   - Useful when comparing a single value against multiple cases

Conditional statements rely on expressions that evaluate to:

- true
- false

Commonly used with:

- Comparison operators
- Logical operators
- Boolean values

Decision-making is one of the most important concepts in programming because it allows applications to respond differently to user actions and data.`,

    keyPoints: [
      "Conditional statements control program flow",

      "if executes code when a condition is true",

      "else handles alternative outcomes",

      "else if handles multiple conditions",

      "Conditions evaluate to true or false",
    ],

    codeExample: `// IF

const age = 20;

if (age >= 18) {
  console.log(
    "Adult"
  );
}




// IF ELSE

const score = 40;

if (score >= 50) {
  console.log(
    "Pass"
  );
} else {
  console.log(
    "Fail"
  );
}




// IF ELSE IF

const marks = 85;

if (marks >= 90) {

  console.log("Grade A");

} else if (marks >= 75) {

  console.log("Grade B");

} else {

  console.log("Grade C");

}




// BOOLEAN CONDITION

const loggedIn = true;

if (loggedIn) {

  console.log(
    "Welcome Back"
  );

}`,

    language: "javascript",

    commonMistakes: [
      "Using = instead of == or ===",

      "Writing overly complex conditions",

      "Forgetting curly braces",

      "Using nested if statements unnecessarily",

      "Ignoring logical operators",
    ],

    thinkingProcess: `Step 1: Define conditional statements

Step 2: Explain if

Step 3: Explain if...else

Step 4: Explain else if

Step 5: Demonstrate practical decision-making examples`,

    realWorldApplication:
      "Conditional statements are used in login systems, shopping carts, form validation, permissions, game logic, and nearly every application that makes decisions.",

    interviewTip:
      "Explain that conditional statements control the flow of execution based on boolean expressions. This shows understanding of program logic.",
  },
  {
    id: "js-16",

    question: "What is the ternary operator?",

    difficulty: "Basic",

    shortAnswer:
      "The ternary operator is a shorthand way to write simple if...else statements using the syntax: condition ? valueIfTrue : valueIfFalse.",

    detailedAnswer: `The ternary operator is JavaScript's only operator that takes three operands.

Syntax:

condition
  ? expressionIfTrue
  : expressionIfFalse

It provides a concise alternative to simple if...else statements.

Equivalent Example:

if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}

can be written as:

const result =
  age >= 18
    ? "Adult"
    : "Minor";

Advantages:

- Shorter syntax
- Cleaner code for simple conditions
- Useful in UI rendering

Disadvantages:

- Can become difficult to read when nested
- Not suitable for complex logic

Best Practice:

Use ternary operators only for simple decisions.
Use regular if statements for complex conditions.`,

    keyPoints: [
      "A ternary operator is shorthand for if...else",

      "Uses ? and : symbols",

      "Returns one of two values",

      "Ideal for simple conditions",

      "Avoid deeply nested ternaries",
    ],

    codeExample: `// BASIC EXAMPLE

const age = 20;

const status =
  age >= 18
    ? "Adult"
    : "Minor";

console.log(status);
// Adult




// IF ELSE EQUIVALENT

let result;

if (age >= 18) {

  result = "Adult";

} else {

  result = "Minor";

}




// EVEN OR ODD

const number = 8;

const output =
  number % 2 === 0
    ? "Even"
    : "Odd";

console.log(output);




// LOGIN STATUS

const loggedIn = true;

const message =
  loggedIn
    ? "Welcome"
    : "Please Login";

console.log(message);




// NESTED TERNARY (Avoid if possible)

const score = 85;

const grade =
  score >= 90
    ? "A"
    : score >= 75
      ? "B"
      : "C";

console.log(grade);
// B`,

    language: "javascript",

    commonMistakes: [
      "Using ternaries for complex logic",

      "Creating unreadable nested ternaries",

      "Forgetting the colon (:)",

      "Using ternaries when if statements are clearer",

      "Mixing multiple conditions without parentheses",
    ],

    thinkingProcess: `Step 1: Define the ternary operator

Step 2: Explain syntax

Step 3: Compare it with if...else

Step 4: Show practical examples

Step 5: Discuss readability and best practices`,

    realWorldApplication:
      "Ternary operators are commonly used in React, Vue, Angular, and modern JavaScript applications to conditionally render content or assign values.",

    interviewTip:
      "Mention that the ternary operator is best for simple conditions. Interviewers often appreciate when candidates prioritize readability over shorter code.",
  },
  {
    id: "js-17",

    question: "What is a switch statement?",

    difficulty: "Basic",

    shortAnswer:
      "A switch statement is a control structure that executes different blocks of code based on matching a value against multiple cases.",

    detailedAnswer: `A switch statement is an alternative to multiple if...else if conditions when comparing a single value.

Syntax:

switch(expression) {
  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
    // code
}

How it works:

1. JavaScript evaluates the expression.
2. It compares the result with each case.
3. If a match is found, the corresponding code executes.
4. The break statement stops further execution.
5. If no match exists, the default block runs.

Advantages:

- Cleaner than long if...else chains
- Easier to read
- Better for multiple fixed values

Important:

Switch uses strict comparison (===) internally.

Without break, execution continues into the next case. This behavior is called fall-through.`,

    keyPoints: [
      "Used when checking one value against many options",

      "Uses case blocks for matching values",

      "default acts like else",

      "break prevents fall-through",

      "Switch comparisons use strict equality",
    ],

    codeExample: `// BASIC SWITCH

const day = 3;

switch (day) {

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid Day");
}




// WITHOUT BREAK

const role = "admin";

switch (role) {

  case "admin":
    console.log("Admin Access");

  case "user":
    console.log("User Access");
}

// Output:
// Admin Access
// User Access




// PRACTICAL EXAMPLE

const status = "success";

switch (status) {

  case "loading":
    console.log("Loading...");
    break;

  case "success":
    console.log("Data Loaded");
    break;

  case "error":
    console.log("Something Went Wrong");
    break;

  default:
    console.log("Unknown State");
}`,

    language: "javascript",

    commonMistakes: [
      "Forgetting break statements",

      "Using switch for complex conditions",

      "Not providing a default case",

      "Expecting type coercion in case matching",

      "Creating excessively large switch blocks",
    ],

    thinkingProcess: `Step 1: Define switch

Step 2: Explain syntax

Step 3: Explain case matching

Step 4: Discuss break and default

Step 5: Show practical examples`,

    realWorldApplication:
      "Switch statements are commonly used for menu systems, user roles, status handling, keyboard shortcuts, and application state management.",

    interviewTip:
      "Interviewers often ask what happens if break is omitted. Explain fall-through behavior and provide an example.",
  },
  {
    id: "js-18",

    question: "What are loops in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "Loops are used to execute a block of code repeatedly until a specified condition is met.",

    detailedAnswer: `Loops help automate repetitive tasks by running code multiple times.

Without loops, developers would need to write the same code repeatedly.

JavaScript provides several loop types:

1. for loop
2. while loop
3. do...while loop
4. for...of loop
5. for...in loop

Why use loops?

- Process arrays
- Generate data
- Perform calculations
- Iterate through objects
- Reduce repetitive code

A loop typically consists of:

1. Initialization
2. Condition
3. Update

Example:

for (let i = 0; i < 5; i++)

Initialization:
i = 0

Condition:
i < 5

Update:
i++

Loops continue running until their condition becomes false.

Care must be taken to avoid infinite loops, which occur when the condition never becomes false.`,

    keyPoints: [
      "Loops execute code repeatedly",

      "Reduce repetitive coding",

      "Common types are for, while, and do...while",

      "Useful for arrays and collections",

      "Incorrect conditions can cause infinite loops",
    ],

    codeExample: `// FOR LOOP

for (
  let i = 1;
  i <= 5;
  i++
) {
  console.log(i);
}




// WHILE LOOP

let count = 1;

while (count <= 5) {

  console.log(count);

  count++;
}




// DO WHILE LOOP

let num = 1;

do {

  console.log(num);

  num++;

} while (num <= 5);




// FOR OF (Arrays)

const colors = [
  "red",
  "blue",
  "green"
];

for (const color of colors) {

  console.log(color);

}




// FOR IN (Objects)

const user = {
  name: "John",
  age: 25
};

for (const key in user) {

  console.log(
    key,
    user[key]
  );

}`,

    language: "javascript",

    commonMistakes: [
      "Creating infinite loops",

      "Using wrong loop type",

      "Incorrect loop conditions",

      "Forgetting to update loop variables",

      "Modifying arrays during iteration improperly",
    ],

    thinkingProcess: `Step 1: Define loops

Step 2: Explain why loops are needed

Step 3: Introduce common loop types

Step 4: Show loop structure

Step 5: Discuss infinite loop risks`,

    realWorldApplication:
      "Loops are used to process user lists, render products, calculate totals, validate data, analyze records, and handle large collections of information.",

    interviewTip:
      "A strong answer explains that loops automate repetitive tasks and briefly compares for, while, and do...while loops.",
  },
  {
    id: "js-19",

    question:
      "What is the difference between for, while, and do...while loops?",

    difficulty: "Basic",

    shortAnswer:
      "A for loop is used when the number of iterations is known, a while loop runs while a condition is true, and a do...while loop executes at least once before checking the condition.",

    detailedAnswer: `JavaScript provides multiple loop types for different situations.

FOR LOOP

Best when the number of iterations is known.

Structure:

for(initialization; condition; update)

Advantages:

- Compact syntax
- Easy to read
- Commonly used with arrays

WHILE LOOP

Best when the number of iterations is unknown.

Structure:

while(condition)

Advantages:

- Flexible
- Useful when waiting for a condition

DO...WHILE LOOP

Similar to while, but executes at least once.

Structure:

do {
  // code
} while(condition)

Advantages:

- Guarantees one execution
- Useful for menus and user input validation

Key Difference:

for:
Condition checked before execution.

while:
Condition checked before execution.

do...while:
Condition checked after execution.

This means do...while always runs at least once.`,

    keyPoints: [
      "for loops are best for known iteration counts",

      "while loops are best for unknown iteration counts",

      "do...while executes at least once",

      "for loops combine initialization, condition, and update",

      "Choosing the right loop improves readability",
    ],

    codeExample: `// FOR LOOP

for (
  let i = 1;
  i <= 5;
  i++
) {
  console.log(i);
}




// WHILE LOOP

let count = 1;

while (count <= 5) {

  console.log(count);

  count++;
}




// DO WHILE LOOP

let num = 1;

do {

  console.log(num);

  num++;

} while (num <= 5);




// DO WHILE EXECUTES ONCE

let value = 10;

do {

  console.log(
    "Runs once"
  );

} while (value < 5);




// ARRAY ITERATION

const skills = [
  "HTML",
  "CSS",
  "JS"
];

for (
  let i = 0;
  i < skills.length;
  i++
) {
  console.log(skills[i]);
}`,

    language: "javascript",

    commonMistakes: [
      "Using while when for is simpler",

      "Forgetting to update loop variables",

      "Creating infinite loops",

      "Not understanding do...while execution order",

      "Using the wrong loop for the problem",
    ],

    thinkingProcess: `Step 1: Introduce the three loop types

Step 2: Explain for loop

Step 3: Explain while loop

Step 4: Explain do...while loop

Step 5: Compare their execution behavior`,

    realWorldApplication:
      "for loops are commonly used for arrays, while loops for user-driven processes, and do...while loops for menus, prompts, and validation systems.",

    interviewTip:
      "Mention that do...while always executes at least once. This is the most commonly tested difference between these loops.",
  },
  {
    id: "js-20",

    question: "What are break and continue statements?",

    difficulty: "Basic",

    shortAnswer:
      "break completely exits a loop or switch statement, while continue skips the current iteration and moves to the next iteration of a loop.",

    detailedAnswer: `break and continue are control statements used inside loops.

BREAK

The break statement immediately terminates a loop or switch statement.

When break executes:

- Loop stops instantly
- Remaining iterations are skipped
- Execution continues after the loop

CONTINUE

The continue statement skips the current iteration.

When continue executes:

- Remaining code in the current iteration is skipped
- Loop proceeds to the next iteration

Key Difference:

break:
Stops the entire loop.

continue:
Skips only one iteration.

These statements improve efficiency by allowing loops to avoid unnecessary work.`,

    keyPoints: [
      "break exits the loop completely",

      "continue skips the current iteration",

      "break works in loops and switch statements",

      "continue only works in loops",

      "Useful for optimizing loop execution",
    ],

    codeExample: `// BREAK EXAMPLE

for (
  let i = 1;
  i <= 10;
  i++
) {

  if (i === 5) {
    break;
  }

  console.log(i);
}

// Output:
// 1 2 3 4




// CONTINUE EXAMPLE

for (
  let i = 1;
  i <= 5;
  i++
) {

  if (i === 3) {
    continue;
  }

  console.log(i);
}

// Output:
// 1 2 4 5




// SEARCH EXAMPLE

const users = [
  "John",
  "Jane",
  "Mike"
];

for (
  let i = 0;
  i < users.length;
  i++
) {

  if (users[i] === "Jane") {

    console.log(
      "User Found"
    );

    break;
  }

}




// EVEN NUMBERS ONLY

for (
  let i = 1;
  i <= 10;
  i++
) {

  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}

// Output:
// 2 4 6 8 10`,

    language: "javascript",

    commonMistakes: [
      "Using break instead of continue",

      "Creating unreachable code after break",

      "Overusing continue and reducing readability",

      "Forgetting that break exits the entire loop",

      "Using continue outside loops",
    ],

    thinkingProcess: `Step 1: Define break

Step 2: Define continue

Step 3: Compare their behavior

Step 4: Demonstrate examples

Step 5: Show practical use cases`,

    realWorldApplication:
      "break is used when searching data and stopping after a match is found, while continue is used to skip invalid records, odd numbers, or unwanted data during processing.",

    interviewTip:
      'A common interview question is: "What is the difference between break and continue?" Answer: break terminates the loop, while continue skips only the current iteration.',
  },
  {
    id: "js-21",

    question: "What is a function in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "A function is a reusable block of code that performs a specific task and can be executed whenever needed.",

    detailedAnswer: `A function is one of the most important concepts in JavaScript.

Functions help developers:

- Reuse code
- Organize logic
- Improve maintainability
- Reduce duplication

Instead of writing the same code multiple times, you can place it inside a function and call it whenever needed.

A function can:

- Accept input (parameters)
- Process data
- Return output

Basic Syntax:

function functionName() {
  // code
}

Functions can be:

1. Declared
2. Assigned to variables
3. Passed as arguments
4. Returned from other functions

JavaScript treats functions as first-class citizens, meaning they can be stored and manipulated like any other value.

Functions are the foundation of:

- Event handling
- APIs
- Frameworks
- Object-oriented programming
- Functional programming`,

    keyPoints: [
      "Functions are reusable blocks of code",

      "Functions improve code organization",

      "Functions can accept parameters",

      "Functions can return values",

      "JavaScript treats functions as first-class objects",
    ],

    codeExample: `// SIMPLE FUNCTION

function greet() {

  console.log(
    "Hello World"
  );

}

greet();




// FUNCTION WITH PARAMETERS

function greetUser(name) {

  console.log(
    "Hello " + name
  );

}

greetUser("John");




// FUNCTION WITH RETURN

function add(a, b) {

  return a + b;

}

const result =
  add(5, 10);

console.log(result);
// 15




// REUSABILITY

function calculateTax(
  amount
) {

  return amount * 0.18;

}

console.log(
  calculateTax(1000)
);

console.log(
  calculateTax(2000)
);`,

    language: "javascript",

    commonMistakes: [
      "Forgetting to call the function",

      "Not returning a value when needed",

      "Using global variables unnecessarily",

      "Creating overly large functions",

      "Confusing parameters and arguments",
    ],

    thinkingProcess: `Step 1: Define a function

Step 2: Explain why functions are useful

Step 3: Show parameters and return values

Step 4: Demonstrate reusability

Step 5: Explain real-world importance`,

    realWorldApplication:
      "Functions are used everywhere in JavaScript applications, including form validation, API calls, calculations, event handling, and business logic.",

    interviewTip:
      "Mention that JavaScript functions are first-class citizens, which means they can be stored in variables, passed as arguments, and returned from other functions.",
  },
  {
    id: "js-22",

    question:
      "What is the difference between a function declaration and a function expression?",

    difficulty: "Basic",

    shortAnswer:
      "A function declaration is hoisted and can be called before it is defined, while a function expression is assigned to a variable and cannot be called before assignment.",

    detailedAnswer: `JavaScript provides multiple ways to create functions.

The two most common are:

1. Function Declaration
2. Function Expression

FUNCTION DECLARATION

Syntax:

function greet() {
  return "Hello";
}

Characteristics:

- Has a function name
- Fully hoisted
- Can be called before declaration
- Commonly used for reusable functions

FUNCTION EXPRESSION

Syntax:

const greet = function() {
  return "Hello";
};

Characteristics:

- Stored in a variable
- Not fully hoisted
- Cannot be called before assignment
- Useful when functions are treated as values

HOISTING DIFFERENCE

Function declarations are moved to the top of their scope during execution.

Function expressions behave like variables.

This means:

Declaration:
Can be called before definition.

Expression:
Cannot be called before assignment.

Modern JavaScript often uses function expressions and arrow functions because they work well with const and support functional programming patterns.`,

    keyPoints: [
      "Function declarations are hoisted",

      "Function expressions are assigned to variables",

      "Declarations can be called before definition",

      "Expressions cannot be called before assignment",

      "Arrow functions are a common type of function expression",
    ],

    codeExample: `// FUNCTION DECLARATION

sayHello();

function sayHello() {

  console.log(
    "Hello"
  );

}

// Works because declarations
// are hoisted




// FUNCTION EXPRESSION

// greet();

// Error:
// Cannot access before initialization

const greet =
  function() {

    console.log(
      "Hi"
    );

  };

greet();




// FUNCTION EXPRESSION
// WITH PARAMETERS

const add =
  function(a, b) {

    return a + b;

  };

console.log(
  add(5, 10)
);




// MODERN STYLE

const multiply =
  function(a, b) {

    return a * b;

  };

console.log(
  multiply(4, 5)
);`,

    language: "javascript",

    commonMistakes: [
      "Assuming function expressions are hoisted like declarations",

      "Calling expressions before assignment",

      "Confusing declarations and expressions",

      "Ignoring hoisting behavior",

      "Using var with function expressions",
    ],

    thinkingProcess: `Step 1: Define function declaration

Step 2: Define function expression

Step 3: Explain hoisting behavior

Step 4: Compare execution differences

Step 5: Discuss modern JavaScript usage`,

    realWorldApplication:
      "Function expressions are commonly used in callbacks, event handlers, React components, and modern JavaScript codebases where functions are treated as values.",

    interviewTip:
      "The most important difference is hoisting. Function declarations are fully hoisted, while function expressions behave like variables and must be assigned before use.",
  },
  {
    id: "js-23",

    question: "What are arrow functions?",

    difficulty: "Basic",

    shortAnswer:
      "Arrow functions are a shorter syntax for writing functions in JavaScript, introduced in ES6 using the => operator.",

    detailedAnswer: `Arrow functions were introduced in ES6 (ECMAScript 2015) to make function syntax more concise.

Syntax:

const greet = () => {
  console.log("Hello");
};

Arrow functions can:

- Accept parameters
- Return values
- Be stored in variables
- Be passed as callbacks

Advantages:

- Shorter syntax
- Cleaner code
- Implicit return for simple expressions
- Lexical this binding

Arrow functions are heavily used in modern JavaScript, especially in:

- Array methods
- Event handling
- React applications
- Functional programming

However, they are not suitable for every situation because they do not have their own this, arguments, super, or new.target.`,

    keyPoints: [
      "Introduced in ES6",

      "Uses => syntax",

      "Provides shorter function syntax",

      "Supports implicit returns",

      "Uses lexical this",
    ],

    codeExample: `// REGULAR FUNCTION

function greet() {

  return "Hello";

}




// ARROW FUNCTION

const greetArrow = () => {

  return "Hello";

};




// IMPLICIT RETURN

const add =
  (a, b) => a + b;

console.log(
  add(5, 10)
);
// 15




// ONE PARAMETER

const square =
  num => num * num;

console.log(
  square(4)
);
// 16




// CALLBACK

const numbers =
  [1, 2, 3];

const doubled =
  numbers.map(
    num => num * 2
  );

console.log(doubled);
// [2, 4, 6]`,

    language: "javascript",

    commonMistakes: [
      "Using arrow functions where this is required",

      "Forgetting parentheses for multiple parameters",

      "Misusing implicit returns",

      "Using arrow functions as constructors",

      "Confusing arrow functions with regular functions",
    ],

    thinkingProcess: `Step 1: Define arrow functions

Step 2: Explain syntax

Step 3: Demonstrate implicit returns

Step 4: Show callback usage

Step 5: Discuss limitations`,

    realWorldApplication:
      "Arrow functions are commonly used in React components, array methods like map and filter, event handlers, and API response processing.",

    interviewTip:
      "Mention that arrow functions use lexical this. This is one of their most important characteristics and is frequently discussed in interviews.",
  },
  {
    id: "js-24",

    question:
      "What is the difference between regular functions and arrow functions?",

    difficulty: "Intermediate",

    shortAnswer:
      "The biggest difference is that regular functions have their own this, while arrow functions inherit this from their surrounding scope.",

    detailedAnswer: `Although arrow functions look similar to regular functions, they behave differently.

REGULAR FUNCTIONS

- Have their own this
- Have their own arguments object
- Can be used as constructors
- Can use new keyword
- Suitable for object methods

ARROW FUNCTIONS

- Do not have their own this
- Inherit this from parent scope
- Do not have arguments object
- Cannot be used as constructors
- Cannot be called with new

THIS BEHAVIOR

Regular function:

this depends on how the function is called.

Arrow function:

this is inherited from the surrounding scope.

Because of this, arrow functions are often used for callbacks where preserving the surrounding this is desirable.

When defining object methods, regular functions are usually preferred.`,

    keyPoints: [
      "Regular functions have their own this",

      "Arrow functions use lexical this",

      "Arrow functions lack arguments object",

      "Arrow functions cannot be constructors",

      "Choose the function type based on use case",
    ],

    codeExample: `// REGULAR FUNCTION

const user = {

  name: "John",

  greet: function() {

    console.log(
      this.name
    );

  }

};

user.greet();
// John




// ARROW FUNCTION

const user2 = {

  name: "Jane",

  greet: () => {

    console.log(
      this.name
    );

  }

};

user2.greet();
// undefined




// ARGUMENTS OBJECT

function test() {

  console.log(
    arguments
  );

}

test(1, 2, 3);




// ARROW FUNCTION

const test2 = () => {

  // arguments not available

};




// CONSTRUCTOR

function Person(name) {

  this.name = name;

}

const p =
  new Person("John");




// INVALID

const Person2 =
  (name) => {

    this.name = name;

  };

// new Person2()
// Error`,

    language: "javascript",

    commonMistakes: [
      "Using arrow functions as object methods",

      "Using arrow functions as constructors",

      "Expecting arguments to exist",

      "Misunderstanding lexical this",

      "Using regular functions when lexical this is needed",
    ],

    thinkingProcess: `Step 1: Compare syntax

Step 2: Compare this behavior

Step 3: Compare arguments support

Step 4: Compare constructor behavior

Step 5: Explain practical use cases`,

    realWorldApplication:
      "Arrow functions are widely used in React and callbacks, while regular functions are often used for object methods and constructors.",

    interviewTip:
      "The key interview answer is: arrow functions do not have their own this; they inherit it from the surrounding scope.",
  },
  {
    id: "js-25",

    question: "What are parameters and arguments in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "Parameters are variables listed in a function definition, while arguments are the actual values passed when the function is called.",

    detailedAnswer: `Parameters and arguments allow functions to receive input.

PARAMETERS

Parameters are placeholders defined when creating a function.

Example:

function greet(name)

Here, name is a parameter.

ARGUMENTS

Arguments are the actual values supplied when calling the function.

Example:

greet("John")

Here, "John" is an argument.

A function can:

- Have zero parameters
- Have one parameter
- Have multiple parameters

JavaScript allows passing fewer or more arguments than parameters.

Missing arguments become:

undefined

Modern JavaScript also supports:

- Default parameters
- Rest parameters
- Destructured parameters

These features make functions more flexible and easier to use.`,

    keyPoints: [
      "Parameters are defined in functions",

      "Arguments are passed during function calls",

      "Arguments provide actual data",

      "Missing arguments become undefined",

      "Functions can accept multiple parameters",
    ],

    codeExample: `// PARAMETER

function greet(name) {

  console.log(
    "Hello " + name
  );

}




// ARGUMENT

greet("John");




// MULTIPLE PARAMETERS

function add(a, b) {

  return a + b;

}

console.log(
  add(5, 10)
);
// 15




// MISSING ARGUMENT

function welcome(name) {

  console.log(name);

}

welcome();
// undefined




// EXTRA ARGUMENTS

function show(name) {

  console.log(name);

}

show(
  "John",
  25,
  true
);

// Extra values ignored




// DEFAULT VALUE

function greetUser(
  name = "Guest"
) {

  console.log(
    name
  );

}

greetUser();
// Guest`,

    language: "javascript",

    commonMistakes: [
      "Confusing parameters and arguments",

      "Forgetting missing arguments become undefined",

      "Passing arguments in the wrong order",

      "Using too many parameters",

      "Ignoring default parameter values",
    ],

    thinkingProcess: `Step 1: Define parameters

Step 2: Define arguments

Step 3: Compare the two concepts

Step 4: Demonstrate function calls

Step 5: Explain missing and extra arguments`,

    realWorldApplication:
      "Parameters and arguments are used in APIs, event handlers, utility functions, calculations, and virtually every reusable function in JavaScript.",

    interviewTip:
      "A simple interview answer is: parameters are variables in the function definition, while arguments are actual values passed during the function call.",
  },
  {
    id: "js-26",

    question: "What are default parameters?",

    difficulty: "Basic",

    shortAnswer:
      "Default parameters allow functions to use predefined values when arguments are not provided or are undefined.",

    detailedAnswer: `Default parameters were introduced in ES6 to make functions more flexible.

Before ES6, developers often wrote:

function greet(name) {
  name = name || "Guest";
}

Modern JavaScript provides a cleaner solution:

function greet(name = "Guest")

If no argument is passed, the default value is used.

Benefits:

- Cleaner code
- Fewer conditional checks
- Better readability
- Safer function calls

Default parameters work only when:

- Argument is omitted
- Argument is undefined

If null is passed, the default value is NOT used because null is considered a valid value.`,

    keyPoints: [
      "Introduced in ES6",

      "Provide fallback values",

      "Used when arguments are missing",

      "Only trigger for undefined values",

      "Improve code readability",
    ],

    codeExample: `// DEFAULT PARAMETER

function greet(
  name = "Guest"
) {

  console.log(
    "Hello " + name
  );

}

greet();
// Hello Guest

greet("John");
// Hello John




// MULTIPLE DEFAULTS

function createUser(
  name = "Guest",
  age = 18
) {

  return {
    name,
    age
  };

}

console.log(
  createUser()
);




// UNDEFINED

greet(undefined);
// Hello Guest




// NULL

greet(null);
// Hello null`,

    language: "javascript",

    commonMistakes: [
      "Expecting null to trigger default values",

      "Using unnecessary if statements",

      "Providing defaults in the wrong order",

      "Overusing default parameters",

      "Confusing undefined and null behavior",
    ],

    thinkingProcess: `Step 1: Define default parameters

Step 2: Explain when they are used

Step 3: Compare with older approaches

Step 4: Show examples

Step 5: Explain null vs undefined behavior`,

    realWorldApplication:
      "Default parameters are commonly used in APIs, utility functions, React components, and configuration objects.",

    interviewTip:
      "Mention that default values are applied only when the argument is undefined, not when it is null.",
  },
  {
    id: "js-27",

    question: "What is a callback function?",

    difficulty: "Intermediate",

    shortAnswer:
      "A callback function is a function passed as an argument to another function and executed later.",

    detailedAnswer: `Callbacks are one of the most important concepts in JavaScript.

Because JavaScript treats functions as first-class citizens, functions can be:

- Stored in variables
- Passed to other functions
- Returned from functions

A callback is simply a function passed into another function.

Why use callbacks?

- Event handling
- Asynchronous operations
- Array methods
- Custom reusable logic

Execution Flow:

1. Pass callback function.
2. Main function executes.
3. Callback executes when needed.

Callbacks are the foundation of:

- Promises
- Async/Await
- Event-driven programming

However, excessive nesting of callbacks can lead to "callback hell."`,

    keyPoints: [
      "Callbacks are functions passed as arguments",

      "Executed later by another function",

      "Used heavily in asynchronous programming",

      "Common in event handling",

      "Foundation for modern async patterns",
    ],

    codeExample: `// CALLBACK FUNCTION

function greet(name, callback) {

  console.log(
    "Hello " + name
  );

  callback();

}

function sayBye() {

  console.log(
    "Goodbye!"
  );

}

greet(
  "John",
  sayBye
);




// ARRAY CALLBACK

const numbers =
  [1, 2, 3];

numbers.forEach(
  function(num) {

    console.log(num);

  }
);




// EVENT CALLBACK

button.addEventListener(
  "click",
  function() {

    console.log(
      "Button Clicked"
    );

  }
);`,

    language: "javascript",

    commonMistakes: [
      "Calling the callback immediately instead of passing it",

      "Forgetting to execute the callback",

      "Deeply nesting callbacks",

      "Confusing callbacks with return values",

      "Not handling callback errors",
    ],

    thinkingProcess: `Step 1: Define callback

Step 2: Explain function passing

Step 3: Show execution flow

Step 4: Demonstrate common examples

Step 5: Introduce asynchronous use cases`,

    realWorldApplication:
      "Callbacks are used in click events, API requests, timers, array methods like forEach(), and many asynchronous operations.",

    interviewTip:
      "Explain that a callback is a function passed to another function to be executed later. Then give a practical example such as addEventListener.",
  },
  {
    id: "js-28",

    question: "What are higher-order functions?",

    difficulty: "Intermediate",

    shortAnswer:
      "A higher-order function is a function that takes another function as an argument, returns a function, or both.",

    detailedAnswer: `Higher-order functions are possible because JavaScript functions are first-class citizens.

A higher-order function can:

1. Accept functions as parameters.
2. Return functions as results.

Examples:

- map()
- filter()
- reduce()
- forEach()

Benefits:

- Reusability
- Cleaner code
- Functional programming
- Reduced duplication

Higher-order functions allow developers to create flexible and reusable abstractions.

For a function to be higher-order:

- It must accept a function,
OR
- It must return a function.

Many modern JavaScript frameworks and libraries rely heavily on higher-order functions.`,

    keyPoints: [
      "Accept functions as arguments",

      "Can return functions",

      "Promote reusable code",

      "Core concept in functional programming",

      "Array methods are common examples",
    ],

    codeExample: `// FUNCTION AS ARGUMENT

function processUser(
  name,
  callback
) {

  callback(name);

}

processUser(
  "John",
  function(name) {

    console.log(
      "Hello " + name
    );

  }
);




// FUNCTION RETURNING FUNCTION

function multiplyBy(
  num
) {

  return function(value) {

    return value * num;

  };

}

const double =
  multiplyBy(2);

console.log(
  double(5)
);
// 10




// MAP EXAMPLE

const numbers =
  [1, 2, 3];

const doubled =
  numbers.map(
    num => num * 2
  );

console.log(
  doubled
);
// [2,4,6]




// FILTER EXAMPLE

const evenNumbers =
  numbers.filter(
    num => num % 2 === 0
  );

console.log(
  evenNumbers
);
// [2]`,

    language: "javascript",

    commonMistakes: [
      "Confusing callbacks with higher-order functions",

      "Returning values instead of functions",

      "Not understanding first-class functions",

      "Using higher-order functions unnecessarily",

      "Ignoring readability",
    ],

    thinkingProcess: `Step 1: Define higher-order functions

Step 2: Explain function arguments

Step 3: Explain returned functions

Step 4: Show array method examples

Step 5: Discuss practical benefits`,

    realWorldApplication:
      "Methods like map(), filter(), reduce(), React hooks, middleware systems, and utility libraries all heavily use higher-order functions.",

    interviewTip:
      'A common interview answer is: "A higher-order function either accepts another function as an argument or returns a function." Then provide examples like map() or filter().',
  },
  {
    id: "js-29",

    question: "What is recursion in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Recursion is a programming technique where a function calls itself until a stopping condition (base case) is reached.",

    detailedAnswer: `Recursion occurs when a function calls itself to solve a smaller version of the same problem.

Every recursive function must have:

1. Base Case
   - Stops recursion

2. Recursive Case
   - Calls itself again

Without a base case, recursion creates an infinite loop and causes a stack overflow.

Execution Flow:

Function Call
↓
Function Calls Itself
↓
Function Calls Itself Again
↓
Base Case Reached
↓
Calls Return Backward

Common Uses:

- Factorials
- Fibonacci Sequence
- Tree Traversal
- Nested Data Structures
- File Systems

Recursion is often an elegant solution for problems that can be divided into smaller subproblems.`,

    keyPoints: [
      "A recursive function calls itself",

      "Every recursive function needs a base case",

      "Missing a base case causes stack overflow",

      "Useful for hierarchical data",

      "Can replace some loops",
    ],

    codeExample: `// FACTORIAL

function factorial(n) {

  if (n === 1) {
    return 1;
  }

  return n *
    factorial(n - 1);

}

console.log(
  factorial(5)
);
// 120




// COUNTDOWN

function countdown(n) {

  if (n === 0) {
    console.log("Done");
    return;
  }

  console.log(n);

  countdown(n - 1);

}

countdown(5);




// FIBONACCI

function fibonacci(n) {

  if (n <= 1) {
    return n;
  }

  return (
    fibonacci(n - 1) +
    fibonacci(n - 2)
  );

}

console.log(
  fibonacci(6)
);
// 8`,

    language: "javascript",

    commonMistakes: [
      "Forgetting the base case",

      "Creating infinite recursion",

      "Using recursion when iteration is simpler",

      "Not understanding call stack growth",

      "Writing inefficient recursive solutions",
    ],

    thinkingProcess: `Step 1: Define recursion

Step 2: Explain base case

Step 3: Explain recursive case

Step 4: Demonstrate examples

Step 5: Discuss advantages and risks`,

    realWorldApplication:
      "Recursion is used in tree structures, folder navigation systems, menu rendering, DOM traversal, and algorithms like quicksort and mergesort.",

    interviewTip:
      "Always mention the base case. Interviewers often ask what happens if recursion never reaches a stopping condition.",
  },
  {
    id: "js-30",

    question: "What is an IIFE (Immediately Invoked Function Expression)?",

    difficulty: "Intermediate",

    shortAnswer:
      "An IIFE is a function that is defined and executed immediately after it is created.",

    detailedAnswer: `IIFE stands for Immediately Invoked Function Expression.

It is a function that runs as soon as it is defined.

Syntax:

(function() {
  // code
})();

Why use IIFEs?

- Create private scope
- Avoid global variables
- Protect data
- Execute initialization code immediately

Before ES6 modules, IIFEs were widely used to prevent global namespace pollution.

How it works:

1. Function is wrapped in parentheses.
2. Function becomes an expression.
3. Final parentheses execute it immediately.

Although modern modules reduce the need for IIFEs, they are still useful in interviews and legacy codebases.`,

    keyPoints: [
      "IIFE executes immediately",

      "Creates private scope",

      "Avoids global variable pollution",

      "Common before ES6 modules",

      "Useful for initialization code",
    ],

    codeExample: `// BASIC IIFE

(function() {

  console.log(
    "Executed Immediately"
  );

})();




// IIFE WITH PARAMETERS

(function(name) {

  console.log(
    "Hello " + name
  );

})("John");




// PRIVATE SCOPE

(function() {

  const secret =
    "Hidden Data";

  console.log(secret);

})();

// secret not accessible
// outside the IIFE




// ARROW IIFE

(() => {

  console.log(
    "Arrow IIFE"
  );

})();`,

    language: "javascript",

    commonMistakes: [
      "Forgetting wrapping parentheses",

      "Not understanding function expressions",

      "Using IIFEs unnecessarily in modern modules",

      "Confusing IIFEs with callbacks",

      "Incorrect syntax placement",
    ],

    thinkingProcess: `Step 1: Define IIFE

Step 2: Explain syntax

Step 3: Explain immediate execution

Step 4: Demonstrate scope isolation

Step 5: Discuss modern alternatives`,

    realWorldApplication:
      "IIFEs are used in legacy applications, plugin development, initialization scripts, and situations where temporary scope isolation is needed.",

    interviewTip:
      "A common interview question is why IIFEs were popular before ES6. The answer is that they prevented global scope pollution by creating private scope.",
  },
  {
    id: "js-31",

    question: "What is function hoisting?",

    difficulty: "Intermediate",

    shortAnswer:
      "Function hoisting is JavaScript behavior where function declarations are moved to the top of their scope during execution, allowing them to be called before they are defined.",

    detailedAnswer: `Hoisting is JavaScript's behavior of processing declarations before execution.

Function declarations are fully hoisted.

This means:

sayHello();

function sayHello() {
  console.log("Hello");
}

works correctly even though the function is called before its definition.

Function Expressions:

These are NOT fully hoisted.

Example:

greet();

const greet = function() {};

This produces an error because the variable exists in the Temporal Dead Zone until initialization.

Important Distinction:

Function Declaration:
- Fully hoisted
- Can be called before definition

Function Expression:
- Variable hoisted
- Function assignment not hoisted

Arrow Functions:
Behave like function expressions because they are usually assigned to variables.`,

    keyPoints: [
      "Function declarations are fully hoisted",

      "Function expressions are not fully hoisted",

      "Arrow functions behave like function expressions",

      "Hoisting occurs before execution",

      "Understanding hoisting prevents runtime errors",
    ],

    codeExample: `// FUNCTION DECLARATION

sayHello();

function sayHello() {

  console.log(
    "Hello"
  );

}

// Works successfully




// FUNCTION EXPRESSION

// greet();

const greet =
  function() {

    console.log(
      "Hi"
    );

  };

// Error if called before
// assignment




// ARROW FUNCTION

// welcome();

const welcome =
  () => {

    console.log(
      "Welcome"
    );

  };

// Error if called before
// initialization




// HOISTING EXAMPLE

console.log(a);
// undefined

var a = 10;

// var declarations
// are hoisted too`,

    language: "javascript",

    commonMistakes: [
      "Assuming function expressions are hoisted",

      "Calling arrow functions before declaration",

      "Confusing hoisting with execution order",

      "Ignoring Temporal Dead Zone behavior",

      "Using var without understanding hoisting",
    ],

    thinkingProcess: `Step 1: Define hoisting

Step 2: Explain declaration hoisting

Step 3: Compare expressions and declarations

Step 4: Demonstrate execution behavior

Step 5: Discuss common errors`,

    realWorldApplication:
      "Understanding hoisting helps developers avoid runtime errors and write predictable code in large JavaScript applications.",

    interviewTip:
      "The most important distinction is that function declarations are fully hoisted, while function expressions and arrow functions are not.",
  },
  {
    id: "js-32",

    question: "What is scope in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Scope determines where variables and functions can be accessed within a program.",

    detailedAnswer: `Scope defines the visibility and accessibility of variables in JavaScript.

It helps prevent naming conflicts and protects data from unintended access.

Types of Scope:

1. Global Scope
2. Function Scope
3. Block Scope

GLOBAL SCOPE

Variables declared outside any function or block.

Accessible from anywhere in the program.

FUNCTION SCOPE

Variables declared inside a function.

Accessible only inside that function.

BLOCK SCOPE

Variables declared using let or const inside a block { }.

Accessible only within that block.

JavaScript uses scope to determine where variables can be read or modified.

Understanding scope is essential for writing predictable and maintainable code.`,

    keyPoints: [
      "Scope controls variable accessibility",

      "JavaScript has global, function, and block scope",

      "let and const create block scope",

      "var creates function scope",

      "Scope helps prevent variable conflicts",
    ],

    codeExample: `// GLOBAL SCOPE

const appName =
  "My App";

function showApp() {

  console.log(
    appName
  );

}

showApp();




// FUNCTION SCOPE

function test() {

  const message =
    "Hello";

  console.log(message);

}

test();

// console.log(message);
// Error




// BLOCK SCOPE

if (true) {

  let age = 25;

  console.log(age);

}

// console.log(age);
// Error




// VAR IS FUNCTION SCOPED

if (true) {

  var city =
    "Mumbai";

}

console.log(city);
// Mumbai`,

    language: "javascript",

    commonMistakes: [
      "Using global variables excessively",

      "Confusing block scope and function scope",

      "Using var unintentionally",

      "Accessing variables outside their scope",

      "Creating naming conflicts",
    ],

    thinkingProcess: `Step 1: Define scope

Step 2: Explain global scope

Step 3: Explain function scope

Step 4: Explain block scope

Step 5: Compare var, let, and const behavior`,

    realWorldApplication:
      "Scope is used in every JavaScript application to control data access, avoid conflicts, and organize code effectively.",

    interviewTip:
      "Interviewers often ask about the difference between function scope and block scope. Mention that let and const are block-scoped, while var is function-scoped.",
  },
  {
    id: "js-33",

    question: "What is lexical scope in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Lexical scope means a function can access variables from its own scope and any outer scopes where it was defined.",

    detailedAnswer: `Lexical scope is determined by where functions are written in the source code.

In JavaScript, inner functions can access:

- Their own variables
- Variables from parent functions
- Global variables

However, outer functions cannot access variables inside inner functions.

JavaScript follows a scope chain:

Current Scope
↓
Parent Scope
↓
Global Scope

This behavior is called lexical scoping because scope is determined at writing time (where the function is defined), not at runtime.

Lexical scope is the foundation of closures.`,

    keyPoints: [
      "Scope is determined by code structure",

      "Inner functions access outer variables",

      "Outer functions cannot access inner variables",

      "JavaScript uses a scope chain",

      "Closures depend on lexical scope",
    ],

    codeExample: `// LEXICAL SCOPE

const globalVar =
  "Global";

function outer() {

  const outerVar =
    "Outer";

  function inner() {

    const innerVar =
      "Inner";

    console.log(globalVar);

    console.log(outerVar);

    console.log(innerVar);

  }

  inner();

}

outer();




// INVALID ACCESS

function parent() {

  const secret =
    "Hidden";

}

console.log(secret);
// Error




// SCOPE CHAIN

const appName =
  "My App";

function page() {

  function button() {

    console.log(
      appName
    );

  }

  button();

}

page();`,

    language: "javascript",

    commonMistakes: [
      "Confusing lexical scope with execution context",

      "Expecting outer functions to access inner variables",

      "Ignoring scope chains",

      "Misunderstanding nested functions",

      "Not recognizing closure behavior",
    ],

    thinkingProcess: `Step 1: Define lexical scope

Step 2: Explain nested functions

Step 3: Explain scope chain

Step 4: Demonstrate variable lookup

Step 5: Connect lexical scope to closures`,

    realWorldApplication:
      "Lexical scope is heavily used in React components, event handlers, closures, modules, and asynchronous programming.",

    interviewTip:
      'A strong answer includes the phrase: "Scope is determined by where a function is defined, not where it is called."',
  },
  {
    id: "js-34",

    question: "What are closures in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing.",

    detailedAnswer: `Closures are one of the most powerful features of JavaScript.

A closure occurs when:

1. An inner function is created.
2. The inner function accesses variables from an outer function.
3. The outer function finishes execution.
4. The inner function still remembers those variables.

Normally, local variables disappear after a function finishes.

Closures keep those variables alive as long as they are needed.

Benefits:

- Data privacy
- State preservation
- Function factories
- Event handlers
- Module patterns

Closures work because of lexical scope.

The inner function maintains a reference to the variables in its outer scope.`,

    keyPoints: [
      "Closures remember outer variables",

      "Variables remain available after outer function execution",

      "Closures are based on lexical scope",

      "Useful for private data",

      "Common in callbacks and event handlers",
    ],

    codeExample: `// BASIC CLOSURE

function outer() {

  let count = 0;

  return function() {

    count++;

    console.log(count);

  };

}

const counter =
  outer();

counter();
// 1

counter();
// 2

counter();
// 3




// PRIVATE DATA

function createUser() {

  let password =
    "12345";

  return {

    getPassword() {

      return password;
    }

  };

}

const user =
  createUser();

console.log(
  user.getPassword()
);




// FUNCTION FACTORY

function multiplyBy(num) {

  return function(value) {

    return value * num;

  };

}

const double =
  multiplyBy(2);

const triple =
  multiplyBy(3);

console.log(
  double(5)
);
// 10

console.log(
  triple(5)
);
// 15`,

    language: "javascript",

    commonMistakes: [
      "Confusing closures with scope",

      "Creating unnecessary closures",

      "Causing memory leaks with retained references",

      "Not understanding variable persistence",

      "Misunderstanding closure execution timing",
    ],

    thinkingProcess: `Step 1: Define closure

Step 2: Explain lexical scope relationship

Step 3: Show variable persistence

Step 4: Demonstrate practical examples

Step 5: Explain real-world benefits`,

    realWorldApplication:
      "Closures are used in React hooks, event listeners, timers, module patterns, private variables, caching systems, and function factories.",

    interviewTip:
      'A classic interview definition is: "A closure is a function that remembers variables from its outer scope even after the outer function has completed execution."',
  },
  {
    id: "js-35",

    question: "What is the execution context in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Execution context is the environment in which JavaScript code is evaluated and executed.",

    detailedAnswer: `Execution Context is a core JavaScript concept that defines how code runs.

Whenever JavaScript executes code, it creates an execution context.

Types of Execution Context:

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context

GLOBAL EXECUTION CONTEXT

Created when a JavaScript program starts.

Contains:

- Global variables
- Global functions
- Global object (window in browsers)

FUNCTION EXECUTION CONTEXT

Created whenever a function is called.

Each function gets its own execution context.

PHASES OF EXECUTION CONTEXT

1. Memory Creation Phase

JavaScript allocates memory for:

- Variables
- Functions

2. Execution Phase

JavaScript executes code line by line.

Execution contexts are managed using the Call Stack.`,

    keyPoints: [
      "Execution context is the environment where code runs",

      "JavaScript creates contexts automatically",

      "Global context is created first",

      "Each function call creates a new context",

      "Execution contexts are managed by the call stack",
    ],

    codeExample: `// GLOBAL CONTEXT

const app =
  "My App";

function greet() {

  console.log(
    "Hello"
  );

}

greet();




// MEMORY PHASE

console.log(a);

var a = 10;

// During memory creation:
// a = undefined




// FUNCTION CONTEXT

function add(a, b) {

  return a + b;

}

add(5, 10);

// New execution context
// created for add()`,

    language: "javascript",

    commonMistakes: [
      "Confusing scope and execution context",

      "Ignoring memory creation phase",

      "Not understanding function contexts",

      "Assuming only one context exists",

      "Misunderstanding hoisting behavior",
    ],

    thinkingProcess: `Step 1: Define execution context

Step 2: Explain its types

Step 3: Explain memory phase

Step 4: Explain execution phase

Step 5: Connect execution context to the call stack`,

    realWorldApplication:
      "Understanding execution contexts helps developers debug variable behavior, hoisting, closures, and function execution issues.",

    interviewTip:
      "Mention the two phases: Memory Creation Phase and Execution Phase. Interviewers frequently ask about these.",
  },
  {
    id: "js-36",

    question: "What is the call stack in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "The call stack is a data structure that keeps track of function calls and determines the order in which functions are executed.",

    detailedAnswer: `JavaScript uses a Call Stack to manage execution contexts.

The Call Stack follows the LIFO principle:

Last In, First Out

When a function is called:

1. Its execution context is pushed onto the stack.
2. The function executes.
3. After completion, the context is popped from the stack.

Execution Flow:

Global Context
↓
Function A
↓
Function B
↓
Function C

Function C finishes first.
Then B.
Then A.

This is why it is called Last In, First Out.

If too many function calls occur without returning, a Stack Overflow error occurs.

The Call Stack works closely with:

- Execution Context
- Event Loop
- Web APIs
- Callback Queue`,

    keyPoints: [
      "Call Stack manages function execution",

      "Uses Last In First Out (LIFO)",

      "Functions are pushed and popped",

      "Stack overflow occurs when the stack becomes too large",

      "Works with execution contexts",
    ],

    codeExample: `function first() {

  second();

}

function second() {

  third();

}

function third() {

  console.log(
    "Done"
  );

}

first();




// CALL STACK FLOW

// Global
// ↓
// first()
// ↓
// second()
// ↓
// third()
// ↓
// third removed
// second removed
// first removed




// STACK OVERFLOW

function recurse() {

  recurse();

}

// recurse();

// Maximum call stack
// size exceeded`,

    language: "javascript",

    commonMistakes: [
      "Confusing stack and queue",

      "Ignoring stack overflow risks",

      "Not understanding function nesting",

      "Misunderstanding execution order",

      "Confusing call stack with event loop",
    ],

    thinkingProcess: `Step 1: Define call stack

Step 2: Explain LIFO behavior

Step 3: Show push/pop operations

Step 4: Demonstrate execution order

Step 5: Explain stack overflow`,

    realWorldApplication:
      "The call stack is involved every time a function executes. Understanding it helps debug recursion issues and asynchronous behavior.",

    interviewTip:
      'A common interview answer is: "The call stack is a LIFO data structure that manages execution contexts and function calls."',
  },
  {
    id: "js-37",

    question: "What is hoisting in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Hoisting is JavaScript behavior where declarations are moved to the top of their scope before code execution.",

    detailedAnswer: `Hoisting is a result of JavaScript's memory creation phase.

Before executing code, JavaScript scans declarations and allocates memory for them.

VARIABLE HOISTING

var variables are hoisted and initialized with undefined.

Example:

console.log(a);

var a = 10;

Output:

undefined

FUNCTION HOISTING

Function declarations are fully hoisted.

Example:

greet();

function greet() {
  console.log("Hello");
}

Output:

Hello

LET AND CONST

let and const are also hoisted, but they remain inside the Temporal Dead Zone (TDZ) until initialization.

Accessing them before declaration causes a ReferenceError.

Hoisting explains many JavaScript behaviors and is essential for understanding execution contexts.`,

    keyPoints: [
      "Hoisting occurs before execution",

      "var is initialized with undefined",

      "Function declarations are fully hoisted",

      "let and const use the Temporal Dead Zone",

      "Hoisting happens during memory creation",
    ],

    codeExample: `// VAR HOISTING

console.log(a);

var a = 10;

// Equivalent to:

var a;

console.log(a);

a = 10;




// FUNCTION HOISTING

sayHello();

function sayHello() {

  console.log(
    "Hello"
  );

}




// LET

console.log(b);

let b = 20;

// ReferenceError




// CONST

console.log(c);

const c = 30;

// ReferenceError




// TDZ EXAMPLE

{
  // TDZ Starts

  let score = 100;

  // TDZ Ends
}`,

    language: "javascript",

    commonMistakes: [
      "Assuming let behaves like var",

      "Calling variables before initialization",

      "Ignoring the Temporal Dead Zone",

      "Confusing hoisting with execution order",

      "Misunderstanding function hoisting",
    ],

    thinkingProcess: `Step 1: Define hoisting

Step 2: Explain memory creation

Step 3: Compare var, let, and const

Step 4: Explain function hoisting

Step 5: Discuss TDZ behavior`,

    realWorldApplication:
      "Understanding hoisting helps developers avoid bugs related to variable access, initialization order, and function execution.",

    interviewTip:
      "A strong answer explains that declarations are hoisted, not assignments. This distinction is frequently tested in interviews.",
  },
  {
    id: "js-38",

    question: "What is the Temporal Dead Zone (TDZ)?",

    difficulty: "Intermediate",

    shortAnswer:
      "The Temporal Dead Zone (TDZ) is the period between entering a scope and the actual declaration of a let or const variable, during which the variable cannot be accessed.",

    detailedAnswer: `The Temporal Dead Zone (TDZ) is a JavaScript behavior associated with let and const declarations.

Although let and const variables are hoisted, they are not initialized immediately.

The TDZ starts:

- When the scope is entered

The TDZ ends:

- When the variable declaration is reached

Attempting to access the variable during the TDZ results in a ReferenceError.

Example:

console.log(name);

let name = "John";

Output:

ReferenceError

Why TDZ Exists:

- Prevents accidental usage before initialization
- Makes code safer
- Avoids bugs caused by undefined values

Unlike var, which is initialized with undefined, let and const remain unavailable until initialization.`,

    keyPoints: [
      "TDZ applies to let and const",

      "Variables are hoisted but not initialized",

      "Accessing variables inside TDZ causes ReferenceError",

      "TDZ improves code safety",

      "var does not have a TDZ",
    ],

    codeExample: `// TEMPORAL DEAD ZONE

console.log(user);

let user = "John";

// ReferenceError




// TDZ INSIDE BLOCK

{
  console.log(score);

  let score = 100;
}

// ReferenceError




// VALID ACCESS

let age = 25;

console.log(age);
// 25




// VAR COMPARISON

console.log(city);

var city = "Mumbai";

// undefined`,

    language: "javascript",

    commonMistakes: [
      "Thinking let behaves like var",

      "Accessing variables before declaration",

      "Ignoring block scope",

      "Misunderstanding hoisting behavior",

      "Assuming TDZ means variables do not exist",
    ],

    thinkingProcess: `Step 1: Define TDZ

Step 2: Explain hoisting behavior

Step 3: Compare var and let

Step 4: Show ReferenceError examples

Step 5: Explain why TDZ exists`,

    realWorldApplication:
      "TDZ prevents bugs caused by using variables before they are properly initialized, making large applications more predictable and maintainable.",

    interviewTip:
      "Mention that let and const are hoisted but remain inaccessible until initialization. This is the most important interview point.",
  },
  {
    id: "js-39",

    question:
      "What is the difference between synchronous and asynchronous JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Synchronous code executes line by line and waits for each task to finish, while asynchronous code allows other tasks to continue before a long-running operation completes.",

    detailedAnswer: `JavaScript is single-threaded, meaning it executes one task at a time.

SYNCHRONOUS JAVASCRIPT

Tasks execute sequentially.

Each statement waits for the previous one to finish.

Example:

console.log("A");
console.log("B");
console.log("C");

Output:

A
B
C

ASYNCHRONOUS JAVASCRIPT

Some operations take time:

- API requests
- Timers
- File operations
- Database calls

JavaScript delegates these tasks to Web APIs and continues executing other code.

Example:

console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");

Output:

A
C
B

Benefits:

- Better performance
- Responsive UI
- Non-blocking operations

JavaScript uses callbacks, promises, async/await, and the event loop to handle asynchronous tasks.`,

    keyPoints: [
      "Synchronous code blocks execution",

      "Asynchronous code is non-blocking",

      "JavaScript is single-threaded",

      "Async operations improve responsiveness",

      "Promises and async/await simplify async programming",
    ],

    codeExample: `// SYNCHRONOUS

console.log("Start");

console.log("Middle");

console.log("End");

// Output:
// Start
// Middle
// End




// ASYNCHRONOUS

console.log("Start");

setTimeout(() => {

  console.log("Timer");

}, 1000);

console.log("End");

// Output:
// Start
// End
// Timer




// API EXAMPLE

fetch("/users")
  .then(response =>
    response.json()
  )
  .then(data => {

    console.log(data);

  });`,

    language: "javascript",

    commonMistakes: [
      "Expecting async code to execute immediately",

      "Misunderstanding execution order",

      "Ignoring promise behavior",

      "Blocking UI with synchronous code",

      "Confusing concurrency with parallelism",
    ],

    thinkingProcess: `Step 1: Define synchronous execution

Step 2: Define asynchronous execution

Step 3: Show execution order

Step 4: Explain non-blocking behavior

Step 5: Introduce promises and async/await`,

    realWorldApplication:
      "Asynchronous programming is used for API requests, file uploads, chat applications, payment systems, and real-time applications.",

    interviewTip:
      "Always mention that JavaScript is single-threaded but achieves asynchronous behavior using Web APIs, callback queues, and the event loop.",
  },
  {
    id: "js-40",

    question: "What is the Event Loop in JavaScript?",

    difficulty: "Advanced",

    shortAnswer:
      "The Event Loop is a mechanism that allows JavaScript to perform non-blocking asynchronous operations by coordinating the Call Stack and Callback Queue.",

    detailedAnswer: `JavaScript is single-threaded and can execute only one task at a time.

To handle asynchronous operations, JavaScript uses:

1. Call Stack
2. Web APIs
3. Callback Queue
4. Event Loop

HOW IT WORKS

Step 1:
A function executes on the Call Stack.

Step 2:
Async operations such as:

- setTimeout()
- fetch()
- DOM events

are sent to Web APIs.

Step 3:
When completed, callbacks move to the Callback Queue.

Step 4:
The Event Loop continuously checks:

"Is the Call Stack empty?"

If yes:

The callback is moved from the queue to the stack for execution.

This process enables non-blocking behavior.

Without the Event Loop, asynchronous JavaScript would not be possible.`,

    keyPoints: [
      "Event Loop manages asynchronous execution",

      "Works with the Call Stack",

      "Processes callbacks from queues",

      "Enables non-blocking behavior",

      "Essential for asynchronous JavaScript",
    ],

    codeExample: `console.log("Start");

setTimeout(() => {

  console.log("Timer");

}, 0);

console.log("End");




// OUTPUT

// Start
// End
// Timer




// EXECUTION FLOW

// Call Stack:
// console.log("Start")

// Web API:
// setTimeout()

// Call Stack:
// console.log("End")

// Event Loop checks stack

// Callback Queue:
// console.log("Timer")

// Callback moved
// to Call Stack




// FETCH EXAMPLE

fetch("/users")
  .then(response =>
    response.json()
  )
  .then(data => {

    console.log(data);

  });`,

    language: "javascript",

    commonMistakes: [
      "Thinking setTimeout(0) executes immediately",

      "Confusing the call stack and callback queue",

      "Ignoring Web APIs",

      "Misunderstanding async execution order",

      "Assuming JavaScript is multi-threaded",
    ],

    thinkingProcess: `Step 1: Explain JavaScript's single-threaded nature

Step 2: Introduce Call Stack

Step 3: Introduce Web APIs

Step 4: Explain Callback Queue

Step 5: Explain Event Loop workflow`,

    realWorldApplication:
      "The Event Loop powers API requests, animations, timers, user interactions, real-time applications, and nearly every asynchronous feature in modern web applications.",

    interviewTip:
      "A complete answer should mention the Call Stack, Web APIs, Callback Queue, and Event Loop working together. Interviewers frequently ask for this flow.",
  },
  {
    id: "js-41",

    question: "What are callbacks and callback hell?",

    difficulty: "Intermediate",

    shortAnswer:
      "A callback is a function passed to another function to be executed later. Callback hell occurs when multiple nested callbacks make code difficult to read and maintain.",

    detailedAnswer: `CALLBACK

A callback is a function passed as an argument to another function.

It is executed after a task completes.

Callbacks are commonly used for:

- API requests
- Event handling
- Timers
- Asynchronous operations

Example:

getData(function(result) {
  console.log(result);
});

CALLBACK HELL

When callbacks become deeply nested, code becomes difficult to:

- Read
- Debug
- Maintain

This situation is called Callback Hell or the Pyramid of Doom.

Problems:

- Poor readability
- Difficult error handling
- Hard to maintain

Modern JavaScript solves callback hell using:

- Promises
- Async/Await

These approaches provide cleaner and more manageable asynchronous code.`,

    keyPoints: [
      "Callbacks are functions passed to other functions",

      "Callbacks execute after a task completes",

      "Nested callbacks create callback hell",

      "Callback hell reduces readability",

      "Promises and async/await solve callback hell",
    ],

    codeExample: `// SIMPLE CALLBACK

function greet(name, callback) {

  console.log(
    "Hello " + name
  );

  callback();

}

greet(
  "John",
  function() {

    console.log(
      "Welcome!"
    );

  }
);




// CALLBACK HELL

getUser(function(user) {

  getOrders(
    user.id,

    function(orders) {

      getPayment(
        orders[0].id,

        function(payment) {

          console.log(
            payment
          );

        }

      );

    }

  );

});




// BETTER WITH PROMISES

getUser()
  .then(user =>
    getOrders(user.id)
  )
  .then(orders =>
    getPayment(
      orders[0].id
    )
  )
  .then(payment =>
    console.log(payment)
  );`,

    language: "javascript",

    commonMistakes: [
      "Creating deeply nested callbacks",

      "Ignoring error handling",

      "Calling callbacks multiple times",

      "Confusing callbacks with return values",

      "Not using promises for complex async flows",
    ],

    thinkingProcess: `Step 1: Define callback

Step 2: Show callback example

Step 3: Explain callback hell

Step 4: Discuss its problems

Step 5: Introduce modern alternatives`,

    realWorldApplication:
      "Callbacks are used in event listeners, timers, and older asynchronous codebases. Modern applications often replace complex callback chains with promises and async/await.",

    interviewTip:
      "Mention that callback hell is not caused by callbacks themselves, but by excessive nesting of asynchronous callbacks.",
  },
  {
    id: "js-42",

    question: "What are Promises in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "A Promise is an object that represents the eventual success or failure of an asynchronous operation.",

    detailedAnswer: `Promises were introduced in ES6 to simplify asynchronous programming.

A Promise represents a value that may be available:

- Now
- Later
- Never

Promises help avoid callback hell and improve readability.

Creating a Promise:

const promise =
  new Promise((resolve, reject) => {
    // async work
  });

resolve(value)
  → Success

reject(error)
  → Failure

Consuming a Promise:

.then()
.catch()
.finally()

Benefits:

- Cleaner async code
- Better error handling
- Promise chaining
- Foundation for async/await

Promises are heavily used for:

- API requests
- Database operations
- File processing
- Authentication systems`,

    keyPoints: [
      "Promises represent future values",

      "Promises handle asynchronous operations",

      "resolve indicates success",

      "reject indicates failure",

      "Promises help avoid callback hell",
    ],

    codeExample: `// CREATE PROMISE

const promise =
  new Promise(
    (resolve, reject) => {

      const success = true;

      if (success) {

        resolve(
          "Operation Successful"
        );

      } else {

        reject(
          "Operation Failed"
        );

      }

    }
  );




// CONSUME PROMISE

promise
  .then(result => {

    console.log(result);

  })
  .catch(error => {

    console.error(error);

  });




// API EXAMPLE

fetch("/users")
  .then(response =>
    response.json()
  )
  .then(data => {

    console.log(data);

  })
  .catch(error => {

    console.error(error);

  });`,

    language: "javascript",

    commonMistakes: [
      "Forgetting to handle errors",

      "Mixing callbacks and promises unnecessarily",

      "Not returning promises inside chains",

      "Ignoring promise rejection",

      "Creating overly complex chains",
    ],

    thinkingProcess: `Step 1: Define Promise

Step 2: Explain resolve and reject

Step 3: Show promise creation

Step 4: Explain .then and .catch

Step 5: Discuss practical uses`,

    realWorldApplication:
      "Promises are used for API requests, authentication, payments, cloud services, file uploads, and nearly every modern asynchronous workflow.",

    interviewTip:
      'A common answer is: "A Promise is an object representing the eventual completion or failure of an asynchronous operation."',
  },
  {
    id: "js-43",

    question: "What are Promise states (pending, fulfilled, rejected)?",

    difficulty: "Intermediate",

    shortAnswer:
      "A Promise can be in one of three states: pending, fulfilled, or rejected.",

    detailedAnswer: `Every Promise has a lifecycle consisting of three states.

1. PENDING

Initial state.

The asynchronous operation is still running.

Example:

- Waiting for API response
- Waiting for file upload

2. FULFILLED

The operation completed successfully.

resolve() is called.

Example:

resolve(data);

3. REJECTED

The operation failed.

reject() is called.

Example:

reject(error);

STATE TRANSITIONS

Pending
   ↓
Fulfilled

OR

Pending
   ↓
Rejected

Important:

A Promise can change state only once.

Once fulfilled or rejected, it becomes settled and cannot change again.`,

    keyPoints: [
      "Promises start in pending state",

      "Successful completion becomes fulfilled",

      "Failure becomes rejected",

      "Promises settle only once",

      "Fulfilled and rejected are final states",
    ],

    codeExample: `// PENDING

const promise =
  new Promise(
    (resolve, reject) => {

      setTimeout(() => {

        resolve(
          "Success"
        );

      }, 2000);

    }
  );




// FULFILLED

const successPromise =
  Promise.resolve(
    "Data Loaded"
  );

successPromise
  .then(data => {

    console.log(data);

  });




// REJECTED

const errorPromise =
  Promise.reject(
    "Something Failed"
  );

errorPromise
  .catch(error => {

    console.error(error);

  });




// LIFECYCLE EXAMPLE

new Promise(
  (resolve, reject) => {

    const success = true;

    if (success) {

      resolve("Done");

    } else {

      reject("Failed");

    }

  }
);`,

    language: "javascript",

    commonMistakes: [
      "Assuming promises can change state multiple times",

      "Ignoring rejected promises",

      "Forgetting catch handlers",

      "Confusing pending with blocked execution",

      "Misunderstanding promise lifecycle",
    ],

    thinkingProcess: `Step 1: Introduce Promise lifecycle

Step 2: Explain pending state

Step 3: Explain fulfilled state

Step 4: Explain rejected state

Step 5: Discuss state transitions`,

    realWorldApplication:
      "Promise states are visible when working with APIs, authentication systems, payment gateways, cloud storage, and real-time applications.",

    interviewTip:
      'Interviewers often ask: "How many states does a Promise have?" Answer: Pending, Fulfilled, and Rejected. Once fulfilled or rejected, it cannot change again.',
  },
  {
    id: "js-44",

    question: "What is async/await in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "async/await is a modern syntax built on top of Promises that makes asynchronous code look and behave more like synchronous code.",

    detailedAnswer: `Async/Await was introduced in ES2017 to simplify working with Promises.

ASYNC

The async keyword is added before a function.

An async function always returns a Promise.

Example:

async function getData() {
  return "Hello";
}

Equivalent to:

Promise.resolve("Hello")

AWAIT

The await keyword pauses execution until a Promise settles.

It can only be used inside async functions.

Benefits:

- Cleaner syntax
- Better readability
- Easier debugging
- Simpler error handling

Async/Await does not replace Promises.

It is simply a cleaner way to work with them.`,

    keyPoints: [
      "async functions always return Promises",

      "await pauses execution until Promise completion",

      "Makes asynchronous code easier to read",

      "Built on top of Promises",

      "Supports try/catch error handling",
    ],

    codeExample: `// ASYNC FUNCTION

async function greet() {

  return "Hello";

}

greet().then(
  message => {

    console.log(message);

  }
);




// AWAIT

async function fetchUser() {

  const response =
    await fetch("/users");

  const data =
    await response.json();

  console.log(data);

}

fetchUser();




// RETURN VALUE

async function getNumber() {

  return 100;

}

getNumber()
  .then(num => {

    console.log(num);

  });

// 100`,

    language: "javascript",

    commonMistakes: [
      "Using await outside async functions",

      "Forgetting async keyword",

      "Assuming async makes code synchronous",

      "Ignoring error handling",

      "Mixing async/await and callbacks unnecessarily",
    ],

    thinkingProcess: `Step 1: Explain async

Step 2: Explain await

Step 3: Show Promise relationship

Step 4: Demonstrate API example

Step 5: Discuss benefits`,

    realWorldApplication:
      "Async/await is widely used for API requests, database queries, authentication systems, file uploads, and cloud services.",

    interviewTip:
      "Mention that async/await is built on top of Promises and provides cleaner syntax, not a different asynchronous mechanism.",
  },
  {
    id: "js-45",

    question: "What is the difference between Promises and async/await?",

    difficulty: "Intermediate",

    shortAnswer:
      "Promises use .then() and .catch() chaining, while async/await provides a cleaner syntax for working with Promises.",

    detailedAnswer: `Promises and Async/Await both handle asynchronous operations.

ASYNC/AWAIT is built on top of Promises.

PROMISE STYLE

Uses:

- .then()
- .catch()
- .finally()

Example:

fetch("/users")
  .then(...)
  .catch(...)

ASYNC/AWAIT STYLE

Uses:

- async
- await
- try/catch

Example:

const data =
  await fetch("/users");

Advantages of Async/Await:

- More readable
- Easier to understand
- Looks like synchronous code
- Better error handling

Advantages of Promises:

- Easier parallel execution
- Better for chaining complex workflows
- Useful with Promise utilities

Both approaches are valid and commonly used.`,

    keyPoints: [
      "Async/await is built on Promises",

      "Promises use .then and .catch",

      "Async/await uses async and await",

      "Async/await improves readability",

      "Both solve asynchronous problems",
    ],

    codeExample: `// PROMISE STYLE

fetch("/users")
  .then(response =>
    response.json()
  )
  .then(data => {

    console.log(data);

  })
  .catch(error => {

    console.error(error);

  });




// ASYNC/AWAIT STYLE

async function getUsers() {

  try {

    const response =
      await fetch("/users");

    const data =
      await response.json();

    console.log(data);

  } catch (error) {

    console.error(error);

  }

}

getUsers();




// PARALLEL EXECUTION

const results =
  await Promise.all([
    fetch("/users"),
    fetch("/posts")
  ]);`,

    language: "javascript",

    commonMistakes: [
      "Thinking async/await replaces Promises",

      "Forgetting try/catch",

      "Using await unnecessarily",

      "Ignoring Promise.all for parallel tasks",

      "Mixing patterns inconsistently",
    ],

    thinkingProcess: `Step 1: Explain Promise syntax

Step 2: Explain async/await syntax

Step 3: Compare readability

Step 4: Compare error handling

Step 5: Discuss when to use each`,

    realWorldApplication:
      "Modern applications primarily use async/await, while Promise methods remain important for advanced asynchronous workflows and parallel requests.",

    interviewTip:
      "The best answer is: async/await is syntactic sugar over Promises, making asynchronous code easier to read and maintain.",
  },
  {
    id: "js-46",

    question:
      "What is Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any()?",

    difficulty: "Advanced",

    shortAnswer:
      "These Promise utility methods help manage multiple Promises simultaneously, each with different completion behavior.",

    detailedAnswer: `JavaScript provides several utility methods for handling multiple Promises.

PROMISE.ALL()

Waits for all Promises to succeed.

Returns:

Array of results.

Fails immediately if any Promise rejects.

PROMISE.RACE()

Returns the first Promise that settles.

Can resolve or reject.

PROMISE.ALLSETTLED()

Waits for every Promise to finish.

Returns status and value/reason for each Promise.

Never rejects.

PROMISE.ANY()

Returns the first successfully fulfilled Promise.

Ignores rejected Promises.

Rejects only if all Promises fail.

These methods are useful for coordinating multiple asynchronous operations efficiently.`,

    keyPoints: [
      "Promise.all waits for all successes",

      "Promise.race returns first settled Promise",

      "Promise.allSettled waits for every Promise",

      "Promise.any returns first successful Promise",

      "Useful for parallel asynchronous operations",
    ],

    codeExample: `// PROMISE.ALL

Promise.all([

  fetch("/users"),

  fetch("/posts")

])
.then(results => {

  console.log(results);

});




// PROMISE.RACE

Promise.race([

  fetch("/fast"),

  fetch("/slow")

])
.then(result => {

  console.log(result);

});




// PROMISE.ALLSETTLED

Promise.allSettled([

  Promise.resolve("Success"),

  Promise.reject("Failed")

])
.then(results => {

  console.log(results);

});




// PROMISE.ANY

Promise.any([

  Promise.reject("Error"),

  Promise.resolve("Winner"),

  Promise.resolve("Another")

])
.then(result => {

  console.log(result);

});

// Winner`,

    language: "javascript",

    commonMistakes: [
      "Using Promise.all when failures are expected",

      "Confusing race and any",

      "Ignoring rejected Promises",

      "Not understanding allSettled results",

      "Using sequential execution when parallel execution is possible",
    ],

    thinkingProcess: `Step 1: Introduce Promise utilities

Step 2: Explain Promise.all

Step 3: Explain Promise.race

Step 4: Explain Promise.allSettled

Step 5: Explain Promise.any and compare all methods`,

    realWorldApplication:
      "These methods are used for parallel API requests, loading dashboards, fetching multiple resources, failover systems, and performance optimization.",

    interviewTip:
      "A common interview question is the difference between Promise.all and Promise.allSettled. Promise.all fails on the first rejection, while Promise.allSettled waits for every Promise to finish.",
  },
  {
    id: "js-47",

    question: "What is the DOM (Document Object Model)?",

    difficulty: "Basic",

    shortAnswer:
      "The DOM is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to access and modify webpage content.",

    detailedAnswer: `The DOM (Document Object Model) is a representation of an HTML document created by the browser.

When a webpage loads:

1. Browser reads HTML
2. Creates a DOM tree
3. JavaScript can interact with that tree

Each HTML element becomes an object called a Node.

Example:

<html>
 └── <body>
      └── <h1>
      └── <p>

Using the DOM, JavaScript can:

- Add elements
- Remove elements
- Update text
- Change styles
- Handle events

Without the DOM, JavaScript would not be able to manipulate webpages dynamically.

The DOM acts as a bridge between HTML and JavaScript.`,

    keyPoints: [
      "DOM represents HTML as objects",

      "Browser creates DOM automatically",

      "JavaScript manipulates the DOM",

      "DOM structure is tree-like",

      "Enables dynamic web pages",
    ],

    codeExample: `<!-- HTML -->

<h1 id="title">
  Welcome
</h1>




<script>

const heading =
  document.getElementById(
    "title"
  );

console.log(
  heading
);

heading.textContent =
  "Hello JavaScript";

</script>`,

    language: "javascript",

    commonMistakes: [
      "Confusing HTML and DOM",

      "Manipulating DOM excessively",

      "Accessing elements before page load",

      "Ignoring performance impacts",

      "Not understanding DOM tree structure",
    ],

    thinkingProcess: `Step 1: Define DOM

Step 2: Explain browser creation process

Step 3: Explain tree structure

Step 4: Show JavaScript interaction

Step 5: Discuss real-world importance`,

    realWorldApplication:
      "The DOM powers interactive websites by allowing JavaScript to update content, forms, animations, dashboards, and user interfaces dynamically.",

    interviewTip:
      'A strong answer is: "The DOM is a tree-like representation of an HTML document that JavaScript uses to access and manipulate webpage elements."',
  },
  {
    id: "js-48",

    question: "How do you select elements in the DOM?",

    difficulty: "Basic",

    shortAnswer:
      "DOM elements can be selected using methods such as getElementById(), querySelector(), querySelectorAll(), and getElementsByClassName().",

    detailedAnswer: `JavaScript provides several ways to select DOM elements.

1. getElementById()

Selects an element by ID.

2. getElementsByClassName()

Selects elements by class name.

Returns HTMLCollection.

3. getElementsByTagName()

Selects elements by tag name.

4. querySelector()

Returns the first matching element.

5. querySelectorAll()

Returns all matching elements.

Returns NodeList.

querySelector and querySelectorAll are the most commonly used methods because they support CSS selectors.`,

    keyPoints: [
      "getElementById selects by ID",

      "querySelector returns first match",

      "querySelectorAll returns all matches",

      "CSS selectors can be used",

      "querySelector is widely preferred",
    ],

    codeExample: `<!-- HTML -->

<h1 id="title">
  Welcome
</h1>

<p class="text">
  Paragraph 1
</p>

<p class="text">
  Paragraph 2
</p>




<script>

// ID

const title =
  document.getElementById(
    "title"
  );




// FIRST MATCH

const paragraph =
  document.querySelector(
    ".text"
  );




// ALL MATCHES

const paragraphs =
  document.querySelectorAll(
    ".text"
  );

console.log(
  paragraphs.length
);




// TAG NAME

const allParagraphs =
  document.getElementsByTagName(
    "p"
  );

</script>`,

    language: "javascript",

    commonMistakes: [
      "Forgetting # for IDs in querySelector",

      "Expecting querySelectorAll to return an array",

      "Using incorrect CSS selectors",

      "Selecting elements before page load",

      "Confusing HTMLCollection and NodeList",
    ],

    thinkingProcess: `Step 1: Explain selection methods

Step 2: Compare return types

Step 3: Demonstrate CSS selectors

Step 4: Explain common use cases

Step 5: Discuss best practices`,

    realWorldApplication:
      "DOM selection is used in forms, dashboards, navigation menus, modals, animations, and every interactive web application.",

    interviewTip:
      "Mention that querySelector and querySelectorAll support CSS selectors and are the most flexible options.",
  },
  {
    id: "js-49",

    question: "What is event bubbling and event capturing?",

    difficulty: "Intermediate",

    shortAnswer:
      "Event bubbling moves an event from the target element up to its ancestors, while event capturing moves from the outermost ancestor down to the target element.",

    detailedAnswer: `When an event occurs, JavaScript processes it through three phases:

1. Capturing Phase
2. Target Phase
3. Bubbling Phase

CAPTURING

Event starts from:

window
↓
document
↓
html
↓
body
↓
target element

BUBBLING

After reaching the target:

target element
↑
parent
↑
body
↑
html
↑
document

By default, most event listeners use the bubbling phase.

Capturing can be enabled using:

addEventListener(
  "click",
  handler,
  true
)

Understanding these phases helps with event delegation and debugging event behavior.`,

    keyPoints: [
      "Events travel through capturing and bubbling phases",

      "Bubbling is the default behavior",

      "Capturing moves top-down",

      "Bubbling moves bottom-up",

      "Useful for event delegation",
    ],

    codeExample: `<!-- HTML -->

<div id="parent">

  <button id="child">
    Click Me
  </button>

</div>




<script>

const parent =
  document.getElementById(
    "parent"
  );

const child =
  document.getElementById(
    "child"
  );




// BUBBLING

parent.addEventListener(
  "click",
  () => {

    console.log(
      "Parent"
    );

  }
);

child.addEventListener(
  "click",
  () => {

    console.log(
      "Child"
    );

  }
);

// Output:
// Child
// Parent




// CAPTURING

parent.addEventListener(
  "click",
  () => {

    console.log(
      "Capturing Parent"
    );

  },
  true
);

</script>`,

    language: "javascript",

    commonMistakes: [
      "Confusing capturing and bubbling",

      "Ignoring default bubbling behavior",

      "Using unnecessary event listeners",

      "Not understanding event propagation",

      "Forgetting stopPropagation()",
    ],

    thinkingProcess: `Step 1: Define event propagation

Step 2: Explain capturing phase

Step 3: Explain target phase

Step 4: Explain bubbling phase

Step 5: Demonstrate examples`,

    realWorldApplication:
      "Event propagation is important in menus, modals, forms, dashboards, and event delegation patterns.",

    interviewTip:
      "Always mention the three phases: Capturing, Target, and Bubbling.",
  },
  {
    id: "js-50",

    question: "What is event delegation?",

    difficulty: "Intermediate",

    shortAnswer:
      "Event delegation is a technique where a single parent element handles events for its child elements using event bubbling.",

    detailedAnswer: `Event delegation improves performance by reducing the number of event listeners.

Instead of attaching listeners to many child elements:

<button>1</button>
<button>2</button>
<button>3</button>

Attach one listener to the parent.

How it works:

1. Child triggers event.
2. Event bubbles to parent.
3. Parent handles the event.

Benefits:

- Better performance
- Less memory usage
- Easier maintenance
- Supports dynamically added elements

Event delegation commonly uses:

event.target

to identify which child triggered the event.`,

    keyPoints: [
      "Uses event bubbling",

      "Parent handles child events",

      "Improves performance",

      "Reduces number of listeners",

      "Works with dynamic elements",
    ],

    codeExample: `<!-- HTML -->

<ul id="menu">

  <li>Home</li>

  <li>About</li>

  <li>Contact</li>

</ul>




<script>

const menu =
  document.getElementById(
    "menu"
  );

menu.addEventListener(
  "click",
  function(event) {

    console.log(
      event.target.textContent
    );

  }
);




// DYNAMIC ELEMENTS

const list =
  document.getElementById(
    "list"
  );

list.addEventListener(
  "click",
  event => {

    if (
      event.target.tagName ===
      "LI"
    ) {

      console.log(
        event.target.textContent
      );

    }

  }
);

</script>`,

    language: "javascript",

    commonMistakes: [
      "Attaching listeners to every child element",

      "Ignoring event.target",

      "Using delegation on unrelated elements",

      "Not understanding bubbling",

      "Forgetting conditional checks",
    ],

    thinkingProcess: `Step 1: Explain event bubbling

Step 2: Introduce delegation

Step 3: Show parent listener approach

Step 4: Explain event.target

Step 5: Discuss performance benefits`,

    realWorldApplication:
      "Event delegation is widely used in tables, menus, chat applications, dashboards, todo apps, and dynamically generated content.",

    interviewTip:
      'A common interview answer is: "Event delegation uses a parent element and event bubbling to manage events for multiple child elements with a single listener."',
  },
  {
    id: "js-51",

    question: "What is preventDefault() in JavaScript?",

    difficulty: "Basic",

    shortAnswer:
      "preventDefault() stops the browser’s default behavior for an event from occurring.",

    detailedAnswer: `Many HTML elements have built-in default behaviors.

Examples:

- Form submission reloads the page
- Clicking a link navigates to another page
- Right-click opens the context menu

The preventDefault() method prevents these default actions.

Syntax:

event.preventDefault();

This allows developers to implement custom behavior instead of the browser's default behavior.

Common use cases:

- Form validation
- Single Page Applications (SPA)
- Custom navigation
- Custom drag-and-drop interactions

Important:

preventDefault() only prevents the default action.
It does not stop event propagation.`,

    keyPoints: [
      "Stops browser default actions",

      "Commonly used with forms and links",

      "Does not stop event bubbling",

      "Allows custom event handling",

      "Requires an event object",
    ],

    codeExample: `// FORM SUBMISSION

const form =
  document.querySelector("form");

form.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();

    console.log(
      "Form Submitted Without Reload"
    );

  }
);




// LINK CLICK

const link =
  document.querySelector("a");

link.addEventListener(
  "click",
  function(event) {

    event.preventDefault();

    console.log(
      "Navigation Prevented"
    );

  }
);`,

    language: "javascript",

    commonMistakes: [
      "Confusing preventDefault with stopPropagation",

      "Forgetting to pass the event object",

      "Using preventDefault unnecessarily",

      "Expecting it to stop bubbling",

      "Not handling form data after preventing submission",
    ],

    thinkingProcess: `Step 1: Explain default browser actions

Step 2: Introduce preventDefault

Step 3: Show form example

Step 4: Show link example

Step 5: Explain limitations`,

    realWorldApplication:
      "Used in login forms, checkout forms, SPA routing, drag-and-drop systems, and custom UI interactions.",

    interviewTip:
      "A common interview point is that preventDefault() stops browser behavior but does NOT stop event propagation.",
  },
  {
    id: "js-52",

    question: "What is stopPropagation() in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "stopPropagation() prevents an event from propagating further through the DOM tree during bubbling or capturing phases.",

    detailedAnswer: `JavaScript events normally propagate through the DOM.

When a child element is clicked:

1. Target element receives event
2. Event bubbles to parent
3. Event continues upward

stopPropagation() prevents this propagation.

Syntax:

event.stopPropagation();

Important:

preventDefault()
→ Stops browser action

stopPropagation()
→ Stops event propagation

They solve different problems.

Use stopPropagation when you want an event to affect only the current element and not its ancestors.`,

    keyPoints: [
      "Stops event propagation",

      "Works during bubbling and capturing",

      "Different from preventDefault",

      "Prevents parent handlers from running",

      "Useful for nested elements",
    ],

    codeExample: `<!-- HTML -->

<div id="parent">

  <button id="child">
    Click
  </button>

</div>




<script>

const parent =
  document.getElementById(
    "parent"
  );

const child =
  document.getElementById(
    "child"
  );

parent.addEventListener(
  "click",
  () => {

    console.log(
      "Parent Clicked"
    );

  }
);

child.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    console.log(
      "Child Clicked"
    );

  }
);

// Output:
// Child Clicked

</script>`,

    language: "javascript",

    commonMistakes: [
      "Confusing it with preventDefault",

      "Stopping propagation unnecessarily",

      "Forgetting event object",

      "Not understanding bubbling",

      "Blocking useful parent handlers",
    ],

    thinkingProcess: `Step 1: Explain event propagation

Step 2: Explain bubbling

Step 3: Introduce stopPropagation

Step 4: Compare with preventDefault

Step 5: Show example`,

    realWorldApplication:
      "Used in modals, dropdown menus, context menus, nested buttons, and interactive dashboard components.",

    interviewTip:
      "Remember: preventDefault stops browser behavior, stopPropagation stops event movement through the DOM.",
  },
  {
    id: "js-53",

    question: "What is localStorage, sessionStorage, and cookies?",

    difficulty: "Intermediate",

    shortAnswer:
      "These are browser storage mechanisms used to store data on the client side, each with different lifetimes and behaviors.",

    detailedAnswer: `Web applications often need to store data in the browser.

LOCAL STORAGE

- Persistent storage
- Data remains after browser restart
- Capacity around 5–10 MB
- Shared across tabs of same origin

SESSION STORAGE

- Temporary storage
- Exists only for current tab session
- Cleared when tab closes
- Similar API to localStorage

COOKIES

- Small pieces of data
- Sent with HTTP requests
- Used for authentication
- Smaller storage size (~4 KB)

Comparison:

localStorage
✓ Persistent

sessionStorage
✓ Per-tab temporary

cookies
✓ Sent to server automatically

Choose storage based on your application's requirements.`,

    keyPoints: [
      "localStorage persists after browser restart",

      "sessionStorage lasts for one tab session",

      "Cookies are sent to servers",

      "All store data as strings",

      "Commonly used for user preferences and authentication",
    ],

    codeExample: `// LOCAL STORAGE

localStorage.setItem(
  "name",
  "John"
);

console.log(
  localStorage.getItem(
    "name"
  )
);

localStorage.removeItem(
  "name"
);




// SESSION STORAGE

sessionStorage.setItem(
  "theme",
  "dark"
);

console.log(
  sessionStorage.getItem(
    "theme"
  )
);




// COOKIES

document.cookie =
  "username=John";

console.log(
  document.cookie
);




// CLEAR STORAGE

localStorage.clear();

sessionStorage.clear();`,

    language: "javascript",

    commonMistakes: [
      "Storing sensitive data in localStorage",

      "Forgetting data is stored as strings",

      "Using cookies for large data",

      "Ignoring storage limits",

      "Not handling missing values",
    ],

    thinkingProcess: `Step 1: Explain browser storage

Step 2: Introduce localStorage

Step 3: Introduce sessionStorage

Step 4: Introduce cookies

Step 5: Compare advantages and limitations`,

    realWorldApplication:
      "Used for authentication tokens, shopping carts, themes, language preferences, and temporary session data.",

    interviewTip:
      "A common interview question is the difference between localStorage and sessionStorage. Focus on persistence and tab lifetime.",
  },
  {
    id: "js-54",

    question: "What is JSON and how do JSON.parse() and JSON.stringify() work?",

    difficulty: "Basic",

    shortAnswer:
      "JSON (JavaScript Object Notation) is a lightweight data format used for data exchange. JSON.stringify converts objects to JSON strings, while JSON.parse converts JSON strings back into JavaScript objects.",

    detailedAnswer: `JSON stands for JavaScript Object Notation.

It is a text-based format used for:

- APIs
- Data storage
- Configuration files
- Data exchange between systems

JSON supports:

- Strings
- Numbers
- Booleans
- Arrays
- Objects
- null

JSON.stringify()

Converts a JavaScript object into a JSON string.

JSON.parse()

Converts a JSON string back into a JavaScript object.

Most APIs return JSON data, making these methods extremely important for web development.`,

    keyPoints: [
      "JSON is a text-based data format",

      "Used heavily in APIs",

      "JSON.stringify converts objects to strings",

      "JSON.parse converts strings to objects",

      "JSON data is language-independent",
    ],

    codeExample: `// JAVASCRIPT OBJECT

const user = {

  name: "John",

  age: 25

};




// OBJECT TO JSON

const jsonString =
  JSON.stringify(user);

console.log(
  jsonString
);

// {"name":"John","age":25}




// JSON TO OBJECT

const parsedUser =
  JSON.parse(jsonString);

console.log(
  parsedUser.name
);

// John




// API EXAMPLE

fetch("/users")
  .then(response =>
    response.json()
  )
  .then(data => {

    console.log(data);

  });`,

    language: "javascript",

    commonMistakes: [
      "Forgetting JSON is a string",

      "Using single quotes in JSON",

      "Parsing invalid JSON",

      "Confusing objects with JSON strings",

      "Ignoring parse errors",
    ],

    thinkingProcess: `Step 1: Define JSON

Step 2: Explain JSON structure

Step 3: Explain stringify

Step 4: Explain parse

Step 5: Show API usage`,

    realWorldApplication:
      "JSON is used in REST APIs, localStorage, configuration files, databases, cloud services, and communication between frontend and backend systems.",

    interviewTip:
      "Interviewers often ask the difference between a JavaScript object and JSON. JSON is a string format, while objects are actual JavaScript data structures.",
  },
  {
    id: "js-55",

    question: "What is destructuring in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Destructuring is a JavaScript feature that allows you to extract values from objects and arrays into individual variables.",

    detailedAnswer: `Destructuring was introduced in ES6 to simplify extracting values from arrays and objects.

Without destructuring:

const user = {
  name: "John",
  age: 25
};

const name = user.name;
const age = user.age;

With destructuring:

const { name, age } = user;

Benefits:

- Cleaner code
- Less repetition
- Easier parameter handling
- Better readability

Destructuring works with:

- Objects
- Arrays
- Function parameters
- Nested data structures

It is heavily used in modern JavaScript and React applications.`,

    keyPoints: [
      "Introduced in ES6",

      "Extracts values from objects and arrays",

      "Reduces repetitive code",

      "Supports default values",

      "Widely used in React",
    ],

    codeExample: `// OBJECT DESTRUCTURING

const user = {

  name: "John",

  age: 25

};

const {
  name,
  age
} = user;

console.log(name);
console.log(age);




// ARRAY DESTRUCTURING

const colors =

  ["Red", "Blue", "Green"];

const [
  first,
  second
] = colors;

console.log(first);
// Red

console.log(second);
// Blue




// DEFAULT VALUES

const {
  country = "India"
} = user;

console.log(country);
// India




// FUNCTION PARAMETERS

function greet({

  name

}) {

  console.log(
    "Hello " + name
  );

}

greet(user);`,

    language: "javascript",

    commonMistakes: [
      "Using incorrect property names",

      "Confusing object and array syntax",

      "Ignoring default values",

      "Destructuring undefined values",

      "Overusing nested destructuring",
    ],

    thinkingProcess: `Step 1: Define destructuring

Step 2: Show object destructuring

Step 3: Show array destructuring

Step 4: Explain defaults

Step 5: Demonstrate practical usage`,

    realWorldApplication:
      "Destructuring is used in React props, API responses, configuration objects, and function parameters.",

    interviewTip:
      "Mention that destructuring improves readability and is commonly used with API data and React components.",
  },
  {
    id: "js-56",

    question: "What is the spread operator (...) in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "The spread operator (...) expands arrays, objects, or iterable values into individual elements.",

    detailedAnswer: `The spread operator (...) was introduced in ES6.

It allows iterable values to be expanded into individual elements.

Common Uses:

1. Copy arrays
2. Merge arrays
3. Copy objects
4. Merge objects
5. Pass multiple arguments

Benefits:

- Cleaner syntax
- Immutable updates
- Easier data manipulation

Spread creates shallow copies.

Nested objects are still referenced, not deeply copied.`,

    keyPoints: [
      "Uses three dots (...)",

      "Expands arrays and objects",

      "Useful for copying and merging",

      "Creates shallow copies",

      "Common in React state updates",
    ],

    codeExample: `// ARRAY COPY

const numbers =

  [1, 2, 3];

const copy =

  [...numbers];

console.log(copy);




// ARRAY MERGE

const a = [1, 2];

const b = [3, 4];

const merged =

  [...a, ...b];

console.log(merged);




// OBJECT COPY

const user = {

  name: "John"

};

const newUser = {

  ...user

};

console.log(newUser);




// OBJECT MERGE

const userInfo = {

  age: 25

};

const completeUser = {

  ...user,

  ...userInfo

};

console.log(completeUser);




// FUNCTION ARGUMENTS

const nums =

  [10, 20, 30];

console.log(

  Math.max(...nums)

);`,

    language: "javascript",

    commonMistakes: [
      "Assuming deep copy",

      "Using spread on non-iterables",

      "Confusing spread and rest operators",

      "Overwriting object properties accidentally",

      "Ignoring nested references",
    ],

    thinkingProcess: `Step 1: Define spread operator

Step 2: Explain array usage

Step 3: Explain object usage

Step 4: Show function argument usage

Step 5: Discuss shallow copying`,

    realWorldApplication:
      "Spread is used in React state updates, array manipulation, object merging, and API data processing.",

    interviewTip:
      "Explain that spread expands values, while rest collects values. Interviewers often compare these two operators.",
  },
  {
    id: "js-57",

    question: "What is the rest operator (...) in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "The rest operator (...) collects multiple values into a single array or object.",

    detailedAnswer: `The rest operator uses the same (...) syntax as the spread operator but serves the opposite purpose.

Spread:
Expands values.

Rest:
Collects values.

Common Uses:

1. Function parameters
2. Destructuring
3. Remaining object properties

Benefits:

- Flexible functions
- Cleaner parameter handling
- Easier data extraction

The rest operator always appears at the end of parameter lists or destructuring patterns.`,

    keyPoints: [
      "Collects remaining values",

      "Uses the same syntax as spread",

      "Often used in functions",

      "Creates arrays of remaining values",

      "Must be the last parameter",
    ],

    codeExample: `// FUNCTION PARAMETERS

function sum(

  ...numbers

) {

  return numbers.reduce(

    (total, num) =>

      total + num,

    0

  );

}

console.log(

  sum(1, 2, 3, 4)

);




// ARRAY DESTRUCTURING

const colors =

  ["Red", "Blue", "Green", "Black"];

const [

  first,

  ...others

] = colors;

console.log(first);
// Red

console.log(others);
// ["Blue", "Green", "Black"]




// OBJECT DESTRUCTURING

const user = {

  name: "John",

  age: 25,

  city: "Mumbai"

};

const {

  name,

  ...details

} = user;

console.log(name);

console.log(details);`,

    language: "javascript",

    commonMistakes: [
      "Confusing rest with spread",

      "Not placing rest parameter last",

      "Using multiple rest parameters",

      "Ignoring returned arrays",

      "Expecting deep copies",
    ],

    thinkingProcess: `Step 1: Define rest operator

Step 2: Compare with spread

Step 3: Show function examples

Step 4: Show destructuring examples

Step 5: Explain rules and limitations`,

    realWorldApplication:
      "Rest parameters are commonly used in utility functions, React props handling, and dynamic argument processing.",

    interviewTip:
      "The easiest way to remember is: Spread expands, Rest collects.",
  },
  {
    id: "js-59",

    question: "What are ES6 Modules (import/export)?",

    difficulty: "Intermediate",

    shortAnswer:
      "ES6 Modules allow JavaScript code to be split into reusable files using export and import statements.",

    detailedAnswer: `Before ES6, JavaScript did not have a built-in module system.

Developers relied on:

- Global variables
- IIFEs
- CommonJS (Node.js)

ES6 introduced Modules.

Modules help:

- Organize code
- Reuse functionality
- Avoid global scope pollution
- Improve maintainability

EXPORT

Makes variables, functions, or classes available to other files.

IMPORT

Brings exported members into another file.

Types of Exports:

1. Named Export
2. Default Export

Modules work only when files are loaded as modules using:

<script type="module">

or modern build tools.`,

    keyPoints: [
      "Introduced in ES6",

      "Use export to share code",

      "Use import to consume code",

      "Supports named and default exports",

      "Improves code organization",
    ],

    codeExample: `// math.js

export const PI = 3.14;

export function add(a, b) {

  return a + b;

}




// app.js

import {

  PI,

  add

} from "./math.js";

console.log(PI);

console.log(add(5, 3));




// DEFAULT EXPORT

export default function greet() {

  console.log("Hello");

}




// IMPORT DEFAULT

import greet from "./greet.js";

greet();`,

    language: "javascript",

    commonMistakes: [
      "Forgetting file extensions",

      "Mixing named and default imports",

      'Using modules without type="module"',

      "Incorrect export syntax",

      "Importing non-exported values",
    ],

    thinkingProcess: `Step 1: Explain why modules exist

Step 2: Introduce export

Step 3: Introduce import

Step 4: Explain named vs default exports

Step 5: Show practical examples`,

    realWorldApplication:
      "Modules are used in React, Vue, Angular, Node.js, and virtually every modern JavaScript application.",

    interviewTip:
      "Know the difference between named exports and default exports. This is a very common interview question.",
  },
  {
    id: "js-60",

    question: "What are classes in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Classes are a blueprint for creating objects and provide a cleaner syntax for working with prototypes and object-oriented programming.",

    detailedAnswer: `Classes were introduced in ES6.

They provide a more familiar object-oriented syntax.

A class can contain:

- Constructor
- Properties
- Methods
- Getters
- Setters

The constructor runs automatically when a new object is created.

Important:

JavaScript classes are syntactic sugar over the prototype system.

Classes do not introduce a new inheritance model.

Benefits:

- Cleaner code
- Better organization
- Easier object creation
- Supports inheritance`,

    keyPoints: [
      "Introduced in ES6",

      "Blueprint for creating objects",

      "Uses constructor method",

      "Supports methods and inheritance",

      "Built on prototypes",
    ],

    codeExample: `class User {

  constructor(name, age) {

    this.name = name;

    this.age = age;

  }

  greet() {

    console.log(

      \`Hello, I am \${this.name}\`

    );

  }

}




const user1 =

  new User(

    "John",

    25

  );

user1.greet();

console.log(

  user1.age

);`,

    language: "javascript",

    commonMistakes: [
      "Forgetting new keyword",

      "Misunderstanding this",

      "Thinking classes replace prototypes",

      "Using methods as arrow functions unnecessarily",

      "Not understanding constructors",
    ],

    thinkingProcess: `Step 1: Define class

Step 2: Explain constructor

Step 3: Add methods

Step 4: Create instances

Step 5: Explain prototype relationship`,

    realWorldApplication:
      "Classes are commonly used in large applications, games, UI components, and backend systems.",

    interviewTip:
      "Mention that JavaScript classes are syntactic sugar over prototypes. Interviewers often expect this detail.",
  },
  {
    id: "js-61",

    question: "What is inheritance in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Inheritance allows one class to acquire properties and methods from another class using the extends keyword.",

    detailedAnswer: `Inheritance promotes code reuse.

A child class can inherit functionality from a parent class.

JavaScript uses:

extends

to create inheritance.

super()

is used to call the parent constructor.

Benefits:

- Reusability
- Cleaner architecture
- Reduced duplication
- Easier maintenance

JavaScript inheritance is based on prototypes, even when using classes.`,

    keyPoints: [
      "Inheritance promotes code reuse",

      "Uses extends keyword",

      "super() calls parent constructor",

      "Child classes inherit methods",

      "Built on prototypes",
    ],

    codeExample: `class Animal {

  constructor(name) {

    this.name = name;

  }

  speak() {

    console.log(

      \`\${this.name} makes a sound\`

    );

  }

}




class Dog extends Animal {

  constructor(name, breed) {

    super(name);

    this.breed = breed;

  }

  bark() {

    console.log(

      \`\${this.name} barks\`

    );

  }

}




const dog =

  new Dog(

    "Tommy",

    "Labrador"

  );

dog.speak();

dog.bark();`,

    language: "javascript",

    commonMistakes: [
      "Forgetting super()",

      "Not understanding parent-child relationships",

      "Overusing inheritance",

      "Confusing inheritance with composition",

      "Ignoring prototype behavior",
    ],

    thinkingProcess: `Step 1: Define inheritance

Step 2: Create parent class

Step 3: Create child class

Step 4: Use extends and super

Step 5: Demonstrate inherited methods`,

    realWorldApplication:
      "Inheritance is used in UI frameworks, game development, business models, and reusable component systems.",

    interviewTip:
      "Always mention extends and super() when explaining inheritance in ES6 classes.",
  },
  {
    id: "js-62",

    question: "What are getters and setters in JavaScript?",

    difficulty: "Intermediate",

    shortAnswer:
      "Getters and setters are special methods that control how object properties are read and updated.",

    detailedAnswer: `Getters and setters allow custom logic when accessing or modifying properties.

GETTER

Retrieves a value.

Uses the get keyword.

SETTER

Updates a value.

Uses the set keyword.

Benefits:

- Data validation
- Encapsulation
- Computed properties
- Cleaner APIs

They behave like normal properties but internally execute functions.`,

    keyPoints: [
      "Getters read values",

      "Setters update values",

      "Support validation",

      "Improve encapsulation",

      "Accessed like normal properties",
    ],

    codeExample: `class User {

  constructor(name) {

    this._name = name;

  }




  get name() {

    return this._name;

  }




  set name(value) {

    if (value.length < 3) {

      console.log(

        "Name too short"

      );

      return;

    }

    this._name = value;

  }

}




const user =

  new User("John");




// GETTER

console.log(

  user.name

);




// SETTER

user.name = "Alex";

console.log(

  user.name

);




// VALIDATION

user.name = "Al";

// Name too short`,

    language: "javascript",

    commonMistakes: [
      "Creating infinite recursion",

      "Using same property internally",

      "Ignoring validation",

      "Confusing methods and getters",

      "Overcomplicating simple properties",
    ],

    thinkingProcess: `Step 1: Define getters

Step 2: Define setters

Step 3: Show encapsulation

Step 4: Add validation logic

Step 5: Demonstrate property-like access`,

    realWorldApplication:
      "Getters and setters are used for validation, computed values, form handling, and state management systems.",

    interviewTip:
      "A common interview question is why _name is used internally. It prevents recursive getter/setter calls.",
  },
  {
    id: "js-63",

    question: "What is Object-Oriented Programming (OOP)?",

    difficulty: "Intermediate",

    shortAnswer:
      "Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects containing data and methods.",

    detailedAnswer: `Object-Oriented Programming (OOP) is a programming approach that models real-world entities as objects.

An object contains:

- Properties (data)
- Methods (behavior)

Example:

Car Object

Properties:
- color
- brand
- model

Methods:
- start()
- stop()
- accelerate()

Benefits of OOP:

- Code reusability
- Better organization
- Easier maintenance
- Improved scalability

JavaScript supports OOP through:

- Objects
- Prototypes
- Classes (ES6)

The four pillars of OOP are:

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism`,

    keyPoints: [
      "OOP models real-world entities",

      "Objects contain data and behavior",

      "Improves maintainability",

      "Promotes code reuse",

      "Built around four pillars",
    ],

    codeExample: `class Car {

  constructor(brand) {

    this.brand = brand;

  }

  start() {

    console.log(

      this.brand + " Started"

    );

  }

}

const car =

  new Car("BMW");

car.start();`,

    language: "javascript",

    commonMistakes: [
      "Confusing classes and objects",

      "Overusing inheritance",

      "Ignoring encapsulation",

      "Not understanding object relationships",

      "Treating OOP as mandatory",
    ],

    thinkingProcess: `Step 1: Define OOP

Step 2: Explain objects

Step 3: Explain properties and methods

Step 4: Discuss benefits

Step 5: Introduce four pillars`,

    realWorldApplication:
      "Used in large-scale applications, games, enterprise software, and frontend frameworks.",

    interviewTip:
      "Mention the four pillars of OOP because interviewers often ask them immediately after this question.",
  },
  {
    id: "js-64",

    question: "What are the four pillars of OOP?",

    difficulty: "Intermediate",

    shortAnswer:
      "The four pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.",

    detailedAnswer: `The four pillars form the foundation of Object-Oriented Programming.

1. ENCAPSULATION

Bundling data and methods together while restricting direct access.

2. ABSTRACTION

Showing only necessary details while hiding complexity.

3. INHERITANCE

Allowing one class to acquire properties and methods from another class.

4. POLYMORPHISM

Allowing the same method to behave differently depending on the object.

These principles help create reusable, scalable, and maintainable applications.`,

    keyPoints: [
      "Encapsulation protects data",

      "Abstraction hides complexity",

      "Inheritance promotes reuse",

      "Polymorphism enables flexibility",

      "Core concepts of OOP",
    ],

    codeExample: `// OOP PILLARS

Encapsulation
✔ Data protection

Abstraction
✔ Hide complexity

Inheritance
✔ Code reuse

Polymorphism
✔ Same interface,
different behavior`,

    language: "javascript",

    commonMistakes: [
      "Mixing abstraction and encapsulation",

      "Overusing inheritance",

      "Ignoring polymorphism",

      "Not understanding relationships",

      "Memorizing without examples",
    ],

    thinkingProcess: `Step 1: List four pillars

Step 2: Define each

Step 3: Explain purpose

Step 4: Relate to real-world objects

Step 5: Connect pillars together`,

    realWorldApplication:
      "Used in enterprise software, React component design, backend systems, and application architecture.",

    interviewTip:
      "Many interviewers ask this question exactly as a follow-up after OOP.",
  },
  {
    id: "js-65",

    question: "What is encapsulation?",

    difficulty: "Intermediate",

    shortAnswer:
      "Encapsulation is the practice of bundling data and methods together while restricting direct access to internal details.",

    detailedAnswer: `Encapsulation protects an object's internal state.

Instead of allowing direct access:

user.balance = -1000;

we control access through methods.

Benefits:

- Data protection
- Validation
- Better maintainability
- Controlled access

Modern JavaScript supports private fields using #.

Encapsulation helps prevent accidental modification of sensitive data.`,

    keyPoints: [
      "Protects internal data",

      "Uses methods for access",

      "Improves security",

      "Supports validation",

      "Important OOP principle",
    ],

    codeExample: `class BankAccount {

  #balance = 0;

  deposit(amount) {

    if (amount > 0) {

      this.#balance += amount;

    }

  }

  getBalance() {

    return this.#balance;

  }

}

const account =

  new BankAccount();

account.deposit(1000);

console.log(

  account.getBalance()

);

// 1000

// account.#balance ❌ Error`,

    language: "javascript",

    commonMistakes: [
      "Exposing internal data",

      "Ignoring validation",

      "Confusing with abstraction",

      "Using public fields for sensitive data",

      "Not understanding private fields",
    ],

    thinkingProcess: `Step 1: Define encapsulation

Step 2: Explain protection

Step 3: Introduce private fields

Step 4: Show controlled access

Step 5: Explain benefits`,

    realWorldApplication:
      "Used in banking systems, authentication systems, payment gateways, and business logic.",

    interviewTip:
      "Mention private fields (#) because it shows modern JavaScript knowledge.",
  },
  {
    id: "js-66",

    question: "What is polymorphism?",

    difficulty: "Intermediate",

    shortAnswer:
      "Polymorphism allows the same method name to perform different actions depending on the object using it.",

    detailedAnswer: `Polymorphism means "many forms."

The same method can behave differently for different objects.

Benefits:

- Flexibility
- Reusability
- Cleaner code

In JavaScript, polymorphism commonly occurs through method overriding.

A child class can provide its own implementation of a parent method.`,

    keyPoints: [
      "Means many forms",

      "Same method, different behavior",

      "Usually achieved via inheritance",

      "Improves flexibility",

      "Reduces duplicate code",
    ],

    codeExample: `class Animal {

  speak() {

    console.log("Animal Sound");

  }

}

class Dog extends Animal {

  speak() {

    console.log("Bark");

  }

}

class Cat extends Animal {

  speak() {

    console.log("Meow");

  }

}

const dog = new Dog();

const cat = new Cat();

dog.speak();
// Bark

cat.speak();
// Meow`,

    language: "javascript",

    commonMistakes: [
      "Confusing with inheritance",

      "Not overriding methods properly",

      "Ignoring parent-child relationship",

      "Overcomplicating implementations",

      "Forgetting method signatures",
    ],

    thinkingProcess: `Step 1: Define polymorphism

Step 2: Explain many forms

Step 3: Show inheritance example

Step 4: Demonstrate overriding

Step 5: Explain benefits`,

    realWorldApplication:
      "Used in UI components, payment systems, plugins, game engines, and enterprise applications.",

    interviewTip:
      "The most common JavaScript polymorphism example is method overriding.",
  },
  {
    id: "js-67",

    question: "What is call(), apply(), and bind()?",

    difficulty: "Advanced",

    shortAnswer:
      'call(), apply(), and bind() are methods used to control the value of "this" inside a function.',

    detailedAnswer: `JavaScript functions are objects and provide special methods:

1. call()
2. apply()
3. bind()

CALL()

Invokes a function immediately.

Arguments are passed individually.

APPLY()

Invokes a function immediately.

Arguments are passed as an array.

BIND()

Does not execute immediately.

Returns a new function with "this" permanently bound.

These methods are useful when borrowing methods from other objects or controlling context.`,

    keyPoints: [
      "Used to control this",

      "call executes immediately",

      "apply executes immediately",

      "bind returns a new function",

      "Frequently asked interview topic",
    ],

    codeExample: `const person = {

  name: "John"

};

function greet(city) {

  console.log(

    this.name +

    " from " +

    city

  );

}




// CALL

greet.call(

  person,

  "Mumbai"

);

// John from Mumbai




// APPLY

greet.apply(

  person,

  ["Delhi"]

);

// John from Delhi




// BIND

const newFunc =

  greet.bind(

    person,

    "Pune"

  );

newFunc();

// John from Pune`,

    language: "javascript",

    commonMistakes: [
      "Confusing call and apply",

      "Expecting bind to execute immediately",

      "Misunderstanding this",

      "Passing wrong arguments",

      "Using bind unnecessarily",
    ],

    thinkingProcess: `Step 1: Explain this

Step 2: Explain call

Step 3: Explain apply

Step 4: Explain bind

Step 5: Compare all three`,

    realWorldApplication:
      "Used in event handlers, React class components, function borrowing, and library development.",

    interviewTip:
      "The easiest way to remember is:call → arguments one by one, apply → arguments as array ,bind → returns new function.",
  },
  {
    id: "js-67",

    question: "What is an array?",

    difficulty: "Basic",

    shortAnswer:
      "An array is a special JavaScript object used to store multiple values in a single variable.",

    detailedAnswer: `An array is a data structure that allows you to store multiple values in a single variable.

Arrays can contain:

- Numbers
- Strings
- Booleans
- Objects
- Functions
- Other arrays

Arrays are ordered collections, meaning each value has an index.

Indexes start from 0.

Example:

["HTML", "CSS", "JavaScript"]

Index:

0 → HTML
1 → CSS
2 → JavaScript

Arrays are one of the most commonly used data structures in JavaScript.`,

    keyPoints: [
      "Stores multiple values",

      "Indexes start from 0",

      "Can contain mixed data types",

      "Ordered collection",

      "Provides many built-in methods",
    ],

    codeExample: `const fruits = [

  "Apple",

  "Banana",

  "Orange"

];

console.log(fruits);

console.log(

  fruits[0]

);

// Apple

console.log(

  fruits.length

);

// 3`,

    language: "javascript",

    commonMistakes: [
      "Assuming arrays start at index 1",

      "Accessing invalid indexes",

      "Confusing arrays with objects",

      "Ignoring array length",

      "Using wrong methods",
    ],

    thinkingProcess: `Step 1: Define array

Step 2: Explain indexes

Step 3: Show structure

Step 4: Demonstrate access

Step 5: Explain common use cases`,

    realWorldApplication:
      "Arrays are used for lists, products, users, messages, API data, and almost every modern application.",

    interviewTip:
      "Mention that arrays are ordered collections and indexes start at 0.",
  },
  {
    id: "js-68",

    question: "How do you create an array?",

    difficulty: "Basic",

    shortAnswer:
      "Arrays can be created using array literals [] or the Array constructor.",

    detailedAnswer: `JavaScript provides multiple ways to create arrays.

Most common:

Array Literal

const arr = [];

Alternative:

const arr = new Array();

Array literals are preferred because they are shorter and easier to read.

Arrays can contain:

- Strings
- Numbers
- Objects
- Mixed values

Array literals are considered best practice in modern JavaScript.`,

    keyPoints: [
      "Use [] syntax",

      "Array literals are preferred",

      "Can store mixed data types",

      "new Array() also works",

      "Arrays can be empty or pre-filled",
    ],

    codeExample: `// EMPTY ARRAY

const arr1 = [];




// WITH VALUES

const arr2 = [

  "HTML",

  "CSS",

  "JS"

];




// ARRAY CONSTRUCTOR

const arr3 =

  new Array(

    1,

    2,

    3

  );

console.log(arr2);

console.log(arr3);`,

    language: "javascript",

    commonMistakes: [
      "Overusing new Array()",

      "Creating sparse arrays unintentionally",

      "Mixing array and object syntax",

      "Using invalid indexes",

      "Ignoring array initialization",
    ],

    thinkingProcess: `Step 1: Explain array creation

Step 2: Show literal syntax

Step 3: Show constructor syntax

Step 4: Compare approaches

Step 5: Recommend best practice`,

    realWorldApplication:
      "Arrays are created when storing products, users, API responses, and application state.",

    interviewTip:
      "Use array literals ([]) unless there is a specific reason to use Array().",
  },
  {
    id: "js-69",

    question: "What is the difference between push() and pop()?",

    difficulty: "Basic",

    shortAnswer:
      "push() adds elements to the end of an array, while pop() removes the last element.",

    detailedAnswer: `push() and pop() operate on the end of an array.

push():

- Adds element(s)
- Returns new length

pop():

- Removes last element
- Returns removed element

These methods modify the original array.`,

    keyPoints: [
      "push adds items",

      "pop removes items",

      "Both work at the end",

      "Both mutate the array",

      "Frequently used together",
    ],

    codeExample: `const fruits = [

  "Apple",

  "Banana"

];




// PUSH

fruits.push(

  "Orange"

);

console.log(fruits);

// ["Apple","Banana","Orange"]




// POP

const removed =

  fruits.pop();

console.log(removed);

// Orange

console.log(fruits);

// ["Apple","Banana"]`,

    language: "javascript",

    commonMistakes: [
      "Expecting pop to remove first item",

      "Ignoring returned value",

      "Using push on non-arrays",

      "Forgetting mutation",

      "Confusing with shift/unshift",
    ],

    thinkingProcess: `Step 1: Explain push

Step 2: Explain pop

Step 3: Show examples

Step 4: Compare behavior

Step 5: Discuss mutation`,

    realWorldApplication:
      "Used in stacks, shopping carts, notifications, and dynamic lists.",

    interviewTip: "Remember: push/pop operate on the end of the array.",
  },
  {
    id: "js-70",

    question: "What is the difference between shift() and unshift()?",

    difficulty: "Basic",

    shortAnswer:
      "shift() removes the first element from an array, while unshift() adds one or more elements to the beginning of an array.",

    detailedAnswer: `shift() and unshift() operate on the beginning of an array.

SHIFT()

- Removes first element
- Returns removed element
- Changes original array

UNSHIFT()

- Adds element(s) to beginning
- Returns new array length
- Changes original array

Both methods are mutating methods because they modify the original array.`,

    keyPoints: [
      "shift removes first item",
      "unshift adds items at beginning",
      "Both mutate original array",
      "shift returns removed value",
      "unshift returns new length",
    ],

    codeExample: `const fruits = [

  "Apple",

  "Banana",

  "Orange"

];




// SHIFT

const removed =

  fruits.shift();

console.log(removed);

// Apple

console.log(fruits);

// ["Banana","Orange"]




// UNSHIFT

fruits.unshift(

  "Mango"

);

console.log(fruits);

// ["Mango","Banana","Orange"]`,

    language: "javascript",

    commonMistakes: [
      "Confusing shift with pop",
      "Confusing unshift with push",
      "Ignoring mutation",
      "Expecting shift to remove last item",
      "Not using returned value",
    ],

    thinkingProcess: `Step 1: Explain shift

Step 2: Explain unshift

Step 3: Compare behavior

Step 4: Show examples

Step 5: Discuss mutation`,

    realWorldApplication:
      "Used in queues, notifications, chat messages, and task processing systems.",

    interviewTip:
      "Remember: shift/unshift work at the start, push/pop work at the end.",
  },
  {
    id: "js-71",

    question: "What does splice() do?",

    difficulty: "Intermediate",

    shortAnswer:
      "splice() adds, removes, or replaces elements in an array by modifying the original array.",

    detailedAnswer: `splice() is a powerful array method used to modify arrays.

Syntax:

array.splice(
  start,
  deleteCount,
  item1,
  item2
);

Capabilities:

1. Remove items
2. Add items
3. Replace items

Important:

splice() mutates the original array.

Return Value:

An array containing removed elements.`,

    keyPoints: [
      "Can add items",
      "Can remove items",
      "Can replace items",
      "Mutates original array",
      "Returns removed items",
    ],

    codeExample: `const colors =

  ["Red","Blue","Green"];




// REMOVE

colors.splice(

  1,

  1

);

console.log(colors);

// ["Red","Green"]




// ADD

colors.splice(

  1,

  0,

  "Yellow"

);

console.log(colors);

// ["Red","Yellow","Green"]




// REPLACE

colors.splice(

  1,

  1,

  "Black"

);

console.log(colors);

// ["Red","Black","Green"]`,

    language: "javascript",

    commonMistakes: [
      "Confusing splice with slice",
      "Forgetting it mutates array",
      "Using wrong indexes",
      "Ignoring returned array",
      "Deleting too many items",
    ],

    thinkingProcess: `Step 1: Explain syntax

Step 2: Show removing

Step 3: Show adding

Step 4: Show replacing

Step 5: Explain mutation`,

    realWorldApplication:
      "Used in dynamic lists, shopping carts, dashboards, and CRUD applications.",

    interviewTip:
      "The biggest interview point: splice modifies the original array.",
  },
  {
    id: "js-72",

    question: "What is the difference between slice() and splice()?",

    difficulty: "Intermediate",

    shortAnswer:
      "slice() creates a copy of part of an array without modifying it, while splice() modifies the original array.",

    detailedAnswer: `Although their names are similar, slice() and splice() behave very differently.

SLICE()

- Returns a new array
- Does not modify original array
- Used for copying portions

SPLICE()

- Modifies original array
- Can add, remove, replace items
- Returns removed elements

Interviewers frequently ask this comparison.`,

    keyPoints: [
      "slice is non-mutating",
      "splice is mutating",
      "slice returns copied values",
      "splice modifies original array",
      "Very common interview question",
    ],

    codeExample: `const numbers =

  [1,2,3,4,5];




// SLICE

const copy =

  numbers.slice(

    1,

    4

  );

console.log(copy);

// [2,3,4]

console.log(numbers);

// unchanged




// SPLICE

numbers.splice(

  1,

  2

);

console.log(numbers);

// [1,4,5]`,

    language: "javascript",

    commonMistakes: [
      "Mixing slice and splice",
      "Expecting slice to mutate",
      "Ignoring splice mutation",
      "Using wrong indexes",
      "Not checking return values",
    ],

    thinkingProcess: `Step 1: Define slice

Step 2: Define splice

Step 3: Compare mutation

Step 4: Show examples

Step 5: Explain use cases`,

    realWorldApplication:
      "slice is used for copying data, while splice is used for editing data.",

    interviewTip:
      'Easy memory trick: splice has "p" for modify/place change, slice is safe copy.',
  },
  {
    id: "js-73",

    question: "What is map()?",

    difficulty: "Intermediate",

    shortAnswer:
      "map() creates a new array by transforming every element of an existing array.",

    detailedAnswer: `map() executes a callback function on every element.

It returns:

- A new array
- Same length as original

map() does not modify the original array.

Common uses:

- Formatting data
- Transforming API responses
- UI rendering`,

    keyPoints: [
      "Returns new array",
      "Does not mutate original array",
      "Runs callback for every element",
      "Same length as original",
      "Used for transformations",
    ],

    codeExample: `const numbers =

  [1,2,3,4];

const doubled =

  numbers.map(

    num => num * 2

  );

console.log(doubled);

// [2,4,6,8]

console.log(numbers);

// [1,2,3,4]




// OBJECT EXAMPLE

const users = [

  {name:"John"},

  {name:"Jane"}

];

const names =

  users.map(

    user => user.name

  );

console.log(names);

// ["John","Jane"]`,

    language: "javascript",

    commonMistakes: [
      "Using map without return",
      "Expecting mutation",
      "Using map for filtering",
      "Ignoring returned array",
      "Using forEach when map is needed",
    ],

    thinkingProcess: `Step 1: Define map

Step 2: Explain callback

Step 3: Show transformation

Step 4: Explain return value

Step 5: Show practical use`,

    realWorldApplication:
      "Used heavily in React for rendering lists and transforming API data.",

    interviewTip: "map transforms data and always returns a new array.",
  },
  {
    id: "js-74",

    question: "What is filter()?",

    difficulty: "Intermediate",

    shortAnswer:
      "filter() creates a new array containing only elements that pass a specified condition.",

    detailedAnswer: `filter() evaluates each element using a callback.

If callback returns:

true → keep element

false → remove element

filter() does not modify the original array.

Useful for:

- Search results
- Product filtering
- Active user lists
- Data cleanup`,

    keyPoints: [
      "Returns new array",
      "Uses true/false conditions",
      "Does not mutate original array",
      "Can return fewer items",
      "Used for filtering data",
    ],

    codeExample: `const numbers =

  [1,2,3,4,5,6];

const evenNumbers =

  numbers.filter(

    num => num % 2 === 0

  );

console.log(evenNumbers);

// [2,4,6]




// OBJECT FILTERING

const users = [

  {name:"John", active:true},

  {name:"Jane", active:false}

];

const activeUsers =

  users.filter(

    user => user.active

  );

console.log(activeUsers);`,

    language: "javascript",

    commonMistakes: [
      "Forgetting return statement",
      "Using filter for transformation",
      "Expecting mutation",
      "Returning non-boolean values",
      "Ignoring result array",
    ],

    thinkingProcess: `Step 1: Define filter

Step 2: Explain condition

Step 3: Show examples

Step 4: Explain return array

Step 5: Discuss use cases`,

    realWorldApplication:
      "Used in search bars, product filtering, user management systems, and dashboards.",

    interviewTip: "map transforms, filter selects.",
  },
  {
    id: "js-75",

    question: "What is reduce()?",

    difficulty: "Advanced",

    shortAnswer:
      "reduce() processes all array elements and reduces them into a single value.",

    detailedAnswer: `reduce() executes a callback for every element and accumulates a result.

Syntax:

array.reduce(
  (accumulator, currentValue) => {},
  initialValue
);

Common uses:

- Sum values
- Count items
- Group data
- Build objects
- Flatten arrays

reduce() is one of the most powerful array methods.`,

    keyPoints: [
      "Returns single value",
      "Uses accumulator",
      "Processes entire array",
      "Very powerful method",
      "Supports complex transformations",
    ],

    codeExample: `const numbers =

  [1,2,3,4];

const sum =

  numbers.reduce(

    (total, current) =>

      total + current,

    0

  );

console.log(sum);

// 10




// COUNT ITEMS

const words =

  ["a","b","a","c","a"];

const count =

  words.reduce(

    (acc, word) => {

      acc[word] =

        (acc[word] || 0) + 1;

      return acc;

    },

    {}

  );

console.log(count);

// {a:3,b:1,c:1}`,

    language: "javascript",

    commonMistakes: [
      "Forgetting initial value",
      "Not returning accumulator",
      "Using reduce for simple loops",
      "Confusing accumulator and current value",
      "Making callback too complex",
    ],

    thinkingProcess: `Step 1: Define reduce

Step 2: Explain accumulator

Step 3: Show sum example

Step 4: Show object creation example

Step 5: Discuss advanced use cases`,

    realWorldApplication:
      "Used for analytics, reporting, totals, grouping API data, and state management.",

    interviewTip:
      "The most common reduce example is calculating the sum of all numbers in an array.",
  },
  {
    id: "js-76",

    question: "What is find()?",

    difficulty: "Intermediate",

    shortAnswer:
      "find() returns the first element in an array that satisfies a specified condition.",

    detailedAnswer: `The find() method searches through an array and returns the first element that matches a condition.

If no element matches:

- Returns undefined

Important:

- Stops searching once a match is found
- Returns the actual element
- Does not modify the original array

find() is useful when you only need one matching item.`,

    keyPoints: [
      "Returns first matching element",

      "Returns undefined if not found",

      "Stops after first match",

      "Does not mutate array",

      "Useful for object searches",
    ],

    codeExample: `const numbers =

  [5, 10, 15, 20];

const result =

  numbers.find(

    num => num > 10

  );

console.log(result);

// 15




const users = [

  { id: 1, name: "John" },

  { id: 2, name: "Jane" }

];

const user =

  users.find(

    user => user.id === 2

  );

console.log(user);

// { id: 2, name: "Jane" }`,

    language: "javascript",

    commonMistakes: [
      "Expecting multiple results",

      "Confusing find with filter",

      "Ignoring undefined results",

      "Forgetting return statement",

      "Using find when filter is needed",
    ],

    thinkingProcess: `Step 1: Define find

Step 2: Explain callback condition

Step 3: Show first match behavior

Step 4: Explain undefined case

Step 5: Compare with filter`,

    realWorldApplication:
      "Used for finding users, products, orders, and specific records from API data.",

    interviewTip:
      "find() returns one element, filter() returns an array of elements.",
  },
  {
    id: "js-77",

    question: "What is findIndex()?",

    difficulty: "Intermediate",

    shortAnswer:
      "findIndex() returns the index of the first element that satisfies a condition.",

    detailedAnswer: `findIndex() works similarly to find().

Difference:

find()
→ Returns element

findIndex()
→ Returns index

If no element matches:

- Returns -1

Useful when you need the position of an element rather than the element itself.`,

    keyPoints: [
      "Returns index",

      "Returns -1 if not found",

      "Stops at first match",

      "Does not mutate array",

      "Similar to find()",
    ],

    codeExample: `const numbers =

  [5, 10, 15, 20];

const index =

  numbers.findIndex(

    num => num > 10

  );

console.log(index);

// 2




const users = [

  { id: 1 },

  { id: 2 }

];

const userIndex =

  users.findIndex(

    user => user.id === 2

  );

console.log(userIndex);

// 1`,

    language: "javascript",

    commonMistakes: [
      "Expecting object instead of index",

      "Ignoring -1 result",

      "Confusing with indexOf",

      "Using wrong callback",

      "Not handling missing values",
    ],

    thinkingProcess: `Step 1: Define findIndex

Step 2: Compare with find

Step 3: Explain return value

Step 4: Show examples

Step 5: Discuss practical use`,

    realWorldApplication:
      "Used when updating, deleting, or replacing specific items in arrays.",

    interviewTip:
      "Remember: find() returns value, findIndex() returns position.",
  },
  {
    id: "js-78",

    question: "What is some()?",

    difficulty: "Intermediate",

    shortAnswer:
      "some() checks whether at least one element in an array satisfies a condition.",

    detailedAnswer: `The some() method tests array elements using a callback function.

Returns:

true
→ If at least one element matches

false
→ If no elements match

It stops execution immediately after finding the first match.

Think of it as an OR condition across all elements.`,

    keyPoints: [
      "Returns boolean",

      "Checks if at least one item matches",

      "Stops at first match",

      "Does not mutate array",

      "Acts like OR logic",
    ],

    codeExample: `const numbers =

  [1, 2, 3, 4];

const result =

  numbers.some(

    num => num > 3

  );

console.log(result);

// true




const users = [

  { active: false },

  { active: true }

];

const hasActiveUser =

  users.some(

    user => user.active

  );

console.log(hasActiveUser);

// true`,

    language: "javascript",

    commonMistakes: [
      "Expecting array result",

      "Confusing with every",

      "Forgetting boolean return",

      "Using some for filtering",

      "Ignoring short-circuit behavior",
    ],

    thinkingProcess: `Step 1: Define some

Step 2: Explain boolean result

Step 3: Explain OR logic

Step 4: Show examples

Step 5: Compare with every`,

    realWorldApplication:
      "Used for permission checks, validation, and detecting whether data exists.",

    interviewTip:
      "some() returns true if at least one element passes the test.",
  },
  {
    id: "js-79",

    question: "What is every()?",

    difficulty: "Intermediate",

    shortAnswer:
      "every() checks whether all elements in an array satisfy a condition.",

    detailedAnswer: `The every() method tests every element in an array.

Returns:

true
→ If all elements match

false
→ If at least one element fails

It stops immediately when a failure is found.

Think of it as AND logic across all elements.`,

    keyPoints: [
      "Returns boolean",

      "All elements must pass",

      "Stops at first failure",

      "Does not mutate array",

      "Acts like AND logic",
    ],

    codeExample: `const numbers =

  [2, 4, 6, 8];

const result =

  numbers.every(

    num => num % 2 === 0

  );

console.log(result);

// true




const users = [

  { active: true },

  { active: false }

];

const allActive =

  users.every(

    user => user.active

  );

console.log(allActive);

// false`,

    language: "javascript",

    commonMistakes: [
      "Confusing with some",

      "Expecting array result",

      "Ignoring boolean return",

      "Using for filtering",

      "Forgetting all elements must pass",
    ],

    thinkingProcess: `Step 1: Define every

Step 2: Explain boolean result

Step 3: Explain AND logic

Step 4: Show examples

Step 5: Compare with some`,

    realWorldApplication:
      "Used for form validation, permission checks, and data verification.",

    interviewTip:
      "every() returns true only if every element passes the condition.",
  },
  {
    id: "js-80",

    question: "What is sort()?",

    difficulty: "Intermediate",

    shortAnswer:
      "sort() arranges array elements in a specific order and mutates the original array.",

    detailedAnswer: `The sort() method sorts array elements.

Default behavior:

- Converts values to strings
- Sorts alphabetically

For numbers, use a comparison function.

Ascending:

(a, b) => a - b

Descending:

(a, b) => b - a

Important:

sort() mutates the original array.`,

    keyPoints: [
      "Sorts array elements",

      "Mutates original array",

      "Default sort is alphabetical",

      "Use compare function for numbers",

      "Can sort objects",
    ],

    codeExample: `const numbers =

  [10, 2, 50, 1];




// WRONG

numbers.sort();

console.log(numbers);

// [1,10,2,50]




// ASCENDING

numbers.sort(

  (a, b) => a - b

);

console.log(numbers);

// [1,2,10,50]




// DESCENDING

numbers.sort(

  (a, b) => b - a

);

console.log(numbers);

// [50,10,2,1]`,

    language: "javascript",

    commonMistakes: [
      "Forgetting compare function",

      "Expecting immutable behavior",

      "Sorting numbers alphabetically",

      "Ignoring mutation",

      "Incorrect compare logic",
    ],

    thinkingProcess: `Step 1: Define sort

Step 2: Explain default behavior

Step 3: Show compare function

Step 4: Explain mutation

Step 5: Show examples`,

    realWorldApplication:
      "Used for sorting products, rankings, tables, reports, and search results.",

    interviewTip:
      "A classic interview question: Why does [10,2,50,1].sort() fail for numbers?",
  },
  {
    id: "js-81",

    question: "How do you remove duplicate values from an array?",

    difficulty: "coding",

    shortAnswer:
      "The most common way is to use a Set, which automatically stores only unique values.",

    detailedAnswer: `JavaScript provides multiple ways to remove duplicates.

Most Common:

Using Set

A Set stores only unique values.

Other Methods:

- filter()
- reduce()
- for loops

Using Set is the cleanest and most efficient approach for primitive values.`,

    keyPoints: [
      "Set removes duplicates automatically",

      "Returns unique values",

      "Works well for primitives",

      "Can also use filter",

      "Frequently asked interview question",
    ],

    codeExample: `const numbers =

  [1, 2, 2, 3, 4, 4, 5];




// USING SET

const uniqueNumbers =

  [...new Set(numbers)];

console.log(uniqueNumbers);

// [1,2,3,4,5]




// USING FILTER

const unique =

  numbers.filter(

    (value, index, array) =>

      array.indexOf(value) === index

  );

console.log(unique);`,

    language: "javascript",

    commonMistakes: [
      "Not converting Set back to array",

      "Using inefficient loops",

      "Confusing Set and Array",

      "Ignoring object duplicate handling",

      "Overcomplicating solution",
    ],

    thinkingProcess: `Step 1: Explain duplicates

Step 2: Introduce Set

Step 3: Convert Set back to array

Step 4: Show alternative methods

Step 5: Discuss efficiency`,

    realWorldApplication:
      "Used in search suggestions, tags, categories, user lists, and API data cleanup.",

    interviewTip:
      "The quickest answer is: [...new Set(array)]. Interviewers love this modern ES6 solution.",
  },
  {
    id: "js-82",

    question: "Reverse a String",

    difficulty: "coding",

    shortAnswer:
      "Reverse the characters of a string and return the reversed string.",

    detailedAnswer: `String reversal is one of the most common coding interview questions.

The goal is to reverse the order of characters.

Input:
"hello"

Output:
"olleh"

Common Approaches:

1. Using built-in methods
   - split()
   - reverse()
   - join()

2. Using a loop

3. Using recursion

Time Complexity:
O(n)

Space Complexity:
O(n)

This problem tests understanding of strings, arrays, loops, and algorithmic thinking.`,

    keyPoints: [
      "Frequently asked coding interview question",

      "Can be solved using built-in methods",

      "Can also be solved manually using loops",

      "Time Complexity is O(n)",

      "Useful for understanding string manipulation",
    ],

    codeExample: `// METHOD 1: BUILT-IN METHODS

function reverseString(str) {

  return str
    .split('')
    .reverse()
    .join('');

}

console.log(
  reverseString("hello")
);

// olleh




// METHOD 2: LOOP

function reverseStringLoop(str) {

  let reversed = '';

  for (

    let i = str.length - 1;

    i >= 0;

    i--

  ) {

    reversed += str[i];

  }

  return reversed;

}

console.log(
  reverseStringLoop("hello")
);

// olleh`,

    language: "javascript",

    commonMistakes: [
      "Forgetting join() after reverse()",

      "Trying to reverse string directly",

      "Incorrect loop boundaries",

      "Ignoring empty strings",

      "Not returning the result",
    ],

    thinkingProcess: `Step 1: Understand the input and output

Step 2: Identify that strings are immutable

Step 3: Convert string into array

Step 4: Reverse characters

Step 5: Return reversed string`,

    realWorldApplication:
      "Used in text processing, data formatting, coding assessments, and algorithm practice.",

    interviewTip:
      "Always mention both the built-in method solution and the manual loop solution during interviews.",
  },
  {
    id: "js-83",

    question: "Check if a String is Palindrome",

    difficulty: "coding",

    shortAnswer:
      "A palindrome is a string that reads the same forward and backward.",

    detailedAnswer: `A palindrome is a word, phrase, number, or sequence of characters that remains the same when reversed.

Examples:

"madam" → palindrome
"racecar" → palindrome
"hello" → not palindrome

The goal is to determine whether a given string is identical to its reversed version.

Common Approaches:

1. Reverse the string and compare
2. Use two pointers
3. Use a loop
4. Use recursion

Time Complexity:
O(n)

Space Complexity:
O(n) for reverse method
O(1) for two-pointer method

This question tests string manipulation and logical thinking.`,

    keyPoints: [
      "Common coding interview question",

      "Compare original string with reversed string",

      "Can be solved using two pointers",

      "Case sensitivity may matter",

      "Time Complexity is O(n)",
    ],

    codeExample: `// METHOD 1: REVERSE AND COMPARE

function isPalindrome(str) {

  const reversed = str
    .split('')
    .reverse()
    .join('');

  return str === reversed;

}

console.log(
  isPalindrome("madam")
);

// true

console.log(
  isPalindrome("hello")
);

// false




// METHOD 2: TWO POINTERS

function isPalindromeTwoPointer(str) {

  let left = 0;

  let right = str.length - 1;

  while (left < right) {

    if (str[left] !== str[right]) {

      return false;

    }

    left++;

    right--;

  }

  return true;

}

console.log(
  isPalindromeTwoPointer("racecar")
);

// true`,

    language: "javascript",

    commonMistakes: [
      "Ignoring uppercase and lowercase differences",

      "Forgetting to compare with original string",

      "Incorrect pointer updates",

      "Not handling empty strings",

      "Returning wrong boolean value",
    ],

    thinkingProcess: `Step 1: Understand palindrome definition

Step 2: Reverse the string

Step 3: Compare reversed string with original

Step 4: Return true if equal

Step 5: Consider optimized two-pointer approach`,

    realWorldApplication:
      "Used in text processing, coding assessments, algorithm challenges, and interview screening rounds.",

    interviewTip:
      "Mention both reverse() and two-pointer solutions. Interviewers often prefer the two-pointer approach because it uses less memory.",
  },
  {
    id: "js-84",

    question: "Find the Largest Number in an Array",

    difficulty: "coding",

    shortAnswer: "Return the largest value present in an array.",

    detailedAnswer: `This is a common array interview question.

Given an array of numbers, find the maximum value.

Example:

Input:
[4, 8, 2, 15, 7]

Output:
15

Common Approaches:

1. Loop through array
2. Math.max()
3. reduce()

Time Complexity:
O(n)

Space Complexity:
O(1)

This problem tests array traversal and comparison logic.`,

    keyPoints: [
      "Traverse entire array",

      "Track largest value",

      "Math.max can simplify solution",

      "Works with positive and negative values",

      "Time Complexity is O(n)",
    ],

    codeExample: `// METHOD 1: LOOP

function findLargest(arr) {

  let largest = arr[0];

  for (let num of arr) {

    if (num > largest) {

      largest = num;

    }

  }

  return largest;

}

console.log(
  findLargest([4,8,2,15,7])
);

// 15




// METHOD 2: MATH.MAX

const largest = Math.max(
  ...[4,8,2,15,7]
);

console.log(largest);

// 15`,

    language: "javascript",

    commonMistakes: [
      "Initializing largest incorrectly",

      "Ignoring negative numbers",

      "Using sorting unnecessarily",

      "Not handling empty arrays",

      "Comparing wrong values",
    ],

    thinkingProcess: `Step 1: Start with first element

Step 2: Compare each value

Step 3: Update largest value

Step 4: Continue traversal

Step 5: Return largest value`,

    realWorldApplication:
      "Used in analytics dashboards, leaderboard systems, and statistical calculations.",

    interviewTip:
      "Loop solution demonstrates stronger problem-solving skills than relying only on Math.max().",
  },
  {
    id: "js-85",

    question: "Find the Smallest Number in an Array",

    difficulty: "coding",

    shortAnswer: "Return the minimum value present in an array.",

    detailedAnswer: `Given an array of numbers, find the smallest element.

Example:

Input:
[4, 8, 2, 15, 7]

Output:
2

Common Approaches:

1. Loop through array
2. Math.min()
3. reduce()

Time Complexity:
O(n)

Space Complexity:
O(1)`,

    keyPoints: [
      "Track minimum value",

      "Compare each element",

      "Works with negative numbers",

      "Math.min is a shortcut",

      "Time Complexity is O(n)",
    ],

    codeExample: `// METHOD 1: LOOP

function findSmallest(arr) {

  let smallest = arr[0];

  for (let num of arr) {

    if (num < smallest) {

      smallest = num;

    }

  }

  return smallest;

}

console.log(
  findSmallest([4,8,2,15,7])
);

// 2




// METHOD 2: MATH.MIN

const smallest = Math.min(
  ...[4,8,2,15,7]
);

console.log(smallest);

// 2`,

    language: "javascript",

    commonMistakes: [
      "Using wrong comparison operator",

      "Ignoring negative values",

      "Sorting entire array unnecessarily",

      "Not handling empty arrays",

      "Initializing incorrectly",
    ],

    thinkingProcess: `Step 1: Store first element

Step 2: Compare remaining elements

Step 3: Update smallest value

Step 4: Continue traversal

Step 5: Return result`,

    realWorldApplication:
      "Used in financial systems, analytics, reports, and statistical calculations.",

    interviewTip: "Explain why sorting is less efficient than a single loop.",
  },
  {
    id: "js-86",

    question: "Count Vowels in a String",

    difficulty: "coding",

    shortAnswer: "Count how many vowels (a, e, i, o, u) exist in a string.",

    detailedAnswer: `Given a string, count the number of vowels.

Vowels:

a, e, i, o, u

Example:

Input:
"JavaScript"

Output:
3

Approaches:

1. Loop through string
2. Use includes()
3. Regular Expressions

Time Complexity:
O(n)

Space Complexity:
O(1)`,

    keyPoints: [
      "Check each character",

      "Consider uppercase vowels",

      "Can use regex",

      "Case-insensitive solution preferred",

      "Time Complexity is O(n)",
    ],

    codeExample: `function countVowels(str) {

  const vowels =

    "aeiouAEIOU";

  let count = 0;

  for (let char of str) {

    if (

      vowels.includes(char)

    ) {

      count++;

    }

  }

  return count;

}

console.log(
  countVowels("JavaScript")
);

// 3`,

    language: "javascript",

    commonMistakes: [
      "Ignoring uppercase vowels",

      "Counting consonants",

      "Wrong loop logic",

      "Missing return statement",

      "Using incorrect character checks",
    ],

    thinkingProcess: `Step 1: Define vowels

Step 2: Loop through string

Step 3: Check each character

Step 4: Increase count

Step 5: Return total count`,

    realWorldApplication:
      "Used in text analysis, NLP applications, search systems, and educational software.",

    interviewTip: "Mention regex as an alternative solution.",
  },
  {
    id: "js-87",

    question: "Find Sum of Array Elements",

    difficulty: "coding",

    shortAnswer: "Calculate the total sum of all numbers in an array.",

    detailedAnswer: `Given an array of numbers, return the sum of all elements.

Example:

Input:
[1, 2, 3, 4]

Output:
10

Approaches:

1. Loop
2. reduce()

Time Complexity:
O(n)

Space Complexity:
O(1)

This question tests array traversal fundamentals.`,

    keyPoints: [
      "Initialize accumulator",

      "Add every element",

      "reduce() is common",

      "Time Complexity is O(n)",

      "Frequently asked interview question",
    ],

    codeExample: `// METHOD 1: LOOP

function sumArray(arr) {

  let sum = 0;

  for (let num of arr) {

    sum += num;

  }

  return sum;

}

console.log(
  sumArray([1,2,3,4])
);

// 10




// METHOD 2: REDUCE

const total =

  [1,2,3,4].reduce(

    (sum, num) =>

      sum + num,

    0

  );

console.log(total);

// 10`,

    language: "javascript",

    commonMistakes: [
      "Forgetting initial value",

      "Not returning result",

      "Incorrect accumulator logic",

      "Using string concatenation accidentally",

      "Ignoring empty arrays",
    ],

    thinkingProcess: `Step 1: Initialize sum

Step 2: Traverse array

Step 3: Add current value

Step 4: Continue iteration

Step 5: Return final sum`,

    realWorldApplication:
      "Used in shopping carts, reporting systems, financial calculations, and analytics.",

    interviewTip:
      "Show both loop and reduce() solutions because interviewers may ask for both.",
  },
];
