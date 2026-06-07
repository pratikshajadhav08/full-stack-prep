export const tailwindcssQuestions = [
{
  id: "tailwind-1",
  question: "What is Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Tailwind CSS is a utility-first CSS framework that provides pre-built utility classes for rapidly building modern and responsive user interfaces directly in HTML.",

  detailedAnswer: `Tailwind CSS is a popular utility-first CSS framework designed to help developers build custom user interfaces quickly.

Definition:
Tailwind CSS provides low-level utility classes that can be combined directly in HTML to create complex designs without writing custom CSS.

Example:

<div class="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind
</div>

Instead of writing:

.card {
  background: blue;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}

Tailwind lets you apply styles directly using utility classes.

Key Characteristics:
- Utility-first approach
- Highly customizable
- Mobile-first responsive design
- Small production bundles
- Fast UI development

Popular Features:
- Flexbox utilities
- Grid utilities
- Typography utilities
- Responsive breakpoints
- Dark mode support
- Animations

Tailwind CSS is widely used with React, Next.js, Vue, Angular, and other modern frontend frameworks.`,

  keyPoints: [
    "Utility-first CSS framework",
    "Build UIs without writing much CSS",
    "Highly customizable",
    "Responsive design support",
    "Popular in modern frontend development"
  ],

  codeExample: `<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Click Me
</button>`,

  language: "html",

  commonMistakes: [
    "Thinking Tailwind provides ready-made components",
    "Writing excessive custom CSS unnecessarily",
    "Ignoring responsive utilities",
    "Using too many utility classes without organization",
    "Not learning utility-first concepts"
  ],

  thinkingProcess: `Step 1: Understand utility classes
Step 2: Combine utilities
Step 3: Build UI components
Step 4: Add responsive styles
Step 5: Optimize for production`,

  realWorldApplication:
    "Companies use Tailwind CSS to build dashboards, SaaS applications, portfolios, and e-commerce interfaces quickly.",

  interviewTip:
    "Mention that Tailwind is utility-first and styles are applied directly through classes rather than custom CSS files."
},

{
  id: "tailwind-2",
  question: "What are the features of Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Tailwind CSS provides utility classes, responsive design utilities, customization options, dark mode support, JIT compilation, and excellent performance optimization.",

  detailedAnswer: `Tailwind CSS includes many features that improve frontend development productivity.

Main Features:

1. Utility-First Classes
   - text-center
   - bg-blue-500
   - flex

2. Responsive Design
   - sm:
   - md:
   - lg:
   - xl:

3. Customization
   - Custom colors
   - Custom spacing
   - Custom themes

4. JIT Compiler
   - Generates classes on demand
   - Faster development

5. Dark Mode
   - Built-in support

6. Flexbox and Grid Utilities
   - Easy layouts

7. Animation Utilities
   - Transitions
   - Keyframes

8. Small Production Bundle
   - Removes unused CSS

9. Mobile-First Design
   - Responsive by default

10. Framework Compatibility
   - React
   - Next.js
   - Vue
   - Angular

These features make Tailwind one of the most popular CSS frameworks today.`,

  keyPoints: [
    "Utility-first classes",
    "Responsive design",
    "JIT compiler",
    "Dark mode support",
    "Production optimization"
  ],

  codeExample: `<div class="bg-blue-500 md:bg-green-500 lg:bg-red-500">
  Responsive Colors
</div>`,

  language: "html",

  commonMistakes: [
    "Not using responsive utilities",
    "Ignoring customization options",
    "Keeping unused classes",
    "Not configuring dark mode",
    "Misunderstanding JIT compilation"
  ],

  thinkingProcess: `Step 1: Learn utilities
Step 2: Use responsive design
Step 3: Customize theme
Step 4: Optimize build
Step 5: Deploy production CSS`,

  realWorldApplication:
    "Large frontend applications rely on Tailwind's utility system for consistent and maintainable UI design.",

  interviewTip:
    "JIT mode, responsive utilities, and customization are commonly discussed Tailwind features."
},

{
  id: "tailwind-3",
  question: "Why use Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Tailwind CSS is used because it speeds up UI development, reduces context switching between HTML and CSS, and enables consistent, scalable design systems.",

  detailedAnswer: `Developers choose Tailwind CSS for productivity and maintainability.

Reasons to Use Tailwind:

1. Faster Development
   - Build directly in HTML

2. Less Custom CSS
   - Fewer CSS files

3. Consistent Design
   - Shared utility system

4. Responsive Design
   - Mobile-first utilities

5. Easy Maintenance
   - Styles visible in markup

6. Small Production CSS
   - Purges unused styles

7. Highly Customizable
   - Extend themes easily

Comparison:

Traditional CSS:
HTML → CSS File → Browser

Tailwind:
HTML + Utility Classes → Browser

This workflow reduces development time significantly.`,

  keyPoints: [
    "Faster UI development",
    "Reduced CSS maintenance",
    "Consistent design system",
    "Responsive support",
    "Smaller production bundles"
  ],

  codeExample: `<div class="flex items-center justify-center h-screen">
  Centered Content
</div>`,

  language: "html",

  commonMistakes: [
    "Using Tailwind exactly like Bootstrap",
    "Ignoring reusable components",
    "Not organizing class names",
    "Overusing arbitrary values",
    "Avoiding customization"
  ],

  thinkingProcess: `Step 1: Add utility classes
Step 2: Build layouts
Step 3: Apply responsive design
Step 4: Create reusable components
Step 5: Optimize production build`,

  realWorldApplication:
    "Startups frequently use Tailwind CSS to rapidly prototype and launch products.",

  interviewTip:
    "The biggest advantage is development speed while maintaining design consistency."
},

{
  id: "tailwind-4",
  question: "Advantages and Disadvantages of Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Tailwind CSS offers rapid development, consistency, and flexibility, but can lead to long class lists and has a learning curve for beginners.",

  detailedAnswer: `Like every framework, Tailwind CSS has strengths and weaknesses.

Advantages:

1. Fast Development
2. Utility-First Workflow
3. Consistent Design
4. Responsive Utilities
5. Easy Customization
6. Small Production Builds
7. No CSS Naming Problems

Disadvantages:

1. Long Class Names
2. Initial Learning Curve
3. HTML Can Look Crowded
4. Requires Utility Mindset
5. Less Familiar to Traditional CSS Developers

Example:

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

Advantages:
- No custom CSS needed

Disadvantage:
- Many utility classes in markup

Despite these drawbacks, many developers find the benefits outweigh the disadvantages.`,

  keyPoints: [
    "Rapid development",
    "Responsive design",
    "Long utility class lists",
    "Highly customizable",
    "Learning curve exists"
  ],

  codeExample: `<button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
  Save
</button>`,

  language: "html",

  commonMistakes: [
    "Focusing only on long class names",
    "Ignoring reusable component patterns",
    "Not using configuration features",
    "Avoiding utility-first workflow",
    "Comparing directly to component libraries"
  ],

  thinkingProcess: `Step 1: Evaluate benefits
Step 2: Understand drawbacks
Step 3: Apply best practices
Step 4: Create reusable patterns
Step 5: Scale application`,

  realWorldApplication:
    "Development teams often adopt Tailwind to improve consistency and reduce CSS maintenance costs.",

  interviewTip:
    "Mention both sides: fast development is a major advantage, while long utility class lists are a common criticism."
},

{
  id: "tailwind-5",
  question: "How does Tailwind CSS work?",
  difficulty: "Basic",

  shortAnswer:
    "Tailwind CSS works by providing utility classes that are combined directly in HTML, and its build process generates only the CSS that is actually used in the project.",

  detailedAnswer: `Tailwind CSS follows a utility-first approach.

Workflow:

1. Add Utility Classes

<div class="p-4 bg-blue-500 text-white">
  Content
</div>

2. Tailwind Scans Files

- HTML
- JavaScript
- React Components
- Vue Components

3. Generates Required CSS

Only used classes are included.

4. Outputs Optimized CSS

Benefits:
- Smaller file size
- Faster performance
- Easier maintenance

Build Process:

Source Files
      ↓
Tailwind Scanner
      ↓
Generate Utilities
      ↓
Optimized CSS Bundle

Modern Tailwind uses JIT (Just-In-Time) compilation to generate classes instantly during development.`,

  keyPoints: [
    "Utility-first workflow",
    "Scans project files",
    "Generates only used CSS",
    "Uses JIT compiler",
    "Optimized production output"
  ],

  codeExample: `<div class="p-6 bg-indigo-500 text-white rounded-lg">
  Tailwind Example
</div>`,

  language: "html",

  commonMistakes: [
    "Thinking all Tailwind CSS ships to production",
    "Not configuring content paths",
    "Ignoring JIT behavior",
    "Using unnecessary custom CSS",
    "Incorrect build setup"
  ],

  thinkingProcess: `Step 1: Write utility classes
Step 2: Scan source files
Step 3: Generate CSS
Step 4: Optimize output
Step 5: Deploy application`,

  realWorldApplication:
    "Modern React and Next.js applications use Tailwind's JIT engine to keep CSS bundles extremely small.",

  interviewTip:
    "A strong answer includes utility classes, file scanning, JIT compilation, and CSS optimization."
},
{
  id: "tailwind-6",
  question: "How to install Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Tailwind CSS can be installed using npm and configured with PostCSS or integrated directly into frameworks like React, Next.js, and Vite.",

  detailedAnswer: `Tailwind CSS is commonly installed through npm.

Installation Steps:

1. Create Project

npm create vite@latest my-app

2. Install Tailwind

npm install tailwindcss @tailwindcss/vite

3. Configure Vite

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()]
})

4. Import Tailwind

@import "tailwindcss";

5. Start Development Server

npm run dev

Tailwind is now ready to use.

Supported Frameworks:
- React
- Next.js
- Vue
- Angular
- Svelte

Benefits:
- Easy setup
- Fast development
- Automatic optimization`,

  keyPoints: [
    "Install via npm",
    "Works with modern frameworks",
    "Easy setup process",
    "Supports Vite and Next.js",
    "Production optimization"
  ],

  codeExample: `npm install tailwindcss @tailwindcss/vite`,

  language: "bash",

  commonMistakes: [
    "Missing Tailwind import",
    "Incorrect setup steps",
    "Not restarting dev server",
    "Wrong package versions",
    "Skipping configuration"
  ],

  thinkingProcess: `Step 1: Install package
Step 2: Configure project
Step 3: Import Tailwind
Step 4: Start server
Step 5: Use utility classes`,

  realWorldApplication:
    "Developers install Tailwind CSS in React and Next.js projects to build responsive interfaces quickly.",

  interviewTip:
    "Know the basic npm installation process and framework integration workflow."
},

{
  id: "tailwind-7",
  question: "What is Utility-First CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Utility-First CSS is an approach where small reusable utility classes are combined directly in HTML to create designs without writing custom CSS.",

  detailedAnswer: `Utility-First CSS is the core concept behind Tailwind CSS.

Traditional CSS:

.card {
  padding: 16px;
  background: blue;
  color: white;
}

HTML:

<div class="card">
  Content
</div>

Utility-First CSS:

<div class="p-4 bg-blue-500 text-white">
  Content
</div>

Benefits:
- Faster development
- Less CSS code
- Better consistency
- Easier maintenance

Popular Utilities:
- p-4
- m-4
- text-center
- flex
- grid

Instead of creating custom classes, developers combine utility classes directly in markup.`,

  keyPoints: [
    "Small reusable classes",
    "Styles applied in HTML",
    "Less custom CSS",
    "Faster development",
    "Core Tailwind concept"
  ],

  codeExample: `<div class="p-4 bg-blue-500 text-white rounded">
  Utility First Example
</div>`,

  language: "html",

  commonMistakes: [
    "Creating unnecessary custom CSS",
    "Thinking utility classes are components",
    "Ignoring reusable patterns",
    "Using utilities inconsistently",
    "Not understanding composition"
  ],

  thinkingProcess: `Step 1: Learn utilities
Step 2: Combine classes
Step 3: Build UI
Step 4: Create reusable patterns
Step 5: Scale application`,

  realWorldApplication:
    "Most Tailwind projects rely entirely on utility classes instead of traditional CSS files.",

  interviewTip:
    "Utility-first means styling through utility classes rather than custom CSS selectors."
},

{
  id: "tailwind-8",
  question: "Difference Between Tailwind CSS and Bootstrap?",
  difficulty: "Basic",

  shortAnswer:
    "Tailwind CSS is a utility-first framework, while Bootstrap is a component-based framework that provides pre-designed UI components.",

  detailedAnswer: `Tailwind and Bootstrap solve UI development differently.

Tailwind CSS:
- Utility-first
- Highly customizable
- No built-in components
- Design freedom
- Smaller production builds

Bootstrap:
- Component-based
- Pre-built components
- Faster initial setup
- Opinionated design
- Less customization

Comparison:

Feature             Tailwind       Bootstrap
------------------------------------------------
Approach            Utility        Component
Customization       High           Medium
Built-in Components No             Yes
Bundle Size         Smaller        Larger
Design Freedom      High           Medium

Example:

Tailwind:
<button class="bg-blue-500 text-white px-4 py-2">
  Button
</button>

Bootstrap:
<button class="btn btn-primary">
  Button
</button>`,

  keyPoints: [
    "Tailwind is utility-first",
    "Bootstrap is component-based",
    "Tailwind offers more customization",
    "Bootstrap provides ready components",
    "Different development approaches"
  ],

  codeExample: `<!-- Tailwind -->
<button class="bg-blue-500 text-white px-4 py-2">
  Button
</button>

<!-- Bootstrap -->
<button class="btn btn-primary">
  Button
</button>`,

  language: "html",

  commonMistakes: [
    "Assuming Tailwind includes components",
    "Comparing only bundle size",
    "Ignoring customization differences",
    "Choosing framework without requirements",
    "Mixing concepts"
  ],

  thinkingProcess: `Step 1: Compare approaches
Step 2: Compare customization
Step 3: Compare components
Step 4: Compare performance
Step 5: Choose based on needs`,

  realWorldApplication:
    "Many startups prefer Tailwind for custom branding, while Bootstrap is often used for rapid prototyping.",

  interviewTip:
    "The biggest difference is utility-first vs component-based development."
},

{
  id: "tailwind-9",
  question: "What is the Tailwind Configuration File?",
  difficulty: "Basic",

  shortAnswer:
    "The Tailwind configuration file is used to customize the framework's default theme, colors, spacing, breakpoints, plugins, and other settings.",

  detailedAnswer: `Tailwind can be customized through its configuration file.

File:

tailwind.config.js

Purpose:
- Customize theme
- Add colors
- Add spacing values
- Configure plugins
- Define breakpoints

Example:

export default {
  theme: {
    extend: {
      colors: {
        primary: "#2563eb"
      }
    }
  }
}

Benefits:
- Centralized customization
- Consistent design system
- Easy maintenance

Common Customizations:
- Colors
- Fonts
- Spacing
- Shadows
- Border radius
- Breakpoints`,

  keyPoints: [
    "Customizes Tailwind",
    "Defines design system",
    "Extends theme values",
    "Supports plugins",
    "Central configuration"
  ],

  codeExample: `export default {
  theme: {
    extend: {
      colors: {
        primary: "#2563eb"
      }
    }
  }
}`,

  language: "javascript",

  commonMistakes: [
    "Overwriting instead of extending",
    "Poor theme organization",
    "Unused custom values",
    "Incorrect syntax",
    "Not restarting build tools"
  ],

  thinkingProcess: `Step 1: Create config
Step 2: Extend theme
Step 3: Add custom values
Step 4: Use utilities
Step 5: Maintain consistency`,

  realWorldApplication:
    "Large projects define brand colors, fonts, and spacing values in the Tailwind configuration file.",

  interviewTip:
    "Mention that the config file is used to create a custom design system."
},

{
  id: "tailwind-10",
  question: "What is JIT (Just-In-Time) Mode?",
  difficulty: "Basic",

  shortAnswer:
    "JIT (Just-In-Time) Mode generates Tailwind CSS classes on demand during development, resulting in faster builds and smaller CSS bundles.",

  detailedAnswer: `JIT Mode is one of Tailwind's most important features.

Before JIT:
- Generate thousands of classes
- Large CSS files
- Slower builds

With JIT:
- Generate only used classes
- Faster compilation
- Smaller bundles

Workflow:

Source Files
      ↓
Scan Classes
      ↓
Generate Needed CSS
      ↓
Output Optimized CSS

Advantages:
- Faster development
- Arbitrary values support
- Small CSS size
- Better performance

Example:

<div class="w-[350px]">
  Content
</div>

JIT generates the CSS only when needed.`,

  keyPoints: [
    "Generates classes on demand",
    "Faster builds",
    "Smaller CSS bundles",
    "Supports arbitrary values",
    "Improves development experience"
  ],

  codeExample: `<div class="w-[350px] bg-red-500">
  JIT Example
</div>`,

  language: "html",

  commonMistakes: [
    "Not configuring content paths",
    "Thinking all utilities are generated",
    "Ignoring arbitrary values",
    "Using outdated setup guides",
    "Misunderstanding JIT behavior"
  ],

  thinkingProcess: `Step 1: Scan files
Step 2: Detect classes
Step 3: Generate CSS
Step 4: Build optimized output
Step 5: Serve application`,

  realWorldApplication:
    "Modern Tailwind projects rely on JIT compilation for fast development and minimal CSS output.",

  interviewTip:
    "JIT Mode generates CSS only for classes actually used in the project."
},
{
  id: "tailwind-11",
  question: "How to add Colors in Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Colors are added using Tailwind's color utility classes such as bg-blue-500, text-red-600, and border-green-400, or by defining custom colors in the Tailwind configuration file.",

  detailedAnswer: `Tailwind provides a large color palette out of the box.

Background Colors:
bg-blue-500
bg-red-500
bg-green-500

Text Colors:
text-blue-500
text-red-500
text-green-500

Border Colors:
border-blue-500
border-red-500

Example:

<div class="bg-blue-500 text-white">
  Hello
</div>

Custom Colors:

export default {
  theme: {
    extend: {
      colors: {
        primary: "#2563eb"
      }
    }
  }
}

Usage:

<div class="bg-primary text-white">
  Custom Color
</div>

Benefits:
- Consistent color system
- Easy customization
- Responsive support
- Dark mode compatibility`,

  keyPoints: [
    "Uses color utility classes",
    "Supports background colors",
    "Supports text colors",
    "Supports border colors",
    "Custom colors can be added"
  ],

  codeExample: `<div class="bg-blue-500 text-white p-4 rounded">
  Blue Card
</div>`,

  language: "html",

  commonMistakes: [
    "Using undefined custom colors",
    "Overriding default palette unnecessarily",
    "Ignoring accessibility contrast",
    "Using too many colors",
    "Poor theme organization"
  ],

  thinkingProcess: `Step 1: Choose color utility
Step 2: Apply class
Step 3: Customize if needed
Step 4: Maintain consistency
Step 5: Ensure accessibility`,

  realWorldApplication:
    "Companies define brand colors in Tailwind config and use them throughout applications.",

  interviewTip:
    "Mention both built-in colors and custom colors via the configuration file."
},

{
  id: "tailwind-12",
  question: "How to add Spacing in Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Spacing is added using utility classes such as p-4, m-4, px-6, and py-2, which control padding and margin values.",

  detailedAnswer: `Tailwind uses a spacing scale for margins and padding.

Padding:

p-4   → all sides
pt-4  → top
pb-4  → bottom
pl-4  → left
pr-4  → right
px-4  → horizontal
py-4  → vertical

Margin:

m-4
mt-4
mb-4
ml-4
mr-4
mx-4
my-4

Example:

<div class="p-6 m-4">
  Content
</div>

Benefits:
- Consistent spacing
- Predictable layouts
- Faster styling

Spacing can also be customized in the configuration file.`,

  keyPoints: [
    "Uses spacing scale",
    "Padding utilities available",
    "Margin utilities available",
    "Consistent layout spacing",
    "Customizable values"
  ],

  codeExample: `<div class="p-6 m-4 bg-gray-100">
  Spacing Example
</div>`,

  language: "html",

  commonMistakes: [
    "Mixing margin and padding incorrectly",
    "Using excessive spacing",
    "Ignoring responsive spacing",
    "Inconsistent spacing scale",
    "Overusing arbitrary values"
  ],

  thinkingProcess: `Step 1: Select spacing utility
Step 2: Apply margin or padding
Step 3: Adjust responsiveness
Step 4: Maintain consistency
Step 5: Improve layout`,

  realWorldApplication:
    "Design systems rely on Tailwind spacing utilities to maintain consistent layouts.",

  interviewTip:
    "Know the difference between p-* (padding) and m-* (margin)."
},

{
  id: "tailwind-13",
  question: "What are Margin and Padding Utilities?",
  difficulty: "Basic",

  shortAnswer:
    "Margin utilities control space outside an element, while padding utilities control space inside an element.",

  detailedAnswer: `Spacing in CSS consists of margin and padding.

Margin:
Creates space outside an element.

Example:

<div class="m-4">
  Content
</div>

Padding:
Creates space inside an element.

Example:

<div class="p-4">
  Content
</div>

Visualization:

Margin
┌─────────────┐
│ Padding     │
│ Content     │
└─────────────┘

Common Utilities:

Margin:
m-4
mt-4
mx-4

Padding:
p-4
pt-4
px-4

Understanding this difference is important for layout design.`,

  keyPoints: [
    "Margin adds outside spacing",
    "Padding adds inside spacing",
    "Responsive variants supported",
    "Important for layouts",
    "Uses utility classes"
  ],

  codeExample: `<div class="m-4 p-4 bg-blue-100">
  Margin and Padding Example
</div>`,

  language: "html",

  commonMistakes: [
    "Confusing margin with padding",
    "Using excessive spacing",
    "Ignoring layout impact",
    "Not using responsive variants",
    "Poor spacing consistency"
  ],

  thinkingProcess: `Step 1: Understand box model
Step 2: Apply padding
Step 3: Apply margin
Step 4: Test layout
Step 5: Refine spacing`,

  realWorldApplication:
    "Margin and padding utilities are used in nearly every Tailwind component.",

  interviewTip:
    "A common interview question is explaining the difference between margin and padding."
},

{
  id: "tailwind-14",
  question: "How to use Flexbox in Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Flexbox is implemented using utility classes such as flex, justify-center, items-center, flex-col, and flex-row.",

  detailedAnswer: `Tailwind provides utilities for CSS Flexbox.

Enable Flexbox:

<div class="flex">
</div>

Direction:

flex-row
flex-col

Alignment:

justify-center
justify-between
justify-end

Cross Axis:

items-center
items-start
items-end

Example:

<div class="flex items-center justify-center h-screen">
  Centered Content
</div>

Benefits:
- Easy alignment
- Responsive layouts
- Flexible containers

Flexbox is commonly used for navigation bars, cards, and page layouts.`,

  keyPoints: [
    "Uses flex utility",
    "Supports alignment utilities",
    "Supports direction utilities",
    "Easy centering",
    "Responsive layouts"
  ],

  codeExample: `<div class="flex justify-center items-center h-screen">
  Centered Box
</div>`,

  language: "html",

  commonMistakes: [
    "Forgetting flex class",
    "Using wrong alignment utility",
    "Confusing justify and items",
    "Ignoring responsiveness",
    "Incorrect direction selection"
  ],

  thinkingProcess: `Step 1: Enable flexbox
Step 2: Choose direction
Step 3: Align items
Step 4: Test responsiveness
Step 5: Build layout`,

  realWorldApplication:
    "Navigation bars and dashboard layouts frequently use Flexbox utilities.",

  interviewTip:
    "Remember: justify-* controls the main axis, items-* controls the cross axis."
},

{
  id: "tailwind-15",
  question: "How to use Grid in Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Grid layouts are created using classes such as grid, grid-cols-3, gap-4, and grid-rows-* to organize content into rows and columns.",

  detailedAnswer: `Tailwind provides powerful CSS Grid utilities.

Enable Grid:

<div class="grid">
</div>

Columns:

grid-cols-1
grid-cols-2
grid-cols-3
grid-cols-4

Rows:

grid-rows-2
grid-rows-3

Gap:

gap-4
gap-6
gap-8

Example:

<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

Benefits:
- Complex layouts
- Responsive design
- Equal spacing
- Easy arrangement

Grid is excellent for dashboards, galleries, and card layouts.`,

  keyPoints: [
    "Uses grid utility",
    "Supports rows and columns",
    "Gap utilities available",
    "Ideal for layouts",
    "Responsive support"
  ],

  codeExample: `<div class="grid grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>`,

  language: "html",

  commonMistakes: [
    "Forgetting grid class",
    "Using too many columns",
    "Ignoring responsive layouts",
    "Missing gap utilities",
    "Confusing grid and flexbox"
  ],

  thinkingProcess: `Step 1: Enable grid
Step 2: Define columns
Step 3: Add gaps
Step 4: Arrange content
Step 5: Make responsive`,

  realWorldApplication:
    "Product galleries and admin dashboards commonly use CSS Grid layouts.",

  interviewTip:
    "Grid is best for two-dimensional layouts, while Flexbox is best for one-dimensional layouts."
},
{
  id: "tailwind-16",
  question: "What are Width and Height Utilities?",
  difficulty: "Basic",

  shortAnswer:
    "Width and Height utilities are Tailwind classes used to control the size of elements using predefined or custom values.",

  detailedAnswer: `Tailwind provides many sizing utilities.

Width Utilities:

w-0
w-4
w-16
w-32
w-64
w-full
w-screen

Height Utilities:

h-0
h-4
h-16
h-32
h-64
h-full
h-screen

Examples:

<div class="w-64 h-32 bg-blue-500"></div>

Full Width:

<div class="w-full"></div>

Full Screen Height:

<div class="h-screen"></div>

Custom Values:

<div class="w-[500px] h-[300px]"></div>

Benefits:
- Quick sizing
- Consistent layouts
- Responsive design support`,

  keyPoints: [
    "Control element size",
    "Supports width utilities",
    "Supports height utilities",
    "Includes full-screen options",
    "Supports custom values"
  ],

  codeExample: `<div class="w-64 h-32 bg-blue-500 rounded">
  Box
</div>`,

  language: "html",

  commonMistakes: [
    "Using fixed sizes everywhere",
    "Ignoring responsiveness",
    "Overusing arbitrary values",
    "Wrong utility selection",
    "Confusing full and screen sizes"
  ],

  thinkingProcess: `Step 1: Choose width
Step 2: Choose height
Step 3: Apply utilities
Step 4: Test responsiveness
Step 5: Optimize layout`,

  realWorldApplication:
    "Cards, sidebars, modals, and containers frequently use width and height utilities.",

  interviewTip:
    "Know the difference between w-full and w-screen, and h-full and h-screen."
},

{
  id: "tailwind-17",
  question: "How to make Responsive Layouts?",
  difficulty: "Basic",

  shortAnswer:
    "Responsive layouts are created using Tailwind's breakpoint prefixes such as sm:, md:, lg:, xl:, and 2xl:.",

  detailedAnswer: `Tailwind follows a mobile-first responsive design approach.

Breakpoints:

sm: 640px+
md: 768px+
lg: 1024px+
xl: 1280px+
2xl: 1536px+

Example:

<div class="
  bg-red-500
  md:bg-blue-500
  lg:bg-green-500
">
</div>

Layout Example:

<div class="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-4
">
</div>

Benefits:
- Mobile-first design
- Easy responsiveness
- Consistent behavior
- Less custom CSS`,

  keyPoints: [
    "Mobile-first approach",
    "Uses breakpoint prefixes",
    "Easy responsive design",
    "Supports all utilities",
    "Reduces custom media queries"
  ],

  codeExample: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  Responsive Grid
</div>`,

  language: "html",

  commonMistakes: [
    "Ignoring mobile-first design",
    "Using too many breakpoints",
    "Not testing devices",
    "Confusing breakpoint order",
    "Overcomplicating layouts"
  ],

  thinkingProcess: `Step 1: Design mobile layout
Step 2: Add breakpoints
Step 3: Test devices
Step 4: Optimize UI
Step 5: Maintain consistency`,

  realWorldApplication:
    "Modern websites adapt automatically across phones, tablets, and desktops using responsive utilities.",

  interviewTip:
    "Tailwind is mobile-first, meaning styles apply to mobile by default and larger screens use breakpoint prefixes."
},

{
  id: "tailwind-18",
  question: "What are Breakpoints in Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Breakpoints are predefined screen sizes that allow developers to apply different styles based on device width.",

  detailedAnswer: `Breakpoints enable responsive web design.

Default Breakpoints:

sm → 640px
md → 768px
lg → 1024px
xl → 1280px
2xl → 1536px

Example:

<div class="
  text-sm
  md:text-lg
  lg:text-xl
">
</div>

How It Works:

Mobile:
text-sm

Tablet:
text-lg

Desktop:
text-xl

Benefits:
- Responsive layouts
- Better user experience
- Mobile-first workflow
- Easy maintenance

Custom breakpoints can also be added in the Tailwind configuration file.`,

  keyPoints: [
    "Responsive screen sizes",
    "Mobile-first design",
    "Predefined breakpoints",
    "Customizable",
    "Improves UX"
  ],

  codeExample: `<h1 class="text-lg md:text-2xl lg:text-4xl">
  Responsive Heading
</h1>`,

  language: "html",

  commonMistakes: [
    "Using too many breakpoints",
    "Ignoring mobile users",
    "Not testing screen sizes",
    "Wrong breakpoint order",
    "Overcomplicated responsiveness"
  ],

  thinkingProcess: `Step 1: Learn breakpoints
Step 2: Apply responsive classes
Step 3: Test devices
Step 4: Refine layout
Step 5: Maintain responsiveness`,

  realWorldApplication:
    "Responsive e-commerce websites adjust product grids based on breakpoint sizes.",

  interviewTip:
    "Remember the most commonly used breakpoints: sm, md, lg, xl."
},

{
  id: "tailwind-19",
  question: "How to use Position Utilities?",
  difficulty: "Basic",

  shortAnswer:
    "Position utilities control element positioning using classes such as static, relative, absolute, fixed, and sticky.",

  detailedAnswer: `Tailwind provides utilities for CSS positioning.

Available Positions:

static
relative
absolute
fixed
sticky

Example:

<div class="relative">
  <div class="absolute top-0 right-0">
    Badge
  </div>
</div>

Common Position Utilities:

top-0
bottom-0
left-0
right-0

Example:

<div class="fixed bottom-4 right-4">
  Chat Button
</div>

Benefits:
- Easy overlays
- Floating elements
- Navigation bars
- Tooltips and modals`,

  keyPoints: [
    "Supports all CSS positions",
    "Uses top/right/bottom/left utilities",
    "Great for overlays",
    "Useful for sticky headers",
    "Easy floating elements"
  ],

  codeExample: `<div class="relative">
  <div class="absolute top-0 right-0 bg-red-500 text-white px-2">
    New
  </div>
</div>`,

  language: "html",

  commonMistakes: [
    "Forgetting relative parent",
    "Using fixed unnecessarily",
    "Incorrect positioning values",
    "Ignoring responsiveness",
    "Confusing absolute and fixed"
  ],

  thinkingProcess: `Step 1: Select position type
Step 2: Add coordinates
Step 3: Test placement
Step 4: Adjust responsiveness
Step 5: Improve UX`,

  realWorldApplication:
    "Sticky headers, floating buttons, notifications, and modals use position utilities.",

  interviewTip:
    "Absolute elements are positioned relative to the nearest relative parent."
},

{
  id: "tailwind-20",
  question: "What are Display Utilities?",
  difficulty: "Basic",

  shortAnswer:
    "Display utilities control how elements are rendered using classes such as block, inline, inline-block, flex, grid, and hidden.",

  detailedAnswer: `Display utilities define an element's display behavior.

Common Utilities:

block
inline
inline-block
flex
grid
hidden

Examples:

Block Element:

<div class="block">
  Content
</div>

Flex Layout:

<div class="flex">
  Content
</div>

Grid Layout:

<div class="grid">
  Content
</div>

Hide Element:

<div class="hidden">
  Hidden Content
</div>

Responsive Display:

<div class="hidden md:block">
  Desktop Only
</div>

Benefits:
- Easy layout control
- Responsive visibility
- Better organization
- Flexible UI design`,

  keyPoints: [
    "Controls rendering behavior",
    "Supports flex and grid",
    "Supports visibility control",
    "Responsive display options",
    "Important layout utility"
  ],

  codeExample: `<div class="hidden md:block">
  Desktop Content
</div>`,

  language: "html",

  commonMistakes: [
    "Using wrong display type",
    "Hiding important content",
    "Ignoring responsiveness",
    "Confusing flex and block",
    "Overusing hidden elements"
  ],

  thinkingProcess: `Step 1: Select display type
Step 2: Apply utility
Step 3: Test layout
Step 4: Add responsiveness
Step 5: Improve usability`,

  realWorldApplication:
    "Responsive navigation menus often use display utilities to show or hide content on different screen sizes.",

  interviewTip:
    "Display utilities are commonly combined with responsive prefixes like md:block and lg:flex."
},
{
  id: "tailwind-21",
  question: "What are Typography Utilities?",
  difficulty: "Basic",

  shortAnswer:
    "Typography utilities are Tailwind classes used to control text size, weight, alignment, color, spacing, and other text-related styles.",

  detailedAnswer: `Typography is an important part of UI design.

Text Size:

text-xs
text-sm
text-base
text-lg
text-xl
text-2xl

Font Weight:

font-thin
font-normal
font-medium
font-semibold
font-bold

Text Alignment:

text-left
text-center
text-right
text-justify

Text Color:

text-blue-500
text-red-500

Line Height:

leading-none
leading-normal
leading-relaxed

Letter Spacing:

tracking-tight
tracking-wide

Example:

<h1 class="text-3xl font-bold text-center">
  Welcome
</h1>

Benefits:
- Consistent typography
- Better readability
- Easy customization
- Responsive text styling`,

  keyPoints: [
    "Control text appearance",
    "Supports size and weight",
    "Supports alignment",
    "Supports spacing utilities",
    "Improves readability"
  ],

  codeExample: `<h1 class="text-4xl font-bold text-center text-blue-600">
  Tailwind Typography
</h1>`,

  language: "html",

  commonMistakes: [
    "Using too many font sizes",
    "Poor color contrast",
    "Inconsistent typography",
    "Ignoring responsiveness",
    "Overusing bold text"
  ],

  thinkingProcess: `Step 1: Choose font size
Step 2: Set weight
Step 3: Set alignment
Step 4: Improve readability
Step 5: Maintain consistency`,

  realWorldApplication:
    "Typography utilities are used across blogs, dashboards, landing pages, and documentation websites.",

  interviewTip:
    "Know common classes like text-xl, font-bold, and text-center."
},

{
  id: "tailwind-22",
  question: "How to style Buttons in Tailwind CSS?",
  difficulty: "Basic",

  shortAnswer:
    "Buttons are styled by combining utility classes for colors, spacing, borders, typography, and interactive states.",

  detailedAnswer: `Tailwind allows complete control over button styling.

Example:

<button class="
  bg-blue-500
  text-white
  px-4
  py-2
  rounded
">
  Click Me
</button>

Interactive Button:

<button class="
  bg-blue-500
  hover:bg-blue-700
  text-white
  px-4
  py-2
  rounded
">
  Submit
</button>

Common Utilities:

Colors:
bg-blue-500

Spacing:
px-4 py-2

Border Radius:
rounded

Shadow:
shadow-md

Hover:
hover:bg-blue-700

Buttons can be customized completely without custom CSS.`,

  keyPoints: [
    "Combine multiple utilities",
    "Control colors and spacing",
    "Support hover states",
    "Customizable design",
    "No custom CSS required"
  ],

  codeExample: `<button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
  Save
</button>`,

  language: "html",

  commonMistakes: [
    "Missing hover effects",
    "Poor accessibility",
    "Low contrast colors",
    "Inconsistent spacing",
    "Ignoring focus states"
  ],

  thinkingProcess: `Step 1: Add colors
Step 2: Add spacing
Step 3: Add border radius
Step 4: Add hover effects
Step 5: Improve accessibility`,

  realWorldApplication:
    "Every application uses Tailwind button utilities for actions like login, submit, save, and delete.",

  interviewTip:
    "Always mention hover and focus states when discussing button styling."
},

{
  id: "tailwind-23",
  question: "What are Hover and Focus States?",
  difficulty: "Basic",

  shortAnswer:
    "Hover and Focus states are utility variants that apply styles when users interact with elements using a mouse or keyboard.",

  detailedAnswer: `Interactive states improve user experience.

Hover State:

hover:bg-blue-700

Focus State:

focus:ring-2
focus:outline-none

Example:

<button class="
  bg-blue-500
  hover:bg-blue-700
  focus:ring-2
">
  Login
</button>

Common Variants:

hover:
focus:
active:
disabled:
visited:

Benefits:
- Better usability
- Improved accessibility
- Clear user feedback
- Professional UI behavior

These states are essential for interactive components.`,

  keyPoints: [
    "Improve interaction feedback",
    "Support accessibility",
    "Easy variant syntax",
    "Useful for buttons and forms",
    "Enhance user experience"
  ],

  codeExample: `<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 text-white px-4 py-2 rounded">
  Submit
</button>`,

  language: "html",

  commonMistakes: [
    "Ignoring focus states",
    "Relying only on hover",
    "Poor accessibility",
    "Removing focus outlines incorrectly",
    "Using excessive effects"
  ],

  thinkingProcess: `Step 1: Add base style
Step 2: Add hover state
Step 3: Add focus state
Step 4: Test accessibility
Step 5: Improve UX`,

  realWorldApplication:
    "Forms, buttons, links, and navigation menus rely heavily on hover and focus states.",

  interviewTip:
    "Focus states are critical for keyboard accessibility."
},

{
  id: "tailwind-24",
  question: "What are Transition Utilities?",
  difficulty: "Basic",

  shortAnswer:
    "Transition utilities control how property changes animate over time, creating smoother UI interactions.",

  detailedAnswer: `Transitions make UI changes feel natural.

Common Utilities:

transition
transition-all
transition-colors
transition-opacity

Duration:

duration-150
duration-300
duration-500

Timing Functions:

ease-linear
ease-in
ease-out
ease-in-out

Example:

<button class="
  bg-blue-500
  hover:bg-blue-700
  transition-colors
  duration-300
">
  Hover Me
</button>

Benefits:
- Smoother interactions
- Better user experience
- Professional appearance
- Easy implementation`,

  keyPoints: [
    "Smooth property changes",
    "Supports durations",
    "Supports easing functions",
    "Improves UX",
    "Easy to apply"
  ],

  codeExample: `<button class="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 text-white px-4 py-2 rounded">
  Hover Me
</button>`,

  language: "html",

  commonMistakes: [
    "Using very long durations",
    "Animating unnecessary properties",
    "Overusing transitions",
    "Ignoring performance",
    "Poor timing selection"
  ],

  thinkingProcess: `Step 1: Select property
Step 2: Add transition
Step 3: Set duration
Step 4: Choose easing
Step 5: Test interaction`,

  realWorldApplication:
    "Modern interfaces use transitions for buttons, menus, modals, and hover effects.",

  interviewTip:
    "transition-colors and duration-300 are very commonly used together."
},

{
  id: "tailwind-25",
  question: "What are Animation Utilities?",
  difficulty: "Basic",

  shortAnswer:
    "Animation utilities provide predefined animations such as spin, ping, pulse, and bounce without writing custom keyframes.",

  detailedAnswer: `Tailwind includes built-in animation utilities.

Available Animations:

animate-spin
animate-ping
animate-pulse
animate-bounce

Examples:

Loading Spinner:

<div class="animate-spin"></div>

Notification Ping:

<div class="animate-ping"></div>

Skeleton Loader:

<div class="animate-pulse"></div>

Bouncing Icon:

<div class="animate-bounce"></div>

Benefits:
- No custom CSS required
- Easy implementation
- Consistent animations
- Improved user feedback

Custom animations can also be added in the Tailwind configuration file.`,

  keyPoints: [
    "Built-in animations",
    "Supports loading indicators",
    "Improves user feedback",
    "Customizable",
    "Easy to use"
  ],

  codeExample: `<div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>`,

  language: "html",

  commonMistakes: [
    "Overusing animations",
    "Ignoring accessibility",
    "Using distracting effects",
    "Poor performance optimization",
    "Too many animated elements"
  ],

  thinkingProcess: `Step 1: Choose animation
Step 2: Apply utility
Step 3: Test interaction
Step 4: Optimize performance
Step 5: Improve feedback`,

  realWorldApplication:
    "Loading spinners, notifications, and skeleton screens commonly use Tailwind animations.",

  interviewTip:
    "Know the difference between animate-spin, animate-pulse, animate-ping, and animate-bounce."
},
{
  id: "tailwind-26",
  question: "How to customize Tailwind Theme?",
  difficulty: "Intermediate",

  shortAnswer:
    "Tailwind themes can be customized by extending the theme section in the Tailwind configuration file to add custom colors, fonts, spacing, breakpoints, and other design tokens.",

  detailedAnswer: `Tailwind allows complete customization through its configuration file.

Example:

export default {
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#9333ea"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"]
      },
      spacing: {
        128: "32rem"
      }
    }
  }
}

