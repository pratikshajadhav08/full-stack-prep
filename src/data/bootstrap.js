export const bootstrapQuestions = [
  {
    id: "bootstrap-1",

    question: "What is Bootstrap?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap is a popular open-source CSS framework used to build responsive and mobile-first websites quickly.",

    detailedAnswer: `Bootstrap is a front-end framework originally developed by Twitter.

It provides:

- Responsive Grid System
- Prebuilt Components
- Utility Classes
- JavaScript Plugins
- Mobile-First Design

Bootstrap helps developers create modern websites faster without writing large amounts of CSS from scratch.`,

    keyPoints: [
      "Open-source CSS framework",

      "Mobile-first approach",

      "Responsive design support",

      "Prebuilt UI components",

      "Speeds up development",
    ],

    codeExample: `<!-- Bootstrap Button -->

<button

class="btn btn-primary">

Click Me

</button>`,

    language: "bootstrap",

    commonMistakes: [
      "Not including Bootstrap CSS",

      "Using outdated versions",

      "Ignoring responsive classes",

      "Overriding Bootstrap unnecessarily",

      "Not understanding the grid system",
    ],

    thinkingProcess: `Step 1: Include Bootstrap

Step 2: Use Bootstrap classes

Step 3: Build responsive layouts

Step 4: Add components

Step 5: Customize when needed`,

    realWorldApplication:
      "Used in dashboards, landing pages, business websites, and admin panels.",

    interviewTip:
      "Bootstrap is a mobile-first CSS framework that provides responsive layouts and ready-made components.",
  },
  {
    id: "bootstrap-2",

    question: "What are the features of Bootstrap?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap offers responsive layouts, reusable UI components, utility classes, and JavaScript plugins.",

    detailedAnswer: `Bootstrap includes many features that simplify front-end development.

Major Features:

- Responsive Grid System
- Mobile-First Design
- Prebuilt Components
- Utility Classes
- JavaScript Components
- Cross-Browser Compatibility

These features help developers build professional interfaces quickly.`,

    keyPoints: [
      "Responsive grid system",

      "Reusable UI components",

      "Utility classes",

      "JavaScript plugins",

      "Cross-browser support",
    ],

    codeExample: `<!-- Bootstrap Card -->

<div

class="card">

<div

class="card-body">

Bootstrap Card

</div>

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Using too many utility classes",

      "Ignoring responsiveness",

      "Not utilizing components",

      "Over-customizing Bootstrap",

      "Poor layout planning",
    ],

    thinkingProcess: `Step 1: Learn grid system

Step 2: Explore components

Step 3: Use utility classes

Step 4: Build layouts

Step 5: Optimize responsiveness`,

    realWorldApplication:
      "Used in corporate websites, admin dashboards, and web applications.",

    interviewTip:
      "The biggest strengths of Bootstrap are responsiveness, components, and development speed.",
  },
  {
    id: "bootstrap-3",

    question: "How do you include Bootstrap in a project?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap can be included using a CDN link or installed locally using npm.",

    detailedAnswer: `There are multiple ways to use Bootstrap.

Method 1:

CDN

Quick and easy for small projects.

Method 2:

Download Bootstrap files.

Method 3:

Install using npm.

CDN is the most common approach for beginners and interview examples.`,

    keyPoints: [
      "Can use CDN",

      "Can install via npm",

      "Easy setup",

      "Works with HTML projects",

      "Supports modern frameworks",
    ],

    codeExample: `<!-- Bootstrap CSS -->

<link

rel="stylesheet"

href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">`,

    language: "bootstrap",

    commonMistakes: [
      "Wrong CDN link",

      "Missing Bootstrap JS",

      "Using incompatible version",

      "Incorrect file order",

      "Forgetting internet dependency with CDN",
    ],

    thinkingProcess: `Step 1: Choose installation method

Step 2: Add Bootstrap CSS

Step 3: Add Bootstrap JS

Step 4: Test components

Step 5: Start development`,

    realWorldApplication: "Used in almost every Bootstrap-based web project.",

    interviewTip:
      "The fastest way to add Bootstrap is through the official CDN.",
  },
  {
    id: "bootstrap-4",

    question: "What is the Bootstrap Grid System?",

    difficulty: "basic",

    shortAnswer:
      "The Bootstrap Grid System is a 12-column layout system used to create responsive web page layouts.",

    detailedAnswer: `The Bootstrap Grid System is based on 12 columns.

Structure:

Container
↓

Row
↓

Columns

Example:

col-6 = 50% width

col-4 = 33.33% width

col-12 = 100% width

The grid automatically adjusts across different screen sizes.`,

    keyPoints: [
      "12-column system",

      "Responsive layouts",

      "Uses rows and columns",

      "Mobile-first design",

      "Flexible structure",
    ],

    codeExample: `<div

class="container">

<div

class="row">

<div

class="col-6">

Left

</div>

<div

class="col-6">

Right

</div>

</div>

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Columns exceeding 12",

      "Missing row element",

      "Not using container",

      "Ignoring breakpoints",

      "Poor grid planning",
    ],

    thinkingProcess: `Step 1: Create container

Step 2: Add row

Step 3: Add columns

Step 4: Assign widths

Step 5: Test responsiveness`,

    realWorldApplication:
      "Used to build responsive websites and dashboard layouts.",

    interviewTip:
      "Bootstrap layouts are built using a 12-column responsive grid.",
  },
  {
    id: "bootstrap-5",

    question: "What are Containers in Bootstrap?",

    difficulty: "basic",

    shortAnswer:
      "Containers are layout wrappers that provide proper alignment and spacing for Bootstrap content.",

    detailedAnswer: `Containers are the foundation of Bootstrap layouts.

Types:

1. .container

Responsive fixed-width container.

2. .container-fluid

Full-width container.

3. .container-{breakpoint}

Responsive container based on screen size.

Most Bootstrap layouts begin with a container.`,

    keyPoints: [
      "Layout wrapper",

      "Provides spacing",

      "Centers content",

      "Supports responsive layouts",

      "Foundation of grid system",
    ],

    codeExample: `<div

class="container">

<h1>

Hello Bootstrap

</h1>

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Using wrong container type",

      "Nesting containers unnecessarily",

      "Ignoring responsiveness",

      "Using fluid container incorrectly",

      "Skipping container in layouts",
    ],

    thinkingProcess: `Step 1: Select container type

Step 2: Wrap content

Step 3: Add rows

Step 4: Add columns

Step 5: Build layout`,

    realWorldApplication:
      "Used in every Bootstrap website for layout structure and responsiveness.",

    interviewTip:
      "Containers provide the base structure for Bootstrap layouts and grids.",
  },
  {
    id: "bootstrap-6",

    question: "Difference between .container and .container-fluid?",

    difficulty: "basic",

    shortAnswer:
      ".container provides a responsive fixed-width layout, while .container-fluid always takes 100% width of the viewport.",

    detailedAnswer: `Bootstrap provides different container types for layout control.

.container:

- Responsive fixed width
- Changes width at breakpoints
- Centers content

.container-fluid:

- Always 100% width
- Stretches across entire screen
- Useful for full-width layouts

Choosing the correct container depends on your design requirements.`,

    keyPoints: [
      ".container is fixed-width",

      ".container-fluid is full-width",

      "Both support responsive layouts",

      "Used as layout wrappers",

      "Foundation of Bootstrap grid",
    ],

    codeExample: `<div class="container">

Content Here

</div>

<div class="container-fluid">

Full Width Content

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Using fluid container unnecessarily",

      "Confusing width behavior",

      "Ignoring responsiveness",

      "Mixing container types incorrectly",

      "Poor layout planning",
    ],

    thinkingProcess: `Step 1: Identify layout needs

Step 2: Choose container type

Step 3: Wrap content

Step 4: Build grid

Step 5: Test responsiveness`,

    realWorldApplication:
      "Used in websites, dashboards, landing pages, and admin panels.",

    interviewTip:
      ".container = fixed responsive width, .container-fluid = full screen width.",
  },

  {
    id: "bootstrap-7",

    question: "What are Rows and Columns?",

    difficulty: "basic",

    shortAnswer:
      "Rows and Columns are the core building blocks of the Bootstrap Grid System.",

    detailedAnswer: `Bootstrap layouts are structured using rows and columns.

Row:

- Horizontal wrapper
- Contains columns

Column:

- Holds content
- Occupies grid space

Structure:

Container
↓

Row
↓

Column

Columns inside a row should total 12 units or less.`,

    keyPoints: [
      "Rows contain columns",

      "Columns hold content",

      "Part of grid system",

      "Responsive layout structure",

      "Based on 12 columns",
    ],

    codeExample: `<div class="row">

<div class="col-4">

Column 1

</div>

<div class="col-8">

Column 2

</div>

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Using columns without rows",

      "Exceeding 12 columns",

      "Missing container",

      "Poor layout planning",

      "Ignoring breakpoints",
    ],

    thinkingProcess: `Step 1: Create container

Step 2: Add row

Step 3: Add columns

Step 4: Define widths

Step 5: Test layout`,

    realWorldApplication: "Used in all responsive Bootstrap layouts.",

    interviewTip: "Rows organize columns, and columns organize content.",
  },

  {
    id: "bootstrap-8",

    question: "Explain Bootstrap Breakpoints.",

    difficulty: "basic",

    shortAnswer:
      "Breakpoints define screen sizes where Bootstrap adjusts layouts for responsive design.",

    detailedAnswer: `Bootstrap uses breakpoints to adapt layouts across devices.

Common Breakpoints:

- sm ≥ 576px
- md ≥ 768px
- lg ≥ 992px
- xl ≥ 1200px
- xxl ≥ 1400px

Example:

col-md-6

Means:

- Full width on small screens
- Half width on medium screens and above

Breakpoints make websites mobile-friendly.`,

    keyPoints: [
      "Enable responsiveness",

      "Different screen sizes",

      "Mobile-first approach",

      "Used with grid system",

      "Core Bootstrap feature",
    ],

    codeExample: `<div

class="col-md-6">

Content

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Using wrong breakpoint",

      "Ignoring mobile devices",

      "Overusing breakpoints",

      "Poor responsive testing",

      "Confusing breakpoint sizes",
    ],

    thinkingProcess: `Step 1: Identify devices

Step 2: Choose breakpoint

Step 3: Apply classes

Step 4: Test screens

Step 5: Optimize layout`,

    realWorldApplication:
      "Used to create responsive websites that work across phones, tablets, and desktops.",

    interviewTip:
      "Bootstrap follows a mobile-first responsive design strategy.",
  },

  {
    id: "bootstrap-9",

    question: "What are Bootstrap Utility Classes?",

    difficulty: "basic",

    shortAnswer:
      "Utility classes are predefined Bootstrap classes used for spacing, alignment, sizing, colors, and display properties.",

    detailedAnswer: `Bootstrap provides utility classes that eliminate the need for custom CSS in many situations.

Examples:

Spacing:

- mt-3
- p-4

Text:

- text-center
- text-primary

Display:

- d-flex
- d-none

Utilities help build layouts quickly and consistently.`,

    keyPoints: [
      "Predefined helper classes",

      "Reduce custom CSS",

      "Fast development",

      "Consistent styling",

      "Highly reusable",
    ],

    codeExample: `<div

class="mt-4 text-center">

Hello Bootstrap

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Overusing utility classes",

      "Ignoring readability",

      "Mixing conflicting utilities",

      "Not understanding class purpose",

      "Using custom CSS unnecessarily",
    ],

    thinkingProcess: `Step 1: Identify styling need

Step 2: Find utility class

Step 3: Apply class

Step 4: Verify result

Step 5: Avoid redundant CSS`,

    realWorldApplication:
      "Used in dashboards, forms, cards, and responsive layouts.",

    interviewTip:
      "Utility classes speed up development by replacing common CSS rules.",
  },

  {
    id: "bootstrap-10",

    question: "What is Responsive Design in Bootstrap?",

    difficulty: "basic",

    shortAnswer:
      "Responsive Design in Bootstrap ensures websites adapt automatically to different screen sizes and devices.",

    detailedAnswer: `Responsive design allows a website to look good on:

- Mobile Phones
- Tablets
- Laptops
- Desktops

Bootstrap achieves responsiveness using:

- Grid System
- Breakpoints
- Responsive Utilities
- Flexible Components

This approach improves usability and user experience across devices.`,

    keyPoints: [
      "Mobile-first approach",

      "Adapts to screen sizes",

      "Uses breakpoints",

      "Improves user experience",

      "Core Bootstrap principle",
    ],

    codeExample: `<div

class="col-12 col-md-6">

Responsive Column

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Ignoring mobile devices",

      "Not testing layouts",

      "Poor breakpoint selection",

      "Fixed-width designs",

      "Improper grid usage",
    ],

    thinkingProcess: `Step 1: Design mobile layout

Step 2: Add breakpoints

Step 3: Use responsive grid

Step 4: Test devices

Step 5: Optimize experience`,

    realWorldApplication:
      "Used in modern websites, web apps, e-commerce platforms, and dashboards.",

    interviewTip:
      "Responsive design ensures one website works well on all devices.",
  },
  {
    id: "bootstrap-11",

    question: "What are Bootstrap Buttons?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Buttons are pre-styled button components used to create attractive and responsive buttons quickly.",

    detailedAnswer: `Bootstrap provides various button classes for different purposes.

Common Button Classes:

- btn-primary
- btn-secondary
- btn-success
- btn-danger
- btn-warning
- btn-info

Buttons can also have different sizes and states.

Bootstrap buttons help maintain a consistent UI throughout the application.`,

    keyPoints: [
      "Pre-styled buttons",

      "Multiple color variants",

      "Responsive design",

      "Easy customization",

      "Consistent UI",
    ],

    codeExample: `<button

class="btn btn-primary">

Save

</button>`,

    language: "bootstrap",

    commonMistakes: [
      "Forgetting btn class",

      "Using wrong button type",

      "Too many button styles",

      "Poor accessibility",

      "Inconsistent button usage",
    ],

    thinkingProcess: `Step 1: Choose button style

Step 2: Add btn class

Step 3: Add variant class

Step 4: Test interaction

Step 5: Ensure accessibility`,

    realWorldApplication:
      "Used in forms, dashboards, landing pages, and web applications.",

    interviewTip:
      "Bootstrap buttons use the btn class combined with variant classes like btn-primary.",
  },

  {
    id: "bootstrap-12",

    question: "What are Bootstrap Cards?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Cards are flexible content containers used to display information in a structured layout.",

    detailedAnswer: `Cards are one of Bootstrap's most popular components.

A card can contain:

- Images
- Titles
- Text
- Buttons
- Links

Cards replace older panel and thumbnail components and provide a modern UI design.`,

    keyPoints: [
      "Flexible content container",

      "Supports images and text",

      "Modern UI component",

      "Reusable layout",

      "Easy customization",
    ],

    codeExample: `<div class="card">

<div class="card-body">

<h5 class="card-title">

Product

</h5>

<p class="card-text">

Description

</p>

</div>

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Incorrect card structure",

      "Overcrowding content",

      "Missing card-body",

      "Poor spacing",

      "Ignoring responsiveness",
    ],

    thinkingProcess: `Step 1: Create card

Step 2: Add card-body

Step 3: Insert content

Step 4: Style card

Step 5: Test layout`,

    realWorldApplication:
      "Used in product listings, blogs, dashboards, and portfolios.",

    interviewTip:
      "Cards are flexible containers used to display grouped content.",
  },

  {
    id: "bootstrap-13",

    question: "What is Navbar in Bootstrap?",

    difficulty: "basic",

    shortAnswer:
      "A Navbar is a responsive navigation component used to create website menus and navigation links.",

    detailedAnswer: `Bootstrap Navbar provides a responsive navigation system.

Features:

- Navigation Links
- Brand Logo
- Responsive Menu
- Dropdown Support
- Mobile Toggle Button

Navbars automatically collapse on smaller screens.`,

    keyPoints: [
      "Responsive navigation",

      "Supports branding",

      "Mobile-friendly",

      "Collapsible menu",

      "Supports dropdowns",
    ],

    codeExample: `<nav

class="navbar navbar-expand-lg navbar-light bg-light">

<a

class="navbar-brand"

href="#">

MySite

</a>

</nav>`,

    language: "bootstrap",

    commonMistakes: [
      "Missing navbar-expand class",

      "Broken mobile menu",

      "Poor navigation structure",

      "Ignoring accessibility",

      "Incorrect nesting",
    ],

    thinkingProcess: `Step 1: Create navbar

Step 2: Add brand

Step 3: Add links

Step 4: Configure responsiveness

Step 5: Test mobile view`,

    realWorldApplication: "Used in nearly every website and web application.",

    interviewTip:
      "Navbar is Bootstrap’s built-in responsive navigation component.",
  },

  {
    id: "bootstrap-14",

    question: "What is Bootstrap Modal?",

    difficulty: "basic",

    shortAnswer:
      "A Modal is a popup dialog component used to display content without leaving the current page.",

    detailedAnswer: `Bootstrap Modal creates overlay windows that appear above the page.

Common Uses:

- Login Forms
- Confirmation Dialogs
- Notifications
- Product Details

Features:

- Backdrop overlay
- Close button
- Keyboard support
- Responsive design`,

    keyPoints: [
      "Popup component",

      "Displays content dynamically",

      "Improves user experience",

      "Supports forms",

      "Responsive design",
    ],

    codeExample: `<button

class="btn btn-primary"

data-bs-toggle="modal"

data-bs-target="#myModal">

Open Modal

</button>`,

    language: "bootstrap",

    commonMistakes: [
      "Wrong modal ID",

      "Missing Bootstrap JS",

      "Nested modals",

      "Poor accessibility",

      "Not closing modal properly",
    ],

    thinkingProcess: `Step 1: Create modal

Step 2: Add trigger button

Step 3: Add content

Step 4: Configure behavior

Step 5: Test interactions`,

    realWorldApplication:
      "Used for forms, alerts, confirmations, and user interactions.",

    interviewTip:
      "Modals display content in a popup without navigating away from the page.",
  },

  {
    id: "bootstrap-15",

    question: "What is Bootstrap Carousel?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Carousel is a slideshow component used to cycle through images or content automatically.",

    detailedAnswer: `Carousel allows displaying multiple slides within a single component.

Features:

- Automatic sliding
- Manual controls
- Indicators
- Responsive design

Common Uses:

- Hero Sections
- Product Showcases
- Image Galleries
- Marketing Banners

Bootstrap provides built-in JavaScript functionality for carousels.`,

    keyPoints: [
      "Image slider component",

      "Supports automatic transitions",

      "Responsive design",

      "Includes controls",

      "Popular landing page feature",
    ],

    codeExample: `<div

id="carouselExample"

class="carousel slide">

<div

class="carousel-inner">

<div

class="carousel-item active">

<img

src="image.jpg"

class="d-block w-100">

</div>

</div>

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "No active slide",

      "Large image sizes",

      "Poor mobile optimization",

      "Too many slides",

      "Missing controls",
    ],

    thinkingProcess: `Step 1: Create carousel

Step 2: Add slides

Step 3: Mark active slide

Step 4: Add controls

Step 5: Test responsiveness`,

    realWorldApplication:
      "Used in landing pages, e-commerce websites, portfolios, and galleries.",

    interviewTip:
      "Carousel is Bootstrap’s built-in slideshow component for displaying multiple items.",
  },
  {
    id: "bootstrap-16",

    question: "What is Bootstrap Alert?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Alert is a component used to display important messages, notifications, or feedback to users.",

    detailedAnswer: `Alerts provide contextual feedback messages for user actions.

Common Alert Types:

- alert-primary
- alert-success
- alert-danger
- alert-warning
- alert-info

Alerts can also be dismissible using Bootstrap JavaScript.

They are commonly used for success messages, errors, and warnings.`,

    keyPoints: [
      "Displays notifications",

      "Supports multiple styles",

      "Can be dismissible",

      "Improves user feedback",

      "Easy to implement",
    ],

    codeExample: `<div

class="alert alert-success">

Data saved successfully!

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Using wrong alert type",

      "Overusing alerts",

      "Missing dismiss functionality",

      "Poor message wording",

      "Ignoring accessibility",
    ],

    thinkingProcess: `Step 1: Identify message type

Step 2: Choose alert class

Step 3: Display message

Step 4: Add dismiss button

Step 5: Test usability`,

    realWorldApplication:
      "Used in forms, authentication pages, and dashboards.",

    interviewTip:
      "Alerts provide visual feedback for user actions and system events.",
  },

  {
    id: "bootstrap-17",

    question: "What is Bootstrap Badge?",

    difficulty: "basic",

    shortAnswer:
      "A Bootstrap Badge is a small count or label component used to highlight additional information.",

    detailedAnswer: `Badges are used to display counts, labels, or status indicators.

Examples:

- Notifications
- Message counts
- New labels
- Status indicators

Badges are lightweight and often attached to buttons, links, or headings.`,

    keyPoints: [
      "Displays counts",

      "Used as labels",

      "Small UI component",

      "Enhances visibility",

      "Supports color variants",
    ],

    codeExample: `<button

class="btn btn-primary">

Messages

<span

class="badge bg-danger">

5

</span>

</button>`,

    language: "bootstrap",

    commonMistakes: [
      "Using too many badges",

      "Poor color selection",

      "Incorrect placement",

      "Unreadable badge sizes",

      "Ignoring accessibility",
    ],

    thinkingProcess: `Step 1: Determine information

Step 2: Create badge

Step 3: Add styling

Step 4: Position correctly

Step 5: Test readability`,

    realWorldApplication:
      "Used in notification systems, messaging apps, and dashboards.",

    interviewTip:
      "Badges are commonly used to display counts and status labels.",
  },

  {
    id: "bootstrap-18",

    question: "What is Bootstrap Pagination?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Pagination is a navigation component used to move between multiple pages of content.",

    detailedAnswer: `Pagination helps divide large amounts of content into manageable pages.

Benefits:

- Improved performance
- Better user experience
- Easier navigation

Commonly used in:

- Tables
- Blogs
- Product listings
- Search results`,

    keyPoints: [
      "Page navigation",

      "Improves usability",

      "Handles large datasets",

      "Responsive component",

      "Common UI pattern",
    ],

    codeExample: `<ul

class="pagination">

<li

class="page-item">

<a

class="page-link"

href="#">

1

</a>

</li>

</ul>`,

    language: "bootstrap",

    commonMistakes: [
      "Missing active state",

      "Poor navigation design",

      "Too many page links",

      "No previous/next buttons",

      "Ignoring mobile devices",
    ],

    thinkingProcess: `Step 1: Divide data

Step 2: Create pagination

Step 3: Add links

Step 4: Highlight current page

Step 5: Test navigation`,

    realWorldApplication:
      "Used in e-commerce websites, blogs, and admin panels.",

    interviewTip:
      "Pagination improves navigation when displaying large amounts of content.",
  },

  {
    id: "bootstrap-19",

    question: "What is Bootstrap Spinner?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Spinner is a loading indicator used to show that a process is currently running.",

    detailedAnswer: `Spinners provide visual feedback while content loads.

Common Uses:

- API requests
- File uploads
- Data loading
- Form submissions

Bootstrap provides:

- Border Spinner
- Growing Spinner

They improve user experience by indicating ongoing activity.`,

    keyPoints: [
      "Loading indicator",

      "Improves user experience",

      "Shows processing state",

      "Easy implementation",

      "Multiple spinner styles",
    ],

    codeExample: `<div

class="spinner-border"

role="status">

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Not hiding spinner after loading",

      "Overusing spinners",

      "Poor placement",

      "Missing accessibility labels",

      "Using large spinners unnecessarily",
    ],

    thinkingProcess: `Step 1: Start loading

Step 2: Show spinner

Step 3: Process request

Step 4: Receive result

Step 5: Hide spinner`,

    realWorldApplication:
      "Used in dashboards, forms, and API-driven applications.",

    interviewTip: "Spinners visually indicate that data or content is loading.",
  },

  {
    id: "bootstrap-20",

    question: "What is Bootstrap Accordion?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Accordion is a collapsible content component used to show and hide sections of information.",

    detailedAnswer: `Accordion organizes content into expandable sections.

Benefits:

- Saves screen space
- Improves readability
- Organizes FAQs
- Enhances user experience

Only the required content is displayed at a time, reducing clutter.`,

    keyPoints: [
      "Collapsible sections",

      "Saves space",

      "Improves organization",

      "Interactive component",

      "Common FAQ solution",
    ],

    codeExample: `<div

class="accordion"

id="accordionExample">

<div

class="accordion-item">

<h2

class="accordion-header">

<button

class="accordion-button">

Question

</button>

</h2>

</div>

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Incorrect accordion structure",

      "Duplicate IDs",

      "Too much content",

      "Poor organization",

      "Ignoring accessibility",
    ],

    thinkingProcess: `Step 1: Create accordion

Step 2: Add items

Step 3: Add content

Step 4: Configure collapse behavior

Step 5: Test interaction`,

    realWorldApplication:
      "Used in FAQs, documentation sites, dashboards, and product information pages.",

    interviewTip:
      "Accordion allows users to expand and collapse content sections as needed.",
  },
  {
    id: "bootstrap-21",

    question: "What is Bootstrap Form?",

    difficulty: "basic",

    shortAnswer:
      "A Bootstrap Form is a collection of styled form controls used to collect user input in a responsive and consistent way.",

    detailedAnswer: `Bootstrap provides pre-designed form components that make forms look modern and responsive.

Common Form Elements:

- Input Fields
- Textareas
- Checkboxes
- Radio Buttons
- Select Dropdowns
- Buttons

Bootstrap forms automatically adapt to different screen sizes and improve user experience.`,

    keyPoints: [
      "Collects user input",

      "Responsive design",

      "Pre-styled controls",

      "Easy to customize",

      "Improves user experience",
    ],

    codeExample: `<form>

<input

type="text"

class="form-control"

placeholder="Enter Name">

</form>`,

    language: "bootstrap",

    commonMistakes: [
      "Missing form-control class",

      "Poor form layout",

      "Ignoring labels",

      "No validation",

      "Bad accessibility practices",
    ],

    thinkingProcess: `Step 1: Create form

Step 2: Add controls

Step 3: Apply Bootstrap classes

Step 4: Add validation

Step 5: Test responsiveness`,

    realWorldApplication:
      "Used in login forms, registration forms, contact forms, and data entry applications.",

    interviewTip:
      "Bootstrap forms use classes like form-control to create consistent input styling.",
  },

  {
    id: "bootstrap-22",

    question: "What are Input Groups?",

    difficulty: "basic",

    shortAnswer:
      "Input Groups allow you to combine inputs with text, buttons, or icons before or after the input field.",

    detailedAnswer: `Input Groups extend form controls by attaching extra content.

Examples:

- Currency symbols
- Search buttons
- Usernames
- Icons

This helps create cleaner and more interactive form designs.`,

    keyPoints: [
      "Enhances form inputs",

      "Supports buttons",

      "Supports icons",

      "Improves UI",

      "Easy integration",
    ],

    codeExample: `<div

class="input-group">

<span

class="input-group-text">

@

</span>

<input

type="text"

class="form-control">

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Incorrect structure",

      "Too many elements",

      "Poor spacing",

      "Misaligned controls",

      "Ignoring accessibility",
    ],

    thinkingProcess: `Step 1: Create input group

Step 2: Add addon

Step 3: Add input

Step 4: Style properly

Step 5: Test interaction`,

    realWorldApplication:
      "Used in search bars, payment forms, and login systems.",

    interviewTip:
      "Input Groups combine inputs with additional UI elements like icons or buttons.",
  },

  {
    id: "bootstrap-23",

    question: "What is Form Validation?",

    difficulty: "basic",

    shortAnswer:
      "Form Validation ensures that user input meets specific rules before the form is submitted.",

    detailedAnswer: `Validation helps prevent invalid or incomplete data from being submitted.

Types:

1. Client-Side Validation
2. Server-Side Validation

Bootstrap provides validation styles for:

- Valid Inputs
- Invalid Inputs
- Error Messages

Validation improves data quality and user experience.`,

    keyPoints: [
      "Ensures correct input",

      "Improves data quality",

      "Client-side validation",

      "Server-side validation",

      "Provides visual feedback",
    ],

    codeExample: `<input

type="email"

class="form-control is-invalid">

<div

class="invalid-feedback">

Enter a valid email.

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Only using client-side validation",

      "Poor error messages",

      "Ignoring accessibility",

      "No required fields",

      "Skipping validation completely",
    ],

    thinkingProcess: `Step 1: Define rules

Step 2: Validate input

Step 3: Show feedback

Step 4: Fix errors

Step 5: Submit form`,

    realWorldApplication:
      "Used in authentication systems, registration forms, and payment forms.",

    interviewTip:
      "Bootstrap uses classes like is-valid and is-invalid to display validation states.",
  },

  {
    id: "bootstrap-24",

    question: "What is Bootstrap Table?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Table is a styled table component used to display structured data in rows and columns.",

    detailedAnswer: `Bootstrap enhances HTML tables with modern styling and responsive behavior.

Features:

- Striped Rows
- Hover Effects
- Responsive Tables
- Bordered Tables
- Compact Tables

Tables help display large datasets clearly and professionally.`,

    keyPoints: [
      "Displays structured data",

      "Responsive support",

      "Multiple table styles",

      "Improves readability",

      "Easy customization",
    ],

    codeExample: `<table

class="table table-striped">

<tr>

<th>Name</th>

<th>Age</th>

</tr>

<tr>

<td>John</td>

<td>25</td>

</tr>

</table>`,

    language: "bootstrap",

    commonMistakes: [
      "Large tables without responsiveness",

      "Poor column organization",

      "Missing table headers",

      "Overcrowded data",

      "Ignoring accessibility",
    ],

    thinkingProcess: `Step 1: Create table

Step 2: Add headers

Step 3: Insert data

Step 4: Apply Bootstrap classes

Step 5: Test responsiveness`,

    realWorldApplication:
      "Used in admin panels, reports, dashboards, and data management systems.",

    interviewTip:
      "Bootstrap tables improve the appearance and responsiveness of standard HTML tables.",
  },

  {
    id: "bootstrap-25",

    question: "What are Bootstrap Icons?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Icons are a free SVG icon library designed to work seamlessly with Bootstrap projects.",

    detailedAnswer: `Bootstrap Icons provide hundreds of scalable vector icons.

Benefits:

- Lightweight
- Customizable
- Responsive
- Easy Integration

Common Uses:

- Navigation
- Buttons
- Forms
- Dashboards
- Notifications

Icons help improve user experience and visual design.`,

    keyPoints: [
      "SVG-based icons",

      "Free icon library",

      "Easy integration",

      "Customizable",

      "Works with Bootstrap",
    ],

    codeExample: `<i

class="bi bi-house-fill">

</i>`,

    language: "bootstrap",

    commonMistakes: [
      "Forgetting icon library import",

      "Using too many icons",

      "Poor icon selection",

      "Incorrect icon classes",

      "Ignoring accessibility",
    ],

    thinkingProcess: `Step 1: Import Bootstrap Icons

Step 2: Choose icon

Step 3: Add icon class

Step 4: Style if needed

Step 5: Test display`,

    realWorldApplication:
      "Used in navigation bars, buttons, dashboards, and mobile applications.",

    interviewTip:
      "Bootstrap Icons are SVG-based icons that integrate easily with Bootstrap projects.",
  },
  {
    id: "bootstrap-26",

    question: "What is Bootstrap Offcanvas?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Offcanvas is a sidebar component that slides into view from the side of the screen.",

    detailedAnswer: `Offcanvas provides hidden content panels that appear when triggered.

Features:

- Slide-in navigation
- Mobile-friendly menus
- Sidebar layouts
- Custom positioning

Offcanvas components can appear from:

- Left
- Right
- Top
- Bottom

They are commonly used as responsive navigation menus.`,

    keyPoints: [
      "Sidebar component",

      "Responsive navigation",

      "Slides into view",

      "Supports multiple positions",

      "Improves mobile UX",
    ],

    codeExample: `<button

class="btn btn-primary"

data-bs-toggle="offcanvas"

data-bs-target="#sidebar">

Open Menu

</button>`,

    language: "bootstrap",

    commonMistakes: [
      "Missing Bootstrap JS",

      "Wrong target ID",

      "Overloading sidebar content",

      "Poor mobile testing",

      "Ignoring accessibility",
    ],

    thinkingProcess: `Step 1: Create offcanvas

Step 2: Add trigger button

Step 3: Add content

Step 4: Configure position

Step 5: Test responsiveness`,

    realWorldApplication:
      "Used for mobile menus, dashboards, and navigation drawers.",

    interviewTip:
      "Offcanvas creates hidden side panels that slide into view when needed.",
  },

  {
    id: "bootstrap-27",

    question: "What is Bootstrap Toast?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Toast is a lightweight notification component used to display temporary messages.",

    detailedAnswer: `Toasts provide brief feedback messages without interrupting users.

Common Uses:

- Success notifications
- Error alerts
- System updates
- Action confirmations

Unlike modals, toasts do not block user interaction.`,

    keyPoints: [
      "Temporary notification",

      "Non-blocking UI",

      "Lightweight component",

      "Auto-hide support",

      "Improves user feedback",
    ],

    codeExample: `<div

class="toast show">

<div

class="toast-body">

Saved Successfully

</div>

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Showing too many toasts",

      "Messages disappearing too quickly",

      "Poor placement",

      "Ignoring accessibility",

      "Using toasts for critical alerts",
    ],

    thinkingProcess: `Step 1: Create toast

Step 2: Add message

Step 3: Configure timing

Step 4: Show notification

Step 5: Hide automatically`,

    realWorldApplication:
      "Used in messaging apps, dashboards, and web applications.",

    interviewTip:
      "Toasts display temporary notifications without interrupting the user.",
  },

  {
    id: "bootstrap-28",

    question: "What is Bootstrap Collapse?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Collapse is a component that shows or hides content dynamically without reloading the page.",

    detailedAnswer: `Collapse allows users to expand or hide sections of content.

Features:

- Expandable content
- Smooth animation
- Space-saving layout
- Easy interaction

Accordion components are built using Bootstrap Collapse functionality.`,

    keyPoints: [
      "Show/hide content",

      "Smooth animations",

      "Improves organization",

      "Space efficient",

      "Used in accordions",
    ],

    codeExample: `<button

class="btn btn-primary"

data-bs-toggle="collapse"

data-bs-target="#demo">

Toggle

</button>

<div

id="demo"

class="collapse">

Hidden Content

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Wrong target IDs",

      "Missing Bootstrap JS",

      "Too much hidden content",

      "Poor structure",

      "Ignoring user experience",
    ],

    thinkingProcess: `Step 1: Create collapsible content

Step 2: Add trigger

Step 3: Configure target

Step 4: Test animation

Step 5: Verify accessibility`,

    realWorldApplication:
      "Used in FAQs, documentation sites, and navigation systems.",

    interviewTip: "Collapse dynamically shows and hides content sections.",
  },

  {
    id: "bootstrap-29",

    question: "What is Bootstrap Dropdown?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Dropdown is a toggleable menu component that displays a list of actions or links.",

    detailedAnswer: `Dropdowns allow users to choose from multiple options.

Features:

- Toggle menu
- Action items
- Navigation links
- Responsive behavior

Dropdowns help keep interfaces clean by hiding less frequently used options.`,

    keyPoints: [
      "Toggleable menu",

      "Supports actions and links",

      "Improves navigation",

      "Responsive component",

      "Common UI element",
    ],

    codeExample: `<div

class="dropdown">

<button

class="btn btn-primary dropdown-toggle"

data-bs-toggle="dropdown">

Menu

</button>

<ul

class="dropdown-menu">

<li>

<a

class="dropdown-item"

href="#">

Profile

</a>

</li>

</ul>

</div>`,

    language: "bootstrap",

    commonMistakes: [
      "Missing dropdown-toggle class",

      "Wrong menu placement",

      "Too many menu items",

      "Poor accessibility",

      "Missing Bootstrap JS",
    ],

    thinkingProcess: `Step 1: Create dropdown

Step 2: Add toggle button

Step 3: Add menu items

Step 4: Configure behavior

Step 5: Test interaction`,

    realWorldApplication:
      "Used in navigation bars, settings menus, and user profile actions.",

    interviewTip:
      "Dropdowns provide compact access to multiple actions or navigation options.",
  },

  {
    id: "bootstrap-30",

    question: "What is Bootstrap Tooltip?",

    difficulty: "basic",

    shortAnswer:
      "Bootstrap Tooltip is a small popup that appears when a user hovers over or focuses on an element.",

    detailedAnswer: `Tooltips provide additional information without taking up permanent space.

Features:

- Hover interaction
- Focus support
- Custom positioning
- Lightweight UI

Tooltips are useful when space is limited but extra guidance is needed.`,

    keyPoints: [
      "Provides extra information",

      "Appears on hover",

      "Space efficient",

      "Improves usability",

      "Custom positioning",
    ],

    codeExample: `<button

class="btn btn-secondary"

data-bs-toggle="tooltip"

title="Save Data">

Save

</button>`,

    language: "bootstrap",

    commonMistakes: [
      "Forgetting tooltip initialization",

      "Too much tooltip text",

      "Poor placement",

      "Ignoring mobile users",

      "Overusing tooltips",
    ],

    thinkingProcess: `Step 1: Add tooltip attribute

Step 2: Define text

Step 3: Initialize tooltip

Step 4: Test hover behavior

Step 5: Verify accessibility`,

    realWorldApplication:
      "Used in forms, dashboards, admin panels, and interactive applications.",

    interviewTip:
      "Tooltips provide contextual help when users hover over an element.",
  },
];
