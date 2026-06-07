export const sqlQuestions = [
  {
    id: "sql-1",
    question: "What is SQL?",
    difficulty: "Basic",
    shortAnswer:
      "SQL (Structured Query Language) is a standard language used to store, retrieve, manipulate, and manage data in relational databases.",

    detailedAnswer: `SQL stands for Structured Query Language.

Definition:
SQL is the standard language used to communicate with relational database management systems (RDBMS). It allows users to create databases, store data, retrieve information, update records, and delete data.

Main Uses of SQL:
- Create databases and tables
- Insert data
- Retrieve data
- Update records
- Delete records
- Manage users and permissions

SQL Categories:

1. DDL (Data Definition Language)
   - CREATE
   - ALTER
   - DROP
   - TRUNCATE

2. DML (Data Manipulation Language)
   - INSERT
   - UPDATE
   - DELETE

3. DQL (Data Query Language)
   - SELECT

4. DCL (Data Control Language)
   - GRANT
   - REVOKE

5. TCL (Transaction Control Language)
   - COMMIT
   - ROLLBACK
   - SAVEPOINT

Popular Databases Using SQL:
- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server
- SQLite

Benefits of SQL:
- Easy to learn
- Standardized language
- Powerful querying
- High performance
- Widely supported`,

    keyPoints: [
      "SQL stands for Structured Query Language",
      "Used with relational databases",
      "Standard database language",
      "Supports CRUD operations",
      "Used in MySQL, PostgreSQL, Oracle, SQL Server",
    ],

    codeExample: `-- Create table
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);

-- Insert data
INSERT INTO users VALUES (1, 'John');

-- Retrieve data
SELECT * FROM users;`,

    language: "sql",

    commonMistakes: [
      "Confusing SQL with a database",
      "Ignoring SQL standards",
      "Writing queries without conditions",
      "Using DELETE without WHERE",
      "Not understanding SQL categories",
    ],

    thinkingProcess: `Step 1: Understand SQL definition
Step 2: Learn SQL categories
Step 3: Practice basic queries
Step 4: Work with tables
Step 5: Build database applications`,

    realWorldApplication:
      "Every banking, e-commerce, social media, and enterprise application uses SQL to store and retrieve data.",

    interviewTip:
      "Clearly explain that SQL is a language, not a database. Mention CRUD operations and relational databases.",
  },

  {
    id: "sql-2",
    question: "What are the features of SQL?",
    difficulty: "Basic",

    shortAnswer:
      "SQL provides data querying, manipulation, security, transaction management, and database administration features.",

    detailedAnswer: `SQL offers many powerful features for working with databases.

Major Features:

1. Simple and Easy
   - Human-readable syntax
   - Easy to learn

2. Data Retrieval
   - SELECT queries
   - Filtering and sorting

3. Data Manipulation
   - INSERT
   - UPDATE
   - DELETE

4. Data Definition
   - CREATE
   - ALTER
   - DROP

5. Security
   - User permissions
   - Role management

6. Transaction Support
   - COMMIT
   - ROLLBACK

7. Data Integrity
   - Constraints
   - Keys

8. Scalability
   - Handles large datasets

9. Portability
   - Works across many database systems

10. Standardized Language
   - ANSI SQL standard`,

    keyPoints: [
      "Supports CRUD operations",
      "Provides security features",
      "Supports transactions",
      "Offers data integrity",
      "Portable across databases",
    ],

    codeExample: `SELECT name
FROM users
WHERE age > 18
ORDER BY name;`,

    language: "sql",

    commonMistakes: [
      "Ignoring transactions",
      "Not using constraints",
      "Poor query optimization",
      "Missing indexes",
      "Weak security practices",
    ],

    thinkingProcess: `Step 1: Learn SQL capabilities
Step 2: Understand transactions
Step 3: Study security features
Step 4: Practice querying
Step 5: Optimize performance`,

    realWorldApplication:
      "SQL powers enterprise applications by ensuring secure and reliable access to data.",

    interviewTip:
      "Mention querying, transactions, security, integrity, and portability as key SQL features.",
  },

  {
    id: "sql-3",
    question: "What is a Database?",
    difficulty: "Basic",

    shortAnswer:
      "A database is an organized collection of data that can be stored, managed, and accessed efficiently.",

    detailedAnswer: `A database stores information in a structured format.

Definition:
A database is a collection of related data organized for efficient storage, retrieval, and management.

Examples:
- Student records
- Banking information
- E-commerce products
- Employee details

Benefits:
- Organized storage
- Fast retrieval
- Data consistency
- Security
- Backup and recovery

Types of Databases:
1. Relational Databases
2. NoSQL Databases
3. Distributed Databases
4. Cloud Databases

Database Components:
- Tables
- Rows
- Columns
- Keys
- Relationships`,

    keyPoints: [
      "Stores organized data",
      "Supports retrieval and management",
      "Improves data consistency",
      "Provides security",
      "Used in almost all applications",
    ],

    codeExample: `Database: CompanyDB

Tables:
- Employees
- Departments
- Projects
- Salaries`,

    language: "sql",

    commonMistakes: [
      "Confusing database with table",
      "Poor database design",
      "Duplicate data",
      "Missing backups",
      "Ignoring security",
    ],

    thinkingProcess: `Step 1: Understand data storage
Step 2: Learn database structure
Step 3: Identify components
Step 4: Explore use cases
Step 5: Design efficient databases`,

    realWorldApplication:
      "Amazon, Netflix, Facebook, and banks rely on databases to store and manage massive amounts of data.",

    interviewTip:
      "A database is the container that holds tables, records, and relationships.",
  },

  {
    id: "sql-4",
    question: "What is DBMS?",
    difficulty: "Basic",

    shortAnswer:
      "DBMS (Database Management System) is software used to create, manage, and interact with databases.",

    detailedAnswer: `DBMS stands for Database Management System.

Definition:
A DBMS is software that allows users to store, retrieve, update, and manage data efficiently.

Functions:
- Data storage
- Data retrieval
- Security management
- Backup and recovery
- Data integrity

Examples:
- MySQL
- Oracle
- PostgreSQL
- SQL Server

Advantages:
- Centralized management
- Reduced redundancy
- Improved security
- Efficient access

Users of DBMS:
- Database administrators
- Developers
- End users
- Analysts`,

    keyPoints: [
      "Software for managing databases",
      "Provides security",
      "Supports backups",
      "Reduces redundancy",
      "Improves data access",
    ],

    codeExample: `User
  ↓
DBMS
  ↓
Database`,

    language: "sql",

    commonMistakes: [
      "Confusing DBMS with database",
      "Ignoring security features",
      "Poor backup strategy",
      "Improper access control",
      "Lack of normalization",
    ],

    thinkingProcess: `Step 1: Understand DBMS role
Step 2: Learn major functions
Step 3: Study advantages
Step 4: Explore examples
Step 5: Apply in projects`,

    realWorldApplication:
      "Every enterprise system uses a DBMS to efficiently manage large amounts of business data.",

    interviewTip:
      "A database stores data, while a DBMS manages and controls that data.",
  },

  {
    id: "sql-5",
    question: "Difference Between DBMS and RDBMS?",

    difficulty: "Basic",

    shortAnswer:
      "DBMS stores data without strict relationships, while RDBMS stores data in related tables using relational models.",

    detailedAnswer: `DBMS and RDBMS are database management systems, but they differ significantly.

DBMS:
- Stores data as files
- No relationships required
- Supports small applications
- Less security
- Lower scalability

RDBMS:
- Stores data in tables
- Supports relationships
- Uses primary and foreign keys
- Better security
- High scalability

Examples:

DBMS:
- XML Database
- File System

RDBMS:
- MySQL
- PostgreSQL
- Oracle
- SQL Server

Comparison:

Feature        DBMS        RDBMS
--------------------------------
Storage        Files       Tables
Relations      No          Yes
Normalization  Limited     Supported
Security       Basic       Advanced
Scalability    Low         High
Users          Single      Multiple

RDBMS is considered an advanced version of DBMS.`,

    keyPoints: [
      "RDBMS uses relational tables",
      "DBMS may store data as files",
      "RDBMS supports keys and relationships",
      "RDBMS offers better security",
      "Most modern systems use RDBMS",
    ],

    codeExample: `Employees Table

id | name | dept_id

Departments Table

id | department

dept_id → Foreign Key Relationship`,

    language: "sql",

    commonMistakes: [
      "Assuming DBMS and RDBMS are identical",
      "Ignoring relationships",
      "Not using normalization",
      "Poor table design",
      "Missing foreign keys",
    ],

    thinkingProcess: `Step 1: Define DBMS
Step 2: Define RDBMS
Step 3: Compare features
Step 4: Analyze relationships
Step 5: Apply in real projects`,

    realWorldApplication:
      "Modern applications such as banking and e-commerce rely on RDBMS because they require relationships and data integrity.",

    interviewTip:
      "The biggest difference is that RDBMS supports relationships using tables, primary keys, and foreign keys.",
  },
  {
    id: "sql-6",
    question: "What is a Table?",
    difficulty: "Basic",

    shortAnswer:
      "A table is a database object that stores data in rows and columns. It is the fundamental structure used to organize information in a relational database.",

    detailedAnswer: `A table is the primary storage structure in an RDBMS.

Definition:
A table is a collection of related data organized into rows and columns.

Example:

Employees Table

| id | name  | salary |
|----|-------|---------|
| 1  | John  | 50000   |
| 2  | Alice | 60000   |

Components:

1. Table Name
   - Identifies the table
   - Example: employees

2. Columns
   - Define attributes
   - Example: id, name, salary

3. Rows
   - Store actual records
   - Each row represents one entity

Characteristics:
- Stores related data
- Supports CRUD operations
- Can contain constraints
- Supports relationships

Common Table Operations:
- CREATE TABLE
- ALTER TABLE
- DROP TABLE
- TRUNCATE TABLE

Benefits:
- Organized data storage
- Easy querying
- Better data integrity
- Supports indexing`,

    keyPoints: [
      "Basic storage unit in RDBMS",
      "Contains rows and columns",
      "Stores related information",
      "Supports constraints",
      "Can be queried using SQL",
    ],

    codeExample: `CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  salary DECIMAL(10,2)
);`,

    language: "sql",

    commonMistakes: [
      "Creating too many unnecessary tables",
      "Poor table naming",
      "Missing primary keys",
      "Using incorrect data types",
      "Ignoring normalization",
    ],

    thinkingProcess: `Step 1: Define table
Step 2: Understand rows and columns
Step 3: Learn table creation
Step 4: Store records
Step 5: Query data`,

    realWorldApplication:
      "Tables are used everywhere—from storing customer data in e-commerce systems to managing employee records in organizations.",

    interviewTip:
      "A table is the basic structure that stores data in rows and columns within a relational database.",
  },

  {
    id: "sql-7",
    question: "What is a Row and Column?",
    difficulty: "Basic",

    shortAnswer:
      "A row represents a single record in a table, while a column represents a specific attribute of that record.",

    detailedAnswer: `Rows and columns are the building blocks of a database table.

Column:
- Represents a field or attribute
- Defines data type
- Example: id, name, email

Row:
- Represents a single record
- Contains values for each column

Example:

| id | name | city |
|----|------|------|
| 1  | John | NY   |
| 2  | Alice| LA   |

Columns:
- id
- name
- city

Rows:
- (1, John, NY)
- (2, Alice, LA)

Properties:
- Columns define structure
- Rows store actual data
- Every row should be unique
- Tables can have many rows and columns`,

    keyPoints: [
      "Row = Record",
      "Column = Attribute",
      "Rows store data",
      "Columns define structure",
      "Core table components",
    ],

    codeExample: `SELECT id, name
FROM employees;`,

    language: "sql",

    commonMistakes: [
      "Confusing rows with columns",
      "Duplicate records",
      "Poor column naming",
      "Incorrect data types",
      "Too many unnecessary columns",
    ],

    thinkingProcess: `Step 1: Identify table
Step 2: Locate columns
Step 3: Locate rows
Step 4: Understand relationship
Step 5: Query records`,

    realWorldApplication:
      "Customer information, orders, and transactions are stored as rows, while attributes like name and email are stored in columns.",

    interviewTip: "Remember: Row = Record, Column = Field/Attribute.",
  },

  {
    id: "sql-8",
    question: "What is a Primary Key?",
    difficulty: "Basic",

    shortAnswer:
      "A Primary Key is a column or set of columns that uniquely identifies each row in a table.",

    detailedAnswer: `A Primary Key is one of the most important constraints in a relational database.

Characteristics:
- Unique for every row
- Cannot contain NULL values
- Automatically indexed
- Only one primary key per table

Example:

Employees

| id | name |
|----|------|
| 1  | John |
| 2  | Alice |

Here, id is the primary key.

Benefits:
- Ensures uniqueness
- Improves query performance
- Establishes relationships
- Maintains data integrity

Types:
1. Single-column primary key
2. Composite primary key

Examples:
- Employee ID
- Student Roll Number
- Product ID
- Order ID`,

    keyPoints: [
      "Uniquely identifies records",
      "Cannot be NULL",
      "Must be unique",
      "One primary key per table",
      "Automatically indexed",
    ],

    codeExample: `CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);`,

    language: "sql",

    commonMistakes: [
      "Using duplicate values",
      "Allowing NULL values",
      "Changing primary keys frequently",
      "Choosing non-unique fields",
      "Not defining a primary key",
    ],

    thinkingProcess: `Step 1: Identify unique field
Step 2: Define primary key
Step 3: Enforce uniqueness
Step 4: Maintain integrity
Step 5: Use in relationships`,

    realWorldApplication:
      "Every employee, product, customer, and order usually has a unique ID stored as a primary key.",

    interviewTip:
      "A primary key uniquely identifies every record and cannot contain NULL values.",
  },

  {
    id: "sql-9",
    question: "What is a Foreign Key?",
    difficulty: "Basic",

    shortAnswer:
      "A Foreign Key is a column that creates a relationship between two tables by referencing the Primary Key of another table.",

    detailedAnswer: `A Foreign Key establishes relationships between tables.

Purpose:
- Maintain referential integrity
- Connect related tables
- Prevent invalid data

Example:

Departments

| id | name |
|----|------|
| 1  | IT   |
| 2  | HR   |

Employees

| id | name | dept_id |
|----|------|---------|
| 1  | John | 1       |
| 2  | Alice| 2       |

dept_id is a Foreign Key referencing Departments.id.

Benefits:
- Reduces redundancy
- Maintains consistency
- Enables joins
- Supports normalization`,

    keyPoints: [
      "Creates table relationships",
      "References primary key",
      "Maintains referential integrity",
      "Supports joins",
      "Reduces redundancy",
    ],

    codeExample: `CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  dept_id INT,
  FOREIGN KEY (dept_id)
  REFERENCES departments(id)
);`,

    language: "sql",

    commonMistakes: [
      "Referencing non-primary columns",
      "Ignoring referential integrity",
      "Deleting parent records carelessly",
      "Wrong relationships",
      "Missing indexes",
    ],

    thinkingProcess: `Step 1: Identify parent table
Step 2: Locate primary key
Step 3: Create foreign key
Step 4: Enforce relationship
Step 5: Query related data`,

    realWorldApplication:
      "Foreign keys connect customers with orders, employees with departments, and students with courses.",

    interviewTip:
      "A foreign key references a primary key and creates relationships between tables.",
  },

  {
    id: "sql-10",
    question: "What is a Candidate Key?",
    difficulty: "Basic",

    shortAnswer:
      "A Candidate Key is a column or combination of columns that can uniquely identify a row in a table.",

    detailedAnswer: `A Candidate Key is a potential Primary Key.

Definition:
Any column or set of columns capable of uniquely identifying records is called a Candidate Key.

Example:

Students

| RollNo | Email | Name |
|---------|-------|------|
| 101 | john@email.com | John |
| 102 | alice@email.com | Alice |

Candidate Keys:
- RollNo
- Email

One Candidate Key becomes the Primary Key.
The remaining Candidate Keys become Alternate Keys.

Characteristics:
- Unique values
- No NULL values
- Can identify records uniquely

Relationship:

Candidate Keys
      ↓
Choose One
      ↓
Primary Key
      ↓
Others become Alternate Keys`,

    keyPoints: [
      "Potential primary key",
      "Must be unique",
      "Cannot contain NULL",
      "Multiple candidate keys possible",
      "One becomes primary key",
    ],

    codeExample: `Students

Candidate Keys:
- student_id
- email

Primary Key:
- student_id`,

    language: "sql",

    commonMistakes: [
      "Confusing candidate and primary key",
      "Using non-unique columns",
      "Allowing NULL values",
      "Choosing weak candidate keys",
      "Ignoring alternate keys",
    ],

    thinkingProcess: `Step 1: Find unique columns
Step 2: Identify candidate keys
Step 3: Select primary key
Step 4: Mark alternate keys
Step 5: Design relationships`,

    realWorldApplication:
      "Email, employee ID, passport number, and student roll number are often candidate keys because they uniquely identify records.",

    interviewTip:
      "Every primary key is a candidate key, but not every candidate key becomes the primary key.",
  },
{
  id: "sql-11",
  question: "What is SQL Query?",
  difficulty: "Basic",

  shortAnswer:
    "An SQL Query is a command written in SQL to interact with a database for retrieving, inserting, updating, or deleting data.",

  detailedAnswer: `An SQL Query is a request sent to a database.

Definition:
A query is a statement that instructs the database to perform a specific operation.

Common Query Types:

1. SELECT
   - Retrieve data

2. INSERT
   - Add new records

3. UPDATE
   - Modify existing records

4. DELETE
   - Remove records

Examples:

Retrieve Data:
SELECT * FROM employees;

Insert Data:
INSERT INTO employees VALUES (1, 'John');

Update Data:
UPDATE employees
SET salary = 60000
WHERE id = 1;

Delete Data:
DELETE FROM employees
WHERE id = 1;

Benefits:
- Access data quickly
- Automate operations
- Manage databases efficiently`,

  keyPoints: [
    "SQL query is a database command",
    "Used for CRUD operations",
    "Can retrieve and modify data",
    "Core part of SQL",
    "Executed by DBMS"
  ],

  codeExample: `SELECT name, salary
FROM employees
WHERE salary > 50000;`,

  language: "sql",

  commonMistakes: [
    "Forgetting WHERE clause",
    "Writing invalid syntax",
    "Querying wrong table",
    "Using SELECT * unnecessarily",
    "Not optimizing queries"
  ],

  thinkingProcess: `Step 1: Identify operation
Step 2: Write SQL statement
Step 3: Execute query
Step 4: Review results
Step 5: Optimize if needed`,

  realWorldApplication:
    "Every database interaction in web and enterprise applications is performed using SQL queries.",

  interviewTip:
    "A query is simply an instruction sent to the database to perform an operation.",
},

{
  id: "sql-12",
  question: "What is SELECT Statement?",
  difficulty: "Basic",

  shortAnswer:
    "The SELECT statement is used to retrieve data from one or more tables in a database.",

  detailedAnswer: `SELECT is the most commonly used SQL command.

Purpose:
Retrieve data from tables.

Syntax:

SELECT column_name
FROM table_name;

Examples:

Retrieve all columns:
SELECT * FROM employees;

Retrieve specific columns:
SELECT name, salary
FROM employees;

Filtering:
SELECT *
FROM employees
WHERE salary > 50000;

Sorting:
SELECT *
FROM employees
ORDER BY salary DESC;

Benefits:
- Flexible data retrieval
- Supports filtering
- Supports sorting
- Supports joins and aggregation`,

  keyPoints: [
    "Used to retrieve data",
    "Most common SQL command",
    "Can fetch specific columns",
    "Supports filtering",
    "Supports sorting"
  ],

  codeExample: `SELECT id, name
FROM employees;`,

  language: "sql",

  commonMistakes: [
    "Using SELECT * unnecessarily",
    "Missing table names",
    "Ignoring indexes",
    "Retrieving unnecessary columns",
    "Poor filtering"
  ],

  thinkingProcess: `Step 1: Identify required data
Step 2: Select columns
Step 3: Specify table
Step 4: Apply conditions
Step 5: Retrieve results`,

  realWorldApplication:
    "Dashboards, reports, and applications constantly use SELECT statements to display information.",

  interviewTip:
    "SELECT retrieves data; it's the foundation of SQL querying.",
},

{
  id: "sql-13",
  question: "What is WHERE Clause?",
  difficulty: "Basic",

  shortAnswer:
    "The WHERE clause is used to filter records and return only rows that meet a specified condition.",

  detailedAnswer: `The WHERE clause restricts query results.

Purpose:
Filter rows based on conditions.

Syntax:

SELECT *
FROM employees
WHERE salary > 50000;

Operators:

=   Equal
!=  Not Equal
>   Greater Than
<   Less Than
>=  Greater Than Equal
<=  Less Than Equal

Examples:

SELECT *
FROM employees
WHERE department = 'IT';

Multiple Conditions:

SELECT *
FROM employees
WHERE department = 'IT'
AND salary > 50000;

Benefits:
- Reduces unwanted results
- Improves performance
- Makes queries precise`,

  keyPoints: [
    "Filters rows",
    "Uses conditions",
    "Works with operators",
    "Can combine conditions",
    "Improves query accuracy"
  ],

  codeExample: `SELECT *
FROM employees
WHERE age >= 18;`,

  language: "sql",

  commonMistakes: [
    "Forgetting WHERE in UPDATE",
    "Forgetting WHERE in DELETE",
    "Using wrong operators",
    "Incorrect logic",
    "Poor filtering"
  ],

  thinkingProcess: `Step 1: Define condition
Step 2: Add WHERE clause
Step 3: Execute query
Step 4: Verify results
Step 5: Optimize filtering`,

  realWorldApplication:
    "E-commerce sites use WHERE clauses to filter products by category, price, and availability.",

  interviewTip:
    "Always be careful when using UPDATE or DELETE without a WHERE clause.",
},

{
  id: "sql-14",
  question: "What is ORDER BY?",
  difficulty: "Basic",

  shortAnswer:
    "ORDER BY is used to sort query results in ascending or descending order.",

  detailedAnswer: `ORDER BY arranges records in a specific order.

Syntax:

SELECT *
FROM employees
ORDER BY salary;

Ascending Order:

SELECT *
FROM employees
ORDER BY salary ASC;

Descending Order:

SELECT *
FROM employees
ORDER BY salary DESC;

Multiple Columns:

SELECT *
FROM employees
ORDER BY department ASC,
salary DESC;

Benefits:
- Organized results
- Easier analysis
- Better reporting
- Improved readability`,

  keyPoints: [
    "Sorts records",
    "Supports ASC and DESC",
    "Can sort multiple columns",
    "Improves readability",
    "Often used with SELECT"
  ],

  codeExample: `SELECT *
FROM employees
ORDER BY name ASC;`,

  language: "sql",

  commonMistakes: [
    "Using wrong sort direction",
    "Sorting unnecessary columns",
    "Ignoring indexes",
    "Incorrect column names",
    "Poor query performance"
  ],

  thinkingProcess: `Step 1: Retrieve data
Step 2: Select sort column
Step 3: Choose order
Step 4: Execute query
Step 5: Review results`,

  realWorldApplication:
    "Reports often sort sales, salaries, and customer data using ORDER BY.",

  interviewTip:
    "ASC is default if no sorting direction is specified.",
},

{
  id: "sql-15",
  question: "What is GROUP BY?",
  difficulty: "Basic",

  shortAnswer:
    "GROUP BY groups rows that have the same values into summary rows and is commonly used with aggregate functions.",

  detailedAnswer: `GROUP BY organizes data into groups.

Purpose:
Perform aggregation on grouped records.

Aggregate Functions:
- COUNT()
- SUM()
- AVG()
- MIN()
- MAX()

Example:

SELECT department,
COUNT(*) AS total_employees
FROM employees
GROUP BY department;

Result:

IT      20
HR      10
Sales   15

Multiple Columns:

SELECT department, city,
COUNT(*)
FROM employees
GROUP BY department, city;

Benefits:
- Data summarization
- Reporting
- Analytics
- Statistical calculations`,

  keyPoints: [
    "Groups similar records",
    "Used with aggregate functions",
    "Supports reporting",
    "Summarizes data",
    "Important for analytics"
  ],

  codeExample: `SELECT department,
AVG(salary) AS average_salary
FROM employees
GROUP BY department;`,

  language: "sql",

  commonMistakes: [
    "Missing GROUP BY columns",
    "Using non-aggregated columns incorrectly",
    "Confusing GROUP BY with ORDER BY",
    "Incorrect aggregations",
    "Poor grouping strategy"
  ],

  thinkingProcess: `Step 1: Identify grouping column
Step 2: Apply aggregate function
Step 3: Add GROUP BY
Step 4: Execute query
Step 5: Analyze results`,

  realWorldApplication:
    "Businesses use GROUP BY to generate sales reports, employee statistics, and financial summaries.",

  interviewTip:
    "GROUP BY is usually combined with COUNT, SUM, AVG, MIN, or MAX."
},
{
  id: "sql-16",
  question: "What is HAVING Clause?",
  difficulty: "Basic",

  shortAnswer:
    "The HAVING clause is used to filter grouped records after a GROUP BY operation. It works with aggregate functions such as COUNT, SUM, AVG, MIN, and MAX.",

  detailedAnswer: `HAVING is used with GROUP BY to filter grouped data.

Difference Between WHERE and HAVING:

WHERE:
- Filters rows before grouping
- Cannot use aggregate functions directly

HAVING:
- Filters groups after grouping
- Works with aggregate functions

Example:

SELECT department,
COUNT(*) AS total_employees
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;

Result:
Only departments having more than 5 employees will be shown.

Using SUM:

SELECT department,
SUM(salary) AS total_salary
FROM employees
GROUP BY department
HAVING SUM(salary) > 100000;

Benefits:
- Filters summarized data
- Useful in reports
- Supports aggregate functions
- Improves data analysis`,

  keyPoints: [
    "Used after GROUP BY",
    "Filters grouped records",
    "Works with aggregate functions",
    "Different from WHERE",
    "Common in reporting queries"
  ],

  codeExample: `SELECT department,
COUNT(*) AS total
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;`,

  language: "sql",

  commonMistakes: [
    "Using HAVING instead of WHERE",
    "Forgetting GROUP BY",
    "Using non-aggregated columns incorrectly",
    "Confusing WHERE and HAVING",
    "Poor query optimization"
  ],

  thinkingProcess: `Step 1: Group data
Step 2: Apply aggregate function
Step 3: Use HAVING condition
Step 4: Execute query
Step 5: Analyze grouped results`,

  realWorldApplication:
    "Businesses use HAVING to find departments with high salaries, top-selling products, or customers with many orders.",

  interviewTip:
    "WHERE filters rows, HAVING filters groups.",
},

{
  id: "sql-17",
  question: "What is INSERT Statement?",
  difficulty: "Basic",

  shortAnswer:
    "The INSERT statement is used to add new records into a database table.",

  detailedAnswer: `INSERT adds data into a table.

Syntax:

INSERT INTO table_name
(column1, column2)
VALUES
(value1, value2);

Example:

INSERT INTO employees
(id, name, salary)
VALUES
(1, 'John', 50000);

Insert Multiple Rows:

INSERT INTO employees
(id, name)
VALUES
(2, 'Alice'),
(3, 'Bob');

Benefits:
- Adds new records
- Supports bulk inserts
- Essential CRUD operation
- Easy data entry`,

  keyPoints: [
    "Adds new records",
    "Part of CRUD operations",
    "Supports multiple inserts",
    "Requires valid data",
    "Works with all tables"
  ],

  codeExample: `INSERT INTO employees
(id, name, department)
VALUES
(101, 'John', 'IT');`,

  language: "sql",

  commonMistakes: [
    "Incorrect column order",
    "Missing required values",
    "Violating primary keys",
    "Wrong data types",
    "Inserting duplicate data"
  ],

  thinkingProcess: `Step 1: Identify table
Step 2: Specify columns
Step 3: Provide values
Step 4: Execute INSERT
Step 5: Verify record`,

  realWorldApplication:
    "Whenever a user registers, places an order, or submits a form, INSERT statements store the new data.",

  interviewTip:
    "INSERT is used to add new records into a table.",
},

{
  id: "sql-18",
  question: "What is UPDATE Statement?",
  difficulty: "Basic",

  shortAnswer:
    "The UPDATE statement is used to modify existing records in a database table.",

  detailedAnswer: `UPDATE changes existing data.

Syntax:

UPDATE table_name
SET column_name = value
WHERE condition;

Example:

UPDATE employees
SET salary = 60000
WHERE id = 1;

Update Multiple Columns:

UPDATE employees
SET salary = 70000,
department = 'HR'
WHERE id = 1;

Benefits:
- Modify existing records
- Correct errors
- Maintain data accuracy
- Essential CRUD operation

Important:
Always use WHERE when updating specific records.`,

  keyPoints: [
    "Modifies existing records",
    "Uses SET clause",
    "Supports multiple columns",
    "Part of CRUD",
    "Usually combined with WHERE"
  ],

  codeExample: `UPDATE employees
SET salary = 75000
WHERE id = 101;`,

  language: "sql",

  commonMistakes: [
    "Forgetting WHERE clause",
    "Updating wrong records",
    "Using incorrect values",
    "Poor transaction management",
    "Not backing up data"
  ],

  thinkingProcess: `Step 1: Identify record
Step 2: Use UPDATE
Step 3: Set new values
Step 4: Apply WHERE condition
Step 5: Verify update`,

  realWorldApplication:
    "Employee salaries, product prices, and customer information are updated regularly using UPDATE statements.",

  interviewTip:
    "UPDATE without WHERE affects every row in the table.",
},

{
  id: "sql-19",
  question: "What is DELETE Statement?",
  difficulty: "Basic",

  shortAnswer:
    "The DELETE statement is used to remove records from a table based on specified conditions.",

  detailedAnswer: `DELETE removes records from a table.

Syntax:

DELETE FROM table_name
WHERE condition;

Example:

DELETE FROM employees
WHERE id = 1;

Delete Multiple Rows:

DELETE FROM employees
WHERE department = 'HR';

Delete All Rows:

DELETE FROM employees;

Benefits:
- Removes unwanted data
- Supports filtering
- Part of CRUD operations
- Flexible record management

Important:
Always use WHERE when deleting specific records.`,

  keyPoints: [
    "Removes records",
    "Uses WHERE condition",
    "Part of CRUD operations",
    "Can delete all rows",
    "Requires caution"
  ],

  codeExample: `DELETE FROM employees
WHERE employee_id = 101;`,

  language: "sql",

  commonMistakes: [
    "Forgetting WHERE clause",
    "Deleting wrong records",
    "No backups",
    "Ignoring transactions",
    "Accidental mass deletion"
  ],

  thinkingProcess: `Step 1: Identify records
Step 2: Apply DELETE
Step 3: Add WHERE clause
Step 4: Execute query
Step 5: Verify deletion`,

  realWorldApplication:
    "Companies remove inactive users, old logs, and obsolete records using DELETE statements.",

  interviewTip:
    "DELETE removes rows but keeps the table structure intact.",
},

{
  id: "sql-20",
  question: "What is TRUNCATE?",
  difficulty: "Basic",

  shortAnswer:
    "TRUNCATE removes all rows from a table quickly while keeping the table structure unchanged.",

  detailedAnswer: `TRUNCATE is a DDL command used to remove all records from a table.

Syntax:

TRUNCATE TABLE employees;

Characteristics:
- Removes all rows
- Faster than DELETE
- Cannot use WHERE clause
- Resets identity/auto-increment values (database dependent)
- Keeps table structure

DELETE vs TRUNCATE:

DELETE:
- Removes selected rows
- Supports WHERE
- Slower
- DML command

TRUNCATE:
- Removes all rows
- No WHERE
- Faster
- DDL command

Benefits:
- High performance
- Quick cleanup
- Useful for testing and development`,

  keyPoints: [
    "Removes all rows",
    "Faster than DELETE",
    "Cannot use WHERE",
    "Keeps table structure",
    "DDL command"
  ],

  codeExample: `TRUNCATE TABLE employees;`,

  language: "sql",

  commonMistakes: [
    "Expecting WHERE support",
    "Using on production data accidentally",
    "Confusing DELETE and TRUNCATE",
    "Ignoring auto-increment reset",
    "No backup before execution"
  ],

  thinkingProcess: `Step 1: Identify table
Step 2: Confirm data removal
Step 3: Execute TRUNCATE
Step 4: Verify table
Step 5: Continue operations`,

  realWorldApplication:
    "Developers often use TRUNCATE to clear test data quickly before loading fresh datasets.",

  interviewTip:
    "TRUNCATE removes all rows faster than DELETE because it deallocates data pages instead of deleting row by row.",
},
{
  id: "sql-coding-1",
  question: "Find the Second Highest Salary",
  difficulty: "Intermediate",

  shortAnswer:
    "Use a subquery or DENSE_RANK() to find the second highest distinct salary from the employees table.",

  detailedAnswer: `This is one of the most frequently asked SQL interview questions.

Problem:
Find the second highest salary from the employees table.

Example:

Employees

| id | name  | salary |
|----|-------|--------|
| 1  | John  | 50000  |
| 2  | Alice | 70000  |
| 3  | Bob   | 60000  |

Output:
60000

Approaches:
1. MAX() with Subquery
2. DENSE_RANK()
3. LIMIT/OFFSET (database specific)

Best Practice:
Use DENSE_RANK() for scalable solutions.`,

  keyPoints: [
    "Common SQL interview question",
    "Can be solved using subqueries",
    "DENSE_RANK() is preferred",
    "Handles duplicate salaries",
    "Tests aggregation knowledge"
  ],

  codeExample: `SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
  SELECT MAX(salary)
  FROM employees
);`,

  language: "sql",

  commonMistakes: [
    "Ignoring duplicate salaries",
    "Using ORDER BY incorrectly",
    "Not handling NULL values",
    "Returning highest salary instead",
    "Missing DISTINCT"
  ],

  thinkingProcess: `Step 1: Find highest salary
Step 2: Exclude highest salary
Step 3: Find next maximum
Step 4: Return result`,

  realWorldApplication:
    "Used in HR systems to identify top earners and salary rankings.",

  interviewTip:
    "Mention both subquery and DENSE_RANK() approaches.",
},

{
  id: "sql-coding-2",
  question: "Find the Third Highest Salary",
  difficulty: "Intermediate",

  shortAnswer:
    "Use nested subqueries or DENSE_RANK() to retrieve the third highest distinct salary.",

  detailedAnswer: `The third highest salary is an extension of the second highest salary problem.

Example:

Salaries:
90000
80000
70000
60000

Output:
70000

Approaches:
1. Nested MAX() subqueries
2. DENSE_RANK()
3. LIMIT/OFFSET

DENSE_RANK is generally preferred for readability and scalability.`,

  keyPoints: [
    "Extension of second highest salary",
    "Can use ranking functions",
    "Tests SQL problem-solving",
    "Frequently asked in interviews",
    "Works with DISTINCT salaries"
  ],

  codeExample: `SELECT salary
FROM (
  SELECT DISTINCT salary,
         DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) ranked
WHERE rnk = 3;`,

  language: "sql",

  commonMistakes: [
    "Using RANK instead of DENSE_RANK",
    "Not removing duplicates",
    "Incorrect ordering",
    "Missing subquery alias",
    "Ignoring NULL salaries"
  ],

  thinkingProcess: `Step 1: Rank salaries descending
Step 2: Assign dense ranks
Step 3: Select rank 3
Step 4: Return salary`,

  realWorldApplication:
    "Useful for compensation analysis and employee ranking systems.",

  interviewTip:
    "Window functions are usually preferred in modern SQL interviews.",
},

{
  id: "sql-coding-3",
  question: "Find the Nth Highest Salary",
  difficulty: "Intermediate",

  shortAnswer:
    "Use DENSE_RANK() and filter by the required rank value to find the Nth highest salary.",

  detailedAnswer: `This is a generalized version of second and third highest salary questions.

Example:

N = 5

Output:
Returns the 5th highest distinct salary.

The best solution uses DENSE_RANK() because it handles duplicate salaries correctly.

Benefits:
- Flexible
- Reusable
- Works for any N value`,

  keyPoints: [
    "Generalized salary ranking problem",
    "Uses DENSE_RANK()",
    "Handles duplicates",
    "Scalable solution",
    "Common interview question"
  ],

  codeExample: `SELECT salary
FROM (
  SELECT salary,
         DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) ranked
WHERE rnk = N;`,

  language: "sql",

  commonMistakes: [
    "Using ROW_NUMBER incorrectly",
    "Ignoring duplicate salaries",
    "Hardcoding values",
    "Wrong ranking order",
    "Using LIMIT improperly"
  ],

  thinkingProcess: `Step 1: Sort salaries descending
Step 2: Apply DENSE_RANK
Step 3: Filter desired rank
Step 4: Return salary`,

  realWorldApplication:
    "Used in payroll systems and employee performance rankings.",

  interviewTip:
    "Always explain why DENSE_RANK is better than ROW_NUMBER for duplicates.",
},

{
  id: "sql-coding-4",
  question: "Find Duplicate Records",
  difficulty: "Intermediate",

  shortAnswer:
    "Use GROUP BY with HAVING COUNT(*) > 1 to identify duplicate records.",

  detailedAnswer: `Duplicate records often occur because of data-entry errors.

Problem:
Find duplicate email addresses.

Example:

Users

| id | email |
|----|-------|
| 1  | a@gmail.com |
| 2  | a@gmail.com |
| 3  | b@gmail.com |

Output:
a@gmail.com

Approach:
Group records and count occurrences.`,

  keyPoints: [
    "Uses GROUP BY",
    "Uses HAVING clause",
    "Detects duplicate data",
    "Improves data quality",
    "Frequently asked in interviews"
  ],

  codeExample: `SELECT email,
COUNT(*) AS total
FROM users
GROUP BY email
HAVING COUNT(*) > 1;`,

  language: "sql",

  commonMistakes: [
    "Using WHERE instead of HAVING",
    "Forgetting GROUP BY",
    "Ignoring NULL values",
    "Wrong grouping column",
    "Returning all records"
  ],

  thinkingProcess: `Step 1: Group records
Step 2: Count occurrences
Step 3: Filter counts > 1
Step 4: Return duplicates`,

  realWorldApplication:
    "Used in CRM systems to identify duplicate customers and records.",

  interviewTip:
    "HAVING is required because COUNT() is an aggregate function.",
},

{
  id: "sql-coding-5",
  question: "Delete Duplicate Records",
  difficulty: "Advanced",

  shortAnswer:
    "Delete duplicates while keeping one record using MIN(id) or ROW_NUMBER().",

  detailedAnswer: `After identifying duplicates, the next step is removing them safely.

Goal:
Keep one record and delete the rest.

Example:

Before:

1 a@gmail.com
2 a@gmail.com
3 b@gmail.com

After:

1 a@gmail.com
3 b@gmail.com

Approaches:
1. MIN(id)
2. ROW_NUMBER()
3. CTE (Common Table Expression)

Best Practice:
Use ROW_NUMBER() for large datasets.`,

  keyPoints: [
    "Removes duplicate rows",
    "Keeps one original record",
    "Uses ROW_NUMBER()",
    "Improves data quality",
    "Common advanced SQL question"
  ],

  codeExample: `DELETE FROM users
WHERE id NOT IN (
  SELECT MIN(id)
  FROM users
  GROUP BY email
);`,

  language: "sql",

  commonMistakes: [
    "Deleting all duplicates",
    "No backup before delete",
    "Wrong grouping column",
    "Ignoring transactions",
    "Accidentally deleting unique records"
  ],

  thinkingProcess: `Step 1: Identify duplicates
Step 2: Keep smallest ID
Step 3: Delete remaining rows
Step 4: Verify results`,

  realWorldApplication:
    "Data-cleaning jobs frequently remove duplicate customer and order records.",

  interviewTip:
    "Always mention ROW_NUMBER() as the modern solution."
},
{
  id: "sql-coding-6",
  question: "Highest Salary Per Department",
  difficulty: "Intermediate",

  shortAnswer:
    "Use GROUP BY with MAX() or a window function like DENSE_RANK() to find the highest salary in each department.",

  detailedAnswer: `This question tests grouping and aggregation skills.

Problem:
Find employees who earn the highest salary in each department.

Example:

Employees

| name  | department | salary |
|--------|------------|---------|
| John   | IT         | 80000   |
| Alice  | IT         | 90000   |
| Bob    | HR         | 70000   |
| Sarah  | HR         | 85000   |

Output:

Alice  IT  90000
Sarah  HR  85000

Approaches:
1. GROUP BY + MAX()
2. Subquery
3. DENSE_RANK()

Best Practice:
Use DENSE_RANK() when employee details are required.`,

  keyPoints: [
    "Uses aggregation",
    "Department-wise grouping",
    "MAX salary per department",
    "Can use window functions",
    "Frequently asked interview question"
  ],

  codeExample: `SELECT name,
       department,
       salary
FROM (
    SELECT *,
           DENSE_RANK() OVER(
             PARTITION BY department
             ORDER BY salary DESC
           ) AS rnk
    FROM employees
) t
WHERE rnk = 1;`,

  language: "sql",

  commonMistakes: [
    "Using MAX without employee details",
    "Missing PARTITION BY",
    "Wrong ordering",
    "Using GROUP BY incorrectly",
    "Ignoring salary ties"
  ],

  thinkingProcess: `Step 1: Group by department
Step 2: Rank salaries
Step 3: Pick rank 1
Step 4: Return employee details`,

  realWorldApplication:
    "Used in payroll, HR analytics, and compensation reporting.",

  interviewTip:
    "Mention both GROUP BY and window-function solutions.",
},

{
  id: "sql-coding-7",
  question: "Employees More Than Manager",
  difficulty: "Intermediate",

  shortAnswer:
    "Use a self join to compare an employee's salary with their manager's salary.",

  detailedAnswer: `This is one of the most popular SQL self-join questions.

Problem:
Find employees earning more than their manager.

Table:

Employees

| id | name  | salary | manager_id |
|----|-------|---------|------------|
| 1  | John  | 70000   | 3          |
| 2  | Alice | 90000   | 3          |
| 3  | Mike  | 80000   | NULL       |

Output:

Alice

Approach:
Join employees table with itself using manager_id.`,

  keyPoints: [
    "Uses SELF JOIN",
    "Compares employee and manager salary",
    "Popular interview question",
    "Tests relationship understanding",
    "Requires aliases"
  ],

  codeExample: `SELECT e.name
FROM employees e
JOIN employees m
ON e.manager_id = m.id
WHERE e.salary > m.salary;`,

  language: "sql",

  commonMistakes: [
    "Incorrect join condition",
    "Missing aliases",
    "Comparing wrong salaries",
    "Ignoring NULL managers",
    "Wrong table references"
  ],

  thinkingProcess: `Step 1: Self join employees table
Step 2: Match manager IDs
Step 3: Compare salaries
Step 4: Return employee names`,

  realWorldApplication:
    "Used in HR systems to analyze organizational salary structures.",

  interviewTip:
    "This question is mainly testing your knowledge of self joins.",
},

{
  id: "sql-coding-8",
  question: "Top 3 Salaries Per Department",
  difficulty: "Advanced",

  shortAnswer:
    "Use DENSE_RANK() partitioned by department and filter ranks less than or equal to 3.",

  detailedAnswer: `This question combines grouping and window functions.

Problem:
Find the top 3 salaries in each department.

Approach:
1. Partition by department
2. Rank salaries descending
3. Filter top 3 ranks

Benefits:
- Handles ties
- Scalable
- Efficient for analytics`,

  keyPoints: [
    "Uses DENSE_RANK()",
    "Partition by department",
    "Returns top 3 salaries",
    "Advanced SQL question",
    "Uses window functions"
  ],

  codeExample: `SELECT *
FROM (
    SELECT *,
           DENSE_RANK() OVER(
               PARTITION BY department
               ORDER BY salary DESC
           ) AS rnk
    FROM employees
) t
WHERE rnk <= 3;`,

  language: "sql",

  commonMistakes: [
    "Using LIMIT globally",
    "Missing PARTITION BY",
    "Using ROW_NUMBER incorrectly",
    "Wrong ranking order",
    "Ignoring salary ties"
  ],

  thinkingProcess: `Step 1: Partition by department
Step 2: Rank salaries
Step 3: Keep top 3 ranks
Step 4: Return results`,

  realWorldApplication:
    "Used for departmental salary analysis and performance reporting.",

  interviewTip:
    "DENSE_RANK is preferred because it handles duplicate salaries correctly.",
},

{
  id: "sql-coding-9",
  question: "Customers Without Orders",
  difficulty: "Intermediate",

  shortAnswer:
    "Use LEFT JOIN and check for NULL values in the orders table.",

  detailedAnswer: `This question tests join concepts.

Problem:
Find customers who never placed an order.

Tables:

Customers
Orders

Approach:
1. LEFT JOIN customers with orders
2. Find rows where order is NULL

Output:
Customers without any orders.`,

  keyPoints: [
    "Uses LEFT JOIN",
    "Checks NULL values",
    "Common interview question",
    "Tests join understanding",
    "Useful for business analytics"
  ],

  codeExample: `SELECT c.*
FROM customers c
LEFT JOIN orders o
ON c.id = o.customer_id
WHERE o.id IS NULL;`,

  language: "sql",

  commonMistakes: [
    "Using INNER JOIN",
    "Checking wrong column",
    "Missing NULL condition",
    "Incorrect join key",
    "Using WHERE incorrectly"
  ],

  thinkingProcess: `Step 1: LEFT JOIN tables
Step 2: Identify missing matches
Step 3: Filter NULL values
Step 4: Return customers`,

  realWorldApplication:
    "Marketing teams use this query to target inactive customers.",

  interviewTip:
    "LEFT JOIN + IS NULL is the classic solution.",
},

{
  id: "sql-coding-10",
  question: "Running Total Using Window Functions",
  difficulty: "Advanced",

  shortAnswer:
    "Use the SUM() window function with OVER() to calculate cumulative totals.",

  detailedAnswer: `Running totals are frequently used in analytics and reporting.

Problem:
Calculate cumulative sales totals.

Example:

| Date       | Sales |
|------------|-------|
| 2025-01-01 | 100   |
| 2025-01-02 | 200   |
| 2025-01-03 | 300   |

Output:

100
300
600

Approach:
Use SUM() OVER() with ORDER BY.`,

  keyPoints: [
    "Uses window functions",
    "Calculates cumulative totals",
    "Common reporting requirement",
    "Efficient and scalable",
    "Popular advanced SQL interview question"
  ],

  codeExample: `SELECT sale_date,
       amount,
       SUM(amount) OVER(
         ORDER BY sale_date
       ) AS running_total
FROM sales;`,

  language: "sql",

  commonMistakes: [
    "Missing ORDER BY",
    "Using GROUP BY instead",
    "Incorrect window definition",
    "Wrong sorting column",
    "Not understanding cumulative calculations"
  ],

  thinkingProcess: `Step 1: Order records
Step 2: Apply SUM window function
Step 3: Calculate cumulative values
Step 4: Return running totals`,

  realWorldApplication:
    "Used in banking, finance, sales dashboards, and revenue tracking systems.",

  interviewTip:
    "Window functions are the modern and most efficient solution for running totals.",
},
];