Usage:

<div class="bg-primary font-heading">
  Content
</div>

Customizable Items:
- Colors
- Fonts
- Breakpoints
- Shadows
- Border Radius
- Animations
- Spacing

Benefits:
- Consistent design system
- Brand customization
- Reusable styling
- Easier maintenance`,

  keyPoints: [
    "Uses theme.extend",
    "Supports custom colors",
    "Supports custom fonts",
    "Creates design systems",
    "Improves consistency"
  ],

  codeExample: `export default {
  theme: {
    extend: {
      colors: {
        primary: "#2563eb"
      }
    }
  }
}`,

  language: "javascript",

  commonMistakes: [
    "Replacing instead of extending theme",
    "Creating too many custom values",
    "Poor naming conventions",
    "Ignoring design consistency",
    "Duplicate theme values"
  ],

  thinkingProcess: `Step 1: Open config file
Step 2: Extend theme
Step 3: Add custom values
Step 4: Use utilities
Step 5: Maintain consistency`,

  realWorldApplication:
    "Companies customize Tailwind themes to match their branding and design systems.",

  interviewTip:
    "Use theme.extend rather than replacing the entire default theme."
},

{
  id: "tailwind-27",
  question: "What are Plugins in Tailwind CSS?",
  difficulty: "Intermediate",

  shortAnswer:
    "Plugins extend Tailwind CSS by adding new utilities, components, variants, and functionality beyond the core framework.",

  detailedAnswer: `Plugins help Tailwind provide additional features.

