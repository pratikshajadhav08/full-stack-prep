export const firebaseQuestions = [
  {
    id: "firebase-1",

    question: "What is Firebase?",

    difficulty: "basic",

    shortAnswer:
      "Firebase is a Backend-as-a-Service (BaaS) platform by Google that provides tools for building, deploying, and scaling applications.",

    detailedAnswer: `Firebase helps developers build applications without managing their own backend infrastructure.

It provides services such as:

- Authentication
- Databases
- Hosting
- Cloud Storage
- Cloud Functions
- Push Notifications
- Analytics

Firebase is widely used for web and mobile applications because it reduces backend development time and complexity.`,

    keyPoints: [
      "Backend-as-a-Service (BaaS)",

      "Developed by Google",

      "Provides authentication",

      "Offers cloud databases",

      "Speeds up development",
    ],

    codeExample: `Application

↓

Firebase Services

↓

Authentication

Database

Storage

Hosting`,

    language: "firebase",

    commonMistakes: [
      "Using Firebase without security rules",

      "Poor database structure",

      "Ignoring authentication security",

      "Not monitoring usage limits",

      "Overusing client-side logic",
    ],

    thinkingProcess: `Step 1: Create Firebase project

Step 2: Connect app

Step 3: Enable services

Step 4: Build features

Step 5: Deploy application`,

    realWorldApplication:
      "Used in chat apps, e-commerce platforms, social media apps, SaaS products, and mobile applications.",

    interviewTip:
      "Firebase is a cloud platform that provides backend services so developers can focus on building application features.",
  },

  {
    id: "firebase-2",

    question: "What are the features of Firebase?",

    difficulty: "basic",

    shortAnswer:
      "Firebase offers authentication, databases, storage, hosting, cloud functions, analytics, and push notifications.",

    detailedAnswer: `Firebase includes many services that help developers build complete applications.

Major Features:

- Firebase Authentication
- Cloud Firestore
- Realtime Database
- Firebase Hosting
- Cloud Storage
- Cloud Functions
- Firebase Analytics
- Firebase Cloud Messaging (FCM)

These services integrate seamlessly with web and mobile applications.`,

    keyPoints: [
      "Authentication",

      "Cloud databases",

      "File storage",

      "Hosting services",

      "Push notifications",
    ],

    codeExample: `Firebase

├─ Authentication

├─ Firestore

├─ Storage

├─ Hosting

├─ Functions

└─ Analytics`,

    language: "firebase",

    commonMistakes: [
      "Using unnecessary services",

      "Ignoring pricing plans",

      "Poor service configuration",

      "Missing security rules",

      "Not optimizing database usage",
    ],

    thinkingProcess: `Step 1: Understand requirements

Step 2: Select Firebase services

Step 3: Configure project

Step 4: Implement features

Step 5: Monitor performance`,

    realWorldApplication:
      "Used in mobile apps, websites, SaaS products, and startup MVPs.",

    interviewTip:
      "Firebase provides a complete ecosystem of backend services for modern applications.",
  },

  {
    id: "firebase-3",

    question: "What is Firebase Authentication?",

    difficulty: "basic",

    shortAnswer:
      "Firebase Authentication is a service that allows users to securely sign up, log in, and manage accounts.",

    detailedAnswer: `Firebase Authentication handles user identity and access management.

Supported Methods:

- Email & Password
- Google Sign-In
- GitHub Login
- Facebook Login
- Phone Authentication
- Anonymous Authentication

Benefits:

- Secure authentication
- Easy integration
- Token management
- User session handling

Firebase manages most authentication complexities automatically.`,

    keyPoints: [
      "User authentication service",

      "Multiple login providers",

      "Secure token handling",

      "Easy integration",

      "Managed by Firebase",
    ],

    codeExample: `User

↓

Login

↓

Firebase Auth

↓

Verify Credentials

↓

Access Granted`,

    language: "firebase",

    commonMistakes: [
      "Not validating user input",

      "Poor error handling",

      "Ignoring security rules",

      "Exposing sensitive data",

      "Not handling logout properly",
    ],

    thinkingProcess: `Step 1: Enable provider

Step 2: Create login UI

Step 3: Authenticate user

Step 4: Store session

Step 5: Protect resources`,

    realWorldApplication:
      "Used in login systems, registration systems, SaaS platforms, and mobile applications.",

    interviewTip:
      "Firebase Authentication simplifies secure user login and account management.",
  },

  {
    id: "firebase-4",

    question: "What is Cloud Firestore?",

    difficulty: "basic",

    shortAnswer:
      "Cloud Firestore is a scalable NoSQL cloud database used to store and synchronize application data.",

    detailedAnswer: `Cloud Firestore is Firebase's modern database solution.

Features:

- NoSQL database
- Real-time updates
- Offline support
- Automatic scaling
- Flexible data model

Data Structure:

Collection

↓

Document

↓

Fields

Firestore is designed for modern web and mobile applications.`,

    keyPoints: [
      "NoSQL database",

      "Real-time synchronization",

      "Offline support",

      "Scalable architecture",

      "Flexible data model",
    ],

    codeExample: `users

↓

user1

↓

name: "John"

email: "john@example.com"`,

    language: "firebase",

    commonMistakes: [
      "Poor document structure",

      "Large nested documents",

      "Ignoring indexes",

      "Weak security rules",

      "Inefficient queries",
    ],

    thinkingProcess: `Step 1: Create collection

Step 2: Add document

Step 3: Store fields

Step 4: Query data

Step 5: Secure access`,

    realWorldApplication:
      "Used in chat applications, e-commerce systems, dashboards, and social media apps.",

    interviewTip:
      "Firestore stores data in collections and documents rather than tables and rows.",
  },

  {
    id: "firebase-5",

    question: "What is Realtime Database?",

    difficulty: "basic",

    shortAnswer:
      "Realtime Database is Firebase’s original cloud-hosted NoSQL database that synchronizes data instantly across clients.",

    detailedAnswer: `Realtime Database stores data as a large JSON tree.

Features:

- Real-time synchronization
- Offline support
- Fast updates
- Cloud-hosted
- Multi-device sync

When data changes, connected clients automatically receive updates without refreshing.

This makes it ideal for live applications.`,

    keyPoints: [
      "NoSQL JSON database",

      "Real-time updates",

      "Instant synchronization",

      "Offline support",

      "Cloud-hosted",
    ],

    codeExample: `users

↓

user1

↓

name: "Alice"

age: 25`,

    language: "firebase",

    commonMistakes: [
      "Deeply nested data",

      "Poor database structure",

      "Weak security rules",

      "Large data downloads",

      "Ignoring scalability concerns",
    ],

    thinkingProcess: `Step 1: Create database

Step 2: Store JSON data

Step 3: Connect clients

Step 4: Sync updates

Step 5: Secure access`,

    realWorldApplication:
      "Used in chat applications, live tracking systems, multiplayer games, and collaborative tools.",

    interviewTip:
      "Realtime Database stores data as JSON and instantly synchronizes changes across connected clients.",
  },
  {
    id: "firebase-6",

    question: "Difference Between Firestore and Realtime Database?",

    difficulty: "basic",

    shortAnswer:
      "Firestore uses collections and documents with powerful querying, while Realtime Database stores data as a JSON tree with simpler querying.",

    detailedAnswer: `Both are NoSQL databases provided by Firebase, but they differ in structure and capabilities.

Cloud Firestore:

- Collection/Document model
- Advanced queries
- Better scalability
- Automatic indexing
- Modern Firebase database

Realtime Database:

- JSON tree structure
- Simpler queries
- Lower latency for simple data
- Original Firebase database

Firestore is generally recommended for most new projects.`,

    keyPoints: [
      "Firestore uses collections/documents",

      "Realtime Database uses JSON",

      "Firestore supports advanced queries",

      "Firestore scales better",

      "Both support real-time updates",
    ],

    codeExample: `Firestore:

users → user1 → fields

Realtime DB:

users → user1 → data`,

    language: "firebase",

    commonMistakes: [
      "Choosing database without requirements analysis",

      "Using Realtime DB for complex queries",

      "Ignoring Firestore pricing model",

      "Poor data structure",

      "Weak security rules",
    ],

    thinkingProcess: `Step 1: Analyze project needs

Step 2: Compare databases

Step 3: Choose database

Step 4: Design schema

Step 5: Implement securely`,

    realWorldApplication:
      "Used when selecting the appropriate database architecture for applications.",

    interviewTip:
      "Firestore is generally preferred for modern applications due to better scalability and querying.",
  },

  {
    id: "firebase-7",

    question: "What is Firebase Hosting?",

    difficulty: "basic",

    shortAnswer:
      "Firebase Hosting is a web hosting service used to deploy and serve web applications quickly and securely.",

    detailedAnswer: `Firebase Hosting allows developers to deploy websites and web apps directly from Firebase.

Features:

- Fast global CDN
- Free SSL certificates
- Custom domains
- Easy deployment
- Secure hosting

It works especially well with:

- React
- Angular
- Vue
- Next.js
- Static websites

Deployment can be done using the Firebase CLI.`,

    keyPoints: [
      "Web hosting service",

      "Global CDN",

      "Free SSL",

      "Custom domains",

      "Fast deployment",
    ],

    codeExample: `npm install -g firebase-tools

firebase login

firebase init

firebase deploy`,

    language: "firebase",

    commonMistakes: [
      "Incorrect build folder configuration",

      "Missing rewrites",

      "Ignoring environment variables",

      "Wrong deployment target",

      "Not testing production build",
    ],

    thinkingProcess: `Step 1: Create build

Step 2: Initialize Firebase Hosting

Step 3: Configure hosting

Step 4: Deploy application

Step 5: Verify deployment`,

    realWorldApplication:
      "Used to host websites, dashboards, portfolios, and single-page applications.",

    interviewTip:
      "Firebase Hosting provides fast and secure deployment with minimal configuration.",
  },

  {
    id: "firebase-8",

    question: "What is Firebase Storage?",

    difficulty: "basic",

    shortAnswer:
      "Firebase Storage is a cloud file storage service used to upload, store, and retrieve files securely.",

    detailedAnswer: `Firebase Storage allows applications to manage user-generated files.

Supported Files:

- Images
- Videos
- PDFs
- Documents
- Audio files

Features:

- Secure uploads
- Download URLs
- Access control
- Scalable storage
- Integration with Authentication

It is built on Google Cloud Storage.`,

    keyPoints: [
      "Stores files in the cloud",

      "Supports large uploads",

      "Secure access control",

      "Scalable infrastructure",

      "Works with Firebase Auth",
    ],

    codeExample: `User

↓

Upload Image

↓

Firebase Storage

↓

Generate URL

↓

Display Image`,

    language: "firebase",

    commonMistakes: [
      "No storage security rules",

      "Uploading large files without validation",

      "Public access misconfiguration",

      "Poor file organization",

      "Ignoring storage costs",
    ],

    thinkingProcess: `Step 1: Select file

Step 2: Upload to Storage

Step 3: Generate URL

Step 4: Save reference

Step 5: Display file`,

    realWorldApplication:
      "Used for profile pictures, product images, videos, and document management.",

    interviewTip:
      "Firebase Storage is designed for secure file uploads and retrieval.",
  },

  {
    id: "firebase-9",

    question: "What is Firebase Cloud Functions?",

    difficulty: "basic",

    shortAnswer:
      "Cloud Functions allow developers to run backend code automatically in response to Firebase events.",

    detailedAnswer: `Cloud Functions provide server-side functionality without managing servers.

Triggers:

- Authentication events
- Firestore events
- Storage events
- HTTP requests
- Scheduled tasks

Benefits:

- Serverless architecture
- Automatic scaling
- Reduced backend maintenance
- Tight Firebase integration

Functions run on Google's cloud infrastructure.`,

    keyPoints: [
      "Serverless backend",

      "Event-driven execution",

      "Automatic scaling",

      "No server management",

      "Firebase integration",
    ],

    codeExample: `User Registers

↓

Auth Trigger

↓

Cloud Function Runs

↓

Send Welcome Email`,

    language: "firebase",

    commonMistakes: [
      "Long-running functions",

      "Infinite trigger loops",

      "Poor error handling",

      "Ignoring cold starts",

      "Excessive database calls",
    ],

    thinkingProcess: `Step 1: Define trigger

Step 2: Write function

Step 3: Deploy function

Step 4: Test execution

Step 5: Monitor logs`,

    realWorldApplication:
      "Used for emails, notifications, payment processing, and backend automation.",

    interviewTip:
      "Cloud Functions add backend logic to Firebase applications without managing servers.",
  },

  {
    id: "firebase-10",

    question: "What is Firebase Cloud Messaging (FCM)?",

    difficulty: "basic",

    shortAnswer:
      "Firebase Cloud Messaging (FCM) is a service used to send push notifications to web and mobile applications.",

    detailedAnswer: `FCM enables communication between servers and client applications.

Common Uses:

- Push Notifications
- Marketing Messages
- App Updates
- Chat Notifications
- System Alerts

Features:

- Cross-platform support
- Scheduled messaging
- Targeted notifications
- Reliable delivery

FCM works with Android, iOS, and Web applications.`,

    keyPoints: [
      "Push notification service",

      "Cross-platform support",

      "Targeted messaging",

      "Reliable delivery",

      "Real-time communication",
    ],

    codeExample: `Server

↓

FCM

↓

User Device

↓

Push Notification`,

    language: "firebase",

    commonMistakes: [
      "Sending too many notifications",

      "Poor targeting",

      "Ignoring notification permissions",

      "No fallback handling",

      "Weak message content",
    ],

    thinkingProcess: `Step 1: Register device

Step 2: Obtain token

Step 3: Send notification

Step 4: Deliver message

Step 5: Handle user interaction`,

    realWorldApplication:
      "Used in chat apps, e-commerce platforms, news apps, and social media applications.",

    interviewTip:
      "FCM allows applications to send push notifications across multiple platforms.",
  },
  {
    id: "firebase-11",

    question: "How do you create a Firebase project?",

    difficulty: "basic",

    shortAnswer:
      "A Firebase project is created from the Firebase Console by providing a project name and configuring required services.",

    detailedAnswer: `Creating a Firebase project is the first step before using Firebase services.

Steps:

1. Open Firebase Console
2. Click "Create Project"
3. Enter Project Name
4. Configure Google Analytics (optional)
5. Create Project
6. Add Web, Android, or iOS App

After project creation, Firebase generates configuration details used to connect your application.`,

    keyPoints: [
      "Created through Firebase Console",

      "Supports web and mobile apps",

      "Provides project configuration",

      "Enables Firebase services",

      "Required before integration",
    ],

    codeExample: `Firebase Console

↓

Create Project

↓

Add Application

↓

Get Config

↓

Connect App`,

    language: "firebase",

    commonMistakes: [
      "Wrong project naming",

      "Creating multiple unnecessary projects",

      "Losing config keys",

      "Poor environment separation",

      "Skipping security setup",
    ],

    thinkingProcess: `Step 1: Open Firebase Console

Step 2: Create project

Step 3: Add app

Step 4: Copy config

Step 5: Connect application`,

    realWorldApplication:
      "Every Firebase application begins with project creation in Firebase Console.",

    interviewTip:
      "Creating a Firebase project generates the resources required for authentication, databases, hosting, and storage.",
  },

  {
    id: "firebase-12",

    question: "How do you connect Firebase to a web app?",

    difficulty: "basic",

    shortAnswer:
      "Firebase is connected to a web application by installing the Firebase SDK and initializing it with project configuration values.",

    detailedAnswer: `After creating a Firebase project, you connect it to your application.

Steps:

1. Add Web App in Firebase Console
2. Install Firebase SDK
3. Copy Firebase Config
4. Initialize Firebase
5. Use Firebase Services

This establishes communication between your application and Firebase servers.`,

    keyPoints: [
      "Requires Firebase SDK",

      "Uses project configuration",

      "Initializes Firebase app",

      "Connects frontend to backend",

      "Enables Firebase services",
    ],

    codeExample: `import { initializeApp }

from "firebase/app";

const app = initializeApp(firebaseConfig);`,

    language: "firebase",

    commonMistakes: [
      "Wrong config values",

      "Using outdated SDK",

      "Multiple initializations",

      "Incorrect imports",

      "Missing environment variables",
    ],

    thinkingProcess: `Step 1: Install SDK

Step 2: Get config

Step 3: Initialize app

Step 4: Test connection

Step 5: Enable services`,

    realWorldApplication:
      "Used when integrating Firebase into React, Angular, Vue, Next.js, or plain JavaScript applications.",

    interviewTip:
      "Connecting Firebase requires SDK installation and initialization using Firebase configuration.",
  },

  {
    id: "firebase-13",

    question: "What are Firebase Security Rules?",

    difficulty: "basic",

    shortAnswer:
      "Firebase Security Rules control who can read and write data in Firestore, Realtime Database, and Storage.",

    detailedAnswer: `Security Rules protect application data from unauthorized access.

Rules can restrict:

- Read access
- Write access
- User-specific data
- Authentication requirements

Example Use Cases:

- Only logged-in users can read data
- Users can modify only their own records

Security Rules are critical for application security.`,

    keyPoints: [
      "Protects Firebase data",

      "Controls access permissions",

      "Works with authentication",

      "Supports read/write rules",

      "Essential for security",
    ],

    codeExample: `allow read, write:

if request.auth != null;`,

    language: "firebase",

    commonMistakes: [
      "Allowing public access",

      "Missing authentication checks",

      "Weak validation rules",

      "Ignoring production security",

      "Not testing rules",
    ],

    thinkingProcess: `Step 1: Define access requirements

Step 2: Create rules

Step 3: Test rules

Step 4: Deploy rules

Step 5: Monitor access`,

    realWorldApplication:
      "Used to secure user profiles, orders, files, and private application data.",

    interviewTip:
      "Never deploy Firebase applications with open read/write permissions in production.",
  },

  {
    id: "firebase-14",

    question: "What is Anonymous Authentication?",

    difficulty: "basic",

    shortAnswer:
      "Anonymous Authentication allows users to access an application temporarily without creating an account.",

    detailedAnswer: `Anonymous Authentication creates a temporary user account.

Benefits:

- No signup required
- Fast onboarding
- Guest access
- Seamless upgrade to permanent account

Common Use Cases:

- Guest checkout
- Trial access
- Temporary sessions

Firebase assigns a unique user ID even for anonymous users.`,

    keyPoints: [
      "Guest user access",

      "No registration required",

      "Temporary account",

      "Supports account upgrade",

      "Unique user identifier",
    ],

    codeExample: `Guest User

↓

Anonymous Login

↓

Temporary Account

↓

Use Application`,

    language: "firebase",

    commonMistakes: [
      "Treating anonymous users as permanent users",

      "Not handling upgrades",

      "Poor security assumptions",

      "Losing anonymous user data",

      "Missing cleanup strategy",
    ],

    thinkingProcess: `Step 1: Enable anonymous auth

Step 2: Sign in user

Step 3: Create temporary session

Step 4: Use application

Step 5: Upgrade account if needed`,

    realWorldApplication:
      "Used in guest shopping carts, game trials, and quick-access applications.",

    interviewTip:
      "Anonymous Authentication improves onboarding by removing signup friction.",
  },

  {
    id: "firebase-15",

    question: "What are Firebase Providers (Google, GitHub, Facebook)?",

    difficulty: "basic",

    shortAnswer:
      "Firebase Providers are third-party authentication services that allow users to sign in using existing accounts.",

    detailedAnswer: `Firebase Authentication supports multiple login providers.

Popular Providers:

- Google
- GitHub
- Facebook
- Twitter
- Apple
- Microsoft

Benefits:

- Faster login
- Better user experience
- Reduced password management
- Trusted authentication

Users can sign in without creating new credentials.`,

    keyPoints: [
      "Third-party authentication",

      "Improves user experience",

      "Reduces password usage",

      "Easy Firebase integration",

      "Supports multiple providers",
    ],

    codeExample: `User

↓

Google Login

↓

Firebase Auth

↓

Authenticated User`,

    language: "firebase",

    commonMistakes: [
      "Improper OAuth setup",

      "Wrong redirect URLs",

      "Missing provider configuration",

      "Poor error handling",

      "Ignoring provider limitations",
    ],

    thinkingProcess: `Step 1: Enable provider

Step 2: Configure credentials

Step 3: Implement login

Step 4: Authenticate user

Step 5: Handle session`,

    realWorldApplication:
      'Used in modern applications that provide "Login with Google" or "Login with GitHub" options.',

    interviewTip:
      "Social login providers simplify authentication and improve conversion rates.",
  },
  {
    id: "firebase-16",

    question: "What is Email/Password Authentication?",

    difficulty: "basic",

    shortAnswer:
      "Email/Password Authentication allows users to create accounts and log in using an email address and password.",

    detailedAnswer: `Email/Password Authentication is the most common authentication method in Firebase.

Features:

- User Registration
- User Login
- Password Reset
- Email Verification
- Secure Authentication

Firebase securely stores authentication credentials and manages user sessions automatically.`,

    keyPoints: [
      "Most common authentication method",

      "Supports registration and login",

      "Provides password reset",

      "Supports email verification",

      "Managed by Firebase",
    ],

    codeExample: `User

↓

Email + Password

↓

Firebase Auth

↓

Account Created`,

    language: "firebase",

    commonMistakes: [
      "Weak passwords",

      "No email verification",

      "Poor error handling",

      "Ignoring password reset",

      "Missing authentication checks",
    ],

    thinkingProcess: `Step 1: Enable Email Auth

Step 2: Create registration form

Step 3: Register user

Step 4: Login user

Step 5: Manage session`,

    realWorldApplication:
      "Used in e-commerce, SaaS applications, social media platforms, and admin systems.",

    interviewTip:
      "Email/Password Authentication is the simplest and most widely used Firebase authentication method.",
  },

  {
    id: "firebase-17",

    question: "How does Google Sign-In work?",

    difficulty: "basic",

    shortAnswer:
      "Google Sign-In allows users to authenticate using their Google account instead of creating a new account.",

    detailedAnswer: `Google Sign-In uses OAuth authentication.

Process:

1. User clicks Google Login
2. Google verifies identity
3. Firebase receives credentials
4. User is authenticated
5. Session is created

Benefits:

- Faster login
- Better user experience
- Trusted authentication
- No password management`,

    keyPoints: [
      "Uses OAuth",

      "Login with Google account",

      "No separate password required",

      "Quick authentication",

      "Popular login option",
    ],

    codeExample: `User

↓

Google Login

↓

Google Verification

↓

Firebase Auth

↓

Access Granted`,

    language: "firebase",

    commonMistakes: [
      "Incorrect OAuth setup",

      "Wrong redirect URI",

      "Poor error handling",

      "Not enabling provider",

      "Ignoring popup blockers",
    ],

    thinkingProcess: `Step 1: Enable Google provider

Step 2: Create login button

Step 3: Authenticate user

Step 4: Receive token

Step 5: Create session`,

    realWorldApplication:
      "Used in web apps, SaaS products, and mobile applications to simplify login.",

    interviewTip:
      "Google Sign-In improves user experience by reducing registration friction.",
  },

  {
    id: "firebase-18",

    question: "How do you store data in Firestore?",

    difficulty: "basic",

    shortAnswer:
      "Data is stored in Firestore by creating documents inside collections.",

    detailedAnswer: `Firestore organizes data using collections and documents.

Structure:

Collection

↓

Document

↓

Fields

Developers can add documents manually or generate document IDs automatically.

Firestore stores structured NoSQL data and synchronizes it across devices.`,

    keyPoints: [
      "Uses collections and documents",

      "Stores structured data",

      "Supports automatic IDs",

      "NoSQL architecture",

      "Real-time synchronization",
    ],

    codeExample: `users

↓

user1

↓

name: "John"

age: 25`,

    language: "firebase",

    commonMistakes: [
      "Poor document structure",

      "Deep nesting",

      "Large documents",

      "Missing security rules",

      "Duplicate data",
    ],

    thinkingProcess: `Step 1: Create collection

Step 2: Create document

Step 3: Add fields

Step 4: Save data

Step 5: Verify storage`,

    realWorldApplication:
      "Used for storing user profiles, orders, products, messages, and application data.",

    interviewTip:
      "Firestore stores data as documents inside collections rather than tables and rows.",
  },

  {
    id: "firebase-19",

    question: "How do you fetch data from Firestore?",

    difficulty: "basic",

    shortAnswer:
      "Data is fetched from Firestore by reading documents from collections using Firebase SDK methods.",

    detailedAnswer: `Firestore allows reading individual documents or entire collections.

Options:

- Get single document
- Get collection data
- Real-time listeners
- Filtered queries

Fetched data is returned as document snapshots that can be processed inside the application.`,

    keyPoints: [
      "Reads collections and documents",

      "Supports real-time updates",

      "Returns snapshots",

      "Supports filtering",

      "Works with SDK methods",
    ],

    codeExample: `Firestore

↓

Read Collection

↓

Get Documents

↓

Display Data`,

    language: "firebase",

    commonMistakes: [
      "Reading unnecessary data",

      "Ignoring pagination",

      "No error handling",

      "Missing indexes",

      "Poor query design",
    ],

    thinkingProcess: `Step 1: Connect Firestore

Step 2: Select collection

Step 3: Fetch data

Step 4: Process results

Step 5: Display information`,

    realWorldApplication:
      "Used for dashboards, product catalogs, user profiles, and content management systems.",

    interviewTip:
      "Firestore can fetch data once or listen for real-time updates.",
  },

  {
    id: "firebase-20",

    question: "How do you update data in Firestore?",

    difficulty: "basic",

    shortAnswer:
      "Firestore data is updated by modifying fields in an existing document.",

    detailedAnswer: `Updating data changes specific fields without replacing the entire document.

Benefits:

- Partial updates
- Efficient operations
- Real-time synchronization
- Reduced bandwidth usage

Firestore automatically propagates updates to connected clients in real time.`,

    keyPoints: [
      "Updates document fields",

      "Supports partial updates",

      "Real-time synchronization",

      "Efficient operation",

      "NoSQL document updates",
    ],

    codeExample: `users

↓

user1

↓

Update age: 25 → 26`,

    language: "firebase",

    commonMistakes: [
      "Updating wrong document",

      "Overwriting entire document",

      "Ignoring validation",

      "Missing permissions",

      "Poor error handling",
    ],

    thinkingProcess: `Step 1: Locate document

Step 2: Select fields

Step 3: Update values

Step 4: Save changes

Step 5: Verify update`,

    realWorldApplication:
      "Used when editing user profiles, updating orders, modifying products, and changing application settings.",

    interviewTip:
      "Firestore supports updating specific fields without replacing the entire document.",
  },
  {
    id: "firebase-21",

    question: "How do you delete data in Firestore?",

    difficulty: "basic",

    shortAnswer:
      "Data is deleted in Firestore by removing a document or specific fields from a document.",

    detailedAnswer: `Firestore allows developers to delete entire documents or individual fields.

Delete Options:

- Delete Document
- Delete Field
- Batch Delete
- Recursive Delete (Collections)

Deleting a document removes all its stored fields, but subcollections must be deleted separately.`,

    keyPoints: [
      "Deletes documents",

      "Can remove specific fields",

      "Supports batch operations",

      "Requires proper permissions",

      "Updates sync in real time",
    ],

    codeExample: `users

↓

user1

↓

Delete Document

↓

Removed from Firestore`,

    language: "firebase",

    commonMistakes: [
      "Deleting wrong document",

      "No confirmation before delete",

      "Ignoring security rules",

      "Forgetting subcollections",

      "No backup strategy",
    ],

    thinkingProcess: `Step 1: Identify document

Step 2: Verify permissions

Step 3: Delete data

Step 4: Confirm removal

Step 5: Update UI`,

    realWorldApplication:
      "Used for deleting user accounts, products, posts, and application records.",

    interviewTip:
      "Deleting a Firestore document removes its fields but not automatically its subcollections.",
  },

  {
    id: "firebase-22",

    question: "What are Firestore Collections and Documents?",

    difficulty: "basic",

    shortAnswer:
      "Collections store groups of documents, and documents store actual data as key-value pairs.",

    detailedAnswer: `Firestore organizes data hierarchically.

Structure:

Collection

↓

Document

↓

Fields

Example:

users

↓

user1

↓

name: "John"

email: "john@example.com"

Collections can contain many documents, and documents can contain subcollections.`,

    keyPoints: [
      "Collection contains documents",

      "Document stores data",

      "Supports nesting",

      "Flexible NoSQL structure",

      "Core Firestore concept",
    ],

    codeExample: `users

├─ user1

├─ user2

└─ user3`,

    language: "firebase",

    commonMistakes: [
      "Confusing collections and documents",

      "Over-nesting data",

      "Poor naming conventions",

      "Large document sizes",

      "Duplicate information",
    ],

    thinkingProcess: `Step 1: Create collection

Step 2: Add documents

Step 3: Store fields

Step 4: Query data

Step 5: Manage relationships`,

    realWorldApplication:
      "Used in user management, product catalogs, chat systems, and content platforms.",

    interviewTip:
      "Collections group documents, while documents hold the actual application data.",
  },

  {
    id: "firebase-23",

    question: "What is a Firestore Query?",

    difficulty: "basic",

    shortAnswer:
      "A Firestore Query retrieves specific documents from a collection based on filtering conditions.",

    detailedAnswer: `Queries help fetch only the required data.

Common Query Operations:

- where()
- orderBy()
- limit()
- startAt()
- endAt()

Benefits:

- Faster data retrieval
- Reduced bandwidth
- Better performance
- More precise results

Queries can also be combined for advanced filtering.`,

    keyPoints: [
      "Filters Firestore data",

      "Improves performance",

      "Supports sorting",

      "Supports pagination",

      "Essential for large datasets",
    ],

    codeExample: `users

↓

where(age > 18)

↓

Return Matching Documents`,

    language: "firebase",

    commonMistakes: [
      "Missing indexes",

      "Fetching all documents",

      "Poor query design",

      "Ignoring pagination",

      "Inefficient filters",
    ],

    thinkingProcess: `Step 1: Select collection

Step 2: Add filters

Step 3: Execute query

Step 4: Process results

Step 5: Display data`,

    realWorldApplication:
      "Used in search systems, dashboards, product filtering, and reporting tools.",

    interviewTip:
      "Queries allow applications to retrieve only the data they actually need.",
  },

  {
    id: "firebase-24",

    question: "What is Real-Time Data Synchronization?",

    difficulty: "basic",

    shortAnswer:
      "Real-Time Data Synchronization automatically updates connected clients whenever data changes.",

    detailedAnswer: `One of Firebase's most powerful features is real-time synchronization.

How It Works:

1. Data changes in database
2. Firebase detects change
3. Connected clients receive update
4. UI updates automatically

Benefits:

- Instant updates
- Better collaboration
- Live user experiences
- Reduced manual refreshing

This is commonly used in chat and collaborative applications.`,

    keyPoints: [
      "Instant data updates",

      "No page refresh needed",

      "Works across devices",

      "Improves user experience",

      "Core Firebase feature",
    ],

    codeExample: `User A Updates Data

↓

Firebase Sync

↓

User B Sees Update Instantly`,

    language: "firebase",

    commonMistakes: [
      "Listening to too much data",

      "Memory leaks from listeners",

      "Ignoring unsubscribe logic",

      "Poor database design",

      "Excessive real-time updates",
    ],

    thinkingProcess: `Step 1: Create listener

Step 2: Monitor changes

Step 3: Receive updates

Step 4: Update UI

Step 5: Cleanup listener`,

    realWorldApplication:
      "Used in chat apps, multiplayer games, live dashboards, and collaboration tools.",

    interviewTip:
      "Firebase automatically synchronizes data changes across connected devices in real time.",
  },

  {
    id: "firebase-25",

    question: "What is Firebase Storage Upload?",

    difficulty: "basic",

    shortAnswer:
      "Firebase Storage Upload is the process of sending files from an application to Firebase Cloud Storage.",

    detailedAnswer: `Firebase Storage Upload allows users to upload files securely.

Supported Files:

- Images
- Videos
- PDFs
- Audio
- Documents

Upload Process:

1. Select file
2. Upload to Storage
3. Generate download URL
4. Store URL in database
5. Display file

Security Rules can control who can upload files.`,

    keyPoints: [
      "Uploads files to cloud",

      "Supports many file types",

      "Generates download URLs",

      "Secure access control",

      "Scalable storage solution",
    ],

    codeExample: `User Selects Image

↓

Upload to Firebase Storage

↓

Get Download URL

↓

Save URL in Firestore`,

    language: "firebase",

    commonMistakes: [
      "No file validation",

      "Large uploads without limits",

      "Weak security rules",

      "Ignoring file naming",

      "Not handling upload errors",
    ],

    thinkingProcess: `Step 1: Select file

Step 2: Validate file

Step 3: Upload to Storage

Step 4: Get URL

Step 5: Save reference`,

    realWorldApplication:
      "Used for profile pictures, product images, resumes, videos, and document management systems.",

    interviewTip:
      "Most applications store uploaded files in Firebase Storage and save the file URL in Firestore.",
  },
  {
    id: "firebase-26",

    question: "Build User Registration with Firebase",

    difficulty: "coding",

    shortAnswer:
      "User registration is implemented using Firebase Authentication with Email and Password.",

    detailedAnswer: `Firebase Authentication provides a simple way to register users.

Process:

1. User enters email and password
2. Firebase validates data
3. Account is created
4. User receives authentication session

This is one of the most common Firebase interview projects.`,

    keyPoints: [
      "Uses Firebase Authentication",

      "Creates new user accounts",

      "Supports email/password",

      "Handles authentication securely",

      "Common interview project",
    ],

    codeExample: `import {

createUserWithEmailAndPassword

} from "firebase/auth";

createUserWithEmailAndPassword(

auth,

"john@example.com",

"password123"

)

.then((userCredential) => {

console.log(

userCredential.user

);

});`,

    language: "firebase",

    commonMistakes: [
      "Weak passwords",

      "No validation",

      "Poor error handling",

      "Ignoring email verification",

      "Not securing routes",
    ],

    thinkingProcess: `Step 1: Create form

Step 2: Collect credentials

Step 3: Call Firebase Auth

Step 4: Handle response

Step 5: Redirect user`,

    realWorldApplication:
      "Used in SaaS applications, e-commerce platforms, social media apps, and admin portals.",

    interviewTip:
      "Registration is usually implemented using createUserWithEmailAndPassword().",
  },

  {
    id: "firebase-27",

    question: "Build Login System with Firebase",

    difficulty: "coding",

    shortAnswer:
      "Firebase Login is implemented using signInWithEmailAndPassword().",

    detailedAnswer: `A login system allows existing users to access protected resources.

Process:

1. User enters credentials
2. Firebase verifies credentials
3. Authentication token is issued
4. Session begins

Firebase automatically manages user sessions.`,

    keyPoints: [
      "Authenticates users",

      "Uses Firebase Auth",

      "Creates session",

      "Provides user object",

      "Common interview project",
    ],

    codeExample: `import {

signInWithEmailAndPassword

} from "firebase/auth";

signInWithEmailAndPassword(

auth,

"john@example.com",

"password123"

)

.then((userCredential) => {

console.log(

userCredential.user

);

});`,

    language: "firebase",

    commonMistakes: [
      "No input validation",

      "Poor error messages",

      "Ignoring loading states",

      "Not handling logout",

      "Missing route protection",
    ],

    thinkingProcess: `Step 1: Create login form

Step 2: Collect credentials

Step 3: Authenticate user

Step 4: Store session

Step 5: Redirect dashboard`,

    realWorldApplication:
      "Used in virtually every authenticated web and mobile application.",

    interviewTip:
      "Login functionality is commonly implemented using signInWithEmailAndPassword().",
  },

  {
    id: "firebase-28",

    question: "Build CRUD App using Firestore",

    difficulty: "coding",

    shortAnswer:
      "A CRUD app performs Create, Read, Update, and Delete operations using Firestore.",

    detailedAnswer: `CRUD is one of the most important Firebase interview projects.

Operations:

- Create Document
- Read Documents
- Update Document
- Delete Document

Firestore makes these operations simple and provides real-time synchronization.`,

    keyPoints: [
      "Create data",

      "Read data",

      "Update data",

      "Delete data",

      "Uses Firestore",
    ],

    codeExample: `Create

↓

addDoc()

Read

↓

getDocs()

Update

↓

updateDoc()

Delete

↓

deleteDoc()`,

    language: "firebase",

    commonMistakes: [
      "Poor document structure",

      "Ignoring security rules",

      "No error handling",

      "Missing loading state",

      "Unoptimized queries",
    ],

    thinkingProcess: `Step 1: Create collection

Step 2: Add documents

Step 3: Display documents

Step 4: Edit documents

Step 5: Delete documents`,

    realWorldApplication:
      "Used in blogs, task managers, admin panels, and inventory systems.",

    interviewTip:
      "CRUD applications demonstrate understanding of Firestore operations.",
  },

  {
    id: "firebase-29",

    question: "Build File Upload System using Firebase Storage",

    difficulty: "coding",

    shortAnswer:
      "A file upload system stores files in Firebase Storage and retrieves download URLs.",

    detailedAnswer: `File upload is a common Firebase project.

Process:

1. Select file
2. Upload file
3. Generate URL
4. Store URL
5. Display file

Supported uploads:

- Images
- Videos
- Documents
- Audio Files

Firebase Storage handles scaling automatically.`,

    keyPoints: [
      "Uploads files securely",

      "Uses Firebase Storage",

      "Generates URLs",

      "Supports large files",

      "Common interview project",
    ],

    codeExample: `User Selects File

↓

uploadBytes()

↓

Firebase Storage

↓

getDownloadURL()

↓

Display File`,

    language: "firebase",

    commonMistakes: [
      "No file validation",

      "Weak storage rules",

      "Ignoring upload progress",

      "Poor naming conventions",

      "Missing error handling",
    ],

    thinkingProcess: `Step 1: Select file

Step 2: Validate file

Step 3: Upload file

Step 4: Generate URL

Step 5: Save reference`,

    realWorldApplication:
      "Used for profile pictures, resumes, product images, and media uploads.",

    interviewTip:
      "Most production apps upload files to Storage and save URLs in Firestore.",
  },

  {
    id: "firebase-30",

    question: "Build Complete Authentication Flow using Firebase",

    difficulty: "coding",

    shortAnswer:
      "A complete authentication flow includes registration, login, logout, protected routes, and user session management.",

    detailedAnswer: `A complete authentication system combines multiple Firebase Authentication features.

Features:

- Registration
- Login
- Logout
- Protected Routes
- Authentication State
- Password Reset
- Email Verification

This project demonstrates real-world authentication implementation.`,

    keyPoints: [
      "Complete auth system",

      "Protected routes",

      "Session management",

      "Password reset",

      "Production-ready implementation",
    ],

    codeExample: `Register

↓

Login

↓

Protected Route

↓

Dashboard

↓

Logout`,

    language: "firebase",

    commonMistakes: [
      "No route protection",

      "Ignoring auth state",

      "Poor error handling",

      "Missing logout logic",

      "No email verification",
    ],

    thinkingProcess: `Step 1: Register user

Step 2: Login user

Step 3: Track auth state

Step 4: Protect routes

Step 5: Implement logout`,

    realWorldApplication:
      "Used in SaaS products, enterprise systems, dashboards, and modern web applications.",

    interviewTip:
      "A complete authentication flow is one of the most important Firebase projects for interviews.",
  },
];
