export const promptQuestions = [
  {
    id: 'prompt-1',
    question: 'What is prompt engineering and why is it important?',
    difficulty: 'Basic',
    shortAnswer: 'Prompt engineering is the art of writing clear instructions to get better AI responses. It\'s important because good prompts = better outputs.',
    detailedAnswer: `Prompt engineering is the practice of crafting effective instructions to AI models like Claude to get the desired output quality, accuracy, and format.

WHY IT MATTERS:
- Same task, better prompt = massively better results
- Can solve complex problems with right framing
- Saves time debugging bad outputs
- Critical skill as AI becomes mainstream
- Applicable to all AI models (Claude, ChatGPT, etc.)

WHAT GOOD PROMPTING DOES:
- Gets morae accurate answers
- Saves tokens (be concise)
- Reduces hallucinations
- Improves consistency
- Handles edge cases better
- Produces formatted output correctly

WHAT BAD PROMPTING CAUSES:
- Irrelevant answers
- Incorrect information
- Wrong format
- Wasted time reprompting
- Frustration with AI tools

CORE PRINCIPLE:
The AI will do what you ask, but only if you ask clearly.
Good prompt = you think clearly about what you want
Bad prompt = confused thinking → confused output`,
    keyPoints: [
      'Prompts are instructions to AI models',
      'Better prompts = better results',
      'Clear thinking → clear prompts',
      'Works for all AI models',
      'Learnable skill with practice',
      'Saves time and tokens'
    ],
    codeExample: `// BAD PROMPT:
"Write code"
// ❌ Too vague. What code? What language? What does it do?

// GOOD PROMPT:
"Write a JavaScript function that takes an array of numbers and returns 
the sum. Include error handling for non-array inputs. Add comments 
explaining what the function does."
// ✅ Clear language, specific requirements, expected output format

// EXAMPLE INTERACTION:
User: "How do I learn React?"
AI: "Read the docs, take a course, build projects."
// ✓ Correct but generic

User: "I'm a beginner developer with HTML/CSS knowledge but no JavaScript. 
I want to learn React for building web apps. What's the best learning path, 
and what should I focus on first?"
AI: [More detailed, personalized guidance]
// ✓ Better prompt = better response

// BAD PROMPT for coding:
"Debug this code"
[no code provided]
// ❌ No code to debug!

// GOOD PROMPT for coding:
"Here's my React component. When I click the button, the counter 
doesn't increment. What's wrong?

\`\`\`javascript
function Counter() {
  const count = 0;
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count++}>Increment</button>
    </div>
  );
}
\`\`\`

I expect the count to increase each time I click."
// ✅ Clear problem, code provided, expected behavior explained`,
    language: 'text',
    commonMistakes: [
      'Being too vague ("Help me with my project")',
      'Not providing necessary context',
      'Asking multiple unrelated questions',
      'Not specifying output format',
      'Expecting AI to read your mind',
      'Not being clear about constraints'
    ],
    thinkingProcess: `Step 1: Understand what prompt engineering is
Step 2: Recognize its importance for productivity
Step 3: See examples of bad vs good prompts
Step 4: Understand the core principle
Step 5: Commit to using clear prompts`,
    realWorldApplication: 'As developers, you\'ll use AI for code help, learning, debugging. Good prompts get you better answers faster.',
    interviewTip: 'Show you understand how to work effectively with AI tools. This is becoming an essential developer skill.'
  },

  {
    id: 'prompt-2',
    question: 'What are the key principles of effective prompting?',
    difficulty: 'Intermediate',
    shortAnswer: 'Be specific, provide context, give examples, be clear about output format, iterate.',
    detailedAnswer: `There are 6 core principles for writing effective prompts:

1. BE SPECIFIC
- Don't say "write code", say "write a React component that..."
- Don't say "explain this", say "explain in a way a beginner understands"
- Specificity dramatically improves output quality

2. PROVIDE CONTEXT
- Give background information
- Explain what you're trying to accomplish
- Share constraints (time, tech stack, audience)
- Context helps AI understand your real need

3. GIVE EXAMPLES
- Show what good output looks like
- Provide sample data if relevant
- Examples are 10x more powerful than descriptions
- "Show by example" saves time explaining

4. SPECIFY OUTPUT FORMAT
- "Return as JSON", "Write in bullet points", "Use markdown"
- Format requirements prevent reformatting work
- Be explicit about structure you want

5. DEFINE YOUR AUDIENCE
- "Explain for a beginner" vs "for senior engineers"
- "Non-technical audience" vs "technical"
- Same content, very different approaches

6. ITERATE AND REFINE
- First response is rarely perfect
- Ask follow-up questions
- Refine based on what you get
- Build conversation, not one-shot prompts`,
    keyPoints: [
      'Specific beats vague always',
      'Context helps AI understand your need',
      'Examples > descriptions',
      'Output format matters',
      'Consider your audience',
      'Iterate to refine results'
    ],
    codeExample: `// PRINCIPLE 1: BE SPECIFIC
❌ "Write a function"
✅ "Write a JavaScript function that validates email addresses. 
    It should accept valid formats like user@domain.com and reject 
    invalid ones like user@domain or user.domain"

// PRINCIPLE 2: PROVIDE CONTEXT
❌ "How do I build a website?"
✅ "I'm building a real estate website. I have 5 years of React experience 
    and know Node.js. I want to let users search properties by price 
    and location. What technology should I use and why?"

// PRINCIPLE 3: GIVE EXAMPLES
❌ "Format this data"
✅ "Format this data as a JSON response. 
    For example:
    Input: user named John, age 30
    Output:
    {
      \"name\": \"John\",
      \"age\": 30
    }
    
    Now format: user named Sarah, age 25"

// PRINCIPLE 4: SPECIFY OUTPUT FORMAT
❌ "Explain React hooks"
✅ "Explain React hooks in bullet points (4-5 main points). 
    For each point, include a one-line code example. 
    Format using markdown."

// PRINCIPLE 5: DEFINE YOUR AUDIENCE
❌ "What is REST API?"
✅ "Explain what a REST API is to someone who knows JavaScript 
    but is new to backend development. Use a real example."

// PRINCIPLE 6: ITERATE
Initial: "Write a React component for a login form"
AI: [Basic component]
You: "Can you add password strength validation?"
AI: [Better component]
You: "Add styling with Tailwind CSS"
AI: [Final polished component]`,
    language: 'text',
    commonMistakes: [
      'Using all 6 principles at once (overkill)',
      'Providing too much context (information overload)',
      'Being too vague about format',
      'Not iterating (accepting first response)',
      'Forgetting to specify output format',
      'Not giving examples'
    ],
    thinkingProcess: `Step 1: Learn each of the 6 principles
Step 2: Understand why each helps
Step 3: See examples of each principle
Step 4: Practice applying them
Step 5: Make it habit for all prompts`,
    realWorldApplication: 'These principles apply whether you\'re prompting Claude, ChatGPT, or any other AI. They\'re universal for getting better responses.',
    interviewTip: 'If asked about AI tools, mention these principles. Shows you think systematically about human-AI interaction.'
  },

  {
    id: 'prompt-3',
    question: 'How do you structure a prompt for maximum clarity?',
    difficulty: 'Intermediate',
    shortAnswer: 'Use a clear structure: Task, Context, Constraints, Examples, Output Format.',
    detailedAnswer: `A well-structured prompt follows a logical pattern that makes it easy for AI to understand what you want.

RECOMMENDED STRUCTURE:

1. TASK (What do you want?)
- Clear statement of what you're asking for
- Be direct and specific

2. CONTEXT (Why and where?)
- Background information
- What you're building/working on
- Your experience level
- Relevant constraints

3. CONSTRAINTS (What are the limits?)
- Technical constraints (tech stack, performance)
- Time/scope constraints
- Quality standards
- Audience/user considerations

4. EXAMPLES (Show, don't tell)
- Sample input/output
- Desired format
- What good looks like
- What to avoid

5. OUTPUT FORMAT (How should it look?)
- Code language, JSON, markdown, etc.
- Structure and organization
- Any specific formatting preferences

OPTIONAL:
6. FOLLOW-UP (What's next?)
- Make clear you'll ask follow-ups
- Ask for clarity if needed

WHY THIS WORKS:
- Mirrors how humans give instructions
- Progressively builds understanding
- Reduces ambiguity
- Saves back-and-forth iterations
- AI can follow clear structure`,
    keyPoints: [
      'Structure reduces ambiguity',
      'Task → Context → Constraints → Examples → Format',
      'Each section has a purpose',
      'Clear structure = better results',
      'Can adapt structure to situation',
      'Practice makes it natural'
    ],
    codeExample: `// POORLY STRUCTURED PROMPT:
"I need help with a React component. It should fetch data and show 
users in a list. Also handle errors. Make it responsive. Use hooks. 
Oh, and add pagination. I work with React and the API returns JSON."

// PROBLEMS: Mixed order, unclear requirements, context scattered

// WELL-STRUCTURED PROMPT:

[TASK]
Write a React component that displays a paginated list of users 
fetched from an API.

[CONTEXT]
I'm building a user management dashboard. I have 5 years of React 
experience and use functional components with hooks. The API endpoint 
returns a JSON array of user objects.

[CONSTRAINTS]
- Use React hooks (useState, useEffect)
- Keep component under 150 lines
- API returns: { id, name, email, role }
- Show 10 users per page
- Handle loading and error states

[EXAMPLES]
Show pagination controls at the bottom (Previous/Next buttons)
Example data structure:
{
  "users": [
    { "id": 1, "name": "John", "email": "john@example.com", "role": "admin" }
  ],
  "total": 50
}

[OUTPUT FORMAT]
Return a complete, functional React component as code in a code block.
Include JSX, hooks, and error handling.
Add brief comments explaining key logic.

// RESULT: 
Clear, specific, AI can deliver exactly what's needed

// ANOTHER EXAMPLE - DEBUGGING:

[TASK]
Debug my React counter component - it's not updating the count.

[CONTEXT]
I'm learning React and trying to build a simple counter that increments 
when clicked. I know JavaScript basics but new to hooks.

[CONSTRAINTS]
- Must use React hooks (useState)
- Should work for incrementing and decrementing
- Simple is fine, no extra features needed

[THE CODE]
\`\`\`javascript
function Counter() {
  const count = 0;
  
  const increment = () => {
    count = count + 1;
    console.log(count);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
\`\`\`

[EXPECTED vs ACTUAL]
Expected: Clicking button increases count on screen
Actual: Count stays at 0, console shows increasing number but UI doesn't update

[OUTPUT FORMAT]
1. Explain what's wrong
2. Show corrected code
3. Explain why the fix works`,
    language: 'jsx',
    commonMistakes: [
      'Mixing task with examples (confusing)',
      'Putting output format first (AI confused about priority)',
      'Too much context (loses focus)',
      'No examples (less clarity)',
      'Unclear task statement',
      'Not stating constraints'
    ],
    thinkingProcess: `Step 1: Start with clear task
Step 2: Add relevant context
Step 3: List constraints
Step 4: Provide examples
Step 5: Specify output format
Step 6: Ask if any clarification needed`,
    realWorldApplication: 'This structure works for all prompting scenarios: coding help, learning, writing, debugging, analysis.',
    interviewTip: 'This shows systematic thinking about communication. Even if not asked directly, you can mention using clear structure for AI prompts.'
  },

  {
    id: 'prompt-4',
    question: 'What are common mistakes in prompting and how to avoid them?',
    difficulty: 'Intermediate',
    shortAnswer: 'Vagueness, missing context, no examples, wrong format, expecting mind-reading.',
    detailedAnswer: `Even with good understanding, it's easy to fall into prompting pitfalls. Here are the most common ones:

MISTAKE 1: BEING TOO VAGUE
- "Help me with my code" (what code? what problem?)
- "Explain this" (what? to whom?)
- Fix: Be specific about problem, context, and desired output

MISTAKE 2: MISSING CONTEXT
- "How do I do X?" without explaining situation
- "Debug this" without explaining what's broken
- Fix: Always explain WHY and the broader situation

MISTAKE 3: NO EXAMPLES
- Describing a format instead of showing it
- Explaining an edge case instead of demonstrating
- Fix: Always include examples of input/output

MISTAKE 4: WRONG OUTPUT FORMAT
- Getting JSON but needing CSV
- Getting prose but needing bullet points
- Fix: Explicitly state desired format upfront

MISTAKE 5: MULTIPLE UNRELATED QUESTIONS
- Asking 5 different things in one prompt
- AI picks one, confuses others
- Fix: One clear question per prompt

MISTAKE 6: ASSUMING AI KNOWS YOUR CONTEXT
- Referencing "the file" without sharing it
- Saying "it doesn't work" without error message
- Fix: Share all necessary information

MISTAKE 7: BEING IMPATIENT
- Accepting first response as final
- Not iterating to refine
- Fix: Ask follow-ups, iterate, refine

MISTAKE 8: CONFUSING OR CONTRADICTORY REQUIREMENTS
- "Make it simple but feature-rich"
- "Quick but high quality" (sometimes trade-offs)
- Fix: Be clear about priorities`,
    keyPoints: [
      'Vagueness is the #1 killer of good responses',
      'Context is essential',
      'Examples prevent misunderstanding',
      'State output format explicitly',
      'One clear question per prompt',
      'Iteration is normal and good'
    ],
    codeExample: `// MISTAKE 1: VAGUE
❌ "Help with my React code"
✅ "My React counter component isn't incrementing. Here's the code: [code]. 
    When I click the button, nothing happens. What's wrong?"

// MISTAKE 2: NO CONTEXT
❌ "How do I fetch data?"
✅ "I'm building a React app that fetches user data from an API. 
    I know React basics but new to async/await. How should I fetch 
    data in a useEffect hook?"

// MISTAKE 3: NO EXAMPLES
❌ "Format the user data as JSON"
✅ "Format this data as JSON. 
    Input: User John, age 30, email john@example.com
    Output format should be:
    {
      \"name\": \"John\",
      \"age\": 30,
      \"email\": \"john@example.com\"
    }"

// MISTAKE 4: NO OUTPUT FORMAT
❌ "Explain REST APIs"
✅ "Explain REST APIs in 3-4 bullet points. Include a brief code example 
    for each point. Format using markdown."

// MISTAKE 5: MULTIPLE QUESTIONS
❌ "What's React? How do I use hooks? What about useEffect? 
    And how do I fetch data?"
✅ "I'm learning React. What's the difference between useState and 
    useEffect hooks? When should I use each?"

// MISTAKE 6: MISSING CONTEXT
❌ "This doesn't work: [code]"
✅ "This React component should show a list of users, but I get an 
    error. Error message: 'Cannot read property map of undefined'. 
    Here's the code: [code]"

// MISTAKE 7: NOT ITERATING
First response: [Generic solution]
You: "Good, but can you also add error handling?"
AI: [Better solution with error handling]
You: "Can you add loading state too?"
AI: [Final polished solution]
✅ Iterating gets better results

// MISTAKE 8: CONTRADICTORY
❌ "Write a simple function that handles all edge cases and 
    is production-ready but quick to write"
✅ "Write a function to validate emails. Prioritize correctness 
    over features. It should handle most common cases. 
    I'll add edge cases later."`,
    language: 'text',
    commonMistakes: [
      'Repeating mistakes instead of learning',
      'Blaming AI for vague prompt results',
      'Not providing error messages',
      'Asking questions AI can\'t know answer to',
      'Assuming one prompt will get perfect result',
      'Not reading error messages carefully'
    ],
    thinkingProcess: `Step 1: Recognize common mistakes
Step 2: Identify which you tend to make
Step 3: Consciously avoid them
Step 4: When you get bad output, ask why
Step 5: Improve your prompting`,
    realWorldApplication: 'These mistakes apply to any AI tool. Recognizing and fixing them saves hours of frustration.',
    interviewTip: 'If asked "how do you work with AI tools?", mention that you\'re aware of common pitfalls and how to avoid them.'
  },

  {
    id: 'prompt-5',
    question: 'How do you use prompting for learning and understanding concepts?',
    difficulty: 'Intermediate',
    shortAnswer: 'Ask for explanations at your level, request examples, ask why not just what, iterate on understanding.',
    detailedAnswer: `AI is powerful for learning when you prompt it right. Here's how to use it effectively:

LEARNING PROMPTING TECHNIQUES:

1. REQUEST YOUR LEVEL
- Ask to explain for your knowledge level
- "Explain for someone with X background"
- AI adjusts depth and terminology

2. REQUEST MULTIPLE EXPLANATIONS
- Ask same thing in different ways
- "Explain like I'm 5" vs "Explain technically"
- Different angles increase understanding

3. ASK FOR EXAMPLES
- "Show me a real example of this concept"
- "What would this look like in practice?"
- Concrete examples > abstract concepts

4. REQUEST STEP-BY-STEP
- "Walk me through how this works"
- "What happens at each step?"
- Helps you understand the process

5. ASK WHY, NOT JUST WHAT
- "Why would you use this approach?"
- "What are the trade-offs?"
- Understanding the reasoning is important

6. REQUEST COMPARISONS
- "How is X different from Y?"
- "When would you use each?"
- Comparisons clarify concepts

7. ASK FOR COMMON MISTAKES
- "What's a common mistake with this?"
- "How would you troubleshoot if X happened?"
- Learn from others' errors

8. VERIFY YOUR UNDERSTANDING
- "In my own words, I think... Is that right?"
- "Would this code work for...?"
- Check that you actually understand`,
    keyPoints: [
      'Specify your knowledge level',
      'Ask for examples to understand',
      'Request step-by-step explanations',
      'Ask why, not just what',
      'Compare similar concepts',
      'Learn from common mistakes',
      'Verify your understanding'
    ],
    codeExample: `// LEARNING EXAMPLE 1: CLOSURES IN JAVASCRIPT

BAD PROMPT:
"Explain closures"

GOOD PROMPT (Your level):
"I understand JavaScript functions and scope. Can you explain closures 
for someone at that level? Include a real code example I'd see in React 
or Node.js."

BETTER PROMPT (Multiple angles):
"I'm learning about closures. Can you:
1. Explain what a closure is in simple terms
2. Show a real example from React (hooks, event handlers)
3. Explain why closures are useful
4. Show a common mistake with closures"

// LEARNING EXAMPLE 2: REACT HOOKS

GOOD STRUCTURE:
"I know React basics (components, props, state with classes). 
I'm learning hooks. Can you:

1. Explain how useState is different from class state
2. Show a simple example (counter component)
3. Walk me through how useState works step-by-step
4. When would I use useState vs other hooks?
5. What's a common mistake beginners make?"

// LEARNING EXAMPLE 3: ASYNC/AWAIT

ITERATIVE LEARNING:
You: "Explain async/await"
AI: [Explanation]

You: "Can you show how that's different from .then()?"
AI: [Comparison]

You: "In the promise example you showed, what happens if the API call fails?"
AI: [Error handling explanation]

You: "So I could use try/catch with async/await?"
AI: [Yes, here's how]

You: "Does async/await actually prevent blocking?"
AI: [Explains event loop, non-blocking nature]

// LEARNING EXAMPLE 4: VERIFYING UNDERSTANDING
You: "I think closures work like this: when a function is created, 
it remembers the variables from its parent scope, and those variables 
stay in memory as long as the function exists. Is that right? 
What am I missing?"

AI: [Confirms understanding, clarifies nuances]

// LEARNING EXAMPLE 5: COMMON MISTAKES
You: "What's a common mistake with closures in loops?"

AI: [Shows var vs let in for loops, explains why]

You: "How would I notice this problem?"

AI: [Shows error messages and debugging approaches]

// RESULT:
Deep understanding from iterative learning,
not just surface-level knowledge`,
    language: 'javascript',
    commonMistakes: [
      'Not stating your current knowledge level',
      'Accepting explanation you don\'t understand',
      'Not asking for examples',
      'Asking too broad ("teach me React")',
      'Not iterating to deepen understanding',
      'Not verifying you actually understand'
    ],
    thinkingProcess: `Step 1: Know what you don't understand
Step 2: Explain your current knowledge level
Step 3: Ask for examples and step-by-step
Step 4: Ask why things work that way
Step 5: Verify your understanding before moving on`,
    realWorldApplication: 'This is how you learn modern topics quickly. Combine AI learning with practice and you grow fast.',
    interviewTip: 'Show you use AI as a learning tool effectively. This demonstrates continuous learning, which employers love.'
  },

  {
    id: 'prompt-6',
    question: 'How do you use prompting for coding assistance and debugging?',
    difficulty: 'Intermediate',
    shortAnswer: 'Share code, error messages, expected vs actual behavior, ask specific questions.',
    detailedAnswer: `Getting good AI help for coding requires the right prompting approach.

CODING PROMPT BEST PRACTICES:

1. ALWAYS SHARE THE CODE
- Don't describe, show actual code
- Use code blocks for readability
- Include enough context to understand

2. SHARE ERROR MESSAGES
- Copy full error message
- Include stack trace if available
- AI uses error messages to diagnose

3. EXPLAIN EXPECTED vs ACTUAL
- What should happen?
- What actually happens?
- What have you tried?
- This helps narrow down issue

4. SPECIFY THE TASK
- "Debug this" vs "This button doesn't work"
- Be precise about the problem
- Include what you've already tried

5. GIVE CONSTRAINTS
- "Keep it under 50 lines"
- "Use React hooks only"
- "Must use this library"
- Constrains help AI stay focused

6. SHOW YOUR ATTEMPTS
- "I tried X, but it didn't work"
- "I also tried Y"
- Saves AI from suggesting same things

7. ASK FOR EXPLANATION
- "Here's the code. How does it work?"
- "Why does this approach work?"
- "What's different about this?"
- Learn while getting help

8. ITERATE STEP-BY-STEP
- Get working code first
- Then add features
- Then optimize
- Safer than trying everything at once`,
    keyPoints: [
      'Always share actual code',
      'Include error messages',
      'State expected vs actual behavior',
      'Be specific about what you want',
      'Show what you\'ve already tried',
      'Ask for explanation of solutions',
      'Iterate step-by-step'
    ],
    codeExample: `// BAD CODING PROMPT:
"My React component doesn't work. Can you fix it?"

// PROBLEMS: No code, no error, no context

// GOOD CODING PROMPT:

[TASK]
My React component should display a list of users fetched from an API. 
The data loads but users don't display.

[THE CODE]
\`\`\`javascript
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default UserList;
\`\`\`

[EXPECTED vs ACTUAL]
Expected: User names displayed in a list
Actual: Empty list, but console shows data is fetched correctly

[WHAT I'VE TRIED]
- Added console.log to see if data comes in (it does)
- Checked that users state is updated (it is)
- Verified key prop exists (it does)

[MY QUESTIONS]
1. What's causing the render issue?
2. Is there a better way to fetch data?
3. What performance improvements should I make?

---

// DEBUGGING EXAMPLE with ERROR MESSAGE:

[PROBLEM]
I'm getting an error when submitting a form. Here's the error:
"Cannot read property 'push' of undefined"

[THE CODE]
\`\`\`javascript
function handleSubmit(e) {
  e.preventDefault();
  const newUser = { name: email };
  users.push(newUser); // Line throwing error
  setUsers(users);
}
\`\`\`

[CONTEXT]
- users comes from useState
- This is a form submission handler
- Email comes from input value

[WHAT I TRIED]
- Checked that users is initialized (it is)
- Verified state is set properly (it is)

---

// FEATURE REQUEST EXAMPLE:

[TASK]
Add error handling to my API fetch

[CURRENT CODE]
\`\`\`javascript
const response = await fetch('/api/users');
const data = await response.json();
setUsers(data);
\`\`\`

[REQUIREMENTS]
- Show loading state while fetching
- Show error message if fetch fails
- Don't show error if loading
- Handle both network errors and API errors

[OUTPUT FORMAT]
Return complete component showing error handling
Include comments explaining the error handling approach

---

// LEARNING WHILE GETTING HELP:

Initial: "Here's my broken code, can you fix it?"
AI: [Fixed code]

You: "Good! Can you explain why that was broken?"
AI: [Explains the issue]

You: "What's the best practice here?"
AI: [Shows better approach]

You: "Show me how to test this?"
AI: [Testing examples]

// Result: You fix this bug AND learn to prevent it`,
    language: 'javascript',
    commonMistakes: [
      'Describing code instead of sharing it',
      'Not including error messages',
      'Not explaining what you expect vs what happens',
      'Sharing too little context',
      'Asking too vague ("Debug this")',
      'Not asking for explanations',
      'Assuming first solution is best'
    ],
    thinkingProcess: `Step 1: Prepare code to share
Step 2: Get error message (if any)
Step 3: Describe expected behavior
Step 4: Explain actual behavior
Step 5: Ask specific question
Step 6: Request explanation of solution`,
    realWorldApplication: 'Developers spend hours debugging. Good prompting can cut that time dramatically.',
    interviewTip: 'Employers want developers who can debug efficiently. Knowing how to get good AI help is part of modern debugging.'
  },

  {
    id: 'prompt-7',
    question: 'How do you avoid AI hallucinations and get reliable information?',
    difficulty: 'Intermediate',
    shortAnswer: 'Verify AI responses, ask for sources, test code before using, use follow-up questions.',
    detailedAnswer: `AI hallucinations (making up information) are real. Here's how to spot and prevent them.

WHAT ARE HALLUCINATIONS:
- AI confidently stating false information
- Making up function names that don't exist
- Inventing library syntax
- Confident but wrong answers
- Seems right but breaks when you test

WHY THEY HAPPEN:
- AI predicts next word based on patterns
- Doesn't have real-time knowledge
- Doesn't know what it doesn't know
- Can't say "I don't know" reliably
- Trained on potentially incorrect data

HOW TO SPOT THEM:
- Code doesn't work when you try it
- Information contradicts docs
- You can't find the thing it mentioned
- Suspiciously confident tone
- Other responses disagree

HOW TO PREVENT THEM:

1. TEST CODE BEFORE USING
- Don't trust code blindly
- Run it and verify it works
- Check error messages

2. VERIFY WITH OFFICIAL SOURCES
- Check documentation
- Look at official examples
- Compare with trusted sources
- Ask "Is this current?"

3. ASK FOR VERIFICATION
- "Can you cite a source for this?"
- "Is this from the official docs?"
- "When was this true?"
- AI may admit uncertainty

4. LOOK FOR CONTRADICTIONS
- Ask same thing different ways
- If answers differ, one might be wrong
- Most consistent answer is likely right

5. USE FOLLOW-UP QUESTIONS
- "How confident are you?"
- "What could go wrong here?"
- "Where would I verify this?"
- Pushes AI to be more careful

6. SLOW DOWN
- Don't believe at first glance
- Think critically about responses
- Does this make sense?
- Would it actually work?

7. KNOW YOUR SOURCE
- AI trained on web data (including wrong data)
- Doesn't have access to latest information
- May have incorrect patterns`,
    keyPoints: [
      'AI can sound confident while being wrong',
      'Always test code before using',
      'Verify with official documentation',
      'Test with multiple prompts',
      'Ask follow-up questions',
      'Be skeptical of confident-sounding wrong answers',
      'Use AI as helper, not authority'
    ],
    codeExample: `// HALLUCINATION EXAMPLE 1:

User: "Show me how to use the 'useState' hook in React"
AI: "Use the setStateValue hook to manage state"
// ❌ HALLUCINATION: "setStateValue" doesn't exist!

Fix: Ask for official React docs example
"Show me the official React documentation example of useState"

---

// HALLUCINATION EXAMPLE 2:

User: "What's the syntax for async/await in JavaScript?"
AI: "Use 'async function' and 'await' keyword. 
     Here's an example: await functionName()"
// ✓ This is correct

But what if it said:
AI: "Use 'async function' and 'wait' keyword"
// ❌ HALLUCINATION: It's 'await', not 'wait'

Test: Try to use 'wait' and it'll fail

---

// HOW TO PREVENT HALLUCINATIONS:

[GOOD PROMPT]
"Show me how to fetch data with async/await in React. 
Use official React documentation as reference. 
Include error handling. 
Test this code - is it correct?"

AI: [Provides code]
You: "Let me test this..." 
[Code works? Great!]
[Code fails? Ask why]

---

// VERIFICATION EXAMPLE:

User: "What's the latest Node.js version?"
AI: "Node.js 15 is the latest"
// Might be outdated (knowledge cutoff)

Better approach:
"What's the latest Node.js version according to the official Node.js website?"
// Asks for authoritative source

Or:
"Check nodejs.org to find the current LTS version"
// Directs AI to verify

---

// CATCHING HALLUCINATIONS:

Suspicious response:
"Use the npm package 'react-magical-state' for state management"
// Sounds good but... does it really exist?

Test: Search npm registry or GitHub
// If you can't find it, likely hallucination

Better prompt:
"Recommend a popular state management library for React.
Show me where to find it and how many downloads it has."
// Asks for verifiable info

---

// RED FLAGS FOR HALLUCINATIONS:

🚩 Very confident about something you're unsure of
🚩 Function/library name you can't find
🚩 Syntax different from official docs
🚩 Code that seems to work but has subtle bug
🚩 Information contradicting official documentation
🚩 "I'm confident this is right" (often before hallucinations)

---

// VERIFICATION TECHNIQUE:

Ask the same thing multiple ways:
1. "What's X?"
2. "Show me an example of X"
3. "Where would I find documentation for X?"
4. "How is X used in production?"

If answers are consistent, likely correct
If they contradict, likely hallucination`,
    language: 'javascript',
    commonMistakes: [
      'Trusting AI without verification',
      'Using code without testing',
      'Not checking official documentation',
      'Assuming confident tone means correct',
      'Not testing hallucination theories',
      'Not following up with questions'
    ],
    thinkingProcess: `Step 1: Remember AI can hallucinate
Step 2: Always verify important information
Step 3: Test code before using
Step 4: Check official sources
Step 5: Ask follow-up questions
Step 6: Think critically about responses`,
    realWorldApplication: 'Using AI without verification can introduce bugs and bad practices. Always verify.',
    interviewTip: 'Show you\'re a critical thinker who verifies information. This is an important developer skill.'
  },

  {
    id: 'prompt-8',
    question: 'What are advanced prompting techniques for complex tasks?',
    difficulty: 'Advanced',
    shortAnswer: 'Chain-of-thought, role-playing, providing context examples, asking step-by-step reasoning.',
    detailedAnswer: `For complex problems, standard prompting isn't enough. Advanced techniques help with difficult tasks.

ADVANCED TECHNIQUE 1: CHAIN-OF-THOUGHT
- Ask AI to "think through" step-by-step
- "Show your reasoning at each step"
- Dramatically improves reasoning quality
- Especially for math, logic, complex problems

ADVANCED TECHNIQUE 2: ROLE-PLAYING
- "You are a senior React developer"
- "Pretend you're teaching someone"
- "You are an expert in databases"
- AI adapts responses to the role

ADVANCED TECHNIQUE 3: PROVIDING EXAMPLES
- Give example of how you want answers formatted
- Show good vs bad examples
- Let AI pattern-match to your style
- Very powerful for consistency

ADVANCED TECHNIQUE 4: ASKING FOR ALTERNATIVES
- "Provide 3 different approaches"
- "What are other ways to solve this?"
- "Show me the pros/cons of each"
- Helps you choose best solution

ADVANCED TECHNIQUE 5: BREAKING DOWN COMPLEX TASKS
- "First, do X. Then do Y. Finally do Z."
- Break into smaller steps
- AI handles complexity better
- Easier to iterate on each step

ADVANCED TECHNIQUE 6: CONSTRAINING THE OUTPUT
- "In exactly 100 words..."
- "Using only these technologies..."
- "Without using X..."
- Constraints force creativity and focus

ADVANCED TECHNIQUE 7: ASKING FOR CONFIDENCE
- "How confident are you in this answer?"
- "What could go wrong?"
- "What would you verify?"
- Reveals uncertainty and limitations

ADVANCED TECHNIQUE 8: META-PROMPTING
- "What's the best way to prompt you for this task?"
- "What information would help you give a better answer?"
- Let AI tell you what it needs
- Surprisingly effective`,
    keyPoints: [
      'Chain-of-thought improves reasoning',
      'Role-playing changes response style',
      'Examples guide output format',
      'Asking for alternatives shows options',
      'Breaking down simplifies complexity',
      'Constraints force focused responses',
      'Meta-prompting gets AI input',
      'Combine techniques for best results'
    ],
    codeExample: `// TECHNIQUE 1: CHAIN-OF-THOUGHT

WEAK: "Is this code correct?"
STRONG: "Is this code correct? Walk me through it step-by-step, 
explaining what happens at each line."

WEAK: "Design a system for user authentication"
STRONG: "Design a system for user authentication. Think through:
1. What security issues exist?
2. How do you prevent each issue?
3. What are trade-offs?
4. How would you implement it?"

---

// TECHNIQUE 2: ROLE-PLAYING

"Act as a senior React engineer reviewing my code. 
Identify issues, suggest improvements, and explain best practices."

"Pretend you're teaching React hooks to a beginner. 
Explain useState in a way they'd understand."

"You are a database architect. How would you design a schema for..."

---

// TECHNIQUE 3: PROVIDING EXAMPLES

WEAK: "Format this data"
STRONG: "Format this data in JSON. I want it structured like this:

Good example:
{
  \"success\": true,
  \"data\": [...],
  \"error\": null
}

Bad example (don't do this):
{
  \"response\": [...],
  \"status\": \"ok\"
}

Now format my data: ..."

---

// TECHNIQUE 4: ASKING FOR ALTERNATIVES

"Here's my approach to solving this problem: [approach]
1. Are there better ways?
2. What are pros/cons of each approach?
3. Which would you recommend for production code?"

Instead of: "Is this good?"
Better: "What are 3 different approaches to this problem?
Show me the trade-offs of each."

---

// TECHNIQUE 5: BREAKING DOWN COMPLEXITY

Instead of: "Build a full-featured user dashboard"
Better:
"I'm building a user dashboard in steps:

Step 1: Create a component that shows user info
Step 2: Add a section to show recent activity
Step 3: Add charts showing usage stats
Step 4: Add settings panel

For step 1, here's what I need: [details about step 1]"

---

// TECHNIQUE 6: CONSTRAINING OUTPUT

"Write a function that validates email addresses.
Constraints:
- Must be under 20 lines
- No external libraries
- Must handle 95% of valid emails
- Should reject obvious invalid formats"

Instead of vague request that generates bloated code

---

// TECHNIQUE 7: ASKING FOR CONFIDENCE

"Here's my understanding of React hooks. Is it correct?
[Your explanation]

Follow-up:
1. What's your confidence level in this explanation?
2. What would you verify first?
3. What could I be misunderstanding?"

---

// TECHNIQUE 8: META-PROMPTING

"I need help designing an API for a project.
Before you answer, what information would help you 
give the best possible suggestion?"

AI might respond with questions about:
- What the API does
- Scale expectations
- Team expertise
- Performance requirements
Then you provide that context for better answer

---

// COMBINING TECHNIQUES:

WEAK PROMPT:
"Help me debug my code"

STRONG PROMPT (multiple techniques):
[ROLE] "Act as an experienced Node.js developer"
[SPECIFICITY] "I have a memory leak in my server"
[CONTEXT] "The server runs fine for an hour, then crashes"
[EXAMPLE] "Error message: JavaScript heap out of memory"
[STEP-BY-STEP] "Walk me through how to:
1. Identify where memory is leaking
2. Check for common causes
3. Test the fix"
[CONSTRAINT] "Use only built-in Node.js tools"
[CONFIDENCE] "How confident are you in this approach?"`,
    language: 'text',
    commonMistakes: [
      'Using just one technique for complex problems',
      'Not breaking down complex tasks',
      'Forgetting to ask for alternatives',
      'Not using role-playing for specialized help',
      'Not combining techniques effectively',
      'Assuming basic prompting is enough'
    ],
    thinkingProcess: `Step 1: Identify the complexity level
Step 2: Choose appropriate techniques
Step 3: Combine 2-3 techniques
Step 4: Be specific about what you want
Step 5: Ask for reasoning and confidence`,
    realWorldApplication: 'Complex problems require sophisticated prompting. Learn these for maximum AI effectiveness.',
    interviewTip: 'If asked about AI tools, mentioning advanced techniques shows deep understanding and sophistication.'
  }
];