Popular Plugins:

@tailwindcss/forms
@tailwindcss/typography
@tailwindcss/aspect-ratio

Installation:

npm install @tailwindcss/forms

Configuration:

export default {
  plugins: [
    require("@tailwindcss/forms")
  ]
}

Benefits:
- Extend functionality
- Reduce custom CSS
- Reusable utilities
- Community support

You can also create custom plugins for project-specific utilities.`,

  keyPoints: [
    "Extend Tailwind features",
    "Add utilities and components",
    "Community ecosystem",
    "Supports custom plugins",
    "Easy integration"
  ],

  codeExample: `export default {
  plugins: [
    require("@tailwindcss/forms")
  ]
}`,

  language: "javascript",

  commonMistakes: [
    "Installing unnecessary plugins",
    "Plugin version conflicts",
    "Poor plugin organization",
    "Ignoring bundle size",
    "Not reading documentation"
  ],

  thinkingProcess: `Step 1: Install plugin
Step 2: Configure plugin
Step 3: Use utilities
Step 4: Test features
Step 5: Maintain project`,

  realWorldApplication:
    "Teams frequently use Typography and Forms plugins to speed up development.",

  interviewTip:
    "The Typography and Forms plugins are commonly discussed in Tailwind interviews."
},

{
  id: "tailwind-28",
  question: "How to create reusable components?",
  difficulty: "Intermediate",

  shortAnswer:
    "Reusable components can be created using framework components (React, Vue, etc.) or by extracting common utility combinations into reusable structures.",

  detailedAnswer: `As projects grow, repeating long utility lists becomes difficult.

