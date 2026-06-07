export const cssQuestions = [
  {
    id: 'css-1',
    question: 'What is the CSS box model and how does it work?',
    difficulty: 'Basic',
    shortAnswer: 'The box model describes how elements are laid out: content, padding, border, and margin (from inside to outside).',
    detailedAnswer: `The CSS box model is fundamental to layout. Every element is a box with four layers:

1. Content: The actual content (text, images)
2. Padding: Space inside the border, around content
3. Border: Line around the padding
4. Margin: Space outside the border

Box-sizing property:
- content-box (default): Width includes only content, not padding/border
- border-box: Width includes content + padding + border (recommended)

The order from outside to inside:
Margin → Border → Padding → Content

Total width calculation:
- With content-box: total = width + padding + border + margin
- With border-box: total = width + margin (simpler!)`,
    keyPoints: [
      'The box model applies to all block and inline-block elements',
      'box-sizing: border-box makes width calculations predictable',
      'Padding creates internal space, margin creates external space',
      'Width/height only apply to block elements (or inline-block)',
      'Understanding the model is crucial for layout'
    ],
    codeExample: `/* Default (content-box) */
.box-default {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
/* Total width = 200 + 20*2 + 2*2 + 10*2 = 254px */

/* Using border-box (recommended) */
.box-border {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
/* Total width = 200 + 10*2 = 220px */

/* Apply border-box globally */
* {
  box-sizing: border-box;
}`,
    language: 'css',
    commonMistakes: [
      'Not using box-sizing: border-box (causes layout issues)',
      'Confusing padding and margin purposes',
      'Not accounting for box model when calculating widths',
      'Using margins for internal spacing (should use padding)',
      'Forgetting that margins collapse vertically'
    ],
    thinkingProcess: `Step 1: Understand there are 4 layers to every element
Step 2: Explain the purpose of each layer
Step 3: Show the order from outside to inside
Step 4: Discuss box-sizing property and its importance
Step 5: Explain why border-box is preferred`,
    realWorldApplication: 'When building responsive layouts, use box-sizing: border-box on all elements. This makes percentage-based widths much more predictable when you add padding and borders.',
    interviewTip: 'Start with a clear visual explanation. Many developers struggle with this, so showing you understand it deeply impresses interviewers.'
  },

  {
    id: 'css-2',
    question: 'What is CSS specificity and how does it work?',
    difficulty: 'Basic',
    shortAnswer: 'Specificity is a weight system that determines which CSS rule applies when multiple rules target the same element.',
    detailedAnswer: `Specificity is calculated based on selector type. It\'s usually represented as four numbers: a,b,c,d

- a: Inline styles (style="")
- b: IDs (#id)
- c: Classes (.class), attributes ([attr]), pseudo-classes (:hover)
- d: Elements (div, p, span)

Example calculations:
- h1 = 0,0,0,1
- .header = 0,0,1,0
- #title = 0,1,0,0
- style="color: red" = 1,0,0,0
- div.container#main = 0,1,1,1

Higher specificity wins. If specificity is equal, the last rule in the cascade wins.

!important overrides everything but should be used sparingly.

Specificity doesn\'t stack across selectors:
- .container .item is NOT 0,2,0,0, it\'s 0,0,2,0
- Each selector is calculated separately`,
    keyPoints: [
      'Specificity determines which CSS rule applies when there are conflicts',
      'Four levels of specificity: inline > ID > class/pseudo-class > element',
      'Higher specificity always wins (regardless of file order)',
      '!important has highest priority but should be avoided',
      'Combinators (+, >, ~, space) don\'t add specificity'
    ],
    codeExample: `/* Specificity: 0,0,0,1 */
p { color: blue; }

/* Specificity: 0,0,1,0 */
.text { color: red; }

/* Specificity: 0,1,0,0 */
#paragraph { color: green; }

/* Specificity: 1,0,0,0 (highest) */
p { color: yellow; } /* style="color: yellow;" in HTML */

/* Example: Which color wins? */
p { color: blue; } /* 0,0,0,1 */
p.text { color: red; } /* 0,0,1,1 - WINS */
#main { color: green; } /* 0,1,0,0 - Would win here */

/* Avoid using !important */
p { color: blue !important; } /* Don't do this */

/* Better: Use higher specificity if needed */
.container p.text { color: red; } /* 0,0,2,1 */`,
    language: 'css',
    commonMistakes: [
      'Overusing !important (leads to unmaintainable CSS)',
      'Not understanding that specificity doesn\'t accumulate across selectors',
      'Using too many classes/IDs for styling (should favor classes)',
      'Forgetting that inline styles have highest specificity',
      'Assuming file order matters more than specificity'
    ],
    thinkingProcess: `Step 1: Explain what specificity is
Step 2: Show the four levels (inline, ID, class, element)
Step 3: Give calculation examples
Step 4: Show cascade behavior with specificity
Step 5: Explain why understanding specificity prevents conflicts`,
    realWorldApplication: 'Use classes for styling (easy to override, reusable), reserve IDs for JavaScript. This keeps CSS maintainable and prevents specificity wars.',
    interviewTip: 'Use visual examples with multiple selectors targeting the same element. Show which one wins and explain why.'
  },

  {
    id: 'css-3',
    question: 'What is the difference between inline, block, and inline-block elements?',
    difficulty: 'Basic',
    shortAnswer: 'Block elements take full width and start a new line, inline elements flow with text, and inline-block combines both behaviors.',
    detailedAnswer: `CSS has three main display types that control how elements flow and respond to sizing:

BLOCK Elements:
- Take full width available
- Start on a new line, end with a line break
- Respect width, height, margin, and padding on all sides
- Examples: div, p, h1-h6, section, article, ul, ol

INLINE Elements:
- Take only as much width as necessary
- Flow with surrounding text (don't start new line)
- Ignore width and height properties
- Vertical margin is ignored, but horizontal margin works
- Horizontal padding works, vertical padding may overlap
- Examples: span, a, strong, em, img, button

INLINE-BLOCK Elements:
- Flow inline (next to other elements)
- Respect width, height, margin, and padding
- Act like inline elements externally, block internally
- Examples: img, button, input, select

Modern alternatives:
- Flexbox: display: flex
- Grid: display: grid
- These are often preferred over block/inline/inline-block`,
    keyPoints: [
      'Block elements create layout structure',
      'Inline elements flow within text',
      'Inline-block combines benefits of both',
      'img is naturally inline-block',
      'display property controls all three behaviors',
      'Modern layouts prefer flex/grid over block/inline/inline-block'
    ],
    codeExample: `/* BLOCK - Full width */
.block {
  display: block;
  width: 100%;
  margin: 20px 0;
  padding: 10px;
}

/* INLINE - Flows with text */
.inline {
  display: inline;
  margin: 0 10px; /* only horizontal works well */
  padding: 0 5px; /* vertical padding may overlap */
}

/* INLINE-BLOCK - Best of both */
.inline-block {
  display: inline-block;
  width: 150px;
  margin: 10px 5px; /* all margins work */
  padding: 10px; /* all padding works */
  vertical-align: top; /* align with other inline-block */
}

/* Vertical alignment only works on inline/inline-block */
.container {
  display: inline-block;
  vertical-align: middle;
}

/* Modern approach - use flexbox instead */
.flex-container {
  display: flex;
  gap: 10px;
}`,
    language: 'css',
    commonMistakes: [
      'Trying to set width on inline elements',
      'Not understanding that img is inline-block (has gaps)',
      'Using inline-block without setting vertical-align',
      'Forgetting that vertical margin doesn\'t work on inline',
      'Not knowing about modern flex/grid alternatives'
    ],
    thinkingProcess: `Step 1: Define block behavior and examples
Step 2: Define inline behavior and examples
Step 3: Explain inline-block as hybrid
Step 4: Show which properties work with each
Step 5: Mention modern flex/grid as better alternatives`,
    realWorldApplication: 'Most modern layouts use flexbox or grid. However, understanding block/inline/inline-block is essential for legacy code and when working with unusual layouts.',
    interviewTip: 'Show that you prefer modern approaches (flex/grid) but understand the fundamentals. This shows practical knowledge.'
  },

  {
    id: 'css-4',
    question: 'What is the CSS cascade and how does it affect styling?',
    difficulty: 'Basic',
    shortAnswer: 'The cascade is the order of priority in which CSS rules are applied: importance, specificity, source order, and inheritance.',
    detailedAnswer: `The cascade determines which CSS rule applies when multiple rules target the same element. It considers:

1. IMPORTANCE:
   - !important flag (highest priority)
   - Author styles (our CSS)
   - Browser default styles

2. SPECIFICITY:
   - Higher specificity beats lower specificity
   - Inline > ID > Class > Element

3. SOURCE ORDER:
   - When specificity is equal, the LAST rule wins
   - Later rules override earlier ones
   - External CSS order matters

4. INHERITANCE:
   - Some properties inherit from parent (color, font-size)
   - Some don't inherit (margin, padding, border)
   - Can use 'inherit' keyword to force inheritance
   - Can use 'initial' to reset to default
   - Can use 'unset' to remove all declarations

Cascade resolution flow:
1. Filter applicable rules (media queries, selectors)
2. Sort by importance (!important vs normal)
3. Sort by origin (user > author > browser)
4. Sort by specificity
5. Sort by source order
6. Last rule wins`,
    keyPoints: [
      'Cascade means "waterfall" - rules flow down and override',
      'Specificity usually matters more than source order',
      '!important breaks the cascade (use sparingly)',
      'Not all properties inherit (check documentation)',
      'Understanding cascade prevents CSS conflicts'
    ],
    codeExample: `/* Source order: later wins when specificity is equal */
p { color: blue; }
p { color: red; } /* WINS - comes later */

/* Specificity wins over source order */
p { color: blue; } /* 0,0,0,1 */
.text { color: red; } /* 0,0,1,0 - WINS despite being first */

/* Inheritance */
.container {
  color: blue; /* inherits to children */
  margin: 20px; /* doesn't inherit */
}

.container p {
  /* Inherits color: blue */
  /* margin: 0 (doesn't inherit) */
}

/* Force inheritance with inherit keyword */
.container p {
  margin: inherit; /* Use parent's margin */
  padding: inherit; /* Use parent's padding */
}

/* Reset to browser default with initial */
.container p {
  color: initial; /* Reset to browser default */
}

/* Remove all declarations with unset */
.container p {
  all: unset; /* Remove everything */
}

/* !important example (avoid this) */
p { color: blue !important; }
.text { color: red; } /* Loses to !important */`,
    language: 'css',
    commonMistakes: [
      'Overusing !important (creates maintainability issues)',
      'Assuming all properties inherit (only some do)',
      'Not understanding that specificity beats source order',
      'Writing CSS in wrong file order thinking order matters most',
      'Using !important to fix cascading issues (fix source instead)'
    ],
    thinkingProcess: `Step 1: Explain cascade as "waterfall" concept
Step 2: Show four levels of cascade priority
Step 3: Give examples of each level in action
Step 4: Explain inheritance and which properties inherit
Step 5: Show why understanding cascade prevents bugs`,
    realWorldApplication: 'Understanding cascade helps you write CSS that scales. Instead of fighting specificity with !important, write CSS that respects the cascade hierarchy.',
    interviewTip: 'Show you understand that cascade is a feature, not a bug. It allows for elegant CSS architecture when used properly.'
  },

  {
    id: 'css-5',
    question: 'What is CSS positioning (static, relative, absolute, fixed, sticky)?',
    difficulty: 'Intermediate',
    shortAnswer: 'Positioning controls where elements are placed on the page: static (default), relative (offset from normal), absolute (relative to parent), fixed (relative to viewport), and sticky (hybrid).',
    detailedAnswer: `The position property controls how elements are positioned in the document flow:

STATIC (default):
- Element follows normal document flow
- top, right, bottom, left properties ignored
- z-index has no effect

RELATIVE:
- Element positioned relative to its normal position
- Element still occupies space in document flow
- Other elements don't move to fill its original space
- top, right, bottom, left move element from original position

ABSOLUTE:
- Element removed from document flow
- Positioned relative to nearest positioned ancestor
- Other elements move up to fill empty space
- If no positioned ancestor found, relative to document
- top, right, bottom, left define position within ancestor

FIXED:
- Element removed from document flow
- Positioned relative to viewport (window)
- Stays in place while page scrolls
- top, right, bottom, left define position on screen

STICKY:
- Hybrid of relative and fixed
- Element is relative until scroll reaches threshold
- Then becomes fixed relative to viewport
- Useful for headers, sidebars that stick on scroll
- top/left define when element "sticks"`,
    keyPoints: [
      'Static is default and respects document flow',
      'Relative positions from normal location but stays in flow',
      'Absolute is removed from flow, positioned against parent',
      'Fixed sticks to viewport and doesn\'t scroll',
      'Sticky switches between relative and fixed based on scroll',
      'z-index only works on positioned elements (not static)'
    ],
    codeExample: `/* STATIC - Default behavior */
.static {
  position: static; /* Default, explicit for clarity */
}

/* RELATIVE - Offset from normal position */
.relative {
  position: relative;
  top: 10px; /* Move down 10px from normal position */
  left: 20px; /* Move right 20px from normal position */
  /* Element still takes space in original location */
}

/* ABSOLUTE - Positioned relative to parent */
.parent {
  position: relative; /* Create positioning context */
  width: 300px;
  height: 300px;
}

.child {
  position: absolute; /* Positioned within parent */
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  /* Removed from document flow */
}

/* FIXED - Stuck to viewport */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 1000; /* Ensure on top */
  /* Doesn't scroll with page */
}

/* STICKY - Relative until scroll point */
.sticky-header {
  position: sticky;
  top: 0; /* Stick to top when scrolled */
  background: white;
  z-index: 10;
  /* Behaves as relative until parent scrolls out of view */
}`,
    language: 'css',
    commonMistakes: [
      'Using absolute without parent being positioned (goes to document)',
      'Using top/left on static elements (ignored)',
      'Not using z-index with positioned elements',
      'Fixed headers blocking content (need margin-top on body)',
      'Sticky not working because parent has overflow hidden'
    ],
    thinkingProcess: `Step 1: Explain static as baseline behavior
Step 2: Show relative moves from original position
Step 3: Explain absolute needs positioned parent
Step 4: Show fixed sticks to viewport
Step 5: Explain sticky as hybrid with scroll threshold`,
    realWorldApplication: 'Use relative for small adjustments, absolute for dropdowns/modals, fixed for navigation/floating buttons, sticky for headers. Choose based on what element should be relative to.',
    interviewTip: 'Show you understand the positioning context (why absolute needs positioned parent). This is a common cause of layout bugs.'
  },

  {
    id: 'css-6',
    question: 'What is Flexbox and how does it work?',
    difficulty: 'Intermediate',
    shortAnswer: 'Flexbox (display: flex) is a 1D layout system for arranging items in rows or columns with automatic alignment and spacing.',
    detailedAnswer: `Flexbox (Flexible Box Layout) is a modern layout system for arranging items in rows or columns:

CONTAINER PROPERTIES (apply to parent):
- display: flex - Enable flexbox
- flex-direction: row | column - Main axis direction
- justify-content: How items align on main axis
- align-items: How items align on cross axis
- flex-wrap: wrap | nowrap - Wrap items to new lines
- gap: Space between items
- align-content: Multi-line alignment

ITEM PROPERTIES (apply to children):
- flex: Shorthand for grow, shrink, basis
- flex-grow: Growth factor when space available
- flex-shrink: Shrink factor when space limited
- flex-basis: Base size before grow/shrink
- align-self: Override container's align-items
- order: Change visual order

MAIN vs CROSS AXIS:
- Main axis: Direction set by flex-direction
- Cross axis: Perpendicular to main axis
- row: main = horizontal, cross = vertical
- column: main = vertical, cross = horizontal

justify-content values: flex-start, center, flex-end, space-between, space-around, space-evenly

align-items values: flex-start, center, flex-end, stretch, baseline`,
    keyPoints: [
      'Flexbox is 1D (either rows or columns)',
      'justify-content aligns on main axis',
      'align-items aligns on cross axis',
      'flex shorthand handles grow, shrink, basis',
      'gap creates equal spacing between items',
      'flex-wrap allows items to wrap to new lines'
    ],
    codeExample: `/* Basic flex container */
.container {
  display: flex;
  flex-direction: row; /* row, column, row-reverse, column-reverse */
  justify-content: space-between; /* Main axis alignment */
  align-items: center; /* Cross axis alignment */
  gap: 10px; /* Space between items */
  flex-wrap: wrap; /* Wrap items if needed */
}

/* Flex items grow/shrink */
.item {
  flex: 1; /* Shorthand: grow shrink basis */
  /* Equivalent to: flex-grow: 1; flex-shrink: 1; flex-basis: 0; */
}

.item-specific {
  flex-grow: 2; /* Grows 2x faster than others */
  flex-shrink: 0; /* Doesn't shrink */
  flex-basis: 200px; /* Base size 200px */
}

/* Different item sizes */
.item-1 { flex: 1; } /* 1 part */
.item-2 { flex: 2; } /* 2 parts (twice the size) */
.item-3 { flex: 1; } /* 1 part */
/* Total: 4 parts, distributed accordingly */

/* Vertical centering (classic use) */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

/* Responsive flex layout */
.responsive {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .responsive {
    flex-direction: row;
  }
}`,
    language: 'css',
    commonMistakes: [
      'Using flex on 2D layouts (use grid instead)',
      'Confusing justify-content and align-items axes',
      'Not setting flex-wrap causing overflow',
      'Using fixed widths on flex items (prevents flexibility)',
      'Forgetting that flex items shrink by default'
    ],
    thinkingProcess: `Step 1: Explain flex as 1D layout system
Step 2: Show main axis vs cross axis concept
Step 3: Demonstrate justify-content and align-items
Step 4: Explain flex shorthand for sizing
Step 5: Show real-world layout examples`,
    realWorldApplication: 'Use flexbox for navigation bars, button groups, card layouts, and any linear arrangements. It\'s perfect for centering content and equal-width columns.',
    interviewTip: 'Show you know when to use flex vs grid. Flex is simpler for 1D layouts, grid for 2D layouts. This shows good architectural thinking.'
  },

  {
    id: 'css-7',
    question: 'What is CSS Grid and how does it differ from Flexbox?',
    difficulty: 'Intermediate',
    shortAnswer: 'CSS Grid is a 2D layout system that arranges items in rows and columns, unlike Flexbox which is 1D.',
    detailedAnswer: `CSS Grid is a modern layout system for creating 2D layouts with explicit rows and columns:

GRID CONTAINER:
- display: grid - Enable grid
- grid-template-columns: Define column sizes
- grid-template-rows: Define row sizes
- gap: Space between cells
- grid-auto-flow: How items fill empty cells
- justify-content: Horizontal alignment
- align-content: Vertical alignment

GRID ITEMS:
- grid-column: Which column(s) item spans
- grid-row: Which row(s) item spans
- grid-column-start/end: Explicit column positioning
- grid-row-start/end: Explicit row positioning
- justify-self: Horizontal item alignment
- align-self: Vertical item alignment

TEMPLATE SYNTAX:
- grid-template-columns: 1fr 2fr 1fr - 3 columns, ratios 1:2:1
- grid-template-columns: repeat(3, 1fr) - 3 equal columns
- grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) - Responsive

FLEXBOX vs GRID:
- Flexbox: 1D (rows OR columns)
- Grid: 2D (rows AND columns)
- Flexbox: Content-driven
- Grid: Layout-driven
- Flexbox: Better for components
- Grid: Better for page layouts`,
    keyPoints: [
      'Grid is 2D layout (rows and columns simultaneously)',
      'fr unit (fraction) distributes available space',
      'repeat() function creates multiple tracks',
      'auto-fit/auto-fill create responsive layouts',
      'Grid items can span multiple rows/columns',
      'Grid is more powerful but less flexible than flexbox'
    ],
    codeExample: `/* Basic grid */
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px 200px 100px;
  gap: 10px;
}

/* Responsive grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Item spanning multiple columns */
.item-span {
  grid-column: 1 / 3; /* Span from column 1 to 3 */
  grid-row: 1 / 2;
}

/* Grid template shorthand */
.dashboard {
  display: grid;
  grid-template-columns: 200px 1fr 250px;
  grid-template-rows: 60px 1fr 40px;
  gap: 15px;
}

.header { grid-column: 1 / -1; } /* Span all columns */
.sidebar { grid-row: 2 / 3; }
.main { grid-column: 2; grid-row: 2; }
.footer { grid-column: 1 / -1; } /* Span all columns */

/* Named grid areas */
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Flexbox vs Grid comparison */
/* Use Flexbox for: */
.navbar {
  display: flex; /* Simple row of items */
  justify-content: space-between;
}

/* Use Grid for: */
.page-layout {
  display: grid; /* Complex 2D layout */
  grid-template-columns: 200px 1fr 250px;
  grid-template-rows: auto 1fr auto;
}`,
    language: 'css',
    commonMistakes: [
      'Using grid for simple 1D layouts (use flexbox)',
      'Not understanding fr unit (fraction of available space)',
      'Confusing grid-column start with column numbers',
      'Not using auto-fit/auto-fill for responsive grids',
      'Making grid too complex when flexbox is simpler'
    ],
    thinkingProcess: `Step 1: Explain grid as 2D layout system
Step 2: Show difference from flexbox
Step 3: Demonstrate grid-template-columns/rows
Step 4: Explain item positioning
Step 5: Show when to use grid vs flexbox`,
    realWorldApplication: 'Use grid for page layouts (header, sidebar, main, footer), dashboards, and complex 2D arrangements. It gives complete control over both axes.',
    interviewTip: 'Show you can decide between grid and flexbox based on layout needs. Grid is more powerful but flexbox is often simpler for linear layouts.'
  },

  {
    id: 'css-8',
    question: 'What are CSS media queries and how do you use them?',
    difficulty: 'Intermediate',
    shortAnswer: 'Media queries apply different CSS rules based on device characteristics like screen size, orientation, and color preference.',
    detailedAnswer: `Media queries allow responsive design by applying styles based on device conditions:

BASIC SYNTAX:
@media (condition) {
  /* CSS rules applied if condition is true */
}

COMMON CONDITIONS:
- min-width: Apply when viewport >= width
- max-width: Apply when viewport <= width
- orientation: portrait | landscape
- prefers-color-scheme: light | dark
- prefers-reduced-motion: reduce | no-preference
- prefers-contrast: more | less
- hover: hover | none (touchscreen detection)

BREAKPOINTS (Common sizes):
- 320px: Mobile small
- 480px: Mobile large
- 768px: Tablet
- 1024px: Desktop small
- 1440px: Desktop medium
- 1920px: Desktop large

MOBILE-FIRST vs DESKTOP-FIRST:
- Mobile-first: Start with mobile, add media queries for larger screens
- Desktop-first: Start with desktop, use max-width for smaller screens

Mobile-first is recommended because:
- Simpler CSS for base
- Forces focus on mobile experience
- Easier to add features progressively`,
    keyPoints: [
      'Media queries check device characteristics',
      'min-width targets larger screens',
      'max-width targets smaller screens',
      'Mobile-first approach is recommended',
      'Can combine multiple conditions with and/or',
      'Test real devices, not just browser resize'
    ],
    codeExample: `/* Mobile-first approach (START HERE) */
.container {
  width: 100%;
  padding: 10px;
  font-size: 14px;
}

/* Tablets (768px and up) */
@media (min-width: 768px) {
  .container {
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    font-size: 16px;
  }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
  .container {
    width: 1000px;
    margin: 0 auto;
    padding: 30px;
    font-size: 18px;
  }
}

/* Desktop large (1440px and up) */
@media (min-width: 1440px) {
  .container {
    width: 1200px;
  }
}

/* Combination of conditions (AND) */
@media (min-width: 768px) and (max-width: 1023px) {
  .tablet-only {
    /* Styles only for tablets */
  }
}

/* Multiple conditions (OR) */
@media (min-width: 1024px), (orientation: landscape) {
  .desktop-or-landscape {
    /* Styles for desktop OR landscape */
  }
}

/* Device preference queries */
@media (prefers-color-scheme: dark) {
  body {
    background: #000;
    color: #fff;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
  }
}

/* Detect touch devices */
@media (hover: none) {
  /* Mobile/touch device - no hover */
  .button:hover {
    /* Hover effects won't work */
  }
}

/* Orientation detection */
@media (orientation: portrait) {
  .landscape-only {
    display: none;
  }
}`,
    language: 'css',
    commonMistakes: [
      'Not using mobile-first approach (hard to maintain)',
      'Not testing on actual devices (browser zoom differs)',
      'Using min-width and max-width together incorrectly',
      'Forgetting viewport meta tag in HTML',
      'Not considering touch devices vs hover-capable devices'
    ],
    thinkingProcess: `Step 1: Explain responsive design concept
Step 2: Show media query syntax
Step 3: Demonstrate mobile-first approach
Step 4: Show common breakpoints
Step 5: Explain device preference queries`,
    realWorldApplication: 'Always design mobile-first. Start with mobile CSS, then add media queries for tablets and desktops. This ensures good mobile experience which is critical today.',
    interviewTip: 'Show you understand mobile-first approach and can discuss real breakpoints. Mention testing on actual devices, not just browser resize.'
  },

  {
    id: 'css-9',
    question: 'What are CSS transforms and how do you use them?',
    difficulty: 'Intermediate',
    shortAnswer: 'CSS transforms apply 2D or 3D transformations to elements like rotate, scale, translate, and skew without affecting document flow.',
    detailedAnswer: `CSS transforms modify element appearance and position. They don't affect document flow (unlike position changes):

2D TRANSFORMS:
- translate(x, y): Move element
- scale(x, y): Resize element
- rotate(deg): Rotate element
- skewX(deg): Skew horizontally
- skewY(deg): Skew vertically
- matrix(): Complex transformation

3D TRANSFORMS:
- translateZ(z): Move in Z axis
- rotateX(deg): Rotate around X axis
- rotateY(deg): Rotate around Y axis
- rotateZ(deg): Rotate around Z axis
- scaleZ(z): Scale in Z direction
- perspective: Create 3D effect

PROPERTIES:
- transform: Apply transformation(s)
- transform-origin: Point of transformation
- perspective: 3D distance effect
- backface-visibility: Show/hide back of 3D

ADVANTAGES:
- Don't affect document flow
- Hardware accelerated (better performance)
- Can combine multiple transforms
- Work with transitions/animations`,
    keyPoints: [
      'Transforms don\'t affect document flow',
      'Hardware accelerated for better performance',
      'Can combine multiple transforms',
      'transform-origin sets rotation/scale point',
      'Use translate instead of position changes for better performance',
      '3D transforms need perspective for effect'
    ],
    codeExample: `/* 2D Transforms */
.translate {
  transform: translate(50px, 100px); /* Move 50px right, 100px down */
}

.scale {
  transform: scale(1.5); /* 1.5x larger */
  /* transform: scaleX(1.5) scaleY(0.8); */ /* Different scales */
}

.rotate {
  transform: rotate(45deg); /* 45 degree rotation */
}

.skew {
  transform: skew(10deg, 20deg); /* Skew on both axes */
}

/* Combine multiple transforms */
.combined {
  transform: translate(50px, 100px) rotate(45deg) scale(1.2);
  /* Order matters! */
}

/* Transform origin (default is center) */
.rotate-from-corner {
  transform-origin: top-left; /* Rotate from top-left corner */
  transform: rotate(45deg);
}

.scale-from-top {
  transform-origin: top center; /* Scale from top center */
  transform: scale(1.5);
}

/* 3D Transforms */
.perspective-parent {
  perspective: 1000px; /* Create 3D space */
}

.rotate-3d {
  transform: rotateX(45deg); /* Rotate around X axis */
  /* transform: rotateY(45deg); */ /* Rotate around Y axis */
}

.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d; /* Children in 3D space */
}

.cube-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide back face */
}

.cube-front { transform: translateZ(50px); }
.cube-back { transform: translateZ(-50px) rotateY(180deg); }

/* Performance: Use transform instead of position */
/* GOOD - Hardware accelerated */
.box {
  transform: translate(100px, 100px);
}

/* BAD - Causes reflow/repaint */
.box {
  left: 100px;
  top: 100px;
  position: relative;
}`,
    language: 'css',
    commonMistakes: [
      'Not knowing transforms don\'t affect document flow',
      'Combining too many transforms (becomes hard to debug)',
      'Using position instead of transform (worse performance)',
      'Not setting transform-origin (rotates from center)',
      'Forgetting perspective for 3D effects'
    ],
    thinkingProcess: `Step 1: Explain what transforms do
Step 2: Show 2D transform functions
Step 3: Demonstrate combining transforms
Step 4: Explain 3D transforms and perspective
Step 5: Discuss performance benefits`,
    realWorldApplication: 'Use transforms for animations (better performance), hover effects, and 3D effects. Always prefer transform: translate() over changing position properties.',
    interviewTip: 'Show you understand performance implications. Using transform instead of position changes is a great optimization technique.'
  },

  {
    id: 'css-10',
    question: 'What are CSS transitions and animations, and what is the difference?',
    difficulty: 'Intermediate',
    shortAnswer: 'Transitions smoothly change property values over time, while animations use keyframes for complex movements without requiring property changes.',
    detailedAnswer: `TRANSITIONS:
- Smooth property changes over time
- Triggered by state changes (:hover, :active, class change)
- Requires start and end values
- Simpler, requires less code
- Good for: hover effects, state changes

ANIMATIONS:
- Use keyframes to define multiple states
- Can loop and have complex timing
- Don't require state changes (can start automatically)
- More control, more complex
- Good for: loading spinners, complex sequences

TRANSITION PROPERTIES:
- transition-property: Which properties to animate
- transition-duration: How long animation takes
- transition-timing-function: Easing (ease, linear, ease-in, etc)
- transition-delay: Wait before starting
- transition: Shorthand

ANIMATION PROPERTIES:
- @keyframes: Define animation states
- animation-name: Name of keyframes
- animation-duration: How long
- animation-timing-function: Easing
- animation-delay: When to start
- animation-iteration-count: How many times
- animation-direction: forward, backward, alternate
- animation: Shorthand

TIMING FUNCTIONS:
- linear: Constant speed
- ease: Slow start/end (default)
- ease-in: Slow start
- ease-out: Slow end
- ease-in-out: Slow start and end
- cubic-bezier(n,n,n,n): Custom`,
    keyPoints: [
      'Transitions need property changes to trigger',
      'Animations use keyframes and run independently',
      'Use transitions for simple state changes',
      'Use animations for complex sequences',
      'Can combine with transform for better performance',
      'timing-function controls easing'
    ],
    codeExample: `/* TRANSITIONS - Smooth property changes */
.button {
  background-color: blue;
  color: white;
  transition: background-color 0.3s ease;
  /* transition: property duration timing-function delay; */
}

.button:hover {
  background-color: red; /* Transition between colors */
}

/* Transition multiple properties */
.card {
  background: white;
  transform: scale(1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

/* ANIMATIONS - Keyframes */
@keyframes slide {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slide 1s ease-in-out 0.2s infinite alternate;
  /* animation: name duration timing delay iteration direction; */
}

/* Loading spinner animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}

/* Bounce animation */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.bounce-element {
  animation: bounce 1s ease-in-out 0s infinite;
}

/* Animation timing functions */
.ease-linear { animation: slide 1s linear; }
.ease-default { animation: slide 1s ease; } /* Default */
.ease-in { animation: slide 1s ease-in; }
.ease-out { animation: slide 1s ease-out; }
.ease-in-out { animation: slide 1s ease-in-out; }

/* Animation with multiple keyframes */
@keyframes complex {
  0% { background: red; transform: scale(1); }
  25% { background: yellow; }
  50% { background: green; transform: scale(1.1); }
  75% { background: blue; }
  100% { background: red; transform: scale(1); }
}

.complex-element {
  animation: complex 2s ease-in-out infinite;
}`,
    language: 'css',
    commonMistakes: [
      'Using animations when transitions are simpler',
      'Animating expensive properties (use transform instead)',
      'Not specifying animation-iteration-count (defaults to 1)',
      'Forgetting prefixes for older browser support',
      'Using wrong timing function for desired effect'
    ],
    thinkingProcess: `Step 1: Explain transitions for simple changes
Step 2: Show transition syntax and examples
Step 3: Explain animations and keyframes
Step 4: Show animation syntax and properties
Step 5: Discuss when to use each`,
    realWorldApplication: 'Use transitions for button hover effects, menu reveals, and form focus states. Use animations for loading spinners, complex sequences, and splash screens.',
    interviewTip: 'Show you know which to use when. Transitions are simpler and sufficient for most state changes. Animations are for complex, independent sequences.'
  },

  {
    id: 'css-11',
    question: 'What are CSS pseudo-classes and pseudo-elements?',
    difficulty: 'Intermediate',
    shortAnswer: 'Pseudo-classes define element states (:hover, :focus), while pseudo-elements target specific parts of elements (::before, ::after).',
    detailedAnswer: `PSEUDO-CLASSES:
- Select elements based on state or position
- Syntax: selector:pseudo-class
- Examples: :hover, :focus, :active, :visited, :first-child, :nth-child()

COMMON PSEUDO-CLASSES:
- :hover: Mouse over element
- :focus: Element has focus
- :active: Element being clicked
- :visited: Link has been visited
- :first-child: First child of parent
- :last-child: Last child of parent
- :nth-child(n): Specific child number
- :not(selector): Elements not matching selector
- :disabled: Form element disabled
- :checked: Checkbox/radio checked

PSEUDO-ELEMENTS:
- Select specific parts of elements
- Syntax: selector::pseudo-element
- Examples: ::before, ::after, ::first-line, ::first-letter
- Note: Single : also works but :: is correct syntax

COMMON PSEUDO-ELEMENTS:
- ::before: Insert content before element
- ::after: Insert content after element
- ::first-line: First line of text
- ::first-letter: First letter of text
- ::selection: Text selected by user
- ::placeholder: Placeholder in input
- ::marker: List item marker

USE CASES:
- Pseudo-classes for styling based on state
- Pseudo-elements for adding decorative content
- Both improve semantic HTML and maintainability`,
    keyPoints: [
      'Pseudo-classes use single colon (:)',
      'Pseudo-elements use double colon (::)',
      'Pseudo-elements create virtual elements',
      'content property required for ::before/::after',
      ':not() selector powerful for exclusion styling',
      ':nth-child() enables complex selection patterns'
    ],
    codeExample: `/* PSEUDO-CLASSES - Element states */
a:hover { color: red; } /* Mouse over link */
a:visited { color: purple; } /* Link visited */

button:active { transform: scale(0.95); } /* Being clicked */
button:disabled { opacity: 0.5; } /* Disabled button */

input:focus { border-color: blue; outline: none; } /* Focus state */
input:checked { background: green; } /* Checkbox checked */

/* Child selection */
li:first-child { margin-top: 0; }
li:last-child { margin-bottom: 0; }
li:nth-child(2) { background: yellow; } /* 2nd child */

/* Complex selectors */
li:nth-child(odd) { background: #f0f0f0; } /* Odd rows */
li:nth-child(3n) { font-weight: bold; } /* Every 3rd item */

/* :not() selector */
p:not(.special) { color: gray; } /* All p except .special */
li:not(:last-child) { border-bottom: 1px solid; } /* All except last */

/* PSEUDO-ELEMENTS - Parts of elements */
::before {
  content: "→ "; /* Insert content before */
}

::after {
  content: " ←"; /* Insert content after */
}

/* First letter larger */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
}

/* First line bold */
p::first-line {
  font-weight: bold;
}

/* Selection styling */
::selection {
  background: yellow;
  color: black;
}

/* Placeholder styling */
input::placeholder {
  color: gray;
  font-style: italic;
}

/* Real-world examples */
.quote::before {
  content: '"';
  font-size: 3em;
  color: gray;
  opacity: 0.3;
}

.required::after {
  content: "*"; /* Required field indicator */
  color: red;
  margin-left: 5px;
}

/* Icon using pseudo-element */
.menu-item::before {
  content: "→ ";
  margin-right: 8px;
  transition: transform 0.3s;
}

.menu-item:hover::before {
  transform: translateX(5px);
}

/* Decorative line under heading */
h2::after {
  content: '';
  display: block;
  height: 2px;
  background: blue;
  width: 50px;
  margin-top: 10px;
}`,
    language: 'css',
    commonMistakes: [
      'Using single colon for pseudo-elements (should be double)',
      'Forgetting content property for ::before/::after',
      'Not understanding pseudo-classes are states, not elements',
      'Overusing pseudo-elements for content (hurts accessibility)',
      ':nth-child() is complex to remember exact syntax'
    ],
    thinkingProcess: `Step 1: Explain pseudo-classes as element states
Step 2: Show common pseudo-class examples
Step 3: Explain pseudo-elements as virtual elements
Step 4: Show ::before/::after with content
Step 5: Discuss accessibility of pseudo-element content`,
    realWorldApplication: 'Use pseudo-classes for hover/focus/active states. Use pseudo-elements sparingly for decorative content only. Remember that content in pseudo-elements isn\'t selectable text.',
    interviewTip: 'Clarify the difference clearly - many developers confuse them. Show you understand pseudo-elements create virtual elements with the content property.'
  },

  {
    id: 'css-12',
    question: 'What are CSS custom properties (CSS variables) and how do you use them?',
    difficulty: 'Advanced',
    shortAnswer: 'CSS custom properties are variables that store values and can be reused throughout CSS, improving maintainability and enabling dynamic theming.',
    detailedAnswer: `CSS Custom Properties (CSS Variables) allow storing and reusing values:

SYNTAX:
- Define: --variable-name: value;
- Use: var(--variable-name);
- Fallback: var(--variable-name, fallback-value);

SCOPE:
- :root { --global-var: value; } - Global scope
- .class { --local-var: value; } - Local to element and children
- Local variables override global ones
- Inherited like normal CSS properties

ADVANTAGES:
- Reduce code repetition
- Enable dynamic theming
- Easier maintenance
- Can be changed with JavaScript
- Responsive design: Change in media queries

NAMING CONVENTION:
- Use double hyphen prefix: --variable-name
- Use kebab-case: --primary-color not --primaryColor
- Semantic names: --primary-color not --blue-1

JAVASCRIPT ACCESS:
- Get: element.style.getPropertyValue('--variable-name')
- Set: element.style.setProperty('--variable-name', 'value')
- Or: element.style.cssText = '--var: value'`,
    keyPoints: [
      'Define in :root for global scope',
      'Inherit to all child elements',
      'Can be scoped to specific selectors',
      'Fallback value as second parameter',
      'Can change dynamically with JavaScript',
      'Enable dark mode and theme switching'
    ],
    codeExample: `/* Define variables in :root */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --danger-color: #e74c3c;
  --text-dark: #333;
  --text-light: #999;
  --spacing-unit: 8px;
  --border-radius: 4px;
  --transition: all 0.3s ease;
}

/* Use variables */
body {
  color: var(--text-dark);
  background: white;
  font-size: 16px;
}

.button {
  background-color: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2); /* Math with variables */
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.button:hover {
  background-color: var(--secondary-color);
}

/* Fallback value */
.element {
  color: var(--custom-color, #000); /* Use #000 if not defined */
}

/* Scoped variables */
.dark-theme {
  --primary-color: #1a1a1a;
  --text-dark: #fff;
  --text-light: #ccc;
}

/* Variables in media queries */
@media (max-width: 768px) {
  :root {
    --spacing-unit: 6px;
    --font-size: 14px;
  }
}

/* Complex theming */
:root {
  --color-bg: white;
  --color-text: black;
  --color-border: #ddd;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1a1a1a;
    --color-text: white;
    --color-border: #333;
  }
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  border-color: var(--color-border);
}

/* JavaScript interaction */
// Get variable value
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color');

// Set variable value
document.documentElement.style.setProperty('--primary-color', '#ff0000');

// Toggle dark theme
function toggleDarkMode() {
  const root = document.documentElement;
  const isDark = root.style.getPropertyValue('--color-bg') === '#1a1a1a';
  
  if (isDark) {
    root.style.setProperty('--color-bg', 'white');
    root.style.setProperty('--color-text', 'black');
  } else {
    root.style.setProperty('--color-bg', '#1a1a1a');
    root.style.setProperty('--color-text', 'white');
  }
}`,
    language: 'css',
    commonMistakes: [
      'Not using double hyphen (-- prefix required)',
      'Trying to use variables outside CSS (need getPropertyValue)',
      'Not defining fallback values',
      'Using non-semantic variable names',
      'Not leveraging scope for component variables'
    ],
    thinkingProcess: `Step 1: Explain custom properties concept
Step 2: Show :root scope and global variables
Step 3: Demonstrate local scoping
Step 4: Show fallback values
Step 5: Discuss theming and JavaScript integration`,
    realWorldApplication: 'Use CSS variables for all repeated colors, spacing, and timing values. This makes implementing dark mode and multiple themes straightforward.',
    interviewTip: 'Show you understand scope and how variables inherit. Mention real-world use cases like dark mode switching. This shows practical experience.'
  },

  {
    id: 'css-13',
    question: 'What is CSS Containment and why is it important for performance?',
    difficulty: 'Advanced',
    shortAnswer: 'CSS containment tells the browser to isolate element subtrees, reducing reflow/repaint, improving performance for complex layouts.',
    detailedAnswer: `CSS Containment optimizes rendering by isolating elements from the rest of the document:

CONTAINMENT VALUES:
- layout: Element layout is independent
- paint: Element painting doesn't affect outside
- size: Element size doesn't affect layout
- style: Style changes don't affect outside
- content: Shorthand for layout, paint, style
- strict: Shorthand for layout, paint, size, style

BENEFITS:
- Smaller layout trees to recalculate
- Faster reflow and repaint
- Reduces cascading calculations
- Improves performance with many elements

LIMITATIONS:
- Position: absolute/fixed must be inside container
- Some property values computed independently
- Overflow interactions change

WHEN TO USE:
- Large lists or grids
- Widgets or components
- Frequently updated elements
- Independent layout areas

RELATED PROPERTY:
- will-change: Hint browser element will change
- contain-intrinsic-size: Set estimated size`,
    keyPoints: [
      'contain: content isolates layout, paint, style',
      'Creates new stacking context',
      'Reduces performance cost of updates',
      'Must ensure positioned children stay within',
      'Not needed for most elements, use strategically',
      'will-change is complementary optimization'
    ],
    codeExample: `/* Layout containment */
.list-item {
  contain: layout;
  /* Layout changes don't affect parent */
}

/* Paint containment */
.widget {
  contain: paint;
  /* Painting contained within bounds */
}

/* Size containment */
.placeholder {
  contain: size;
  width: 200px;
  height: 200px;
  /* Content assumed to be 200x200 */
}

/* Content containment (most useful) */
.card {
  contain: content;
  /* Equivalent to: contain: layout paint style; */
}

/* Strict containment */
.component {
  contain: strict;
  /* Maximum isolation: layout paint size style */
}

/* Large list optimization */
.virtual-list {
  contain: layout style paint;
}

.list-item {
  contain: content;
  /* Each item is independent */
}

/* will-change hint */
.animated {
  will-change: transform;
  /* Browser optimizes for this property */
}

/* Intrinsic sizing with containment */
.image-container {
  contain: layout style paint;
  contain-intrinsic-size: 300px 400px;
  /* Browser reserves space before image loads */
}

/* Performance comparison */
/* WITHOUT containment - recalculates parent layout */
.grid-item {
  /* Any size change affects parent grid */
}

/* WITH containment - isolated layout */
.grid-item {
  contain: layout;
  /* Size changes only affect this item */
}`,
    language: 'css',
    commonMistakes: [
      'Using contain on too many elements (creates overhead)',
      'Using strict containment when content: would suffice',
      'Not understanding layout implications',
      'Not measuring performance improvements',
      'Mixing contain with overflow: auto (can hide content)'
    ],
    thinkingProcess: `Step 1: Explain containment concept
Step 2: Show different containment values
Step 3: Explain performance benefits
Step 4: Show real-world examples
Step 5: Discuss trade-offs and limitations`,
    realWorldApplication: 'Use containment for virtual lists, grids with many items, and independent widgets. Measure actual performance improvements before using.',
    interviewTip: 'Show you understand performance optimization beyond common techniques. Mention when to measure impact and avoid premature optimization.'
  },

  {
    id: 'css-14',
    question: 'What are CSS filters and how do you use them?',
    difficulty: 'Advanced',
    shortAnswer: 'CSS filters apply graphical effects to elements like blur, brightness, grayscale, and shadows without modifying the element structure.',
    detailedAnswer: `CSS Filters apply visual effects to elements:

FILTER FUNCTIONS:
- blur(px): Blur effect
- brightness(%): Adjust brightness (100% = original)
- contrast(%): Adjust contrast (100% = original)
- grayscale(%): Convert to grayscale (100% = full grayscale)
- hue-rotate(deg): Rotate hue (360deg = full rotation)
- invert(%): Invert colors (100% = fully inverted)
- opacity(%): Adjust transparency (100% = opaque)
- saturate(%): Adjust saturation (100% = original)
- sepia(%): Apply sepia effect (100% = full sepia)
- drop-shadow(): Shadow effect (like box-shadow)

ADVANTAGES:
- Non-destructive (effect layer only)
- Can animate smoothly
- Better performance than image manipulation
- Works on any element type

DISADVANTAGES:
- Slightly less performance than transforms
- Can't stack infinitely
- Limited to predefined effects

MULTIPLE FILTERS:
- Combine with space: filter: blur(5px) brightness(1.2);
- Order matters for calculation`,
    keyPoints: [
      'filter property applies effects to element',
      'Can combine multiple filters',
      'Values as percentages or angles',
      'Apply to images, text, any element',
      'Animate smoothly with transitions',
      'Better accessibility than alternatives'
    ],
    codeExample: `/* Single filter */
img {
  filter: blur(5px);
}

img:hover {
  filter: blur(0);
}

/* Brightness and contrast */
.darken {
  filter: brightness(80%);
}

.brighten {
  filter: brightness(120%);
}

.high-contrast {
  filter: contrast(200%);
}

/* Color effects */
.grayscale {
  filter: grayscale(100%);
  /* Hover to restore colors */
}

.grayscale:hover {
  filter: grayscale(0%);
}

.sepia {
  filter: sepia(100%);
}

.hue-rotate {
  filter: hue-rotate(90deg);
}

.saturate {
  filter: saturate(200%);
}

/* Invert colors */
.inverted {
  filter: invert(100%);
}

/* Drop shadow */
.shadow {
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));
}

/* Combine multiple filters */
.combined {
  filter: blur(2px) brightness(1.2) contrast(1.1) saturate(1.2);
}

/* Smooth transitions */
.filter-transition {
  transition: filter 0.3s ease;
}

.filter-transition:hover {
  filter: brightness(1.2) blur(1px);
}

/* Practical example: Image hover effect */
.photo-gallery img {
  filter: grayscale(100%) brightness(90%);
  transition: filter 0.3s ease;
}

.photo-gallery img:hover {
  filter: grayscale(0%) brightness(100%);
}

/* Dark mode filter */
@media (prefers-color-scheme: dark) {
  body {
    filter: invert(100%);
  }
}

/* Accessibility: Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .filter-transition {
    transition: none;
  }
}`,
    language: 'css',
    commonMistakes: [
      'Using filters instead of transforms (worse performance)',
      'Not combining filters when needed',
      'Not testing browser support (IE doesn\'t support)',
      'Applying expensive filters to many elements',
      'Not considering accessibility with heavy filters'
    ],
    thinkingProcess: `Step 1: List common filter functions
Step 2: Show individual filter examples
Step 3: Demonstrate combining filters
Step 4: Show performance considerations
Step 5: Discuss real-world use cases`,
    realWorldApplication: 'Use filters for hover effects, image galleries, and dynamic theming. Combine with transitions for smooth effects. Avoid heavy filters on many elements.',
    interviewTip: 'Show you understand filter is a non-destructive layer. Demonstrate practical examples like image hover effects or dark mode implementation.'
  },

  {
    id: 'css-15',
    question: 'What is the CSS stacking context and how does z-index work?',
    difficulty: 'Advanced',
    shortAnswer: 'Stacking context determines rendering order (which elements appear on top). Z-index controls stacking only within the same stacking context.',
    detailedAnswer: `Stacking context is a 3D concept where elements stack based on z-index and context creation:

WHAT CREATES STACKING CONTEXT:
- Root element (html)
- position + z-index (not static)
- flex/grid container with z-index
- opacity < 1
- transform, perspective, filter
- will-change (certain values)
- mix-blend-mode != normal

Z-INDEX:
- Only works on positioned elements (position != static)
- Only compares within same stacking context
- Higher values appear on top
- Can be negative
- Default value: auto (0)

KEY CONCEPT:
- Z-index compares WITHIN stacking context
- Child elements stay within parent context
- Parent z-index 1 always beats child z-index 9999

COMMON MISTAKES:
- Parent z-index 1 vs child z-index 9999
- Using z-index without position
- Not understanding stacking context boundaries
- Using z-index: 9999 !important (creates unmaintainable code)`,
    keyPoints: [
      'Stacking context groups elements for rendering',
      'Z-index only works within same context',
      'Parent context overrides child z-index',
      'Create new context with position/opacity/transform',
      'Element must be positioned for z-index to work',
      'Each stacking context is independent'
    ],
    codeExample: `/* Z-index without position (doesn't work) */
.element {
  z-index: 100; /* IGNORED - position is static */
}

/* Correct: position + z-index */
.element {
  position: relative; /* or absolute, fixed */
  z-index: 100; /* Now works */
}

/* Stacking context example */
.parent-1 {
  position: relative;
  z-index: 1;
}

.parent-2 {
  position: relative;
  z-index: 2; /* Appears on top of parent-1 */
}

/* Child vs parent stacking */
.parent {
  position: relative;
  z-index: 1; /* Creates stacking context */
}

.child {
  position: absolute;
  z-index: 9999; /* Still below other z-index: 2 siblings */
}

/* New stacking context via opacity */
.container {
  opacity: 0.9; /* Creates new stacking context */
  z-index: 1;
}

/* New stacking context via transform */
.element {
  transform: translateZ(0); /* Creates stacking context */
}

/* Practical: Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Below modal */
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001; /* Above overlay */
}

/* Dropdown menu stacking */
.navbar {
  position: relative;
  z-index: 10;
}

.dropdown {
  position: absolute;
  z-index: 11; /* Above navbar */
  /* But below modal if modal z-index: 1000+ */
}

/* Better approach: Logical stacking */
:root {
  --z-dropdown: 100;
  --z-modal-overlay: 1000;
  --z-modal: 1001;
  --z-tooltip: 1002;
}

.dropdown { z-index: var(--z-dropdown); }
.modal-overlay { z-index: var(--z-modal-overlay); }
.modal { z-index: var(--z-modal); }
.tooltip { z-index: var(--z-tooltip); }`,
    language: 'css',
    commonMistakes: [
      'Using z-index without position property',
      'Assuming higher z-index always wins (wrong across contexts)',
      'Not understanding parent context overrides child',
      'Using z-index: 9999 for "everything should be on top"',
      'Not creating logical z-index system (use variables)'
    ],
    thinkingProcess: `Step 1: Explain stacking context concept
Step 2: Show what creates stacking contexts
Step 3: Demonstrate z-index within context
Step 4: Show cross-context behavior
Step 5: Discuss best practices and systems`,
    realWorldApplication: 'Use CSS variables for z-index values in logical order. Understand that parent context always overrides child. This prevents z-index wars.',
    interviewTip: 'Show you understand stacking contexts are independent. Explain why z-index: 9999 on a child loses to parent z-index: 1. This is a common misconception.'
  },

  {
    id: 'css-16',
    question: 'What is visibility: hidden vs display: none?',
    difficulty: 'Basic',
    shortAnswer: 'visibility: hidden hides element but reserves space; display: none removes element from layout entirely.',
    detailedAnswer: `Two ways to hide elements with different effects:

DISPLAY: NONE:
- Element completely removed from document flow
- No space reserved for element
- Element doesn't render at all
- Faster than visibility: hidden
- Use when element shouldn't exist in layout

VISIBILITY: HIDDEN:
- Element is hidden but space is reserved
- Element still occupies space in layout
- Element is not rendered (invisible)
- Other elements don't move
- Use when you want to preserve layout

OTHER VISIBILITY VALUES:
- visible: Show element (default)
- hidden: Hide element, reserve space
- collapse: Hide table rows/columns (table-specific)

PERFORMANCE:
- display: none: Faster (no rendering)
- visibility: hidden: Slower (renders but invisible)
- Prefer display: none for better performance

USE CASES:
- display: none: Conditional sections, responsive hiding
- visibility: hidden: Layout preservation, animations`,
    keyPoints: [
      'display: none removes from layout',
      'visibility: hidden preserves space',
      'display: none has better performance',
      'visibility: hidden prevents layout shifts',
      'Different use cases determine which to use',
      'Can transition visibility but not display'
    ],
    codeExample: `/* Display: none - completely hidden and removed */
.hidden-display {
  display: none;
  /* Takes no space in layout */
  /* Other elements move up */
}

/* Visibility: hidden - hidden but space reserved */
.hidden-visibility {
  visibility: hidden;
  /* Invisible but takes space */
  /* Other elements don't move */
}

/* Practical example */
.container {
  display: flex;
  gap: 10px;
}

.item {
  width: 100px;
  height: 100px;
}

.item.display-none {
  display: none; /* Takes 0 space, gaps collapse */
}

.item.visibility-hidden {
  visibility: hidden; /* Takes 100px space, gap remains */
}

/* Collapse for table rows */
table tr.hidden {
  visibility: collapse;
  /* Row hidden but column layout preserved */
}

/* Conditional rendering based on breakpoint */
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none; /* Hidden on larger screens */
  }
}

/* Animation with visibility */
.fade-out {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;
}

.fade-out.hidden {
  opacity: 0;
  visibility: hidden; /* Also hide after fade out */
  transition: visibility 0.3s ease, opacity 0.3s ease;
}

/* Accessibility: sr-only (screen reader only) */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
  /* Hidden visually but accessible to screen readers */
}`,
    language: 'css',
    commonMistakes: [
      'Using wrong property for use case',
      'Not understanding layout flow differences',
      'Expecting display changes to transition (use visibility)',
      'Not considering accessibility (hidden != removed)',
      'Performance impact not considered'
    ],
    thinkingProcess: `Step 1: Explain display: none behavior
Step 2: Explain visibility: hidden behavior
Step 3: Compare with concrete example
Step 4: Show use cases for each
Step 5: Discuss performance and accessibility`,
    realWorldApplication: 'Use display: none for responsive design (hide sections on mobile). Use visibility: hidden when preserving layout space matters (skeleton screens).',
    interviewTip: 'Show practical examples side-by-side. Mention that visibility can transition but display can\'t, and discuss accessibility implications.'
  },

  {
    id: 'css-17',
    question: 'What is the CSS overflow property and when do you use it?',
    difficulty: 'Intermediate',
    shortAnswer: 'Overflow controls how content is handled when it\'s larger than container: visible, hidden, scroll, or auto.',
    detailedAnswer: `Overflow property controls overflow behavior when content exceeds container:

VALUES:
- visible (default): Content overflows outside
- hidden: Overflow is clipped
- scroll: Always shows scrollbars
- auto: Shows scrollbars only if needed
- clip: Like hidden but also clips absolutely positioned children
- inherit: Use parent's overflow value

AXES:
- overflow: Both axes
- overflow-x: Horizontal overflow only
- overflow-y: Vertical overflow only

USE CASES:
- overflow: hidden - Contain floats, create BFC
- overflow: auto - Scrollable containers
- overflow: hidden - Hide excess, create new stacking context
- overflow-x: auto - Horizontal scroll (code blocks)

RELATED:
- text-overflow: Truncate text with ellipsis
- word-break: Break long words
- white-space: Preserve or collapse whitespace`,
    keyPoints: [
      'overflow: visible allows content to overflow',
      'overflow: hidden clips excess content',
      'overflow: auto adds scrollbars when needed',
      'overflow: scroll always shows scrollbars',
      'Can use overflow-x and overflow-y separately',
      'overflow: hidden creates new block formatting context'
    ],
    codeExample: `/* Visible (default) - content overflows */
.container-visible {
  width: 300px;
  overflow: visible; /* Content goes outside */
}

/* Hidden - clip excess content */
.container-hidden {
  width: 300px;
  height: 200px;
  overflow: hidden; /* Excess clipped */
}

/* Auto - scrollbars when needed */
.container-auto {
  width: 300px;
  height: 200px;
  overflow: auto; /* Scrollbars if content > 200px */
}

/* Scroll - always show scrollbars */
.container-scroll {
  width: 300px;
  height: 200px;
  overflow: scroll; /* Always shows scrollbars */
}

/* Separate axes */
.container-separate {
  width: 300px;
  height: 200px;
  overflow-x: auto; /* Horizontal scroll */
  overflow-y: hidden; /* No vertical scroll */
}

/* Text overflow with ellipsis */
.text-ellipsis {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* "Very long text..." */
}

/* Scrollable code block */
.code-block {
  overflow-x: auto;
  overflow-y: hidden;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
}

/* Contains floats using overflow */
.clearfix-modern {
  overflow: auto; /* Creates BFC, contains floats */
}

/* Hide scrollbars but keep scrolling */
.hide-scrollbar {
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}

/* Smooth scrolling within container */
.smooth-scroll {
  overflow: auto;
  scroll-behavior: smooth;
}

/* Scroll snap (newer feature) */
.scroll-snap {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroll-snap > * {
  scroll-snap-align: center;
}`,
    language: 'css',
    commonMistakes: [
      'Using overflow: hidden without realizing it hides content',
      'Not knowing overflow creates new block formatting context',
      'Confusing overflow: hidden with visibility: hidden',
      'Not using overflow-x/y for different axes',
      'Mobile scrolling issues from overflow: hidden on body'
    ],
    thinkingProcess: `Step 1: List overflow values
Step 2: Show visual differences
Step 3: Explain BFC creation
Step 4: Show overflow-x/y usage
Step 5: Discuss real-world applications`,
    realWorldApplication: 'Use overflow: auto for scrollable containers. Use overflow: hidden to contain floats or hide excess. Understand performance implications on mobile.',
    interviewTip: 'Show you understand overflow creates a new block formatting context (fixes float collapse). Discuss mobile scrolling performance considerations.'
  },

  {
    id: 'css-18',
    question: 'What is the difference between margin collapse and how do you prevent it?',
    difficulty: 'Intermediate',
    shortAnswer: 'Margin collapse occurs when adjacent block elements\' margins combine into one. Prevent with padding, border, overflow, or display changes.',
    detailedAnswer: `Margin collapse is when adjacent block elements' vertical margins combine:

WHEN COLLAPSE OCCURS:
- Adjacent vertical margins (top/bottom)
- Between block-level elements only
- Larger margin takes precedence
- Result: margin = max(margin1, margin2)

EXAMPLE:
- Parent margin-bottom: 20px
- Child margin-top: 30px
- Result margin between them: 30px (not 50px)

WHEN COLLAPSE DOESN'T OCCUR:
- Horizontal margins (never collapse)
- Inline or inline-block elements
- Floated elements
- Absolutely positioned elements
- Between parent and first/last child (other conditions)

HOW TO PREVENT COLLAPSE:
- Add padding to parent
- Add border to parent
- Set overflow (not visible)
- Use flexbox or grid
- Add display: flow-root to parent

WHICH METHOD TO USE:
- Most situations: Use flexbox/grid
- If block layout needed: flow-root
- Legacy code: Add padding/border`,
    keyPoints: [
      'Margin collapse is vertical only',
      'Larger margin wins',
      'Block elements only',
      'Prevents unexpected spacing',
      'Flex/grid eliminates collapse',
      'flow-root is semantic solution'
    ],
    codeExample: `/* Margin collapse example */
.parent {
  margin-bottom: 20px;
}

.child {
  margin-top: 30px;
}

/* Resulting gap = 30px (not 50px) */

/* Prevent: Add padding to parent */
.prevent-padding {
  padding-top: 1px; /* Creates BFC */
  margin-bottom: 20px;
}

.prevent-padding .child {
  margin-top: 30px;
  /* Gap = 20px + 1px + 30px */
}

/* Prevent: Add border to parent */
.prevent-border {
  border-top: 1px solid transparent;
  margin-bottom: 20px;
}

/* Prevent: Set overflow (not visible) */
.prevent-overflow {
  overflow: auto;
  margin-bottom: 20px;
}

/* Prevent: Use flow-root (semantic) */
.prevent-flow-root {
  display: flow-root;
  margin-bottom: 20px;
}

/* Prevent: Use flexbox (recommended) */
.prevent-flex {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

/* Collapse between siblings */
.sibling-1 {
  margin-bottom: 20px;
}

.sibling-2 {
  margin-top: 30px;
  /* Actual gap = 30px (not 50px) */
}

/* No collapse with padding/border */
.container {
  padding-top: 0; /* Prevents collapse with first child */
  /* or use display: flow-root */
}

.first-child {
  margin-top: 20px; /* Won't collapse now */
}

/* Margin collapse in list items */
.list {
  /* Items have margin-bottom */
}

.list > li {
  margin-bottom: 15px;
  /* Between items: 15px (not 30px) */
}

.list > li:last-child {
  margin-bottom: 0; /* Last item doesn't collapse */
}`,
    language: 'css',
    commonMistakes: [
      'Not understanding why expected margin is smaller',
      'Using too much padding/border to prevent (use flow-root)',
      'Thinking horizontal margins collapse (they don\'t)',
      'Not knowing flex/grid prevents collapse',
      'Adding unnecessary overflow: auto globally'
    ],
    thinkingProcess: `Step 1: Explain margin collapse concept
Step 2: Show when it occurs
Step 3: Demonstrate examples
Step 4: Show prevention methods
Step 5: Discuss best practices`,
    realWorldApplication: 'Use flexbox or grid for most layouts (they prevent collapse). If using block layout, understand collapse prevents double margins which is usually desired.',
    interviewTip: 'Show you understand this is sometimes wanted (prevents double margins in lists). Explain when to prevent it and which method to use.'
  },

  {
    id: 'css-19',
    question: 'What is CSS aspect ratio and when do you use it?',
    difficulty: 'Advanced',
    shortAnswer: 'CSS aspect-ratio maintains a specific width-to-height ratio for responsive elements, useful for images, videos, and containers.',
    detailedAnswer: `The aspect-ratio property maintains element proportions:

SYNTAX:
- aspect-ratio: 16 / 9; (width / height ratio)
- aspect-ratio: 1 / 1; (square)
- aspect-ratio: auto; (default, use natural ratio)

ADVANTAGES:
- Responsive without fixed heights
- Prevents layout shift when images load
- Works with max-width for fluid sizing
- Simpler than padding-bottom trick

USE CASES:
- Image containers before image loads
- Video embeds (16:9 aspect)
- Square avatars, thumbnails
- Maintaining proportions in responsive layouts

BEFORE aspect-ratio:
- Used padding-bottom: 56.25% trick for 16:9
- Required wrapper divs
- Complex calculations

MODERN APPROACH:
- aspect-ratio is cleaner and more performant
- Works on any element
- Respects max-width and min-width`,
    keyPoints: [
      'aspect-ratio maintains width-to-height ratio',
      'Prevents layout shift for deferred images',
      'Works with max-width for responsive sizing',
      'Simpler than padding-bottom technique',
      'Can use auto for natural aspect ratio',
      'Browser support now excellent'
    ],
    codeExample: `/* Basic aspect ratio */
.square {
  aspect-ratio: 1; /* Square (1:1) */
}

.video-container {
  aspect-ratio: 16 / 9; /* Widescreen */
}

.tall-image {
  aspect-ratio: 9 / 16; /* Portrait */
}

/* Responsive with max-width */
.responsive-video {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  /* Always maintains 16:9 regardless of width */
}

/* Image placeholder before load */
img {
  width: 100%;
  aspect-ratio: auto; /* Use natural ratio */
  max-width: 600px;
  /* Loading="lazy" now works better with aspect-ratio */
}

/* Prevent layout shift on image load */
.image-wrapper {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16 / 9;
  /* Reserves space before image loads */
  overflow: hidden;
  border-radius: 8px;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Gallery with uniform aspect ratios */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

.gallery-item {
  aspect-ratio: 1; /* All square */
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Video embed */
.video-embed {
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 100%;
}

.video-embed iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Before aspect-ratio (old method) */
.old-video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;
  overflow: hidden;
}

.old-video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Modern with aspect-ratio (much simpler) */
.new-video-wrapper {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.new-video-wrapper iframe {
  width: 100%;
  height: 100%;
}`,
    language: 'css',
    commonMistakes: [
      'Using fixed height instead of aspect-ratio',
      'Not understanding aspect-ratio works with width',
      'Still using padding-bottom trick (outdated)',
      'Not using with max-width for responsive layouts',
      'Forgetting object-fit: cover for images'
    ],
    thinkingProcess: `Step 1: Explain aspect-ratio concept
Step 2: Show common ratios (1:1, 16:9, 9:16)
Step 3: Show responsive example
Step 4: Compare with old padding-bottom trick
Step 5: Discuss real-world use cases`,
    realWorldApplication: 'Use aspect-ratio for image containers before images load (prevents layout shift). Use for video embeds instead of padding-bottom trick.',
    interviewTip: 'Show you prefer modern techniques. Mention preventing layout shift which improves Core Web Vitals and user experience.'
  },

  {
    id: 'css-20',
    question: 'What is CSS object-fit and object-position?',
    difficulty: 'Intermediate',
    shortAnswer: 'object-fit controls how images/videos fill containers (cover, contain, fill); object-position controls alignment within the container.',
    detailedAnswer: `object-fit and object-position control how replaced elements (img, video) fit in containers:

OBJECT-FIT VALUES:
- fill (default): Stretch to fill (may distort)
- contain: Fit entire image (may have empty space)
- cover: Fill container (may crop)
- scale-down: Smaller of contain or original size
- none: Original size (may overflow)

OBJECT-POSITION:
- Aligns image within container
- Values: top, center, bottom, left, right, custom percentages
- Default: center center
- Examples: top left, center, 25% 75%

USE CASES:
- object-fit: cover - Thumbnails, cards, galleries
- object-fit: contain - Logos, product images
- object-fit: fill - Wallpapers (may distort)
- object-fit: scale-down - Responsive images

WHY OBJECT-FIT:
- Alternative to background-size
- Works with <img> and <video>
- Maintains aspect ratio
- Better semantic HTML (img vs div)`,
    keyPoints: [
      'object-fit controls sizing behavior',
      'object-position controls alignment',
      'cover crops images (no empty space)',
      'contain fits entire image (may have space)',
      'Works with <img>, <video>, <canvas>',
      'Better than background-size for <img>'
    ],
    codeExample: `/* Fill (stretch) */
.image-fill {
  width: 300px;
  height: 200px;
  object-fit: fill;
  /* May distort image aspect ratio */
}

/* Cover (crop) */
.image-cover {
  width: 300px;
  height: 200px;
  object-fit: cover;
  /* Fills container, crops excess */
}

/* Contain (fit entire) */
.image-contain {
  width: 300px;
  height: 200px;
  object-fit: contain;
  /* Shows entire image, may have empty space */
  background: #f0f0f0; /* See empty space */
}

/* Scale-down */
.image-scale-down {
  width: 300px;
  height: 200px;
  object-fit: scale-down;
  /* Smaller of contain or original */
}

/* None (original size) */
.image-none {
  width: 300px;
  height: 200px;
  object-fit: none;
  /* Shows original size, may overflow */
  overflow: hidden;
}

/* Object position */
.image-top-left {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: top left; /* Focus on top-left */
}

.image-center {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: center; /* Default */
}

.image-custom {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: 75% 50%; /* Custom percentage */
}

/* Gallery with consistent aspect ratio */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

.gallery-item {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Responsive images with object-fit */
.thumbnail {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
}

/* Video with aspect ratio */
.video-container {
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16 / 9;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Product image */
.product-image {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: white;
}`,
    language: 'css',
    commonMistakes: [
      'Not knowing object-fit works on <img> (thinking background-size only)',
      'Using cover and expecting padding (it crops)',
      'Not using object-position with cover (defaults to center)',
      'Not combining with aspect-ratio',
      'Using background-image when <img> with object-fit is better'
    ],
    thinkingProcess: `Step 1: Explain object-fit concept
Step 2: Show each object-fit value
Step 3: Demonstrate object-position
Step 4: Show with aspect-ratio
Step 5: Discuss semantic HTML advantages`,
    realWorldApplication: 'Use object-fit: cover for image galleries and thumbnails. Use object-fit: contain for logos and product images. Combine with aspect-ratio for consistent layouts.',
    interviewTip: 'Show you prefer semantic <img> with object-fit over background-image. Mention this improves SEO and accessibility.'
  },

  {
    id: 'css-21',
    question: 'What is the CSS will-change property and when should you use it?',
    difficulty: 'Advanced',
    shortAnswer: 'will-change hints to browser that element will be animated, allowing optimization. Should be used sparingly and removed when animation ends.',
    detailedAnswer: `will-change property tells browser to optimize for upcoming changes:

SYNTAX:
- will-change: property-name;
- will-change: auto; (default)
- Multiple properties: will-change: transform, opacity;

COMMON PROPERTIES:
- will-change: transform; (usually best choice)
- will-change: opacity;
- will-change: scroll-position; (for scroll events)
- will-change: contents; (when children will change)

HOW IT WORKS:
- Creates new stacking context
- May create new layer (GPU acceleration)
- Browser optimizes rendering for that property
- Can improve performance significantly

IMPORTANT:
- Use sparingly - creates overhead
- Remove after animation (not permanent)
- Test actual performance impact
- Not needed for most animations
- CSS transitions usually don't need it

WHEN TO USE:
- Complex animations
- 3D transforms with many elements
- Scroll performance issues
- Usually not needed for hover animations

AVOID:
- Using on too many elements
- Leaving on permanently
- Using without performance issues
- Using instead of optimization techniques`,
    keyPoints: [
      'will-change hints browser about future changes',
      'Creates new stacking context and layers',
      'Can improve performance if actual changes occur',
      'Adds overhead if used on many elements',
      'Should be removed after animation',
      'Only use when actual performance issue exists'
    ],
    codeExample: `/* Tell browser transform will change */
.animated {
  will-change: transform;
  transition: transform 0.3s;
}

.animated:hover {
  transform: scale(1.2);
}

/* Multiple properties */
.complex-animation {
  will-change: transform, opacity;
}

/* Scroll performance optimization */
.scrollable {
  will-change: scroll-position;
  overflow: auto;
  height: 500px;
}

/* Content will change children */
.dynamic-list {
  will-change: contents;
}

/* Good: Add will-change before animation */
const element = document.querySelector('.element');

// Start animation
element.style.willChange = 'transform';
element.classList.add('animate');

// Clean up after animation
element.addEventListener('animationend', () => {
  element.style.willChange = 'auto';
}, { once: true });

/* AVOID: Permanent will-change (overhead) */
body {
  will-change: transform; /* Bad - always active */
}

/* BETTER: Only during animation */
.element.is-animating {
  will-change: transform;
}

.element {
  transition: transform 0.3s;
}

/* Complex scroll animation */
.scroll-animation {
  will-change: scroll-position;
}

/* 3D transforms benefit from will-change */
.card {
  perspective: 1000px;
  will-change: transform;
}

.card:hover {
  transform: rotateY(45deg);
}

/* Performance: Only use if actually needed */
/* Test with DevTools Performance tab */

// Good pattern: Add and remove
function startAnimation(element) {
  element.style.willChange = 'transform, opacity';
  element.classList.add('animate');
}

function endAnimation(element) {
  element.style.willChange = 'auto';
  element.classList.remove('animate');
}`,
    language: 'css',
    commonMistakes: [
      'Using will-change permanently (creates overhead)',
      'Using on too many elements',
      'Not removing after animation',
      'Using without actual performance issue',
      'Thinking will-change makes animation faster (only helps if actual changes)'
    ],
    thinkingProcess: `Step 1: Explain will-change concept
Step 2: Show syntax and properties
Step 3: Explain stacking context creation
Step 4: Show when to use
Step 5: Discuss measurement and cleanup`,
    realWorldApplication: 'Use will-change for complex animations or scroll performance issues. Always measure impact with DevTools before adding. Remove after animation.',
    interviewTip: 'Show you understand will-change is not a magic bullet. Emphasize measuring performance and using only when needed. This shows mature optimization approach.'
  },

  {
    id: 'css-22',
    question: 'What is the CSS calc() function and how do you use it?',
    difficulty: 'Intermediate',
    shortAnswer: 'calc() performs mathematical operations in CSS values, allowing dynamic calculations like width: calc(100% - 20px).',
    detailedAnswer: `The calc() function allows mathematical calculations in CSS:

SYNTAX:
- calc(expression)
- Operators: + - * /
- Can mix units: calc(100% - 20px)
- Spaces around operators required (for - and +)

OPERATORS:
- Addition (+): calc(100% + 10px)
- Subtraction (-): calc(100% - 20px)
- Multiplication (*): calc(10px * 5)
- Division (/): calc(100px / 2)

UNITS:
- Mix different units: calc(50% - 10px)
- Variables work: calc(var(--width) * 2)
- Can use calc() in calc()

COMMON USES:
- Responsive sizing: width: calc(100% - sidebar-width)
- Centering: position: calc(50% - half-width)
- Padding/margin: padding: calc(var(--spacing) * 2)
- Dynamic gaps: gap: calc(var(--unit) * 1.5)

ADVANTAGES:
- Dynamic calculations
- Works with percentages and fixed units
- Cleaner than JavaScript
- Variables support

LIMITATIONS:
- No logical operators (if/else)
- Can't use custom properties as units
- Browser must calculate at runtime`,
    keyPoints: [
      'calc() does math in CSS',
      'Must have spaces around + and -',
      'Can mix units in same calculation',
      'Works with CSS variables',
      'Useful for responsive layouts',
      'Browser calculates values at runtime'
    ],
    codeExample: `/* Basic subtraction */
.container {
  width: calc(100% - 20px);
  /* Width is 100% of parent minus 20px padding */
}

/* Addition */
.box {
  padding: calc(1em + 5px);
}

/* Multiplication */
.columns {
  width: calc(100% / 3);
  /* 3 equal columns */
}

/* Complex expression */
.content {
  width: calc((100% - 40px) / 2);
  /* Half width minus some padding */
}

/* With CSS variables */
:root {
  --sidebar-width: 250px;
  --spacing: 16px;
}

.main {
  width: calc(100% - var(--sidebar-width));
}

.padding {
  padding: calc(var(--spacing) * 2);
}

/* Responsive layout */
.sidebar {
  width: 250px;
  margin-right: 20px;
}

.content {
  width: calc(100% - 250px - 20px);
  /* Full width minus sidebar and margin */
}

/* Dynamic grid gaps */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--spacing-unit) * 1.5);
}

/* Font sizing */
.fluid-text {
  font-size: calc(12px + 2vw);
  /* Scales between 12px (no viewport width) and larger */
}

/* Centering with calc */
.centered {
  position: absolute;
  left: 50%;
  width: 300px;
  margin-left: calc(-300px / 2);
  /* Equivalent to: margin-left: -150px; */
}

/* Responsive padding */
.container {
  padding: calc(5% + 10px);
  /* Percentage based + fixed amount */
}

/* Height calculations */
.fullscreen {
  height: calc(100vh - 60px);
  /* Full viewport height minus header */
}

/* Border box with width calculation */
.element {
  box-sizing: border-box;
  width: calc(100% - 20px); /* Border already included in width */
  border: 2px solid;
  padding: 8px;
}

/* Complex responsive spacing */
:root {
  --unit: 8px;
}

.spacing {
  margin: calc(var(--unit) * 2);
  padding: calc(var(--unit) * 1.5);
}

.gap {
  gap: calc(var(--unit) * 2.5);
}`,
    language: 'css',
    commonMistakes: [
      'Forgetting spaces around + and - operators',
      'Trying to use logical operators (not supported)',
      'Not considering browser rounding',
      'Over-complicating when simpler solutions exist',
      'Not testing on older browsers'
    ],
    thinkingProcess: `Step 1: Explain calc() concept
Step 2: Show syntax with operators
Step 3: Demonstrate unit mixing
Step 4: Show real-world examples
Step 5: Discuss limitations`,
    realWorldApplication: 'Use calc() for responsive layouts where fixed and percentage sizing mix. Example: sidebar layouts, fullscreen minus header, fluid fonts.',
    interviewTip: 'Show practical examples like "full width minus sidebar" or "100vh minus fixed header". These demonstrate understanding of responsive design.'
  },

  {
    id: 'css-23',
    question: 'What are CSS logical properties and why would you use them?',
    difficulty: 'Advanced',
    shortAnswer: 'Logical properties use direction-relative keywords (start/end, block/inline) instead of absolute (left/right, top/bottom) for better internationalization.',
    detailedAnswer: `Logical properties map to document directions instead of absolute directions:

PHYSICAL vs LOGICAL:
Physical (absolute):
- left, right, top, bottom
- width, height
- margin-left, padding-right

Logical (direction-relative):
- inline-start, inline-end (left/right in LTR)
- block-start, block-end (top/bottom)
- inline-size, block-size
- margin-inline, padding-block

BENEFITS:
- Automatic RTL support (no extra CSS)
- Writing system support (vertical text)
- Cleaner code for i18n
- Future-proof CSS

COMMON MAPPINGS (LTR):
- margin-inline-start = margin-left
- margin-inline-end = margin-right
- padding-block-start = padding-top
- border-inline-start = border-left
- border-block-end = border-bottom

DIRECTION CHANGE (RTL):
- Physical: Must rewrite left/right
- Logical: Automatically flips

BROWSER SUPPORT:
- Modern browsers support
- Progressive enhancement
- Can mix physical and logical`,
    keyPoints: [
      'Logical properties map to directions',
      'inline = left-right axis, block = top-bottom axis',
      '-start and -end replace left/right',
      'Automatic RTL/LTR support',
      'Better for internationalized sites',
      'Progressive enhancement possible'
    ],
    codeExample: `/* Physical properties (absolute) */
.box-physical {
  margin-left: 20px;
  margin-right: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-left: 2px solid;
}

/* Logical properties (direction-relative) */
.box-logical {
  margin-inline-start: 20px; /* left in LTR, right in RTL */
  margin-inline-end: 10px;   /* right in LTR, left in RTL */
  padding-block-start: 15px; /* top */
  padding-block-end: 15px;   /* bottom */
  border-inline-start: 2px solid;
}

/* Shorthand logical properties */
.margin {
  margin-inline: 20px 10px; /* start end */
  margin-block: 15px 15px;
}

.padding {
  padding-inline: 20px 10px;
  padding-block: 15px;
}

/* Size properties */
.size {
  inline-size: 100%; /* width */
  block-size: auto;  /* height */
  max-inline-size: 800px; /* max-width */
}

/* Text alignment */
.text {
  text-align: inline-start; /* left in LTR, right in RTL */
  text-align: inline-end;
}

/* Positioning */
.positioned {
  position: absolute;
  inset-inline-start: 0; /* left in LTR, right in RTL */
  inset-block-start: 0;  /* top */
}

/* Border radius */
.rounded {
  border-start-start-radius: 8px; /* top-left in LTR */
  border-end-start-radius: 8px;   /* bottom-left in LTR */
}

/* Responsive layout with logical properties */
@media (max-width: 768px) {
  .container {
    padding-inline: 10px;
    padding-block: 20px;
  }
}

/* RTL automatic support */
html[dir="rtl"] {
  /* No additional CSS needed with logical properties */
  /* Properties automatically flip */
}

/* Card component with logical properties */
.card {
  padding-inline: 20px;
  padding-block: 15px;
  margin-block-end: 10px;
  border-inline-start: 4px solid #blue;
}

/* List items */
.list {
  list-style-position: inside;
  padding-inline-start: 20px;
}

/* Flex layout with logical properties */
.flex {
  display: flex;
  gap: 10px;
  padding-inline: 15px;
  padding-block: 10px;
}`,
    language: 'css',
    commonMistakes: [
      'Not understanding inline = horizontal, block = vertical',
      'Mixing physical and logical (can cause confusion)',
      'Assuming RTL needs separate CSS (logical handles it)',
      'Not considering -start and -end mapping',
      'Browser support not checked (modern only)'
    ],
    thinkingProcess: `Step 1: Explain physical vs logical concept
Step 2: Show inline vs block axes
Step 3: Demonstrate start/end mapping
Step 4: Show RTL benefits
Step 5: Discuss internationalization advantages`,
    realWorldApplication: 'Use logical properties if supporting RTL languages or need i18n. Otherwise, physical properties are fine for LTR-only sites.',
    interviewTip: 'Show you think about internationalization. Mention automatic RTL support is valuable. Demonstrate understanding of inline/block axes.'
  },

  {
    id: 'css-24',
    question: 'What is the CSS @supports rule and feature queries?',
    difficulty: 'Advanced',
    shortAnswer: '@supports checks if browser supports CSS feature and applies styles conditionally, enabling progressive enhancement.',
    detailedAnswer: `@supports allows conditional CSS based on browser support:

SYNTAX:
@supports (property: value) {
  /* CSS applied if supported */
}

OPERATORS:
- and: All conditions must be true
- or: Any condition can be true
- not: Negate condition

USE CASES:
- Fallback for unsupported features
- Progressive enhancement
- Feature detection
- Graceful degradation

EXAMPLES:
- @supports (display: grid)
- @supports (backdrop-filter: blur())
- @supports (position: sticky)
- @supports (-webkit-appearance: none)

BENEFITS:
- Browser detects actual support
- No JavaScript needed
- Progressive enhancement
- Cleaner than vendor prefixes

ALTERNATIVES:
- Modernizr.js (JavaScript)
- User agent detection (unreliable)
- CSS fallbacks (traditional approach)`,
    keyPoints: [
      '@supports checks actual CSS support',
      'and/or/not operators for logic',
      'Works with any CSS property',
      'Progressive enhancement technique',
      'No JavaScript required',
      'Better than vendor prefix guessing'
    ],
    codeExample: `/* Check for grid support */
@supports (display: grid) {
  .layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

/* Fallback if grid not supported */
@supports not (display: grid) {
  .layout {
    display: flex;
    flex-wrap: wrap;
  }
}

/* Multiple conditions with AND */
@supports (display: flex) and (display: grid) {
  .advanced-layout {
    display: grid;
  }
}

/* Multiple conditions with OR */
@supports (display: -webkit-flex) or (display: flex) {
  .flex-layout {
    display: flex;
  }
}

/* Backdrop filter support */
@supports (backdrop-filter: blur(10px)) {
  .blur-background {
    backdrop-filter: blur(10px);
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .blur-background {
    background: rgba(255, 255, 255, 0.9);
  }
}

/* Sticky position support */
@supports (position: sticky) {
  .sticky-header {
    position: sticky;
    top: 0;
  }
}

@supports not (position: sticky) {
  .sticky-header {
    position: fixed;
    width: 100%;
  }
}

/* CSS variables support */
@supports (--custom: property) {
  .themed {
    color: var(--primary-color);
  }
}

@supports not (--custom: property) {
  .themed {
    color: #3498db;
  }
}

/* Aspect ratio support */
@supports (aspect-ratio: 1) {
  .thumbnail {
    aspect-ratio: 1;
  }
}

@supports not (aspect-ratio: 1) {
  .thumbnail {
    padding-bottom: 100%; /* Old technique */
  }
}

/* Complex feature detection */
@supports (display: grid) and (gap: 1rem) {
  .modern-layout {
    display: grid;
    gap: 1rem;
  }
}

/* Vendor prefix detection */
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  /* Handle custom form styling */
}

/* Progressive enhancement */
@supports (mask-image: url(#mask)) {
  .masked {
    mask-image: url(#mask);
  }
}

@supports not (mask-image: url(#mask)) {
  .masked {
    clip-path: polygon(/* fallback */);
  }
}`,
    language: 'css',
    commonMistakes: [
      'Syntax errors in feature queries (must be valid)',
      'Not using for progressive enhancement',
      'Over-complicating fallbacks',
      'Not testing actual feature support',
      'Assuming all modern browsers support checked feature'
    ],
    thinkingProcess: `Step 1: Explain @supports concept
Step 2: Show syntax with operators
Step 3: Demonstrate real-world examples
Step 4: Compare with alternative approaches
Step 5: Discuss progressive enhancement strategy`,
    realWorldApplication: 'Use @supports for new CSS features when supporting older browsers. Provide fallbacks inside @supports not for browsers lacking feature.',
    interviewTip: 'Show you prefer progressive enhancement over forcing features. Demonstrate understanding of graceful degradation and feature detection.'
  },

  {
    id: 'css-25',
    question: 'What is the CSS clamp() function and how do you use it?',
    difficulty: 'Advanced',
    shortAnswer: 'clamp() sets min, preferred, and max values in one function: clamp(min, preferred, max), useful for responsive sizing.',
    detailedAnswer: `The clamp() function sets minimum, preferred, and maximum values:

SYNTAX:
- clamp(MIN, PREFERRED, MAX)
- MIN: Minimum value (applies if PREFERRED < MIN)
- PREFERRED: Preferred value (scales responsively)
- MAX: Maximum value (applies if PREFERRED > MAX)

BEHAVIOR:
- If PREFERRED < MIN: Returns MIN
- If MIN ≤ PREFERRED ≤ MAX: Returns PREFERRED
- If PREFERRED > MAX: Returns MAX
- PREFERRED can use responsive units (vw, %)

COMMON USES:
- Responsive font sizes
- Padding/margin scaling
- Width constraints
- Dynamic spacing

ADVANTAGES:
- Single declaration instead of multiple breakpoints
- Smooth scaling between min/max
- Fewer media queries needed
- Cleaner, more maintainable code

UNITS:
- Can mix units: clamp(12px, 5vw, 72px)
- calc() works inside: clamp(10px, calc(100% - 20px), 500px)
- Percentage relative to parent`,
    keyPoints: [
      'clamp(min, preferred, max) three parameters',
      'Preferred value scales responsively',
      'Min and max act as boundaries',
      'Reduces need for media queries',
      'Works with any CSS units',
      'Smooth scaling, no jumps at breakpoints'
    ],
    codeExample: `/* Responsive font sizing */
h1 {
  font-size: clamp(24px, 5vw, 72px);
  /* Min 24px, scales with viewport, max 72px */
}

body {
  font-size: clamp(14px, 2.5vw, 18px);
}

/* Responsive padding */
.container {
  padding: clamp(1rem, 5vw, 3rem);
  /* Scales between 1rem and 3rem based on viewport */
}

/* Width with constraints */
.content {
  width: clamp(300px, 90%, 1200px);
  /* Min 300px, preferred 90%, max 1200px */
}

/* Gap in grid/flex */
.grid {
  display: grid;
  gap: clamp(10px, 2vw, 30px);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Margin scaling */
.section {
  margin-block: clamp(1rem, 5%, 3rem);
}

/* Combined with calc() */
.card {
  padding: clamp(1rem, calc(5vw + 1rem), 2rem);
}

/* Complex clamp for spacing */
:root {
  --spacing-min: 8px;
  --spacing-pref: 2vw;
  --spacing-max: 32px;
}

.element {
  padding: clamp(var(--spacing-min), var(--spacing-pref), var(--spacing-max));
}

/* Responsive grid gaps */
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(8px, 3vw, 24px);
}

/* Line height scaling */
body {
  line-height: clamp(1.4, 1.5 + 0.2vw, 1.8);
}

/* Letter spacing for typography */
h2 {
  letter-spacing: clamp(1px, 0.1vw, 3px);
}

/* Smooth scaling without breakpoints */
.hero {
  min-height: clamp(300px, 100vh, 800px);
  /* Scales between 300px and 800px */
}

/* Border radius scaling */
.btn {
  border-radius: clamp(4px, 1vw, 20px);
}

/* Comparison: Before clamp (with media queries) */
.before-clamp {
  font-size: 14px;
  padding: 10px;
}

@media (min-width: 768px) {
  .before-clamp {
    font-size: 18px;
    padding: 15px;
  }
}

@media (min-width: 1024px) {
  .before-clamp {
    font-size: 24px;
    padding: 20px;
  }
}

/* After clamp (cleaner) */
.after-clamp {
  font-size: clamp(14px, 4vw, 24px);
  padding: clamp(10px, 2vw, 20px);
}`,
    language: 'css',
    commonMistakes: [
      'Getting min/max values wrong (affects scaling)',
      'Not considering viewport size when setting vw',
      'Using clamp when fixed values more appropriate',
      'Not testing full viewport range',
      'Mixing incompatible units (use valid combinations)'
    ],
    thinkingProcess: `Step 1: Explain clamp() concept
Step 2: Show three parameters
Step 3: Demonstrate responsive sizing
Step 4: Show before/after comparison
Step 5: Discuss real-world applications`,
    realWorldApplication: 'Use clamp() for responsive typography and spacing instead of multiple media queries. Provides smooth scaling across all viewport sizes.',
    interviewTip: 'Show you prefer modern CSS techniques. Demonstrate understanding that clamp() scales smoothly (no jumps at breakpoints) unlike media queries.'
  },

  {
    id: 'css-26',
    question: 'What is the CSS min(), max(), and how do they work?',
    difficulty: 'Advanced',
    shortAnswer: 'min() returns smallest value, max() returns largest value. Both useful for responsive sizing: width: min(100%, 800px).',
    detailedAnswer: `min() and max() functions select values based on size:

MIN() FUNCTION:
- Returns smallest value from list
- min(100%, 500px) - whichever is smaller
- Useful for max-width behavior
- Prevents oversizing

MAX() FUNCTION:
- Returns largest value from list
- max(100%, 500px) - whichever is larger
- Useful for min-width behavior
- Ensures minimum sizing

COMMON PATTERNS:
- width: min(100%, 800px) - Max 800px but responsive
- padding: max(1rem, 5vw) - At least 1rem, scales up
- font-size: min(24px, 10vw) - Never over 24px
- margin: max(2rem, 10%) - At least 2rem

DIFFERENCE FROM CLAMP:
- min() = only upper limit
- max() = only lower limit
- clamp() = both limits + preferred value

USE CASES:
- min(): Responsive sizing with maximum
- max(): Responsive sizing with minimum
- clamp(): Full control with min/preferred/max`,
    keyPoints: [
      'min() selects smallest value',
      'max() selects largest value',
      'Can accept multiple values',
      'Work with any CSS units',
      'Responsive alternatives to fixed breakpoints',
      'Can combine with calc()'
    ],
    codeExample: `/* min() - maximum bounds */
.container {
  width: min(100%, 1200px);
  /* Never exceeds 1200px, responsive on smaller screens */
}

.section {
  padding: min(20px, 5vw);
  /* Maximum 20px padding */
}

/* max() - minimum bounds */
.content {
  margin: max(0, 2rem);
  /* Minimum 2rem margin */
}

.box {
  padding: max(1rem, 5%);
  /* At least 1rem padding, scales up with 5% */
}

/* Responsive spacing with max() */
.gap {
  gap: max(1rem, 5vw);
  /* Minimum 1rem gap, scales responsively */
}

/* Multiple values */
.width {
  width: min(90vw, 100% - 40px, 1000px);
  /* Smallest of three values */
}

/* With calc() */
.calculated {
  width: min(calc(100% - 20px), 800px);
  /* Responsive with calculation */
}

/* Responsive font sizing */
.title {
  font-size: min(4rem, 20vw);
  /* Never larger than 4rem */
}

.subtitle {
  font-size: max(1rem, 2vw);
  /* Never smaller than 1rem */
}

/* Practical: Sidebar layout */
.sidebar {
  width: min(250px, 25%);
  /* Maximum 250px, scales down on mobile */
}

/* Content with minimum width */
.content {
  width: max(300px, 70%);
  /* Minimum 300px, scales up */
}

/* Grid with responsive columns */
.grid {
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(250px, 100%), 1fr)
  );
}

/* Responsive padding all sides */
.container {
  padding: max(1rem, clamp(1rem, 3vw, 2rem));
}

/* Combining min, max, clamp */
.smart-sizing {
  /* Complex responsive behavior */
  width: min(max(300px, 50vw), 800px);
  /* Minimum 300px, maximum 800px, scales with viewport */
}

/* Button sizing */
.button {
  padding: max(0.5rem, 1vw) max(1rem, 2vw);
  /* Vertical and horizontal padding */
}

/* Real-world: Flexible columns */
.cards {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(max(200px, 100%/3), 1fr)
  );
}

/* Comparison: Before (media queries) */
.before {
  width: 100%;
  padding: 10px;
}

@media (min-width: 1200px) {
  .before {
    width: 1200px;
    padding: 20px;
  }
}

/* After (with min/max) */
.after {
  width: min(100%, 1200px);
  padding: max(10px, 2vw);
}`,
    language: 'css',
    commonMistakes: [
      'Confusing which function is min vs max',
      'Using when fixed values are more appropriate',
      'Not combining with clamp for full control',
      'Not testing across full viewport range',
      'Overcomplicating with too many values'
    ],
    thinkingProcess: `Step 1: Explain min() selects smallest
Step 2: Explain max() selects largest
Step 3: Show common patterns
Step 4: Compare with media queries
Step 5: Discuss when to use each`,
    realWorldApplication: 'Use min() for responsive sizing with maximum bounds. Use max() for minimum sizing that scales. Combine for full control.',
    interviewTip: 'Show understanding of when to use each. min() for "never larger than", max() for "never smaller than". This demonstrates thoughtful responsive design.'
  },

  {
    id: 'css-27',
    question: 'What is the difference between translate() and position?',
    difficulty: 'Intermediate',
    shortAnswer: 'translate() is a transform that doesn\'t affect document flow and is GPU-accelerated; position changes affect layout flow.',
    detailedAnswer: `Two ways to move elements with different performance:

POSITION CHANGES:
- position: relative/absolute/fixed with top/left
- Affects document layout
- Triggers reflow and repaint
- Not GPU-accelerated
- Slower on animations

TRANSFORM: TRANSLATE():
- Uses transform: translate()
- Doesn't affect document flow
- GPU-accelerated (hardware optimized)
- Much faster for animations
- Recommended for animations

PERFORMANCE COMPARISON:
Position:
- Calculation cost: High (reflow needed)
- Paint cost: High
- Suitable for: Static positioning

Transform:
- Calculation cost: Low (no layout)
- Paint cost: Low
- Suitable for: Animations, transitions

BROWSER RENDERING PIPELINE:
Position changes:
- JavaScript → Style → Layout → Paint → Composite
- Reflow required (expensive)

Transform:
- JavaScript → Style → Composite
- Only composite (fastest)

WHEN TO USE POSITION:
- Static layout (not animated)
- Absolute positioning for dropdowns
- Fixed headers/footers

WHEN TO USE TRANSFORM:
- Animations and transitions
- Hover effects
- Scroll effects
- Gaming/complex interactions`,
    keyPoints: [
      'translate() is GPU-accelerated, position is not',
      'translate() doesn\'t affect document flow',
      'position changes trigger reflow/repaint',
      'Use translate() for animations',
      'Use position() for static layout',
      'Huge performance difference in complex animations'
    ],
    codeExample: `/* Position: relative - affects flow indirectly */
.box-position {
  position: relative;
  left: 100px;
  top: 50px;
  /* Slower: triggers reflow */
}

/* Transform: translate - doesn't affect flow */
.box-transform {
  transform: translate(100px, 50px);
  /* Faster: GPU-accelerated, no reflow */
}

/* Animation comparison */
/* BAD: Using position for animation */
@keyframes slide-bad {
  0% { left: 0; }
  100% { left: 100px; }
}

.element-bad {
  position: relative;
  animation: slide-bad 1s ease; /* Slow, repaints every frame */
}

/* GOOD: Using transform for animation */
@keyframes slide-good {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}

.element-good {
  animation: slide-good 1s ease; /* Fast, GPU-accelerated */
}

/* Transition comparison */
/* Slow: Position */
.transition-slow {
  position: relative;
  left: 0;
  transition: left 0.3s;
}

.transition-slow:hover {
  left: 50px; /* Triggers reflow on each frame */
}

/* Fast: Transform */
.transition-fast {
  transition: transform 0.3s;
}

.transition-fast:hover {
  transform: translateX(50px); /* GPU-accelerated */
}

/* Scroll animations - use transform */
.scroll-element {
  transform: translateY(0);
  transition: transform 0.3s; /* Smooth, no jank */
}

/* Absolute positioning - position property is fine */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  /* Not animated, position is appropriate */
}

/* Tooltip - static positioning */
.tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%); /* Center it with transform */
  /* Position for placement, transform for centering */
}

/* Performance: Complex animations */
.particle {
  position: absolute;
  /* BAD if animating - causes full layout recalc */
}

.particle-optimized {
  position: absolute;
  transform: translate(var(--x), var(--y)); /* Smooth animation */
}

/* Mobile performance critical */
@media (max-width: 768px) {
  .mobile-element {
    /* Use transform, not position, for animations */
    transform: translateY(0);
  }
  
  .mobile-element.slide {
    transform: translateY(-100%);
  }
}`,
    language: 'css',
    commonMistakes: [
      'Using position for animations (bad performance)',
      'Not understanding GPU acceleration benefits',
      'Using transform for static layout (unnecessary)',
      'Not measuring performance impact',
      'Mixing position and transform unnecessarily'
    ],
    thinkingProcess: `Step 1: Explain position affects layout
Step 2: Explain transform doesn't affect layout
Step 3: Show GPU acceleration benefit
Step 4: Demonstrate performance comparison
Step 5: Discuss when to use each`,
    realWorldApplication: 'Always use transform for animations and transitions. Use position for static layout. This is the single biggest performance optimization for animations.',
    interviewTip: 'Show deep understanding of rendering pipeline. Mention GPU acceleration and how transform skips layout/paint phases. This is highly valued in senior interviews.'
  },

  {
    id: 'css-28',
    question: 'What is the CSS mix-blend-mode property and when do you use it?',
    difficulty: 'Advanced',
    shortAnswer: 'mix-blend-mode controls how element colors blend with background: multiply, screen, overlay, color-dodge, etc.',
    detailedAnswer: `mix-blend-mode controls how colors blend with background:

COMMON MODES:
- multiply: Darkens (like overlaying transparency)
- screen: Lightens (opposite of multiply)
- overlay: Combines multiply and screen
- soft-light: Subtle blending
- hard-light: Strong blending
- color-dodge: Brightens dramatically
- color-burn: Darkens dramatically
- lighten: Takes lighter color
- darken: Takes darker color
- color: Uses element color, keeps luminosity
- luminosity: Uses element luminosity, keeps color
- hue, saturation: Use element's hue/saturation

USE CASES:
- Image overlays
- Text over images
- Design effects
- Dark mode overlays
- Creative graphics

ADVANTAGES:
- Non-destructive effects
- Smooth blending
- Works on any element
- Can animate smoothly

PERFORMANCE:
- GPU-accelerated on modern browsers
- May have performance cost on complex layouts
- Test on target devices`,
    keyPoints: [
      'mix-blend-mode blends with background',
      'Different modes create different effects',
      'Works with any element (text, images, divs)',
      'Can combine with opacity',
      'Affects stacking context',
      'GPU-accelerated for performance'
    ],
    codeExample: `/* Multiply - darken effect */
.overlay-multiply {
  mix-blend-mode: multiply;
  background: rgba(0, 0, 0, 0.5);
}

/* Screen - lighten effect */
.overlay-screen {
  mix-blend-mode: screen;
  background: rgba(255, 255, 255, 0.5);
}

/* Overlay - combines multiply and screen */
.overlay-overlay {
  mix-blend-mode: overlay;
  background: rgba(0, 0, 0, 0.5);
}

/* Text over image with blend mode */
.hero {
  background-image: url('image.jpg');
  background-size: cover;
}

.hero-overlay {
  mix-blend-mode: multiply;
  background: rgba(0, 0, 255, 0.3);
  padding: 2rem;
}

.hero-text {
  color: white;
}

/* Dark mode overlay */
.dark-overlay {
  mix-blend-mode: darken;
  background: rgba(50, 50, 50, 0.7);
}

/* Color dodge for bright effect */
.bright-overlay {
  mix-blend-mode: color-dodge;
  background: rgba(255, 255, 0, 0.3);
}

/* Creative image effect */
.creative-image {
  mix-blend-mode: color;
  opacity: 0.8;
}

/* Hover blend mode change */
.blend-hover {
  mix-blend-mode: normal;
  transition: mix-blend-mode 0.3s;
}

.blend-hover:hover {
  mix-blend-mode: multiply;
}

/* Text blend with background */
.blend-text {
  mix-blend-mode: lighten;
  color: #333;
  font-weight: bold;
}

/* Gradient with blend mode */
.gradient-blend {
  background: linear-gradient(45deg, red, blue);
  mix-blend-mode: screen;
  opacity: 0.8;
}

/* Multiple layers with blend */
.layered {
  position: relative;
}

.layer-1 {
  background: red;
}

.layer-2 {
  position: absolute;
  background: blue;
  mix-blend-mode: multiply;
  opacity: 0.5;
}

/* Practical: Image gallery overlay */
.gallery-item {
  position: relative;
  overflow: hidden;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(0,0,0,0.5));
  mix-blend-mode: multiply;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}`,
    language: 'css',
    commonMistakes: [
      'Using when opacity would suffice (over-engineered)',
      'Not testing browser support',
      'Not considering accessibility',
      'Not understanding different mode effects',
      'Performance impact on complex pages'
    ],
    thinkingProcess: `Step 1: Explain blend mode concept
Step 2: Show common mode effects
Step 3: Demonstrate with images
Step 4: Show real-world use cases
Step 5: Discuss performance considerations`,
    realWorldApplication: 'Use mix-blend-mode for image overlays and creative effects. Combine with opacity for subtle blending. Test across browsers for support.',
    interviewTip: 'Show you know advanced CSS techniques. Mention specific use cases like image gallery overlays or dark mode effects. This demonstrates design-aware development.'
  },

  {
    id: 'css-29',
    question: 'What is the CSS scroll-behavior property and smooth scrolling?',
    difficulty: 'Intermediate',
    shortAnswer: 'scroll-behavior controls how page scrolls: auto (instant) or smooth (animated). Works with anchor links and JavaScript scroll.',
    detailedAnswer: `scroll-behavior controls scrolling animation:

VALUES:
- auto (default): Instant scroll to position
- smooth: Animated scroll to position

WORKS WITH:
- Anchor links (jump to id)
- window.scrollTo()
- Element.scrollIntoView()
- Any programmatic scroll

SYNTAX:
html {
  scroll-behavior: smooth;
}

BROWSER SUPPORT:
- Good modern support
- Safari needs -webkit prefix or JavaScript
- Fall back to auto on older browsers

JAVASCRIPT USAGE:
// Smooth scroll
element.scrollIntoView({ behavior: 'smooth' });

// Or set CSS property
el.style.scrollBehavior = 'smooth';

PERFORMANCE:
- Minimal impact
- Respects prefers-reduced-motion
- Hardware accelerated

ACCESSIBILITY:
- Respect prefers-reduced-motion
- Avoid excessive smooth scrolling
- May cause motion sickness for some users`,
    keyPoints: [
      'smooth scrolls gradually to position',
      'auto jumps instantly (default)',
      'Works with anchor links',
      'JavaScript scroll methods respect property',
      'Must check prefers-reduced-motion',
      'Browser support mostly complete'
    ],
    codeExample: `/* Enable smooth scrolling globally */
html {
  scroll-behavior: smooth;
}

/* Anchor link will scroll smoothly */
<a href="#section2">Go to Section 2</a>

<section id="section2">
  <!-- Smooth scroll to here -->
</section>

/* Specific element smooth scroll */
.scrollable-container {
  scroll-behavior: smooth;
  height: 500px;
  overflow-y: auto;
}

/* JavaScript smooth scroll */
button.addEventListener('click', () => {
  const target = document.querySelector('#target');
  target.scrollIntoView({ behavior: 'smooth' });
});

/* Accessibility: Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto; /* Instant scroll */
  }
}

/* Smooth scroll in scrollable container */
.carousel {
  scroll-behavior: smooth;
  overflow-x: auto;
  display: flex;
  gap: 10px;
}

.carousel-item {
  flex: 0 0 300px;
}

/* Scroll to element button */
<button id="scrollBtn">Scroll to bottom</button>

<script>
  document.getElementById('scrollBtn').addEventListener('click', () => {
    document.body.scrollIntoView({ behavior: 'smooth' });
  });
</script>

/* Table of contents with smooth links */
<nav class="toc">
  <a href="#chapter1">Chapter 1</a>
  <a href="#chapter2">Chapter 2</a>
</nav>

<html style="scroll-behavior: smooth;">
  <section id="chapter1">...</section>
  <section id="chapter2">...</section>
</html>

/* Scroll snap (modern feature) */
html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

/* Back to top button */
<button id="backToTop" style="display: none;">Back to Top</button>

<script>
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>`,
    language: 'css',
    commonMistakes: [
      'Not respecting prefers-reduced-motion',
      'Over-using smooth scrolling (can feel slow)',
      'Not providing fallback for older browsers',
      'Using with long scrolls (may feel unresponsive)',
      'Not considering user preference'
    ],
    thinkingProcess: `Step 1: Explain scroll-behavior values
Step 2: Show with anchor links
Step 3: Show JavaScript usage
Step 4: Discuss accessibility
Step 5: Show real-world examples`,
    realWorldApplication: 'Use smooth scrolling for table of contents and "back to top" buttons. Always respect prefers-reduced-motion for accessibility.',
    interviewTip: 'Show you understand accessibility implications. Mention prefers-reduced-motion is essential. This demonstrates inclusive design thinking.'
  },

  {
    id: 'css-30',
    question: 'What are CSS backdrop filters and how do you use them?',
    difficulty: 'Advanced',
    shortAnswer: 'backdrop-filter applies effects to area behind element (blur, brightness), useful for frosted glass effect over content.',
    detailedAnswer: `backdrop-filter applies effects to background behind element:

AVAILABLE FILTERS:
- blur(): Blur background
- brightness(): Adjust brightness
- contrast(): Adjust contrast
- grayscale(): Convert to grayscale
- hue-rotate(): Rotate hue
- invert(): Invert colors
- opacity(): Make background transparent
- saturate(): Adjust saturation
- sepia(): Apply sepia tone
- drop-shadow(): Shadow effect

COMMON USES:
- Frosted glass effect
- Semi-transparent overlays
- Modals and popups
- Navigation bars
- Cards over images

REQUIREMENTS:
- Element must be semi-transparent
- Works best with rgba background
- Requires modern browsers
- GPU-accelerated

SYNTAX:
.element {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
}

BROWSER SUPPORT:
- Most modern browsers
- Safari full support
- Chrome/Firefox good support
- Provide fallback for older browsers`,
    keyPoints: [
      'backdrop-filter blurs/modifies background',
      'Element must be semi-transparent',
      'Similar filters to filter property',
      'Creates frosted glass effect',
      'GPU-accelerated for performance',
      'Browser support mostly complete'
    ],
    codeExample: `/* Frosted glass effect */
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 20px;
}

/* Semi-transparent modal with blurred background */
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

.modal {
  background: white;
  border-radius: 8px;
  padding: 30px;
}

/* Navigation with glass effect */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* Multiple backdrop filters */
.card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px) brightness(1.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Sidebar with glass effect */
.sidebar {
  background: rgba(50, 50, 50, 0.7);
  backdrop-filter: blur(15px);
  color: white;
}

/* Floating label with backdrop */
.floating-label {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  padding: 8px 12px;
  border-radius: 4px;
}

/* Image caption with glass effect */
.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  color: white;
  padding: 20px;
}

/* Search bar with backdrop */
.search-bar {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  padding: 10px;
  z-index: 100;
}

/* Notification toast */
.toast {
  background: rgba(50, 50, 50, 0.8);
  backdrop-filter: blur(10px) brightness(0.9);
  color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* Feature detection and fallback */
@supports (backdrop-filter: blur(10px)) {
  .glass {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .glass {
    background: rgba(255, 255, 255, 0.9);
    /* Opaque fallback */
  }
}

/* Responsive backdrop */
@media (prefers-reduced-motion: reduce) {
  .glass {
    backdrop-filter: none;
    /* Disable for accessibility */
  }
}`,
    language: 'css',
    commonMistakes: [
      'Not making element semi-transparent (no visible effect)',
      'Using opaque background (hides backdrop)',
      'Not providing fallback (older browsers fail)',
      'Not testing on actual devices (emulation differs)',
      'Over-blurring (makes content unreadable)'
    ],
    thinkingProcess: `Step 1: Explain backdrop-filter concept
Step 2: Show available filters
Step 3: Demonstrate frosted glass effect
Step 4: Show real-world use cases
Step 5: Discuss browser support and fallbacks`,
    realWorldApplication: 'Use for modal overlays, navigation bars, and cards over images. Combine with semi-transparent background. Always provide fallback for older browsers.',
    interviewTip: 'Show you know advanced effects. Mention browser support gracefully with @supports. This demonstrates thoughtful, accessible implementation.'
  },
  {
  id: 'css-31',

  question: 'What is z-index and how does it work?',

  difficulty: 'Intermediate',

  shortAnswer: 'The z-index property controls the stacking order of positioned elements. Elements with a higher z-index appear in front of elements with a lower z-index.',

  detailedAnswer: `The z-index property determines which elements appear on top when multiple elements overlap.

Think of z-index as layers stacked on top of each other:

Higher z-index = Closer to the user (appears in front)
Lower z-index = Further away (appears behind)

Important Rules:

1. z-index only works on positioned elements.
   - position: relative
   - position: absolute
   - position: fixed
   - position: sticky

2. By default, elements have z-index: auto.

3. Elements with larger z-index values appear above smaller values.

4. Negative z-index values can place elements behind others.

Common Stacking Order:

z-index: 1000 → Modal/Dialog
z-index: 500 → Dropdown Menu
z-index: 100 → Fixed Navbar
z-index: 1 → Regular Content

Without z-index, overlapping elements are stacked according to their order in the HTML document, where later elements usually appear on top.

Understanding z-index is essential for creating dropdowns, modals, tooltips, sidebars, overlays, and complex UI layouts.`,

  keyPoints: [

    'z-index controls element stacking order',

    'Higher z-index values appear in front',

    'Works only on positioned elements',

    'Negative values can place elements behind others',

    'Frequently used for modals, tooltips, and dropdowns'

  ],

  codeExample: `/* Example 1: Basic z-index */

.box1 {
  position: absolute;
  left: 50px;
  top: 50px;
  width: 150px;
  height: 150px;
  background: red;
  z-index: 1;
}

.box2 {
  position: absolute;
  left: 100px;
  top: 100px;
  width: 150px;
  height: 150px;
  background: blue;
  z-index: 2;
}

/* Blue box appears above red box */



/* Example 2: Modal Above Everything */

.navbar {
  position: fixed;
  z-index: 100;
}

.dropdown {
  position: absolute;
  z-index: 500;
}

.modal {
  position: fixed;
  z-index: 1000;
}



/* Example 3: Negative z-index */

.background {
  position: absolute;
  z-index: -1;
}`,

  language: 'css',

  commonMistakes: [

    'Using z-index without a position property',

    'Assigning extremely large z-index values unnecessarily',

    'Ignoring stacking contexts created by parent elements',

    'Using z-index to fix layout issues instead of proper positioning',

    'Not understanding why z-index is not working inside nested elements'

  ],

  thinkingProcess: `Step 1: Understand that overlapping elements create layers

Step 2: Learn that z-index controls layer order

Step 3: Remember that position must be set

Step 4: Compare higher and lower z-index values

Step 5: Apply z-index to real-world UI components like modals and dropdowns`,

  realWorldApplication: 'E-commerce websites use z-index for product quick-view modals, dashboards use it for dropdown menus, and social media apps use it for notifications, popups, and overlays.',

  interviewTip: 'A common interview question is: "Why is z-index not working?" The first thing to check is whether the element has position: relative, absolute, fixed, or sticky. Also mention stacking context for advanced interviews.'

},
{
  id: 'css-32',

  question: 'How do you create a sticky navbar?',

  difficulty: 'coding',

  shortAnswer: 'A sticky navbar stays visible at the top of the page while the user scrolls by using position: sticky and top: 0.',

  detailedAnswer: `A sticky navbar is a navigation bar that remains visible when the user scrolls down the page.

CSS provides a simple way to create this behavior using:

position: sticky;
top: 0;

How it works:

1. The element behaves like a normal element initially.
2. When the scroll position reaches the element,
   it becomes fixed relative to the viewport.
3. The navbar stays visible until its parent container ends.

Important Properties:

position: sticky
- Enables sticky behavior.

top: 0
- Defines where the element sticks.

z-index
- Ensures the navbar appears above content.

background
- Prevents content from showing through.

Sticky navigation improves usability because users can access navigation links without scrolling back to the top of the page.

Common uses:
- Website navigation bars
- Table headers
- Sidebar menus
- Filter panels`,

  keyPoints: [

    'Uses position: sticky',

    'Requires top: 0 (or another offset)',

    'Behaves normally until scroll threshold is reached',

    'Usually combined with z-index',

    'Improves navigation accessibility'

  ],

  codeExample: `/* Sticky Navbar */

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: #ffffff;
  padding: 15px 20px;

  border-bottom: 1px solid #ddd;
}



/* Example Layout */

<header class="navbar">
  <h2>My Website</h2>
</header>

<main>
  <p>Lots of content here...</p>
</main>`,

  language: 'css',

  commonMistakes: [

    'Forgetting to set top: 0',

    'Using sticky inside containers with overflow: hidden',

    'Not adding z-index',

    'Expecting sticky to behave exactly like fixed positioning',

    'Not providing a background color'

  ],

  thinkingProcess: `Step 1: Identify the navigation element

Step 2: Apply position: sticky

Step 3: Set top: 0

Step 4: Add z-index for stacking

Step 5: Test scrolling behavior`,

  realWorldApplication: 'Most modern websites, documentation platforms, blogs, e-commerce sites, and admin dashboards use sticky navigation bars to improve user experience.',

  interviewTip: 'Interviewers often ask the difference between sticky and fixed positioning. Sticky behaves normally until a scroll threshold is reached, while fixed stays attached to the viewport at all times.'

},
{
  id: 'css-33',

  question: 'Explain how to create a bottom navigation bar in CSS.',

  difficulty: 'coding',

  shortAnswer: 'A bottom navigation bar is typically created using position: fixed, bottom: 0, width: 100%, and Flexbox to keep navigation links aligned across the bottom of the screen.',

  detailedAnswer: `A bottom navigation bar is a navigation menu fixed at the bottom of the viewport.

It is commonly used in:

- Mobile applications
- Progressive Web Apps (PWAs)
- Social media platforms
- E-commerce applications
- Dashboard interfaces

The most common approach uses:

position: fixed;
bottom: 0;
width: 100%;

This keeps the navigation bar visible even while the user scrolls.

Flexbox is typically used to distribute navigation items evenly across the available width.

Important CSS Properties:

position: fixed
- Keeps the navbar attached to the viewport.

bottom: 0
- Places it at the bottom.

width: 100%
- Makes it span the entire screen.

display: flex
- Aligns navigation items.

justify-content: space-around
- Creates equal spacing between items.

z-index
- Ensures the navbar appears above page content.

Padding should also be added to the page content to prevent it from being hidden behind the fixed navbar.

Bottom navigation improves usability on mobile devices because important actions remain within easy thumb reach.`,

  keyPoints: [

    'Use position: fixed',

    'Set bottom: 0',

    'Use width: 100%',

    'Use Flexbox for alignment',

    'Add page padding to avoid content overlap'

  ],

  codeExample: `/* Page Content */

body {
  margin: 0;
  padding-bottom: 70px;
}



/* Bottom Navigation */

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 15px 0;

  background: #222;
  z-index: 1000;
}



/* Navigation Links */

.bottom-nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.bottom-nav a:hover {
  color: #4caf50;
}`,

  language: 'css',

  commonMistakes: [

    'Forgetting bottom: 0',

    'Not adding body padding-bottom',

    'Using fixed positioning without z-index',

    'Making touch targets too small',

    'Not testing on mobile devices'

  ],

  thinkingProcess: `Step 1: Create a navigation container

Step 2: Fix it to the viewport bottom

Step 3: Stretch it across the screen

Step 4: Use Flexbox for equal spacing

Step 5: Add content spacing to prevent overlap`,

  realWorldApplication: 'Applications like Instagram, Facebook, YouTube, and many banking apps use bottom navigation bars because they provide quick access to important features while keeping controls within comfortable reach on mobile devices.',

  interviewTip: 'If asked how to build a mobile-friendly navigation system, mention Flexbox, fixed positioning, touch-friendly spacing, accessibility, and responsive design considerations.'

},
{
  id: 'css-34',

  question: 'How do you build a responsive card layout?',

  difficulty: 'coding',

  shortAnswer: 'A responsive card layout is commonly built using CSS Grid or Flexbox, allowing cards to automatically adjust their size and position based on the screen width.',

  detailedAnswer: `Responsive card layouts are used to display content such as products, blog posts, user profiles, and dashboard widgets.

A responsive layout should:

- Adapt to different screen sizes
- Automatically wrap cards
- Maintain consistent spacing
- Provide a good user experience on mobile and desktop

The modern approach uses CSS Grid because it can automatically create responsive columns.

Common Grid Features:

display: grid
- Enables grid layout.

grid-template-columns
- Defines responsive columns.

repeat()
- Repeats column patterns.

minmax()
- Creates flexible column sizes.

gap
- Adds spacing between cards.

The most popular responsive pattern is:

grid-template-columns:
repeat(auto-fit, minmax(250px, 1fr));

This means:
- Minimum card width: 250px
- Maximum width: available space
- Automatically adjusts the number of columns

Responsive card layouts are widely used in modern web applications.`,

  keyPoints: [

    'CSS Grid is ideal for responsive card layouts',

    'auto-fit automatically adjusts column count',

    'minmax() creates flexible card sizes',

    'gap controls spacing between cards',

    'Cards should adapt to different screen sizes'

  ],

  codeExample: `/* Card Container */

.cards {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));

  gap: 20px;

  padding: 20px;
}



/* Card */

.card {
  background: white;

  border-radius: 10px;

  padding: 20px;

  box-shadow:
    0 2px 10px rgba(0,0,0,0.1);
}



/* Card Image */

.card img {
  width: 100%;

  border-radius: 8px;
}



/* Card Title */

.card h3 {
  margin-top: 10px;
}`,

  language: 'css',

  commonMistakes: [

    'Using fixed card widths',

    'Not testing on mobile screens',

    'Forgetting gap spacing',

    'Using excessive media queries',

    'Ignoring image responsiveness'

  ],

  thinkingProcess: `Step 1: Create a container

Step 2: Enable Grid layout

Step 3: Use auto-fit with minmax()

Step 4: Style individual cards

Step 5: Test responsiveness on different devices`,

  realWorldApplication: 'E-commerce websites display products using responsive cards. Blog platforms use cards for articles, and admin dashboards use cards for statistics and widgets.',

  interviewTip: 'For modern projects, mention CSS Grid with repeat(auto-fit, minmax()). It demonstrates knowledge of responsive design without relying heavily on media queries.'

},
{
  id: 'css-35',

  question: 'How do you create a CSS-only dropdown menu?',

  difficulty: 'coding',

  shortAnswer: 'A CSS-only dropdown menu can be created using relative positioning on the parent element and showing the dropdown content using the :hover pseudo-class.',

  detailedAnswer: `A dropdown menu displays additional navigation options when users interact with a menu item.

Without JavaScript, CSS can control the visibility of the dropdown using pseudo-classes such as:

:hover
:focus-within

Basic Approach:

1. Create a parent menu item.
2. Place dropdown content inside it.
3. Hide the dropdown initially.
4. Show it when the parent is hovered.

Important CSS Properties:

position: relative
- Creates a positioning context.

position: absolute
- Positions the dropdown menu.

display: none
- Hides the dropdown initially.

display: block
- Shows the dropdown when hovered.

Using :focus-within improves keyboard accessibility because users can access the dropdown using the keyboard.

CSS-only dropdowns work well for simple navigation menus, but complex interactions often require JavaScript.`,

  keyPoints: [

    'Uses the :hover pseudo-class',

    'Parent element should use position: relative',

    'Dropdown uses position: absolute',

    'Dropdown is hidden initially',

    ':focus-within improves accessibility'

  ],

  codeExample: `/* Parent Menu */

.dropdown {
  position: relative;
  display: inline-block;
}



/* Dropdown Content */

.dropdown-content {
  display: none;

  position: absolute;

  min-width: 180px;

  background: white;

  box-shadow:
    0 4px 12px rgba(0,0,0,0.15);

  border-radius: 6px;
}



/* Show Dropdown */

.dropdown:hover
.dropdown-content,

.dropdown:focus-within
.dropdown-content {
  display: block;
}



/* Links */

.dropdown-content a {
  display: block;

  padding: 12px;

  text-decoration: none;

  color: #333;
}

.dropdown-content a:hover {
  background: #f5f5f5;
}`,

  language: 'css',

  commonMistakes: [

    'Forgetting position: relative on the parent',

    'Not using absolute positioning for the dropdown',

    'Making dropdown items difficult to click',

    'Ignoring keyboard accessibility',

    'Using display: none without focus support'

  ],

  thinkingProcess: `Step 1: Create a parent menu container

Step 2: Place dropdown content inside it

Step 3: Hide the dropdown by default

Step 4: Show it using :hover

Step 5: Add :focus-within for accessibility`,

  realWorldApplication: 'Dropdown menus are used in website navigation bars, user account menus, admin dashboards, and e-commerce category navigation.',

  interviewTip: 'A strong answer includes both :hover and :focus-within. Mentioning accessibility shows a deeper understanding than simply displaying the menu on hover.'

},
{
  id: 'css-36',

  question: 'How do you center a div vertically and horizontally?',

  difficulty: 'coding',

  shortAnswer: 'The modern and recommended way to center a div both vertically and horizontally is by using Flexbox or CSS Grid.',

  detailedAnswer: `Centering elements is one of the most common CSS tasks.

Modern CSS provides several methods for centering content, but Flexbox and Grid are the most efficient.

Method 1: Flexbox (Most Common)

Flexbox allows easy horizontal and vertical alignment using:

justify-content: center;
align-items: center;

Method 2: CSS Grid

Grid provides a simple solution using:

place-items: center;

Method 3: Absolute Positioning

Can be achieved using:

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

However, Flexbox and Grid are generally preferred because they are cleaner and more responsive.

For full-page centering, the parent container often uses:

height: 100vh;

This makes the container fill the entire viewport height.

Modern websites, login forms, loaders, modals, and landing pages frequently use these centering techniques.`,

  keyPoints: [

    'Flexbox is the most commonly used method',

    'justify-content centers horizontally',

    'align-items centers vertically',

    'Grid can center using place-items: center',

    'Flexbox and Grid are preferred over absolute positioning'

  ],

  codeExample: `/* Method 1: Flexbox */

.container {
  display: flex;

  justify-content: center;

  align-items: center;

  height: 100vh;
}



/* Method 2: Grid */

.container {
  display: grid;

  place-items: center;

  height: 100vh;
}



/* Method 3: Absolute Positioning */

.box {
  position: absolute;

  top: 50%;

  left: 50%;

  transform:
    translate(-50%, -50%);
}`,

  language: 'css',

  commonMistakes: [

    'Using text-align: center for vertical centering',

    'Forgetting to set container height',

    'Confusing horizontal and vertical alignment properties',

    'Overusing absolute positioning',

    'Not considering responsive layouts'

  ],

  thinkingProcess: `Step 1: Identify the parent container

Step 2: Choose Flexbox or Grid

Step 3: Set container height

Step 4: Apply centering properties

Step 5: Test on different screen sizes`,

  realWorldApplication: 'Centered layouts are commonly used for login forms, loading spinners, hero sections, modal dialogs, error pages, and call-to-action components.',

  interviewTip: 'For modern interviews, answer with Flexbox first. Mention justify-content: center and align-items: center because these are the most commonly expected solutions.'

},
{
  id: 'css-37',

  question: 'How do you create a dark mode toggle using CSS variables?',

  difficulty: 'coding',

  shortAnswer: 'A dark mode toggle can be created using CSS custom properties (variables) and switching between light and dark theme values by adding or removing a class on the document.',

  detailedAnswer: `Dark mode is a popular feature that allows users to switch between light and dark color themes.

The modern approach uses CSS variables because they make theme management simple and maintainable.

How it works:

1. Define default variables in :root.
2. Create a dark theme class with different values.
3. Toggle the class using JavaScript.
4. All elements automatically update because they use variables.

Common Variables:

--bg-color
--text-color
--card-color
--border-color
--primary-color

Advantages:

- Easy theme management
- Cleaner code
- Better maintainability
- Consistent design system
- Works across the entire application

Modern websites such as GitHub, YouTube, Twitter/X, and many dashboards use CSS variables for theme switching.`,

  keyPoints: [

    'Use CSS custom properties (variables)',

    'Define default values in :root',

    'Create a dark-theme class',

    'Toggle themes using JavaScript',

    'Variables update all components automatically'

  ],

  codeExample: `/* Light Theme */

:root {
  --bg-color: #ffffff;
  --text-color: #222222;
  --card-color: #f5f5f5;
}



/* Dark Theme */

.dark-theme {
  --bg-color: #121212;
  --text-color: #ffffff;
  --card-color: #1e1e1e;
}



/* Using Variables */

body {
  background: var(--bg-color);
  color: var(--text-color);

  transition: 0.3s;
}

.card {
  background: var(--card-color);
}



/* JavaScript */

const btn =
  document.getElementById('toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle(
    'dark-theme'
  );
});`,

  language: 'css',

  commonMistakes: [

    'Hardcoding colors instead of using variables',

    'Forgetting fallback values',

    'Not updating all theme-related properties',

    'Using separate stylesheets unnecessarily',

    'Ignoring transition effects'

  ],

  thinkingProcess: `Step 1: Define reusable color variables

Step 2: Create a dark theme variation

Step 3: Apply variables throughout the UI

Step 4: Toggle a theme class

Step 5: Update colors automatically using variables`,

  realWorldApplication: 'Admin dashboards, portfolio websites, social media platforms, and SaaS applications commonly provide dark mode options to improve user comfort and reduce eye strain.',

  interviewTip: 'Interviewers prefer solutions using CSS variables rather than maintaining separate light and dark stylesheets. Mention maintainability and scalability benefits.'

},
{
  id: 'css-38',

  question: 'How do you build a responsive sidebar?',

  difficulty: 'coding',

  shortAnswer: 'A responsive sidebar is typically built using Flexbox or CSS Grid, combined with media queries to adapt its layout for smaller screens.',

  detailedAnswer: `A sidebar is a vertical navigation area commonly used in dashboards, admin panels, and web applications.

A responsive sidebar should:

- Display normally on large screens
- Collapse or hide on smaller screens
- Remain accessible on mobile devices
- Adapt without breaking the layout

Common Approaches:

1. Fixed Sidebar
   - Always visible on desktop.

2. Collapsible Sidebar
   - Expands and collapses using a button.

3. Off-Canvas Sidebar
   - Slides in from the side on mobile devices.

Key CSS Techniques:

display: flex
- Creates the main layout.

position: fixed
- Keeps the sidebar visible.

transform: translateX()
- Used for slide animations.

media queries
- Adjust layout based on screen size.

Responsive sidebars improve usability by maximizing screen space while maintaining easy navigation.`,

  keyPoints: [

    'Use Flexbox or Grid for layout',

    'Use media queries for responsiveness',

    'Sidebar can be fixed or collapsible',

    'Transform is useful for slide effects',

    'Mobile layouts often use off-canvas navigation'

  ],

  codeExample: `/* Layout */

.layout {
  display: flex;
}



/* Sidebar */

.sidebar {
  width: 250px;

  height: 100vh;

  background: #222;

  color: white;

  padding: 20px;
}



/* Main Content */

.main {
  flex: 1;

  padding: 20px;
}



/* Mobile Layout */

@media (max-width: 768px) {

  .sidebar {

    position: fixed;

    left: -250px;

    top: 0;

    transition: 0.3s;
  }

  .sidebar.active {
    left: 0;
  }

}`,

  language: 'css',

  commonMistakes: [

    'Using fixed widths without responsiveness',

    'Not testing mobile layouts',

    'Ignoring accessibility',

    'Creating sidebars that cover content',

    'Using excessive media queries'

  ],

  thinkingProcess: `Step 1: Create a sidebar container

Step 2: Build the layout using Flexbox

Step 3: Define desktop behavior

Step 4: Add responsive breakpoints

Step 5: Implement mobile-friendly navigation`,

  realWorldApplication: 'Admin dashboards, analytics platforms, learning management systems, CRM software, and project management tools commonly use responsive sidebars for navigation.',

  interviewTip: 'For modern UI design, mention off-canvas sidebars and media queries. Interviewers often expect mobile-first thinking when discussing responsive navigation.'

},
{
  id: 'css-39',

  question: 'How do you create a CSS-only tooltip?',

  difficulty: 'Advanced',

  shortAnswer: 'A CSS-only tooltip can be created by positioning a hidden element near a target element and displaying it using the :hover or :focus pseudo-class.',

  detailedAnswer: `A tooltip is a small information box that appears when a user hovers over or focuses on an element.

Tooltips are commonly used to:

- Explain icons
- Show additional information
- Provide hints or instructions
- Improve user experience

A CSS-only tooltip works by:

1. Wrapping the target element.
2. Creating a tooltip element.
3. Hiding the tooltip initially.
4. Showing it on hover or focus.

Important CSS Properties:

position: relative
- Creates a positioning context.

position: absolute
- Positions the tooltip.

opacity
- Controls visibility.

visibility
- Hides the tooltip from users.

transition
- Creates smooth animations.

Using :focus improves accessibility because keyboard users can also access the tooltip.

Tooltips should be concise and not contain critical information that users must see.`,

  keyPoints: [

    'Uses :hover and :focus pseudo-classes',

    'Parent should use position: relative',

    'Tooltip uses position: absolute',

    'Opacity and visibility create smooth animations',

    'Accessibility should include keyboard focus support'

  ],

  codeExample: `/* Tooltip Container */

.tooltip {
  position: relative;

  display: inline-block;

  cursor: pointer;
}



/* Tooltip Text */

.tooltip-text {

  position: absolute;

  bottom: 125%;

  left: 50%;

  transform: translateX(-50%);

  background: #333;

  color: white;

  padding: 8px 12px;

  border-radius: 6px;

  white-space: nowrap;

  opacity: 0;

  visibility: hidden;

  transition: 0.3s;
}



/* Show Tooltip */

.tooltip:hover .tooltip-text,
.tooltip:focus-within .tooltip-text {

  opacity: 1;

  visibility: visible;
}



/* HTML Structure

<div class="tooltip">

  Hover Me

  <span class="tooltip-text">
    Tooltip Message
  </span>

</div>

*/`,

  language: 'css',

  commonMistakes: [

    'Using display: none which prevents smooth animations',

    'Forgetting position: relative on the parent',

    'Making tooltip text too long',

    'Ignoring keyboard accessibility',

    'Positioning tooltips outside the viewport'

  ],

  thinkingProcess: `Step 1: Create a tooltip container

Step 2: Add the tooltip content

Step 3: Hide it initially

Step 4: Show it on hover and focus

Step 5: Add animation and positioning`,

  realWorldApplication: 'Tooltips are used in dashboards, forms, admin panels, analytics platforms, and design systems to provide contextual help without cluttering the interface.',

  interviewTip: 'Mention both :hover and :focus. Accessibility-aware answers stand out in interviews because many candidates only discuss hover interactions.'

},
{
  id: 'css-40',

  question: 'How do you build a responsive dashboard layout?',

  difficulty: 'coding',

  shortAnswer: 'A responsive dashboard layout is typically built using CSS Grid for the overall page structure and Flexbox for aligning components within individual sections.',

  detailedAnswer: `A dashboard layout is commonly used in admin panels, analytics platforms, CRM systems, and SaaS applications.

A modern responsive dashboard usually contains:

- Sidebar navigation
- Top navbar/header
- Main content area
- Cards/widgets
- Tables and charts

The recommended approach is:

1. Use CSS Grid for the main page structure.
2. Use Flexbox inside components.
3. Add media queries for smaller screens.
4. Make cards responsive using auto-fit and minmax().
5. Collapse or hide the sidebar on mobile devices.

CSS Grid is ideal because it allows precise control over rows and columns.

Common Dashboard Layout:

+----------------------+
|       Header         |
+-----+----------------+
|Side |                |
| bar | Main Content   |
|     |                |
+-----+----------------+

Responsive dashboards should:

- Adapt to mobile screens
- Prevent horizontal scrolling
- Keep navigation accessible
- Use flexible card layouts

This approach creates scalable and maintainable dashboard interfaces.`,

  keyPoints: [

    'Use CSS Grid for page structure',

    'Use Flexbox inside widgets and cards',

    'Responsive cards should use auto-fit and minmax()',

    'Sidebar should adapt on smaller screens',

    'Avoid fixed widths whenever possible'

  ],

  codeExample: `/* Dashboard Layout */

.dashboard {

  display: grid;

  grid-template-columns:
    250px 1fr;

  grid-template-rows:
    70px 1fr;

  min-height: 100vh;
}



/* Header */

.header {

  grid-column: 1 / 3;

  background: #fff;

  border-bottom: 1px solid #ddd;
}



/* Sidebar */

.sidebar {

  background: #222;

  color: white;
}



/* Main Content */

.main {

  padding: 20px;
}



/* Responsive Cards */

.cards {

  display: grid;

  grid-template-columns:
    repeat(auto-fit,
      minmax(250px, 1fr));

  gap: 20px;
}



/* Mobile */

@media (max-width: 768px) {

  .dashboard {

    grid-template-columns: 1fr;
  }

  .sidebar {

    display: none;
  }

}`,

  language: 'css',

  commonMistakes: [

    'Using fixed widths for cards',

    'Ignoring mobile responsiveness',

    'Not planning the grid structure first',

    'Using too many media queries',

    'Allowing horizontal overflow'

  ],

  thinkingProcess: `Step 1: Define the dashboard sections

Step 2: Build the layout using CSS Grid

Step 3: Use Flexbox within components

Step 4: Make cards responsive

Step 5: Adapt the layout for smaller screens`,

  realWorldApplication: 'Analytics dashboards, CRM platforms, e-commerce admin panels, project management tools, and financial reporting systems rely heavily on responsive dashboard layouts.',

  interviewTip: 'For modern frontend interviews, mention CSS Grid for the overall structure and Flexbox for internal component alignment. This combination is considered a best practice.'

},
];