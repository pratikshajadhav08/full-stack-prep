export const htmlQuestions = [
  {
    id: "html-1",

    question: "What is HTML and what is its purpose in web development?",

    difficulty: "Basic",

    shortAnswer:
      "HTML (HyperText Markup Language) is the standard markup language used to create and structure content on web pages.",

    detailedAnswer: `HTML stands for HyperText Markup Language. It is the foundation of every website and is used to structure content such as headings, paragraphs, images, links, tables, forms, and multimedia elements.

HTML uses tags to define different types of content. Browsers read these tags and display the content accordingly.

HTML works together with:
- CSS for styling and design
- JavaScript for interactivity and functionality

Without HTML, web browsers would not know how to organize and display content on a webpage.`,

    keyPoints: [
      "HTML stands for HyperText Markup Language",

      "It is the standard language for creating web pages",

      "HTML structures content using tags",

      "Browsers interpret HTML to display content",

      "HTML works with CSS and JavaScript",
    ],

    codeExample: `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This is my first webpage.</p>
</body>
</html>`,

    language: "html",

    commonMistakes: [
      "Thinking HTML is a programming language",

      "Confusing HTML with CSS and JavaScript",

      "Forgetting to close tags properly",

      "Not understanding the purpose of document structure tags",
    ],

    thinkingProcess: `Step 1: Understand what HTML stands for

Step 2: Learn that HTML structures content

Step 3: Understand how browsers read HTML tags

Step 4: Learn the relationship between HTML, CSS, and JavaScript

Step 5: Create a simple webpage using basic HTML elements`,

    realWorldApplication:
      "Every website, from simple blogs to large e-commerce platforms, uses HTML to structure its content. Without HTML, users would not see organized text, images, navigation menus, or forms.",

    interviewTip:
      "Clearly explain that HTML is a markup language, not a programming language. Mention that its primary purpose is structuring content for web browsers.",
  },
  {
    id: "html-2",

    question: "What is the basic structure of an HTML document?",

    difficulty: "Basic",

    shortAnswer:
      "An HTML document consists of the DOCTYPE declaration, html element, head section, and body section.",

    detailedAnswer: `Every HTML page follows a standard structure that helps browsers understand and render the content correctly.

The main parts are:

1. <!DOCTYPE html>
   - Declares the document as HTML5.

2. <html>
   - The root element that contains all HTML content.

3. <head>
   - Contains metadata such as title, character encoding, viewport settings, and links to CSS files.

4. <body>
   - Contains all visible content displayed on the webpage, such as headings, paragraphs, images, links, and forms.

Following the proper document structure improves browser compatibility, SEO, and maintainability.`,

    keyPoints: [
      "<!DOCTYPE html> declares an HTML5 document",

      "<html> is the root element",

      "<head> stores metadata and resources",

      "<body> contains visible webpage content",

      "Every webpage should follow this structure",
    ],

    codeExample: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Page</title>
</head>

<body>
  <h1>Welcome</h1>
  <p>This is a basic HTML document.</p>
</body>

</html>`,

    language: "html",

    commonMistakes: [
      "Forgetting the <!DOCTYPE html> declaration",

      "Placing visible content inside the <head> section",

      "Missing the closing </html> tag",

      "Not setting the viewport meta tag for responsive design",
    ],

    thinkingProcess: `Step 1: Start with the DOCTYPE declaration

Step 2: Add the root <html> element

Step 3: Create the <head> section for metadata

Step 4: Create the <body> section for visible content

Step 5: Ensure all tags are properly nested and closed`,

    realWorldApplication:
      "Every website, from landing pages to complex web applications, starts with this basic HTML structure. Browsers rely on it to correctly interpret and display content.",

    interviewTip:
      "When asked about HTML structure, explain the role of each section: DOCTYPE, html, head, and body. Mention that the body contains visible content while the head contains metadata.",
  },
  {
    id: "html-3",

    question: "What are HTML tags and elements?",

    difficulty: "Basic",

    shortAnswer:
      "HTML tags are keywords enclosed in angle brackets used to define content, while an HTML element consists of the opening tag, content, and closing tag.",

    detailedAnswer: `HTML uses tags to structure and display content on web pages.

A tag is a keyword enclosed within angle brackets (< >).

Examples:
- <h1>
- <p>
- <img>
- <a>

An HTML element includes:
1. Opening tag
2. Content
3. Closing tag

Example:
<p>Hello World</p>

Here:
- <p> is the opening tag
- Hello World is the content
- </p> is the closing tag

Some elements are self-closing and do not require a closing tag.

Examples:
- <img>
- <br>
- <hr>
- <input>

HTML elements are the building blocks of every webpage.`,

    keyPoints: [
      "Tags are enclosed in angle brackets (< >)",

      "Elements consist of tags and content",

      "Most elements have opening and closing tags",

      "Some elements are self-closing",

      "HTML pages are built using multiple elements",
    ],

    codeExample: `<!-- Heading Element -->
<h1>Welcome to HTML</h1>

<!-- Paragraph Element -->
<p>This is a paragraph.</p>

<!-- Link Element -->
<a href="https://example.com">Visit Website</a>

<!-- Self-closing Element -->
<img src="image.jpg" alt="Sample Image">`,

    language: "html",

    commonMistakes: [
      "Forgetting closing tags",

      "Incorrect nesting of elements",

      "Confusing tags with elements",

      "Adding content inside self-closing elements",
    ],

    thinkingProcess: `Step 1: Understand what a tag is

Step 2: Learn the difference between tags and elements

Step 3: Identify opening and closing tags

Step 4: Learn about self-closing elements

Step 5: Practice creating simple HTML elements`,

    realWorldApplication:
      "Every component on a webpage—headings, buttons, images, forms, and links—is created using HTML elements. Understanding tags and elements is essential for building websites.",

    interviewTip:
      "Many beginners say tags and elements are the same. Explain that a tag is the markup itself, while an element includes the tag plus its content.",
  },
  {
    id: "html-4",

    question: "What are HTML attributes and why are they used?",

    difficulty: "Basic",

    shortAnswer:
      "HTML attributes provide additional information about an element and are written inside the opening tag.",

    detailedAnswer: `HTML attributes are special properties used to provide extra information or functionality to HTML elements.

Attributes are always placed inside the opening tag and usually consist of a name and a value.

Syntax:
attribute="value"

Examples:
- href specifies the destination of a link
- src specifies the source of an image
- alt provides alternative text for images
- id uniquely identifies an element
- class groups elements for styling

Attributes help customize the behavior, appearance, and functionality of HTML elements.

Without attributes, many HTML elements would have limited functionality.`,

    keyPoints: [
      "Attributes provide additional information about elements",

      "Attributes are placed inside opening tags",

      'Most attributes use the format name="value"',

      "Different elements support different attributes",

      "Attributes control behavior, styling, and functionality",
    ],

    codeExample: `<!-- Link with href attribute -->
<a href="https://example.com">Visit Website</a>

<!-- Image with src and alt attributes -->
<img src="photo.jpg" alt="Nature Photo">

<!-- Input with placeholder attribute -->
<input type="text" placeholder="Enter your name">

<!-- Element with id and class attributes -->
<div id="header" class="container">
  Welcome
</div>`,

    language: "html",

    commonMistakes: [
      "Forgetting quotation marks around attribute values",

      "Misspelling attribute names",

      "Using duplicate id values on multiple elements",

      "Omitting the alt attribute on images",
    ],

    thinkingProcess: `Step 1: Understand that attributes add extra information

Step 2: Learn where attributes are placed

Step 3: Study common attributes such as href, src, alt, id, and class

Step 4: Practice adding attributes to different elements

Step 5: Learn how attributes affect element behavior`,

    realWorldApplication:
      "Attributes are used everywhere in web development. Links use href, images use src, forms use type and placeholder, and CSS styling often relies on class and id attributes.",

    interviewTip:
      "Mention that attributes are written in the opening tag and provide additional information or functionality. Give examples like href, src, alt, id, and class.",
  },
  {
    id: "html-5",

    question: "What is the difference between block-level and inline elements?",

    difficulty: "Basic",

    shortAnswer:
      "Block-level elements start on a new line and take up the full available width, while inline elements stay within the current line and only take up as much width as needed.",

    detailedAnswer: `HTML elements are generally categorized as block-level or inline based on how they are displayed in the browser.

Block-Level Elements:
- Start on a new line.
- Occupy the full width available by default.
- Can contain other block-level and inline elements.
- Commonly used for page structure and layout.

Examples:
<div>, <p>, <h1> to <h6>, <section>, <article>, <header>, <footer>

Inline Elements:
- Do not start on a new line.
- Only occupy the width required by their content.
- Usually used within text content.

Examples:
<span>, <a>, <strong>, <em>, <label>

Understanding the difference is important for creating proper layouts and styling web pages.`,

    keyPoints: [
      "Block-level elements start on a new line",

      "Block-level elements take full available width",

      "Inline elements stay on the same line",

      "Inline elements only use necessary width",

      "Both types are essential for webpage structure",
    ],

    codeExample: `<!-- Block-Level Elements -->

<h1>Main Heading</h1>

<p>This is a paragraph.</p>

<div>This is a div container.</div>



<!-- Inline Elements -->

<p>
  Welcome to
  <span>HTML</span>
  learning.
</p>

<a href="#">Home</a>
<strong>Important Text</strong>`,

    language: "html",

    commonMistakes: [
      "Trying to place block-level elements inside inline elements",

      "Using only div elements for everything",

      "Confusing visual appearance with display behavior",

      "Not understanding how inline elements affect layout",
    ],

    thinkingProcess: `Step 1: Learn what block-level means

Step 2: Learn what inline means

Step 3: Compare how each appears in the browser

Step 4: Identify common examples of both types

Step 5: Practice building layouts using both element types`,

    realWorldApplication:
      "Website layouts are built using block-level elements such as sections, headers, and divs, while inline elements are used for links, highlighted text, icons, and small content within paragraphs.",

    interviewTip:
      "Always mention that block-level elements start on a new line and take full width, while inline elements remain in the same line and only occupy the required space. Give examples of both.",
  },
  {
    id: "html-6",

    question: "What is the difference between id and class attributes in HTML?",

    difficulty: "Basic",

    shortAnswer:
      "The id attribute uniquely identifies a single HTML element, while the class attribute can be used to group multiple elements together.",

    detailedAnswer: `The id and class attributes are commonly used to identify and style HTML elements.

id Attribute:
- Used to uniquely identify an element.
- An id value should only be used once per page.
- Accessed in CSS using #.
- Accessed in JavaScript using getElementById().

class Attribute:
- Used to group multiple elements.
- The same class can be applied to many elements.
- Accessed in CSS using .
- Accessed in JavaScript using getElementsByClassName() or querySelectorAll().

Use id when an element is unique and class when multiple elements share the same styling or behavior.`,

    keyPoints: [
      "id must be unique within a webpage",

      "class can be reused on multiple elements",

      "CSS uses # for id selectors",

      "CSS uses . for class selectors",

      "Both attributes help with styling and JavaScript interactions",
    ],

    codeExample: `<!-- Using id -->

<header id="main-header">
  Website Header
</header>



<!-- Using class -->

<div class="card">
  Card 1
</div>

<div class="card">
  Card 2
</div>

<div class="card">
  Card 3
</div>



<!-- CSS Example -->

<style>
  #main-header {
    background: lightblue;
  }

  .card {
    border: 1px solid gray;
    padding: 10px;
  }
</style>`,

    language: "html",

    commonMistakes: [
      "Using the same id on multiple elements",

      "Using id when a class would be more appropriate",

      "Forgetting that CSS selectors differ (# vs .)",

      "Creating overly specific ids that reduce code reusability",
    ],

    thinkingProcess: `Step 1: Understand the purpose of element identification

Step 2: Learn that id is unique

Step 3: Learn that class can be shared

Step 4: Compare CSS selectors for both

Step 5: Practice applying id and class appropriately`,

    realWorldApplication:
      'A navigation bar might have a unique id such as "navbar", while multiple product cards on an e-commerce website would share the same class like "product-card".',

    interviewTip:
      "A common interview question is whether multiple elements can have the same id. The correct answer is no—ids should be unique. Classes are designed for reuse across multiple elements.",
  },
  {
    id: "html-7",

    question: "What is semantic HTML and why is it important?",

    difficulty: "Basic",

    shortAnswer:
      "Semantic HTML uses meaningful tags that describe the purpose of the content they contain, improving accessibility, SEO, and code readability.",

    detailedAnswer: `Semantic HTML refers to using HTML elements that clearly describe their meaning and role within a webpage.

Instead of using generic containers like <div> and <span> for everything, semantic elements provide meaning about the content they contain.

Common semantic elements:
- <header>
- <nav>
- <main>
- <section>
- <article>
- <aside>
- <footer>
- <figure>
- <figcaption>

Non-semantic elements:
- <div>
- <span>

Semantic HTML is important because:

1. Improves Accessibility
   - Screen readers can better understand page structure.
   - Helps users with disabilities navigate content.

2. Better SEO
   - Search engines understand the importance of different sections.
   - Improves content indexing and rankings.

3. Easier Maintenance
   - Developers can quickly understand page structure.
   - Makes code more organized and readable.

4. Better Team Collaboration
   - Semantic tags communicate intent clearly.
   - Reduces confusion when working with other developers.

5. Future-Proof Development
   - Modern web standards encourage semantic markup.
   - Works better with assistive technologies and browsers.`,

    keyPoints: [
      "Semantic tags describe the meaning of content",

      "They improve accessibility for screen readers",

      "Search engines better understand page structure",

      "Code becomes more readable and maintainable",

      "Examples include <header>, <nav>, <section>, <article>, and <footer>",
    ],

    codeExample: `<!-- Non-Semantic Approach -->

<div class="header">
  <h1>My Website</h1>
</div>

<div class="navigation">
  <a href="#">Home</a>
  <a href="#">About</a>
</div>

<div class="content">
  <h2>Latest News</h2>
  <p>Article content here...</p>
</div>



<!-- Semantic Approach -->

<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>

<main>
  <article>
    <h2>Latest News</h2>
    <p>Article content here...</p>
  </article>
</main>

<footer>
  Copyright 2026
</footer>`,

    language: "html",

    commonMistakes: [
      "Using only <div> elements for page structure",

      "Using <section> when <article> is more appropriate",

      "Skipping important semantic elements like <main> and <nav>",

      "Using semantic tags only for styling purposes",
    ],

    thinkingProcess: `Step 1: Understand that semantic means "having meaning"

Step 2: Compare semantic and non-semantic elements

Step 3: Learn how browsers and screen readers use semantic tags

Step 4: Understand SEO and accessibility benefits

Step 5: Practice replacing generic divs with semantic elements`,

    realWorldApplication:
      "Modern websites use semantic HTML to create accessible and SEO-friendly page structures. For example, e-commerce sites use <header> for branding, <nav> for menus, <main> for content, and <footer> for additional information.",

    interviewTip:
      "Interviewers often expect you to mention three major benefits: Accessibility, SEO, and Maintainability. Always provide examples such as <header>, <nav>, <article>, and <footer>.",
  },
  {
    id: "html-8",

    question: "What is the purpose of the <!DOCTYPE html> declaration?",

    difficulty: "Basic",

    shortAnswer:
      "The <!DOCTYPE html> declaration tells the browser that the document is written in HTML5 and should be rendered using standards mode.",

    detailedAnswer: `The <!DOCTYPE html> declaration is the first line of an HTML document.

It informs the browser about the version of HTML being used and ensures that the page is rendered in Standards Mode instead of Quirks Mode.

HTML5 uses a very simple DOCTYPE declaration:

<!DOCTYPE html>

Benefits of using DOCTYPE:

1. Enables Standards Mode
   - Browsers follow modern web standards.

2. Ensures Consistent Rendering
   - Different browsers display pages more consistently.

3. Prevents Quirks Mode
   - Quirks Mode emulates older browser behavior and can cause layout issues.

4. Improves Compatibility
   - Modern HTML, CSS, and JavaScript features work as expected.

Without a DOCTYPE declaration, browsers may interpret the page differently, leading to unexpected results.`,

    keyPoints: [
      "<!DOCTYPE html> must be the first line of an HTML document",

      "It declares the document as HTML5",

      "It enables Standards Mode in browsers",

      "It helps ensure consistent rendering across browsers",

      "It prevents browsers from entering Quirks Mode",
    ],

    codeExample: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>DOCTYPE Example</title>
</head>

<body>
  <h1>Hello World</h1>
  <p>This page uses the HTML5 DOCTYPE declaration.</p>
</body>

</html>`,

    language: "html",

    commonMistakes: [
      "Forgetting to include the DOCTYPE declaration",

      "Placing content before the DOCTYPE",

      "Using outdated HTML4 DOCTYPE declarations unnecessarily",

      "Assuming DOCTYPE is an HTML tag",
    ],

    thinkingProcess: `Step 1: Understand the role of the browser

Step 2: Learn why browsers need document type information

Step 3: Understand Standards Mode and Quirks Mode

Step 4: Learn the HTML5 DOCTYPE syntax

Step 5: Always place it at the top of HTML documents`,

    realWorldApplication:
      "Every modern website starts with <!DOCTYPE html>. Without it, browsers may render layouts incorrectly, causing CSS and responsive designs to behave unexpectedly.",

    interviewTip:
      "A common interview trick is asking whether DOCTYPE is an HTML tag. It is not an HTML tag—it is a declaration that instructs the browser how to interpret the document.",
  },
  {
    id: "html-9",

    question: "What is the difference between HTML4 and HTML5?",

    difficulty: "Basic",

    shortAnswer:
      "HTML5 is the latest version of HTML that introduced semantic elements, multimedia support, new form controls, APIs, and better web application capabilities compared to HTML4.",

    detailedAnswer: `HTML4 was widely used for creating web pages, but it had limitations when building modern web applications.

HTML5 was introduced to address these limitations and provide richer functionality without relying heavily on third-party plugins.

Major differences between HTML4 and HTML5:

1. Simpler DOCTYPE
   HTML4:
   <!DOCTYPE HTML PUBLIC "...">

   HTML5:
   <!DOCTYPE html>

2. Semantic Elements
   HTML5 introduced:
   - <header>
   - <nav>
   - <main>
   - <section>
   - <article>
   - <footer>

3. Multimedia Support
   HTML4 required plugins like Flash.

   HTML5 introduced:
   - <audio>
   - <video>

4. New Form Controls
   HTML5 added:
   - email
   - number
   - date
   - range
   - color

5. Graphics Support
   HTML5 introduced:
   - <canvas>
   - SVG support

6. Browser Storage
   HTML5 introduced:
   - localStorage
   - sessionStorage

7. New APIs
   - Geolocation API
   - Drag and Drop API
   - Web Workers
   - Web Storage API

HTML5 made web development faster, more powerful, and more user-friendly.`,

    keyPoints: [
      "HTML5 is the successor to HTML4",

      "HTML5 introduced semantic elements",

      "HTML5 supports audio and video natively",

      "HTML5 provides new form input types",

      "HTML5 includes APIs for modern web applications",
    ],

    codeExample: `<!-- HTML4 Style -->

<div id="header">
  Website Header
</div>



<!-- HTML5 Semantic Style -->

<header>
  Website Header
</header>



<!-- HTML5 Video Support -->

<video controls width="400">
  <source src="movie.mp4" type="video/mp4">
</video>



<!-- HTML5 Form Input -->

<input type="email" placeholder="Enter Email">`,

    language: "html",

    commonMistakes: [
      "Thinking HTML5 only added semantic tags",

      "Assuming Flash is still required for video playback",

      "Not using modern HTML5 input types",

      "Ignoring HTML5 accessibility improvements",
    ],

    thinkingProcess: `Step 1: Understand the limitations of HTML4

Step 2: Learn the major features introduced in HTML5

Step 3: Compare old and new approaches

Step 4: Study multimedia and semantic elements

Step 5: Learn how HTML5 supports modern web applications`,

    realWorldApplication:
      "Modern websites such as e-commerce platforms, social media apps, dashboards, and streaming services rely heavily on HTML5 features like video, local storage, semantic elements, and advanced form controls.",

    interviewTip:
      "When answering this question, mention at least four major HTML5 improvements: Semantic Elements, Multimedia Support, New Form Inputs, and Web APIs. These are the most commonly expected interview points.",
  },
  {
    id: "html-10",

    question: "What are HTML headings and why is heading hierarchy important?",

    difficulty: "Basic",

    shortAnswer:
      "HTML headings are used to define titles and subtitles on a webpage. Proper heading hierarchy improves readability, accessibility, and SEO.",

    detailedAnswer: `HTML provides six heading levels, from <h1> to <h6>.

Heading Tags:
- <h1> → Most important heading
- <h2> → Main section heading
- <h3> → Subsection heading
- <h4> → Sub-subsection heading
- <h5> → Lower-level heading
- <h6> → Least important heading

A proper heading hierarchy creates a logical structure for the page.

Benefits of proper heading hierarchy:

1. Better Accessibility
   - Screen readers use headings to navigate content.

2. Improved SEO
   - Search engines analyze headings to understand page structure.

3. Better Readability
   - Users can quickly scan and understand content.

4. Easier Content Organization
   - Creates a clear document outline.

A webpage should generally have one main <h1> representing the primary topic of the page, followed by properly nested heading levels.`,

    keyPoints: [
      "HTML provides six heading levels: h1 to h6",

      "<h1> is the most important heading",

      "Headings create a structured document outline",

      "Proper hierarchy improves accessibility",

      "Search engines use headings to understand content",
    ],

    codeExample: `<!DOCTYPE html>
<html>

<body>

  <h1>Web Development Guide</h1>

  <h2>HTML Basics</h2>

  <h3>What is HTML?</h3>
  <p>HTML is the structure of a webpage.</p>

  <h3>HTML Elements</h3>
  <p>Elements define content.</p>

  <h2>CSS Basics</h2>

  <h3>Selectors</h3>
  <p>Selectors target elements.</p>

</body>

</html>`,

    language: "html",

    commonMistakes: [
      "Using multiple headings only for visual size",

      "Skipping heading levels unnecessarily",

      "Using headings instead of CSS for styling",

      "Having multiple unrelated <h1> tags without proper structure",
    ],

    thinkingProcess: `Step 1: Learn the six heading levels

Step 2: Understand their importance in document structure

Step 3: Create a logical hierarchy from h1 to h6

Step 4: Learn accessibility and SEO benefits

Step 5: Practice building content with proper heading order`,

    realWorldApplication:
      "Blogs, news websites, documentation sites, and e-commerce pages use heading hierarchies to organize content. Screen readers often allow users to jump directly between headings for easier navigation.",

    interviewTip:
      "Mention that headings are not just for making text bigger. Their primary purpose is creating semantic structure, improving SEO, and helping assistive technologies understand page content.",
  },
  {
    id: "html-11",

    question:
      "What is the difference between <strong> and <b>, and between <em> and <i>?",

    difficulty: "Basic",

    shortAnswer:
      "<strong> and <em> provide semantic meaning, while <b> and <i> are primarily used for visual styling without adding importance or emphasis.",

    detailedAnswer: `Many beginners think these tags are identical because they often look similar in browsers, but their purposes are different.

<strong> vs <b>

<strong>:
- Indicates strong importance or seriousness.
- Has semantic meaning.
- Screen readers may emphasize the content.

<b>:
- Makes text visually bold.
- Does not indicate importance.
- Primarily used for styling purposes.

<em> vs <i>

<em>:
- Indicates emphasized text.
- Has semantic meaning.
- Screen readers may change pronunciation to indicate emphasis.

<i>:
- Makes text visually italic.
- Does not indicate emphasis.
- Commonly used for icons, technical terms, foreign words, or names.

Modern web development encourages using semantic tags whenever the content carries meaning rather than just visual styling.`,

    keyPoints: [
      "<strong> indicates importance",

      "<b> only makes text bold",

      "<em> indicates emphasis",

      "<i> only makes text italic",

      "Semantic tags improve accessibility and SEO",
    ],

    codeExample: `<!-- Semantic Importance -->

<p>
  <strong>Warning:</strong>
  Do not share your password.
</p>

<!-- Visual Styling Only -->

<p>
  <b>Product Name</b>
</p>



<!-- Semantic Emphasis -->

<p>
  Please <em>carefully</em> read the instructions.
</p>

<!-- Italic Styling Only -->

<p>
  The word <i>Bonjour</i> is French.
</p>`,

    language: "html",

    commonMistakes: [
      "Using <b> when content has importance",

      "Using <i> when content needs emphasis",

      "Assuming semantic and visual tags are identical",

      "Ignoring accessibility benefits of semantic tags",
    ],

    thinkingProcess: `Step 1: Identify whether the content has meaning or importance

Step 2: If meaning exists, use semantic tags

Step 3: If only visual appearance is needed, use styling tags

Step 4: Consider accessibility requirements

Step 5: Choose the most appropriate element for the content`,

    realWorldApplication:
      "Warning messages, important notices, and critical instructions often use <strong>. Educational content and articles frequently use <em> to emphasize specific words or phrases. Foreign words and technical terms commonly use <i>.",

    interviewTip:
      'A common interview answer is: "<strong> and <em> add semantic meaning, while <b> and <i> only affect appearance." Mention accessibility and screen reader behavior for a stronger answer.',
  },
  {
    id: "html-12",

    question:
      "What is the difference between absolute, relative, and root-relative URLs in HTML?",

    difficulty: "Basic",

    shortAnswer:
      "Absolute URLs contain the full web address, relative URLs are based on the current page location, and root-relative URLs start from the website root.",

    detailedAnswer: `URLs are used in HTML to link pages, images, stylesheets, scripts, and other resources.

There are three common types of URLs:

1. Absolute URL
   - Contains the complete address including protocol and domain.
   - Can be used to access resources from any website.

Example:
https://www.example.com/images/logo.png

2. Relative URL
   - Refers to a file relative to the current page.
   - Commonly used within the same project.

Example:
images/logo.png

3. Root-Relative URL
   - Starts with a forward slash (/).
   - Refers to a resource from the website root directory.

Example:
/images/logo.png

Choosing the correct URL type helps maintain websites efficiently and prevents broken links when pages are moved.`,

    keyPoints: [
      "Absolute URLs contain the complete web address",

      "Relative URLs depend on the current file location",

      "Root-relative URLs start from the website root",

      "Relative URLs are commonly used in local projects",

      "Absolute URLs are useful for external resources",
    ],

    codeExample: `<!-- Absolute URL -->

<a href="https://www.example.com/about">
  About Us
</a>



<!-- Relative URL -->

<a href="about.html">
  About Page
</a>



<!-- Relative URL (Subfolder) -->

<img src="images/logo.png" alt="Logo">



<!-- Root-Relative URL -->

<img src="/images/logo.png" alt="Logo">



<!-- External CSS File -->

<link rel="stylesheet"
      href="https://cdn.example.com/style.css">`,

    language: "html",

    commonMistakes: [
      "Using incorrect folder paths",

      "Forgetting the leading slash in root-relative URLs",

      "Using absolute URLs for internal project files unnecessarily",

      "Not understanding the difference between relative and root-relative paths",
    ],

    thinkingProcess: `Step 1: Identify where the resource is located

Step 2: Determine whether it is internal or external

Step 3: Choose absolute URL for external resources

Step 4: Use relative URLs for nearby project files

Step 5: Use root-relative URLs when referencing resources from the website root`,

    realWorldApplication:
      "Most websites use relative URLs for images, CSS, and internal pages. CDNs, third-party APIs, and external websites often require absolute URLs. Large websites frequently use root-relative URLs for consistent navigation and asset loading.",

    interviewTip:
      'A simple way to explain this is: Absolute URLs contain the full address, Relative URLs depend on the current page location, and Root-Relative URLs always start from the website root using "/".',
  },
  {
    id: "html-13",

    question: "What are HTML lists and what are the different types of lists?",

    difficulty: "Basic",

    shortAnswer:
      "HTML lists are used to group related items together. The three main types are unordered lists (<ul>), ordered lists (<ol>), and description lists (<dl>).",

    detailedAnswer: `HTML lists help organize and display related pieces of information in a structured way.

There are three main types of HTML lists:

1. Unordered List (<ul>)
   - Displays items with bullet points.
   - Used when item order is not important.

2. Ordered List (<ol>)
   - Displays items with numbers or letters.
   - Used when sequence matters.

3. Description List (<dl>)
   - Used for terms and their descriptions.
   - Contains:
     - <dt> (Description Term)
     - <dd> (Description Description)

Lists improve readability and make content easier to understand.

They are commonly used for navigation menus, feature lists, instructions, FAQs, and documentation.`,

    keyPoints: [
      "<ul> creates an unordered (bulleted) list",

      "<ol> creates an ordered (numbered) list",

      "<li> defines a list item",

      "<dl> creates a description list",

      "Lists help organize related information",
    ],

    codeExample: `<!-- Unordered List -->

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>



<!-- Ordered List -->

<ol>
  <li>Open Browser</li>
  <li>Visit Website</li>
  <li>Login</li>
</ol>



<!-- Description List -->

<dl>
  <dt>HTML</dt>
  <dd>Structure of a webpage</dd>

  <dt>CSS</dt>
  <dd>Styling of a webpage</dd>

  <dt>JavaScript</dt>
  <dd>Interactivity of a webpage</dd>
</dl>`,

    language: "html",

    commonMistakes: [
      "Placing text directly inside <ul> or <ol> without <li>",

      "Using ordered lists when sequence is not important",

      "Forgetting to close list tags",

      "Using lists only for layout instead of organizing content",
    ],

    thinkingProcess: `Step 1: Identify whether items are related

Step 2: Determine if order matters

Step 3: Use <ol> if sequence is important

Step 4: Use <ul> if sequence is not important

Step 5: Use <dl> when defining terms and descriptions`,

    realWorldApplication:
      "Navigation menus, recipe steps, to-do lists, product features, FAQs, and technical documentation commonly use HTML lists to present information in a clean and organized format.",

    interviewTip:
      "Interviewers often ask about the difference between <ul> and <ol>. A simple answer is: use <ul> when order does not matter and <ol> when the sequence is important.",
  },
  {
    id: "html-14",

    question:
      "How do you create hyperlinks in HTML and what are the most important attributes of the <a> tag?",

    difficulty: "Basic",

    shortAnswer:
      "Hyperlinks are created using the <a> (anchor) tag. The href attribute specifies the destination, while attributes like target, title, and download provide additional functionality.",

    detailedAnswer: `The <a> (anchor) tag is used to create hyperlinks that allow users to navigate between pages, websites, files, sections of a page, and email addresses.

Basic Syntax:

<a href="URL">Link Text</a>

Important Attributes:

1. href
   - Specifies the destination URL.
   - Required for creating a link.

2. target
   - Specifies where the link opens.
   - _self → Current tab (default)
   - _blank → New tab

3. title
   - Displays additional information when users hover over the link.

4. download
   - Downloads a file instead of opening it.

5. rel
   - Defines the relationship between the current page and the linked page.
   - Often used with target="_blank" for security.

Hyperlinks are one of the most important features of the web because they connect pages and resources together.`,

    keyPoints: [
      "<a> is called the anchor tag",

      "href specifies the destination URL",

      'target="_blank" opens a link in a new tab',

      "download allows file downloads",

      "rel improves security and SEO",
    ],

    codeExample: `<!-- Basic Link -->

<a href="about.html">
  About Us
</a>



<!-- External Website -->

<a href="https://www.google.com">
  Visit Google
</a>



<!-- Open in New Tab -->

<a href="https://example.com"
   target="_blank"
   rel="noopener noreferrer">
  Open Website
</a>



<!-- Email Link -->

<a href="mailto:support@example.com">
  Contact Support
</a>



<!-- Phone Link -->

<a href="tel:+1234567890">
  Call Us
</a>



<!-- Download File -->

<a href="resume.pdf" download>
  Download Resume
</a>`,

    language: "html",

    commonMistakes: [
      "Forgetting the href attribute",

      'Using target="_blank" without rel="noopener noreferrer"',

      "Using broken or incorrect URLs",

      "Using links when a button would be more appropriate",
    ],

    thinkingProcess: `Step 1: Understand that hyperlinks connect resources

Step 2: Learn the basic anchor tag syntax

Step 3: Study the href attribute

Step 4: Learn commonly used attributes like target and download

Step 5: Practice linking pages, emails, and files`,

    realWorldApplication:
      "Navigation menus, social media links, download buttons, contact links, and website navigation all rely on anchor tags. Without hyperlinks, websites would not be connected together.",

    interviewTip:
      'When discussing the <a> tag, always mention href and target="_blank". For a stronger answer, explain why rel="noopener noreferrer" should be used when opening links in new tabs.',
  },
  {
    id: "html-15",

    question:
      "What are HTML images and how do you use the <img> tag correctly?",

    difficulty: "Basic",

    shortAnswer:
      "The <img> tag is used to display images on a webpage. Important attributes include src, alt, width, height, and loading.",

    detailedAnswer: `Images are used to display visual content such as photos, logos, icons, banners, and illustrations.

The <img> tag is a self-closing element and requires the src attribute to specify the image location.

Important attributes:

1. src
   - Specifies the image path.

2. alt
   - Alternative text shown if the image cannot load.
   - Improves accessibility.

3. width and height
   - Define image dimensions.

4. loading
   - lazy loads images only when needed.
   - Improves performance.

5. title
   - Displays additional information on hover.

Using proper image attributes improves accessibility, SEO, and page loading speed.`,

    keyPoints: [
      "<img> is a self-closing tag",

      "src specifies the image source",

      "alt improves accessibility and SEO",

      "width and height define image size",

      'loading="lazy" improves performance',
    ],

    codeExample: `<!-- Basic Image -->

<img src="images/photo.jpg"
     alt="Beautiful Mountain">



<!-- Image with Size -->

<img src="logo.png"
     alt="Company Logo"
     width="200"
     height="100">



<!-- Lazy Loaded Image -->

<img src="banner.jpg"
     alt="Website Banner"
     loading="lazy">`,

    language: "html",

    commonMistakes: [
      "Forgetting the alt attribute",

      "Using incorrect image paths",

      "Uploading very large images",

      "Using images for important text content",
    ],

    thinkingProcess: `Step 1: Understand the purpose of images

Step 2: Learn the src attribute

Step 3: Add descriptive alt text

Step 4: Optimize image size and performance

Step 5: Test image loading and accessibility`,

    realWorldApplication:
      "E-commerce sites use product images, blogs use featured images, and company websites use logos and banners. Proper image optimization improves user experience and SEO.",

    interviewTip:
      "Always mention the importance of the alt attribute. Interviewers often expect accessibility and SEO benefits as part of the answer.",
  },
  {
    id: "html-16",

    question: "What are HTML tables and how do you create them?",

    difficulty: "Basic",

    shortAnswer:
      "HTML tables are used to display data in rows and columns using tags such as <table>, <tr>, <th>, and <td>.",

    detailedAnswer: `HTML tables organize data into rows and columns.

Main table elements:

1. <table>
   - Creates the table.

2. <tr>
   - Defines a table row.

3. <th>
   - Defines a table header cell.

4. <td>
   - Defines a table data cell.

Additional elements:

5. <thead>
   - Groups table headers.

6. <tbody>
   - Groups table body content.

7. <tfoot>
   - Groups footer content.

8. colspan
   - Merges columns.

9. rowspan
   - Merges rows.

Tables should be used for displaying tabular data, not for page layouts.`,

    keyPoints: [
      "<table> creates the table",

      "<tr> represents a row",

      "<th> represents header cells",

      "<td> represents data cells",

      "Use tables for data, not page layouts",
    ],

    codeExample: `<!-- Basic Table -->

<table border="1">

  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>

  <tr>
    <td>John</td>
    <td>25</td>
    <td>New York</td>
  </tr>

  <tr>
    <td>Sarah</td>
    <td>28</td>
    <td>London</td>
  </tr>

</table>



<!-- Table with Colspan -->

<table border="1">

  <tr>
    <th colspan="2">Employee Details</th>
  </tr>

  <tr>
    <td>Name</td>
    <td>Rahul</td>
  </tr>

</table>`,

    language: "html",

    commonMistakes: [
      "Using tables for website layouts",

      "Missing table headers",

      "Incorrect rowspan and colspan values",

      "Not using thead and tbody for large tables",
    ],

    thinkingProcess: `Step 1: Understand tabular data

Step 2: Learn table structure

Step 3: Create rows and columns

Step 4: Add headers for clarity

Step 5: Learn advanced features like colspan and rowspan`,

    realWorldApplication:
      "Tables are commonly used for reports, invoices, dashboards, schedules, product comparisons, and financial data.",

    interviewTip:
      "Mention that tables should be used for data representation, not page layouts. Also explain the difference between <th> and <td>.",
  },
  {
    id: "html-17",

    question: "What are HTML forms and why are they used?",

    difficulty: "Intermediate",

    shortAnswer:
      "HTML forms are used to collect user input and send data to a server for processing.",

    detailedAnswer: `Forms are one of the most important features of HTML because they allow users to interact with websites.

A form can collect information such as:
- Names
- Emails
- Passwords
- Phone numbers
- Messages
- Payment details

The <form> element acts as a container for form controls.

Important form attributes:

1. action
   - Specifies where the form data is sent.

2. method
   - Specifies how the data is sent (GET or POST).

3. enctype
   - Specifies how form data is encoded.

Common use cases:
- Login forms
- Registration forms
- Contact forms
- Search bars
- Checkout forms

Forms are often connected with backend technologies that process and store submitted data.`,

    keyPoints: [
      "<form> is used to collect user input",

      "Forms can send data to servers",

      "action specifies the destination URL",

      "method defines how data is transmitted",

      "Forms are used in login, registration, and contact pages",
    ],

    codeExample: `<!-- Simple Contact Form -->

<form action="/submit" method="POST">

  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <br><br>

  <button type="submit">
    Submit
  </button>

</form>`,

    language: "html",

    commonMistakes: [
      "Forgetting the name attribute",

      "Using forms without labels",

      "Not specifying the method attribute",

      "Not validating user input",
    ],

    thinkingProcess: `Step 1: Understand why websites need user input

Step 2: Learn the purpose of the form element

Step 3: Study action and method attributes

Step 4: Add form controls

Step 5: Submit data to a server`,

    realWorldApplication:
      "Every modern website uses forms. Examples include user registration, login systems, search bars, feedback forms, online banking, and e-commerce checkout pages.",

    interviewTip:
      "Mention that forms collect data while backend systems process that data. Explain the importance of action and method attributes.",
  },
  {
    id: "html-18",

    question:
      "Explain common HTML form elements such as input, textarea, select, and button.",

    difficulty: "Intermediate",

    shortAnswer:
      "HTML form elements allow users to enter, select, and submit data. Common elements include input, textarea, select, option, and button.",

    detailedAnswer: `HTML provides several form controls for collecting different types of user input.

1. <input>
   - Most commonly used form element.
   - Supports many types such as text, email, password, number, and date.

2. <textarea>
   - Allows users to enter multiple lines of text.
   - Commonly used for comments and messages.

3. <select>
   - Creates a dropdown menu.

4. <option>
   - Defines items inside a dropdown.

5. <button>
   - Creates clickable buttons.
   - Can submit forms or perform actions.

These elements help create interactive forms for collecting structured information from users.`,

    keyPoints: [
      "<input> collects single-line data",

      "<textarea> collects multi-line data",

      "<select> creates dropdown menus",

      "<option> defines dropdown choices",

      "<button> performs actions or submits forms",
    ],

    codeExample: `<!-- Form Elements Example -->

<form>

  <!-- Input -->
  <label>Name:</label>
  <input type="text" name="name">

  <br><br>

  <!-- Textarea -->
  <label>Message:</label>
  <textarea name="message"
            rows="4"
            cols="30"></textarea>

  <br><br>

  <!-- Select -->
  <label>Country:</label>
  <select name="country">
    <option>India</option>
    <option>USA</option>
    <option>Canada</option>
  </select>

  <br><br>

  <!-- Button -->
  <button type="submit">
    Submit Form
  </button>

</form>`,

    language: "html",

    commonMistakes: [
      "Using textarea for short text fields",

      "Not adding labels to form controls",

      "Forgetting option elements inside select",

      "Using buttons without specifying a type",
    ],

    thinkingProcess: `Step 1: Identify the type of data being collected

Step 2: Choose the appropriate form element

Step 3: Add labels for accessibility

Step 4: Configure attributes properly

Step 5: Test user interaction and submission`,

    realWorldApplication:
      "Registration forms use inputs, feedback forms use textareas, country selectors use dropdowns, and buttons are used to submit or reset forms.",

    interviewTip:
      "Interviewers often ask which form element should be used for long messages. The correct answer is <textarea>. Also explain the difference between select and input.",
  },
  {
    id: "html-19",

    question:
      "What is the difference between GET and POST methods in HTML forms?",

    difficulty: "Intermediate",

    shortAnswer:
      "GET sends form data through the URL and is mainly used for retrieving data, while POST sends data in the request body and is typically used for creating or updating data.",

    detailedAnswer: `The method attribute of the <form> element determines how form data is sent to the server.

GET Method:
- Appends form data to the URL.
- Data is visible in the browser address bar.
- Suitable for retrieving data.
- Can be bookmarked.
- Has URL length limitations.
- Less secure for sensitive information.

POST Method:
- Sends form data in the request body.
- Data is not visible in the URL.
- Suitable for sensitive information.
- No practical URL length limitation.
- Used for creating, updating, or submitting data.

Comparison:

GET:
✔ Faster
✔ Bookmarkable
✔ Good for search forms
✖ Not secure for sensitive data

POST:
✔ More secure
✔ Handles large amounts of data
✔ Suitable for file uploads
✖ Cannot be bookmarked with form data

Choosing the correct method improves security, usability, and performance.`,

    keyPoints: [
      "GET sends data through the URL",

      "POST sends data in the request body",

      "GET is commonly used for data retrieval",

      "POST is commonly used for form submissions",

      "Sensitive data should generally use POST",
    ],

    codeExample: `<!-- GET Example -->

<form action="/search" method="GET">

  <input type="text"
         name="query"
         placeholder="Search">

  <button type="submit">
    Search
  </button>

</form>



<!-- URL Example -->

https://example.com/search?query=html



<!-- POST Example -->

<form action="/register" method="POST">

  <input type="email"
         name="email">

  <input type="password"
         name="password">

  <button type="submit">
    Register
  </button>

</form>`,

    language: "html",

    commonMistakes: [
      "Using GET for passwords and sensitive information",

      "Assuming POST automatically encrypts data",

      "Using GET for large amounts of data",

      "Choosing methods without understanding their purpose",
    ],

    thinkingProcess: `Step 1: Understand what data is being sent

Step 2: Determine whether data is being retrieved or submitted

Step 3: Use GET for searches and filters

Step 4: Use POST for registrations and sensitive data

Step 5: Consider security and usability requirements`,

    realWorldApplication:
      "Search engines use GET because search URLs can be shared and bookmarked. Login, registration, payment, and checkout forms typically use POST because user data should not appear in the URL.",

    interviewTip:
      "A common interview answer is: GET appends data to the URL and is used for retrieval, while POST sends data in the request body and is used for submissions. Mention visibility and security differences.",
  },
  {
    id: "html-20",

    question: "What are HTML5 input types and why are they useful?",

    difficulty: "Intermediate",

    shortAnswer:
      "HTML5 introduced specialized input types such as email, number, date, range, color, and url that provide built-in validation and better user experience.",

    detailedAnswer: `HTML5 expanded the capabilities of the <input> element by introducing new input types.

Common HTML5 Input Types:

1. text
   - Standard text field.

2. email
   - Accepts email addresses.
   - Provides built-in validation.

3. password
   - Hides entered characters.

4. number
   - Accepts numeric values.

5. date
   - Displays a date picker.

6. time
   - Displays a time picker.

7. tel
   - Used for phone numbers.

8. url
   - Accepts website URLs.

9. color
   - Displays a color picker.

10. range
    - Creates a slider control.

11. file
    - Allows file uploads.

12. checkbox
    - Allows multiple selections.

13. radio
    - Allows a single selection from a group.

HTML5 input types improve form usability by reducing the need for custom JavaScript validation and providing mobile-friendly input controls.`,

    keyPoints: [
      "HTML5 introduced many new input types",

      "Built-in validation improves user experience",

      "Mobile devices display appropriate keyboards",

      "Date and color pickers are built into browsers",

      "Less JavaScript is required for validation",
    ],

    codeExample: `<!-- Email -->

<input type="email"
       placeholder="Enter Email">



<!-- Number -->

<input type="number"
       min="1"
       max="100">



<!-- Date -->

<input type="date">



<!-- Range Slider -->

<input type="range"
       min="0"
       max="100">



<!-- Color Picker -->

<input type="color">



<!-- URL -->

<input type="url"
       placeholder="https://example.com">



<!-- File Upload -->

<input type="file">`,

    language: "html",

    commonMistakes: [
      'Using type="text" for everything',

      "Ignoring HTML5 validation features",

      "Assuming all browsers support every feature identically",

      "Not setting min and max values for number inputs",
    ],

    thinkingProcess: `Step 1: Identify the type of data being collected

Step 2: Select the most appropriate input type

Step 3: Use built-in validation where possible

Step 4: Test on desktop and mobile devices

Step 5: Improve accessibility and usability`,

    realWorldApplication:
      "Modern registration forms use email fields, booking systems use date pickers, shopping websites use number inputs for quantity selection, and profile pages often use file inputs for image uploads.",

    interviewTip:
      "Interviewers often ask for examples of HTML5 input types. Mention email, number, date, range, color, and url, then explain that they provide built-in validation and better mobile experiences.",
  },
  {
    id: "html-21",

    question:
      "What are <label> elements and why are they important in HTML forms?",

    difficulty: "Intermediate",

    shortAnswer:
      "The <label> element provides a descriptive text label for form controls, improving accessibility, usability, and user experience.",

    detailedAnswer: `The <label> element is used to associate text with form controls such as input fields, textareas, checkboxes, radio buttons, and select elements.

Benefits of using labels:

1. Accessibility
   - Screen readers can identify the purpose of form fields.
   - Helps visually impaired users navigate forms.

2. Better User Experience
   - Clicking the label focuses the associated input.
   - Easier interaction on mobile devices.

3. Improved Form Usability
   - Users immediately understand what information is required.

There are two ways to associate a label with a form control:

Method 1: Using the for attribute
- The label's for value matches the input's id.

Method 2: Wrapping the input inside the label
- No id or for attribute is required.

Using labels is considered a best practice in modern web development.`,

    keyPoints: [
      "<label> describes form controls",

      "Improves accessibility for screen readers",

      "Clicking a label can focus the input field",

      "Uses the for attribute to connect with inputs",

      "Should be used for all important form fields",
    ],

    codeExample: `<!-- Method 1: Using for and id -->

<label for="email">
  Email Address
</label>

<input type="email"
       id="email"
       name="email">



<!-- Method 2: Wrapping Input -->

<label>
  Username
  <input type="text"
         name="username">
</label>



<!-- Checkbox Example -->

<input type="checkbox"
       id="terms">

<label for="terms">
  I agree to the Terms and Conditions
</label>`,

    language: "html",

    commonMistakes: [
      "Not using labels at all",

      "Using labels without matching ids",

      "Using placeholder text instead of labels",

      "Creating forms that are inaccessible to screen readers",
    ],

    thinkingProcess: `Step 1: Identify the form control

Step 2: Add a descriptive label

Step 3: Associate the label with the control

Step 4: Test keyboard and screen reader accessibility

Step 5: Ensure users can easily understand the form`,

    realWorldApplication:
      "Registration forms, login pages, checkout forms, and contact forms all use labels to clearly indicate what information users should enter.",

    interviewTip:
      "Interviewers often ask why labels matter. The strongest answer includes accessibility, screen reader support, and improved usability.",
  },
  {
    id: "html-22",

    question: "What is HTML form validation and how does it work?",

    difficulty: "Intermediate",

    shortAnswer:
      "HTML form validation is the process of checking user input before form submission using built-in HTML attributes and browser validation features.",

    detailedAnswer: `Form validation ensures that users enter correct and complete information before data is sent to the server.

HTML5 introduced built-in validation features that reduce the need for JavaScript.

Common Validation Attributes:

1. required
   - Field must not be empty.

2. minlength
   - Sets minimum character length.

3. maxlength
   - Sets maximum character length.

4. min
   - Minimum numeric value.

5. max
   - Maximum numeric value.

6. pattern
   - Uses a regular expression to validate input.

7. type
   - Certain input types automatically validate data.
   - Example: email, url, number.

Benefits of Validation:

- Improves data quality
- Reduces server-side errors
- Enhances user experience
- Prevents incomplete submissions

Client-side validation improves usability, but server-side validation is still required for security.`,

    keyPoints: [
      "Validation checks user input before submission",

      "HTML5 provides built-in validation features",

      "required prevents empty submissions",

      "pattern allows custom validation rules",

      "Server-side validation is still necessary",
    ],

    codeExample: `<!-- Required Field -->

<input type="text"
       required>



<!-- Email Validation -->

<input type="email"
       required>



<!-- Length Validation -->

<input type="password"
       minlength="8"
       maxlength="20">



<!-- Number Validation -->

<input type="number"
       min="1"
       max="100">



<!-- Pattern Validation -->

<input type="text"
       pattern="[A-Za-z]{3,}"
       title="Minimum 3 letters required">



<!-- Complete Form -->

<form>

  <label for="email">Email</label>

  <input type="email"
         id="email"
         required>

  <button type="submit">
    Submit
  </button>

</form>`,

    language: "html",

    commonMistakes: [
      "Relying only on client-side validation",

      "Forgetting required fields",

      "Using incorrect regular expressions",

      "Not providing helpful validation messages",
    ],

    thinkingProcess: `Step 1: Identify validation requirements

Step 2: Choose appropriate HTML validation attributes

Step 3: Test valid and invalid inputs

Step 4: Provide meaningful feedback to users

Step 5: Add server-side validation for security`,

    realWorldApplication:
      "Registration forms validate email addresses, password fields enforce minimum lengths, and booking systems validate dates and quantities before submission.",

    interviewTip:
      "A strong interview answer explains that HTML5 validation improves user experience but should never replace server-side validation because users can bypass client-side checks.",
  },
  {
    id: "html-23",

    question:
      "What is the difference between required, readonly, and disabled attributes in HTML?",

    difficulty: "Intermediate",

    shortAnswer:
      "required forces users to enter a value, readonly allows viewing but prevents editing, and disabled completely disables the form control.",

    detailedAnswer: `The required, readonly, and disabled attributes are commonly used in HTML forms, but they serve different purposes.

1. required
   - Makes a field mandatory.
   - Form cannot be submitted if the field is empty.
   - User can enter and modify data.

2. readonly
   - User can see the field value.
   - User cannot modify the value.
   - Value is submitted with the form.

3. disabled
   - Field is completely disabled.
   - User cannot interact with it.
   - Value is NOT submitted with the form.

Comparison:

required:
✔ Editable
✔ Submitted
✔ Mandatory

readonly:
✔ Visible
✔ Submitted
✖ Not Editable

disabled:
✔ Visible
✖ Not Editable
✖ Not Submitted

Choosing the correct attribute depends on the form's requirements.`,

    keyPoints: [
      "required makes a field mandatory",

      "readonly prevents editing but allows submission",

      "disabled prevents interaction and submission",

      "readonly values are sent to the server",

      "disabled values are not sent to the server",
    ],

    codeExample: `<!-- Required Field -->

<input type="text"
       required>



<!-- Readonly Field -->

<input type="text"
       value="User123"
       readonly>



<!-- Disabled Field -->

<input type="text"
       value="Admin"
       disabled>



<!-- Form Example -->

<form>

  <input type="email"
         required
         placeholder="Enter Email">

  <input type="text"
         value="Generated ID"
         readonly>

  <input type="text"
         value="Unavailable"
         disabled>

  <button type="submit">
    Submit
  </button>

</form>`,

    language: "html",

    commonMistakes: [
      "Confusing readonly with disabled",

      "Expecting disabled fields to be submitted",

      "Using readonly when a field should be hidden",

      "Forgetting that required only works on editable fields",
    ],

    thinkingProcess: `Step 1: Determine whether the user should edit the field

Step 2: If editing is required, use required when necessary

Step 3: If viewing only, use readonly

Step 4: If the field should be inactive, use disabled

Step 5: Verify whether the value should be submitted`,

    realWorldApplication:
      "Order forms often use readonly order IDs, admin dashboards may disable unavailable fields, and registration forms frequently use required fields for essential information.",

    interviewTip:
      'The most common interview question is: "Will a disabled field be submitted?" The answer is NO. A readonly field will be submitted, but a disabled field will not.',
  },
  {
    id: "html-24",

    question: "How do file uploads work in HTML forms?",

    difficulty: "Intermediate",

    shortAnswer:
      'File uploads are implemented using an input element with type="file" and a form configured with enctype="multipart/form-data".',

    detailedAnswer: `HTML allows users to upload files such as images, documents, videos, and PDFs through forms.

The file upload feature uses:

<input type="file">

Important Requirements:

1. type="file"
   - Creates a file selection control.

2. method="POST"
   - Required for file uploads.

3. enctype="multipart/form-data"
   - Allows binary file data to be transmitted correctly.

Common Attributes:

accept
- Restricts file types.

multiple
- Allows selecting multiple files.

required
- Makes file selection mandatory.

File uploads are commonly used for profile pictures, resumes, product images, and document submissions.

After the file is selected, the server processes and stores the uploaded file.`,

    keyPoints: [
      'Use input type="file" for uploads',

      'Forms should use method="POST"',

      "multipart/form-data is required",

      "accept limits file types",

      "multiple allows multiple file selection",
    ],

    codeExample: `<!-- Basic File Upload -->

<form action="/upload"
      method="POST"
      enctype="multipart/form-data">

  <input type="file"
         name="document">

  <button type="submit">
    Upload
  </button>

</form>



<!-- Image Upload Only -->

<input type="file"
       accept="image/*">



<!-- PDF Upload -->

<input type="file"
       accept=".pdf">



<!-- Multiple Files -->

<input type="file"
       multiple>



<!-- Required Upload -->

<input type="file"
       required>`,

    language: "html",

    commonMistakes: [
      "Forgetting multipart/form-data",

      "Using GET instead of POST",

      "Not validating uploaded files on the server",

      "Assuming accept prevents all invalid uploads",
    ],

    thinkingProcess: `Step 1: Add a file input field

Step 2: Configure the form for file uploads

Step 3: Restrict file types if needed

Step 4: Test file selection and submission

Step 5: Validate files on the server side`,

    realWorldApplication:
      "Social media platforms use file uploads for profile pictures, job portals allow resume uploads, and e-commerce websites allow sellers to upload product images.",

    interviewTip:
      'Always mention enctype="multipart/form-data". This is one of the most frequently tested file-upload interview concepts.',
  },
  {
    id: "html-25",

    question: "What are the <audio> and <video> elements in HTML5?",

    difficulty: "Intermediate",

    shortAnswer:
      "The <audio> and <video> elements allow developers to embed media directly into web pages without requiring external plugins such as Flash.",

    detailedAnswer: `HTML5 introduced native multimedia support through the <audio> and <video> elements.

Before HTML5, developers often relied on third-party plugins like Adobe Flash to play media files.

<audio> Element:
- Used to embed sound files.
- Supports formats such as MP3, WAV, and OGG.
- Provides built-in playback controls.

<video> Element:
- Used to embed video files.
- Supports formats such as MP4, WebM, and OGG.
- Provides built-in controls for play, pause, volume, and fullscreen.

Common Attributes:

controls
- Displays playback controls.

autoplay
- Automatically starts playback.

loop
- Repeats the media continuously.

muted
- Starts media without sound.

poster (video only)
- Displays an image before video playback starts.

HTML5 multimedia support improved performance, accessibility, and cross-browser compatibility.`,

    keyPoints: [
      "<audio> is used for sound playback",

      "<video> is used for video playback",

      "HTML5 removed the need for Flash plugins",

      "controls attribute adds playback controls",

      "Multiple source elements can improve browser compatibility",
    ],

    codeExample: `<!-- Audio Example -->

<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  Your browser does not support audio.
</audio>



<!-- Video Example -->

<video width="600"
       controls
       poster="thumbnail.jpg">

  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">

  Your browser does not support video.

</video>`,

    language: "html",

    commonMistakes: [
      "Using unsupported file formats",

      "Forgetting fallback text",

      "Autoplaying media with sound",

      "Not optimizing large media files",
    ],

    thinkingProcess: `Step 1: Identify whether audio or video is needed

Step 2: Choose the appropriate HTML element

Step 3: Add media source files

Step 4: Configure playback attributes

Step 5: Test media compatibility across browsers`,

    realWorldApplication:
      "Online courses, music streaming platforms, podcasts, news websites, and social media platforms use HTML5 audio and video elements for media playback.",

    interviewTip:
      "Mention that HTML5 introduced native multimedia support, eliminating the need for plugins like Flash. This is often a key interview point.",
  },
  {
    id: "html-26",

    question: "What is an iframe and when should it be used?",

    difficulty: "Intermediate",

    shortAnswer:
      "An iframe (<iframe>) is used to embed another webpage or external content inside the current webpage.",

    detailedAnswer: `The <iframe> element creates an inline frame that displays another HTML document within the current page.

Common Uses:

1. Embedding YouTube videos
2. Displaying Google Maps
3. Embedding external websites
4. Integrating third-party widgets
5. Showing documents or reports

Important Attributes:

src
- Specifies the URL of the embedded page.

width and height
- Define iframe dimensions.

title
- Improves accessibility.

loading="lazy"
- Delays loading until needed.

allowfullscreen
- Allows fullscreen mode for videos.

While iframes are useful, excessive use can affect performance and create security concerns when embedding untrusted content.`,

    keyPoints: [
      "<iframe> embeds external content",

      "src specifies the embedded URL",

      "Commonly used for videos and maps",

      "title improves accessibility",

      'loading="lazy" can improve performance',
    ],

    codeExample: `<!-- Basic Iframe -->

<iframe
  src="https://example.com"
  width="600"
  height="400"
  title="Example Website">
</iframe>



<!-- YouTube Embed -->

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube Video"
  allowfullscreen>
</iframe>



<!-- Google Maps Embed -->

<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600"
  height="450"
  loading="lazy"
  title="Google Map">
</iframe>`,

    language: "html",

    commonMistakes: [
      "Embedding untrusted websites",

      "Forgetting the title attribute",

      "Using too many iframes on one page",

      "Ignoring performance impacts",
    ],

    thinkingProcess: `Step 1: Determine if external content needs embedding

Step 2: Add the iframe element

Step 3: Configure width and height

Step 4: Improve accessibility with title

Step 5: Optimize performance with lazy loading`,

    realWorldApplication:
      "Businesses embed Google Maps for locations, content creators embed YouTube videos, and analytics dashboards often embed reports using iframes.",

    interviewTip:
      "Interviewers often ask for practical uses of iframes. Common examples include YouTube videos, Google Maps, payment gateways, and third-party widgets.",
  },
  {
    id: "html-27",

    question: "What are meta tags and why are they important in HTML?",

    difficulty: "Intermediate",

    shortAnswer:
      "Meta tags provide information about a webpage to browsers, search engines, and other web services. They help with SEO, responsiveness, character encoding, and page descriptions.",

    detailedAnswer: `Meta tags are placed inside the <head> section of an HTML document and contain metadata about the webpage.

Metadata means "data about data." These tags are not displayed on the webpage but are used by browsers, search engines, and social media platforms.

Common Meta Tags:

1. Character Encoding
   - Defines the character set used by the webpage.

2. Viewport
   - Makes websites responsive on mobile devices.

3. Description
   - Provides a summary of the webpage for search engines.

4. Keywords
   - Lists keywords related to page content.

5. Author
   - Specifies the author of the webpage.

6. Robots
   - Instructs search engines how to index the page.

Benefits:

- Improves SEO
- Enhances mobile responsiveness
- Helps browsers render content correctly
- Improves social media sharing previews
- Provides useful information to search engines`,

    keyPoints: [
      "Meta tags are placed inside the <head> section",

      "They provide information about the webpage",

      "Viewport meta tag enables responsive design",

      "Description meta tag improves SEO",

      "Meta tags are not visible on the webpage",
    ],

    codeExample: `<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">

  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">

  <meta name="description"
        content="Learn HTML with practical examples and interview questions">

  <meta name="keywords"
        content="HTML, CSS, JavaScript, Web Development">

  <meta name="author"
        content="John Doe">

  <title>HTML Tutorial</title>

</head>

<body>

  <h1>Welcome to HTML</h1>

</body>

</html>`,

    language: "html",

    commonMistakes: [
      "Forgetting the viewport meta tag",

      "Writing very long meta descriptions",

      "Adding duplicate meta tags",

      "Assuming meta keywords significantly improve SEO today",
    ],

    thinkingProcess: `Step 1: Understand what metadata means

Step 2: Learn where meta tags are placed

Step 3: Study common meta tags

Step 4: Understand SEO and responsiveness benefits

Step 5: Apply relevant meta tags to every webpage`,

    realWorldApplication:
      "E-commerce websites use meta descriptions to improve search results, while responsive websites rely on the viewport tag to display correctly on mobile devices.",

    interviewTip:
      "Always mention the viewport meta tag because it is one of the most important meta tags in modern web development.",
  },
  {
    id: "html-28",

    question:
      "What are HTML accessibility best practices and why are they important?",

    difficulty: "Intermediate",

    shortAnswer:
      "HTML accessibility best practices ensure that websites can be used by everyone, including people with disabilities, through proper semantic markup, labels, alt text, keyboard navigation, and ARIA attributes.",

    detailedAnswer: `Accessibility (often abbreviated as a11y) means designing websites that are usable by all users, including those with visual, hearing, motor, or cognitive impairments.

Important Accessibility Practices:

1. Use Semantic HTML
   - <header>, <nav>, <main>, <article>, <footer>

2. Add Alt Text to Images
   - Helps screen readers describe images.

3. Use Labels for Form Fields
   - Improves form accessibility.

4. Maintain Proper Heading Hierarchy
   - Use h1 → h2 → h3 logically.

5. Support Keyboard Navigation
   - Users should navigate without a mouse.

6. Provide Sufficient Color Contrast
   - Improves readability.

7. Use ARIA Attributes When Necessary
   - Enhances accessibility for complex components.

Benefits:

- Improves usability for everyone
- Meets accessibility standards
- Increases audience reach
- Enhances SEO
- Supports legal compliance in many regions`,

    keyPoints: [
      "Accessibility makes websites usable for everyone",

      "Semantic HTML improves screen reader support",

      "Images should include descriptive alt text",

      "Forms should use proper labels",

      "Keyboard accessibility is essential",
    ],

    codeExample: `<!-- Accessible Image -->

<img src="logo.png"
     alt="Company Logo">



<!-- Accessible Form -->

<label for="email">
  Email Address
</label>

<input type="email"
       id="email"
       name="email">



<!-- Semantic Structure -->

<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<main>
  <article>
    <h2>Latest News</h2>
    <p>Content goes here...</p>
  </article>
</main>`,

    language: "html",

    commonMistakes: [
      "Missing alt attributes on images",

      "Using div elements instead of semantic tags",

      "Skipping heading levels",

      "Creating forms without labels",

      "Ignoring keyboard users",
    ],

    thinkingProcess: `Step 1: Consider users with disabilities

Step 2: Use semantic HTML wherever possible

Step 3: Add labels and alt text

Step 4: Test keyboard navigation

Step 5: Verify compatibility with screen readers`,

    realWorldApplication:
      "Government websites, educational platforms, banking applications, and large commercial websites invest heavily in accessibility to ensure equal access for all users.",

    interviewTip:
      "Interviewers often expect you to mention semantic HTML, alt attributes, labels, keyboard navigation, and screen readers. These are the core accessibility concepts.",
  },
  {
    id: "html-29",

    question:
      "What is the difference between Local Storage and Session Storage in HTML5?",

    difficulty: "Intermediate",

    shortAnswer:
      "Local Storage stores data permanently until it is manually removed, while Session Storage stores data only for the duration of the browser tab session.",

    detailedAnswer: `HTML5 introduced Web Storage APIs that allow websites to store data in the browser.

The two main storage mechanisms are:

1. Local Storage
   - Stores data with no expiration date.
   - Data remains available even after the browser is closed.
   - Shared across all tabs of the same origin.

2. Session Storage
   - Stores data only for the current browser tab.
   - Data is removed when the tab or browser is closed.
   - Not shared between tabs.

Common Methods:

setItem()
- Stores data.

getItem()
- Retrieves data.

removeItem()
- Removes a specific item.

clear()
- Removes all stored items.

Storage Capacity:
- Typically around 5MB to 10MB depending on the browser.

Web Storage is useful for saving user preferences, themes, shopping cart data, and temporary session information.`,

    keyPoints: [
      "Local Storage persists after browser restart",

      "Session Storage exists only during the tab session",

      "Both use key-value pairs",

      "Both support setItem() and getItem()",

      "Local Storage is commonly used for user preferences",
    ],

    codeExample: `<!-- Local Storage -->

<script>

localStorage.setItem(
  "theme",
  "dark"
);

const theme =
  localStorage.getItem("theme");

console.log(theme);

</script>



<!-- Session Storage -->

<script>

sessionStorage.setItem(
  "username",
  "john"
);

const username =
  sessionStorage.getItem("username");

console.log(username);

</script>`,

    language: "html",

    commonMistakes: [
      "Storing sensitive data in localStorage",

      "Assuming sessionStorage works across tabs",

      "Forgetting to handle missing values",

      "Using storage for large amounts of data",
    ],

    thinkingProcess: `Step 1: Determine how long data should persist

Step 2: Use localStorage for long-term data

Step 3: Use sessionStorage for temporary data

Step 4: Store data as key-value pairs

Step 5: Retrieve and manage stored values properly`,

    realWorldApplication:
      "Dark mode settings, language preferences, and shopping cart data are often stored in localStorage, while temporary login workflows and form progress may use sessionStorage.",

    interviewTip:
      "The most important difference is persistence. Local Storage survives browser restarts, while Session Storage is cleared when the tab closes.",
  },
  {
    id: "html-30",

    question: "How can you create a responsive bottom navigation bar in HTML?",

    difficulty: "coding",

    shortAnswer:
      "A responsive bottom navigation bar can be created using semantic HTML navigation elements and CSS positioning to keep it fixed at the bottom of the screen.",

    detailedAnswer: `Bottom navigation bars are commonly used in mobile applications and responsive websites.

A bottom navbar typically:

- Stays fixed at the bottom of the viewport
- Provides quick navigation links
- Remains visible while scrolling
- Adapts to different screen sizes

Implementation Steps:

1. Create a <nav> element.
2. Add navigation links.
3. Use CSS position: fixed.
4. Set bottom: 0.
5. Use flexbox for equal spacing.
6. Make it responsive for mobile devices.

Bottom navigation bars improve user experience on mobile devices because important navigation options remain easily accessible.`,

    keyPoints: [
      "Use the semantic <nav> element",

      "Use position: fixed",

      "Set bottom: 0",

      "Use flexbox for layout",

      "Commonly used in mobile interfaces",
    ],

    codeExample: `<!DOCTYPE html>
<html>

<head>
<style>

body {
  margin: 0;
  padding-bottom: 70px;
  font-family: Arial, sans-serif;
}

.bottom-navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #222;
  padding: 15px 0;
}

.bottom-navbar a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.bottom-navbar a:hover {
  color: #4CAF50;
}

</style>
</head>

<body>

<h1>Responsive Bottom Navbar Example</h1>

<p>Scroll the page content.</p>

<nav class="bottom-navbar">

  <a href="#">Home</a>

  <a href="#">Search</a>

  <a href="#">Profile</a>

  <a href="#">Settings</a>

</nav>

</body>

</html>`,

    language: "html",

    commonMistakes: [
      "Forgetting to add bottom padding to the page",

      "Using fixed positioning without responsive testing",

      "Making navigation links too small for touch devices",

      "Not using semantic navigation elements",
    ],

    thinkingProcess: `Step 1: Create a navigation container

Step 2: Add navigation links

Step 3: Fix the navbar to the bottom

Step 4: Use flexbox for alignment

Step 5: Test on different screen sizes`,

    realWorldApplication:
      "Mobile banking apps, social media platforms, e-commerce websites, and progressive web apps commonly use bottom navigation bars to improve usability.",

    interviewTip:
      "When answering coding questions about bottom navigation, mention semantic HTML, responsive design, touch-friendly spacing, and fixed positioning.",
  },
  {
    id: "html-31",

    question:
      "What is the difference between Cookies, Local Storage, and Session Storage?",

    difficulty: "Advanced",

    shortAnswer:
      "Cookies are small pieces of data sent to the server with every request, Local Storage stores data permanently in the browser, and Session Storage stores data only for the current browser session.",

    detailedAnswer: `Cookies, Local Storage, and Session Storage are all used to store data in the browser, but they have different purposes and behaviors.

1. Cookies
   - Small pieces of data stored by the browser.
   - Sent automatically to the server with every HTTP request.
   - Can have expiration dates.
   - Commonly used for authentication and user sessions.
   - Limited storage size (typically around 4KB).

2. Local Storage
   - Stores data permanently until manually removed.
   - Data is not sent to the server automatically.
   - Larger storage capacity (typically 5MB+).
   - Shared across tabs of the same origin.

3. Session Storage
   - Stores data only during the current browser tab session.
   - Cleared when the tab is closed.
   - Not shared across tabs.
   - Data is not sent to the server automatically.

Comparison:

Cookies:
✔ Sent to server
✔ Expiration support
✖ Small storage limit

Local Storage:
✔ Persistent storage
✔ Larger capacity
✖ Not automatically sent to server

Session Storage:
✔ Temporary storage
✔ Tab-specific
✖ Removed after tab closes`,

    keyPoints: [
      "Cookies are automatically sent with HTTP requests",

      "Local Storage persists after browser restart",

      "Session Storage is removed when the tab closes",

      "Cookies have smaller storage limits",

      "Local Storage and Session Storage are client-side only",
    ],

    codeExample: `<!-- Cookie -->

<script>

document.cookie =
  "username=John; expires=Fri, 31 Dec 2027 12:00:00 UTC; path=/";

</script>



<!-- Local Storage -->

<script>

localStorage.setItem(
  "theme",
  "dark"
);

</script>



<!-- Session Storage -->

<script>

sessionStorage.setItem(
  "cartCount",
  "3"
);

</script>`,

    language: "html",

    commonMistakes: [
      "Storing sensitive information in localStorage",

      "Using cookies for large amounts of data",

      "Assuming sessionStorage persists after tab closure",

      "Not understanding that cookies are sent to the server",
    ],

    thinkingProcess: `Step 1: Determine whether server access is needed

Step 2: Choose cookies for authentication and sessions

Step 3: Choose localStorage for persistent client data

Step 4: Choose sessionStorage for temporary data

Step 5: Consider security and storage limitations`,

    realWorldApplication:
      "Authentication tokens often use cookies, website themes use localStorage, and temporary checkout progress may use sessionStorage.",

    interviewTip:
      'A common interview question is: "Which storage mechanism is automatically sent to the server?" The answer is Cookies.',
  },
  {
    id: "html-32",

    question:
      "What are data-* attributes in HTML and when should they be used?",

    difficulty: "Advanced",

    shortAnswer:
      "data-* attributes allow developers to store custom data directly on HTML elements without creating non-standard attributes.",

    detailedAnswer: `HTML5 introduced data-* attributes to store custom information on elements.

Syntax:

data-name="value"

Examples:
- data-id
- data-user
- data-category
- data-product

Benefits:

1. Standards-Compliant
   - Avoids creating invalid custom attributes.

2. Easy JavaScript Access
   - Accessible through the dataset property.

3. Useful for Dynamic Applications
   - Store IDs, statuses, categories, and configuration values.

4. Improves Maintainability
   - Keeps related data attached to elements.

JavaScript automatically converts data attributes into dataset properties.

Example:
data-user-id becomes dataset.userId

These attributes are widely used in modern frontend development.`,

    keyPoints: [
      "data-* attributes store custom data",

      "They are valid HTML5 attributes",

      "JavaScript accesses them using dataset",

      "Useful for dynamic UI interactions",

      "Keep element-specific data organized",
    ],

    codeExample: `<!-- HTML -->

<button
  data-product-id="101"
  data-category="electronics">

  Add to Cart

</button>



<!-- JavaScript -->

<script>

const button =
  document.querySelector("button");

console.log(
  button.dataset.productId
);

console.log(
  button.dataset.category
);

</script>`,

    language: "html",

    commonMistakes: [
      "Creating invalid custom attributes instead of data-*",

      "Storing large amounts of application data",

      "Using data attributes for sensitive information",

      "Incorrect dataset property naming",
    ],

    thinkingProcess: `Step 1: Determine whether custom element data is needed

Step 2: Create data-* attributes

Step 3: Store small relevant values

Step 4: Access them using JavaScript

Step 5: Use them to drive UI behavior`,

    realWorldApplication:
      "E-commerce websites store product IDs, dashboards store record identifiers, and interactive components use data attributes to pass configuration values to JavaScript.",

    interviewTip:
      "Interviewers often ask how JavaScript accesses data-* attributes. Mention the dataset property and explain that data-user-id becomes dataset.userId.",
  },

  {
    id: "html-33",
    question: "What is semantic HTML and why is it important?",
    difficulty: "Basic",
    shortAnswer:
      "Semantic HTML uses meaningful tags that describe the content they contain, making code more readable and accessible.",
    detailedAnswer: `Semantic HTML is the practice of using HTML tags that have meaning and convey the purpose of the content.

  Examples of semantic tags: <article>, <section>, <nav>, <header>, <footer>, <aside>, <main>, <figure>
  Non-semantic examples: <div>, <span>

  Semantic HTML is important because:
  1. Improves accessibility for screen readers
  2. Makes code more readable and maintainable
  3. Better SEO for search engines
  4. Provides clear structure to your content
  5. Supports better responsive design`,
    keyPoints: [
      "Semantic tags describe their meaning to both the browser and developer",
      "They improve accessibility for people using assistive technologies",
      "Search engines can better understand your content structure",
      "Code becomes more maintainable and organized",
      "Examples: <header>, <nav>, <article>, <section>, <footer>",
    ],
    codeExample: `<!-- Non-semantic -->
  <div id="header">
    <div class="logo">Logo</div>
    <div id="nav">
      <div>Home</div>
      <div>About</div>
    </div>
  </div>

  <!-- Semantic - Better! -->
  <header>
    <h1>Logo</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>`,
    language: "html",
    commonMistakes: [
      "Using only <div> elements when semantic tags would be more appropriate",
      "Using <strong> or <b> for styling instead of for emphasis",
      "Not using proper heading hierarchy (<h1> to <h6>)",
      "Using <article> for everything when <section> would be better",
    ],
    thinkingProcess: `Step 1: Understand what semantic means - it's about meaning
  Step 2: Think about why meaning matters - accessibility, SEO, maintainability
  Step 3: Compare semantic vs non-semantic examples
  Step 4: List the benefits and real-world use cases
  Step 5: Provide code examples showing the difference`,
    realWorldApplication:
      "When building websites, using semantic HTML helps screen readers provide better navigation for visually impaired users, and helps Google understand your page structure for better search rankings.",
    interviewTip:
      "Emphasize the accessibility benefits and show you understand that semantic HTML is about making content meaningful to both machines and humans.",
  },

  {
    id: "html-34",
    question: "What is the difference between <div> and <section>?",
    difficulty: "Basic",
    shortAnswer:
      "<div> is for layout/styling (non-semantic), <section> groups related content semantically.",
    detailedAnswer: `<div> and <section> are both container elements, but serve different purposes:

  <div>:
  - Non-semantic container for layout and styling
  - No inherent meaning about its content
  - Used purely for CSS styling and JavaScript manipulation
  - Does not contribute to document outline

  <section>:
  - Semantic container that groups thematically related content
  - Creates a new section in the document outline
  - Each section should ideally have a heading
  - Helps with accessibility and SEO`,
    keyPoints: [
      "Use <section> for thematic grouping of content",
      "Use <div> for layout and styling purposes",
      "<section> affects document outline, <div> does not",
      "<section> typically contains a heading related to its content",
      "Multiple <section> elements can exist in a document",
    ],
    codeExample: `<!-- Using <div> for layout -->
  <div class="container">
    <div class="hero-section" style="background: blue;">
      <h1>Title</h1>
    </div>
  </div>

  <!-- Using <section> semantically -->
  <section id="hero">
    <h2>About Our Product</h2>
    <p>Related content about the product...</p>
  </section>

  <section id="features">
    <h2>Key Features</h2>
    <p>Content about features...</p>
  </section>`,
    language: "html",
    commonMistakes: [
      "Using <section> when <div> would be more appropriate",
      "Creating <section> elements without meaningful heading",
      "Overusing <section> for every container",
      "Confusing <section> with <article>",
    ],
    thinkingProcess: `Step 1: Understand the purpose of each element
  Step 2: Recognize <div> is for layout, <section> is for meaning
  Step 3: Think about document structure and outline
  Step 4: Consider accessibility implications
  Step 5: Provide comparative examples`,
    realWorldApplication:
      "On an e-commerce site, use <section> to separate product categories, reviews, and recommendations. Use <div> for internal layout styling within each section.",
    interviewTip:
      "Show that you understand semantics are about adding meaning to your HTML structure, not just about using different tags.",
  },

  {
    id: "html-35",
    question: "What are HTML5 data attributes and how do you use them?",
    difficulty: "Intermediate",
    shortAnswer:
      "Data attributes (data-*) store custom data on HTML elements that can be accessed via JavaScript.",
    detailedAnswer: `HTML5 data attributes allow you to store custom data directly on HTML elements. They are always prefixed with 'data-' and can store any string value.

  Syntax: <element data-attributename="value"></element>

  Accessing data attributes:
  1. Via getAttribute() method
  2. Via dataset property (modern approach)
  3. Via CSS (limited use)

  Benefits:
  - Clean way to pass data to JavaScript without using global variables
  - Keeps markup clean and semantic
  - Easy to maintain and update
  - No conflicts with standard HTML attributes`,
    keyPoints: [
      'Data attributes must start with "data-"',
      "Values are always strings (convert if needed)",
      "Accessed via element.dataset property in JavaScript",
      "Case-insensitive for attribute names",
      "Perfect for storing IDs, configuration, or metadata",
    ],
    codeExample: `<!-- HTML with data attributes -->
  <button id="btn" data-user-id="12345" data-action="delete" data-confirm="true">
    Delete Account
  </button>

  <!-- Accessing in JavaScript -->
  const btn = document.getElementById('btn');

  // Method 1: getAttribute()
  console.log(btn.getAttribute('data-user-id')); // "12345"

  // Method 2: dataset (recommended)
  console.log(btn.dataset.userId); // "12345"
  console.log(btn.dataset.action); // "delete"
  console.log(btn.dataset.confirm); // "true"

  // Converting values
  const userId = parseInt(btn.dataset.userId); // 12345

  // Modifying data attributes
  btn.dataset.status = "pending"; // Creates data-status="pending"
  delete btn.dataset.action; // Removes data-action attribute

  <!-- Using in CSS -->
  [data-action="delete"] {
    color: red;
  }`,
    language: "javascript",
    commonMistakes: [
      "Forgetting that data attribute values are always strings",
      "Using camelCase in HTML (use kebab-case: data-user-id, not data-userId)",
      "Storing large amounts of data in attributes",
      "Not converting string values to numbers when needed",
      "Using data attributes for frequently accessed data",
    ],
    thinkingProcess: `Step 1: Understand what data attributes are and why they exist
  Step 2: Think about use cases - storing metadata, configuration
  Step 3: Show how to access them in JavaScript
  Step 4: Explain camelCase conversion in dataset
  Step 5: Demonstrate common patterns and conversions`,
    realWorldApplication:
      "Use data attributes to store product IDs in an e-commerce cart, user IDs for analytics tracking, or modal configurations without hardcoding in JavaScript.",
    interviewTip:
      "Mention that while data attributes are useful, you should not store sensitive data in them as they are visible in HTML source code.",
  },

  {
    id: "html-36",
    question: "What is the purpose of the alt attribute in images?",
    difficulty: "Basic",
    shortAnswer:
      "The alt attribute provides alternative text describing the image for accessibility and SEO.",
    detailedAnswer: `The alt attribute is crucial for web accessibility and SEO. It describes the content of an image in text form.

  Primary purposes:
  1. Accessibility: Screen readers read alt text for visually impaired users
  2. SEO: Search engines use alt text to understand image content
  3. Broken images: Displays when image fails to load
  4. Context: Helps users understand content if images don't load

  Writing effective alt text:
  - Be concise but descriptive
  - Don't start with "image of" (screen readers already say "image")
  - For decorative images, use empty alt=""
  - Include relevant keywords naturally
  - Describe function, not just appearance`,
    keyPoints: [
      "Alt text is read by screen readers for accessibility",
      "Important for SEO and search image indexing",
      "Should be descriptive but concise (typically under 125 characters)",
      'Use alt="" for purely decorative images',
      "Alt text displays when image fails to load",
    ],
    codeExample: `<!-- Good alt attributes -->
  <img src="logo.png" alt="Company logo">
  <img src="sunset.jpg" alt="Sunset over the ocean at beach">
  <img src="chart.png" alt="Sales growth chart showing 45% increase">

  <!-- Decorative images -->
  <img src="divider.png" alt="">
  <img src="background.jpg" alt="">

  <!-- Bad examples -->
  <img src="photo.jpg" alt="Photo"> <!-- Too vague -->
  <img src="pic.jpg" alt="Image of a dog"> <!-- "Image of" is redundant -->
  <img src="graph.png" alt=""> <!-- Missing description for important image -->

  <!-- In context -->
  <figure>
    <img src="team.jpg" alt="Team meeting in office conference room">
    <figcaption>Our team collaborating on project planning</figcaption>
  </figure>`,
    language: "html",
    commonMistakes: [
      'Using alt="image" or alt="picture" - too vague',
      "Forgetting alt attribute entirely",
      "Making alt text too long (should be concise)",
      "Putting alt text in adjacent text instead of attribute",
      "Using keyword stuffing in alt text",
    ],
    thinkingProcess: `Step 1: Understand accessibility is primary purpose
  Step 2: Think about screen reader user experience
  Step 3: Consider SEO benefits
  Step 4: Think about when images fail to load
  Step 5: Provide examples of good vs bad alt text`,
    realWorldApplication:
      'On a product page, use alt="Blue running shoes with white stripe" for product images. For charts or graphs, describe the key data like "Revenue chart showing 30% growth in Q4".',
    interviewTip:
      "Emphasize that you care about accessibility and user experience, not just technical requirements.",
  },

  {
    id: "html-37",
    question: "What are the differences between block and inline elements?",
    difficulty: "Basic",
    shortAnswer:
      "Block elements take full width (new line), inline elements take only needed width (same line).",
    detailedAnswer: `Block and inline are two fundamental display categories in HTML:

  Block Elements:
  - Take up full width available (stretch left to right)
  - Always start on new line
  - Respect all margins and padding
  - Width and height can be set
  - Examples: <div>, <p>, <h1-h6>, <section>, <article>, <nav>

  Inline Elements:
  - Only take up as much width as necessary
  - Flow within text, no line breaks
  - Only respect left/right margins, not top/bottom
  - Width and height cannot be set
  - Examples: <span>, <a>, <strong>, <em>, <img>, <button>

  Inline-Block (hybrid):
  - Behaves like inline (flows with text)
  - But respects width, height, and all margins
  - Useful for layout without using floats`,
    keyPoints: [
      "Block elements force line breaks, inline elements do not",
      "Block elements respect all margins/padding, inline do not respect vertical margins",
      "You can set width/height on block elements, not inline",
      "Use CSS display property to change element behavior",
      "Inline-block combines both behaviors",
    ],
    codeExample: `<!-- Block Elements -->
  <div>Block 1</div>
  <div>Block 2</div>
  <!-- Result: Divs stack vertically -->

  <!-- Inline Elements -->
  <span>Inline 1</span>
  <span>Inline 2</span>
  <!-- Result: Spans flow horizontally -->

  <!-- CSS to change display -->
  <style>
    /* Make inline element behave like block */
    span.block-style {
      display: block;
      width: 200px;
      height: 100px;
    }

    /* Make block element behave like inline */
    div.inline-style {
      display: inline;
      margin: 20px; /* Only left/right work */
    }

    /* Best of both worlds -->
    .inline-block-demo {
      display: inline-block;
      width: 150px;
      margin: 20px;
    }
  </style>

  <div class="inline-block-demo">Item 1</div>
  <div class="inline-block-demo">Item 2</div>
  <div class="inline-block-demo">Item 3</div>`,
    language: "html",
    commonMistakes: [
      "Not understanding why margins don't work on inline elements",
      "Trying to set width/height on inline elements",
      "Using too many <div> elements when semantic elements are better",
      "Confusing inline-block with flexbox for layout",
    ],
    thinkingProcess: `Step 1: Understand the core difference - flow and space
  Step 2: Think about how block elements stack vertically
  Step 3: Consider how inline elements flow horizontally
  Step 4: Recognize the constraints of each
  Step 5: Explain CSS display property as the solution`,
    realWorldApplication:
      "Use block elements for major page sections like headers and footers. Use inline elements for text-level formatting. Use inline-block or flexbox for aligned layouts without floats.",
    interviewTip:
      "Connect this to modern CSS techniques like flexbox and grid, showing you understand the evolution from block/inline to more powerful layout methods.",
  },

  {
    id: "html-38",
    question: "What is the purpose of meta tags and which are most important?",
    difficulty: "Intermediate",
    shortAnswer:
      "Meta tags provide metadata about the HTML document that affects how browsers and search engines handle it.",
    detailedAnswer: `Meta tags are HTML elements that provide metadata (data about data) for the HTML document. They are placed in the <head> section and don't display on the page.

  Important meta tags:
  1. Charset: Specifies character encoding (UTF-8)
  2. Viewport: Controls layout on mobile devices
  3. Description: Summary of page content (appears in search results)
  4. Keywords: Related search terms (less important now)
  5. Author: Author of the document
  6. OpenGraph: For social media sharing
  7. Twitter Card: For Twitter sharing

  Each serves a specific SEO and usability purpose.`,
    keyPoints: [
      "Meta tags provide information about the document, not content",
      "Viewport meta tag is critical for responsive design",
      "Meta description affects search result snippets",
      "OpenGraph tags improve social sharing appearance",
      "Charset declaration prevents encoding issues",
    ],
    codeExample: `<!-- Essential meta tags -->
  <head>
    <!-- Character encoding -->
    <meta charset="UTF-8">

    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO: Page description -->
    <meta name="description" content="Professional full-stack developer offering web development services">

    <!-- SEO: Author -->
    <meta name="author" content="Pratiksha Jadhav">

    <!-- Social Media: OpenGraph (Facebook) -->
    <meta property="og:title" content="Full Stack Web Development">
    <meta property="og:description" content="Building modern web applications">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com">

    <!-- Social Media: Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Full Stack Web Development">
    <meta name="twitter:image" content="https://example.com/image.jpg">

    <!-- Other useful meta tags -->
    <meta name="theme-color" content="#007bff">
    <meta name="robots" content="index, follow">
  </head>`,
    language: "html",
    commonMistakes: [
      "Forgetting the viewport meta tag (breaks mobile responsiveness)",
      "Writing very long or very short meta descriptions",
      "Keyword stuffing in meta tags",
      "Not updating meta descriptions for different pages",
      "Ignoring OpenGraph tags for shareable content",
    ],
    thinkingProcess: `Step 1: Understand what metadata is and why it matters
  Step 2: Identify critical meta tags (charset, viewport, description)
  Step 3: Think about SEO implications
  Step 4: Consider social media sharing
  Step 5: Explain each tag's purpose and best practices`,
    realWorldApplication:
      "When building a blog, use proper meta descriptions so articles show compelling previews in search results. Use OpenGraph tags so blog posts display nicely when shared on Facebook.",
    interviewTip:
      "Show understanding that meta tags are part of SEO strategy and mobile-first responsive design philosophy.",
  },
];
