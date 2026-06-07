export const nodeQuestions = [
  {
    id: "node-1",

    question: "What is Node.js?",

    difficulty: "Basic",

    shortAnswer:
      "Node.js is an open-source JavaScript runtime environment that allows developers to run JavaScript outside the browser.",

    detailedAnswer: `Node.js is a JavaScript runtime built on Google's V8 JavaScript Engine.

Before Node.js, JavaScript was mainly used for client-side development inside web browsers.

Node.js allows JavaScript to run on the server side, making it possible to build:

- Web Servers
- REST APIs
- Real-time Applications
- Command Line Tools
- Microservices

Node.js uses:

- Event-Driven Architecture
- Non-Blocking I/O
- Single-Threaded Event Loop

These features make Node.js highly efficient and scalable.

Advantages:

1. Fast Execution using V8 Engine
2. Asynchronous Programming
3. Large npm Ecosystem
4. Cross-Platform Support
5. Ideal for Real-Time Applications

Node.js is widely used for backend development and full-stack JavaScript applications.`,

    keyPoints: [
      "JavaScript runtime environment",

      "Built on V8 Engine",

      "Runs JavaScript outside browsers",

      "Uses Event Loop",

      "Supports Non-Blocking I/O",

      "Popular for backend development",
    ],

    codeExample: `// app.js

console.log(

  "Hello Node.js"

);

// Run:

// node app.js




// Simple Server

const http =

  require("http");

const server =

  http.createServer(

    (req, res) => {

      res.end(

        "Server Running"

      );

    }

  );

server.listen(

  3000,

  () => {

    console.log(

      "Server started"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Thinking Node.js is a programming language",

      "Confusing Node.js with a framework",

      "Assuming Node.js is multi-threaded",

      "Ignoring asynchronous behavior",

      "Not understanding the Event Loop",
    ],

    thinkingProcess: `Step 1: Define Node.js

Step 2: Explain V8 Engine

Step 3: Explain server-side JavaScript

Step 4: Discuss Event Loop and Non-Blocking I/O

Step 5: Mention real-world applications`,

    realWorldApplication:
      "Node.js is used by companies to build APIs, chat applications, streaming platforms, payment systems, and scalable backend services.",

    interviewTip:
      'A strong answer starts with: "Node.js is a JavaScript runtime built on Chrome’s V8 Engine that allows JavaScript to run outside the browser."',
  },
  {
    id: "node-2",

    question: "What are the features of Node.js?",

    difficulty: "Basic",

    shortAnswer:
      "Node.js provides features such as asynchronous programming, non-blocking I/O, event-driven architecture, single-threaded processing, and a large npm ecosystem.",

    detailedAnswer: `Node.js includes several powerful features that make it a popular choice for backend development.

1. Asynchronous Programming

Node.js executes tasks asynchronously, allowing other operations to continue without waiting.

2. Non-Blocking I/O

File, database, and network operations do not block the main thread.

3. Event-Driven Architecture

Node.js uses events and listeners to handle asynchronous operations efficiently.

4. Single-Threaded Event Loop

A single thread manages multiple requests using the Event Loop mechanism.

5. Fast Execution

Node.js is built on Google's V8 Engine, which compiles JavaScript into machine code for high performance.

6. Cross-Platform

Applications can run on Windows, Linux, and macOS.

7. Large npm Ecosystem

Node.js has access to millions of open-source packages through npm.

8. Scalability

Node.js can efficiently handle thousands of concurrent connections.

9. Real-Time Communication

Ideal for chat applications, live notifications, gaming servers, and streaming services.

10. JSON Support

Works naturally with JSON, making API development simple and efficient.

These features make Node.js suitable for modern web applications and microservices.`,

    keyPoints: [
      "Asynchronous programming",

      "Non-blocking I/O",

      "Event-driven architecture",

      "Single-threaded event loop",

      "Fast execution using V8 Engine",

      "Large npm ecosystem",

      "Cross-platform support",

      "Highly scalable",
    ],

    codeExample: `const fs =

  require("fs");

console.log(

  "Start"

);

fs.readFile(

  "data.txt",

  "utf8",

  (err, data) => {

    console.log(

      "File Read Complete"

    );

  }

);

console.log(

  "End"

);

// Output:

// Start
// End
// File Read Complete

// Demonstrates
// asynchronous,
// non-blocking behavior`,

    language: "nodejs",

    commonMistakes: [
      "Thinking Node.js is multi-threaded",

      "Confusing asynchronous with parallel execution",

      "Ignoring event-driven architecture",

      "Not understanding non-blocking operations",

      "Assuming npm is part of JavaScript language",
    ],

    thinkingProcess: `Step 1: Define Node.js features

Step 2: Explain asynchronous behavior

Step 3: Explain non-blocking I/O

Step 4: Discuss Event Loop architecture

Step 5: Highlight scalability and npm ecosystem`,

    realWorldApplication:
      "Companies use Node.js to build APIs, chat systems, video streaming platforms, payment services, real-time dashboards, and microservices.",

    interviewTip:
      "The most important features to mention are Non-Blocking I/O, Event-Driven Architecture, Single-Threaded Event Loop, and the V8 Engine.",
  },
  {
    id: "node-3",

    question: "How does Node.js work?",

    difficulty: "Basic",

    shortAnswer:
      "Node.js works using a single-threaded Event Loop that handles asynchronous operations efficiently through non-blocking I/O.",

    detailedAnswer: `Node.js follows an Event-Driven, Non-Blocking architecture.

Working Process:

1. Client sends request
2. Event Loop receives request
3. Long-running tasks are delegated to the system
4. Node.js continues handling other requests
5. Callback executes when task completes

Unlike traditional servers, Node.js does not create a new thread for every request.

This makes Node.js lightweight and highly scalable.`,

    keyPoints: [
      "Uses Event Loop",
      "Single-threaded architecture",
      "Non-blocking operations",
      "Handles multiple requests efficiently",
      "Uses callbacks, promises, async/await",
    ],

    codeExample: `console.log("Start");

setTimeout(() => {

  console.log("Async Task");

}, 2000);

console.log("End");

// Output:
// Start
// End
// Async Task`,

    language: "nodejs",

    commonMistakes: [
      "Thinking Node.js executes everything synchronously",
      "Ignoring Event Loop",
      "Confusing async with multi-threading",
      "Blocking the main thread",
      "Misunderstanding callbacks",
    ],

    thinkingProcess: `Step 1: Request arrives

Step 2: Event Loop processes request

Step 3: Async task delegated

Step 4: Continue handling requests

Step 5: Execute callback when task finishes`,

    realWorldApplication:
      "Used in APIs, chat applications, streaming services, and real-time dashboards.",

    interviewTip: "Always mention Event Loop and Non-Blocking I/O.",
  },
  {
    id: "node-4",

    question: "What is the Event Loop?",

    difficulty: "Basic",

    shortAnswer:
      "The Event Loop is the mechanism that allows Node.js to perform non-blocking operations using a single thread.",

    detailedAnswer: `The Event Loop is the core of Node.js.

It continuously checks:

- Call Stack
- Callback Queue

Process:

1. Execute synchronous code
2. Move async callbacks to queue
3. Check if stack is empty
4. Push callback to stack
5. Execute callback

This allows Node.js to handle thousands of requests efficiently.`,

    keyPoints: [
      "Core of Node.js",
      "Enables non-blocking operations",
      "Works with callback queue",
      "Uses single thread",
      "Handles asynchronous tasks",
    ],

    codeExample: `console.log("1");

setTimeout(() => {

  console.log("2");

}, 0);

console.log("3");

// Output:
// 1
// 3
// 2`,

    language: "nodejs",

    commonMistakes: [
      "Assuming setTimeout(0) runs immediately",
      "Ignoring callback queue",
      "Confusing Event Loop with threads",
      "Not understanding execution order",
      "Blocking the Event Loop",
    ],

    thinkingProcess: `Step 1: Execute synchronous code

Step 2: Queue async tasks

Step 3: Empty call stack

Step 4: Move callback to stack

Step 5: Execute callback`,

    realWorldApplication:
      "Handles concurrent API requests and real-time communication efficiently.",

    interviewTip:
      "The Event Loop is the most important Node.js interview topic.",
  },
  {
    id: "node-5",

    question: "What is Non-Blocking I/O?",

    difficulty: "Basic",

    shortAnswer:
      "Non-Blocking I/O allows Node.js to continue executing other code while waiting for operations like file reading or database queries to complete.",

    detailedAnswer: `I/O means Input/Output operations such as:

- Reading files
- Writing files
- Database queries
- Network requests

Blocking I/O:

Program waits until operation completes.

Non-Blocking I/O:

Program continues executing while operation runs in the background.

Node.js uses Non-Blocking I/O to improve performance and scalability.`,

    keyPoints: [
      "Does not pause program execution",
      "Improves scalability",
      "Works with Event Loop",
      "Supports asynchronous programming",
      "Essential Node.js feature",
    ],

    codeExample: `const fs =

  require("fs");

fs.readFile(

  "data.txt",

  "utf8",

  (err, data) => {

    console.log(data);

  }

);

console.log(

  "File reading started"

);

// Executes immediately`,

    language: "nodejs",

    commonMistakes: [
      "Using blocking methods unnecessarily",
      "Confusing sync and async functions",
      "Blocking Event Loop",
      "Ignoring performance impact",
      "Using synchronous file operations in production",
    ],

    thinkingProcess: `Step 1: Start operation

Step 2: Continue execution

Step 3: Wait for completion

Step 4: Execute callback

Step 5: Return result`,

    realWorldApplication:
      "Used in APIs, file processing systems, and database-driven applications.",

    interviewTip:
      "Non-Blocking I/O is one of the biggest reasons Node.js scales well.",
  },
  {
    id: "node-6",

    question: "What is Single-Threaded Architecture?",

    difficulty: "Basic",

    shortAnswer:
      "Node.js uses a single main thread to execute JavaScript code while relying on the Event Loop and background workers for asynchronous tasks.",

    detailedAnswer: `Node.js executes JavaScript on a single thread.

This means:

- One main thread
- One call stack
- One Event Loop

Instead of creating multiple threads for requests, Node.js delegates asynchronous operations to the system.

Advantages:

- Lower memory usage
- Faster performance
- Easier scalability

Disadvantages:

- CPU-intensive tasks can block the Event Loop

For heavy computations, Worker Threads can be used.`,

    keyPoints: [
      "One main thread",
      "Uses Event Loop",
      "Efficient resource usage",
      "Great for I/O operations",
      "Can be blocked by CPU-intensive tasks",
    ],

    codeExample: `console.log(

  "Node.js runs JavaScript

  on a single thread"

);`,

    language: "nodejs",

    commonMistakes: [
      "Thinking Node.js handles everything with one thread only",
      "Ignoring background workers",
      "Running CPU-heavy tasks on main thread",
      "Confusing concurrency with parallelism",
      "Misunderstanding scalability",
    ],

    thinkingProcess: `Step 1: Receive request

Step 2: Execute on main thread

Step 3: Delegate async work

Step 4: Continue processing

Step 5: Handle callback when complete`,

    realWorldApplication:
      "Perfect for APIs, chat apps, and streaming platforms.",

    interviewTip:
      "Node.js is single-threaded for JavaScript execution but uses background threads for certain operations.",
  },
  {
    id: "node-7",

    question: "What is the difference between Blocking and Non-Blocking code?",

    difficulty: "Basic",

    shortAnswer:
      "Blocking code stops execution until a task finishes, while Non-Blocking code allows other operations to continue while waiting for the task to complete.",

    detailedAnswer: `Blocking and Non-Blocking determine how Node.js handles operations.

BLOCKING:

- Waits for task completion
- Stops execution
- Uses synchronous methods

NON-BLOCKING:

- Continues execution
- Executes callback later
- Uses asynchronous methods

Node.js prefers Non-Blocking operations because they improve performance and scalability.`,

    keyPoints: [
      "Blocking = synchronous",
      "Non-blocking = asynchronous",
      "Blocking pauses execution",
      "Non-blocking improves performance",
      "Node.js favors non-blocking operations",
    ],

    codeExample: `const fs =

  require("fs");


// BLOCKING

const data =

  fs.readFileSync(

    "data.txt",

    "utf8"

  );

console.log(data);


// NON-BLOCKING

fs.readFile(

  "data.txt",

  "utf8",

  (err, data) => {

    console.log(data);

  }

);

console.log(

  "Continue execution"

);`,

    language: "nodejs",

    commonMistakes: [
      "Using readFileSync in production",
      "Blocking Event Loop",
      "Confusing sync and async behavior",
      "Ignoring performance impact",
      "Using blocking code for APIs",
    ],

    thinkingProcess: `Step 1: Define blocking

Step 2: Define non-blocking

Step 3: Compare execution flow

Step 4: Compare performance

Step 5: Explain Node.js preference`,

    realWorldApplication:
      "High-traffic APIs rely on non-blocking code to serve many users simultaneously.",

    interviewTip: "A simple answer: Blocking waits, Non-Blocking continues.",
  },
  {
    id: "node-8",

    question: "What are Modules in Node.js?",

    difficulty: "Basic",

    shortAnswer:
      "Modules are reusable pieces of code that can be imported and exported between files in Node.js.",

    detailedAnswer: `A Module is a separate file containing code that can be reused in other files.

Benefits:

- Code Reusability
- Better Organization
- Easier Maintenance
- Modular Architecture

Node.js has three types of modules:

1. Core Modules
   - fs
   - path
   - http
   - os

2. Local Modules
   - User-created files

3. Third-Party Modules
   - Installed via npm

Modules help break large applications into smaller manageable pieces.`,

    keyPoints: [
      "Reusable code",

      "Improves code organization",

      "Supports modular development",

      "Can be imported/exported",

      "Core, Local, and Third-Party modules",
    ],

    codeExample: `// math.js

function add(a, b) {

  return a + b;

}

module.exports = add;




// app.js

const add =

  require("./math");

console.log(

  add(5, 3)

);

// 8`,

    language: "nodejs",

    commonMistakes: [
      "Wrong file path",

      "Forgetting exports",

      "Importing incorrect module",

      "Circular dependencies",

      "Confusing modules and packages",
    ],

    thinkingProcess: `Step 1: Create module

Step 2: Export functionality

Step 3: Import module

Step 4: Reuse code

Step 5: Maintain modular structure`,

    realWorldApplication:
      "Large applications separate routes, controllers, models, and utilities into modules.",

    interviewTip: "Modules make code reusable and maintainable.",
  },
  {
    id: "node-9",

    question: "What is CommonJS?",

    difficulty: "Basic",

    shortAnswer:
      "CommonJS is the default module system used by Node.js that uses require() and module.exports.",

    detailedAnswer: `CommonJS is a module specification used in Node.js.

It allows files to share functionality.

Main Keywords:

1. require()
   Imports modules

2. module.exports
   Exports functionality

CommonJS loads modules synchronously.

Example Flow:

File A exports function
↓
File B imports function
↓
Function is reused

Node.js traditionally uses CommonJS although ES Modules are now also supported.`,

    keyPoints: [
      "Node.js module system",

      "Uses require()",

      "Uses module.exports",

      "Synchronous loading",

      "Supported by Node.js",
    ],

    codeExample: `// greet.js

module.exports =

  function() {

    console.log(

      "Hello"

    );

  };




// app.js

const greet =

  require("./greet");

greet();`,

    language: "nodejs",

    commonMistakes: [
      "Confusing CommonJS with ES Modules",

      "Mixing import and require",

      "Incorrect exports",

      "Wrong module paths",

      "Exporting incorrectly",
    ],

    thinkingProcess: `Step 1: Create module

Step 2: Export functionality

Step 3: Import using require

Step 4: Use exported code

Step 5: Reuse across files`,

    realWorldApplication: "Most legacy Node.js applications use CommonJS.",

    interviewTip: "CommonJS = require() + module.exports.",
  },
  {
    id: "node-10",

    question: "What is npm?",

    difficulty: "Basic",

    shortAnswer:
      "npm (Node Package Manager) is the default package manager for Node.js used to install and manage libraries and dependencies.",

    detailedAnswer: `npm stands for Node Package Manager.

It helps developers:

- Install packages
- Update packages
- Remove packages
- Manage project dependencies

npm provides access to millions of open-source packages.

Common Commands:

npm init

Create package.json

npm install express

Install package

npm uninstall express

Remove package

npm update

Update packages

npm is automatically installed when Node.js is installed.`,

    keyPoints: [
      "Package manager for Node.js",

      "Installs dependencies",

      "Manages packages",

      "Creates package.json",

      "Largest JavaScript ecosystem",
    ],

    codeExample: `// Create project

npm init -y




// Install Express

npm install express




// Install Development Dependency

npm install nodemon --save-dev`,

    language: "nodejs",

    commonMistakes: [
      "Deleting package-lock.json carelessly",

      "Installing unnecessary packages",

      "Ignoring version control",

      "Using global packages incorrectly",

      "Not understanding dependencies",
    ],

    thinkingProcess: `Step 1: Create project

Step 2: Install packages

Step 3: Manage dependencies

Step 4: Update packages

Step 5: Build application`,

    realWorldApplication:
      "Used in every Node.js project to manage libraries and dependencies.",

    interviewTip:
      "npm is the package manager that powers the Node.js ecosystem.",
  },
  {
    id: "node-11",

    question: "What is package.json?",

    difficulty: "Basic",

    shortAnswer:
      "package.json is the configuration file that stores project information, dependencies, scripts, and metadata.",

    detailedAnswer: `package.json is the heart of a Node.js project.

It contains:

- Project Name
- Version
- Description
- Scripts
- Dependencies
- Author Information

Node.js reads package.json to understand how a project is configured.

Common Sections:

name

version

scripts

dependencies

devDependencies

main

It is automatically created using:

npm init`,

    keyPoints: [
      "Stores project metadata",

      "Contains dependencies",

      "Contains scripts",

      "Required for npm projects",

      "Generated using npm init",
    ],

    codeExample: `{

  "name":

  "my-app",

  "version":

  "1.0.0",

  "main":

  "app.js",

  "scripts": {

    "start":

    "node app.js"

  },

  "dependencies": {

    "express":

    "^5.0.0"

  }

}`,

    language: "nodejs",

    commonMistakes: [
      "Editing versions incorrectly",

      "Deleting dependencies accidentally",

      "Ignoring scripts section",

      "Invalid JSON format",

      "Not committing package.json",
    ],

    thinkingProcess: `Step 1: Create project

Step 2: Generate package.json

Step 3: Add dependencies

Step 4: Configure scripts

Step 5: Maintain project settings`,

    realWorldApplication:
      "Every Node.js application uses package.json to manage dependencies and scripts.",

    interviewTip: "package.json describes the entire Node.js project.",
  },
  {
    id: "node-12",

    question: "What is package-lock.json?",

    difficulty: "Basic",

    shortAnswer:
      "package-lock.json records the exact versions of installed dependencies to ensure consistent installations across environments.",

    detailedAnswer: `package-lock.json is automatically generated by npm.

Purpose:

It locks dependency versions.

Example:

package.json:

"express": "^5.0.0"

npm may install different compatible versions.

package-lock.json records the exact installed version.

Benefits:

- Consistent installations
- Faster npm install
- Reproducible builds
- Better dependency management

This ensures all developers and servers use identical package versions.`,

    keyPoints: [
      "Automatically generated",

      "Locks exact versions",

      "Improves consistency",

      "Speeds up installations",

      "Should be committed to Git",
    ],

    codeExample: `{

  "name":

  "my-app",

  "lockfileVersion": 3,

  "packages": {

    "node_modules/express": {

      "version":

      "5.1.0"

    }

  }

}`,

    language: "nodejs",

    commonMistakes: [
      "Deleting package-lock.json unnecessarily",

      "Not committing it to Git",

      "Confusing it with package.json",

      "Manual editing",

      "Ignoring dependency conflicts",
    ],

    thinkingProcess: `Step 1: Install package

Step 2: npm generates lock file

Step 3: Exact versions recorded

Step 4: Share with team

Step 5: Ensure consistent builds`,

    realWorldApplication:
      "Used in production applications to prevent dependency version mismatches.",

    interviewTip:
      "package.json defines version ranges, package-lock.json stores exact installed versions.",
  },
  {
    id: "node-13",

    question: "What are Dependencies and Dev Dependencies?",

    difficulty: "Basic",

    shortAnswer:
      "Dependencies are required to run the application, while Dev Dependencies are only needed during development.",

    detailedAnswer: `Node.js projects use packages that are categorized as Dependencies and Dev Dependencies.

Dependencies:

Packages required in production.

Examples:

- express
- mongoose
- cors
- bcrypt

Dev Dependencies:

Packages used only during development.

Examples:

- nodemon
- eslint
- prettier
- jest

Install Commands:

npm install express

npm install nodemon --save-dev

Dependencies are stored in package.json under different sections.`,

    keyPoints: [
      "Dependencies run application",

      "Dev dependencies help development",

      "Stored in package.json",

      "Installed using npm",

      "Important project configuration",
    ],

    codeExample: `{
  "dependencies": {
    "express": "^5.0.0"
  },

  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}`,

    language: "nodejs",

    commonMistakes: [
      "Installing production packages as dev dependencies",

      "Installing nodemon as dependency",

      "Confusing dependency types",

      "Ignoring package size",

      "Incorrect installation commands",
    ],

    thinkingProcess: `Step 1: Identify package purpose

Step 2: Production or development

Step 3: Install correctly

Step 4: Save in package.json

Step 5: Use appropriately`,

    realWorldApplication:
      "Express and Mongoose are dependencies, while Nodemon and ESLint are dev dependencies.",

    interviewTip:
      "Dependencies are needed in production; devDependencies are not.",
  },
  {
    id: "node-14",

    question: "What is require()?",

    difficulty: "Basic",

    shortAnswer:
      "require() is a CommonJS function used to import modules, files, and packages into a Node.js application.",

    detailedAnswer: `require() loads modules so they can be used in other files.

It can import:

1. Core Modules
2. Local Modules
3. Third-Party Modules

Node.js loads the module and returns exported functionality.

require() is part of the CommonJS module system.`,

    keyPoints: [
      "Imports modules",

      "Part of CommonJS",

      "Loads files and packages",

      "Returns exported values",

      "Widely used in Node.js",
    ],

    codeExample: `// Core Module

const fs =

  require("fs");


// Third-party Module

const express =

  require("express");


// Local Module

const add =

  require("./math");`,

    language: "nodejs",

    commonMistakes: [
      "Wrong file paths",

      "Missing ./ for local modules",

      "Importing incorrect files",

      "Mixing require and import",

      "Forgetting exports",
    ],

    thinkingProcess: `Step 1: Locate module

Step 2: Load module

Step 3: Execute module

Step 4: Return exports

Step 5: Use functionality`,

    realWorldApplication:
      "Used in almost every CommonJS-based Node.js application.",

    interviewTip: "require() imports modules; module.exports exports them.",
  },
  {
    id: "node-15",

    question: "What is module.exports?",

    difficulty: "Basic",

    shortAnswer:
      "module.exports is used to export functions, objects, or variables from a Node.js module so other files can use them.",

    detailedAnswer: `Node.js modules are private by default.

To share code with other files, use module.exports.

You can export:

- Functions
- Objects
- Arrays
- Variables
- Classes

When another file uses require(), it receives whatever was exported.`,

    keyPoints: [
      "Exports module data",

      "Works with require()",

      "Supports functions and objects",

      "Part of CommonJS",

      "Enables code reuse",
    ],

    codeExample: `// math.js

function add(a, b) {

  return a + b;

}

module.exports = add;




// app.js

const add =

  require("./math");

console.log(

  add(2, 3)

);

// 5`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting to export",

      "Overwriting exports incorrectly",

      "Confusing exports and module.exports",

      "Wrong import usage",

      "Exporting undefined values",
    ],

    thinkingProcess: `Step 1: Create functionality

Step 2: Export it

Step 3: Import with require

Step 4: Use functionality

Step 5: Reuse code`,

    realWorldApplication:
      "Routes, controllers, utilities, and models are commonly exported using module.exports.",

    interviewTip: "module.exports sends data out of a module.",
  },
  {
    id: "node-16",

    question: "What is the fs module?",

    difficulty: "Basic",

    shortAnswer:
      "The fs (File System) module allows Node.js applications to interact with files and directories.",

    detailedAnswer: `The fs module is a built-in Node.js module used for file operations.

Common Operations:

- Read files
- Write files
- Update files
- Delete files
- Create folders
- Rename files

Methods:

readFile()

writeFile()

appendFile()

unlink()

mkdir()

Node.js provides both synchronous and asynchronous file operations.`,

    keyPoints: [
      "Built-in module",

      "Handles file operations",

      "Supports async and sync methods",

      "No installation required",

      "Frequently used in backend development",
    ],

    codeExample: `const fs =

  require("fs");

fs.readFile(

  "data.txt",

  "utf8",

  (err, data) => {

    console.log(data);

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Using sync methods unnecessarily",

      "Ignoring errors",

      "Wrong file paths",

      "Not handling callbacks",

      "Blocking the event loop",
    ],

    thinkingProcess: `Step 1: Import fs

Step 2: Choose operation

Step 3: Execute method

Step 4: Handle result

Step 5: Manage errors`,

    realWorldApplication:
      "Used for logs, uploads, reports, backups, and file management systems.",

    interviewTip: "fs stands for File System and is used for file operations.",
  },
  {
    id: "node-17",

    question: "What is the path module?",

    difficulty: "Basic",

    shortAnswer:
      "The path module provides utilities for working with file and directory paths in Node.js.",

    detailedAnswer: `The path module helps create and manipulate file paths.

Benefits:

- Cross-platform compatibility
- Cleaner path handling
- Avoids hardcoded separators

Common Methods:

path.join()

path.basename()

path.dirname()

path.extname()

path.resolve()

It works consistently across Windows, Linux, and macOS.`,

    keyPoints: [
      "Built-in module",

      "Handles file paths",

      "Cross-platform support",

      "Provides path utilities",

      "Frequently used with fs",
    ],

    codeExample: `const path =

  require("path");

const filePath =

  path.join(

    __dirname,

    "files",

    "data.txt"

  );

console.log(filePath);`,

    language: "nodejs",

    commonMistakes: [
      "Hardcoding slashes",

      "Ignoring path.join()",

      "Using platform-specific paths",

      "Incorrect file paths",

      "Confusing resolve and join",
    ],

    thinkingProcess: `Step 1: Import path

Step 2: Build path

Step 3: Manipulate path

Step 4: Access file

Step 5: Ensure compatibility`,

    realWorldApplication:
      "Used when serving static files, reading uploads, and managing directories.",

    interviewTip: "path.join() is one of the most commonly used methods.",
  },
  {
    id: "node-18",

    question: "What is the os module?",

    difficulty: "Basic",

    shortAnswer:
      "The os module provides information about the operating system running the Node.js application.",

    detailedAnswer: `The os module is a built-in Node.js module.

It provides information such as:

- Operating system name
- CPU details
- Memory information
- Hostname
- User information
- Architecture

Useful for monitoring and system-related tasks.`,

    keyPoints: [
      "Built-in module",

      "Provides OS information",

      "No installation required",

      "Useful for monitoring",

      "Accesses system details",
    ],

    codeExample: `const os =

  require("os");

console.log(

  os.platform()

);

console.log(

  os.hostname()

);

console.log(

  os.totalmem()

);

console.log(

  os.freemem()

);`,

    language: "nodejs",

    commonMistakes: [
      "Expecting hardware control",

      "Ignoring memory units",

      "Using OS-specific assumptions",

      "Not checking documentation",

      "Misunderstanding available methods",
    ],

    thinkingProcess: `Step 1: Import os

Step 2: Access system info

Step 3: Read values

Step 4: Use for monitoring

Step 5: Display results`,

    realWorldApplication:
      "Used in server monitoring dashboards, diagnostics tools, and system health checks.",

    interviewTip:
      "The os module provides operating system information such as memory, CPU, and platform details.",
  },
  {
    id: "node-19",

    question: "What is the http module?",

    difficulty: "Basic",

    shortAnswer:
      "The http module is a built-in Node.js module used to create web servers and handle HTTP requests and responses.",

    detailedAnswer: `The http module allows Node.js applications to communicate over the HTTP protocol.

It is one of Node.js core modules and does not require installation.

Main Uses:

- Create web servers
- Handle client requests
- Send responses
- Build APIs

Important Methods:

http.createServer()

server.listen()

Using the http module, Node.js can act as a web server and serve content to browsers and applications.`,

    keyPoints: [
      "Built-in Node.js module",

      "Creates web servers",

      "Handles HTTP requests",

      "Handles HTTP responses",

      "No installation required",
    ],

    codeExample: `const http =

  require("http");

const server =

  http.createServer(

    (req, res) => {

      res.end(

        "Hello World"

      );

    }

  );

server.listen(

  3000

);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting res.end()",

      "Using wrong port",

      "Not handling routes",

      "Ignoring request object",

      "Forgetting to start server",
    ],

    thinkingProcess: `Step 1: Import http

Step 2: Create server

Step 3: Handle request

Step 4: Send response

Step 5: Listen on port`,

    realWorldApplication:
      "Used for building web servers, REST APIs, and backend services.",

    interviewTip:
      "The http module is the foundation for creating servers in Node.js.",
  },
  {
    id: "node-20",

    question: "How do you create a server in Node.js?",

    difficulty: "Basic",

    shortAnswer:
      "A server can be created using the built-in http module and the createServer() method.",

    detailedAnswer: `Creating a server is one of the most common Node.js tasks.

Steps:

1. Import http module
2. Create server using createServer()
3. Handle requests and responses
4. Start server using listen()

The server waits for incoming requests and responds accordingly.

Each request provides:

- req (request object)
- res (response object)`,

    keyPoints: [
      "Uses http module",

      "Uses createServer()",

      "Uses listen()",

      "Handles requests and responses",

      "Foundation of backend development",
    ],

    codeExample: `const http =

  require("http");

const server =

  http.createServer(

    (req, res) => {

      res.write(

        "Server Running"

      );

      res.end();

    }

  );

server.listen(

  3000,

  () => {

    console.log(

      "Server Started"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Not calling res.end()",

      "Using occupied ports",

      "Ignoring error handling",

      "Not listening on a port",

      "Incorrect callback usage",
    ],

    thinkingProcess: `Step 1: Import module

Step 2: Create server

Step 3: Handle request

Step 4: Send response

Step 5: Start listening`,

    realWorldApplication:
      "Used for APIs, websites, chat applications, and microservices.",

    interviewTip: "Always mention createServer() and listen().",
  },
  {
    id: "node-21",

    question: "What are Streams in Node.js?",

    difficulty: "Intermediate",

    shortAnswer:
      "Streams are objects that allow data to be read or written piece by piece instead of loading the entire data into memory.",

    detailedAnswer: `Streams are used when handling large amounts of data efficiently.

Instead of loading an entire file:

❌ Read complete file into memory

Streams:

✔ Process data chunk by chunk

Advantages:

- Faster processing
- Lower memory usage
- Better performance

Types of Streams:

1. Readable Stream
2. Writable Stream
3. Duplex Stream
4. Transform Stream

Examples:

- Video streaming
- File transfers
- Data processing`,

    keyPoints: [
      "Processes data in chunks",

      "Efficient memory usage",

      "Improves performance",

      "Supports large files",

      "Four stream types",
    ],

    codeExample: `const fs =

  require("fs");

const readStream =

  fs.createReadStream(

    "largeFile.txt",

    "utf8"

  );

readStream.on(

  "data",

  (chunk) => {

    console.log(

      chunk

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Reading huge files entirely",

      "Ignoring stream errors",

      "Not closing streams",

      "Misunderstanding stream events",

      "Using streams unnecessarily",
    ],

    thinkingProcess: `Step 1: Create stream

Step 2: Read chunks

Step 3: Process data

Step 4: Handle completion

Step 5: Close stream`,

    realWorldApplication:
      "Used in file uploads, video streaming, and large data processing systems.",

    interviewTip:
      "Streams process data chunk-by-chunk instead of loading everything into memory.",
  },
  {
    id: "node-22",

    question: "What are Buffers in Node.js?",

    difficulty: "Intermediate",

    shortAnswer:
      "Buffers are temporary memory areas used to store raw binary data in Node.js.",

    detailedAnswer: `JavaScript normally works with strings and objects.

Node.js introduces Buffers to handle binary data.

Examples:

- Images
- Videos
- Audio Files
- Network Packets

Buffers store fixed-size chunks of memory.

They are commonly used with:

- Streams
- File Systems
- Network Operations

Buffer data is represented in bytes.`,

    keyPoints: [
      "Stores binary data",

      "Used with streams",

      "Used with files",

      "Fixed memory allocation",

      "Important for low-level operations",
    ],

    codeExample: `const buffer =

  Buffer.from(

    "Hello"

  );

console.log(

  buffer

);

console.log(

  buffer.toString()

);

// Hello`,

    language: "nodejs",

    commonMistakes: [
      "Confusing buffers with arrays",

      "Ignoring memory size",

      "Not converting correctly",

      "Using buffers unnecessarily",

      "Misunderstanding binary data",
    ],

    thinkingProcess: `Step 1: Create buffer

Step 2: Store binary data

Step 3: Process data

Step 4: Convert if needed

Step 5: Use with streams/files`,

    realWorldApplication:
      "Used in image uploads, video streaming, file transfers, and network communication.",

    interviewTip:
      "Buffers allow Node.js to handle raw binary data efficiently.",
  },
  {
    id: "node-23",

    question: "What is EventEmitter?",

    difficulty: "Intermediate",

    shortAnswer:
      "EventEmitter is a Node.js class that allows objects to emit and listen for custom events.",

    detailedAnswer: `Node.js follows an Event-Driven Architecture.

EventEmitter is a core module that enables communication through events.

Main Methods:

- on()
- emit()
- once()
- removeListener()

Workflow:

1. Create EventEmitter object
2. Register event listener
3. Emit event
4. Execute callback

Many Node.js modules internally use EventEmitter.`,

    keyPoints: [
      "Core Node.js feature",

      "Supports custom events",

      "Uses on() and emit()",

      "Event-driven architecture",

      "Used throughout Node.js",
    ],

    codeExample: `const EventEmitter =

  require("events");

const emitter =

  new EventEmitter();

emitter.on(

  "greet",

  () => {

    console.log(

      "Hello User"

    );

  }

);

emitter.emit(

  "greet"

);

// Hello User`,

    language: "nodejs",

    commonMistakes: [
      "Emitting before listener registration",

      "Wrong event names",

      "Too many listeners",

      "Ignoring cleanup",

      "Confusing events and callbacks",
    ],

    thinkingProcess: `Step 1: Create emitter

Step 2: Register listener

Step 3: Emit event

Step 4: Execute callback

Step 5: Handle response`,

    realWorldApplication:
      "Used in streams, HTTP servers, sockets, and custom application events.",

    interviewTip: "EventEmitter powers Node.js event-driven programming.",
  },
  {
    id: "node-24",

    question: "What are Callbacks?",

    difficulty: "Basic",

    shortAnswer:
      "A callback is a function passed as an argument to another function and executed later.",

    detailedAnswer: `Callbacks are one of the oldest asynchronous programming techniques in JavaScript and Node.js.

A callback function is passed into another function and called when a task completes.

Uses:

- File operations
- API requests
- Database operations
- Event handling

Callbacks allow Node.js to perform asynchronous operations without blocking execution.`,

    keyPoints: [
      "Function passed to another function",

      "Executes later",

      "Supports asynchronous programming",

      "Common in Node.js APIs",

      "Foundation for Promises",
    ],

    codeExample: `function greet(

  name,

  callback

) {

  console.log(

    "Hello " + name

  );

  callback();

}

greet(

  "John",

  () => {

    console.log(

      "Finished"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Callback Hell",

      "Forgetting error handling",

      "Nested callbacks",

      "Executing callback too early",

      "Not checking callback existence",
    ],

    thinkingProcess: `Step 1: Pass callback

Step 2: Perform task

Step 3: Complete task

Step 4: Execute callback

Step 5: Continue flow`,

    realWorldApplication:
      "Used in file reading, API requests, database queries, and event handling.",

    interviewTip:
      "A callback is simply a function executed after another task finishes.",
  },
  {
    id: "node-25",

    question: "What are Promises in Node.js?",

    difficulty: "Intermediate",

    shortAnswer:
      "A Promise is an object that represents the eventual success or failure of an asynchronous operation.",

    detailedAnswer: `Promises were introduced to solve Callback Hell.

A Promise has three states:

1. Pending
2. Fulfilled
3. Rejected

Methods:

- then()
- catch()
- finally()

Promises make asynchronous code easier to read and maintain than nested callbacks.`,

    keyPoints: [
      "Represents future result",

      "Three states",

      "Uses then()",

      "Uses catch()",

      "Reduces callback nesting",
    ],

    codeExample: `const promise =

  new Promise(

    (resolve, reject) => {

      resolve(

        "Success"

      );

    }

  );

promise

  .then(result => {

    console.log(

      result

    );

  })

  .catch(error => {

    console.log(

      error

    );

  });`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting return statements",

      "Missing catch()",

      "Nested promises",

      "Ignoring rejection handling",

      "Not understanding promise states",
    ],

    thinkingProcess: `Step 1: Create promise

Step 2: Execute async task

Step 3: Resolve or reject

Step 4: Handle result

Step 5: Continue execution`,

    realWorldApplication:
      "Used for APIs, databases, authentication, and asynchronous workflows.",

    interviewTip: "Promises solve Callback Hell and improve code readability.",
  },
  {
    id: "node-26",

    question: "What is Async/Await?",

    difficulty: "Intermediate",

    shortAnswer:
      "Async/Await is a modern syntax for working with Promises that makes asynchronous code look like synchronous code.",

    detailedAnswer: `Async/Await was introduced in ES2017.

Keywords:

async

Marks a function as asynchronous.

await

Pauses execution until a Promise resolves.

Benefits:

- Cleaner code
- Easier debugging
- Better readability
- Simpler error handling

Async/Await is built on top of Promises.`,

    keyPoints: [
      "Built on Promises",

      "Uses async keyword",

      "Uses await keyword",

      "Improves readability",

      "Modern asynchronous approach",
    ],

    codeExample: `function getData() {

  return Promise.resolve(

    "Data Loaded"

  );

}

async function fetchData() {

  const data =

    await getData();

  console.log(

    data

  );

}

fetchData();`,

    language: "nodejs",

    commonMistakes: [
      "Using await outside async function",

      "Forgetting try-catch",

      "Ignoring promise rejections",

      "Overusing await",

      "Not understanding promise behavior",
    ],

    thinkingProcess: `Step 1: Create async function

Step 2: Await promise

Step 3: Receive result

Step 4: Handle errors

Step 5: Continue execution`,

    realWorldApplication:
      "Used in APIs, databases, authentication systems, and modern backend applications.",

    interviewTip:
      "Async/Await is the preferred way to handle asynchronous code in modern Node.js.",
  },
  {
    id: "node-27",

    question: "What is Error Handling in Node.js?",

    difficulty: "Intermediate",

    shortAnswer:
      "Error Handling is the process of detecting, managing, and responding to errors to prevent application crashes.",

    detailedAnswer: `Errors can occur during file operations, database queries, API requests, and application logic.

Common Error Handling Techniques:

1. Callback Errors
2. try...catch
3. Promise catch()
4. Express Error Middleware

Proper error handling improves stability and debugging.

Types of Errors:

- Syntax Errors
- Runtime Errors
- Logical Errors
- System Errors

Node.js applications should always handle errors gracefully instead of crashing.`,

    keyPoints: [
      "Prevents application crashes",

      "Uses try...catch",

      "Handles Promise rejections",

      "Supports middleware handling",

      "Essential backend skill",
    ],

    codeExample: `try {

  const result =

    JSON.parse(

      "{invalid}"

    );

}

catch(error) {

  console.log(

    error.message

  );

}`,

    language: "nodejs",

    commonMistakes: [
      "Ignoring errors",

      "Missing catch blocks",

      "Not handling async errors",

      "Logging without fixing",

      "Crashing server unnecessarily",
    ],

    thinkingProcess: `Step 1: Detect error

Step 2: Catch error

Step 3: Log details

Step 4: Send response

Step 5: Continue application`,

    realWorldApplication:
      "Used in APIs, databases, authentication systems, and file operations.",

    interviewTip:
      "Always mention try-catch and Promise catch() when discussing error handling.",
  },
  {
    id: "node-28",

    question: "What is Middleware?",

    difficulty: "Intermediate",

    shortAnswer:
      "Middleware is a function that executes between receiving a request and sending a response in Express.js.",

    detailedAnswer: `Middleware functions have access to:

- Request Object (req)
- Response Object (res)
- next() Function

Middleware can:

- Modify requests
- Modify responses
- Execute code
- Validate users
- Log requests
- Handle errors

Execution Flow:

Request
↓
Middleware
↓
Route Handler
↓
Response

Middleware is one of the most important Express concepts.`,

    keyPoints: [
      "Runs between request and response",

      "Has access to req and res",

      "Uses next()",

      "Can modify requests",

      "Core Express feature",
    ],

    codeExample: `app.use(

  (req, res, next) => {

    console.log(

      "Middleware Running"

    );

    next();

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting next()",

      "Sending multiple responses",

      "Wrong middleware order",

      "Not handling errors",

      "Infinite request loops",
    ],

    thinkingProcess: `Step 1: Request arrives

Step 2: Middleware executes

Step 3: Perform action

Step 4: Call next()

Step 5: Continue request flow`,

    realWorldApplication:
      "Authentication, logging, validation, CORS, and security checks.",

    interviewTip: "Middleware sits between the request and the response.",
  },
  {
    id: "node-29",

    question: "What is Express.js?",

    difficulty: "Basic",

    shortAnswer:
      "Express.js is a fast and lightweight web framework for Node.js used to build web applications and APIs.",

    detailedAnswer: `Express.js simplifies backend development by providing tools for routing, middleware, and HTTP handling.

Without Express:

Developers use the low-level http module.

With Express:

Developers write cleaner and simpler code.

Features:

- Routing
- Middleware
- REST API Development
- Template Engines
- Request Handling

Express is the most popular Node.js framework.`,

    keyPoints: [
      "Node.js framework",

      "Simplifies backend development",

      "Supports middleware",

      "Supports routing",

      "Popular for REST APIs",
    ],

    codeExample: `const express =

  require("express");

const app =

  express();

app.get(

  "/",

  (req, res) => {

    res.send(

      "Hello Express"

    );

  }

);

app.listen(3000);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting app.listen()",

      "Not installing Express",

      "Ignoring middleware",

      "Poor route structure",

      "Not handling errors",
    ],

    thinkingProcess: `Step 1: Install Express

Step 2: Create app

Step 3: Define routes

Step 4: Handle requests

Step 5: Start server`,

    realWorldApplication:
      "Used for APIs, web applications, admin panels, and microservices.",

    interviewTip:
      "Express.js is the most popular web framework built on Node.js.",
  },
  {
    id: "node-30",

    question: "Why use Express.js?",

    difficulty: "Basic",

    shortAnswer:
      "Express.js reduces boilerplate code and makes it easier to build scalable web applications and APIs.",

    detailedAnswer: `Express provides many built-in features that simplify backend development.

Benefits:

- Easy Routing
- Middleware Support
- REST API Development
- Fast Development
- Large Community
- Flexible Architecture

Compared to the native http module, Express requires significantly less code.

It helps developers focus on business logic rather than server setup.`,

    keyPoints: [
      "Less boilerplate code",

      "Simple routing",

      "Middleware support",

      "Fast development",

      "Large ecosystem",
    ],

    codeExample: `// Node HTTP Server

const http =

  require("http");




// Express Server

const express =

  require("express");

const app =

  express();

app.get(

  "/",

  (req, res) => {

    res.send(

      "Hello"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Using Express for everything",

      "Ignoring middleware advantages",

      "Poor project structure",

      "Overcomplicated routes",

      "Not using Express features",
    ],

    thinkingProcess: `Step 1: Compare with http module

Step 2: Identify advantages

Step 3: Simplify development

Step 4: Improve scalability

Step 5: Build APIs faster`,

    realWorldApplication:
      "Used by startups and enterprises to create APIs and backend services quickly.",

    interviewTip:
      "Express makes Node.js backend development faster, cleaner, and more maintainable.",
  },
  {
    id: "node-31",

    question: "How do you create an Express server?",

    difficulty: "Basic",

    shortAnswer:
      "An Express server is created by importing Express, creating an app instance, defining routes, and starting the server with app.listen().",

    detailedAnswer: `Creating an Express server is straightforward.

Steps:

1. Install Express

npm install express

2. Import Express

3. Create app instance

4. Define routes

5. Start server

Express handles HTTP requests and responses efficiently.

The app object represents the Express application.`,

    keyPoints: [
      "Install Express",

      "Create app instance",

      "Define routes",

      "Start server with app.listen()",

      "Foundation of Express applications",
    ],

    codeExample: `const express =

  require("express");

const app =

  express();

app.get(

  "/",

  (req, res) => {

    res.send(

      "Server Running"

    );

  }

);

app.listen(

  3000,

  () => {

    console.log(

      "Server Started"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting to install Express",

      "Not calling app.listen()",

      "Wrong route paths",

      "Ignoring middleware",

      "Port conflicts",
    ],

    thinkingProcess: `Step 1: Install Express

Step 2: Import module

Step 3: Create app

Step 4: Define route

Step 5: Start listening`,

    realWorldApplication:
      "Used as the starting point for REST APIs, authentication systems, and full backend applications.",

    interviewTip:
      "Remember the sequence: require Express → create app → define routes → app.listen().",
  },
  {
    id: "node-32",

    question: "What is Routing in Express?",

    difficulty: "Basic",

    shortAnswer:
      "Routing determines how an application responds to a client request for a specific URL and HTTP method.",

    detailedAnswer: `Routing is the process of defining endpoints in an Express application.

A route consists of:

- URL Path
- HTTP Method
- Handler Function

Examples:

GET /users

POST /users

PUT /users/1

DELETE /users/1

Express matches incoming requests to the appropriate route handler and executes the associated logic.

Routing is a fundamental concept used in all APIs and web applications.`,

    keyPoints: [
      "Maps URLs to functions",

      "Uses HTTP methods",

      "Handles client requests",

      "Core Express feature",

      "Used in API development",
    ],

    codeExample: `const express =

  require("express");

const app =

  express();

app.get(

  "/",

  (req, res) => {

    res.send(

      "Home Route"

    );

  }

);

app.get(

  "/users",

  (req, res) => {

    res.send(

      "Users Route"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Wrong route paths",

      "Using incorrect HTTP methods",

      "Route conflicts",

      "Missing responses",

      "Incorrect route order",
    ],

    thinkingProcess: `Step 1: Receive request

Step 2: Match route

Step 3: Execute handler

Step 4: Generate response

Step 5: Send response`,

    realWorldApplication: "Used in REST APIs, websites, and backend services.",

    interviewTip:
      "Routing connects URLs and HTTP methods to application logic.",
  },
  {
    id: "node-33",

    question: "What are Route Parameters?",

    difficulty: "Basic",

    shortAnswer:
      "Route Parameters are dynamic values embedded in a URL that can be accessed through req.params.",

    detailedAnswer: `Route Parameters allow routes to accept dynamic values.

Example URL:

/users/10

Here:

10 is the route parameter.

Express stores route parameters inside req.params.

They are commonly used for:

- User IDs
- Product IDs
- Order IDs
- Resource Identification

Route parameters make routes dynamic and reusable.`,

    keyPoints: [
      "Dynamic URL values",

      "Accessed via req.params",

      "Used for IDs",

      "Supports dynamic routing",

      "Common API feature",
    ],

    codeExample: `app.get(

  "/users/:id",

  (req, res) => {

    res.send(

      req.params.id

    );

  }

);

// /users/5

// Output: 5`,

    language: "nodejs",

    commonMistakes: [
      "Using wrong parameter names",

      "Accessing req.param instead of req.params",

      "Missing colon",

      "Not validating IDs",

      "Route conflicts",
    ],

    thinkingProcess: `Step 1: Define parameter

Step 2: Receive URL

Step 3: Extract value

Step 4: Process data

Step 5: Send response`,

    realWorldApplication:
      "Used in user profiles, product pages, and REST APIs.",

    interviewTip: "Route parameters are accessed using req.params.",
  },
  {
    id: "node-34",

    question: "What are Query Parameters?",

    difficulty: "Basic",

    shortAnswer:
      "Query Parameters are key-value pairs attached to a URL and accessed through req.query.",

    detailedAnswer: `Query Parameters provide additional information to the server.

Example:

/products?category=electronics&page=2

Query Parameters:

category = electronics

page = 2

Express stores query parameters in req.query.

They are commonly used for:

- Searching
- Filtering
- Sorting
- Pagination

Unlike route parameters, query parameters are optional.`,

    keyPoints: [
      "Key-value pairs",

      "Accessed via req.query",

      "Used for filtering",

      "Used for pagination",

      "Optional URL data",
    ],

    codeExample: `app.get(

  "/products",

  (req, res) => {

    res.send(

      req.query

    );

  }

);

// /products?page=2

// { page: "2" }`,

    language: "nodejs",

    commonMistakes: [
      "Confusing with route params",

      "Missing validation",

      "Incorrect URL formatting",

      "Ignoring default values",

      "Type conversion issues",
    ],

    thinkingProcess: `Step 1: Receive URL

Step 2: Parse query string

Step 3: Access req.query

Step 4: Process values

Step 5: Return results`,

    realWorldApplication:
      "Used in search engines, e-commerce filters, and pagination systems.",

    interviewTip:
      "Route Params identify resources; Query Params filter resources.",
  },
  {
    id: "node-35",

    question: "What is express.json()?",

    difficulty: "Basic",

    shortAnswer:
      "express.json() is built-in middleware that parses incoming JSON request bodies and makes them available in req.body.",

    detailedAnswer: `When a client sends JSON data, Express cannot read it automatically.

express.json() parses JSON data and stores it in req.body.

Without express.json():

req.body will be undefined.

With express.json():

JSON becomes accessible.

This middleware is commonly used in POST, PUT, and PATCH requests.`,

    keyPoints: [
      "Built-in middleware",

      "Parses JSON",

      "Populates req.body",

      "Used in APIs",

      "Required for POST requests",
    ],

    codeExample: `const express =

  require("express");

const app =

  express();

app.use(

  express.json()

);

app.post(

  "/users",

  (req, res) => {

    console.log(

      req.body

    );

    res.send(

      "User Created"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting app.use(express.json())",

      "Expecting req.body automatically",

      "Invalid JSON payloads",

      "Wrong middleware order",

      "Ignoring validation",
    ],

    thinkingProcess: `Step 1: Receive JSON

Step 2: Parse body

Step 3: Store in req.body

Step 4: Access data

Step 5: Process request`,

    realWorldApplication:
      "Used in registration forms, login APIs, and CRUD applications.",

    interviewTip: "Without express.json(), req.body is usually undefined.",
  },
  {
    id: "node-36",

    question: "What is express.urlencoded()?",

    difficulty: "Basic",

    shortAnswer:
      "express.urlencoded() is middleware used to parse URL-encoded form data submitted from HTML forms.",

    detailedAnswer: `HTML forms typically send URL-encoded data.

express.urlencoded() parses this data and stores it inside req.body.

Commonly used for:

- Traditional HTML Forms
- Contact Forms
- Login Forms
- Registration Forms

Configuration:

express.urlencoded({
  extended: true
})

This middleware helps Express understand form submissions.`,

    keyPoints: [
      "Parses form data",

      "Populates req.body",

      "Used with HTML forms",

      "Middleware function",

      "Common in web applications",
    ],

    codeExample: `const express =

  require("express");

const app =

  express();

app.use(

  express.urlencoded({

    extended: true

  })

);

app.post(

  "/login",

  (req, res) => {

    console.log(

      req.body

    );

    res.send(

      "Form Submitted"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting middleware",

      "Wrong extended option",

      "Confusing with express.json()",

      "Ignoring form validation",

      "Incorrect request format",
    ],

    thinkingProcess: `Step 1: Receive form data

Step 2: Parse data

Step 3: Store in req.body

Step 4: Access values

Step 5: Process request`,

    realWorldApplication:
      "Used in login forms, registration pages, and contact forms.",

    interviewTip:
      "express.json() handles JSON, express.urlencoded() handles form data.",
  },
  {
    id: "node-37",

    question: "What is the Request Object (req) in Express?",

    difficulty: "Basic",

    shortAnswer:
      "The Request Object (req) contains information about the incoming HTTP request sent by the client.",

    detailedAnswer: `Whenever a client sends a request, Express creates a Request Object.

The req object contains:

- URL
- Headers
- Query Parameters
- Route Parameters
- Request Body
- HTTP Method

Common Properties:

req.params

req.query

req.body

req.headers

req.method

Developers use req to access data sent by the client.`,

    keyPoints: [
      "Contains request information",

      "Used in route handlers",

      "Provides access to body",

      "Provides access to params",

      "Provides access to query values",
    ],

    codeExample: `app.get(

  "/users/:id",

  (req, res) => {

    console.log(

      req.params.id

    );

    console.log(

      req.method

    );

    res.send(

      "Request Received"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Using wrong property",

      "Confusing params and query",

      "Ignoring validation",

      "Accessing undefined body",

      "Incorrect request parsing",
    ],

    thinkingProcess: `Step 1: Receive request

Step 2: Access req object

Step 3: Extract data

Step 4: Process request

Step 5: Return response`,

    realWorldApplication: "Used in every API endpoint to read incoming data.",

    interviewTip: "req contains everything the client sends to the server.",
  },
  {
    id: "node-38",

    question: "What is the Response Object (res) in Express?",

    difficulty: "Basic",

    shortAnswer:
      "The Response Object (res) is used to send data back from the server to the client.",

    detailedAnswer: `Express provides the Response Object to send responses.

Common Methods:

res.send()

res.json()

res.status()

res.redirect()

res.render()

The server processes a request and uses res to return data, status codes, or pages.`,

    keyPoints: [
      "Sends data to client",

      "Provides response methods",

      "Supports JSON responses",

      "Supports status codes",

      "Essential in APIs",
    ],

    codeExample: `app.get(

  "/",

  (req, res) => {

    res.status(200)

      .json({

        message:

        "Success"

      });

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Sending multiple responses",

      "Forgetting return statement",

      "Wrong status codes",

      "Missing response",

      "Using incorrect methods",
    ],

    thinkingProcess: `Step 1: Process request

Step 2: Prepare response

Step 3: Set status

Step 4: Send data

Step 5: Complete request`,

    realWorldApplication:
      "Used in REST APIs, authentication systems, and web applications.",

    interviewTip: "res is responsible for sending data back to the client.",
  },
  {
    id: "node-39",

    question: "What is next() in Express?",

    difficulty: "Intermediate",

    shortAnswer:
      "next() is a function that passes control from one middleware to the next middleware in the request-response cycle.",

    detailedAnswer: `Express executes middleware sequentially.

The next() function tells Express to continue to the next middleware.

Flow:

Request
↓
Middleware 1
↓ next()
Middleware 2
↓ next()
Route Handler
↓
Response

Without next(), the request may hang and never reach the next middleware.`,

    keyPoints: [
      "Moves request forward",

      "Used in middleware",

      "Part of Express flow",

      "Prevents request hanging",

      "Required for middleware chaining",
    ],

    codeExample: `app.use(

  (req, res, next) => {

    console.log(

      "Middleware 1"

    );

    next();

  }

);

app.use(

  (req, res) => {

    res.send(

      "Finished"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting next()",

      "Calling next() twice",

      "Sending response then calling next()",

      "Infinite loops",

      "Incorrect middleware order",
    ],

    thinkingProcess: `Step 1: Middleware runs

Step 2: Execute logic

Step 3: Call next()

Step 4: Move forward

Step 5: Reach response`,

    realWorldApplication:
      "Used in authentication, logging, validation, and error handling middleware.",

    interviewTip:
      "If middleware does not end the response, it should usually call next().",
  },
  {
    id: "node-40",

    question: "What are the Types of Middleware in Express?",

    difficulty: "Intermediate",

    shortAnswer:
      "Express provides Application, Router, Built-in, Third-Party, and Error-Handling middleware.",

    detailedAnswer: `Middleware can be categorized into several types.

1. Application Middleware

app.use()

2. Router Middleware

express.Router()

3. Built-in Middleware

express.json()

express.urlencoded()

4. Third-Party Middleware

cors

morgan

helmet

5. Error Middleware

Handles application errors.

Each type serves a different purpose within Express applications.`,

    keyPoints: [
      "Application middleware",

      "Router middleware",

      "Built-in middleware",

      "Third-party middleware",

      "Error-handling middleware",
    ],

    codeExample: `app.use(

  express.json()

);

app.use(

  (req, res, next) => {

    console.log(

      "Application Middleware"

    );

    next();

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Wrong middleware order",

      "Ignoring error middleware",

      "Overusing middleware",

      "Not calling next()",

      "Middleware conflicts",
    ],

    thinkingProcess: `Step 1: Identify middleware type

Step 2: Register middleware

Step 3: Execute request flow

Step 4: Handle logic

Step 5: Continue processing`,

    realWorldApplication:
      "Large Express applications use multiple middleware types for security, logging, and validation.",

    interviewTip: "Know all five middleware types and their use cases.",
  },
  {
    id: "node-41",

    question: "What is Custom Middleware?",

    difficulty: "Intermediate",

    shortAnswer:
      "Custom Middleware is user-defined middleware created to perform specific tasks before a request reaches a route handler.",

    detailedAnswer: `Developers can create their own middleware functions.

Common Uses:

- Authentication
- Authorization
- Validation
- Logging
- Request Tracking

Custom middleware follows the standard signature:

(req, res, next)

It can modify requests, responses, or terminate the request cycle.`,

    keyPoints: [
      "User-created middleware",

      "Uses req, res, next",

      "Reusable logic",

      "Common for authentication",

      "Improves code organization",
    ],

    codeExample: `function logger(

  req,

  res,

  next

) {

  console.log(

    req.method

  );

  next();

}

app.use(

  logger

);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting next()",

      "Sending multiple responses",

      "Mixing business logic",

      "Not reusing middleware",

      "Poor middleware structure",
    ],

    thinkingProcess: `Step 1: Create function

Step 2: Access request

Step 3: Perform task

Step 4: Call next()

Step 5: Continue request flow`,

    realWorldApplication:
      "Used for JWT authentication, role checking, API logging, and request validation.",

    interviewTip:
      "Custom middleware helps keep route handlers clean and reusable.",
  },
  {
    id: "node-42",

    question: "What is express.Router()?",

    difficulty: "Intermediate",

    shortAnswer:
      "express.Router() is a mini Express application used to create modular and organized route handlers.",

    detailedAnswer: `As applications grow, keeping all routes in one file becomes difficult.

express.Router() helps separate routes into different modules.

Benefits:

- Better organization
- Cleaner code
- Easier maintenance
- Route grouping

Each router can handle related routes and then be attached to the main application.`,

    keyPoints: [
      "Creates modular routes",

      "Improves project structure",

      "Acts like mini Express app",

      "Supports middleware",

      "Common Express practice",
    ],

    codeExample: `// routes/user.js

const express =

  require("express");

const router =

  express.Router();

router.get(

  "/",

  (req, res) => {

    res.send(

      "Users"

    );

  }

);

module.exports =

  router;




// app.js

app.use(

  "/users",

  require("./routes/user")

);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting module.exports",

      "Wrong route paths",

      "Not mounting router",

      "Mixing all routes together",

      "Incorrect imports",
    ],

    thinkingProcess: `Step 1: Create router

Step 2: Define routes

Step 3: Export router

Step 4: Import router

Step 5: Mount router`,

    realWorldApplication:
      "Used to separate user, product, order, and authentication routes.",

    interviewTip: "express.Router() helps organize large Express applications.",
  },
  {
    id: "node-43",

    question: "How do you organize routes in Express?",

    difficulty: "Intermediate",

    shortAnswer:
      "Routes are typically organized using express.Router() and separated into dedicated route files.",

    detailedAnswer: `Large applications should avoid storing all routes in a single file.

Common Structure:

project/

routes/

controllers/

models/

middlewares/

Example:

routes/userRoutes.js

routes/productRoutes.js

Each file handles a specific resource.

Benefits:

- Scalability
- Maintainability
- Readability
- Team collaboration`,

    keyPoints: [
      "Use route files",

      "Group related routes",

      "Use express.Router()",

      "Improve maintainability",

      "Follow MVC architecture",
    ],

    codeExample: `routes/

  userRoutes.js

  productRoutes.js




app.use(

  "/users",

  userRoutes

);

app.use(

  "/products",

  productRoutes

);`,

    language: "nodejs",

    commonMistakes: [
      "All routes in one file",

      "Poor folder structure",

      "Route duplication",

      "Incorrect imports",

      "Mixing controllers and routes",
    ],

    thinkingProcess: `Step 1: Create route files

Step 2: Group routes

Step 3: Export routers

Step 4: Import routers

Step 5: Mount routers`,

    realWorldApplication:
      "Used in professional Express applications with hundreds of routes.",

    interviewTip: "Separate routes by feature or resource.",
  },
  {
    id: "node-44",

    question: "What is a REST API?",

    difficulty: "Intermediate",

    shortAnswer:
      "A REST API is an architectural style that allows clients and servers to communicate using HTTP methods and resources.",

    detailedAnswer: `REST stands for Representational State Transfer.

REST APIs expose resources through URLs.

Example Resource:

/users

Operations:

GET /users

POST /users

PUT /users/1

DELETE /users/1

REST Principles:

- Client-Server Architecture
- Stateless Communication
- Resource-Based URLs
- Standard HTTP Methods

REST is the most widely used API architecture.`,

    keyPoints: [
      "Uses HTTP methods",

      "Resource-based URLs",

      "Stateless communication",

      "Client-server architecture",

      "Widely used in web development",
    ],

    codeExample: `GET

/users




POST

/users




PUT

/users/1




DELETE

/users/1`,

    language: "nodejs",

    commonMistakes: [
      "Using wrong HTTP methods",

      "Non-resource URLs",

      "Ignoring status codes",

      "Stateful APIs",

      "Poor endpoint naming",
    ],

    thinkingProcess: `Step 1: Define resource

Step 2: Create endpoints

Step 3: Use HTTP methods

Step 4: Process requests

Step 5: Return responses`,

    realWorldApplication:
      "Used by mobile apps, websites, and frontend applications to communicate with servers.",

    interviewTip:
      "REST APIs use resources and HTTP methods to perform CRUD operations.",
  },
  {
    id: "node-45",

    question: "What are HTTP Methods?",

    difficulty: "Basic",

    shortAnswer:
      "HTTP Methods define the action a client wants to perform on a server resource.",

    detailedAnswer: `HTTP methods describe the type of operation being performed.

Common Methods:

GET

Retrieve data

POST

Create data

PUT

Update data

PATCH

Partially update data

DELETE

Remove data

These methods form the foundation of REST APIs.`,

    keyPoints: [
      "Define request action",

      "Used in REST APIs",

      "GET retrieves data",

      "POST creates data",

      "DELETE removes data",
    ],

    codeExample: `app.get("/users");

app.post("/users");

app.put("/users/:id");

app.patch("/users/:id");

app.delete("/users/:id");`,

    language: "nodejs",

    commonMistakes: [
      "Using POST for everything",

      "Wrong method selection",

      "Ignoring REST conventions",

      "Mixing PUT and PATCH",

      "Poor API design",
    ],

    thinkingProcess: `Step 1: Identify operation

Step 2: Select method

Step 3: Process request

Step 4: Update resource

Step 5: Return response`,

    realWorldApplication:
      "Every REST API relies on HTTP methods for CRUD operations.",

    interviewTip:
      "GET = Read, POST = Create, PUT/PATCH = Update, DELETE = Remove.",
  },
  {
    id: "node-46",

    question: "What is the Difference Between GET and POST?",

    difficulty: "Basic",

    shortAnswer:
      "GET retrieves data from a server, while POST sends data to the server to create or process resources.",

    detailedAnswer: `GET and POST are the most commonly used HTTP methods.

GET:

- Retrieves data
- Sends data in URL
- Can be cached
- Visible in browser history

POST:

- Sends data in request body
- Used to create resources
- More secure for large data
- Not cached by default

GET should not modify data, while POST is commonly used to create or submit data.`,

    keyPoints: [
      "GET reads data",

      "POST sends data",

      "GET uses URL",

      "POST uses request body",

      "Different API purposes",
    ],

    codeExample: `// GET

app.get(

  "/users",

  (req, res) => {

    res.send(users);

  }

);




// POST

app.post(

  "/users",

  (req, res) => {

    res.send(

      "User Created"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Using GET for sensitive data",

      "Using POST for reads",

      "Ignoring request body",

      "Wrong method selection",

      "Violating REST principles",
    ],

    thinkingProcess: `Step 1: Determine operation

Step 2: Read or create

Step 3: Choose method

Step 4: Process request

Step 5: Send response`,

    realWorldApplication:
      "GET fetches products, POST creates orders, users, or payments.",

    interviewTip: "GET retrieves data; POST sends data to the server.",
  },
  {
    id: "node-47",

    question: "What is the Difference Between PUT and PATCH?",

    difficulty: "Intermediate",

    shortAnswer:
      "PUT replaces an entire resource, while PATCH updates only specific fields of a resource.",

    detailedAnswer: `Both PUT and PATCH are used for updating resources.

PUT:

- Replaces the entire resource
- Sends complete object
- Missing fields may be overwritten

PATCH:

- Updates only specified fields
- Sends partial data
- More efficient for small updates

Example:

User:

{
  name: "John",
  age: 25
}

PATCH can update only age without sending name.`,

    keyPoints: [
      "PUT replaces entire resource",

      "PATCH updates partial resource",

      "PATCH sends less data",

      "Both are update operations",

      "Common REST API methods",
    ],

    codeExample: `// PUT

app.put(

  "/users/:id",

  updateUser

);




// PATCH

app.patch(

  "/users/:id",

  updateUserField

);`,

    language: "nodejs",

    commonMistakes: [
      "Using PUT for partial updates",

      "Confusing PUT and PATCH",

      "Not validating input",

      "Overwriting data accidentally",

      "Incorrect API design",
    ],

    thinkingProcess: `Step 1: Determine update type

Step 2: Full or partial update

Step 3: Choose method

Step 4: Update resource

Step 5: Return response`,

    realWorldApplication:
      "PUT updates complete profiles, PATCH updates only specific fields like email or password.",

    interviewTip: "PUT = Replace Everything, PATCH = Update Specific Fields.",
  },
  {
    id: "node-48",

    question: "What is a DELETE Request?",

    difficulty: "Basic",

    shortAnswer:
      "DELETE is an HTTP method used to remove a resource from the server.",

    detailedAnswer: `DELETE requests remove existing resources.

Example:

DELETE /users/5

This request removes the user whose ID is 5.

Characteristics:

- Removes data
- Part of CRUD operations
- Common in REST APIs
- Usually returns success status code

DELETE operations should be handled carefully because data loss may occur.`,

    keyPoints: [
      "Removes resources",

      "Uses DELETE method",

      "Part of CRUD",

      "Common REST operation",

      "Requires validation",
    ],

    codeExample: `app.delete(

  "/users/:id",

  (req, res) => {

    res.send(

      "User Deleted"

    );

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Deleting wrong resource",

      "No validation",

      "Missing authorization",

      "Ignoring errors",

      "Returning wrong status codes",
    ],

    thinkingProcess: `Step 1: Identify resource

Step 2: Validate request

Step 3: Delete data

Step 4: Return status

Step 5: Confirm deletion`,

    realWorldApplication:
      "Used in admin panels, user management systems, and e-commerce applications.",

    interviewTip: "DELETE removes resources and is the D in CRUD.",
  },
  {
    id: "node-49",

    question: "What are HTTP Status Codes?",

    difficulty: "Basic",

    shortAnswer:
      "HTTP Status Codes are numeric codes returned by a server to indicate the result of a client request.",

    detailedAnswer: `Status codes tell clients whether a request succeeded or failed.

Categories:

1xx → Informational

2xx → Success

3xx → Redirection

4xx → Client Errors

5xx → Server Errors

Examples:

200 OK

404 Not Found

500 Internal Server Error

Status codes improve communication between clients and servers.`,

    keyPoints: [
      "Indicate request result",

      "Grouped by categories",

      "Used in APIs",

      "Improve debugging",

      "Part of HTTP protocol",
    ],

    codeExample: `res.status(

  200

).send(

  "Success"

);

res.status(

  404

).send(

  "Not Found"

);`,

    language: "nodejs",

    commonMistakes: [
      "Wrong status codes",

      "Always returning 200",

      "Ignoring errors",

      "Inconsistent responses",

      "Poor API design",
    ],

    thinkingProcess: `Step 1: Process request

Step 2: Determine result

Step 3: Select status code

Step 4: Send response

Step 5: Inform client`,

    realWorldApplication: "Used by all web applications and APIs.",

    interviewTip: "Status codes tell clients whether requests succeed or fail.",
  },
  {
    id: "node-50",

    question: "What are Common HTTP Status Codes?",

    difficulty: "Basic",

    shortAnswer:
      "Common status codes include 200, 201, 400, 401, 403, 404, and 500.",

    detailedAnswer: `Important HTTP Status Codes:

200 OK

Request successful

201 Created

Resource created

400 Bad Request

Invalid client request

401 Unauthorized

Authentication required

403 Forbidden

Access denied

404 Not Found

Resource does not exist

500 Internal Server Error

Server-side error

These are the most commonly used status codes in REST APIs.`,

    keyPoints: [
      "200 = Success",

      "201 = Created",

      "400 = Bad Request",

      "404 = Not Found",

      "500 = Server Error",
    ],

    codeExample: `res.status(200);

res.status(201);

res.status(400);

res.status(401);

res.status(404);

res.status(500);`,

    language: "nodejs",

    commonMistakes: [
      "Using wrong status codes",

      "Returning 200 on errors",

      "Ignoring 201 for creation",

      "Misusing 401 and 403",

      "Not handling server errors",
    ],

    thinkingProcess: `Step 1: Evaluate outcome

Step 2: Choose correct code

Step 3: Send response

Step 4: Inform client

Step 5: Maintain consistency`,

    realWorldApplication:
      "Used in authentication, APIs, forms, and backend services.",

    interviewTip: "Memorize 200, 201, 400, 401, 403, 404, and 500.",
  },
  {
    id: "node-51",

    question: "What is CRUD?",

    difficulty: "Basic",

    shortAnswer:
      "CRUD stands for Create, Read, Update, and Delete, the four basic operations performed on data.",

    detailedAnswer: `CRUD represents the most common database operations.

Create

Insert new data

Read

Retrieve data

Update

Modify existing data

Delete

Remove data

CRUD maps directly to HTTP methods:

Create → POST

Read → GET

Update → PUT/PATCH

Delete → DELETE

Almost every application performs CRUD operations.`,

    keyPoints: [
      "Create data",

      "Read data",

      "Update data",

      "Delete data",

      "Maps to HTTP methods",
    ],

    codeExample: `POST   /users

GET    /users

PUT    /users/:id

DELETE /users/:id`,

    language: "nodejs",

    commonMistakes: [
      "Confusing HTTP methods",

      "Incorrect API design",

      "Missing validation",

      "Poor database operations",

      "Ignoring security",
    ],

    thinkingProcess: `Step 1: Create resource

Step 2: Read resource

Step 3: Update resource

Step 4: Delete resource

Step 5: Manage lifecycle`,

    realWorldApplication:
      "User management systems, e-commerce apps, blogs, and inventory systems all rely on CRUD.",

    interviewTip: "CRUD is the foundation of databases and REST APIs.",
  },
  {
    id: "node-52",

    question: "What is CORS?",

    difficulty: "Intermediate",

    shortAnswer:
      "CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts requests between different origins.",

    detailedAnswer: `Browsers enforce the Same-Origin Policy.

Example:

Frontend:
http://localhost:3000

Backend:
http://localhost:5000

These are different origins.

Without CORS:

Browser blocks requests.

With CORS:

Server explicitly allows requests from other origins.

Express commonly uses the cors package to enable CORS.`,

    keyPoints: [
      "Cross-Origin Resource Sharing",

      "Browser security feature",

      "Controls cross-domain requests",

      "Common in APIs",

      "Uses cors middleware",
    ],

    codeExample: `const cors =

  require("cors");

app.use(

  cors()

);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting CORS setup",

      "Allowing all origins in production",

      "Misconfiguring headers",

      "Ignoring browser restrictions",

      "Using incorrect origin values",
    ],

    thinkingProcess: `Step 1: Browser sends request

Step 2: Server checks origin

Step 3: CORS policy applied

Step 4: Allow or block request

Step 5: Return response`,

    realWorldApplication:
      "Used when React, Angular, or Vue applications communicate with backend APIs.",

    interviewTip:
      "CORS solves browser restrictions for requests between different origins.",
  },
  {
    id: "node-53",

    question: "What is dotenv?",

    difficulty: "Basic",

    shortAnswer:
      "dotenv is a package that loads environment variables from a .env file into process.env.",

    detailedAnswer: `Applications often contain sensitive data such as:

- Database URLs
- API Keys
- JWT Secrets
- Port Numbers

Instead of hardcoding values, dotenv loads them from a .env file.

Benefits:

- Improved security
- Easier configuration
- Better environment management

dotenv is one of the most commonly used Node.js packages.`,

    keyPoints: [
      "Loads environment variables",

      "Uses .env file",

      "Improves security",

      "Stores sensitive information",

      "Uses process.env",
    ],

    codeExample: `require(

  "dotenv"

).config();

console.log(

  process.env.PORT

);`,

    language: "nodejs",

    commonMistakes: [
      "Committing .env to Git",

      "Missing .config()",

      "Typos in variable names",

      "Hardcoding secrets",

      "Incorrect file location",
    ],

    thinkingProcess: `Step 1: Create .env

Step 2: Install dotenv

Step 3: Load variables

Step 4: Access process.env

Step 5: Use configuration`,

    realWorldApplication:
      "Used to store database credentials, API keys, and secret tokens securely.",

    interviewTip: "dotenv loads .env variables into process.env.",
  },
  {
    id: "node-54",

    question: "What are Environment Variables?",

    difficulty: "Basic",

    shortAnswer:
      "Environment Variables are external configuration values used by applications without hardcoding sensitive data.",

    detailedAnswer: `Environment Variables store configuration outside application code.

Examples:

PORT=5000

DB_URL=mongodb://localhost

JWT_SECRET=mysecret

Benefits:

- Security
- Flexibility
- Different configurations per environment

Node.js accesses environment variables using:

process.env

This approach is considered a best practice for application configuration.`,

    keyPoints: [
      "External configuration",

      "Avoids hardcoding",

      "Improves security",

      "Accessed via process.env",

      "Used in production applications",
    ],

    codeExample: `console.log(

  process.env.PORT

);

console.log(

  process.env.DB_URL

);`,

    language: "nodejs",

    commonMistakes: [
      "Hardcoding secrets",

      "Missing environment values",

      "Incorrect variable names",

      "Committing secrets to Git",

      "Ignoring production configuration",
    ],

    thinkingProcess: `Step 1: Define variable

Step 2: Load variable

Step 3: Access process.env

Step 4: Use configuration

Step 5: Secure application`,

    realWorldApplication:
      "Used for API keys, database connections, JWT secrets, and application settings.",

    interviewTip:
      "Environment variables separate configuration from application code.",
  },
  {
    id: "node-55",

    question: "What is Nodemon?",

    difficulty: "Basic",

    shortAnswer:
      "Nodemon is a development tool that automatically restarts a Node.js application whenever file changes are detected.",

    detailedAnswer: `Without Nodemon:

Every code change requires manually restarting the server.

With Nodemon:

The server automatically restarts whenever files change.

Benefits:

- Faster development
- Improved productivity
- Automatic server reload

Nodemon is usually installed as a dev dependency.`,

    keyPoints: [
      "Automatic server restart",

      "Development tool",

      "Improves productivity",

      "Monitors file changes",

      "Common Node.js utility",
    ],

    codeExample: `npm install

  nodemon

  --save-dev




// package.json

"scripts": {

  "dev":

  "nodemon app.js"

}`,

    language: "nodejs",

    commonMistakes: [
      "Installing globally unnecessarily",

      "Using in production",

      "Incorrect script setup",

      "Watching unnecessary files",

      "Ignoring package.json scripts",
    ],

    thinkingProcess: `Step 1: Install nodemon

Step 2: Configure script

Step 3: Start server

Step 4: Modify code

Step 5: Auto restart occurs`,

    realWorldApplication:
      "Used by almost every Node.js developer during development.",

    interviewTip:
      "Nodemon automatically restarts the server when files change.",
  },
  {
    id: "node-56",

    question: "What is MVC Architecture?",

    difficulty: "Intermediate",

    shortAnswer:
      "MVC (Model-View-Controller) is a software design pattern that separates application logic into three layers.",

    detailedAnswer: `MVC stands for:

Model

Handles data and database operations.

View

Handles user interface and presentation.

Controller

Handles requests and business logic.

Flow:

User
↓
Controller
↓
Model
↓
Database
↓
Controller
↓
View
↓
User

Benefits:

- Better organization
- Easier maintenance
- Scalability
- Cleaner code structure`,

    keyPoints: [
      "Model manages data",

      "View handles UI",

      "Controller handles logic",

      "Improves project structure",

      "Common backend architecture",
    ],

    codeExample: `project/

  models/

  views/

  controllers/

  routes/

  app.js`,

    language: "nodejs",

    commonMistakes: [
      "Putting all logic in routes",

      "Mixing controller and model code",

      "Ignoring separation of concerns",

      "Poor folder structure",

      "Overcomplicating architecture",
    ],

    thinkingProcess: `Step 1: Receive request

Step 2: Controller processes

Step 3: Model accesses data

Step 4: Return result

Step 5: Send response`,

    realWorldApplication:
      "Used in Express, Laravel, Django, ASP.NET, and enterprise applications.",

    interviewTip:
      "MVC separates data, logic, and presentation into independent layers.",
  },
  {
    id: "node-57",

    question: "What is Authentication?",

    difficulty: "Intermediate",

    shortAnswer:
      "Authentication is the process of verifying the identity of a user before granting access to an application.",

    detailedAnswer: `Authentication answers the question:

"Who are you?"

When a user logs into an application, the system verifies their identity using credentials.

Common Authentication Methods:

- Username and Password
- OTP (One-Time Password)
- JWT Authentication
- OAuth
- Biometric Authentication

If credentials are valid, the user is authenticated and allowed to access the system.`,

    keyPoints: [
      "Verifies user identity",

      "First security step",

      "Uses credentials",

      "Required before authorization",

      "Common in web applications",
    ],

    codeExample: `app.post(

  "/login",

  (req, res) => {

    const {

      email,

      password

    } = req.body;

    if (

      email === "admin@test.com" &&

      password === "1234"

    ) {

      res.send(

        "Authenticated"

      );

    }

  }

);`,

    language: "nodejs",

    commonMistakes: [
      "Storing plain passwords",

      "Weak password validation",

      "Missing encryption",

      "Ignoring authentication checks",

      "Poor login security",
    ],

    thinkingProcess: `Step 1: User enters credentials

Step 2: Server verifies data

Step 3: Match records

Step 4: Authenticate user

Step 5: Grant access`,

    realWorldApplication:
      "Used in login systems, banking apps, e-commerce websites, and social media platforms.",

    interviewTip: "Authentication verifies identity. It answers: Who are you?",
  },
  {
    id: "node-58",

    question: "What is Authorization?",

    difficulty: "Intermediate",

    shortAnswer:
      "Authorization determines what actions or resources an authenticated user is allowed to access.",

    detailedAnswer: `Authorization answers the question:

"What are you allowed to do?"

After authentication succeeds, the application checks permissions.

Examples:

Admin:

- Create users
- Delete users
- Manage system

Regular User:

- View profile
- Update profile

Authorization ensures users access only permitted resources.`,

    keyPoints: [
      "Determines permissions",

      "Occurs after authentication",

      "Controls access",

      "Role-based security",

      "Protects resources",
    ],

    codeExample: `if (

  user.role ===

  "admin"

) {

  res.send(

    "Access Granted"

  );

}

else {

  res.status(403)

    .send(

      "Forbidden"

    );

}`,

    language: "nodejs",

    commonMistakes: [
      "Skipping authorization checks",

      "Giving excessive permissions",

      "Poor role management",

      "Trusting client-side roles",

      "Ignoring access control",
    ],

    thinkingProcess: `Step 1: Authenticate user

Step 2: Check role

Step 3: Verify permission

Step 4: Allow or deny

Step 5: Return response`,

    realWorldApplication:
      "Used in admin panels, dashboards, content management systems, and enterprise software.",

    interviewTip: "Authorization determines what a user can do.",
  },
  {
    id: "node-59",

    question: "Difference Between Authentication and Authorization?",

    difficulty: "Intermediate",

    shortAnswer:
      "Authentication verifies identity, while Authorization determines permissions.",

    detailedAnswer: `Authentication and Authorization are related but different concepts.

Authentication:

- Verifies identity
- Happens first
- Example: Login

Authorization:

- Determines permissions
- Happens after authentication
- Example: Accessing admin dashboard

Example:

User logs in
↓
Authentication

User tries to access admin page
↓
Authorization

Both are essential parts of application security.`,

    keyPoints: [
      "Authentication = Identity",

      "Authorization = Permissions",

      "Authentication happens first",

      "Authorization happens second",

      "Both improve security",
    ],

    codeExample: `// Authentication

Login User




// Authorization

Check Role

if (

  user.role ===

  "admin"

) {

  Access Granted

}`,

    language: "nodejs",

    commonMistakes: [
      "Confusing the two concepts",

      "Skipping authorization",

      "Weak authentication systems",

      "Improper role checks",

      "Security vulnerabilities",
    ],

    thinkingProcess: `Step 1: Verify identity

Step 2: Authenticate user

Step 3: Check permissions

Step 4: Authorize request

Step 5: Grant access`,

    realWorldApplication:
      "Every secure application uses both authentication and authorization.",

    interviewTip:
      "Authentication = Who are you? Authorization = What can you do?",
  },
  {
    id: "node-60",

    question: "What is JWT?",

    difficulty: "Intermediate",

    shortAnswer:
      "JWT (JSON Web Token) is a secure token format used to transmit user information between client and server.",

    detailedAnswer: `JWT stands for JSON Web Token.

It is commonly used for authentication and authorization.

A JWT consists of three parts:

1. Header
2. Payload
3. Signature

Format:

header.payload.signature

After login:

Server generates JWT

Client stores JWT

Client sends JWT with future requests

Server verifies JWT before granting access.`,

    keyPoints: [
      "JSON Web Token",

      "Used for authentication",

      "Contains three parts",

      "Stateless authentication",

      "Widely used in APIs",
    ],

    codeExample: `const jwt =

  require(

    "jsonwebtoken"

  );

const token =

  jwt.sign(

    {

      userId: 1

    },

    "secretKey"

  );

console.log(

  token

);`,

    language: "nodejs",

    commonMistakes: [
      "Storing secrets insecurely",

      "Using weak secret keys",

      "Not verifying tokens",

      "Long expiration times",

      "Sending sensitive data in payload",
    ],

    thinkingProcess: `Step 1: User logs in

Step 2: Generate JWT

Step 3: Send token

Step 4: Store token

Step 5: Verify token later`,

    realWorldApplication:
      "Used in React, Angular, Vue, mobile apps, and REST APIs.",

    interviewTip: "JWT provides stateless authentication using signed tokens.",
  },
  {
    id: "node-61",

    question: "How JWT Authentication Works?",

    difficulty: "Intermediate",

    shortAnswer:
      "JWT Authentication works by generating a token after login and verifying that token on protected requests.",

    detailedAnswer: `JWT Authentication Flow:

1. User logs in

2. Server validates credentials

3. Server generates JWT

4. JWT sent to client

5. Client stores token

6. Client sends token with requests

7. Server verifies token

8. Access granted

Common Header:

Authorization:

Bearer <token>

Because JWT is stateless, the server does not need to store session data.`,

    keyPoints: [
      "Login generates token",

      "Client stores token",

      "Token sent with requests",

      "Server verifies token",

      "Stateless authentication",
    ],

    codeExample: `// Generate Token

const token =

  jwt.sign(

    {

      userId: user.id

    },

    process.env.JWT_SECRET

  );




// Verify Token

jwt.verify(

  token,

  process.env.JWT_SECRET

);`,

    language: "nodejs",

    commonMistakes: [
      "Not verifying tokens",

      "Exposing secret keys",

      "Storing tokens insecurely",

      "Ignoring expiration",

      "Sending tokens incorrectly",
    ],

    thinkingProcess: `Step 1: Login

Step 2: Validate credentials

Step 3: Generate JWT

Step 4: Send token

Step 5: Verify token on requests`,

    realWorldApplication:
      "Used in modern REST APIs, React applications, mobile apps, and microservices.",

    interviewTip:
      "JWT flow: Login → Generate Token → Store Token → Send Token → Verify Token.",
  },
  {
    id: "node-62",

    question: "Create a Basic HTTP Server",

    difficulty: "coding",

    shortAnswer:
      "A basic HTTP server can be created using Node.js built-in http module and createServer() method.",

    detailedAnswer: `The http module allows Node.js to create web servers.



Steps:



1. Import http module

2. Create server

3. Handle request

4. Send response

5. Start listening on a port



This is the foundation of backend development in Node.js.`,

    keyPoints: [
      "Uses built-in http module",

      "No external package required",

      "Handles requests and responses",

      "Uses createServer()",

      "Foundation of Node.js servers",
    ],

    codeExample: `const http =



require("http");



const server =



http.createServer(



(req, res) => {



res.writeHead(



200,



{



"Content-Type":



"text/plain"



}



);



res.end(



"Hello World"



);



}



);



server.listen(



3000,



() => {



console.log(



"Server Running"



);



}



);`,

    language: "nodejs",

    commonMistakes: [
      "Forgetting listen()",

      "Missing res.end()",

      "Wrong port number",

      "Incorrect content type",

      "Ignoring request object",
    ],

    thinkingProcess: `Step 1: Import http



Step 2: Create server



Step 3: Handle request



Step 4: Send response



Step 5: Start server`,

    realWorldApplication:
      "Used to create APIs, web servers, and backend applications.",

    interviewTip:
      "A basic HTTP server demonstrates understanding of Node.js fundamentals.",
  },

  {
    id: "node-63",

    question: "Read a File using fs",

    difficulty: "coding",

    shortAnswer:
      "The fs.readFile() method is used to read file contents asynchronously.",

    detailedAnswer: `Node.js provides the fs module for file operations.



readFile():



- Reads file asynchronously

- Returns data through callback

- Does not block execution



This is the preferred way to read files in Node.js.`,

    keyPoints: [
      "Uses fs module",

      "Asynchronous operation",

      "Reads file content",

      "Uses callback",

      "Common Node.js task",
    ],

    codeExample: `const fs =



require("fs");



fs.readFile(



"sample.txt",



"utf8",



(err, data) => {



if (err) {



console.log(err);



return;



}



console.log(data);



}



);`,

    language: "nodejs",

    commonMistakes: [
      "Wrong file path",

      "Ignoring errors",

      "Missing encoding",

      "Using sync unnecessarily",

      "Not handling callback",
    ],

    thinkingProcess: `Step 1: Import fs



Step 2: Call readFile



Step 3: Handle error



Step 4: Access data



Step 5: Process content`,

    realWorldApplication:
      "Used in configuration files, logs, reports, and data processing.",

    interviewTip: "Always mention asynchronous file reading in Node.js.",
  },
  {
    id: "node-64",

    question: "Create a REST API using Express",

    difficulty: "coding",

    shortAnswer:
      "A REST API can be built using Express routes and HTTP methods such as GET, POST, PUT, and DELETE.",

    detailedAnswer: `Express simplifies API creation.



REST API Features:



- Resource-based URLs

- HTTP methods

- JSON responses



Common Methods:



GET



POST



PUT



DELETE



Express is the most popular framework for building REST APIs.`,

    keyPoints: [
      "Uses Express",

      "Supports CRUD",

      "Returns JSON",

      "Uses routing",

      "RESTful architecture",
    ],

    codeExample: `const express =



require("express");



const app =



express();



app.get(



"/users",



(req, res) => {



res.json(



[{ id: 1, name: "John" }]



);



}



);



app.listen(



3000



);`,

    language: "nodejs",

    commonMistakes: [
      "Wrong HTTP methods",

      "Missing JSON responses",

      "Poor route naming",

      "No error handling",

      "Ignoring status codes",
    ],

    thinkingProcess: `Step 1: Create Express app



Step 2: Define routes



Step 3: Handle requests



Step 4: Return JSON



Step 5: Start server`,

    realWorldApplication:
      "Used in mobile apps, websites, and frontend-backend communication.",

    interviewTip:
      "REST APIs use resources and HTTP methods to perform operations.",
  },
  {
    id: "node-65",

    question: "Create CRUD API",

    difficulty: "coding",

    shortAnswer:
      "A CRUD API supports Create, Read, Update, and Delete operations using REST endpoints.",

    detailedAnswer: `CRUD stands for:



Create → POST



Read → GET



Update → PUT/PATCH



Delete → DELETE



A CRUD API manages application data through these operations.



Most backend applications are built around CRUD functionality.`,

    keyPoints: [
      "Create data",

      "Read data",

      "Update data",

      "Delete data",

      "Core API pattern",
    ],

    codeExample: `app.get(



"/users",



getUsers



);



app.post(



"/users",



createUser



);



app.put(



"/users/:id",



updateUser



);



app.delete(



"/users/:id",



deleteUser



);`,

    language: "nodejs",

    commonMistakes: [
      "Using wrong methods",

      "Poor endpoint naming",

      "Missing validation",

      "Ignoring errors",

      "Returning wrong status codes",
    ],

    thinkingProcess: `Step 1: Create resource



Step 2: Read resource



Step 3: Update resource



Step 4: Delete resource



Step 5: Return responses`,

    realWorldApplication:
      "Used in user management, e-commerce, blogs, and inventory systems.",

    interviewTip: "CRUD APIs form the foundation of most RESTful applications.",
  },
  {
    id: "node-66",

    question: "Connect MongoDB",

    difficulty: "coding",

    shortAnswer:
      "MongoDB can be connected to a Node.js application using the Mongoose library.",

    detailedAnswer: `Mongoose is the most popular ODM (Object Data Modeling) library for MongoDB.

Steps:

1. Install mongoose
2. Import mongoose
3. Connect using connection string
4. Handle success/error

MongoDB stores data in collections and documents.

Mongoose simplifies database operations and schema management.`,

    keyPoints: [
      "Uses mongoose",

      "Connects Node.js to MongoDB",

      "Supports schemas",

      "Handles database operations",

      "Widely used in MERN stack",
    ],

    codeExample: `const mongoose =

require("mongoose");

mongoose.connect(

"mongodb://127.0.0.1:27017/mydb"

)

.then(() => {

console.log(

"MongoDB Connected"

);

})

.catch((err) => {

console.log(err);

});`,

    language: "nodejs",

    commonMistakes: [
      "Wrong connection string",

      "MongoDB server not running",

      "Ignoring connection errors",

      "Not using environment variables",

      "Incorrect database name",
    ],

    thinkingProcess: `Step 1: Install mongoose

Step 2: Import library

Step 3: Connect database

Step 4: Handle success

Step 5: Start application`,

    realWorldApplication:
      "Used in MERN applications, dashboards, blogs, and e-commerce systems.",

    interviewTip:
      "Mongoose is the standard way to connect MongoDB with Node.js.",
  },
  {
    id: "node-67",

    question: "Create User Registration API",

    difficulty: "coding",

    shortAnswer:
      "A registration API accepts user data, validates it, and stores a new user in the database.",

    detailedAnswer: `User registration is one of the most common backend tasks.

Steps:

1. Receive user data
2. Validate inputs
3. Check existing user
4. Save new user
5. Return response

Usually stores:

- Name
- Email
- Password

Passwords should be hashed before saving.`,

    keyPoints: [
      "Accepts user data",

      "Validates input",

      "Checks duplicate users",

      "Stores user record",

      "Returns success response",
    ],

    codeExample: `app.post(

"/register",

async (req, res) => {

const user =

await User.create(

req.body

);

res.status(201)

.json(user);

}

);`,

    language: "nodejs",

    commonMistakes: [
      "Not validating inputs",

      "Saving plain passwords",

      "Ignoring duplicate emails",

      "No error handling",

      "Returning sensitive data",
    ],

    thinkingProcess: `Step 1: Receive request

Step 2: Validate fields

Step 3: Check duplicates

Step 4: Save user

Step 5: Return response`,

    realWorldApplication:
      "Used in authentication systems, websites, and mobile applications.",

    interviewTip: "Always hash passwords before storing them.",
  },
  {
    id: "node-68",

    question: "Create Login API using JWT",

    difficulty: "coding",

    shortAnswer:
      "A login API verifies user credentials and returns a JWT token upon successful authentication.",

    detailedAnswer: `JWT-based authentication is widely used in modern applications.

Flow:

1. User submits credentials
2. Verify email/password
3. Generate JWT token
4. Send token to client

The token is used for future authenticated requests.`,

    keyPoints: [
      "Verifies credentials",

      "Generates JWT",

      "Returns token",

      "Supports authentication",

      "Stateless approach",
    ],

    codeExample: `const token =

jwt.sign(

{ id: user._id },

process.env.JWT_SECRET,

{ expiresIn: "1d" }

);

res.json({

token

});`,

    language: "nodejs",

    commonMistakes: [
      "Not verifying password",

      "Weak secret key",

      "Long token expiry",

      "Exposing sensitive data",

      "Not handling invalid users",
    ],

    thinkingProcess: `Step 1: Receive credentials

Step 2: Verify user

Step 3: Generate token

Step 4: Return token

Step 5: Protect routes`,

    realWorldApplication:
      "Used in MERN applications, mobile apps, and REST APIs.",

    interviewTip: "JWT allows stateless authentication.",
  },
  {
    id: "node-69",

    question: "Password Hashing using bcrypt",

    difficulty: "coding",

    shortAnswer:
      "bcrypt securely hashes passwords before storing them in the database.",

    detailedAnswer: `Passwords should never be stored as plain text.

bcrypt provides:

- Password hashing
- Salt generation
- Password comparison

Benefits:

- Improved security
- Protection against data leaks
- Industry-standard approach

Hash passwords during registration and compare during login.`,

    keyPoints: [
      "Hashes passwords",

      "Uses salt",

      "Improves security",

      "Supports comparison",

      "Industry standard",
    ],

    codeExample: `const bcrypt =

require("bcrypt");

const hashedPassword =

await bcrypt.hash(

password,

10

);

const isMatch =

await bcrypt.compare(

password,

hashedPassword

);`,

    language: "nodejs",

    commonMistakes: [
      "Saving plain passwords",

      "Low salt rounds",

      "Not comparing hashes correctly",

      "Exposing hashed passwords",

      "Skipping password validation",
    ],

    thinkingProcess: `Step 1: Receive password

Step 2: Generate hash

Step 3: Save hash

Step 4: Compare on login

Step 5: Authenticate user`,

    realWorldApplication: "Used in every secure authentication system.",

    interviewTip: "Never store passwords directly—always hash them.",
  },
  {
    id: "node-70",

    question: "File Upload using Multer",

    difficulty: "coding",

    shortAnswer:
      "Multer is Express middleware used to handle multipart/form-data and file uploads.",

    detailedAnswer: `Multer simplifies file upload handling in Express applications.

Common Uploads:

- Images
- PDFs
- Videos
- Documents

Features:

- File storage
- File validation
- Multiple file uploads

Multer works with HTML forms and APIs.`,

    keyPoints: [
      "Handles file uploads",

      "Express middleware",

      "Supports multipart/form-data",

      "Stores uploaded files",

      "Supports validation",
    ],

    codeExample: `const multer =

require("multer");

const upload =

multer({

dest: "uploads/"

});

app.post(

"/upload",

upload.single("image"),

(req, res) => {

res.send(

"File Uploaded"

);

}

);`,

    language: "nodejs",

    commonMistakes: [
      "Wrong field names",

      "Missing multipart form",

      "No file validation",

      "Ignoring file size limits",

      "Poor storage configuration",
    ],

    thinkingProcess: `Step 1: Configure Multer

Step 2: Create upload middleware

Step 3: Receive file

Step 4: Store file

Step 5: Return response`,

    realWorldApplication:
      "Used for profile pictures, resumes, product images, and document uploads.",

    interviewTip:
      "Multer is the most common file upload middleware in Express.",
  },
  {
    id: "node-71",

    question: "Error Handling Middleware",

    difficulty: "coding",

    shortAnswer:
      "Error Handling Middleware is a special Express middleware used to catch and handle application errors centrally.",

    detailedAnswer: `Instead of handling errors in every route, Express provides Error Handling Middleware.

Signature:

(err, req, res, next)

Benefits:

- Centralized error management
- Cleaner route handlers
- Consistent API responses
- Easier debugging

It should usually be registered after all routes.`,

    keyPoints: [
      "Centralized error handling",

      "Uses four parameters",

      "Improves maintainability",

      "Handles unexpected errors",

      "Common Express practice",
    ],

    codeExample: `app.use(

(err, req, res, next) => {

res.status(500)

.json({

success: false,

message:

err.message

});

}

);`,

    language: "nodejs",

    commonMistakes: [
      "Wrong parameter order",

      "Not placing middleware last",

      "Exposing sensitive errors",

      "Ignoring status codes",

      "Not using next(error)",
    ],

    thinkingProcess: `Step 1: Error occurs

Step 2: Pass error to next()

Step 3: Error middleware catches it

Step 4: Create response

Step 5: Send error message`,

    realWorldApplication:
      "Used in production APIs to provide standardized error responses.",

    interviewTip:
      "Error middleware requires four parameters: err, req, res, next.",
  },
  {
    id: "node-72",

    question: "Build Notes API",

    difficulty: "coding",

    shortAnswer:
      "A Notes API allows users to create, read, update, and delete notes using REST endpoints.",

    detailedAnswer: `A Notes API is a common beginner backend project.

Features:

- Create Note
- Get Notes
- Update Note
- Delete Note

Typical Fields:

- title
- content
- createdAt

The API usually uses Express and MongoDB.`,

    keyPoints: [
      "CRUD operations",

      "RESTful endpoints",

      "Stores notes",

      "Uses Express",

      "Uses MongoDB",
    ],

    codeExample: `app.post(

"/notes",

async (req, res) => {

const note =

await Note.create(

req.body

);

res.status(201)

.json(note);

}

);

app.get(

"/notes",

async (req, res) => {

const notes =

await Note.find();

res.json(notes);

}

);`,

    language: "nodejs",

    commonMistakes: [
      "No validation",

      "Missing error handling",

      "Poor schema design",

      "Ignoring status codes",

      "No authentication",
    ],

    thinkingProcess: `Step 1: Create model

Step 2: Create routes

Step 3: Add CRUD logic

Step 4: Connect database

Step 5: Test API`,

    realWorldApplication:
      "Used in note-taking applications like Evernote and Google Keep.",

    interviewTip:
      "A Notes API demonstrates CRUD and database integration skills.",
  },
  {
    id: "node-73",

    question: "Build Todo API",

    difficulty: "coding",

    shortAnswer:
      "A Todo API manages tasks through Create, Read, Update, and Delete operations.",

    detailedAnswer: `A Todo API is one of the most common backend interview projects.

Features:

- Add Todo
- Get Todos
- Update Todo
- Delete Todo
- Mark Complete

Common Fields:

- title
- completed
- createdAt

The API is usually built with Express and MongoDB.`,

    keyPoints: [
      "CRUD operations",

      "Task management",

      "REST API project",

      "Uses database",

      "Beginner-friendly backend project",
    ],

    codeExample: `app.post(

"/todos",

async (req, res) => {

const todo =

await Todo.create({

title:

req.body.title

});

res.json(todo);

}

);

app.get(

"/todos",

async (req, res) => {

const todos =

await Todo.find();

res.json(todos);

}

);`,

    language: "nodejs",

    commonMistakes: [
      "No validation",

      "Poor route naming",

      "Ignoring completion status",

      "No error handling",

      "Not using database indexes",
    ],

    thinkingProcess: `Step 1: Create schema

Step 2: Define routes

Step 3: Implement CRUD

Step 4: Connect database

Step 5: Test endpoints`,

    realWorldApplication:
      "Used in productivity and task management applications.",

    interviewTip:
      "Todo APIs are frequently used to evaluate backend fundamentals.",
  },
  {
    id: "node-74",

    question: "Build Authentication System",

    difficulty: "coding",

    shortAnswer:
      "An Authentication System verifies users and protects application resources using login and registration functionality.",

    detailedAnswer: `A complete authentication system usually includes:

- Registration
- Login
- Password Hashing
- JWT Generation
- Protected Routes

Flow:

Register
↓

Login
↓

Generate JWT
↓

Access Protected Resources

Security is a major focus in authentication systems.`,

    keyPoints: [
      "User registration",

      "User login",

      "JWT authentication",

      "Password hashing",

      "Protected routes",
    ],

    codeExample: `const token =

jwt.sign(

{

id: user._id

},

process.env.JWT_SECRET

);

res.json({

token

});`,

    language: "nodejs",

    commonMistakes: [
      "Storing plain passwords",

      "Weak JWT secrets",

      "Missing authorization",

      "Poor validation",

      "Ignoring token expiration",
    ],

    thinkingProcess: `Step 1: Register user

Step 2: Hash password

Step 3: Login user

Step 4: Generate JWT

Step 5: Protect routes`,

    realWorldApplication:
      "Used in social media, e-commerce, banking, and SaaS applications.",

    interviewTip: "Authentication projects showcase backend security skills.",
  },
  {
    id: "node-75",

    question: "Build Blog API",

    difficulty: "coding",

    shortAnswer:
      "A Blog API manages blog posts through REST endpoints for creating, reading, updating, and deleting articles.",

    detailedAnswer: `A Blog API is a popular full-stack backend project.

Features:

- Create Post
- Read Posts
- Update Post
- Delete Post
- Author Management

Typical Fields:

- title
- content
- author
- createdAt

Often integrated with authentication systems.`,

    keyPoints: [
      "CRUD operations",

      "Blog management",

      "RESTful design",

      "Database integration",

      "Authentication support",
    ],

    codeExample: `app.post(

"/posts",

async (req, res) => {

const post =

await Post.create(

req.body

);

res.status(201)

.json(post);

}

);

app.get(

"/posts",

async (req, res) => {

const posts =

await Post.find();

res.json(posts);

}

);`,

    language: "nodejs",

    commonMistakes: [
      "No authentication",

      "Missing validation",

      "Poor schema design",

      "Ignoring pagination",

      "No error handling",
    ],

    thinkingProcess: `Step 1: Create schema

Step 2: Create routes

Step 3: Implement CRUD

Step 4: Add authentication

Step 5: Test API`,

    realWorldApplication:
      "Used in blogging platforms, CMS systems, and publishing websites.",

    interviewTip:
      "A Blog API combines CRUD, authentication, and database concepts in one project.",
  },
];
