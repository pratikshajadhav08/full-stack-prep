const reactQuestions = [
  {
    id: "react-1",

    question: "What is React?",

    difficulty: "Basic",

    shortAnswer:
      "React is a JavaScript library developed by Facebook for building fast, interactive, and reusable user interfaces.",

    detailedAnswer: `React is an open-source JavaScript library used for building user interfaces, especially Single Page Applications (SPAs).

It was developed by Facebook (now Meta) and is one of the most popular frontend technologies.

React follows a component-based architecture, meaning the UI is divided into small reusable pieces called components.

Key characteristics:

- Component-based architecture
- Virtual DOM for better performance
- Declarative UI
- Reusable code
- One-way data flow

React focuses only on the View layer of the application (UI layer).

Popular applications built using React include:

- Facebook
- Instagram
- WhatsApp Web
- Netflix
- Airbnb

React makes UI development faster, easier to maintain, and highly scalable.`,

    keyPoints: [
      "React is a JavaScript library",

      "Developed by Facebook (Meta)",

      "Uses component-based architecture",

      "Uses Virtual DOM",

      "Supports reusable UI components",

      "Used for Single Page Applications",
    ],

    codeExample: `function App() {

  return (

    <h1>

      Hello React

    </h1>

  );

}

export default App;`,

    language: "react",

    commonMistakes: [
      "Calling React a framework instead of a library",

      "Thinking React replaces JavaScript",

      "Confusing React with React Native",

      "Ignoring component reusability",

      "Assuming React handles backend logic",
    ],

    thinkingProcess: `Step 1: Define React

Step 2: Explain who created it

Step 3: Discuss component-based architecture

Step 4: Explain Virtual DOM

Step 5: Mention common use cases`,

    realWorldApplication:
      "React is used to build modern web applications such as dashboards, e-commerce websites, social media platforms, admin panels, and SaaS products.",

    interviewTip:
      "Mention that React is a library, not a framework, and emphasize component-based architecture and Virtual DOM.",
  },
  {
    id: "react-2",

    question: "What are the features of React?",

    difficulty: "Basic",

    shortAnswer:
      "React provides a component-based architecture, Virtual DOM, JSX, one-way data binding, and reusable UI components for building fast and scalable web applications.",

    detailedAnswer: `React includes several powerful features that make frontend development easier and more efficient.

1. COMPONENT-BASED ARCHITECTURE

Applications are built using reusable components.

Example:
Navbar
Sidebar
Footer
Button

Each component manages its own logic and UI.

2. VIRTUAL DOM

React uses a Virtual DOM to improve performance.

Instead of updating the entire page, React updates only the changed elements.

3. JSX

JSX allows developers to write HTML-like syntax inside JavaScript.

This makes UI code easier to read and maintain.

4. ONE-WAY DATA FLOW

Data flows from parent components to child components through props.

This makes applications predictable and easier to debug.

5. REUSABILITY

Components can be reused throughout the application, reducing code duplication.

6. DECLARATIVE UI

Developers describe how the UI should look based on state, and React updates the DOM automatically.

7. FAST RENDERING

React efficiently updates only the necessary parts of the UI using its reconciliation process.

8. LARGE ECOSYSTEM

React works well with libraries like:

- React Router
- Redux
- Axios
- Next.js

These features make React one of the most popular frontend libraries.`,

    keyPoints: [
      "Component-based architecture",

      "Uses Virtual DOM",

      "Supports JSX",

      "One-way data binding",

      "Reusable components",

      "Declarative programming",

      "Fast rendering",

      "Large ecosystem",
    ],

    codeExample: `function Button() {

  return (

    <button>

      Click Me

    </button>

  );

}

function App() {

  return (

    <div>

      <Button />

      <Button />

      <Button />

    </div>

  );

}

export default App;`,

    language: "react",

    commonMistakes: [
      "Thinking React is a complete framework",

      "Confusing Virtual DOM with Real DOM",

      "Not understanding one-way data flow",

      "Creating very large components",

      "Ignoring component reusability",
    ],

    thinkingProcess: `Step 1: Define React features

Step 2: Explain component-based architecture

Step 3: Discuss Virtual DOM

Step 4: Explain JSX and data flow

Step 5: Describe performance and ecosystem benefits`,

    realWorldApplication:
      "React features are used in modern applications such as e-commerce websites, social media platforms, admin dashboards, SaaS applications, and enterprise software.",

    interviewTip:
      "The most important React features to mention are Component-Based Architecture, Virtual DOM, JSX, and One-Way Data Flow.",
  },
  {
    id: "react-3",

    question: "What is JSX?",

    difficulty: "Basic",

    shortAnswer:
      "JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript.",

    detailedAnswer: `JSX stands for JavaScript XML.

It is a syntax extension used in React that allows developers to write HTML-like markup directly inside JavaScript code.

Example:

const element = <h1>Hello React</h1>;

Although JSX looks like HTML, it is actually converted into regular JavaScript by Babel during compilation.

Without JSX:

React.createElement(
  "h1",
  null,
  "Hello React"
);

With JSX:

<h1>Hello React</h1>

Benefits of JSX:

1. Easier to read and write
2. Improves code readability
3. Allows JavaScript expressions inside UI
4. Simplifies UI development
5. Makes component structure more understandable

JSX allows embedding JavaScript using curly braces {}.

Example:

const name = "John";

<h1>Hello {name}</h1>

JSX is not mandatory in React, but it is widely used because it makes code cleaner and easier to maintain.`,

    keyPoints: [
      "JSX stands for JavaScript XML",

      "Allows HTML-like syntax inside JavaScript",

      "Compiled by Babel into JavaScript",

      "Supports JavaScript expressions using {}",

      "Improves readability and maintainability",

      "Commonly used in React applications",
    ],

    codeExample: `const name = "Pratiksha";

function App() {

  return (

    <div>

      <h1>

        Welcome {name}

      </h1>

      <p>

        Learning React JSX

      </p>

    </div>

  );

}

export default App;`,

    language: "react",

    commonMistakes: [
      "Returning multiple elements without a parent element",

      "Using class instead of className",

      "Using HTML attributes incorrectly",

      "Forgetting to close tags",

      "Not wrapping JavaScript expressions in {}",
    ],

    thinkingProcess: `Step 1: Define JSX

Step 2: Explain why React uses JSX

Step 3: Show JSX vs React.createElement()

Step 4: Demonstrate JavaScript expressions

Step 5: Explain JSX benefits`,

    realWorldApplication:
      "JSX is used in almost every React application to build user interfaces such as dashboards, e-commerce websites, social media apps, and admin panels.",

    interviewTip:
      "Mention that JSX is not HTML. It is syntactic sugar that Babel converts into React.createElement() calls.",
  },
  {
    id: "react-4",

    question: "What is the Virtual DOM?",

    difficulty: "Basic",

    shortAnswer:
      "The Virtual DOM is a lightweight JavaScript representation of the Real DOM that React uses to optimize UI updates.",

    detailedAnswer: `The Virtual DOM is one of React's most important performance features.

Normally, updating the Real DOM is expensive because browsers must repaint and reflow the page.

React solves this problem by creating a Virtual DOM.

How it works:

1. React creates a Virtual DOM copy.
2. State or props change.
3. React creates a new Virtual DOM.
4. React compares the old and new Virtual DOM (Diffing).
5. React updates only the changed elements in the Real DOM.

This process is called Reconciliation.

Benefits:

- Faster updates
- Better performance
- Reduced DOM manipulation
- Improved user experience

The Virtual DOM allows React applications to remain fast even when the UI becomes complex.`,

    keyPoints: [
      "Virtual DOM is a JavaScript object",

      "Acts as a copy of the Real DOM",

      "Uses Diffing algorithm",

      "Updates only changed elements",

      "Improves performance",

      "Core React feature",
    ],

    codeExample: `function App() {

  const [count, setCount] =

    useState(0);

  return (

    <div>

      <h1>{count}</h1>

      <button

        onClick={() =>

          setCount(count + 1)

        }

      >

        Increment

      </button>

    </div>

  );

}

// React updates only
// the changed text node
// instead of the entire page`,

    language: "react",

    commonMistakes: [
      "Thinking Virtual DOM replaces Real DOM",

      "Assuming Virtual DOM is the browser DOM",

      "Believing React never touches Real DOM",

      "Confusing Virtual DOM with Shadow DOM",

      "Ignoring reconciliation process",
    ],

    thinkingProcess: `Step 1: Explain Real DOM problem

Step 2: Introduce Virtual DOM

Step 3: Explain Diffing

Step 4: Explain Reconciliation

Step 5: Discuss performance benefits`,

    realWorldApplication:
      "Used in large applications where frequent UI updates occur, such as dashboards, social media feeds, and e-commerce websites.",

    interviewTip:
      "Always mention Diffing and Reconciliation when explaining Virtual DOM.",
  },
  {
    id: "react-5",

    question: "How does React work?",

    difficulty: "Basic",

    shortAnswer:
      "React builds the UI using components, creates a Virtual DOM, compares changes, and efficiently updates the Real DOM.",

    detailedAnswer: `React follows a component-based architecture.

Working Process:

1. Components are created.
2. Components return JSX.
3. JSX is converted into JavaScript.
4. React creates the Virtual DOM.
5. State or props change.
6. React creates a new Virtual DOM.
7. React compares old and new Virtual DOM.
8. Only changed parts are updated in the Real DOM.

React uses:

- Components
- JSX
- State
- Props
- Virtual DOM
- Reconciliation

This makes React fast, scalable, and efficient for building modern web applications.`,

    keyPoints: [
      "Component-based architecture",

      "Uses JSX",

      "Creates Virtual DOM",

      "Uses Reconciliation",

      "Updates only changed elements",

      "Efficient rendering process",
    ],

    codeExample: `function App() {

  const [count, setCount] =

    useState(0);

  return (

    <div>

      <h2>

        Count: {count}

      </h2>

      <button

        onClick={() =>

          setCount(count + 1)

        }

      >

        Increase

      </button>

    </div>

  );

}

// State changes
// Virtual DOM updates
// React updates only
// affected elements`,

    language: "react",

    commonMistakes: [
      "Thinking React directly updates the DOM",

      "Not understanding state changes",

      "Confusing props and state",

      "Ignoring component architecture",

      "Not understanding rendering flow",
    ],

    thinkingProcess: `Step 1: Create components

Step 2: Render JSX

Step 3: Create Virtual DOM

Step 4: Detect changes

Step 5: Update Real DOM efficiently`,

    realWorldApplication:
      "Every React application follows this process, from small projects to large enterprise systems.",

    interviewTip:
      "Mention Components → JSX → Virtual DOM → Diffing → Reconciliation → Real DOM Update.",
  },
  {
    id: "react-6",

    question: "What is the difference between Real DOM and Virtual DOM?",

    difficulty: "Basic",

    shortAnswer:
      "The Real DOM is the browser’s actual DOM structure, while the Virtual DOM is a lightweight JavaScript copy used by React for efficient updates.",

    detailedAnswer: `Real DOM and Virtual DOM serve different purposes.

REAL DOM:

- Browser DOM
- Directly updates UI
- Slow for frequent changes
- Expensive operations

VIRTUAL DOM:

- JavaScript representation
- Managed by React
- Faster updates
- Uses Diffing algorithm

When data changes:

Real DOM:
Updates entire sections frequently

Virtual DOM:
Compares old and new versions and updates only changed nodes

This significantly improves application performance.`,

    keyPoints: [
      "Real DOM is browser DOM",

      "Virtual DOM is React-managed",

      "Virtual DOM improves performance",

      "Uses Diffing algorithm",

      "Minimizes expensive DOM updates",
    ],

    codeExample: `// React internally creates

const oldVirtualDOM = {

  type: "h1",

  children: ["Hello"]

};

const newVirtualDOM = {

  type: "h1",

  children: ["Hello React"]

};

// React compares both
// and updates only text content`,

    language: "react",

    commonMistakes: [
      "Thinking Virtual DOM replaces Real DOM",

      "Assuming Virtual DOM is visible",

      "Ignoring diffing process",

      "Confusing browser and React responsibilities",

      "Overestimating Virtual DOM speed benefits",
    ],

    thinkingProcess: `Step 1: Define Real DOM

Step 2: Define Virtual DOM

Step 3: Compare performance

Step 4: Explain Diffing

Step 5: Explain why React uses Virtual DOM`,

    realWorldApplication:
      "Large-scale applications benefit from Virtual DOM because UI updates happen frequently.",

    interviewTip:
      "Interviewers usually expect the keywords: Diffing, Reconciliation, Performance, Efficient Updates.",
  },
  {
    id: "react-7",

    question: "What are Components in React?",

    difficulty: "Basic",

    shortAnswer:
      "Components are reusable building blocks that define parts of a React user interface.",

    detailedAnswer: `Components are the foundation of React applications.

A component is an independent, reusable piece of UI.

Examples:

- Navbar
- Sidebar
- Footer
- Product Card
- Login Form

Benefits:

1. Reusability
2. Maintainability
3. Better organization
4. Easier testing

React applications are built by combining many small components together.

Types of Components:

1. Functional Components
2. Class Components (legacy)

Modern React primarily uses Functional Components with Hooks.

Components can:

- Receive Props
- Manage State
- Handle Events
- Render JSX

This component-based approach makes React applications scalable and maintainable.`,

    keyPoints: [
      "Reusable UI building blocks",

      "Core concept of React",

      "Can accept props",

      "Can manage state",

      "Return JSX",

      "Promote code reusability",
    ],

    codeExample: `function Welcome() {

  return (

    <h1>

      Welcome User

    </h1>

  );

}

function App() {

  return (

    <div>

      <Welcome />

      <Welcome />

      <Welcome />

    </div>

  );

}

export default App;`,

    language: "react",

    commonMistakes: [
      "Creating huge components",

      "Duplicating component code",

      "Mixing unrelated responsibilities",

      "Not reusing components",

      "Confusing components with functions",
    ],

    thinkingProcess: `Step 1: Define component

Step 2: Explain reusability

Step 3: Show JSX rendering

Step 4: Explain props and state

Step 5: Discuss scalability benefits`,

    realWorldApplication:
      "Modern applications use components for navigation bars, product cards, forms, dashboards, modals, and entire page layouts.",

    interviewTip:
      "Describe components as reusable building blocks of the UI. This is the most common interview definition.",
  },
  {
    id: "react-8",

    question: "What is the difference between Functional and Class Components?",

    difficulty: "Basic",

    shortAnswer:
      "Functional Components are JavaScript functions that return JSX, while Class Components are ES6 classes that extend React.Component.",

    detailedAnswer: `React provides two ways to create components.

FUNCTIONAL COMPONENTS

- Simple JavaScript functions
- Return JSX
- Use Hooks for state and lifecycle features
- Easier to read and maintain
- Preferred in modern React

CLASS COMPONENTS

- ES6 classes
- Extend React.Component
- Use this.state
- Use lifecycle methods
- Mostly legacy code today

Modern React development primarily uses Functional Components because Hooks provide all necessary functionality without classes.`,

    keyPoints: [
      "Functional Components are preferred",

      "Class Components are older approach",

      "Hooks work in Functional Components",

      "Class Components use lifecycle methods",

      "Functional Components are simpler",

      "Most modern projects use Functional Components",
    ],

    codeExample: `// FUNCTIONAL COMPONENT

function Welcome() {

  return (

    <h1>

      Hello React

    </h1>

  );

}




// CLASS COMPONENT

class Welcome extends React.Component {

  render() {

    return (

      <h1>

        Hello React

      </h1>

    );

  }

}`,

    language: "react",

    commonMistakes: [
      "Learning Class Components first",

      "Using this incorrectly",

      "Ignoring Hooks",

      "Mixing class and functional patterns",

      "Assuming Class Components are required",
    ],

    thinkingProcess: `Step 1: Define Functional Components

Step 2: Define Class Components

Step 3: Compare syntax

Step 4: Compare state management

Step 5: Explain modern best practice`,

    realWorldApplication:
      "Most modern React applications use Functional Components with Hooks such as useState and useEffect.",

    interviewTip:
      "Mention that Functional Components with Hooks have largely replaced Class Components in modern React.",
  },
  {
    id: "react-9",

    question: "What are Props?",

    difficulty: "Basic",

    shortAnswer:
      "Props (Properties) are used to pass data from a parent component to a child component.",

    detailedAnswer: `Props stands for Properties.

Props allow components to receive data from their parent component.

Think of props as function parameters.

Characteristics:

- Read-only
- Passed from parent to child
- Cannot be modified by child
- Used for communication between components

Props help make components reusable.

The same component can display different data depending on the props it receives.`,

    keyPoints: [
      "Props means Properties",

      "Passed from parent to child",

      "Read-only data",

      "Improve reusability",

      "Used for component communication",

      "Cannot be modified directly",
    ],

    codeExample: `function User(props) {

  return (

    <h2>

      {props.name}

    </h2>

  );

}

function App() {

  return (

    <div>

      <User name="John" />

      <User name="Jane" />

    </div>

  );

}`,

    language: "react",

    commonMistakes: [
      "Trying to modify props",

      "Confusing props and state",

      "Passing unnecessary props",

      "Using props for local state",

      "Forgetting prop names",
    ],

    thinkingProcess: `Step 1: Define props

Step 2: Explain parent-child communication

Step 3: Show passing data

Step 4: Explain read-only nature

Step 5: Discuss reusability`,

    realWorldApplication:
      "Props are used for displaying user information, product details, dashboard widgets, and reusable UI components.",

    interviewTip:
      "The simplest definition: Props are read-only data passed from parent to child components.",
  },
  {
    id: "react-10",

    question: "What is State?",

    difficulty: "Basic",

    shortAnswer:
      "State is a built-in React object used to store data that can change over time and trigger UI updates.",

    detailedAnswer: `State allows React components to store dynamic data.

Unlike props, state can change.

When state changes:

1. React re-renders the component
2. UI updates automatically

Examples:

- Counter values
- Form inputs
- Login status
- Shopping cart items
- Theme settings

In Functional Components, state is managed using useState().`,

    keyPoints: [
      "Stores dynamic data",

      "Can change over time",

      "Triggers re-rendering",

      "Managed with useState",

      "Local to component",

      "Important React concept",
    ],

    codeExample: `import { useState }

from "react";

function Counter() {

  const [count, setCount] =

    useState(0);

  return (

    <div>

      <h2>

        {count}

      </h2>

      <button

        onClick={() =>

          setCount(count + 1)

        }

      >

        Increment

      </button>

    </div>

  );

}`,

    language: "react",

    commonMistakes: [
      "Directly modifying state",

      "Confusing state with props",

      "Using state unnecessarily",

      "Not using state updater function",

      "Expecting immediate updates",
    ],

    thinkingProcess: `Step 1: Define state

Step 2: Explain dynamic data

Step 3: Show useState example

Step 4: Explain re-rendering

Step 5: Discuss common use cases`,

    realWorldApplication:
      "State is used in counters, forms, authentication, shopping carts, notifications, and dashboards.",

    interviewTip:
      "State is mutable and local to a component, unlike props which are read-only.",
  },
  {
    id: "react-11",

    question: "What is the difference between Props and State?",

    difficulty: "Basic",

    shortAnswer:
      "Props are read-only values passed from a parent component, while State is mutable data managed inside a component.",

    detailedAnswer: `Props and State are both used to manage data in React, but they serve different purposes.

PROPS

- Passed from parent to child
- Read-only
- External data
- Cannot be modified by child

STATE

- Managed within component
- Mutable
- Internal data
- Can be updated using setState or useState

Comparison:

Props:
✔ Read-only
✔ Parent controlled
✔ External

State:
✔ Changeable
✔ Component controlled
✔ Internal

Both trigger UI updates when their values change.`,

    keyPoints: [
      "Props are external data",

      "State is internal data",

      "Props are read-only",

      "State can be updated",

      "Props come from parent",

      "State belongs to component",
    ],

    codeExample: `function User(props) {

  const [age, setAge] =

    useState(25);

  return (

    <div>

      <h2>

        {props.name}

      </h2>

      <h3>

        {age}

      </h3>

      <button

        onClick={() =>

          setAge(age + 1)

        }

      >

        Increase Age

      </button>

    </div>

  );

}

// name = prop
// age = state`,

    language: "react",

    commonMistakes: [
      "Using props as state",

      "Trying to modify props",

      "Storing static values in state",

      "Confusing data ownership",

      "Passing too many props",
    ],

    thinkingProcess: `Step 1: Define props

Step 2: Define state

Step 3: Compare ownership

Step 4: Compare mutability

Step 5: Explain practical usage`,

    realWorldApplication:
      "Props are used for configuration and communication, while state is used for user interactions and dynamic UI updates.",

    interviewTip:
      "A common interview answer: Props are read-only and passed from parent to child; State is mutable and managed by the component itself.",
  },
  {
    id: "react-12",

    question: "What is Conditional Rendering?",

    difficulty: "Basic",

    shortAnswer:
      "Conditional Rendering is a technique in React that allows components to render different UI elements based on specific conditions.",

    detailedAnswer: `Conditional Rendering means displaying different content depending on a condition.

It works similarly to JavaScript conditions such as:

- if
- else
- ternary operator ( ? : )
- logical AND ( && )

React uses Conditional Rendering to show or hide UI elements based on:

- User authentication
- Loading states
- API responses
- Permissions
- User actions

Example:

If user is logged in:
Show Dashboard

If user is not logged in:
Show Login Page

Common Approaches:

1. if/else statement
2. Ternary Operator
3. Logical AND (&&)
4. Switch statement

Conditional Rendering makes React applications dynamic and interactive.`,

    keyPoints: [
      "Used to display UI based on conditions",

      "Works like JavaScript conditions",

      "Can use if/else statements",

      "Can use ternary operators",

      "Can use logical AND (&&)",

      "Commonly used for authentication and loading states",
    ],

    codeExample: `// TERNARY OPERATOR

function App() {

  const isLoggedIn = true;

  return (

    <div>

      {

        isLoggedIn

          ? <h1>Welcome Back</h1>

          : <h1>Please Login</h1>

      }

    </div>

  );

}




// LOGICAL AND (&&)

function Notification() {

  const hasMessage = true;

  return (

    <div>

      {

        hasMessage &&

        <p>

          New Message Received

        </p>

      }

    </div>

  );

}




// IF ELSE

function UserStatus() {

  const isAdmin = true;

  if (isAdmin) {

    return <h1>Admin Panel</h1>;

  }

  return <h1>User Dashboard</h1>;

}`,

    language: "react",

    commonMistakes: [
      "Using if statements directly inside JSX",

      "Forgetting parentheses in JSX",

      "Using && when false value should display alternative content",

      "Writing overly complex nested ternary operators",

      "Returning multiple JSX elements incorrectly",
    ],

    thinkingProcess: `Step 1: Identify the condition

Step 2: Decide what UI should appear

Step 3: Choose rendering method

Step 4: Render matching content

Step 5: Keep conditions simple and readable`,

    realWorldApplication:
      "Conditional Rendering is used for login systems, role-based access control, loading spinners, error messages, notifications, shopping carts, and dashboard visibility.",

    interviewTip:
      "Mention the three most common approaches: if/else, ternary operator, and logical AND (&&). Interviewers frequently expect all three.",
  },
  {
    id: "react-13",

    question: "What are Lists and Keys in React?",

    difficulty: "Basic",

    shortAnswer:
      "Lists are used to render multiple elements from an array, and Keys are unique identifiers that help React track those elements efficiently.",

    detailedAnswer: `In React, lists are created by looping through an array and rendering JSX for each item.

The most common method is map().

Example:

Users Array:

[
  "John",
  "Jane",
  "Mike"
]

React converts each item into a UI element.

When rendering lists, React requires a special prop called "key".

A key is a unique identifier assigned to each rendered element.

Why React needs keys:

- Identify each item uniquely
- Detect added items
- Detect removed items
- Detect reordered items
- Optimize re-rendering

Without keys, React cannot efficiently determine which elements changed.

Keys should be:

✔ Unique among siblings
✔ Stable
✔ Preferably from database IDs

Bad Key:

index

Good Key:

user.id

Lists and Keys work together to improve rendering performance and maintain correct UI behavior.`,

    keyPoints: [
      "Lists are usually rendered with map()",

      "Keys uniquely identify list items",

      "Keys help React track changes",

      "Keys improve rendering performance",

      "Use stable unique IDs",

      "Avoid array indexes when possible",
    ],

    codeExample: `function UserList() {

  const users = [

    { id: 1, name: "John" },

    { id: 2, name: "Jane" },

    { id: 3, name: "Mike" }

  ];

  return (

    <ul>

      {

        users.map(user => (

          <li key={user.id}>

            {user.name}

          </li>

        ))

      }

    </ul>

  );

}

export default UserList;`,

    language: "react",

    commonMistakes: [
      "Not providing keys",

      "Using duplicate keys",

      "Using random values as keys",

      "Using array index unnecessarily",

      "Confusing key with props",
    ],

    thinkingProcess: `Step 1: Render array using map()

Step 2: Create JSX for each item

Step 3: Assign a unique key

Step 4: Allow React to track elements

Step 5: Update efficiently when data changes`,

    realWorldApplication:
      "Lists and keys are used in product listings, chat messages, notifications, tables, dashboards, comments, and user management systems.",

    interviewTip:
      "The first thing interviewers expect is: Lists are rendered using map(), and keys help React identify elements efficiently.",
  },
  {
    id: "react-14",

    question: "Why are Keys Important?",

    difficulty: "Basic",

    shortAnswer:
      "Keys are important because they help React identify which list items have changed, been added, removed, or reordered.",

    detailedAnswer: `React uses Keys during its reconciliation process.

Whenever state changes, React compares the old Virtual DOM with the new Virtual DOM.

Without keys:

React may re-render unnecessary elements.

With keys:

React knows exactly which element changed.

Example:

Old List:

1. Apple
2. Banana
3. Orange

New List:

1. Mango
2. Apple
3. Banana
4. Orange

Using keys, React understands:

- Mango was added
- Existing items stayed the same

Without keys, React may treat all items as changed.

Benefits of Keys:

1. Better Performance
2. Faster Reconciliation
3. Correct Component State Preservation
4. Reduced DOM Updates
5. Predictable UI Behavior

Best Practice:

Use unique IDs from the database.

Example:

key={user.id}

Avoid:

key={index}

because item positions can change, causing unexpected behavior.`,

    keyPoints: [
      "Keys support React reconciliation",

      "Improve rendering performance",

      "Help React track elements",

      "Reduce unnecessary DOM updates",

      "Preserve component state correctly",

      "Unique IDs are best keys",
    ],

    codeExample: `const products = [

  {

    id: 101,

    name: "Laptop"

  },

  {

    id: 102,

    name: "Phone"

  }

];

function ProductList() {

  return (

    <ul>

      {

        products.map(product => (

          <li

            key={product.id}

          >

            {product.name}

          </li>

        ))

      }

    </ul>

  );

}`,

    language: "react",

    commonMistakes: [
      "Using array index as key",

      "Using duplicate keys",

      "Using Math.random() as key",

      "Ignoring React key warnings",

      "Assuming keys are accessible as props",
    ],

    thinkingProcess: `Step 1: Render list

Step 2: Assign unique key

Step 3: React compares Virtual DOM trees

Step 4: React identifies changes

Step 5: React updates only affected elements`,

    realWorldApplication:
      "Keys are critical in e-commerce product lists, chat applications, notifications, task managers, dynamic tables, and social media feeds.",

    interviewTip:
      "The most important interview answer: Keys help React identify which items changed during reconciliation, improving performance and preventing UI bugs.",
  },
  {
    id: "react-15",

    question: "What is Component Lifecycle?",

    difficulty: "Intermediate",

    shortAnswer:
      "Component Lifecycle refers to the different phases a React component goes through from creation to removal from the DOM.",

    detailedAnswer: `Every React component passes through a lifecycle.

A lifecycle describes what happens when a component:

1. Is created
2. Updates
3. Is removed

There are three main lifecycle phases:

1. MOUNTING

The component is created and inserted into the DOM.

Examples:

- Component renders for the first time
- API calls
- Initial state setup

2. UPDATING

Occurs when:

- State changes
- Props change

React re-renders the component and updates the UI.

3. UNMOUNTING

The component is removed from the DOM.

Common tasks:

- Clear timers
- Remove event listeners
- Cancel API subscriptions

CLASS COMPONENT LIFECYCLE METHODS

Mounting:
- constructor()
- render()
- componentDidMount()

Updating:
- shouldComponentUpdate()
- componentDidUpdate()

Unmounting:
- componentWillUnmount()

FUNCTIONAL COMPONENTS

Modern React uses Hooks.

useEffect() can handle:

- Mounting
- Updating
- Unmounting

Most modern applications use Functional Components and Hooks instead of lifecycle methods.`,

    keyPoints: [
      "Three lifecycle phases",

      "Mounting phase",

      "Updating phase",

      "Unmounting phase",

      "useEffect replaces most lifecycle methods",

      "Important React interview topic",
    ],

    codeExample: `import {

  useEffect

} from "react";

function App() {

  useEffect(() => {

    console.log(

      "Component Mounted"

    );



    return () => {

      console.log(

        "Component Unmounted"

      );

    };

  }, []);

  return (

    <h1>

      React Lifecycle

    </h1>

  );

}

export default App;`,

    language: "react",

    commonMistakes: [
      "Confusing mounting and updating",

      "Forgetting cleanup functions",

      "Not understanding useEffect lifecycle behavior",

      "Performing side effects inside render",

      "Ignoring component unmounting",
    ],

    thinkingProcess: `Step 1: Explain lifecycle concept

Step 2: Describe Mounting

Step 3: Describe Updating

Step 4: Describe Unmounting

Step 5: Explain how useEffect handles lifecycle events`,

    realWorldApplication:
      "Lifecycle events are used for API requests, event listeners, subscriptions, timers, analytics tracking, and cleanup operations.",

    interviewTip:
      "Mention Mounting, Updating, Unmounting first. Then explain that useEffect is the modern Hook used to handle lifecycle behavior in Functional Components.",
  },
  {
    id: "react-16",

    question: "What is Lifting State Up?",

    difficulty: "Intermediate",

    shortAnswer:
      "Lifting State Up is the process of moving state from child components to their nearest common parent so multiple components can share and synchronize the same data.",

    detailedAnswer: `In React, state should be placed in the component that owns the data.

Sometimes multiple child components need access to the same state.

Instead of maintaining separate states in each child, React recommends moving the state to their nearest common parent.

This technique is called Lifting State Up.

Why use Lifting State Up?

- Share data between components
- Keep data synchronized
- Avoid duplicate state
- Improve data consistency

Example:

Parent Component

├── TemperatureInput
├── TemperatureDisplay

Both components need the same temperature value.

Instead of storing state in each child:

❌ Child A → temperature state
❌ Child B → temperature state

Store state in Parent:

✔ Parent → temperature state

The parent passes data through props and receives updates through callback functions.

This follows React's One-Way Data Flow principle.

Benefits:

1. Single Source of Truth
2. Easier State Management
3. Better Synchronization
4. Predictable Data Flow

Lifting State Up is one of the most important React design patterns.`,

    keyPoints: [
      "Move shared state to parent component",

      "Creates a single source of truth",

      "Improves data consistency",

      "Uses props for data sharing",

      "Uses callback functions for updates",

      "Common React architecture pattern",
    ],

    codeExample: `import {

  useState

} from "react";

function ChildA({

  count,

  increment

}) {

  return (

    <button

      onClick={increment}

    >

      Count: {count}

    </button>

  );

}

function ChildB({

  count

}) {

  return (

    <h2>

      Current Count:

      {count}

    </h2>

  );

}

function Parent() {

  const [

    count,

    setCount

  ] = useState(0);

  const increment = () => {

    setCount(

      count + 1

    );

  };

  return (

    <div>

      <ChildA

        count={count}

        increment={increment}

      />

      <ChildB

        count={count}

      />

    </div>

  );

}

export default Parent;`,

    language: "react",

    commonMistakes: [
      "Creating duplicate state in multiple components",

      "Passing state unnecessarily deep",

      "Not identifying the common parent",

      "Mutating state directly",

      "Ignoring one-way data flow",
    ],

    thinkingProcess: `Step 1: Identify shared data

Step 2: Find common parent

Step 3: Move state to parent

Step 4: Pass data via props

Step 5: Pass update functions to children`,

    realWorldApplication:
      "Used in shopping carts, form wizards, dashboards, filters, search systems, and any UI where multiple components need the same data.",

    interviewTip:
      'The keyword interviewers expect is "Single Source of Truth." Always mention that state is moved to the nearest common parent.',
  },
  {
    id: "react-17",

    question: "What is Context API?",

    difficulty: "Intermediate",

    shortAnswer:
      "Context API is a React feature that allows data to be shared across components without manually passing props through every level.",

    detailedAnswer: `Context API helps solve the Prop Drilling problem.

Prop Drilling occurs when data must be passed through multiple intermediate components that do not actually use the data.

Without Context:

App
 ↓
Header
 ↓
Navbar
 ↓
Profile

The user data must be passed through every component.

With Context:

Components can directly access shared data from the Context Provider.

Main Parts:

1. createContext()
2. Provider
3. Consumer / useContext()

Common Use Cases:

- Authentication
- Themes (Dark/Light Mode)
- Language Settings
- User Information
- Global App Settings

Context API is not a replacement for all state management solutions, but it is excellent for sharing global data.`,

    keyPoints: [
      "Solves prop drilling",

      "Provides global data sharing",

      "Uses createContext()",

      "Uses Provider",

      "Accessed via useContext()",

      "Commonly used for themes and authentication",
    ],

    codeExample: `import {

  createContext,
  useContext

} from "react";

const UserContext =

  createContext();

function App() {

  return (

    <UserContext.Provider

      value="John"

    >

      <Profile />

    </UserContext.Provider>

  );

}

function Profile() {

  const user =

    useContext(

      UserContext

    );

  return (

    <h2>

      {user}

    </h2>

  );

}`,

    language: "react",

    commonMistakes: [
      "Using Context for every state",

      "Creating too many contexts",

      "Forgetting Provider",

      "Ignoring component re-renders",

      "Using Context when props are sufficient",
    ],

    thinkingProcess: `Step 1: Identify prop drilling

Step 2: Create context

Step 3: Wrap components with Provider

Step 4: Access context using useContext

Step 5: Share data globally`,

    realWorldApplication:
      "Used for authentication systems, dark mode themes, language switching, shopping carts, and application-wide settings.",

    interviewTip:
      "Mention that Context API primarily solves Prop Drilling and is commonly used with useContext().",
  },
  {
    id: "react-18",

    question: "What is a Controlled Component?",

    difficulty: "Intermediate",

    shortAnswer:
      "A Controlled Component is a form element whose value is controlled by React state.",

    detailedAnswer: `In a Controlled Component, React controls the form data through state.

Whenever the user types:

1. Event fires
2. State updates
3. UI re-renders

React becomes the single source of truth.

Benefits:

- Easy validation
- Predictable behavior
- Better control over input values
- Easier form management

Controlled Components are the recommended approach for handling forms in React.`,

    keyPoints: [
      "State controls input value",

      "React is source of truth",

      "Easy validation",

      "Predictable behavior",

      "Common form pattern",

      "Uses useState()",
    ],

    codeExample: `import {

  useState

} from "react";

function Form() {

  const [

    name,

    setName

  ] = useState("");

  return (

    <input

      type="text"

      value={name}

      onChange={(e) =>

        setName(

          e.target.value

        )

      }

    />

  );

}`,

    language: "react",

    commonMistakes: [
      "Forgetting onChange handler",

      "Missing value prop",

      "Mutating state directly",

      "Using multiple unnecessary states",

      "Not updating state correctly",
    ],

    thinkingProcess: `Step 1: Create state

Step 2: Bind state to input value

Step 3: Handle user input

Step 4: Update state

Step 5: Re-render UI`,

    realWorldApplication:
      "Used in login forms, registration forms, search bars, checkout forms, and validation systems.",

    interviewTip: "The key phrase is: React state controls the form element.",
  },
  {
    id: "react-19",

    question: "What is an Uncontrolled Component?",

    difficulty: "Intermediate",

    shortAnswer:
      "An Uncontrolled Component stores form data in the DOM instead of React state.",

    detailedAnswer: `In an Uncontrolled Component, the DOM manages the form value.

React accesses the value when needed using refs.

Unlike Controlled Components:

❌ No state management

✔ DOM stores the data

This approach is similar to traditional HTML forms.

React uses useRef() to access values.

Although possible, Controlled Components are generally preferred because they provide better control and validation.`,

    keyPoints: [
      "DOM controls form values",

      "Uses useRef()",

      "No state required",

      "Less React control",

      "Similar to traditional HTML",

      "Controlled Components are usually preferred",
    ],

    codeExample: `import {

  useRef

} from "react";

function Form() {

  const inputRef =

    useRef();

  const handleSubmit = () => {

    alert(

      inputRef.current.value

    );

  };

  return (

    <>

      <input

        ref={inputRef}

      />

      <button

        onClick={handleSubmit}

      >

        Submit

      </button>

    </>

  );

}`,

    language: "react",

    commonMistakes: [
      "Using refs unnecessarily",

      "Mixing controlled and uncontrolled patterns",

      "Forgetting ref assignment",

      "Not validating inputs",

      "Using DOM manipulation excessively",
    ],

    thinkingProcess: `Step 1: Create ref

Step 2: Attach ref to input

Step 3: Read value from DOM

Step 4: Process data

Step 5: Submit form`,

    realWorldApplication:
      "Used when integrating third-party libraries or handling simple forms with minimal React involvement.",

    interviewTip:
      "The key difference is that the DOM, not React state, stores the value.",
  },
  {
    id: "react-20",

    question: "What are Forms in React?",

    difficulty: "Intermediate",

    shortAnswer:
      "Forms in React are used to collect and manage user input through form elements such as input fields, textareas, checkboxes, and dropdowns.",

    detailedAnswer: `Forms allow users to interact with applications by entering data.

Common form elements:

- Input
- Textarea
- Select
- Checkbox
- Radio Buttons

React typically manages form data using Controlled Components.

Workflow:

1. User enters data
2. onChange event triggers
3. State updates
4. UI re-renders

Benefits:

- Real-time validation
- Easy error handling
- Better user experience
- Centralized form data

React forms are commonly combined with:

- useState
- Validation logic
- API requests

Forms are essential for authentication, search, checkout, and data entry systems.`,

    keyPoints: [
      "Collect user input",

      "Use Controlled Components",

      "Handle events with onChange",

      "Store values in state",

      "Support validation",

      "Important React concept",
    ],

    codeExample: `import {

  useState

} from "react";

function LoginForm() {

  const [

    email,

    setEmail

  ] = useState("");

  const handleSubmit =

    (e) => {

      e.preventDefault();

      console.log(email);

    };

  return (

    <form

      onSubmit={handleSubmit}

    >

      <input

        type="email"

        value={email}

        onChange={(e) =>

          setEmail(

            e.target.value

          )

        }

      />

      <button>

        Submit

      </button>

    </form>

  );

}`,

    language: "react",

    commonMistakes: [
      "Forgetting preventDefault()",

      "Not validating inputs",

      "Using uncontrolled forms unintentionally",

      "Not managing form state",

      "Ignoring error handling",
    ],

    thinkingProcess: `Step 1: Create state

Step 2: Bind input values

Step 3: Handle changes

Step 4: Validate data

Step 5: Submit form`,

    realWorldApplication:
      "Used in login systems, registration pages, contact forms, checkout pages, surveys, and search functionality.",

    interviewTip:
      "Mention Controlled Components because most React forms are built using them.",
  },
  {
    id: "react-21",

    question: "What is Event Handling in React?",

    difficulty: "Intermediate",

    shortAnswer:
      "Event Handling in React is the process of responding to user interactions such as clicks, typing, form submissions, mouse movements, and keyboard events.",

    detailedAnswer: `React uses Event Handling to make applications interactive.

Events are actions performed by users, such as:

- Clicking a button
- Typing in an input field
- Submitting a form
- Hovering over an element
- Pressing a key

React events are similar to JavaScript DOM events but use camelCase naming.

Examples:

HTML:
onclick

React:
onClick

HTML:
onchange

React:
onChange

HTML:
onsubmit

React:
onSubmit

Event handlers are usually written as functions and passed to JSX elements.

When an event occurs, React executes the corresponding function.

Common Events:

- onClick
- onChange
- onSubmit
- onMouseEnter
- onMouseLeave
- onKeyDown
- onKeyUp

Event Handling is essential for creating dynamic and interactive user interfaces.`,

    keyPoints: [
      "Handles user interactions",

      "Uses camelCase event names",

      "Functions are used as handlers",

      "Supports form events",

      "Supports mouse events",

      "Supports keyboard events",
    ],

    codeExample: `function App() {

  const handleClick = () => {

    alert(

      "Button Clicked"

    );

  };

  return (

    <button

      onClick={handleClick}

    >

      Click Me

    </button>

  );

}

export default App;`,

    language: "react",

    commonMistakes: [
      "Using onclick instead of onClick",

      "Calling function immediately",

      "Forgetting event parameter",

      "Incorrect event naming",

      "Not preventing default form behavior",
    ],

    thinkingProcess: `Step 1: Identify user action

Step 2: Create handler function

Step 3: Attach event to JSX

Step 4: Trigger action

Step 5: Update UI if needed`,

    realWorldApplication:
      "Used in buttons, forms, search bars, navigation menus, shopping carts, dashboards, and authentication systems.",

    interviewTip:
      "Mention that React events use camelCase naming and are handled through functions.",
  },
  {
    id: "react-22",

    question: "What is Synthetic Event?",

    difficulty: "Intermediate",

    shortAnswer:
      "A Synthetic Event is React’s cross-browser wrapper around the native browser event system.",

    detailedAnswer: `React does not use browser events directly.

Instead, React creates a Synthetic Event.

A Synthetic Event is a wrapper around the native DOM event that provides a consistent API across all browsers.

Benefits:

- Cross-browser compatibility
- Consistent behavior
- Better performance
- Simplified event handling

Example:

When a user clicks a button:

Browser Event
→ React Synthetic Event
→ Event Handler

The Synthetic Event contains properties and methods similar to native events.

Common Methods:

- preventDefault()
- stopPropagation()

Most developers use Synthetic Events without realizing it because React handles them automatically.`,

    keyPoints: [
      "Wrapper around native events",

      "Cross-browser compatibility",

      "Consistent API",

      "Improves developer experience",

      "Supports preventDefault()",

      "Managed automatically by React",
    ],

    codeExample: `function App() {

  const handleClick =

    (event) => {

      console.log(

        event.type

      );

    };

  return (

    <button

      onClick={handleClick}

    >

      Click

    </button>

  );

}

export default App;`,

    language: "react",

    commonMistakes: [
      "Confusing Synthetic Event with native event",

      "Ignoring event object",

      "Not using preventDefault when needed",

      "Assuming browser-specific behavior",

      "Misunderstanding React event system",
    ],

    thinkingProcess: `Step 1: User triggers event

Step 2: React creates Synthetic Event

Step 3: Event handler receives event

Step 4: React ensures consistent behavior

Step 5: Developer processes event`,

    realWorldApplication:
      "Used in all React applications involving buttons, forms, keyboard interactions, drag-and-drop systems, and user actions.",

    interviewTip:
      "The most important phrase is: Synthetic Event is a cross-browser wrapper around native browser events.",
  },
  {
    id: "react-23",

    question: "What is React Router?",

    difficulty: "Intermediate",

    shortAnswer:
      "React Router is a library that enables navigation and routing between different pages in a React application without reloading the browser.",

    detailedAnswer: `React Router is the most popular routing library for React.

It allows users to navigate between views while keeping the application as a Single Page Application (SPA).

Without React Router:

Every page navigation reloads the browser.

With React Router:

Navigation happens instantly without full page refreshes.

Important Components:

1. BrowserRouter
2. Routes
3. Route
4. Link
5. NavLink

Example Routes:

/home
/about
/contact
/profile

React Router works by matching URLs to components.

When the URL changes, React renders the corresponding component.`,

    keyPoints: [
      "Client-side routing",

      "No full page refresh",

      "Uses BrowserRouter",

      "Uses Route and Routes",

      "Supports dynamic routes",

      "Most popular React routing library",
    ],

    codeExample: `import {

  BrowserRouter,

  Routes,

  Route

} from

"react-router-dom";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route

          path="/"

          element={<Home />}

        />

        <Route

          path="/about"

          element={<About />}

        />

      </Routes>

    </BrowserRouter>

  );

}`,

    language: "react",

    commonMistakes: [
      "Forgetting BrowserRouter",

      "Using anchor tags instead of Link",

      "Incorrect route paths",

      "Not handling dynamic routes",

      "Confusing client-side and server-side routing",
    ],

    thinkingProcess: `Step 1: Install React Router

Step 2: Wrap app with BrowserRouter

Step 3: Define routes

Step 4: Match URLs

Step 5: Render corresponding component`,

    realWorldApplication:
      "Used in dashboards, e-commerce websites, social media apps, admin panels, and multi-page React applications.",

    interviewTip:
      "Mention that React Router provides client-side routing without reloading the page.",
  },
  {
    id: "react-24",

    question: "What is SPA (Single Page Application)?",

    difficulty: "Intermediate",

    shortAnswer:
      "A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates content without reloading the browser.",

    detailedAnswer: `A SPA loads once and updates content dynamically as users interact with the application.

Traditional Website:

Every navigation requests a new HTML page from the server.

SPA:

Only data changes while the page remains loaded.

Examples:

- Gmail
- Facebook
- Instagram
- Trello
- Twitter

Benefits:

- Faster navigation
- Better user experience
- Reduced server requests
- Smooth interactions

React is commonly used to build SPAs together with React Router.

Workflow:

1. Load application once
2. User navigates
3. React updates UI
4. No page refresh occurs`,

    keyPoints: [
      "Loads once",

      "No full page refresh",

      "Uses client-side routing",

      "Fast navigation",

      "Better user experience",

      "Common React architecture",
    ],

    codeExample: `// React Router enables

// SPA navigation

<Link to="/about">

  About

</Link>

// Page changes

// without browser reload`,

    language: "react",

    commonMistakes: [
      "Confusing SPA with multi-page apps",

      "Ignoring SEO concerns",

      "Not using routing properly",

      "Expecting server-rendered pages",

      "Misunderstanding navigation behavior",
    ],

    thinkingProcess: `Step 1: Load application

Step 2: Navigate using routes

Step 3: Update content dynamically

Step 4: Avoid page refresh

Step 5: Improve user experience`,

    realWorldApplication:
      "Most modern web applications such as dashboards, social networks, project management tools, and SaaS products use SPA architecture.",

    interviewTip:
      "The key interview phrase is: SPA updates content without reloading the entire page.",
  },
  {
    id: "react-25",

    question: "What is Lazy Loading?",

    difficulty: "Intermediate",

    shortAnswer:
      "Lazy Loading is a performance optimization technique that loads components only when they are needed instead of loading everything initially.",

    detailedAnswer: `By default, React loads all imported components when the application starts.

In large applications this increases bundle size and slows initial loading.

Lazy Loading solves this problem.

Instead of loading everything immediately:

✔ Load only required components
✔ Load additional components when needed

React provides:

- React.lazy()
- Suspense

Benefits:

1. Faster initial page load
2. Smaller bundle size
3. Better performance
4. Improved user experience

Common Use Cases:

- Routes
- Dashboards
- Admin Panels
- Heavy Components

Lazy Loading is often combined with Code Splitting.`,

    keyPoints: [
      "Loads components on demand",

      "Improves performance",

      "Reduces bundle size",

      "Uses React.lazy()",

      "Requires Suspense",

      "Common optimization technique",
    ],

    codeExample: `import {

  lazy,

  Suspense

} from "react";

const Dashboard =

  lazy(() =>

    import(

      "./Dashboard"

    )

  );

function App() {

  return (

    <Suspense

      fallback={

        <h2>

          Loading...

        </h2>

      }

    >

      <Dashboard />

    </Suspense>

  );

}`,

    language: "react",

    commonMistakes: [
      "Forgetting Suspense",

      "Lazy loading tiny components unnecessarily",

      "Not providing fallback UI",

      "Confusing lazy loading with caching",

      "Ignoring bundle optimization",
    ],

    thinkingProcess: `Step 1: Identify heavy components

Step 2: Use React.lazy()

Step 3: Wrap with Suspense

Step 4: Provide loading fallback

Step 5: Load component when required`,

    realWorldApplication:
      "Used in enterprise dashboards, e-commerce websites, admin panels, analytics systems, and large React applications.",

    interviewTip:
      "Always mention React.lazy() and Suspense when explaining Lazy Loading.",
  },
  {
    id: "react-26",

    question: "Build a Todo App",

    difficulty: "coding",

    shortAnswer:
      "Create a task management application that allows users to add and delete todos using React state.",

    detailedAnswer: `A Todo App is one of the most popular React coding interview questions.

Features:

- Add tasks
- Display tasks
- Delete tasks
- Manage state

Concepts Tested:

- useState
- Event Handling
- List Rendering
- Keys
- State Updates`,

    keyPoints: [
      "Uses useState",

      "Renders dynamic lists",

      "Uses map()",

      "Handles user input",

      "Frequently asked interview question",
    ],

    codeExample: `import { useState } from "react";

function TodoApp() {

  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = () => {

    setTodos([...todos, task]);

    setTask("");

  };

  return (

    <div>

      <input
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      <button
        onClick={addTodo}
      >
        Add
      </button>

      <ul>

        {todos.map((todo, index) => (

          <li key={index}>
            {todo}
          </li>

        ))}

      </ul>

    </div>

  );

}`,

    language: "react",

    commonMistakes: [
      "Mutating state directly",

      "Missing keys",

      "Not clearing input",

      "Incorrect state updates",

      "Using index as key in production",
    ],

    thinkingProcess: `Step 1: Create input state

Step 2: Create todos state

Step 3: Add task

Step 4: Render list

Step 5: Manage updates`,

    realWorldApplication:
      "Task managers, productivity apps, project management tools.",

    interviewTip: "Explain immutable state updates using the spread operator.",
  },
  {
    id: "react-27",

    question: "Build a Search Filter",

    difficulty: "coding",

    shortAnswer: "Filter displayed items dynamically based on user input.",

    detailedAnswer: `Search filtering is commonly used in dashboards and e-commerce applications.

The user enters text.

React filters matching items and updates the UI instantly.

Concepts Tested:

- useState
- filter()
- Controlled Components
- Real-time UI updates`,

    keyPoints: [
      "Uses filter()",

      "Real-time updates",

      "Controlled input",

      "Case-insensitive search",

      "Common interview task",
    ],

    codeExample: `import { useState } from "react";

function SearchFilter() {

  const [search, setSearch] =

    useState("");

  const users = [

    "John",

    "Jane",

    "Mike"

  ];

  const filtered =

    users.filter(user =>

      user

        .toLowerCase()

        .includes(

          search.toLowerCase()

        )

    );

  return (

    <div>

      <input

        value={search}

        onChange={(e) =>

          setSearch(

            e.target.value

          )

        }

      />

      {filtered.map(user => (

        <p key={user}>

          {user}

        </p>

      ))}

    </div>

  );

}`,

    language: "react",

    commonMistakes: [
      "Ignoring case sensitivity",

      "Filtering original data incorrectly",

      "Mutating arrays",

      "Missing keys",

      "Not handling empty search",
    ],

    thinkingProcess: `Step 1: Create search state

Step 2: Capture input

Step 3: Filter data

Step 4: Render results

Step 5: Update instantly`,

    realWorldApplication:
      "Product searches, user directories, admin dashboards.",

    interviewTip: "Mention filter() and controlled inputs.",
  },
  {
    id: "react-28",

    question: "Build Dark Mode Toggle",

    difficulty: "coding",

    shortAnswer: "Switch between light and dark themes using React state.",

    detailedAnswer: `Dark mode is a common UI feature.

The application stores theme state and changes styles dynamically.

Concepts Tested:

- useState
- Conditional Rendering
- Dynamic Styling
- User Preferences`,

    keyPoints: [
      "Uses useState",

      "Conditional styling",

      "Theme switching",

      "Common real-world feature",

      "Improves user experience",
    ],

    codeExample: `import { useState }

from "react";

function App() {

  const [dark, setDark] =

    useState(false);

  return (

    <div

      style={{

        background:

          dark

          ? "black"

          : "white",

        color:

          dark

          ? "white"

          : "black"

      }}

    >

      <button

        onClick={() =>

          setDark(!dark)

        }

      >

        Toggle Theme

      </button>

    </div>

  );

}`,

    language: "react",

    commonMistakes: [
      "Using multiple theme states",

      "Not persisting theme",

      "Hardcoding colors everywhere",

      "Ignoring accessibility",

      "Incorrect toggle logic",
    ],

    thinkingProcess: `Step 1: Create theme state

Step 2: Toggle state

Step 3: Apply styles

Step 4: Update UI

Step 5: Improve user experience`,

    realWorldApplication:
      "Modern websites, dashboards, and mobile applications.",

    interviewTip: "Mention storing theme in localStorage for persistence.",
  },
  {
    id: "react-29",

    question: "Build Accordion Component",

    difficulty: "coding",

    shortAnswer:
      "Create expandable and collapsible content sections using React state.",

    detailedAnswer: `Accordion components allow users to reveal or hide content.

Only selected sections remain open.

Concepts Tested:

- useState
- Conditional Rendering
- Event Handling
- Component Design`,

    keyPoints: [
      "Expandable content",

      "Uses state",

      "Conditional rendering",

      "Reusable component",

      "Popular UI pattern",
    ],

    codeExample: `import { useState }

from "react";

function Accordion() {

  const [open, setOpen] =

    useState(false);

  return (

    <div>

      <button

        onClick={() =>

          setOpen(!open)

        }

      >

        Toggle

      </button>

      {open && (

        <p>

          Accordion Content

        </p>

      )}

    </div>

  );

}`,

    language: "react",

    commonMistakes: [
      "Using multiple unnecessary states",

      "Poor accessibility",

      "Incorrect toggle logic",

      "Not handling multiple sections",

      "Complex component structure",
    ],

    thinkingProcess: `Step 1: Create state

Step 2: Toggle state

Step 3: Conditionally render content

Step 4: Improve accessibility

Step 5: Reuse component`,

    realWorldApplication: "FAQs, documentation websites, settings panels.",

    interviewTip: "Discuss handling multiple accordion sections.",
  },
  {
    id: "react-30",

    question: "Build Modal Component",

    difficulty: "coding",

    shortAnswer:
      "Create a popup dialog that opens and closes using React state.",

    detailedAnswer: `A Modal displays content above the main page.

Common Uses:

- Confirmations
- Forms
- Alerts
- Product Details

Concepts Tested:

- useState
- Conditional Rendering
- Overlay Design
- Component Reusability`,

    keyPoints: [
      "Popup UI component",

      "Uses useState",

      "Conditional rendering",

      "Reusable pattern",

      "Very common interview task",
    ],

    codeExample: `import { useState }

from "react";

function Modal() {

  const [open, setOpen] =

    useState(false);

  return (

    <>

      <button

        onClick={() =>

          setOpen(true)

        }

      >

        Open Modal

      </button>

      {open && (

        <div>

          <h2>

            Modal Content

          </h2>

          <button

            onClick={() =>

              setOpen(false)

            }

          >

            Close

          </button>

        </div>

      )}

    </>

  );

}`,

    language: "react",

    commonMistakes: [
      "No close functionality",

      "Ignoring accessibility",

      "Not using overlays",

      "Complex state management",

      "Improper keyboard handling",
    ],

    thinkingProcess: `Step 1: Create open state

Step 2: Show modal

Step 3: Close modal

Step 4: Add overlay

Step 5: Improve accessibility`,

    realWorldApplication:
      "Authentication forms, alerts, confirmations, product previews.",

    interviewTip: "Mention ESC key handling and accessibility support.",
  },
  {
    id: "react-31",

    question: "Build Tabs Component",

    difficulty: "coding",

    shortAnswer:
      "Create a tabbed interface where clicking a tab displays its corresponding content.",

    detailedAnswer: `Tabs are commonly used to organize content into sections.

Only one tab's content is visible at a time.

Concepts Tested:

- useState
- Conditional Rendering
- Dynamic Content
- Component Reusability

The active tab is stored in state and updated when a tab button is clicked.`,

    keyPoints: [
      "Uses useState",

      "Conditional rendering",

      "Dynamic content switching",

      "Reusable UI pattern",

      "Common interview question",
    ],

    codeExample: `import { useState }

from "react";

function Tabs() {

  const [activeTab, setActiveTab] =

    useState("home");

  return (

    <div>

      <button

        onClick={() =>

          setActiveTab("home")

        }

      >

        Home

      </button>

      <button

        onClick={() =>

          setActiveTab("about")

        }

      >

        About

      </button>

      <button

        onClick={() =>

          setActiveTab("contact")

        }

      >

        Contact

      </button>

      {

        activeTab === "home" &&

        <h2>Home Content</h2>

      }

      {

        activeTab === "about" &&

        <h2>About Content</h2>

      }

      {

        activeTab === "contact" &&

        <h2>Contact Content</h2>

      }

    </div>

  );

}`,

    language: "react",

    commonMistakes: [
      "Managing multiple active states",

      "Hardcoding content",

      "Not highlighting active tab",

      "Poor accessibility",

      "Complex conditional rendering",
    ],

    thinkingProcess: `Step 1: Create active tab state

Step 2: Render tab buttons

Step 3: Update active tab

Step 4: Display corresponding content

Step 5: Add active styling`,

    realWorldApplication:
      "Dashboards, profile pages, settings panels, admin systems.",

    interviewTip:
      "Store only the active tab ID instead of multiple boolean states.",
  },
  {
    id: "react-32",

    question: "Build Pagination",

    difficulty: "coding",

    shortAnswer:
      "Display data across multiple pages and allow navigation between them.",

    detailedAnswer: `Pagination divides large datasets into smaller pages.

Benefits:

- Faster rendering
- Better performance
- Improved user experience

Concepts Tested:

- useState
- Array slicing
- Event Handling
- Data Rendering

Pagination typically tracks the current page in state.`,

    keyPoints: [
      "Uses current page state",

      "Displays limited data",

      "Improves performance",

      "Common API integration pattern",

      "Frequently asked interview question",
    ],

    codeExample: `import { useState }

from "react";

function Pagination() {

  const data =

    [1,2,3,4,5,6,7,8,9,10];

  const [page, setPage] =

    useState(1);

  const perPage = 3;

  const start =

    (page - 1) * perPage;

  const visibleData =

    data.slice(

      start,

      start + perPage

    );

  return (

    <div>

      {

        visibleData.map(item => (

          <p key={item}>

            {item}

          </p>

        ))

      }

      <button

        onClick={() =>

          setPage(page - 1)

        }

      >

        Prev

      </button>

      <button

        onClick={() =>

          setPage(page + 1)

        }

      >

        Next

      </button>

    </div>

  );

}`,

    language: "react",

    commonMistakes: [
      "Not checking page boundaries",

      "Incorrect slice calculation",

      "Ignoring API pagination",

      "Not disabling buttons",

      "Missing page numbers",
    ],

    thinkingProcess: `Step 1: Store current page

Step 2: Calculate start index

Step 3: Slice data

Step 4: Render current page

Step 5: Update page state`,

    realWorldApplication:
      "E-commerce products, blogs, user management systems, search results.",

    interviewTip: "Explain how slice() determines visible records.",
  },
  {
    id: "react-33",

    question: "Build Infinite Scroll",

    difficulty: "coding",

    shortAnswer:
      "Load additional data automatically when the user reaches the bottom of the page.",

    detailedAnswer: `Infinite Scroll improves user experience by loading data dynamically.

Instead of clicking Next Page:

- User scrolls
- More data loads automatically

Concepts Tested:

- useEffect
- Event Listeners
- State Management
- API Integration

This pattern is heavily used in social media applications.`,

    keyPoints: [
      "Loads data dynamically",

      "Uses scrolling events",

      "Uses useEffect",

      "Improves user experience",

      "Common in social media apps",
    ],

    codeExample: `import {

  useEffect,

  useState

} from "react";

function InfiniteScroll() {

  const [items, setItems] =

    useState([1,2,3,4,5]);

  useEffect(() => {

    const handleScroll = () => {

      if (

        window.innerHeight +

        window.scrollY >=

        document.body.offsetHeight

      ) {

        setItems(prev => [

          ...prev,

          prev.length + 1

        ]);

      }

    };

    window.addEventListener(

      "scroll",

      handleScroll

    );

    return () =>

      window.removeEventListener(

        "scroll",

        handleScroll

      );

  }, []);

}`,

    language: "react",

    commonMistakes: [
      "Not removing listeners",

      "Multiple API requests",

      "Ignoring loading state",

      "No end-of-data handling",

      "Performance issues",
    ],

    thinkingProcess: `Step 1: Detect scrolling

Step 2: Check page bottom

Step 3: Load more data

Step 4: Update state

Step 5: Clean up listeners`,

    realWorldApplication: "Facebook, Instagram, LinkedIn, Twitter feeds.",

    interviewTip: "Mention cleanup functions and throttling for performance.",
  },
  {
    id: "react-34",

    question: "Build Debounced Search",

    difficulty: "coding",

    shortAnswer:
      "Delay search execution until the user stops typing for a short period.",

    detailedAnswer: `Debouncing prevents unnecessary API requests.

Without Debouncing:

Typing "React"

R
Re
Rea
Reac
React

Triggers 5 API calls.

With Debouncing:

Only one API call occurs after typing stops.

Concepts Tested:

- useState
- useEffect
- setTimeout
- Cleanup Functions

Debouncing improves performance significantly.`,

    keyPoints: [
      "Reduces API calls",

      "Improves performance",

      "Uses useEffect",

      "Uses setTimeout",

      "Common interview question",
    ],

    codeExample: `import {

  useState,

  useEffect

} from "react";

function Search() {

  const [query, setQuery] =

    useState("");

  useEffect(() => {

    const timer =

      setTimeout(() => {

        console.log(

          "Searching:",

          query

        );

      }, 500);

    return () =>

      clearTimeout(timer);

  }, [query]);

  return (

    <input

      value={query}

      onChange={(e) =>

        setQuery(

          e.target.value

        )

      }

    />

  );

}`,

    language: "react",

    commonMistakes: [
      "Not clearing timeout",

      "Making immediate API calls",

      "Incorrect dependencies",

      "Using debounce everywhere",

      "Ignoring loading states",
    ],

    thinkingProcess: `Step 1: Store query

Step 2: Watch changes

Step 3: Start timer

Step 4: Cancel previous timer

Step 5: Execute search`,

    realWorldApplication:
      "Search engines, product search, user lookup, autocomplete.",

    interviewTip: "Explain why debouncing reduces server load.",
  },
  {
    id: "react-35",

    question: "Build Form Validation",

    difficulty: "coding",

    shortAnswer:
      "Validate user input before form submission and display appropriate error messages.",

    detailedAnswer: `Form Validation ensures users provide correct data.

Common Validations:

- Required fields
- Email format
- Password length
- Number ranges
- Custom rules

Concepts Tested:

- useState
- Event Handling
- Conditional Rendering
- Form Management

Validation improves security and user experience.`,

    keyPoints: [
      "Validates user input",

      "Displays errors",

      "Uses useState",

      "Improves UX",

      "Essential real-world skill",
    ],

    codeExample: `import { useState }

from "react";

function Form() {

  const [email, setEmail] =

    useState("");

  const [error, setError] =

    useState("");

  const handleSubmit =

    (e) => {

      e.preventDefault();

      if (

        !email.includes("@")

      ) {

        setError(

          "Invalid Email"

        );

        return;

      }

      setError("");

      alert("Success");

    };

  return (

    <form

      onSubmit={handleSubmit}

    >

      <input

        value={email}

        onChange={(e) =>

          setEmail(

            e.target.value

          )

        }

      />

      <p>{error}</p>

      <button>

        Submit

      </button>

    </form>

  );

}`,

    language: "react",

    commonMistakes: [
      "No validation before submit",

      "Not showing error messages",

      "Weak validation rules",

      "Ignoring edge cases",

      "Not preventing form submission",
    ],

    thinkingProcess: `Step 1: Capture input

Step 2: Define validation rules

Step 3: Check user data

Step 4: Display errors

Step 5: Submit valid data`,

    realWorldApplication:
      "Registration forms, login systems, checkout pages, surveys.",

    interviewTip:
      "Mention both client-side and server-side validation for complete answers.",
  },

  {
    id: "react-basics-1",
    topic: "React Basics",
    question:
      "What is a React component and what are the differences between functional and class components?",
    difficulty: "Basic",
    shortAnswer:
      "Components are reusable UI pieces. Functional components are functions returning JSX; class components extend React.Component.",
    detailedAnswer: `React components are independent reusable pieces of UI. There are two types:

FUNCTIONAL COMPONENTS:
- Regular JavaScript functions
- Return JSX
- Simpler and more popular (modern React)
- Use Hooks for state and lifecycle
- Lighter and easier to test
- Pure functions (no side effects)

CLASS COMPONENTS:
- Extend React.Component
- Implement render() method
- Use this.state for state
- Use lifecycle methods
- More verbose
- Legacy but still used

Key differences:
- Hooks vs lifecycle methods for side effects
- State management: useState vs this.state
- Props access: props parameter vs this.props
- Easier testing and composability with functions

Modern React favors functional components with Hooks.`,
    keyPoints: [
      "Functional components are simpler and preferred",
      "Both can do the same things (with Hooks)",
      "Hooks replaced class component lifecycle methods",
      "Functional components are easier to test",
      "Components are reusable, composable UI pieces",
    ],
    codeExample: `// FUNCTIONAL COMPONENT
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// FUNCTIONAL with state (using Hook)
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// CLASS COMPONENT with state
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}`,
    language: "jsx",
    commonMistakes: [
      "Forgetting to import React in class components",
      "Not returning JSX from functional components",
      "Using class components when functional would be simpler",
      "Forgetting super(props) in constructor",
      "Mutating state directly",
    ],
    interviewTip:
      "Show you understand modern React practices by favoring functional components and explaining Hooks advantage.",
  },

  {
    id: "react-basics-2",
    topic: "React Basics",
    question: "What is JSX and how does it work?",
    difficulty: "Basic",
    shortAnswer:
      "JSX is a syntax extension that looks like HTML/XML in JavaScript. Babel transpiles it into React.createElement() calls.",
    detailedAnswer: `JSX (JavaScript XML) is a syntax extension for JavaScript that produces React elements.

WHAT IS JSX?
- Not valid JavaScript - needs transpilation
- Looks like HTML/XML but written in JavaScript
- Babel compiler converts JSX to JavaScript
- More readable and intuitive than createElement()

HOW IT WORKS:
1. JSX written: <div className="hello">Hello World</div>
2. Babel transpiles to: React.createElement('div', { className: 'hello' }, 'Hello World')
3. React creates element object
4. React renders to DOM

BENEFITS:
- More readable and intuitive
- Closer to HTML structure
- Easier to maintain
- Better error messages
- Dynamic content mixing

KEY POINTS:
- Must return single root element (or Fragment)
- className instead of class
- camelCase for attributes (onClick, onChange)
- Expressions in {} evaluate JavaScript
- Can embed components as tags`,
    keyPoints: [
      "JSX is syntactic sugar for React.createElement()",
      "Babel transpiles JSX to JavaScript",
      "Not valid JavaScript on its own",
      "className instead of class attribute",
      "camelCase for event handlers",
    ],
    codeExample: `// JSX syntax
const element = <h1 className="greeting">Hello, {name}!</h1>;

// Transpiled to:
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, ',
  name,
  '!'
);

// JSX expressions
const name = 'Alice';
const element = (
  <div>
    <h1>Hello, {name}</h1>
    <p>{1 + 2 + 3}</p>
    <button onClick={() => console.log('clicked')}>Click</button>
  </div>
);

// Components as JSX
<MyComponent />
<MyComponent prop="value" />

// Fragment (no wrapper needed)
<>
  <h1>Title</h1>
  <p>Content</p>
</>

// Conditional rendering
{isLoggedIn ? <Dashboard /> : <Login />}

// Lists
{items.map(item => <Item key={item.id} data={item} />)}`,
    language: "jsx",
    commonMistakes: [
      'Using "class" instead of "className"',
      "Not wrapping JSX expressions in {}",
      "Forgetting to return JSX in functions",
      "Not providing keys in lists",
      "Multiple root elements without Fragment",
    ],
    interviewTip:
      "Explain that JSX is syntactic sugar and Babel converts it to createElement() calls.",
  },

  {
    id: "react-basics-3",
    topic: "React Basics",
    question: "What is the Virtual DOM and how does React reconciliation work?",
    difficulty: "Intermediate",
    shortAnswer:
      "Virtual DOM is an in-memory representation of the DOM. React uses reconciliation (diffing algorithm) to update only changed parts.",
    detailedAnswer: `VIRTUAL DOM:
- JavaScript representation of actual DOM
- Lightweight copy of real DOM
- Exists in memory only
- Updated before actual DOM changes

HOW RECONCILIATION WORKS:
1. Component renders → new Virtual DOM tree created
2. React compares new with previous Virtual DOM (diffing)
3. React identifies minimal changes needed
4. React updates actual DOM efficiently
5. Browser renders updated DOM

DIFFING ALGORITHM:
- Two Virtual DOM trees compared
- Elements with different types = replace
- Elements with same type = compare props/attributes
- Keys help identify elements in lists
- Recursively compares component trees

BENEFITS:
- Batches DOM updates
- Reduces expensive DOM operations
- Improves performance significantly
- Abstracts DOM complexity
- Enables declarative programming

RECONCILIATION PROCESS:
1. New render creates Virtual DOM
2. Previous Virtual DOM kept in memory
3. Diffing algorithm runs
4. Patches created for actual DOM
5. React applies patches to real DOM
6. Browser repaints/reflows`,
    keyPoints: [
      "Virtual DOM improves performance by batching updates",
      "Diffing algorithm compares old and new Virtual DOM",
      "React only updates changed DOM elements",
      "Keys in lists help reconciliation process",
      "Reconciliation is automatic and abstracted",
    ],
    codeExample: `// React handles reconciliation automatically
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {/* Only count and button value update, not entire div */}
    </div>
  );
}

// KEYS in lists - help reconciliation
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
        // Without key: React struggles with list item identification
      ))}
    </ul>
  );
}

// Bad: array index as key (causes issues when list changes)
{todos.map((todo, index) => (
  <li key={index}>{todo.text}</li>
))}

// Good: unique identifier
{todos.map(todo => (
  <li key={todo.id}>{todo.text}</li>
))}

// Reconciliation with component types
// REPLACED - different types
<div>Old</div>  →  <span>New</span>

// UPDATED - same type, different props
<input value="old" /> → <input value="new" />

// NOT UPDATED - same type, same props
<p>Text</p> → <p>Text</p> (no change needed)`,
    language: "jsx",
    commonMistakes: [
      "Using array index as key in lists",
      "Not using keys in dynamically rendered lists",
      "Misunderstanding that Virtual DOM is faster than direct DOM",
      "Not knowing reconciliation is automatic",
      "Assuming all DOM updates are batched",
    ],
    interviewTip:
      "Emphasize that Virtual DOM enables efficient batching and that keys are crucial for list reconciliation.",
  },

  {
    id: "react-basics-4",
    topic: "React Basics",
    question: "Explain React Props and how to pass data between components.",
    difficulty: "Basic",
    shortAnswer:
      "Props are read-only data passed from parent to child components. They enable component reusability and data flow.",
    detailedAnswer: `PROPS OVERVIEW:
- Properties passed to components
- Read-only (immutable)
- Flow from parent to child (unidirectional)
- Enable component reusability
- Similar to function parameters

PROP PASSING:
1. Parent component passes prop
2. Child component receives prop
3. Child accesses via props object or destructuring
4. Changes to props trigger re-render

PROP TYPES:
- Strings: <Component name="Alice" />
- Numbers: <Component count={5} />
- Booleans: <Component active={true} />
- Objects: <Component user={{ name: 'Alice' }} />
- Functions: <Component onClick={handleClick} />
- Arrays: <Component items={[1,2,3]} />
- Components: <Component header={Header} />

BEST PRACTICES:
- Use destructuring for cleaner code
- Provide default values with defaultProps
- Use PropTypes for type checking
- Don't mutate props in child
- Pass necessary data only`,
    keyPoints: [
      "Props are read-only data from parent",
      "Enable unidirectional data flow",
      "Child cannot modify parent props",
      "Can pass any JavaScript value",
      "Make components reusable and flexible",
    ],
    codeExample: `// Simple prop passing
function Parent() {
  return <Child name="Alice" age={25} />;
}

function Child(props) {
  return <p>{props.name} is {props.age}</p>;
}

// DESTRUCTURING Props
function Child({ name, age }) {
  return <p>{name} is {age}</p>;
}

// DEFAULT PROPS
function Greeting({ greeting = 'Hello' }) {
  return <h1>{greeting}</h1>;
}

Greeting(); // Uses default
Greeting({ greeting: 'Hi' }); // Uses passed value

// OR using defaultProps
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}

Greeting.defaultProps = {
  greeting: 'Hello'
};

// PROP TYPES (type checking)
import PropTypes from 'prop-types';

function User({ name, age, email }) {
  return <div>{name}, {age}, {email}</div>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string
};

// PASSING OBJECTS
function Parent() {
  const user = { name: 'Alice', age: 25 };
  return <Profile user={user} />;
}

function Profile({ user }) {
  return <p>{user.name}: {user.age}</p>;
}

// PASSING FUNCTIONS
function Parent() {
  const handleClick = () => console.log('Clicked');
  return <Button onClick={handleClick}>Click</Button>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

// PASSING COMPONENTS
function Parent() {
  return <Layout header={Header} />;
}

function Layout({ header: HeaderComponent }) {
  return (
    <div>
      <HeaderComponent />
      <main>Content</main>
    </div>
  );
}

// REST PROPS
function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

<Button onClick={handleClick} className="primary">
  Click Me
</Button>`,
    language: "jsx",
    commonMistakes: [
      "Trying to modify props in child",
      "Not using PropTypes for type checking",
      "Passing too many props (prop drilling)",
      "Not destructuring props",
      "Forgetting to pass required props",
    ],
    interviewTip:
      "Mention prop drilling problem and how context/state management solves it.",
  },

  {
    id: "react-basics-5",
    topic: "React Basics",
    question: "What is State in React and how is it different from Props?",
    difficulty: "Basic",
    shortAnswer:
      "State is mutable data owned by a component. Props are immutable data from parent. State changes trigger re-renders.",
    detailedAnswer: `STATE vs PROPS:

STATE:
- Mutable data
- Owned by component
- Managed inside component
- Changes trigger re-render
- Used for dynamic data
- Cannot be accessed by parent directly

PROPS:
- Immutable (read-only)
- Passed from parent
- Cannot be modified by child
- Changes trigger child re-render
- Used for static configuration
- Parent controls values

WHEN TO USE:
- Use State for: form inputs, toggles, counters, dynamic data
- Use Props for: configuration, initial values, callbacks

STATE RULES:
1. Never modify state directly
2. Call setState to update (class) or setter (hooks)
3. State updates are merged (class) or replaced (hooks)
4. Treat state as immutable
5. State updates may be asynchronous

INITIAL STATE:
- Functional: useState hook
- Class: constructor or field initialization

STATE LIFECYCLE:
1. Component created with initial state
2. User interaction/data change updates state
3. Component re-renders with new state
4. Cycle repeats`,
    keyPoints: [
      "State is mutable, Props are immutable",
      "State is owned by component, Props from parent",
      "State changes trigger re-renders",
      "Never modify state directly",
      "Props enable parent-child communication",
    ],
    codeExample: `// FUNCTIONAL COMPONENT - State with Hooks
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// CLASS COMPONENT - State
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

// STATE with PROPS
function Parent({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  
  return (
    <div>
      <Child count={count} onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

function Child({ count, onIncrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

// MULTIPLE STATE VARIABLES
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {submitted && <p>Submitted!</p>}
    </div>
  );
}

// BAD - Direct state mutation
this.state.count = 5; // WRONG!

// GOOD - Using setState
this.setState({ count: 5 });

// BAD - Direct mutation with hooks
count = 5; // WRONG!

// GOOD - Using setter
setCount(5);`,
    language: "jsx",
    commonMistakes: [
      "Modifying state directly instead of using setState",
      "Not initializing state properly",
      "Confusing state and props",
      "Assuming state updates are synchronous",
      "Not using setter function in hooks",
    ],
    interviewTip:
      "Explain that state is for component data while props are for parent-child communication.",
  },

  {
    id: "react-basics-6",
    topic: "React Basics",
    question: "What is the React Fragment and when should you use it?",
    difficulty: "Intermediate",
    shortAnswer:
      "Fragment is a React component that allows grouping multiple elements without adding a wrapper DOM node.",
    detailedAnswer: `REACT FRAGMENT:
- Allows grouping multiple elements
- Doesn't create extra DOM node
- Useful for returning multiple elements
- Keeps DOM structure clean

WHEN TO USE:
1. Returning multiple elements from component
2. Avoiding unnecessary wrapper divs
3. Lists with multiple root elements
4. Improving DOM structure

BENEFITS:
- Cleaner DOM hierarchy
- No extra HTML elements
- Maintains semantic structure
- Useful with CSS Grid/Flexbox
- Performance improvement (fewer nodes)

SYNTAX:
- <Fragment>...</Fragment>
- <></> (shorthand)

LIMITATIONS:
- Cannot use key prop with shorthand <>
- Must use <Fragment key={id}> for lists`,
    keyPoints: [
      "Fragment groups elements without wrapper",
      "<></> is shorthand for <Fragment></Fragment>",
      "Keeps DOM clean and semantic",
      "Use keyed Fragment for lists",
      "No performance overhead",
    ],
    codeExample: `import { Fragment } from 'react';

// WITHOUT Fragment - Extra wrapper
function Item() {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
}

// WITH Fragment shorthand
function Item() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}

// WITH Fragment explicit
function Item() {
  return (
    <Fragment>
      <h1>Title</h1>
      <p>Description</p>
    </Fragment>
  );
}

// Fragment with key (for lists)
function List({ items }) {
  return (
    <>
      {items.map(item => (
        <Fragment key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <hr />
        </Fragment>
      ))}
    </>
  );
}

// DOM structure comparison
// WITH <div> - 5 nodes
<div>
  <h1>Title</h1>
  <p>Content</p>
</div>

// WITH Fragment - 2 nodes
<>
  <h1>Title</h1>
  <p>Content</p>
</>

// COMMON PATTERN
function Row({ item }) {
  return (
    <>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
    </>
  );
}`,
    language: "jsx",
    commonMistakes: [
      "Using <> with key prop (won't work)",
      "Not using Fragment when returning multiple elements",
      "Adding unnecessary wrapper divs",
      "Forgetting to import Fragment",
    ],
    interviewTip:
      "Mention Fragment keeps DOM clean and is especially useful for table rows and lists.",
  },

  {
    id: "react-hooks-1",
    topic: "React Hooks",
    question: "What is useState hook and how do you use it?",
    difficulty: "Basic",
    shortAnswer:
      "useState is a Hook that adds state to functional components. Returns current state and setter function as array.",
    detailedAnswer: `USESTATE HOOK:
- Adds state to functional components
- Returns [state, setState]
- setState replaces previous state (for simple values)
- Triggers re-render when state changes
- Can have multiple useState calls

SYNTAX:
const [state, setState] = useState(initialValue);

BEHAVIOR:
1. Initial render uses initialValue
2. setState triggers re-render
3. Subsequent renders use new state value
4. setState is the only way to update state

LAZY INITIALIZATION:
- Pass function to useState for expensive computations
- Function called only on initial render

UPDATING STATE:
- Simple value: setState(newValue)
- Function form: setState(prev => prev + 1)
- Function form avoids stale closures

MULTIPLE STATES:
- Call useState multiple times
- Each state is independent
- Each has its own setter

RULES:
- Only call at top level (not in loops/conditions)
- Only in components or custom hooks
- Follow Hook rules strictly`,
    keyPoints: [
      "useState adds state to functional components",
      "Returns [state, setState]",
      "setState triggers re-render",
      "Can have multiple useState calls",
      "Use function form for complex updates",
    ],
    codeExample: `import { useState } from 'react';

// BASIC USAGE
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// FUNCTION FORM - prevents stale closures
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prev => prev + 1); // Use previous state
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// MULTIPLE STATES
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Submit</button>
      {submitted && <p>Form submitted!</p>}
    </div>
  );
}

// LAZY INITIALIZATION
function Component() {
  // expensiveComputation called only once
  const [state, setState] = useState(() => expensiveComputation());
  
  return <div>{state}</div>;
}

// OBJECT STATE
function Profile() {
  const [user, setUser] = useState({ name: '', age: 0 });
  
  const updateName = (name) => {
    setUser({ ...user, name }); // Merge, don't replace
  };
  
  return (
    <div>
      <input 
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <p>Age: {user.age}</p>
    </div>
  );
}

// ARRAY STATE
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

// BATCH UPDATES
function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    // React 18+ automatically batches these
    setCount(c => c + 1);
    setCount(c => c + 1);
    // Only one re-render happens
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+2</button>
    </div>
  );
}`,
    language: "jsx",
    commonMistakes: [
      "Calling useState inside conditions/loops",
      "Direct mutation of state",
      "Not using function form for dependent updates",
      "Assuming setState is synchronous",
      "Not spreading object state in updates",
    ],
    interviewTip:
      "Emphasize function form of setState for avoiding stale closures and explain batching in React 18.",
  },

  {
    id: "react-hooks-2",
    topic: "React Hooks",
    question: "Explain useEffect hook and its dependency array.",
    difficulty: "Intermediate",
    shortAnswer:
      "useEffect runs side effects after render. Dependency array controls when effect runs: empty [] = once, omitted = every render.",
    detailedAnswer: `USEEFFECT HOOK:
- Runs side effects after render completes
- Replaces lifecycle methods (componentDidMount, etc.)
- Can run after every render or conditionally
- Returns cleanup function for cleanup

DEPENDENCY ARRAY:
1. Omitted: runs after every render
2. Empty []: runs once after initial render
3. [dep1, dep2]: runs when dependencies change

EXECUTION ORDER:
1. Component renders
2. Browser paints
3. useEffect runs
4. Cleanup runs before next effect (if provided)

CLEANUP FUNCTION:
- Runs before effect runs again
- Runs before component unmounts
- Used for: unsubscribe, cancel requests, clear timers

COMMON PATTERNS:
1. Fetch on mount: useEffect(() => {}, [])
2. Subscribe on mount, unsubscribe on unmount
3. Sync with external system
4. Conditional effects based on dependencies

RULES:
- Only call at top level
- Only in components or custom hooks
- Cannot make effect async directly (wrap in async)
- Don't skip dependencies (unless you know why)`,
    keyPoints: [
      "useEffect runs after render (not during)",
      "Dependency array controls execution timing",
      "Empty [] = runs once on mount",
      "Omitted = runs every render",
      "Return cleanup function for cleanup",
    ],
    codeExample: `import { useState, useEffect } from 'react';

// FETCH DATA on mount
function User({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(\`/api/user/\${userId}\`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    };
    
    fetchUser();
  }, [userId]); // Re-run when userId changes
  
  if (loading) return <p>Loading...</p>;
  return <div>{user.name}</div>;
}

// SETUP and CLEANUP subscription
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    // Setup
    const connection = new WebSocket(\`/chat/\${roomId}\`);
    
    connection.onmessage = (event) => {
      setMessages(prev => [...prev, event.data]);
    };
    
    // Cleanup
    return () => {
      connection.close();
    };
  }, [roomId]);
  
  return (
    <div>
      {messages.map((msg, i) => <p key={i}>{msg}</p>)}
    </div>
  );
}

// TIMER with CLEANUP
function Stopwatch() {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
    
    // Cleanup - clear interval
    return () => clearInterval(interval);
  }, []); // Run once on mount
  
  return <div>Time: {time}s</div>;
}

// MULTIPLE EFFECTS
function Component() {
  // Effect 1 - fetch data
  useEffect(() => {
    fetchData();
  }, []);
  
  // Effect 2 - setup scroll listener
  useEffect(() => {
    const handleScroll = () => console.log('scrolled');
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Effect 3 - sync title
  useEffect(() => {
    document.title = 'My App';
  }, []);
}

// RUNS EVERY RENDER (no dependency array)
function Component() {
  useEffect(() => {
    console.log('Runs after every render');
  }); // No dependency array
}

// RUNS ONCE on MOUNT
function Component() {
  useEffect(() => {
    console.log('Runs once after mount');
  }, []); // Empty dependency array
}

// RUNS when DEPENDENCIES CHANGE
function Component({ userId }) {
  useEffect(() => {
    console.log('Runs when userId changes');
  }, [userId]);
}

// CONDITIONAL EFFECT
function Component({ isVisible }) {
  useEffect(() => {
    if (!isVisible) return;
    
    // Only run if isVisible is true
    console.log('Component is visible');
  }, [isVisible]);
}

// ASYNC EFFECT
function Component() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    (async () => {
      const response = await fetch('/api/data');
      const json = await response.json();
      if (isMounted) {
        setData(json);
      }
    })();
    
    return () => {
      isMounted = false; // Prevent state update after unmount
    };
  }, []);
  
  return <div>{data}</div>;
}`,
    language: "jsx",
    commonMistakes: [
      "Missing dependency array (runs every render)",
      "Forgetting cleanup function for subscriptions",
      "Missing dependencies in array (stale data)",
      "Making effect async without wrapper",
      "Not handling unmounted component in async effects",
    ],
    interviewTip:
      "Explain dependency array is crucial and show cleanup pattern for subscriptions/timers.",
  },

  {
    id: "react-hooks-3",
    topic: "React Hooks",
    question:
      "What is useContext and how do you use it to avoid prop drilling?",
    difficulty: "Intermediate",
    shortAnswer:
      "useContext allows consuming context values without prop drilling. Pass context to useContext() to get value.",
    detailedAnswer: `USECONCTEXT HOOK:
- Consumes context without prop drilling
- Returns current context value
- Subscribes to context changes
- Triggers re-render when value changes

PROP DRILLING PROBLEM:
- Passing props through many levels
- Intermediate components don't use props
- Makes code hard to maintain
- Context solves this

CONTEXT API:
1. createContext() - create context
2. Provider - supplies context value
3. useContext() - consume value

CREATING CONTEXT:
const ThemeContext = React.createContext(defaultValue);

PROVIDING:
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>

CONSUMING:
const theme = useContext(ThemeContext);

BEST PRACTICES:
- Create custom hooks for contexts
- Don't overuse context (performance)
- Split contexts by use case
- Memoize provider value to prevent unnecessary renders`,
    keyPoints: [
      "useContext eliminates prop drilling",
      "Context created with createContext()",
      "Provider wraps components needing value",
      "useContext() accesses value in descendant",
      "Context changes trigger re-renders",
    ],
    codeExample: `import { createContext, useContext, useState } from 'react';

// CREATE CONTEXT
const ThemeContext = createContext();

// PROVIDE CONTEXT
function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  );
}

// CONSUME CONTEXT
function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header style={{ 
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

function Main() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <main style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      Content
    </main>
  );
}

// CUSTOM HOOK for context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// USE CUSTOM HOOK
function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Current: {theme}</button>;
}

// MULTIPLE CONTEXTS
const ThemeContext = createContext();
const UserContext = createContext();
const NotificationContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  
  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <NotificationContext.Provider value={notifications}>
          <MainApp />
        </NotificationContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

// MEMOIZED PROVIDER (prevent unnecessary re-renders)
function App() {
  const [theme, setTheme] = useState('light');
  
  const value = { theme, setTheme };
  
  return (
    <ThemeContext.Provider value={value}>
      <MainApp />
    </ThemeContext.Provider>
  );
}

// Better: memoize value
function App() {
  const [theme, setTheme] = useState('light');
  
  const value = useMemo(
    () => ({ theme, setTheme }),
    [theme]
  );
  
  return (
    <ThemeContext.Provider value={value}>
      <MainApp />
    </ThemeContext.Provider>
  );
}

// CONTEXT with REDUCER
const StateContext = createContext();

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

function useAppState() {
  return useContext(StateContext);
}`,
    language: "jsx",
    commonMistakes: [
      "Forgetting to wrap with Provider",
      "Not memoizing provider value (causes re-renders)",
      "Using context for frequently changing data",
      "Not creating custom hooks for contexts",
      "Multiple nested providers without organization",
    ],
    interviewTip:
      "Mention that context is great for theme, auth, but not ideal for frequently changing data.",
  },

  {
    id: "react-hooks-4",
    topic: "React Hooks",
    question:
      "What is useReducer and when should you use it instead of useState?",
    difficulty: "Intermediate",
    shortAnswer:
      "useReducer manages complex state with a reducer function. Use when state has multiple related fields or complex logic.",
    detailedAnswer: `USEREDUCER HOOK:
- Manages complex state logic
- Similar to Redux reducer pattern
- Takes reducer function and initial state
- Returns [state, dispatch]

WHEN TO USE:
1. Multiple related state values
2. Complex state transitions
3. State depends on previous state
4. Shared state logic across components
5. Better than multiple useState

SYNTAX:
const [state, dispatch] = useReducer(reducer, initialState);

REDUCER FUNCTION:
- Takes current state and action
- Returns new state
- Pure function (no side effects)

ACTION OBJECT:
- Has 'type' property
- Can have 'payload' property
- Describes what happened

ADVANTAGES:
- Centralized state logic
- Easier to test
- More predictable
- Better for complex scenarios
- Easier to debug with Redux DevTools`,
    keyPoints: [
      "useReducer for complex state logic",
      "Reducer is pure function: (state, action) => newState",
      "Dispatch actions to update state",
      "Better for related state fields",
      "Easier to test than useState",
    ],
    codeExample: `import { useReducer } from 'react';

// BASIC REDUCER
function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

// REDUCER WITH PAYLOAD
function reducer(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, { id: Date.now(), text: action.payload }]
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(t => t.id !== action.payload)
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(t =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        )
      };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  
  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };
  
  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };
  
  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };
  
  return (
    <div>
      {state.todos.map(todo => (
        <div key={todo.id}>
          <input 
            type="checkbox" 
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
      <input 
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
        placeholder="Add todo"
      />
    </div>
  );
}

// REDUCER WITH INITIAL FUNCTION (lazy initialization)
const initialState = { count: 0 };

function init(initialCount) {
  return { count: initialCount };
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
}

// USESTATE vs USEREDUCER
// Multiple related states - use useReducer
function useReducerExample() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    age: 0,
    submitted: false
  });
  
  return (
    <form>
      <input 
        value={state.name}
        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
      />
      {/* ... more fields ... */}
    </form>
  );
}

// vs

function useStateExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  // Too many useState calls, harder to manage
}

// COMPLEX LOGIC
function reducer(state, action) {
  switch(action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        data: action.payload 
      };
    case 'FETCH_ERROR':
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
      };
    default:
      return state;
  }
}

function DataFetcher() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });
  
  const fetchData = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };
  
  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;
  return <div>{state.data}</div>;
}`,
    language: "jsx",
    commonMistakes: [
      "Not returning new state in reducer",
      "Using array/object indices in action types",
      "Not memoizing dispatch (in context)",
      "Assuming reducer runs synchronously",
      "Missing default case in reducer",
    ],
    interviewTip:
      "Show useReducer advantages for complex state and explain when it's better than multiple useState.",
  },

  {
    id: "react-hooks-5",
    topic: "React Hooks",
    question:
      "What is useMemo and useCallback? When and why should you use them?",
    difficulty: "Advanced",
    shortAnswer:
      "useMemo memoizes expensive computations. useCallback memoizes functions. Use to prevent unnecessary re-renders.",
    detailedAnswer: `USEMEMO HOOK:
- Memoizes expensive computations
- Returns cached value
- Recomputes only when dependencies change
- Helps prevent unnecessary re-renders

USECALLBACK HOOK:
- Memoizes functions
- Returns cached function
- Prevents child re-renders when props unchanged
- Uses referential equality

WHEN TO USE:
1. Expensive calculations
2. Creating objects/arrays passed as props
3. Functions passed as props to memoized children
4. Large list filtering/sorting
5. BUT don't over-optimize

PERFORMANCE CAVEATS:
- useMemo/useCallback have overhead
- Only use if measurable performance gain
- Premature optimization is evil
- Profile before optimizing

DEPENDENCY ARRAYS:
- Same as useEffect
- If dependency missing, stale data
- If too many dependencies, rarely memoizes

CHILDREN OPTIMIZATION:
- Memoize expensive functions with useCallback
- Wrap child with React.memo()
- Use together for maximum effect`,
    keyPoints: [
      "useMemo prevents expensive recalculations",
      "useCallback prevents function re-creation",
      "Both use dependency arrays",
      "Don't over-optimize prematurely",
      "Measure performance gain before using",
    ],
    codeExample: `import { useMemo, useCallback, useState } from 'react';

// USEMEMO - expensive calculation
function FilteredList({ items, query }) {
  // Without useMemo: recalculates every render
  const filtered = useMemo(() => {
    console.log('Filtering...');
    return items.filter(item => 
      item.name.includes(query)
    );
  }, [items, query]); // Only recalculate when dependencies change
  
  return <ul>{filtered.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}

// USEMEMO - memoizing object
function Parent() {
  const [count, setCount] = useState(0);
  
  // Without useMemo: new object every render (different reference)
  const config = useMemo(() => ({
    theme: 'dark',
    size: 'large'
  }), []); // Empty array = never changes
  
  return <Child config={config} />;
}

// USECALLBACK - memoizing function
function Parent() {
  const [count, setCount] = useState(0);
  
  // Without useCallback: new function every render
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []); // Dependencies: if empty, same function always returned
  
  return <Child onClick={handleClick} />;
}

// COMBINED: useCallback + React.memo
function Parent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  
  // Memoize function so Child doesn't re-render unnecessarily
  const handleDelete = useCallback((id) => {
    console.log('Delete:', id);
  }, []); // No dependencies
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Count: {count}</p>
      {/* Child re-renders when count changes, 
          but handleDelete reference stays same */}
      <Child onDelete={handleDelete} />
    </div>
  );
}

const Child = React.memo(({ onDelete }) => {
  console.log('Child rendered');
  return <button onClick={() => onDelete(1)}>Delete</button>;
});

// USEMEMO - sorting large list
function TodoList({ todos, sortBy }) {
  const sorted = useMemo(() => {
    console.log('Sorting...');
    const copy = [...todos];
    if (sortBy === 'priority') {
      return copy.sort((a, b) => b.priority - a.priority);
    }
    if (sortBy === 'date') {
      return copy.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return copy;
  }, [todos, sortBy]);
  
  return (
    <ul>
      {sorted.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// USECALLBACK - form handlers
function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleNameChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, name: e.target.value }));
  }, []);
  
  const handleEmailChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
  }, []);
  
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    await fetch('/api/submit', { method: 'POST', body: JSON.stringify(formData) });
  }, [formData]); // Depends on formData
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={formData.name} onChange={handleNameChange} />
      <input value={formData.email} onChange={handleEmailChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

// WHEN NOT TO USE
function BadExample() {
  // DON'T: useMemo for simple operations
  const sum = useMemo(() => a + b, [a, b]);
  
  // DON'T: useCallback for simple functions
  const increment = useCallback(() => setCount(c => c + 1), []);
  
  // DON'T: over-memoize everything
  // Only use when there's measurable benefit
}

// PROFILING with React DevTools
// React DevTools > Profiler > Record interactions
// Check which components re-render unnecessarily
// Then apply useMemo/useCallback strategically`,
    language: "jsx",
    commonMistakes: [
      "Over-optimizing without profiling",
      "Missing dependencies in arrays",
      "Using useMemo for everything",
      "Assuming memoization always helps",
      "Not combining with React.memo()",
    ],
    interviewTip:
      "Emphasize measuring performance before optimizing and using React DevTools Profiler.",
  },

  {
    id: "react-hooks-6",
    topic: "React Hooks",
    question: "What is useRef and when should you use it?",
    difficulty: "Intermediate",
    shortAnswer:
      "useRef creates mutable reference that persists across renders. Use for DOM access, timers, previous values.",
    detailedAnswer: `USEREF HOOK:
- Returns mutable reference object
- .current property holds value
- Persists across re-renders
- Doesn't trigger re-render when changed
- Same object reference returned always

WHEN TO USE:
1. Accessing DOM elements directly
2. Storing mutable values that don't trigger re-render
3. Keeping track of timers/intervals
4. Managing focus, text selection, media playback
5. Storing previous values

WHEN NOT TO USE:
1. Don't use ref for everything (use state)
2. Avoid ref for declarative effects (use effect)
3. Should be last resort (not default)

USING REFS:
- Create: const ref = useRef(null)
- Access: ref.current
- Set: ref.current = value
- Attach to element: <input ref={ref} />

REF FORWARDING:
- Pass refs to child components
- Functional components don't accept refs
- Use forwardRef for ref forwarding

IMPERATIVE vs DECLARATIVE:
- Refs are imperative (tell what to do)
- State/props are declarative (describe state)`,
    keyPoints: [
      "useRef creates mutable reference",
      "Doesn't cause re-render when changed",
      "Persists across renders",
      "Useful for DOM access",
      "Last resort, not default approach",
    ],
    codeExample: `import { useRef } from 'react';

// FOCUS INPUT
function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// STORE MUTABLE VALUE (like timer ID)
function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  
  const start = () => {
    intervalRef.current = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
  };
  
  const stop = () => {
    clearInterval(intervalRef.current);
  };
  
  return (
    <div>
      <p>Time: {time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

// ACCESS DOM ELEMENT
function Video() {
  const videoRef = useRef(null);
  
  const play = () => videoRef.current.play();
  const pause = () => videoRef.current.pause();
  
  return (
    <>
      <video ref={videoRef} src="video.mp4" />
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </>
  );
}

// TRACK PREVIOUS VALUE
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// REF FORWARDING
const TextInput = React.forwardRef((props, ref) => {
  return <input ref={ref} />;
});

function Parent() {
  const inputRef = useRef(null);
  
  return (
    <>
      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}

// REFS WITH USEEFFECT
function TextInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    // Side effect: focus input
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} />;
}

// ACCESSING MULTIPLE REFS
function Form() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const handleSubmit = () => {
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    console.log(data);
  };
  
  return (
    <form>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} placeholder="Email" />
      <input ref={passwordRef} placeholder="Password" />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

// REF WITH useCallback (for forwarding)
function Parent() {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  
  const handleSearch = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  
  return (
    <>
      <input 
        ref={inputRef}
        value={input}
        onChange={handleSearch}
      />
    </>
  );
}

// AVOID: using ref when state should be used
// BAD
function Counter() {
  const countRef = useRef(0);
  return (
    <div>
      <p>Count: {countRef.current}</p>
      {/* Won't re-render when changed */}
      <button onClick={() => countRef.current++}>+</button>
    </div>
  );
}

// GOOD
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      {/* Re-renders when changed */}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`,
    language: "jsx",
    commonMistakes: [
      "Using ref instead of state for values that should trigger re-render",
      "Accessing ref.current before element mounts",
      "Not using forwardRef for custom components",
      "Treating ref like state",
      "Overusing refs instead of declarative approaches",
    ],
    interviewTip:
      "Emphasize that refs are for imperative access and should be used sparingly.",
  },
  {
    id: "state-mgmt-1",
    topic: "State Management",
    question: "What is prop drilling and how can you solve it?",
    difficulty: "Intermediate",
    shortAnswer:
      "Prop drilling is passing props through multiple levels. Solve with Context API, Redux, or state management libraries.",
    detailedAnswer: `PROP DRILLING PROBLEM:
- Passing props through intermediate components
- Intermediate components don't use the props
- Makes code hard to maintain
- Creates unnecessary dependencies
- Makes components less reusable

EXAMPLE:
App → Component A → Component B → Component C → uses prop
Prop passed through A and B even though they don't use it

SOLUTIONS:

1. CONTEXT API:
- Wrap components with Provider
- Access value with useContext
- Free with React
- Good for static data

2. STATE MANAGEMENT LIBRARIES:
- Redux: Centralized store
- Zustand: Lightweight alternative
- Jotai/Recoil: Atomic state
- MobX: Observable state

3. COMPONENT COMPOSITION:
- Move state down
- Lift shared state to common parent
- Use children prop for flexibility

4. RENDER PROPS:
- Pass render function as prop
- Less common in modern React

WHEN TO USE EACH:
- Context: Small to medium apps, theme/auth
- Redux: Large apps, complex state
- Zustand: Medium apps, simple stores
- Composition: Simple cases`,
    keyPoints: [
      "Prop drilling passes props through intermediate components",
      "Context API is built-in solution",
      "Redux for large apps with complex state",
      "Composition moves state down",
      "Choose solution based on app complexity",
    ],
    codeExample: `// PROP DRILLING PROBLEM
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <Navbar user={user} />
      <Main user={user} />
      <Footer user={user} />
    </div>
  );
}

function Navbar({ user }) {
  return <nav><User user={user} /></nav>;
}

function Main({ user }) {
  return <main><Content user={user} /></main>;
}

function Footer({ user }) {
  return <footer><Info user={user} /></footer>;
}

// Each component passes user even if it doesn't use it

// SOLUTION 1: CONTEXT API
const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={user}>
      <Navbar />
      <Main />
      <Footer />
    </UserContext.Provider>
  );
}

function User() {
  const user = useContext(UserContext);
  return <span>{user?.name}</span>;
}

// SOLUTION 2: COMPONENT COMPOSITION
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <Navbar>
        <User user={user} />
      </Navbar>
      <Main>
        <Content user={user} />
      </Main>
    </div>
  );
}

function Navbar({ children }) {
  return <nav>{children}</nav>;
}

// SOLUTION 3: RENDER PROPS
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <UserProvider user={user}>
        {(user) => (
          <Navbar>
            <User user={user} />
          </Navbar>
        )}
      </UserProvider>
    </div>
  );
}

// SOLUTION 4: CUSTOM HOOK
function useUser() {
  return useContext(UserContext);
}

function User() {
  const user = useUser();
  return <span>{user?.name}</span>;
}

// SOLUTION 5: ZUSTAND (lightweight state management)
import create from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user })
}));

function App() {
  return <Main />;
}

function Main() {
  const user = useUserStore(state => state.user);
  return <User user={user} />;
}`,
    language: "jsx",
    commonMistakes: [
      "Over-complicating with Redux for simple apps",
      "Not choosing right solution for complexity level",
      "Mixing multiple state management approaches",
      "Not memoizing provider values",
      "Using context for frequently changing data",
    ],
    interviewTip:
      "Discuss when to use each solution based on app complexity and team knowledge.",
  },

  {
    id: "state-mgmt-2",
    topic: "State Management",
    question: "Explain Redux: actions, reducers, store, and dispatch.",
    difficulty: "Advanced",
    shortAnswer:
      "Redux is predictable state management. Actions describe what happened, reducers update state, store holds state, dispatch triggers actions.",
    detailedAnswer: `REDUX FUNDAMENTALS:

1. STORE:
- Holds entire application state
- Single source of truth
- Read-only (mutations via dispatch)
- Created with createStore()

2. ACTIONS:
- Plain objects with type property
- Describe what happened
- Can have payload with data
- Dispatched to update state

3. REDUCERS:
- Pure functions: (state, action) => newState
- Take current state and action
- Return new state
- Must be pure (no side effects)
- Cannot mutate original state

4. DISPATCH:
- Only way to trigger state change
- Sends action to reducer
- Synchronous in basic Redux
- Async with middleware (thunk)

REDUX FLOW:
1. User interaction triggers action
2. Action dispatched to store
3. Store passes action + state to reducer
4. Reducer computes new state
5. Store updates state
6. Subscribers notified
7. Components re-render with new state

MIDDLEWARE:
- Intercepts actions before reducer
- Can handle async operations
- Common: redux-thunk, redux-saga
- Custom middleware possible

REDUX TOOLKIT:
- Modern Redux approach
- Includes Immer (immutable updates)
- Simplified syntax
- Built-in DevTools integration`,
    keyPoints: [
      "Store is single source of truth",
      "Actions describe what happened",
      "Reducers are pure functions",
      "Dispatch triggers state changes",
      "Redux DevTools for time-traveling debugging",
    ],
    codeExample: `// BASIC REDUX
import { createStore } from 'redux';

// 1. REDUCER
function counterReducer(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'ADD':
      return state + action.payload;
    default:
      return state;
  }
}

// 2. CREATE STORE
const store = createStore(counterReducer);

// 3. DISPATCH ACTION
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD', payload: 5 });

// 4. GET STATE
console.log(store.getState()); // 6

// REACT-REDUX
import { Provider, useSelector, useDispatch } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 5 })}>+5</button>
    </div>
  );
}

// REDUX TOOLKIT (Modern approach)
import { createSlice, configureStore } from '@reduxjs/toolkit';

// 1. CREATE SLICE (combines reducer + actions)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer makes this safe
    },
    decrement: (state) => {
      state.value -= 1;
    },
    add: (state, action) => {
      state.value += action.payload;
    }
  }
});

// 2. CREATE STORE
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// 3. EXPORT ACTIONS
export const { increment, decrement, add } = counterSlice.actions;

// 4. USE IN COMPONENT
function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(add(5))}>+5</button>
    </div>
  );
}

// ASYNC ACTIONS (redux-thunk)
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId) => {
    const response = await fetch(\`/api/user/\${userId}\`);
    return response.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// SELECTOR WITH RESELECT
import { createSelector } from '@reduxjs/toolkit';

const selectCount = (state) => state.counter.value;
const selectCountDoubled = createSelector(
  [selectCount],
  (count) => count * 2
);

function Component() {
  const doubled = useSelector(selectCountDoubled);
  return <p>{doubled}</p>;
}

// COMPLETE REDUX FLOW EXAMPLE
// Action: user clicked button
// → Dispatch: { type: 'INCREMENT' }
// → Reducer: (0, { type: 'INCREMENT' }) => 1
// → Store: state = 1
// → Subscribers notified
// → Component re-renders with new state`,
    language: "jsx",
    commonMistakes: [
      "Mutating state directly in reducer",
      "Using Redux for simple apps",
      "Not using Redux Toolkit (outdated approach)",
      "Putting all state in Redux",
      "Not memoizing selectors",
    ],
    interviewTip:
      "Explain Redux flow clearly and show Redux Toolkit as modern approach.",
  },

  {
    id: "state-mgmt-3",
    topic: "State Management",
    question: "What are alternative state management solutions to Redux?",
    difficulty: "Intermediate",
    shortAnswer:
      "Zustand, Recoil, Jotai, MobX are lightweight alternatives. Choose based on complexity and preferences.",
    detailedAnswer: `ALTERNATIVE STATE MANAGEMENT:

1. ZUSTAND:
- Lightweight (2KB)
- Simple API
- Built-in DevTools
- TypeScript support
- Good for medium apps

2. RECOIL:
- Atomic state management
- Experimental (from Facebook/Meta)
- Fine-grained reactivity
- Built-in async support
- Good for complex UIs

3. JOTAI:
- Inspired by Recoil
- Simpler API
- 4KB bundle size
- Works with async
- TypeScript first

4. MOBX:
- Observable-based
- Automatic tracking
- Decorators syntax
- Less boilerplate
- Good for OOP developers

5. CONTEXT API + HOOKS:
- Built into React
- No library needed
- Good for simple cases
- Can be verbose
- Performance considerations

COMPARISON:
- Simplicity: Zustand > Jotai > Recoil > Redux > MobX
- Bundle size: Zustand < Jotai < Recoil < MobX < Redux
- Learning curve: Zustand < Jotai < Context < Redux < Recoil
- Features: Redux > MobX > Recoil > Jotai > Zustand

CHOOSE BY:
- Small app: Context API or Zustand
- Medium app: Zustand or Jotai
- Large app: Redux or MobX
- Complex async: Recoil
- Rapid prototyping: Zustand`,
    keyPoints: [
      "Zustand: lightweight and simple",
      "Recoil: atomic with async support",
      "Jotai: lighter Recoil alternative",
      "MobX: observable-based",
      "Context: built-in but limited",
    ],
    codeExample: `// ZUSTAND
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function Counter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

// ZUSTAND with middleware
const useStore = create(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 }))
      }),
      { name: 'store' }
    )
  )
);

// RECOIL
import { atom, useRecoilState, selector } from 'recoil';

const countAtom = atom({
  key: 'count',
  default: 0
});

const doubledSelector = selector({
  key: 'doubled',
  get: ({ get }) => get(countAtom) * 2
});

function Counter() {
  const [count, setCount] = useRecoilState(countAtom);
  const doubled = useRecoilValue(doubledSelector);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}

// RECOIL with async
const userAtom = atom({
  key: 'user',
  default: selector({
    key: 'userDefault',
    get: async ({ get }) => {
      const response = await fetch('/api/user');
      return response.json();
    }
  })
});

function UserComponent() {
  const user = useRecoilValue(userAtom);
  return <div>{user.name}</div>;
}

// JOTAI
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

function Counter() {
  const [count, setCount] = useAtom(countAtom);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}

// MOBX
import { makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';

class CountStore {
  count = 0;
  
  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
    });
  }
  
  increment() {
    this.count++;
  }
}

const store = new CountStore();

const Counter = observer(() => (
  <div>
    <p>Count: {store.count}</p>
    <button onClick={() => store.increment()}>+</button>
  </div>
));

// CONTEXT API ALTERNATIVE
const CountContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(0);
  
  const value = useMemo(() => ({
    count,
    increment: () => setCount(c => c + 1)
  }), [count]);
  
  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  );
}

function useCount() {
  return useContext(CountContext);
}

function Counter() {
  const { count, increment } = useCount();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}`,
    language: "jsx",
    commonMistakes: [
      "Choosing wrong tool for app complexity",
      "Over-engineering simple state",
      "Mixing multiple state management tools",
      "Not considering bundle size",
      "Ignoring learning curve for team",
    ],
    interviewTip: "Show knowledge of multiple options and explain trade-offs.",
  },

  {
    id: "perf-opt-1",
    topic: "Performance Optimization",
    question: "How do you optimize performance in React applications?",
    difficulty: "Advanced",
    shortAnswer:
      "Use Code splitting, lazy loading, memoization, profiling, virtualization, optimistic updates, and tree shaking.",
    detailedAnswer: `PERFORMANCE OPTIMIZATION STRATEGIES:

1. CODE SPLITTING:
- Split bundle into chunks
- Load code on demand
- Reduces initial load
- React.lazy() + Suspense

2. MEMOIZATION:
- useMemo: expensive computations
- useCallback: function references
- React.memo: component re-renders
- Reselect: selector memoization

3. LAZY LOADING:
- Load components on demand
- Load images with lazy attribute
- Intersection Observer API
- Load routes on demand

4. VIRTUALIZATION:
- Only render visible items
- For long lists (10k+ items)
- Libraries: react-window, react-virtualized
- Massive performance gain

5. PROFILING:
- React DevTools Profiler
- Chrome DevTools Performance tab
- Identify slow components
- Measure before optimizing

6. BUNDLE ANALYSIS:
- webpack-bundle-analyzer
- Find large dependencies
- Remove unused code
- Tree shaking

7. SUSPENSE:
- Handle async components
- Show fallback UI
- Better UX
- Paired with lazy()

8. PROGRESSIVE ENHANCEMENT:
- Send critical CSS first
- Defer non-critical
- Lazy load fonts
- Async scripts

OPTIMIZATION CHECKLIST:
- Profile before optimizing
- Use DevTools Profiler
- Identify bottlenecks
- Apply targeted fixes
- Re-profile and measure`,
    keyPoints: [
      "Profile before optimizing",
      "Code splitting reduces initial load",
      "Memoization prevents re-renders",
      "Virtualization for long lists",
      "React DevTools Profiler is essential",
    ],
    codeExample: `// CODE SPLITTING with React.lazy
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
      <Dashboard />
    </Suspense>
  );
}

// ROUTE-BASED CODE SPLITTING
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function Router() {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      } />
      <Route path="/about" element={
        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
      } />
    </Routes>
  );
}

// MEMOIZATION - useMemo
function ExpensiveList({ items, sortBy }) {
  const sorted = useMemo(() => {
    return items.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.price - b.price;
    });
  }, [items, sortBy]);
  
  return (
    <ul>
      {sorted.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}

// MEMOIZATION - React.memo
const UserCard = React.memo(({ user, onDelete }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;
});

// VIRTUALIZATION - Long list
import { FixedSizeList } from 'react-window';

function LargeList({ items }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index].name}
        </div>
      )}
    </FixedSizeList>
  );
}

// INTERSECTION OBSERVER - Lazy load images
function LazyImage({ src, alt }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState();
  
  useEffect(() => {
    let observer;
    if (imageRef && imageSrc === null) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(imageRef);
    }
    return () => observer?.disconnect();
  }, [imageRef, imageSrc, src]);
  
  return (
    <img
      ref={setImageRef}
      src={imageSrc || 'placeholder.jpg'}
      alt={alt}
    />
  );
}

// SUSPENSE with Concurrent Features
import { startTransition } from 'react';

function SearchUsers({ query }) {
  const [results, setResults] = useState([]);
  
  const handleSearch = (newQuery) => {
    startTransition(() => {
      const filtered = users.filter(u => 
        u.name.includes(newQuery)
      );
      setResults(filtered);
    });
  };
  
  return (
    <Suspense fallback={<Skeleton />}>
      <Results results={results} />
    </Suspense>
  );
}

// PROFILING with React DevTools
// 1. Open React DevTools
// 2. Go to Profiler tab
// 3. Click Record
// 4. Interact with app
// 5. Click Stop
// 6. Analyze which components re-render
// 7. Identify performance bottlenecks

// IDENTIFYING SLOW RENDERS
function SlowComponent() {
  console.time('render');
  // Component logic
  console.timeEnd('render');
  
  return <div>Slow</div>;
}

// WEB VITALS MONITORING
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);`,
    language: "jsx",
    commonMistakes: [
      "Over-optimizing without profiling",
      "Using useCallback/useMemo everywhere",
      "Not using React.lazy for code splitting",
      "Not memoizing expensive selectors",
      "Ignoring virtualization for large lists",
    ],
    interviewTip:
      "Emphasize profiling first, then optimization. Show understanding of multiple techniques.",
  },

  {
    id: "perf-opt-2",
    topic: "Performance Optimization",
    question: "What are React.memo, PureComponent, and shouldComponentUpdate?",
    difficulty: "Intermediate",
    shortAnswer:
      "React.memo prevents re-render if props unchanged. PureComponent/shouldComponentUpdate do same for class components.",
    detailedAnswer: `PREVENTING UNNECESSARY RE-RENDERS:

REACT.MEMO (Functional):
- Memoizes functional components
- Shallow compares props
- Custom comparison function optional
- Only re-renders if props change
- Wrap component to use

PURECOMPONENT (Class):
- Extends PureComponent instead of Component
- Automatic shallow prop/state comparison
- Prevents re-render if unchanged
- No need for shouldComponentUpdate

SHOULDCOMPONENTUPDATE (Class):
- Manual control over re-renders
- Called before render
- Return false to skip render
- Used with Component (not PureComponent)

SHALLOW VS DEEP COMPARISON:
- Shallow: checks reference equality
- Objects/arrays need new reference to detect change
- Deep: recursive comparison (expensive)

WHEN TO USE:
1. Heavy rendering components
2. Pure components (same props = same output)
3. NOT for all components (overhead)
4. Use profiler to identify bottlenecks

CUSTOM COMPARISON:
React.memo(Component, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps); // true = skip render
});`,
    keyPoints: [
      "React.memo for functional, PureComponent for class",
      "Prevents re-render on props unchanged",
      "Shallow comparison only",
      "Use when needed, not everywhere",
      "Custom comparison function possible",
    ],
    codeExample: `// REACT.MEMO - Basic
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.name}</div>;
});

// Only re-renders if props change
<MyComponent name="Alice" /> → <MyComponent name="Alice" />
// No re-render

<MyComponent name="Alice" /> → <MyComponent name="Bob" />
// Re-render because name changed

// REACT.MEMO with custom comparison
const CustomMemo = React.memo(
  function MyComponent(props) {
    return <div>{props.data.value}</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    // Return false if props are different (do re-render)
    return prevProps.data.value === nextProps.data.value;
  }
);

// PURECOMPONENT - Class
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}

// Automatically does shallow comparison
// Equivalent to implementing shouldComponentUpdate

// SHOULDCOMPONENTUPDATE - Class
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Return true to update, false to skip
    return (
      this.props.name !== nextProps.name ||
      this.state.count !== nextState.count
    );
  }
  
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

// MEMO WITH FUNCTIONS (needs useCallback)
const UserCard = React.memo(({ user, onDelete }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
});

function ParentBad() {
  const handleDelete = (id) => { /* ... */ };
  // handleDelete is new every render!
  // UserCard re-renders even with same user
  return <UserCard user={user} onDelete={handleDelete} />;
}

function ParentGood() {
  const handleDelete = useCallback((id) => {
    // ...
  }, []);
  // handleDelete same reference, no re-render
  return <UserCard user={user} onDelete={handleDelete} />;
}

// MEMO WITH OBJECTS
const ConfigComponent = React.memo(({ config }) => {
  return <div>{config.theme}</div>;
});

function ParentBad() {
  return <ConfigComponent config={{ theme: 'dark' }} />;
  // New object every render, always re-renders
}

function ParentGood() {
  const config = useMemo(() => ({ theme: 'dark' }), []);
  return <ConfigComponent config={config} />;
  // Same object reference, no re-render
}

// COMPARING APPROACHES
// Component that doesn't benefit from memo
function SimpleComponent({ text }) {
  return <p>{text}</p>; // Very fast, memo overhead not worth it
}

// Component that benefits from memo
const HeavyComponent = React.memo(function HeavyComponent({ data }) {
  return (
    <div>
      {data.items.map((item, i) => (
        <ExpensiveCalculation key={i} item={item} />
      ))}
    </div>
  );
});

// COMMON MISTAKE
const BadMemo = React.memo(
  function BadMemo(props) {
    const handler = () => props.onClick(); // New function every render
    return <button onClick={handler}>Click</button>;
  }
);

// CORRECT APPROACH
const GoodMemo = React.memo(
  function GoodMemo(props) {
    return <button onClick={props.onClick}>Click</button>;
    // Pass onClick directly
  }
);`,
    language: "jsx",
    commonMistakes: [
      "Using memo on all components (unnecessary overhead)",
      "Passing new objects/functions without useMemo/useCallback",
      "Misunderstanding shallow vs deep comparison",
      "Not profiling to identify bottlenecks",
      "Custom comparison function with complex logic",
    ],
    interviewTip:
      "Emphasize profiling first and using memo strategically only where needed.",
  },

  {
    id: "coding-1",
    topic: "Practical Coding",
    question:
      "Build a custom useForm hook that handles form state, validation, and submission.",
    difficulty: "coding",
    shortAnswer:
      "Create hook managing form values, errors, touched fields, submission, and reset functionality.",
    detailedAnswer: `Custom form hook should handle:
1. Form values state
2. Form validation
3. Field touched tracking
4. Form submission
5. Error messages
6. Reset functionality

FEATURES:
- Manage multiple form fields
- Validation on change/blur
- Display errors conditionally
- Handle form submission
- Reset form to initial state

USAGE:
const { values, errors, handleChange, handleSubmit } = useForm(
  initialValues,
  validate,
  onSubmit
);`,
    keyPoints: [
      "Manages form state with useState",
      "Tracks touched fields for error display",
      "Custom validation function",
      "Handles submission and reset",
      "Returns values, errors, handlers",
    ],
    codeExample: `// CUSTOM FORM HOOK
function useForm(initialValues, validate, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error on change
    if (touched[name]) {
      const fieldErrors = validate({ ...values, [name]: value });
      setErrors(fieldErrors);
    }
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate on blur
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    setTouched(Object.keys(initialValues).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {}));
    
    // Check if there are errors
    if (Object.keys(fieldErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };
  
  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues
  };
}

// USAGE
function LoginForm() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useForm(
    { email: '', password: '' },
    (values) => {
      const errors = {};
      
      if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\\S+@\\S+\\.\\S+/.test(values.email)) {
        errors.email = 'Invalid email';
      }
      
      if (!values.password) {
        errors.password = 'Password required';
      } else if (values.password.length < 6) {
        errors.password = 'Password too short';
      }
      
      return errors;
    },
    async (values) => {
      await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(values)
      });
    }
  );
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <p style={{ color: 'red' }}>{errors.email}</p>
        )}
      </div>
      
      <div>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p style={{ color: 'red' }}>{errors.password}</p>
        )}
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
}

// ADVANCED - Form library like Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AdvancedForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });
  
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values) => console.log(values)
  });
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <input {...formik.getFieldProps('email')} />
      <input {...formik.getFieldProps('password')} />
      <button type="submit">Submit</button>
    </form>
  );
}`,
    language: "jsx",
    commonMistakes: [
      "Not tracking touched fields",
      "Validating on every change (expensive)",
      "Not handling async submission",
      "Missing error display logic",
      "Not resetting form after submission",
    ],
    interviewTip:
      "Show understanding of form handling patterns and mention existing libraries.",
  },

  {
    id: "coding-2",
    topic: "Practical Coding",
    question:
      "Implement a custom hook useAsync for handling async data fetching with loading, error, and data states.",
    difficulty: "coding",
    shortAnswer:
      "Create hook handling async operations with loading, error, and success states. Handle cleanup and cancellation.",
    detailedAnswer: `useAsync hook should:
1. Handle async operations
2. Manage loading state
3. Handle errors gracefully
4. Store fetched data
5. Support manual execution
6. Clean up on unmount
7. Cancel requests if unmounted

FEATURES:
- Execute async function
- Track loading/error/data states
- Handle race conditions
- Auto cleanup
- Retry functionality (optional)

USE CASES:
- Fetch data on mount
- Manual async triggers
- Form submission
- Search with debouncing`,
    keyPoints: [
      "Manages async operation states",
      "Handles cleanup on unmount",
      "Prevents state updates after unmount",
      "Can execute manually or on mount",
      "Handles errors gracefully",
    ],
    codeExample: `// CUSTOM ASYNC HOOK
function useAsync(asyncFunction, immediate = true, deps = []) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  const execute = useCallback(async () => {
    setStatus('pending');
    setData(null);
    setError(null);
    
    try {
      const response = await asyncFunction();
      setData(response);
      setStatus('success');
      return response;
    } catch (err) {
      setError(err);
      setStatus('error');
    }
  }, [asyncFunction]);
  
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  
  return { status, data, error, execute };
}

// USAGE - Fetch on mount
function UserProfile({ userId }) {
  const { status, data: user, error } = useAsync(
    () => fetch(\`/api/user/\${userId}\`).then(r => r.json()),
    true,
    [userId]
  );
  
  if (status === 'pending') return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;
  if (status === 'success') return <p>{user.name}</p>;
}

// IMPROVED - Handle unmounted component
function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  const execute = useCallback(async () => {
    setStatus('pending');
    let isMounted = true;
    
    try {
      const response = await asyncFunction();
      if (isMounted) {
        setData(response);
        setStatus('success');
      }
      return response;
    } catch (err) {
      if (isMounted) {
        setError(err);
        setStatus('error');
      }
    }
  }, [asyncFunction]);
  
  useEffect(() => {
    if (immediate) {
      execute();
    }
    
    // Cleanup
    return () => {
      isMounted = false;
    };
  }, [execute, immediate]);
  
  return { status, data, error, execute };
}

// USAGE - Manual execution (debounced search)
function SearchUsers() {
  const [query, setQuery] = useState('');
  const {
    status,
    data: results,
    error,
    execute
  } = useAsync(
    () => fetch(\`/api/search?q=\${query}\`).then(r => r.json()),
    false // Don't run immediately
  );
  
  const handleSearch = useCallback((value) => {
    setQuery(value);
    if (value.length > 2) {
      execute();
    }
  }, [execute]);
  
  return (
    <div>
      <input 
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search..."
      />
      {status === 'pending' && <p>Searching...</p>}
      {status === 'error' && <p>Error: {error.message}</p>}
      {status === 'success' && (
        <ul>
          {results.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ADVANCED - With retry and abort
function useAsync(asyncFunction, options = {}) {
  const {
    immediate = true,
    onSuccess = null,
    onError = null,
    maxRetries = 0
  } = options;
  
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const retriesRef = useRef(0);
  const abortControllerRef = useRef(null);
  
  const execute = useCallback(async () => {
    setStatus('pending');
    abortControllerRef.current = new AbortController();
    
    try {
      const response = await asyncFunction(abortControllerRef.current.signal);
      setData(response);
      setStatus('success');
      onSuccess?.(response);
      retriesRef.current = 0;
      return response;
    } catch (err) {
      if (err.name === 'AbortError') return;
      
      if (retriesRef.current < maxRetries) {
        retriesRef.current++;
        setTimeout(execute, 1000); // Retry after 1s
        return;
      }
      
      setError(err);
      setStatus('error');
      onError?.(err);
    }
  }, [asyncFunction, onSuccess, onError, maxRetries]);
  
  useEffect(() => {
    if (immediate) {
      execute();
    }
    
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [execute, immediate]);
  
  return {
    status,
    data,
    error,
    execute,
    abort: () => abortControllerRef.current?.abort()
  };
}`,
    language: "jsx",
    commonMistakes: [
      "Not handling unmounted component state updates",
      "Not canceling requests on unmount",
      "Not tracking isMounted with ref",
      "Missing error handling",
      "Not supporting retry",
    ],
    interviewTip:
      "Show understanding of async patterns and memory leak prevention.",
  },

  {
    id: "coding-3",
    topic: "Practical Coding",
    question:
      "Implement a debounced search component that fetches results as user types.",
    difficulty: "coding",
    shortAnswer:
      "Create component with debounced input that searches API only after user stops typing for delay time.",
    detailedAnswer: `Debounced search should:
1. Delay API calls while typing
2. Cancel previous request
3. Show loading state
4. Handle errors
5. Display results

KEY CONCEPTS:
- Debouncing: delay execution
- Throttling: limit execution frequency
- useEffect cleanup for cancellation
- AbortController for fetch cancellation`,
    keyPoints: [
      "Debounce delays API calls",
      "Cancel previous requests",
      "Handle loading and errors",
      "Update on each keystroke",
      "Cleanup on unmount",
    ],
    codeExample: `// DEBOUNCE FUNCTION
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// SIMPLE DEBOUNCED SEARCH
function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }
      
      setLoading(true);
      try {
        const response = await fetch(\`/api/search?q=\${query}\`);
        const data = await response.json();
        setResults(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 300); // 300ms delay
    
    return () => clearTimeout(timer);
  }, [query]);
  
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

// CUSTOM DEBOUNCE HOOK
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
}

// USING DEBOUNCE HOOK
function SearchWithHook() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }
    
    const fetchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(\`/api/search?q=\${debouncedQuery}\`);
        const data = await response.json();
        setResults(data);
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [debouncedQuery]);
  
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

// ADVANCED - With AbortController
function SearchWithCancel() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query) {
        setResults([]);
        return;
      }
      
      // Cancel previous request
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      
      setLoading(true);
      try {
        const response = await fetch(\`/api/search?q=\${query}\`, {
          signal: abortControllerRef.current.signal
        });
        const data = await response.json();
        setResults(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    }, 300);
    
    return () => {
      clearTimeout(timer);
      abortControllerRef.current?.abort();
    };
  }, [query]);
  
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

// DEBOUNCE vs THROTTLE
// Debounce: Wait until user stops (delay before first trigger)
// Throttle: Execute every interval while continuing (trigger during)

function useThrottle(value, delay = 300) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRanRef = useRef(Date.now());
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRanRef.current >= delay) {
        setThrottledValue(value);
        lastRanRef.current = Date.now();
      }
    }, delay - (Date.now() - lastRanRef.current));
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return throttledValue;
}`,
    language: "jsx",
    commonMistakes: [
      "Not clearing previous timers",
      "Not canceling previous requests",
      "Using query directly instead of debounced value",
      "Missing cleanup in useEffect",
      "Confusing debounce and throttle",
    ],
    interviewTip:
      "Explain debounce vs throttle and show AbortController for cancellation.",
  },

  {
    id: "coding-4",
    topic: "Practical Coding",
    question:
      "Build a pagination component that fetches data by page and handles loading/error states.",
    difficulty: "coding",
    shortAnswer:
      "Create component with page navigation, data fetching per page, loading/error states, and page size control.",
    detailedAnswer: `Pagination component should:
1. Display current page items
2. Show total pages
3. Navigate between pages
4. Fetch on page change
5. Handle loading states
6. Display errors
7. Allow page size control

FEATURES:
- Previous/Next buttons
- Page numbers
- Jump to specific page
- Configurable items per page
- Loading indicators
- Error messages`,
    keyPoints: [
      "Manages current page state",
      "Fetches data on page change",
      "Displays loading/error states",
      "Calculates total pages",
      "Handles page size changes",
    ],
    codeExample: `// PAGINATION COMPONENT
function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          \`/api/items?page=\${currentPage}&pageSize=\${pageSize}\`
        );
        const result = await response.json();
        setData(result.items);
        setTotalPages(result.totalPages);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [currentPage, pageSize]);
  
  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };
  
  const handlePageSize = (e) => {
    setPageSize(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page
  };
  
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      
      <div>
        <label>
          Items per page:
          <select value={pageSize} onChange={handlePageSize}>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </label>
      </div>
      
      <div>
        <button 
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        <span>
          Page {currentPage} of {totalPages}
        </span>
        
        <button 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// ADVANCED - Page numbers and jump
function AdvancedPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 10;
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          \`/api/items?page=\${currentPage}&pageSize=\${pageSize}\`
        );
        const result = await response.json();
        setData(result.items);
        setTotalPages(result.totalPages);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [currentPage]);
  
  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push('...');
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <button 
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          &larr; Prev
        </button>
        
        {getPageNumbers().map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            disabled={page === '...' || page === currentPage}
            style={{
              fontWeight: page === currentPage ? 'bold' : 'normal',
              backgroundColor: page === currentPage ? '#007bff' : 'white',
              color: page === currentPage ? 'white' : 'black'
            }}
          >
            {page}
          </button>
        ))}
        
        <button 
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next &rarr;
        </button>
        
        <input
          type="number"
          min="1"
          max={totalPages}
          value={currentPage}
          onChange={(e) => {
            const page = Math.min(
              Math.max(parseInt(e.target.value) || 1, 1),
              totalPages
            );
            setCurrentPage(page);
          }}
          style={{ width: '60px' }}
        />
      </div>
    </div>
  );
}`,
    language: "jsx",
    commonMistakes: [
      "Not resetting page on page size change",
      "Not disabling navigation when at limits",
      "Fetching unnecessarily",
      "Not handling loading states",
      "Missing error boundaries",
    ],
    interviewTip:
      "Show understanding of state management and pagination logic.",
  },
];

// Export for use in React app
export default reactQuestions;
export { reactQuestions };