React Example:

function Button({ children }) {
  return (
    <button className="
      bg-blue-500
      text-white
      px-4
      py-2
      rounded
    ">
      {children}
    </button>
  );
}

Usage:

<Button>Save</Button>

Benefits:
- Reusability
- Consistency
- Easier maintenance
- Cleaner code

Approaches:
- React Components
- Vue Components
- Svelte Components
- @apply Directive

Reusable components help scale large applications.`,

  keyPoints: [
    "Avoid repeated utility lists",
    "Improve maintainability",
    "Create shared UI elements",
    "Works with frontend frameworks",
    "Supports scalability"
  ],

  codeExample: `function Button({ children }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}`,

  language: "jsx",

  commonMistakes: [
    "Duplicating utility classes",
    "Creating too many components",
    "Poor naming conventions",
    "Ignoring design consistency",
    "Overengineering small UIs"
  ],

  thinkingProcess: `Step 1: Identify repeated code
Step 2: Extract component
Step 3: Reuse component
Step 4: Maintain consistency
Step 5: Scale project`,

  realWorldApplication:
    "Large React applications use reusable Button, Card, Modal, and Input components.",

  interviewTip:
    "Reusable components are usually preferred over repeatedly writing the same utility classes."
},

{
  id: "tailwind-29",
  question: "What is @apply Directive?",
  difficulty: "Intermediate",

  shortAnswer:
    "The @apply directive allows multiple Tailwind utility classes to be combined into a single custom CSS class.",

  detailedAnswer: `@apply helps reduce repeated utility classes.

