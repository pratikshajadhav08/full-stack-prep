export const phpQuestions = [
{
  id: "php-1",
  question: "What is PHP?",
  difficulty: "Basic",

  shortAnswer:
    "PHP (Hypertext Preprocessor) is a server-side scripting language used to create dynamic and interactive web applications.",

  detailedAnswer: `PHP stands for Hypertext Preprocessor.

Definition:
PHP is an open-source server-side scripting language designed primarily for web development. It runs on the server and generates HTML that is sent to the client's browser.

How PHP Works:
1. User sends a request to a web server.
2. PHP code executes on the server.
3. The server generates HTML output.
4. The browser receives and displays the result.

Features:
- Open source
- Cross-platform
- Easy to learn
- Supports databases
- Embedded in HTML
- Large community support

Popular Uses:
- Dynamic websites
- Content Management Systems (CMS)
- E-commerce applications
- REST APIs
- Authentication systems

Popular Platforms Built with PHP:
- WordPress
- Laravel
- Drupal
- Magento
- Joomla

Advantages:
- Fast development
- Cost-effective
- Extensive documentation
- Strong database support`,

  keyPoints: [
    "PHP stands for Hypertext Preprocessor",
    "Server-side scripting language",
    "Open source",
    "Used for dynamic websites",
    "Can connect with databases",
    "Runs on web servers"
  ],

  codeExample: `<?php
echo "Hello World!";
?>`,

  language: "php",

  commonMistakes: [
    "Confusing PHP with JavaScript",
    "Writing PHP outside tags",
    "Ignoring security practices",
    "Using outdated PHP versions",
    "Not validating user input"
  ],

  thinkingProcess: `Step 1: Understand PHP definition
Step 2: Learn server-side execution
Step 3: Write basic PHP scripts
Step 4: Connect with databases
Step 5: Build dynamic applications`,

  realWorldApplication:
    "PHP powers millions of websites including blogs, e-commerce stores, and enterprise applications.",

  interviewTip:
    "Mention that PHP is a server-side scripting language used for dynamic web development and database-driven applications."
},

{
  id: "php-2",
  question: "What are the features of PHP?",
  difficulty: "Basic",

  shortAnswer:
    "PHP provides server-side scripting, database connectivity, platform independence, security features, and fast web development capabilities.",

  detailedAnswer: `PHP includes many features that make web development easier.

Main Features:

1. Open Source
   - Free to use
   - Community-driven

2. Cross Platform
   - Windows
   - Linux
   - macOS

3. Server-Side Processing
   - Executes on server
   - Generates dynamic content

4. Database Support
   - MySQL
   - PostgreSQL
   - SQLite
   - Oracle

5. Embedded in HTML
   - Easy integration

6. Session Management
   - User authentication
   - Shopping carts

7. Security Features
   - Password hashing
   - Data validation

8. Fast Performance
   - Optimized execution

9. Large Ecosystem
   - Frameworks
   - Libraries

10. API Development
   - RESTful services
   - JSON support`,

  keyPoints: [
    "Open source",
    "Cross-platform",
    "Database connectivity",
    "Server-side execution",
    "Session support",
    "API development support"
  ],

  codeExample: `<?php
$name = "John";
echo "<h1>Welcome $name</h1>";
?>`,

  language: "php",

  commonMistakes: [
    "Ignoring security features",
    "Not using frameworks when needed",
    "Poor database handling",
    "Lack of validation",
    "Mixing business logic with HTML"
  ],

  thinkingProcess: `Step 1: Learn PHP capabilities
Step 2: Explore database support
Step 3: Understand security features
Step 4: Build applications
Step 5: Optimize performance`,

  realWorldApplication:
    "PHP's features allow developers to build complete web applications quickly and efficiently.",

  interviewTip:
    "Focus on server-side scripting, database support, security, and cross-platform compatibility."
},

{
  id: "php-3",
  question: "What are the advantages of PHP?",
  difficulty: "Basic",

  shortAnswer:
    "PHP is easy to learn, open source, highly compatible, database-friendly, and widely used for web development.",

  detailedAnswer: `PHP offers many advantages for web developers.

Advantages:

1. Free and Open Source
   - No licensing costs

2. Easy to Learn
   - Beginner friendly
   - Simple syntax

3. Fast Development
   - Quick prototyping
   - Large ecosystem

4. Database Integration
   - MySQL
   - PostgreSQL
   - SQLite

5. Platform Independent
   - Works on multiple OS

6. Large Community
   - Extensive resources
   - Community support

7. Framework Support
   - Laravel
   - Symfony
   - CodeIgniter

8. Good Performance
   - Efficient execution

9. Hosting Availability
   - Supported by most hosting providers

10. Scalability
   - Suitable for small and large projects`,

  keyPoints: [
    "Free and open source",
    "Easy to learn",
    "Large community",
    "Excellent database support",
    "Wide hosting support"
  ],

  codeExample: `<?php
echo "PHP is easy to learn!";
?>`,

  language: "php",

  commonMistakes: [
    "Assuming PHP is outdated",
    "Ignoring modern PHP features",
    "Poor coding standards",
    "Not using Composer",
    "Skipping security practices"
  ],

  thinkingProcess: `Step 1: Identify PHP benefits
Step 2: Compare with alternatives
Step 3: Learn ecosystem
Step 4: Explore frameworks
Step 5: Build scalable apps`,

  realWorldApplication:
    "Many startups and enterprises choose PHP because it is cost-effective and widely supported.",

  interviewTip:
    "Highlight ease of learning, open-source nature, strong community, and database support."
},

{
  id: "php-4",
  question: "Difference Between PHP and JavaScript?",
  difficulty: "Basic",

  shortAnswer:
    "PHP runs on the server, while JavaScript primarily runs in the browser. PHP generates content, whereas JavaScript handles client-side interactivity.",

  detailedAnswer: `PHP and JavaScript serve different purposes.

PHP:
- Server-side language
- Executes on server
- Generates HTML
- Accesses databases directly

JavaScript:
- Client-side language
- Executes in browser
- Manipulates DOM
- Handles user interactions

Comparison:

Feature          PHP            JavaScript
--------------------------------------------
Execution        Server         Browser
Database Access  Direct         Through APIs
DOM Access       No             Yes
Speed            Server-based   Client-based
Use Case         Backend        Frontend

Modern applications often use both together.`,

  keyPoints: [
    "PHP is server-side",
    "JavaScript is client-side",
    "PHP accesses databases",
    "JavaScript manipulates UI",
    "Both are commonly used together"
  ],

  codeExample: `// PHP
<?php
echo "Server Output";
?>

// JavaScript
console.log("Browser Output");`,

  language: "php",

  commonMistakes: [
    "Thinking PHP replaces JavaScript",
    "Using PHP for UI interactions",
    "Ignoring API communication",
    "Mixing frontend and backend logic",
    "Confusing execution environments"
  ],

  thinkingProcess: `Step 1: Understand PHP role
Step 2: Understand JavaScript role
Step 3: Compare execution
Step 4: Learn use cases
Step 5: Use both effectively`,

  realWorldApplication:
    "Most web applications use PHP for backend logic and JavaScript for frontend interactions.",

  interviewTip:
    "The key difference is execution location: PHP on the server, JavaScript in the browser."
},

{
  id: "php-5",
  question: "How does PHP work?",
  difficulty: "Basic",

  shortAnswer:
    "PHP works by executing code on the server, generating HTML output, and sending the result to the user's browser.",

  detailedAnswer: `PHP follows a server-side execution model.

Process:

1. User Requests a Page
   Browser sends HTTP request.

2. Web Server Receives Request
   Apache/Nginx receives request.

3. PHP Engine Executes Script
   PHP processes code.

4. Database Interaction (Optional)
   Fetches or stores data.

5. HTML Output Generated
   PHP creates final HTML.

6. Response Sent
   Browser receives HTML.

7. Browser Displays Page

Flow:

Browser
   ↓
Web Server
   ↓
PHP Engine
   ↓
Database
   ↓
HTML Response
   ↓
Browser

Benefits:
- Secure business logic
- Dynamic content generation
- Database connectivity
- Fast server-side processing`,

  keyPoints: [
    "Runs on server",
    "Processes requests",
    "Generates HTML",
    "Can interact with databases",
    "Response sent to browser"
  ],

  codeExample: `<?php
$name = "John";
echo "<h1>Hello $name</h1>";
?>`,

  language: "php",

  commonMistakes: [
    "Thinking PHP runs in browser",
    "Ignoring server configuration",
    "Poor database handling",
    "Not validating user input",
    "Exposing sensitive information"
  ],

  thinkingProcess: `Step 1: User sends request
Step 2: Server receives request
Step 3: PHP executes code
Step 4: Generate response
Step 5: Browser displays result`,

  realWorldApplication:
    "Every login system, shopping cart, and dynamic website relies on PHP's server-side execution process.",

  interviewTip:
    "Explain the request-response cycle clearly and mention that PHP code executes on the server, not in the browser."
},
{
  id: "php-6",
  question: "What are Variables in PHP?",
  difficulty: "Basic",

  shortAnswer:
    "Variables in PHP are containers used to store data values. Every variable starts with the $ symbol.",

  detailedAnswer: `Variables are used to store data that can be reused throughout a PHP program.

Rules for Variables:
- Must start with $
- Must begin with a letter or underscore
- Cannot start with a number
- Case-sensitive

Examples:
$name = "John";
$age = 25;
$salary = 50000;

Variable Types:
- String
- Integer
- Float
- Boolean
- Array
- Object
- NULL

Benefits:
- Store dynamic data
- Reuse values
- Simplify code
- Improve maintainability`,

  keyPoints: [
    "Start with $ symbol",
    "Case-sensitive",
    "Store data values",
    "Can hold different data types",
    "Used throughout PHP programs"
  ],

  codeExample: `<?php
$name = "John";
$age = 25;

echo $name;
echo $age;
?>`,

  language: "php",

  commonMistakes: [
    "Forgetting $ symbol",
    "Starting variable with number",
    "Case mismatch",
    "Using reserved keywords",
    "Undefined variables"
  ],

  thinkingProcess: `Step 1: Declare variable
Step 2: Assign value
Step 3: Access variable
Step 4: Modify value
Step 5: Use in program`,

  realWorldApplication:
    "Variables store user information, product prices, and application settings in web applications.",

  interviewTip:
    "Mention that PHP variables are dynamically typed and always start with the $ symbol."
},

{
  id: "php-7",
  question: "What are Data Types in PHP?",
  difficulty: "Basic",

  shortAnswer:
    "Data types define the kind of value a variable can store, such as string, integer, float, boolean, array, object, and NULL.",

  detailedAnswer: `PHP supports multiple data types.

1. String
   "Hello"

2. Integer
   100

3. Float
   99.99

4. Boolean
   true / false

5. Array
   ["Apple", "Banana"]

6. Object
   Instance of a class

7. NULL
   No value assigned

8. Resource
   External resources like file handles

PHP automatically determines the data type of variables during execution.`,

  keyPoints: [
    "Defines type of stored value",
    "PHP is dynamically typed",
    "Supports strings and numbers",
    "Supports arrays and objects",
    "Supports NULL values"
  ],

  codeExample: `<?php
$name = "John";
$age = 25;
$price = 99.99;
$isActive = true;

var_dump($name);
var_dump($age);
?>`,

  language: "php",

  commonMistakes: [
    "Assuming fixed types",
    "Ignoring type conversions",
    "Using wrong data type",
    "Mixing values incorrectly",
    "Not validating input"
  ],

  thinkingProcess: `Step 1: Learn data types
Step 2: Assign values
Step 3: Inspect types
Step 4: Use correctly
Step 5: Handle conversions`,

  realWorldApplication:
    "Applications use strings for names, integers for IDs, and booleans for status flags.",

  interviewTip:
    "PHP is dynamically typed, meaning you don't need to explicitly declare variable types."
},

{
  id: "php-8",
  question: "What are Constants in PHP?",
  difficulty: "Basic",

  shortAnswer:
    "Constants are fixed values that cannot be changed once defined during script execution.",

  detailedAnswer: `Constants store values that remain unchanged.

Characteristics:
- Cannot be reassigned
- No $ symbol
- Global scope
- Defined using define() or const

Examples:
define("SITE_NAME", "My Website");

const VERSION = "1.0";

Uses:
- Configuration values
- API keys
- Application settings
- Fixed values

Benefits:
- Prevent accidental modification
- Improve readability
- Centralized configuration`,

  keyPoints: [
    "Cannot be changed",
    "No $ symbol",
    "Defined using define()",
    "Global scope",
    "Used for fixed values"
  ],

  codeExample: `<?php
define("SITE_NAME", "My Website");

echo SITE_NAME;
?>`,

  language: "php",

  commonMistakes: [
    "Trying to modify constants",
    "Using $ symbol",
    "Incorrect naming",
    "Duplicate constant names",
    "Using constants for dynamic values"
  ],

  thinkingProcess: `Step 1: Define constant
Step 2: Access constant
Step 3: Use globally
Step 4: Protect values
Step 5: Improve configuration`,

  realWorldApplication:
    "Constants are commonly used for database configuration and application settings.",

  interviewTip:
    "A constant is immutable after definition and is accessed without the $ symbol."
},

{
  id: "php-9",
  question: "Difference Between echo and print?",
  difficulty: "Basic",

  shortAnswer:
    "Both output data in PHP, but echo can output multiple strings and is slightly faster, while print returns a value and outputs one argument.",

  detailedAnswer: `echo and print are language constructs used for output.

echo:
- Outputs one or more strings
- No return value
- Faster

print:
- Outputs one string
- Returns 1
- Slightly slower

Examples:

echo "Hello", " World";

print "Hello World";

Comparison:

Feature     echo     print
--------------------------
Arguments   Multiple One
Return      None     1
Speed        Faster   Slower

Both are widely used in PHP.`,

  keyPoints: [
    "Both display output",
    "echo is faster",
    "echo supports multiple arguments",
    "print returns 1",
    "Common interview question"
  ],

  codeExample: `<?php
echo "Hello", " World";

print "Hello World";
?>`,

  language: "php",

  commonMistakes: [
    "Using print with multiple arguments",
    "Ignoring return value behavior",
    "Confusing syntax",
    "Overusing print",
    "Not understanding differences"
  ],

  thinkingProcess: `Step 1: Learn echo
Step 2: Learn print
Step 3: Compare features
Step 4: Practice examples
Step 5: Choose appropriately`,

  realWorldApplication:
    "Used to generate dynamic HTML output and display application data.",

  interviewTip:
    "The most common answer: echo supports multiple arguments and is slightly faster than print."
},

{
  id: "php-10",
  question: "What are Operators in PHP?",
  difficulty: "Basic",

  shortAnswer:
    "Operators are symbols used to perform operations on variables and values such as arithmetic, comparison, assignment, and logical operations.",

  detailedAnswer: `Operators help perform calculations and comparisons.

Types of Operators:

1. Arithmetic
   +, -, *, /, %

2. Assignment
   =, +=, -=

3. Comparison
   ==, ===, !=, >

4. Logical
   &&, ||, !

5. Increment/Decrement
   ++, --

6. String
   . (concatenation)

Examples:

$a = 10;
$b = 5;

echo $a + $b;
echo $a > $b;

Operators are essential for decision-making and calculations.`,

  keyPoints: [
    "Perform operations on values",
    "Arithmetic operators",
    "Comparison operators",
    "Logical operators",
    "Assignment operators"
  ],

  codeExample: `<?php
$a = 10;
$b = 5;

echo $a + $b;
echo $a > $b;
?>`,

  language: "php",

  commonMistakes: [
    "Using == instead of ===",
    "Operator precedence issues",
    "Incorrect logical conditions",
    "Assignment instead of comparison",
    "Ignoring type comparisons"
  ],

  thinkingProcess: `Step 1: Identify operation
Step 2: Choose operator
Step 3: Apply operation
Step 4: Evaluate result
Step 5: Use in logic`,

  realWorldApplication:
    "Operators are used in calculations, validations, conditions, and application logic.",

  interviewTip:
    "Be prepared to explain the difference between == and === because it's frequently asked."
},
{
  id: "php-11",
  question: "What are Conditional Statements?",
  difficulty: "Basic",

  shortAnswer:
    "Conditional statements allow a program to execute different blocks of code based on whether a condition is true or false.",

  detailedAnswer: `Conditional statements help in decision-making.

They evaluate conditions and execute specific code blocks based on the result.

Types of Conditional Statements:
1. if
2. if...else
3. if...elseif...else
4. switch
5. match (PHP 8+)

Benefits:
- Controls program flow
- Enables dynamic behavior
- Supports business logic
- Improves flexibility

Example:
If age is 18 or above, allow voting.
Otherwise, deny access.`,

  keyPoints: [
    "Used for decision making",
    "Evaluates conditions",
    "Controls execution flow",
    "Supports multiple branches",
    "Core programming concept"
  ],

  codeExample: `<?php
$age = 20;

if ($age >= 18) {
  echo "Eligible to vote";
}
?>`,

  language: "php",

  commonMistakes: [
    "Using = instead of ==",
    "Incorrect condition logic",
    "Missing braces",
    "Nested conditions confusion",
    "Ignoring edge cases"
  ],

  thinkingProcess: `Step 1: Evaluate condition
Step 2: Determine true/false
Step 3: Execute matching block
Step 4: Skip others
Step 5: Continue execution`,

  realWorldApplication:
    "Used in login systems, payment processing, permissions, and validation checks.",

  interviewTip:
    "Conditional statements are used whenever a program needs to make decisions."
},

{
  id: "php-12",
  question: "What is if-else Statement?",
  difficulty: "Basic",

  shortAnswer:
    "The if-else statement executes one block of code if a condition is true and another block if the condition is false.",

  detailedAnswer: `The if-else statement provides two possible execution paths.

Syntax:

if(condition){
  // code
}
else{
  // code
}

How It Works:
- Condition is evaluated.
- If true → if block executes.
- If false → else block executes.

Example:
Check whether a number is positive or negative.

Benefits:
- Simple decision making
- Easy to understand
- Widely used in applications`,

  keyPoints: [
    "Two execution paths",
    "Evaluates conditions",
    "True block and false block",
    "Common decision structure",
    "Easy to use"
  ],

  codeExample: `<?php
$age = 16;

if ($age >= 18) {
  echo "Adult";
} else {
  echo "Minor";
}
?>`,

  language: "php",

  commonMistakes: [
    "Missing braces",
    "Wrong comparison operator",
    "Complex nested conditions",
    "Using assignment operator",
    "Ignoring false cases"
  ],

  thinkingProcess: `Step 1: Check condition
Step 2: True? Run if block
Step 3: False? Run else block
Step 4: Continue execution
Step 5: Verify output`,

  realWorldApplication:
    "Used in authentication, form validation, and access control systems.",

  interviewTip:
    "if-else provides exactly two choices: one for true and one for false."
},

{
  id: "php-13",
  question: "What is switch Statement?",
  difficulty: "Basic",

  shortAnswer:
    "A switch statement is used to execute one block of code among many possible options based on a variable's value.",

  detailedAnswer: `The switch statement is an alternative to multiple if-else conditions.

Syntax:

switch(expression){
  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
    // code
}

Benefits:
- Cleaner than multiple if-else blocks
- Easier to read
- Better organization

Use Cases:
- Menu systems
- Role-based logic
- Day or month selection`,

  keyPoints: [
    "Alternative to multiple if-else",
    "Uses case statements",
    "Supports default block",
    "Improves readability",
    "Requires break statement"
  ],

  codeExample: `<?php
$day = "Monday";

switch ($day) {
  case "Monday":
    echo "Start of week";
    break;

  case "Friday":
    echo "Weekend near";
    break;

  default:
    echo "Regular day";
}
?>`,

  language: "php",

  commonMistakes: [
    "Forgetting break",
    "Duplicate cases",
    "Missing default",
    "Wrong data types",
    "Complex switch structures"
  ],

  thinkingProcess: `Step 1: Evaluate expression
Step 2: Match case
Step 3: Execute code
Step 4: Break execution
Step 5: Use default if needed`,

  realWorldApplication:
    "Used in dashboards, user role management, and application menus.",

  interviewTip:
    "The biggest switch mistake is forgetting the break statement."
},

{
  id: "php-14",
  question: "What are Loops in PHP?",
  difficulty: "Basic",

  shortAnswer:
    "Loops are used to repeatedly execute a block of code until a specified condition becomes false.",

  detailedAnswer: `Loops help automate repetitive tasks.

Types of Loops:

1. for Loop
2. while Loop
3. do...while Loop
4. foreach Loop

Benefits:
- Reduces code duplication
- Saves time
- Improves maintainability
- Processes collections efficiently

Examples:
- Display numbers 1–100
- Process database records
- Iterate arrays

Loop Components:
- Initialization
- Condition
- Update`,

  keyPoints: [
    "Repeats code execution",
    "Reduces repetition",
    "Improves efficiency",
    "Supports multiple loop types",
    "Widely used in programming"
  ],

  codeExample: `<?php
for ($i = 1; $i <= 5; $i++) {
  echo $i . "<br>";
}
?>`,

  language: "php",

  commonMistakes: [
    "Infinite loops",
    "Wrong conditions",
    "Incorrect increments",
    "Modifying loop variables improperly",
    "Nested loop performance issues"
  ],

  thinkingProcess: `Step 1: Initialize loop
Step 2: Check condition
Step 3: Execute code
Step 4: Update variable
Step 5: Repeat until false`,

  realWorldApplication:
    "Loops are used to display products, process records, and generate reports.",

  interviewTip:
    "A loop repeats code execution while a condition remains true."
},

{
  id: "php-15",
  question: "Difference Between for, while, and foreach?",
  difficulty: "Basic",

  shortAnswer:
    "for is used when the number of iterations is known, while is used when iterations depend on a condition, and foreach is used for arrays and collections.",

  detailedAnswer: `PHP provides different loop types for different situations.

1. for Loop
- Known number of iterations
- Uses initialization, condition, update

2. while Loop
- Condition-based loop
- Runs while condition is true

3. foreach Loop
- Designed for arrays
- Automatically iterates elements

Comparison:

Feature       for      while     foreach
-----------------------------------------
Counter       Yes      Optional  No
Arrays        Yes      Yes       Best
Known Count   Best     Possible  No
Readable      Good     Good      Excellent

Choose the loop based on the problem being solved.`,

  keyPoints: [
    "for = fixed iterations",
    "while = condition-based",
    "foreach = arrays",
    "Different use cases",
    "Important interview topic"
  ],

  codeExample: `<?php

// for
for ($i = 1; $i <= 3; $i++) {
  echo $i;
}

// while
$count = 1;
while ($count <= 3) {
  echo $count;
  $count++;
}

// foreach
$fruits = ["Apple", "Banana"];

foreach ($fruits as $fruit) {
  echo $fruit;
}

?>`,

  language: "php",

  commonMistakes: [
    "Using foreach on non-arrays",
    "Infinite while loops",
    "Wrong loop selection",
    "Modifying array during iteration",
    "Incorrect loop conditions"
  ],

  thinkingProcess: `Step 1: Determine iteration type
Step 2: Choose loop
Step 3: Write condition
Step 4: Process data
Step 5: Exit correctly`,

  realWorldApplication:
    "foreach is heavily used when displaying database records, products, and user lists.",

  interviewTip:
    "Use for when the iteration count is known, while for condition-based loops, and foreach for arrays."
},
{
  id: "php-16",
  question: "What are Functions in PHP?",
  difficulty: "Basic",

  shortAnswer:
    "Functions are reusable blocks of code that perform a specific task and can be called whenever needed.",

  detailedAnswer: `Functions help organize and reuse code.

Definition:
A function is a named block of code designed to perform a particular operation.

Benefits:
- Code reusability
- Better organization
- Easier maintenance
- Reduced duplication

Types:
1. Built-in Functions
   - strlen()
   - count()
   - date()

2. User-Defined Functions
   - Created by developers

Syntax:
function functionName() {
  // code
}

Functions can:
- Accept parameters
- Return values
- Be called multiple times`,

  keyPoints: [
    "Reusable code blocks",
    "Improve code organization",
    "Reduce duplication",
    "Can accept parameters",
    "Can return values"
  ],

  codeExample: `<?php
function greet() {
  echo "Hello World";
}

greet();
?>`,

  language: "php",

  commonMistakes: [
    "Forgetting function call",
    "Duplicate function names",
    "Missing return statement",
    "Incorrect parameters",
    "Using global variables unnecessarily"
  ],

  thinkingProcess: `Step 1: Define function
Step 2: Add logic
Step 3: Call function
Step 4: Reuse function
Step 5: Maintain code efficiently`,

  realWorldApplication:
    "Functions are used in authentication, calculations, data validation, and API handling.",

  interviewTip:
    "Functions improve code reusability and maintainability by avoiding repeated code."
},

{
  id: "php-17",
  question: "What are Parameters and Arguments?",
  difficulty: "Basic",

  shortAnswer:
    "Parameters are variables defined in a function declaration, while arguments are the actual values passed to the function when it is called.",

  detailedAnswer: `Parameters and arguments allow functions to receive data.

Parameter:
- Placeholder variable
- Defined in function declaration

Argument:
- Actual value passed to function

Example:

function greet($name) {
  echo "Hello " . $name;
}

greet("John");

$name = Parameter
"John" = Argument

Benefits:
- Makes functions flexible
- Reusable with different values
- Supports dynamic behavior`,

  keyPoints: [
    "Parameters receive data",
    "Arguments provide values",
    "Enable function flexibility",
    "Support reusable code",
    "Important OOP concept"
  ],

  codeExample: `<?php
function add($a, $b) {
  return $a + $b;
}

echo add(10, 20);
?>`,

  language: "php",

  commonMistakes: [
    "Passing wrong number of arguments",
    "Incorrect parameter order",
    "Ignoring default values",
    "Confusing parameters and arguments",
    "Type mismatches"
  ],

  thinkingProcess: `Step 1: Define parameters
Step 2: Call function
Step 3: Pass arguments
Step 4: Process values
Step 5: Return result`,

  realWorldApplication:
    "Functions use parameters to process user input, product details, and API requests.",

  interviewTip:
    "Parameters belong to the function definition; arguments are passed during the function call."
},

{
  id: "php-18",
  question: "What is Variable Scope?",
  difficulty: "Basic",

  shortAnswer:
    "Variable scope determines where a variable can be accessed within a PHP program.",

  detailedAnswer: `Scope controls the visibility of variables.

Types of Scope:

1. Local Scope
   - Declared inside a function
   - Accessible only within that function

2. Global Scope
   - Declared outside functions
   - Accessed using global keyword

3. Static Scope
   - Retains value between function calls

Example:

$x = 10; // Global

function test() {
  $y = 5; // Local
}

Benefits:
- Prevents conflicts
- Improves security
- Better organization`,

  keyPoints: [
    "Controls variable visibility",
    "Local scope",
    "Global scope",
    "Static variables",
    "Important for code structure"
  ],

  codeExample: `<?php
$x = 10;

function showValue() {
  global $x;
  echo $x;
}

showValue();
?>`,

  language: "php",

  commonMistakes: [
    "Accessing local variables globally",
    "Forgetting global keyword",
    "Variable name conflicts",
    "Misusing static variables",
    "Undefined variable errors"
  ],

  thinkingProcess: `Step 1: Declare variable
Step 2: Determine scope
Step 3: Access correctly
Step 4: Avoid conflicts
Step 5: Maintain code structure`,

  realWorldApplication:
    "Scope is important in large applications where multiple functions use similar variable names.",

  interviewTip:
    "Local variables exist inside functions, while global variables exist outside functions."
},

{
  id: "php-19",
  question: "What are Arrays in PHP?",
  difficulty: "Basic",

  shortAnswer:
    "Arrays are data structures that store multiple values in a single variable.",

  detailedAnswer: `Arrays allow storing collections of data.

Without Array:
$name1 = "John";
$name2 = "Alice";
$name3 = "Bob";

With Array:
$names = ["John", "Alice", "Bob"];

Benefits:
- Store multiple values
- Easy iteration
- Better organization
- Efficient data management

Array Operations:
- Add elements
- Remove elements
- Sort arrays
- Search values

PHP provides many built-in array functions.`,

  keyPoints: [
    "Stores multiple values",
    "Single variable",
    "Easy iteration",
    "Supports indexing",
    "Important data structure"
  ],

  codeExample: `<?php
$fruits = ["Apple", "Banana", "Orange"];

echo $fruits[0];
?>`,

  language: "php",

  commonMistakes: [
    "Invalid indexes",
    "Mixing array types improperly",
    "Out-of-bounds access",
    "Ignoring array functions",
    "Poor naming"
  ],

  thinkingProcess: `Step 1: Create array
Step 2: Store values
Step 3: Access elements
Step 4: Iterate data
Step 5: Manipulate array`,

  realWorldApplication:
    "Arrays are used to store products, users, orders, and configuration settings.",

  interviewTip:
    "Arrays allow storing multiple related values in a single variable."
},

{
  id: "php-20",
  question: "Types of Arrays in PHP?",
  difficulty: "Basic",

  shortAnswer:
    "PHP supports Indexed Arrays, Associative Arrays, and Multidimensional Arrays.",

  detailedAnswer: `PHP provides three major array types.

1. Indexed Array
- Numeric indexes
- Default indexing starts at 0

Example:
$fruits = ["Apple", "Banana"];

2. Associative Array
- Key-value pairs

Example:
$user = [
  "name" => "John",
  "age" => 25
];

3. Multidimensional Array
- Array containing other arrays

Example:
$students = [
  ["John", 20],
  ["Alice", 22]
];

Benefits:
- Flexible data storage
- Better organization
- Supports complex structures`,

  keyPoints: [
    "Indexed arrays",
    "Associative arrays",
    "Multidimensional arrays",
    "Supports nested data",
    "Common interview topic"
  ],

  codeExample: `<?php

$fruits = ["Apple", "Banana"];

$user = [
  "name" => "John",
  "age" => 25
];

$students = [
  ["John", 20],
  ["Alice", 22]
];

?>`,

  language: "php",

  commonMistakes: [
    "Wrong key access",
    "Confusing array types",
    "Nested array errors",
    "Using incorrect indexes",
    "Poor data organization"
  ],

  thinkingProcess: `Step 1: Choose array type
Step 2: Store data
Step 3: Access elements
Step 4: Iterate structure
Step 5: Manage efficiently`,

  realWorldApplication:
    "Applications use associative arrays for user profiles and multidimensional arrays for database results.",

  interviewTip:
    "The three main PHP array types are Indexed, Associative, and Multidimensional Arrays."
},
];
