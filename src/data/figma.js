export const figmaQuestions = [

{
  id: 'figma-1',

  question: 'What is Figma?',

  difficulty: 'basic',

  shortAnswer: 'Figma is a cloud-based UI/UX design tool used for designing, prototyping, and collaborating on digital products.',

  detailedAnswer: `Figma is one of the most popular design tools used by UI/UX designers.

It allows teams to:

- Design interfaces
- Create wireframes
- Build prototypes
- Collaborate in real-time
- Create design systems

Since Figma runs in the browser, multiple team members can work on the same design simultaneously.`,

  keyPoints: [

    'Cloud-based design tool',

    'Real-time collaboration',

    'UI/UX design platform',

    'Supports prototyping',

    'Used by designers and developers'

  ],

  codeExample: `Example Usage:

Design Mobile App

↓

Create Components

↓

Build Prototype

↓

Share Design Link

↓

Developer Handoff`,

  language: 'figma',

  commonMistakes: [

    'Not using components',

    'Ignoring Auto Layout',

    'Poor layer organization',

    'Not creating design systems',

    'Using inconsistent spacing'

  ],

  thinkingProcess: `Step 1: Create design file

Step 2: Design screens

Step 3: Build components

Step 4: Create prototype

Step 5: Share with team`,

  realWorldApplication: 'Used for designing websites, mobile apps, dashboards, SaaS products, and design systems.',

  interviewTip: 'Figma is a cloud-based collaborative design and prototyping tool.'

},

{
  id: 'figma-2',

  question: 'What are the features of Figma?',

  difficulty: 'basic',

  shortAnswer: 'Figma provides UI design, prototyping, collaboration, components, Auto Layout, and developer handoff features.',

  detailedAnswer: `Figma includes powerful features that simplify product design workflows.

Major Features:

- Real-Time Collaboration
- Components
- Variants
- Auto Layout
- Design Systems
- Prototyping
- Developer Handoff
- Plugins

These features make Figma suitable for both individual designers and large teams.`,

  keyPoints: [

    'Collaboration',

    'Design systems',

    'Prototyping',

    'Auto Layout',

    'Developer handoff'

  ],

  codeExample: `Figma Features

↓

Design

↓

Prototype

↓

Collaborate

↓

Inspect

↓

Develop`,

  language: 'figma',

  commonMistakes: [

    'Ignoring components',

    'Not using variants',

    'Poor file structure',

    'Skipping design systems',

    'Overcomplicated layouts'

  ],

  thinkingProcess: `Step 1: Design UI

Step 2: Create components

Step 3: Build prototype

Step 4: Collaborate

Step 5: Deliver to developers`,

  realWorldApplication: 'Used in startups, agencies, SaaS companies, and enterprise product teams.',

  interviewTip: 'Figma combines design, collaboration, and prototyping in a single platform.'

},

{
  id: 'figma-3',

  question: 'What are Frames in Figma?',

  difficulty: 'basic',

  shortAnswer: 'Frames are containers used to organize and design screens, layouts, and components in Figma.',

  detailedAnswer: `Frames are one of the most important concepts in Figma.

A Frame can represent:

- Mobile Screen
- Desktop Screen
- Component Container
- Section Layout

Frames support:

- Auto Layout
- Constraints
- Responsive Design

Unlike simple groups, frames provide advanced layout functionality.`,

  keyPoints: [

    'Acts as a container',

    'Represents screens',

    'Supports Auto Layout',

    'Supports constraints',

    'Used for responsive design'

  ],

  codeExample: `Frame

↓

Header

↓

Content

↓

Footer`,

  language: 'figma',

  commonMistakes: [

    'Using groups instead of frames',

    'Nested frame confusion',

    'Poor frame naming',

    'Ignoring constraints',

    'Improper structure'

  ],

  thinkingProcess: `Step 1: Create frame

Step 2: Add content

Step 3: Apply layout

Step 4: Add constraints

Step 5: Organize layers`,

  realWorldApplication: 'Used for app screens, web pages, components, and responsive layouts.',

  interviewTip: 'Frames are the foundation of layouts and screen design in Figma.'

},

{
  id: 'figma-4',

  question: 'What are Components in Figma?',

  difficulty: 'basic',

  shortAnswer: 'Components are reusable design elements that help maintain consistency across designs.',

  detailedAnswer: `Components allow designers to create reusable UI elements.

Examples:

- Buttons
- Cards
- Navbars
- Inputs
- Modals

Benefits:

- Reusability
- Consistency
- Faster updates
- Better design systems

Updating the main component automatically updates all instances.`,

  keyPoints: [

    'Reusable UI elements',

    'Improves consistency',

    'Saves time',

    'Supports design systems',

    'Updates propagate automatically'

  ],

  codeExample: `Button Component

↓

Create Instances

↓

Edit Main Component

↓

All Instances Update`,

  language: 'figma',

  commonMistakes: [

    'Not using components',

    'Creating duplicate components',

    'Poor naming conventions',

    'Breaking instances unnecessarily',

    'Ignoring component hierarchy'

  ],

  thinkingProcess: `Step 1: Create UI element

Step 2: Convert to component

Step 3: Create instances

Step 4: Reuse across screens

Step 5: Maintain consistency`,

  realWorldApplication: 'Used in design systems, product design, and scalable UI development.',

  interviewTip: 'Components help maintain consistency and speed up the design process.'

},

{
  id: 'figma-5',

  question: 'What are Variants in Figma?',

  difficulty: 'basic',

  shortAnswer: 'Variants are multiple versions of a component grouped together under a single component set.',

  detailedAnswer: `Variants help manage different states of a component efficiently.

Example Button States:

- Default
- Hover
- Active
- Disabled

Instead of creating separate components, variants keep related states organized.

Benefits:

- Cleaner design systems
- Easier maintenance
- Better prototyping
- Improved scalability`,

  keyPoints: [

    'Multiple component states',

    'Organized component sets',

    'Improves design systems',

    'Supports prototyping',

    'Reduces duplication'

  ],

  codeExample: `Button Component

├─ Default

├─ Hover

├─ Active

└─ Disabled`,

  language: 'figma',

  commonMistakes: [

    'Creating separate components',

    'Poor variant naming',

    'Too many variant properties',

    'Ignoring consistency',

    'Complicated component sets'

  ],

  thinkingProcess: `Step 1: Create component

Step 2: Add variations

Step 3: Combine as variants

Step 4: Configure properties

Step 5: Use in prototype`,

  realWorldApplication: 'Used in buttons, forms, navigation components, and enterprise design systems.',

  interviewTip: 'Variants allow multiple states of a component to be managed inside one component set.'

},
{
  id: 'figma-6',

  question: 'What is Auto Layout?',

  difficulty: 'basic',

  shortAnswer: 'Auto Layout is a Figma feature that automatically arranges and resizes elements based on content and spacing rules.',

  detailedAnswer: `Auto Layout helps create responsive and flexible designs.

Features:

- Automatic spacing
- Dynamic resizing
- Responsive behavior
- Easier maintenance

Benefits:

- Faster design updates
- Consistent spacing
- Better scalability
- Responsive UI design

It works similarly to CSS Flexbox.`,

  keyPoints: [

    'Automatic element arrangement',

    'Responsive design support',

    'Consistent spacing',

    'Dynamic resizing',

    'Similar to Flexbox'

  ],

  codeExample: `Auto Layout

↓

Horizontal Direction

↓

Gap: 16px

↓

Padding: 24px

↓

Items Resize Automatically`,

  language: 'figma',

  commonMistakes: [

    'Using manual spacing',

    'Incorrect resizing settings',

    'Ignoring Auto Layout properties',

    'Nested layouts confusion',

    'Overcomplicating structures'

  ],

  thinkingProcess: `Step 1: Select elements

Step 2: Apply Auto Layout

Step 3: Set spacing

Step 4: Configure resizing

Step 5: Test responsiveness`,

  realWorldApplication: 'Used in buttons, cards, navigation bars, forms, and responsive design systems.',

  interviewTip: 'Auto Layout is one of the most important Figma features because it enables responsive and scalable designs.'

},

{
  id: 'figma-7',

  question: 'What are Constraints in Figma?',

  difficulty: 'basic',

  shortAnswer: 'Constraints define how elements behave and reposition when their parent frame is resized.',

  detailedAnswer: `Constraints control an element's position inside a frame.

Common Constraints:

- Left
- Right
- Top
- Bottom
- Center
- Scale

They are essential for responsive design because they determine how UI elements adapt to different screen sizes.`,

  keyPoints: [

    'Controls resizing behavior',

    'Used inside frames',

    'Supports responsive layouts',

    'Maintains element positioning',

    'Important for mobile design'

  ],

  codeExample: `Frame Resize

↓

Button Constraint

↓

Bottom + Right

↓

Button Stays Bottom Right`,

  language: 'figma',

  commonMistakes: [

    'Ignoring constraints',

    'Wrong constraint selection',

    'Testing only one screen size',

    'Poor frame structure',

    'Confusing constraints with Auto Layout'

  ],

  thinkingProcess: `Step 1: Select element

Step 2: Choose constraints

Step 3: Resize frame

Step 4: Verify behavior

Step 5: Adjust if necessary`,

  realWorldApplication: 'Used in responsive web and mobile application design.',

  interviewTip: 'Constraints determine how elements react when a frame changes size.'

},

{
  id: 'figma-8',

  question: 'What are Design Systems?',

  difficulty: 'basic',

  shortAnswer: 'A Design System is a collection of reusable components, styles, and guidelines used to maintain design consistency.',

  detailedAnswer: `Design Systems help teams build products consistently.

Typically Include:

- Colors
- Typography
- Components
- Icons
- Spacing Rules
- Design Guidelines

Benefits:

- Faster development
- Consistency
- Scalability
- Better collaboration

Large companies rely heavily on design systems.`,

  keyPoints: [

    'Reusable design assets',

    'Consistency across products',

    'Improves collaboration',

    'Scalable design process',

    'Used in enterprise products'

  ],

  codeExample: `Design System

├─ Colors

├─ Typography

├─ Buttons

├─ Inputs

└─ Icons`,

  language: 'figma',

  commonMistakes: [

    'No naming conventions',

    'Duplicate components',

    'Poor documentation',

    'Inconsistent styles',

    'Lack of maintenance'

  ],

  thinkingProcess: `Step 1: Define styles

Step 2: Create components

Step 3: Organize assets

Step 4: Document guidelines

Step 5: Share with team`,

  realWorldApplication: 'Used by companies like Google, Microsoft, and large SaaS platforms.',

  interviewTip: 'A design system ensures consistency and scalability across products.'

},

{
  id: 'figma-9',

  question: 'What are Styles in Figma?',

  difficulty: 'basic',

  shortAnswer: 'Styles are reusable visual properties such as colors, text styles, effects, and grids.',

  detailedAnswer: `Styles help maintain consistency throughout a design.

Types of Styles:

- Color Styles
- Text Styles
- Effect Styles
- Grid Styles

Benefits:

- Reusability
- Consistency
- Easy updates
- Better design systems

Updating a style automatically updates all linked elements.`,

  keyPoints: [

    'Reusable visual properties',

    'Supports consistency',

    'Easy maintenance',

    'Works with design systems',

    'Speeds up design workflow'

  ],

  codeExample: `Primary Color Style

↓

Applied To

↓

Buttons

Cards

Links

Headers`,

  language: 'figma',

  commonMistakes: [

    'Using local colors only',

    'No style organization',

    'Duplicate styles',

    'Poor naming',

    'Ignoring style libraries'

  ],

  thinkingProcess: `Step 1: Create style

Step 2: Apply style

Step 3: Reuse globally

Step 4: Update centrally

Step 5: Maintain consistency`,

  realWorldApplication: 'Used in large projects where visual consistency is critical.',

  interviewTip: 'Styles allow designers to manage colors and typography from a central source.'

},

{
  id: 'figma-10',

  question: 'What is Prototyping?',

  difficulty: 'basic',

  shortAnswer: 'Prototyping is the process of creating interactive mockups that simulate how a product will work.',

  detailedAnswer: `Figma Prototyping allows designers to connect screens and create user flows.

Features:

- Click interactions
- Hover interactions
- Smart Animate
- Page transitions
- Interactive components

Benefits:

- Better user testing
- Improved stakeholder feedback
- Faster design validation

Prototypes help visualize the final product before development begins.`,

  keyPoints: [

    'Creates interactive experiences',

    'Simulates real applications',

    'Supports user testing',

    'Improves communication',

    'Reduces development mistakes'

  ],

  codeExample: `Screen A

↓

Button Click

↓

Navigate To

↓

Screen B`,

  language: 'figma',

  commonMistakes: [

    'Overcomplicated flows',

    'Missing interactions',

    'Poor screen organization',

    'Ignoring user journeys',

    'Not testing prototypes'

  ],

  thinkingProcess: `Step 1: Design screens

Step 2: Connect screens

Step 3: Add interactions

Step 4: Preview prototype

Step 5: Gather feedback`,

  realWorldApplication: 'Used for app demos, stakeholder presentations, usability testing, and product validation.',

  interviewTip: 'Prototypes help teams test ideas before investing in development.'

},
{
  id: 'framer-1',

  question: 'What is Framer?',

  difficulty: 'basic',

  shortAnswer: 'Framer is a visual website builder and prototyping tool used to design, animate, and publish responsive websites without extensive coding.',

  detailedAnswer: `Framer is a modern design and development platform that combines design, prototyping, and website publishing.

Key Capabilities:

- Website Design
- Interactive Prototypes
- Responsive Layouts
- CMS Integration
- Animations
- Team Collaboration

Framer allows designers to create production-ready websites visually while still supporting custom code when needed.`,

  keyPoints: [

    'Visual website builder',

    'Supports responsive design',

    'Built-in CMS',

    'Powerful animations',

    'Can publish websites directly'

  ],

  codeExample: `Design Website

↓

Add Animations

↓

Configure CMS

↓

Preview

↓

Publish`,

  language: 'framer',

  commonMistakes: [

    'Ignoring responsive layouts',

    'Overusing animations',

    'Poor page structure',

    'Not optimizing performance',

    'Skipping mobile testing'

  ],

  thinkingProcess: `Step 1: Create page

Step 2: Design layout

Step 3: Add interactions

Step 4: Test responsiveness

Step 5: Publish site`,

  realWorldApplication: 'Used for portfolios, landing pages, startup websites, SaaS marketing sites, and product showcases.',

  interviewTip: 'Framer combines design, prototyping, and website deployment in a single platform.'

},

{
  id: 'framer-2',

  question: 'What are the features of Framer?',

  difficulty: 'basic',

  shortAnswer: 'Framer provides responsive design, animations, CMS, interactions, components, and website publishing features.',

  detailedAnswer: `Framer offers many powerful features for modern website creation.

Main Features:

- Responsive Design
- CMS
- Animations
- Components
- Interactions
- SEO Support
- Website Publishing
- Team Collaboration

These features allow designers to build high-quality websites visually.`,

  keyPoints: [

    'Responsive layouts',

    'Built-in CMS',

    'Animation support',

    'SEO optimization',

    'Direct publishing'

  ],

  codeExample: `Framer Features

↓

Design

↓

Animate

↓

Manage Content

↓

Optimize SEO

↓

Publish`,

  language: 'framer',

  commonMistakes: [

    'Ignoring SEO settings',

    'Poor responsive design',

    'Too many animations',

    'Unorganized components',

    'Not testing published pages'

  ],

  thinkingProcess: `Step 1: Build layout

Step 2: Add interactions

Step 3: Configure content

Step 4: Optimize SEO

Step 5: Publish website`,

  realWorldApplication: 'Used by startups, agencies, freelancers, and product teams.',

  interviewTip: 'Framer is known for combining website design, animation, CMS, and deployment.'

},

{
  id: 'framer-3',

  question: 'What are Components in Framer?',

  difficulty: 'basic',

  shortAnswer: 'Components are reusable UI elements that can be used multiple times across a Framer project.',

  detailedAnswer: `Components help maintain consistency and reduce repetitive work.

Examples:

- Buttons
- Navigation Bars
- Cards
- Forms
- Hero Sections

Benefits:

- Reusability
- Faster updates
- Consistent design
- Easier maintenance

Editing the main component updates all instances.`,

  keyPoints: [

    'Reusable UI elements',

    'Improves consistency',

    'Easy maintenance',

    'Speeds up design process',

    'Supports scalability'

  ],

  codeExample: `Button Component

↓

Create Instances

↓

Update Main Component

↓

All Instances Update`,

  language: 'framer',

  commonMistakes: [

    'Creating duplicate components',

    'Poor naming conventions',

    'Breaking component instances',

    'Overcomplicating structures',

    'Ignoring component hierarchy'

  ],

  thinkingProcess: `Step 1: Create component

Step 2: Reuse component

Step 3: Update centrally

Step 4: Maintain consistency

Step 5: Scale project`,

  realWorldApplication: 'Used in design systems, landing pages, and large website projects.',

  interviewTip: 'Components improve consistency and speed up website creation.'

},

{
  id: 'framer-4',

  question: 'What is Responsive Design in Framer?',

  difficulty: 'basic',

  shortAnswer: 'Responsive Design in Framer ensures websites automatically adapt to different screen sizes and devices.',

  detailedAnswer: `Responsive design allows a website to work across:

- Mobile Phones
- Tablets
- Laptops
- Desktops

Framer provides:

- Breakpoints
- Flexible Layouts
- Responsive Components
- Dynamic Resizing

This helps deliver a consistent experience on every device.`,

  keyPoints: [

    'Adapts to screen sizes',

    'Mobile-friendly design',

    'Uses breakpoints',

    'Improves usability',

    'Essential for modern websites'

  ],

  codeExample: `Desktop Layout

↓

Tablet Layout

↓

Mobile Layout

↓

Single Responsive Website`,

  language: 'framer',

  commonMistakes: [

    'Ignoring mobile devices',

    'Fixed-width layouts',

    'Poor breakpoint usage',

    'Not testing multiple screens',

    'Unresponsive content'

  ],

  thinkingProcess: `Step 1: Design desktop layout

Step 2: Add breakpoints

Step 3: Adjust mobile layout

Step 4: Test responsiveness

Step 5: Optimize experience`,

  realWorldApplication: 'Used in all modern websites built with Framer.',

  interviewTip: 'Responsive design ensures one website works across all devices.'

},

{
  id: 'framer-5',

  question: 'What are Breakpoints in Framer?',

  difficulty: 'basic',

  shortAnswer: 'Breakpoints are screen-size rules that allow layouts to adapt to different device widths.',

  detailedAnswer: `Breakpoints help create responsive websites.

Typical Breakpoints:

- Desktop
- Tablet
- Mobile

When screen size changes, Framer adjusts layouts according to the configured breakpoint settings.

This allows content to remain readable and usable across devices.`,

  keyPoints: [

    'Supports responsive design',

    'Adapts layouts',

    'Used for different devices',

    'Improves user experience',

    'Core Framer feature'

  ],

  codeExample: `Desktop

↓

Tablet

↓

Mobile

↓

Adaptive Layout`,

  language: 'framer',

  commonMistakes: [

    'Too many breakpoints',

    'Ignoring mobile layout',

    'Poor content scaling',

    'Not testing devices',

    'Overcomplicated layouts'

  ],

  thinkingProcess: `Step 1: Define breakpoints

Step 2: Adjust layout

Step 3: Test screens

Step 4: Optimize content

Step 5: Publish website`,

  realWorldApplication: 'Used in responsive websites, SaaS products, and landing pages.',

  interviewTip: 'Breakpoints allow layouts to change based on screen size.'

},
{
  id: 'framer-6',

  question: 'What are Animations in Framer?',

  difficulty: 'basic',

  shortAnswer: 'Animations in Framer bring UI elements to life by creating smooth transitions, movements, and visual effects.',

  detailedAnswer: `Animations improve user experience and make interfaces feel interactive.

Common Animation Types:

- Fade In
- Slide In
- Scale
- Rotate
- Hover Effects
- Scroll Animations

Benefits:

- Better engagement
- Improved user feedback
- Professional appearance
- Enhanced storytelling

Framer provides visual tools to create animations without writing code.`,

  keyPoints: [

    'Improves user experience',

    'Creates smooth transitions',

    'Supports hover effects',

    'Supports scroll animations',

    'No-code animation creation'

  ],

  codeExample: `Element

↓

Hover

↓

Scale Up

↓

Smooth Transition`,

  language: 'framer',

  commonMistakes: [

    'Overusing animations',

    'Slow transitions',

    'Distracting effects',

    'Poor performance optimization',

    'Ignoring mobile experience'

  ],

  thinkingProcess: `Step 1: Select element

Step 2: Add animation

Step 3: Configure duration

Step 4: Preview effect

Step 5: Optimize performance`,

  realWorldApplication: 'Used in landing pages, portfolios, SaaS websites, and product showcases.',

  interviewTip: 'Animations should enhance usability, not distract users.'

},

{
  id: 'framer-7',

  question: 'What are Interactions in Framer?',

  difficulty: 'basic',

  shortAnswer: 'Interactions define how elements respond to user actions such as clicks, hovers, scrolling, and dragging.',

  detailedAnswer: `Interactions make websites feel dynamic and responsive.

Examples:

- Click Actions
- Hover Effects
- Drag Events
- Scroll Triggers
- Navigation Actions

Interactions help create engaging user experiences without requiring JavaScript.`,

  keyPoints: [

    'Responds to user actions',

    'Improves engagement',

    'Supports multiple triggers',

    'No-code implementation',

    'Enhances UX'

  ],

  codeExample: `Button

↓

Click

↓

Navigate To

↓

Next Page`,

  language: 'framer',

  commonMistakes: [

    'Too many interactions',

    'Confusing navigation',

    'Poor accessibility',

    'Unclear feedback',

    'Ignoring mobile interactions'

  ],

  thinkingProcess: `Step 1: Choose trigger

Step 2: Define action

Step 3: Configure interaction

Step 4: Preview behavior

Step 5: Test usability`,

  realWorldApplication: 'Used in product websites, onboarding flows, and interactive portfolios.',

  interviewTip: 'Interactions connect user actions with visual or functional responses.'

},

{
  id: 'framer-8',

  question: 'What is CMS in Framer?',

  difficulty: 'basic',

  shortAnswer: 'CMS (Content Management System) in Framer allows users to manage dynamic content without editing the design manually.',

  detailedAnswer: `Framer CMS helps manage structured content.

Examples:

- Blog Posts
- Team Members
- Products
- Testimonials
- Case Studies

Benefits:

- Easy content updates
- Dynamic pages
- Better scalability
- Non-technical content management

Content changes automatically update connected pages.`,

  keyPoints: [

    'Manages dynamic content',

    'Supports blogs and products',

    'Easy updates',

    'Scalable solution',

    'No-code content management'

  ],

  codeExample: `CMS Collection

↓

Blog Posts

↓

Dynamic Page

↓

Published Website`,

  language: 'framer',

  commonMistakes: [

    'Poor CMS structure',

    'Duplicate content',

    'Missing fields',

    'Unorganized collections',

    'Ignoring SEO settings'

  ],

  thinkingProcess: `Step 1: Create collection

Step 2: Define fields

Step 3: Add content

Step 4: Connect pages

Step 5: Publish`,

  realWorldApplication: 'Used in blogs, e-commerce websites, directories, and marketing websites.',

  interviewTip: 'Framer CMS allows dynamic content management without changing page designs.'

},

{
  id: 'framer-9',

  question: 'What are Overrides in Framer?',

  difficulty: 'basic',

  shortAnswer: 'Overrides are custom code enhancements that modify component behavior beyond Framer’s visual tools.',

  detailedAnswer: `Overrides allow developers to extend Framer functionality using React and JavaScript.

Common Uses:

- Custom Logic
- Dynamic Data
- Advanced Interactions
- API Integration
- State Management

Overrides provide greater flexibility when visual tools are not enough.`,

  keyPoints: [

    'Uses React code',

    'Adds custom functionality',

    'Supports API integration',

    'Extends components',

    'Advanced customization'

  ],

  codeExample: `Component

↓

Override

↓

Custom Logic

↓

Enhanced Behavior`,

  language: 'framer',

  commonMistakes: [

    'Overusing overrides',

    'Complex code structure',

    'Performance issues',

    'Poor state management',

    'Ignoring built-in features'

  ],

  thinkingProcess: `Step 1: Identify limitation

Step 2: Create override

Step 3: Add logic

Step 4: Test behavior

Step 5: Optimize performance`,

  realWorldApplication: 'Used in advanced Framer projects requiring custom functionality.',

  interviewTip: 'Overrides let developers extend Framer components using React code.'

},

{
  id: 'framer-10',

  question: 'How does Framer differ from Figma?',

  difficulty: 'basic',

  shortAnswer: 'Figma focuses on UI/UX design and prototyping, while Framer focuses on building interactive and publishable websites.',

  detailedAnswer: `Although both tools are used by designers, they serve different purposes.

Figma:

- UI/UX Design
- Wireframing
- Prototyping
- Design Systems

Framer:

- Website Building
- Publishing
- CMS
- Advanced Interactions
- Production-Ready Sites

Many teams design in Figma and build in Framer.`,

  keyPoints: [

    'Figma is design-focused',

    'Framer is website-focused',

    'Framer can publish websites',

    'Figma excels at design systems',

    'Often used together'

  ],

  codeExample: `Figma

↓

Design UI

↓

Export Design

↓

Framer

↓

Build Website

↓

Publish`,

  language: 'framer',

  commonMistakes: [

    'Assuming both tools are identical',

    'Using Framer only for design',

    'Ignoring Framer CMS',

    'Not leveraging Figma components',

    'Wrong tool selection'

  ],

  thinkingProcess: `Step 1: Understand project needs

Step 2: Choose tool

Step 3: Design interface

Step 4: Build experience

Step 5: Publish product`,

  realWorldApplication: 'Design teams commonly use Figma for design and Framer for website deployment.',

  interviewTip: 'Figma designs products; Framer builds and publishes interactive websites.'

},
];