Example:

.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}

Usage:

<button class="btn">
  Submit
</button>

Benefits:
- Cleaner HTML
- Reusable styles
- Easier maintenance

When to Use:
- Frequently repeated utility groups
- Shared UI patterns

When Not to Use:
- Small one-time components
- Over-abstracting styles

Tailwind generally encourages utility-first development, so @apply should be used thoughtfully.`,

  keyPoints: [
    "Combines utility classes",
    "Creates reusable styles",
    "Reduces repetition",
    "Improves maintainability",
    "Should be used carefully"
  ],

  codeExample: `.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}`,

  language: "css",

  commonMistakes: [
    "Overusing @apply",
    "Recreating traditional CSS architecture",
    "Ignoring utility-first approach",
    "Large complex classes",
    "Poor abstraction"
  ],

  thinkingProcess: `Step 1: Identify repeated utilities
Step 2: Create class
Step 3: Use @apply
Step 4: Reuse style
Step 5: Maintain consistency`,

  realWorldApplication:
    "Teams use @apply for shared button styles and design system utilities.",

  interviewTip:
    "Tailwind recommends utility-first development; @apply is useful but should not replace utilities everywhere."
},

{
  id: "tailwind-30",
  question: "How to optimize Tailwind CSS for production?",
  difficulty: "Intermediate",

  shortAnswer:
    "Tailwind optimizes production builds by removing unused classes, generating only required utilities, and minimizing CSS output.",

  detailedAnswer: `Performance optimization is one of Tailwind's strengths.

