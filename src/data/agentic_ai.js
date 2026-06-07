export const agenticQuestions = [

  {
    id: 'agentic-1',

    question: 'What is an AI Agent?',

    difficulty: 'Basic',

    shortAnswer: 'An AI Agent is a system that can perceive information, make decisions, and take actions to achieve goals.',

    detailedAnswer: `An AI Agent is a software system that acts autonomously.

Core Capabilities:

- Perceives environment
- Makes decisions
- Takes actions
- Learns from feedback

Examples:

- ChatGPT Agent
- Autonomous Customer Support Bots
- AI Research Agents
- Self-driving systems

AI Agents are a major part of modern AI applications.`,

    keyPoints: [

      'Acts autonomously',

      'Makes decisions',

      'Performs tasks',

      'Goal-oriented',

      'Can interact with tools'

    ],

    codeExample: `const agent = {

  goal: "Answer Questions",

  think() {

    return "Analyzing...";

  },

  act() {

    return "Responding";

  }

};

console.log(agent.act());`,

    language: 'javascript',

    commonMistakes: [

      'Confusing AI agents with chatbots',

      'Assuming agents are always autonomous',

      'Ignoring planning capability',

      'Not understanding tool usage',

      'Overestimating capabilities'

    ],

    thinkingProcess: `Step 1: Receive goal

Step 2: Analyze information

Step 3: Make decision

Step 4: Take action

Step 5: Evaluate result`,

    realWorldApplication: 'Used in customer support, automation, research assistants, coding assistants, and autonomous workflows.',

    interviewTip: 'An AI Agent is an autonomous system that observes, decides, and acts toward a goal.'

  },
  
{
  id: 'agentic-2',

  question: 'How is an AI Agent different from a Chatbot?',

  difficulty: 'Basic',

  shortAnswer: 'A chatbot mainly responds to messages, while an AI agent can reason, plan, use tools, and perform actions to achieve goals.',

  detailedAnswer: `Although both interact with users, they are not the same.

Chatbot:

- Answers questions
- Follows conversation flow
- Usually reactive

AI Agent:

- Has goals
- Makes decisions
- Uses tools
- Executes tasks
- Can work autonomously

Example:

Chatbot:

"What's the weather today?"

Returns weather information.

AI Agent:

Checks weather, books a trip, sends an email, and updates a calendar automatically.

Modern AI agents often use Large Language Models (LLMs) as their reasoning engine.`,

  keyPoints: [

    'Chatbots are conversational',

    'Agents are goal-oriented',

    'Agents can use tools',

    'Agents can perform actions',

    'Agents have greater autonomy'

  ],

  codeExample: `// Chatbot

function reply(message) {

  return "Hello User";

}




// AI Agent

async function agent(task) {

  const plan = "Analyze Task";

  const action = "Execute Tool";

  return action;

}`,

  language: 'javascript',

  commonMistakes: [

    'Thinking every chatbot is an agent',

    'Ignoring tool usage',

    'Confusing automation with intelligence',

    'Assuming agents are always autonomous',

    'Not understanding planning capabilities'

  ],

  thinkingProcess: `Step 1: Receive goal

Step 2: Analyze objective

Step 3: Create plan

Step 4: Use tools

Step 5: Complete task`,

  realWorldApplication: 'Used in autonomous assistants, customer support automation, coding assistants, and workflow automation.',

  interviewTip: 'Chatbots answer questions. AI Agents achieve goals through reasoning and actions.'

},
{
  id: 'agentic-3',

  question: 'What are the Components of an AI Agent?',

  difficulty: 'Basic',

  shortAnswer: 'The main components of an AI Agent are goals, memory, reasoning, planning, tools, and actions.',

  detailedAnswer: `AI Agents are built using multiple components that work together.

Core Components:

1. Goal

Defines what the agent must achieve.

2. Memory

Stores previous information.

3. Reasoning Engine

Analyzes situations and makes decisions.

4. Planning

Creates steps to reach a goal.

5. Tools

External resources the agent can use.

6. Actions

Tasks performed by the agent.

These components enable agents to solve complex problems autonomously.`,

  keyPoints: [

    'Goal',

    'Memory',

    'Reasoning',

    'Planning',

    'Tools and Actions'

  ],

  codeExample: `const agent = {

  goal: "Book Meeting",

  memory: [],

  tools: ["Calendar"],

  reason() {

    return "Create Plan";

  }

};`,

  language: 'javascript',

  commonMistakes: [

    'Ignoring memory',

    'No clear goal',

    'Missing tool integration',

    'Weak planning process',

    'Overcomplicated design'

  ],

  thinkingProcess: `Step 1: Set goal

Step 2: Analyze context

Step 3: Plan actions

Step 4: Use tools

Step 5: Complete objective`,

  realWorldApplication: 'Used in autonomous assistants, workflow automation, and AI-powered business systems.',

  interviewTip: 'Goal, Memory, Reasoning, Planning, Tools, and Actions are the core building blocks of AI Agents.'

},
{
  id: 'agentic-4',

  question: 'What is Agentic AI?',

  difficulty: 'Intermediate',

  shortAnswer: 'Agentic AI refers to AI systems that can independently plan, reason, and take actions to achieve goals.',

  detailedAnswer: `Traditional AI responds to prompts.

Agentic AI goes beyond simple responses by:

- Setting plans
- Making decisions
- Using tools
- Performing tasks
- Adapting to changing situations

Characteristics:

- Autonomy
- Reasoning
- Goal-driven behavior
- Tool usage
- Continuous execution

Agentic AI is considered the next evolution of AI applications.`,

  keyPoints: [

    'Goal-driven AI',

    'Autonomous behavior',

    'Decision-making capability',

    'Uses tools',

    'Performs actions'

  ],

  codeExample: `const objective =

"Research Topic";

const plan =

["Search", "Analyze", "Summarize"];

for (const step of plan) {

  console.log(step);

}`,

  language: 'javascript',

  commonMistakes: [

    'Confusing with chatbots',

    'Ignoring planning',

    'No tool integration',

    'Overestimating autonomy',

    'Poor task decomposition'

  ],

  thinkingProcess: `Step 1: Receive goal

Step 2: Analyze problem

Step 3: Create plan

Step 4: Execute actions

Step 5: Evaluate outcome`,

  realWorldApplication: 'Used in AI research assistants, autonomous coding tools, and enterprise automation.',

  interviewTip: 'Agentic AI focuses on autonomous goal completion rather than simple prompt-response interactions.'

},
{
  id: 'agentic-5',

  question: 'What are the Types of AI Agents?',

  difficulty: 'Intermediate',

  shortAnswer: 'Common AI Agent types include Reactive Agents, Model-Based Agents, Goal-Based Agents, Utility-Based Agents, and Learning Agents.',

  detailedAnswer: `AI Agents can be classified based on how they make decisions.

1. Reactive Agents

Respond directly to inputs.

2. Model-Based Agents

Maintain internal state.

3. Goal-Based Agents

Work toward defined goals.

4. Utility-Based Agents

Choose actions that maximize value.

5. Learning Agents

Improve through experience.

Modern LLM Agents often combine multiple agent types.`,

  keyPoints: [

    'Reactive Agents',

    'Model-Based Agents',

    'Goal-Based Agents',

    'Utility-Based Agents',

    'Learning Agents'

  ],

  codeExample: `const agentTypes = [

  "Reactive",

  "Model-Based",

  "Goal-Based",

  "Utility-Based",

  "Learning"

];

console.log(agentTypes);`,

  language: 'javascript',

  commonMistakes: [

    'Using wrong agent type',

    'Ignoring learning capability',

    'No clear goals',

    'Overcomplicating agent design',

    'Confusing utility and goal-based agents'

  ],

  thinkingProcess: `Step 1: Identify environment

Step 2: Choose agent type

Step 3: Define goals

Step 4: Execute actions

Step 5: Improve performance`,

  realWorldApplication: 'Used in robotics, autonomous systems, recommendation engines, and AI assistants.',

  interviewTip: 'Goal-Based and Learning Agents are frequently discussed in modern AI interviews.'

},
{
  id: 'agentic-6',

  question: 'What is Planning in AI Agents?',

  difficulty: 'Intermediate',

  shortAnswer: 'Planning is the process of breaking a goal into smaller steps that an AI Agent can execute to achieve the desired outcome.',

  detailedAnswer: `Planning helps an AI Agent determine how to accomplish a task.

Instead of immediately taking action, the agent first creates a strategy.

Example Goal:

"Book a flight"

Plan:

1. Search flights
2. Compare prices
3. Select flight
4. Confirm booking
5. Send confirmation

Benefits:

- Better decision making
- Reduced errors
- Efficient execution
- Improved autonomy

Planning is one of the key capabilities that differentiates AI Agents from traditional chatbots.`,

  keyPoints: [

    'Breaks goals into steps',

    'Improves decision making',

    'Supports autonomy',

    'Reduces errors',

    'Core agent capability'

  ],

  codeExample: `const goal =

"Book Flight";

const plan = [

"Search Flights",

"Compare Prices",

"Book Ticket"

];

console.log(plan);`,

  language: 'javascript',

  commonMistakes: [

    'Skipping planning phase',

    'Creating vague plans',

    'Ignoring dependencies',

    'Too many unnecessary steps',

    'No goal definition'

  ],

  thinkingProcess: `Step 1: Understand goal

Step 2: Divide into tasks

Step 3: Prioritize actions

Step 4: Execute plan

Step 5: Verify outcome`,

  realWorldApplication: 'Used in autonomous assistants, workflow automation, robotics, and task management systems.',

  interviewTip: 'Planning converts a goal into executable steps for the agent.'

},
{
  id: 'agentic-7',

  question: 'What is Memory in AI Agents?',

  difficulty: 'Intermediate',

  shortAnswer: 'Memory allows an AI Agent to store and recall information from previous interactions or tasks.',

  detailedAnswer: `Memory helps agents maintain context and improve decision making.

Types of Memory:

1. Short-Term Memory

Stores current conversation or task context.

2. Long-Term Memory

Stores information for future use.

Benefits:

- Context retention
- Personalization
- Better reasoning
- Improved user experience

Without memory, agents would treat every interaction as completely new.`,

  keyPoints: [

    'Stores information',

    'Maintains context',

    'Supports personalization',

    'Improves reasoning',

    'Can be short-term or long-term'

  ],

  codeExample: `const memory = [];

memory.push(

"User likes React"

);

console.log(memory);`,

  language: 'javascript',

  commonMistakes: [

    'Storing irrelevant data',

    'Memory overflow',

    'Ignoring privacy concerns',

    'No memory retrieval strategy',

    'Poor memory organization'

  ],

  thinkingProcess: `Step 1: Receive information

Step 2: Store memory

Step 3: Retrieve context

Step 4: Use in reasoning

Step 5: Update memory`,

  realWorldApplication: 'Used in AI assistants, recommendation systems, customer support agents, and personalized applications.',

  interviewTip: 'Memory helps agents remember past interactions and make smarter decisions.'

},
{
  id: 'agentic-8',

  question: 'What is Tool Calling?',

  difficulty: 'Intermediate',

  shortAnswer: 'Tool Calling allows an AI Agent to use external tools, APIs, databases, or functions to perform tasks beyond its built-in knowledge.',

  detailedAnswer: `LLMs can generate text, but tools allow them to take actions.

Examples of Tools:

- Weather API
- Calculator
- Database
- Search Engine
- Email Service

Example:

User asks:

"What's the weather in Mumbai?"

Agent:

1. Calls Weather API
2. Retrieves data
3. Returns answer

Tool Calling makes AI Agents significantly more powerful and useful.`,

  keyPoints: [

    'Uses external resources',

    'Extends agent capabilities',

    'Works with APIs',

    'Supports automation',

    'Essential for modern agents'

  ],

  codeExample: `async function getWeather() {

  return await weatherAPI();

}

const result =

getWeather();`,

  language: 'javascript',

  commonMistakes: [

    'Using wrong tools',

    'No error handling',

    'Too many tool calls',

    'Ignoring API limits',

    'Poor tool selection'

  ],

  thinkingProcess: `Step 1: Identify required tool

Step 2: Call tool

Step 3: Process result

Step 4: Generate response

Step 5: Complete task`,

  realWorldApplication: 'Used in AI assistants, booking systems, search agents, and automation platforms.',

  interviewTip: 'Tool Calling enables agents to interact with the real world through APIs and services.'

},{
  id: 'agentic-9',

  question: 'What is an LLM Agent?',

  difficulty: 'Intermediate',

  shortAnswer: 'An LLM Agent is an AI Agent powered by a Large Language Model that can reason, plan, use tools, and perform actions.',

  detailedAnswer: `LLM stands for Large Language Model.

Examples:

- GPT
- Claude
- Gemini
- Llama

An LLM Agent combines:

- Language understanding
- Reasoning
- Planning
- Memory
- Tool usage

Workflow:

User Request
↓

LLM Reasoning
↓

Planning
↓

Tool Usage
↓

Final Response

Most modern Agentic AI systems are built around LLM Agents.`,

  keyPoints: [

    'Powered by LLMs',

    'Can reason and plan',

    'Uses tools',

    'Supports memory',

    'Core of Agentic AI'

  ],

  codeExample: `const agent = {

  model: "GPT",

  tools: ["Search"],

  memory: []

};

console.log(agent);`,

  language: 'javascript',

  commonMistakes: [

    'Treating LLM as an agent',

    'Ignoring tool usage',

    'No memory layer',

    'Poor planning design',

    'Confusing chatbot and agent'

  ],

  thinkingProcess: `Step 1: Receive request

Step 2: Analyze task

Step 3: Create plan

Step 4: Use tools

Step 5: Return result`,

  realWorldApplication: 'Used in coding assistants, research agents, customer support systems, and autonomous workflows.',

  interviewTip: 'An LLM becomes an Agent when it gains planning, memory, and tool-using capabilities.'

},{
  id: 'agentic-10',

  question: 'What is the ReAct Framework?',

  difficulty: 'Advanced',

  shortAnswer: 'ReAct (Reason + Act) is an AI Agent framework where the model alternates between reasoning and taking actions to solve tasks.',

  detailedAnswer: `ReAct stands for:

Reason + Act

Instead of generating one final answer, the agent repeatedly:

1. Thinks (Reason)
2. Acts (Tool Call)
3. Observes Result
4. Thinks Again
5. Produces Final Answer

Example:

Question:
"What is the population of Japan?"

Reason:
"I need current data."

Action:
Search Web

Observation:
Population found

Final Answer:
Return result

ReAct improves problem solving and tool usage in AI Agents.`,

  keyPoints: [

    'Reason + Act',

    'Uses iterative thinking',

    'Supports tool calling',

    'Improves accuracy',

    'Popular agent framework'

  ],

  codeExample: `Thought:

"Need information"

Action:

Search()

Observation:

"Data received"

Final Answer:

"Result"`,

  language: 'javascript',

  commonMistakes: [

    'Skipping reasoning step',

    'Too many actions',

    'Poor observation handling',

    'Incorrect tool usage',

    'Ignoring feedback loop'

  ],

  thinkingProcess: `Step 1: Think

Step 2: Act

Step 3: Observe

Step 4: Think again

Step 5: Produce answer`,

  realWorldApplication: 'Used in LangChain agents, research assistants, autonomous workflows, and tool-calling AI systems.',

  interviewTip: 'ReAct = Reason → Act → Observe → Repeat.'

},{
  id: 'agentic-11',

  question: 'What is Chain of Thought (CoT)?',

  difficulty: 'Intermediate',

  shortAnswer: 'Chain of Thought (CoT) is a reasoning technique where an AI model breaks a problem into smaller logical steps before producing an answer.',

  detailedAnswer: `Chain of Thought improves reasoning by encouraging the model to think through a problem step-by-step.

Instead of:

Question → Answer

The process becomes:

Question
↓
Reasoning Steps
↓
Answer

Benefits:

- Better problem solving
- Improved accuracy
- Stronger logical reasoning
- Better performance on complex tasks

CoT is widely used in modern AI Agents and LLM applications.`,

  keyPoints: [

    'Step-by-step reasoning',

    'Improves accuracy',

    'Enhances problem solving',

    'Useful for complex tasks',

    'Popular prompting technique'

  ],

  codeExample: `Question:

What is 25 × 4?

Reasoning:

25 × 2 = 50

50 × 2 = 100

Answer:

100`,

  language: 'javascript',

  commonMistakes: [

    'Using CoT for simple tasks',

    'Overcomplicating reasoning',

    'Confusing CoT with planning',

    'Ignoring efficiency',

    'Expecting perfect reasoning'

  ],

  thinkingProcess: `Step 1: Understand problem

Step 2: Break into steps

Step 3: Solve each step

Step 4: Combine results

Step 5: Return answer`,

  realWorldApplication: 'Used in AI tutors, coding assistants, research systems, and advanced reasoning applications.',

  interviewTip: 'Chain of Thought encourages models to reason before answering.'

},{
  id: 'agentic-12',

  question: 'What is Retrieval-Augmented Generation (RAG)?',

  difficulty: 'Advanced',

  shortAnswer: 'RAG is an AI architecture that retrieves external information before generating a response.',

  detailedAnswer: `LLMs are limited by their training data.

RAG solves this by adding external knowledge retrieval.

Workflow:

User Query
↓

Retrieve Documents
↓

Provide Context
↓

LLM Generates Answer

Benefits:

- More accurate responses
- Access to latest information
- Reduced hallucinations
- Better enterprise applications

RAG is one of the most important concepts in modern AI systems.`,

  keyPoints: [

    'Combines retrieval and generation',

    'Uses external knowledge',

    'Improves accuracy',

    'Reduces hallucinations',

    'Popular enterprise AI architecture'

  ],

  codeExample: `const documents =

vectorSearch(

query

);

const response =

llm.generate(

documents

);`,

  language: 'javascript',

  commonMistakes: [

    'Poor document retrieval',

    'Low-quality embeddings',

    'Ignoring context limits',

    'Wrong chunk sizes',

    'Using outdated data'

  ],

  thinkingProcess: `Step 1: Receive query

Step 2: Retrieve documents

Step 3: Build context

Step 4: Generate answer

Step 5: Return response`,

  realWorldApplication: 'Used in ChatGPT-like knowledge bases, enterprise search, customer support, and document assistants.',

  interviewTip: 'RAG allows LLMs to answer using external knowledge sources.'

},{
  id: 'agentic-13',

  question: 'What is a Multi-Agent System?',

  difficulty: 'Advanced',

  shortAnswer: 'A Multi-Agent System is a collection of multiple AI agents that collaborate to solve tasks together.',

  detailedAnswer: `Instead of one agent doing everything, multiple specialized agents work together.

Example:

Research Agent

↓

Writer Agent

↓

Reviewer Agent

↓

Final Result

Benefits:

- Specialization
- Better scalability
- Improved task execution
- Parallel processing

Multi-Agent Systems are becoming increasingly popular in Agentic AI.`,

  keyPoints: [

    'Multiple agents',

    'Collaboration',

    'Task specialization',

    'Scalable architecture',

    'Improved performance'

  ],

  codeExample: `const agents = [

"ResearchAgent",

"WriterAgent",

"ReviewAgent"

];

console.log(agents);`,

  language: 'javascript',

  commonMistakes: [

    'Too many agents',

    'Poor communication',

    'Role overlap',

    'No coordination strategy',

    'Complex architecture'

  ],

  thinkingProcess: `Step 1: Divide tasks

Step 2: Assign agents

Step 3: Execute actions

Step 4: Share results

Step 5: Produce output`,

  realWorldApplication: 'Used in autonomous research systems, business automation, and collaborative AI workflows.',

  interviewTip: 'Multi-Agent Systems divide complex tasks among specialized agents.'

},
{
  id: 'agentic-15',

  question: 'What is LangGraph?',

  difficulty: 'Advanced',

  shortAnswer: 'LangGraph is a framework for building stateful, multi-step AI agent workflows using graph-based execution.',

  detailedAnswer: `LangGraph extends LangChain by enabling complex agent workflows.

Instead of simple chains:

Step A → Step B

LangGraph supports:

Step A
 ↙   ↘
B     C
 ↘   ↙
Step D

Benefits:

- Stateful workflows
- Multi-agent systems
- Human-in-the-loop support
- Complex orchestration

It is designed for advanced Agentic AI applications.`,

  keyPoints: [

    'Graph-based workflows',

    'State management',

    'Supports agents',

    'Complex orchestration',

    'Built on LangChain'

  ],

  codeExample: `const workflow =

new StateGraph()

.addNode("agent")

.addNode("tool")

.addEdge(

"agent",

"tool"

);`,

  language: 'javascript',

  commonMistakes: [

    'Overcomplicated graphs',

    'Poor state management',

    'Too many nodes',

    'Ignoring workflow design',

    'Using LangGraph for simple tasks'

  ],

  thinkingProcess: `Step 1: Define nodes

Step 2: Create edges

Step 3: Manage state

Step 4: Execute workflow

Step 5: Return result`,

  realWorldApplication: 'Used in advanced AI agents, workflow automation, multi-agent systems, and enterprise AI platforms.',

  interviewTip: 'LangGraph is ideal for building stateful and multi-agent AI workflows.'

},
{
  id: 'agentic-16',

  question: 'What is CrewAI?',

  difficulty: 'Intermediate',

  shortAnswer: 'CrewAI is a framework for creating multiple AI agents that collaborate as a team to complete tasks.',

  detailedAnswer: `CrewAI enables developers to build AI systems where multiple agents work together.

Core Concepts:

- Agents
- Tasks
- Crews
- Collaboration

Example:

Research Agent
↓

Content Writer Agent
↓

Editor Agent

↓

Final Output

Benefits:

- Agent specialization
- Better task delegation
- Improved productivity
- Easier multi-agent development

CrewAI is widely used for Agentic AI workflows.`,

  keyPoints: [

    'Multi-agent framework',

    'Agent collaboration',

    'Task delegation',

    'Role-based architecture',

    'Popular Agentic AI tool'

  ],

  codeExample: `const researcher =

new Agent();

const writer =

new Agent();

const crew = [

researcher,

writer

];`,

  language: 'javascript',

  commonMistakes: [

    'Creating too many agents',

    'Poor task assignment',

    'Role overlap',

    'No coordination strategy',

    'Complex workflows'

  ],

  thinkingProcess: `Step 1: Define agents

Step 2: Assign roles

Step 3: Create tasks

Step 4: Execute workflow

Step 5: Combine results`,

  realWorldApplication: 'Used in research automation, content generation, business workflows, and AI teams.',

  interviewTip: 'CrewAI focuses on collaborative multi-agent systems.'

},{
  id: 'agentic-17',

  question: 'What is AutoGen?',

  difficulty: 'Advanced',

  shortAnswer: 'AutoGen is a framework developed by Microsoft for building conversational multi-agent AI systems.',

  detailedAnswer: `AutoGen enables multiple AI agents to communicate and collaborate.

Features:

- Multi-agent conversations
- Human-agent collaboration
- Tool integration
- Autonomous workflows

Example:

User Agent
↓

Assistant Agent
↓

Tool Agent
↓

Final Result

AutoGen simplifies complex agent interactions and workflow orchestration.`,

  keyPoints: [

    'Developed by Microsoft',

    'Multi-agent framework',

    'Conversational agents',

    'Supports tools',

    'Autonomous workflows'

  ],

  codeExample: `const assistant =

new AssistantAgent();

const user =

new UserProxyAgent();

assistant.chat(

user

);`,

  language: 'javascript',

  commonMistakes: [

    'Poor agent communication',

    'Unclear agent roles',

    'Excessive conversations',

    'No termination condition',

    'Complex architecture'

  ],

  thinkingProcess: `Step 1: Create agents

Step 2: Define communication

Step 3: Assign tasks

Step 4: Exchange messages

Step 5: Generate result`,

  realWorldApplication: 'Used in coding assistants, research systems, enterprise automation, and AI collaboration platforms.',

  interviewTip: 'AutoGen specializes in agent-to-agent communication and collaboration.'

},{
  id: 'agentic-18',

  question: 'What is MCP (Model Context Protocol)?',

  difficulty: 'Advanced',

  shortAnswer: 'MCP (Model Context Protocol) is an open standard that allows AI models to securely connect with external tools, data sources, and applications.',

  detailedAnswer: `MCP is often described as:

"USB-C for AI Applications"

It provides a standardized way for AI models to access:

- Databases
- APIs
- Files
- Business Systems
- Development Tools

Benefits:

- Standardized integration
- Tool interoperability
- Better security
- Reduced custom development

MCP helps AI agents interact with external systems consistently.`,

  keyPoints: [

    'Open standard',

    'Tool integration',

    'External system access',

    'Improves interoperability',

    'Popular in Agentic AI'

  ],

  codeExample: `Client

↓

MCP Server

↓

Database/API

↓

Response`,

  language: 'javascript',

  commonMistakes: [

    'Confusing MCP with APIs',

    'Ignoring security',

    'Poor server configuration',

    'Incorrect tool permissions',

    'Complex integrations'

  ],

  thinkingProcess: `Step 1: Connect model

Step 2: Discover tools

Step 3: Request data

Step 4: Process response

Step 5: Return result`,

  realWorldApplication: 'Used for AI-powered IDEs, enterprise assistants, databases, and business integrations.',

  interviewTip: 'MCP provides a standard way for AI models to communicate with tools and services.'

},{
  id: 'agentic-19',

  question: 'Build a Simple AI Agent',

  difficulty: 'coding',

  shortAnswer: 'A simple AI Agent receives a goal, processes it, and returns an action or response.',

  detailedAnswer: `A basic AI Agent consists of:

- Goal
- Reasoning
- Action

Workflow:

Input
↓

Analyze

↓

Decide

↓

Respond

This demonstrates the fundamental structure of an AI Agent before adding memory or tools.`,

  keyPoints: [

    'Simple agent architecture',

    'Goal-driven behavior',

    'Reasoning process',

    'Action execution',

    'Foundation for advanced agents'

  ],

  codeExample: `class Agent {

  constructor(goal) {

    this.goal = goal;

  }

  act() {

    return \`Working on:

\${this.goal}\`;

  }

}

const agent =

new Agent(

"Answer Questions"

);

console.log(

agent.act()

);`,

  language: 'javascript',

  commonMistakes: [

    'No clear goal',

    'No action step',

    'Confusing agent with chatbot',

    'Overengineering solution',

    'Ignoring decision logic'

  ],

  thinkingProcess: `Step 1: Receive goal

Step 2: Analyze task

Step 3: Decide action

Step 4: Execute

Step 5: Return result`,

  realWorldApplication: 'Used as the foundation for virtual assistants and automation systems.',

  interviewTip: 'Every AI Agent starts with a goal, reasoning process, and action.'

},{
  id: 'agentic-20',

  question: 'Build a Tool-Calling Agent',

  difficulty: 'coding',

  shortAnswer: 'A Tool-Calling Agent can invoke external functions, APIs, or services to complete tasks beyond its built-in knowledge.',

  detailedAnswer: `Tool Calling is one of the most important capabilities of modern AI Agents.

Workflow:

User Request
↓

Agent Reasoning
↓

Tool Selection
↓

Tool Execution
↓

Response

Example:

User asks:

"Calculate 25 × 4"

Agent calls calculator tool.

Tool returns:

100

Agent responds with result.`,

  keyPoints: [

    'Uses external tools',

    'Extends capabilities',

    'Supports automation',

    'Core Agentic AI feature',

    'Works with APIs and functions'

  ],

  codeExample: `function calculator(

a,

b

) {

  return a * b;

}

class Agent {

  useTool() {

    return calculator(

      25,

      4

    );

  }

}

const agent =

new Agent();

console.log(

agent.useTool()

);

// 100`,

  language: 'javascript',

  commonMistakes: [

    'Calling wrong tool',

    'No error handling',

    'Ignoring tool results',

    'Poor tool selection',

    'No validation'

  ],

  thinkingProcess: `Step 1: Understand request

Step 2: Choose tool

Step 3: Execute tool

Step 4: Process output

Step 5: Return response`,

  realWorldApplication: 'Used in AI assistants, booking systems, coding agents, research agents, and enterprise automation.',

  interviewTip: 'Tool Calling transforms an LLM from a text generator into an action-taking AI Agent.'

},
];