Optimization Process:

1. Scan Source Files
2. Detect Used Classes
3. Generate Required CSS
4. Remove Unused Styles
5. Minify Output

Configuration Example:

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ]
}

Benefits:
- Smaller CSS files
- Faster page loads
- Better performance
- Improved SEO

Best Practices:
- Configure content paths correctly
- Remove unused files
- Use JIT mode
- Avoid unnecessary plugins
- Optimize assets

Modern Tailwind projects often produce extremely small CSS bundles.`,

  keyPoints: [
    "Removes unused CSS",
    "Uses content scanning",
    "Generates smaller bundles",
    "Improves performance",
    "Essential for production"
  ],

  codeExample: `export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ]
}`,

  language: "javascript",

  commonMistakes: [
    "Incorrect content paths",
    "Unused plugins",
    "Ignoring production builds",
    "Keeping dead code",
    "Poor optimization practices"
  ],

  thinkingProcess: `Step 1: Scan files
Step 2: Detect classes
Step 3: Generate CSS
Step 4: Remove unused styles
Step 5: Deploy optimized bundle`,

  realWorldApplication:
    "Production Tailwind applications often ship only a few kilobytes of CSS.",

  interviewTip:
    "A common interview answer is that Tailwind removes unused CSS through content scanning and JIT compilation."
},
];
