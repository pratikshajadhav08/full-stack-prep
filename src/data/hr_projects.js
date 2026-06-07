export const hrQuestions = [
  {
    id: "hr-1",
    question: "Tell me about yourself and your professional background.",
    difficulty: "Basic",
    shortAnswer:
      "Brief overview of education, experience, skills, and current goals.",
    detailedAnswer: `This is your elevator pitch. Keep it to 1-2 minutes and cover:

1. Educational Background
- Degree and university
- Relevant coursework or specialization

2. Professional Experience
- Current role and company
- Key responsibilities
- Duration and progression

3. Key Skills
- Technical skills relevant to the role
- Soft skills (communication, leadership)
- Tools and technologies

4. Motivation
- Why you're interested in this role
- Career goals alignment
- What excites you about the position

5. Current Focus
- What you're learning
- Projects you're working on
- Growth areas`,
    keyPoints: [
      "Keep it concise (1-2 minutes)",
      "Tailor it to the job description",
      "Show progression and growth",
      "Mention relevant skills",
      "End with interest in the role",
      "Practice beforehand",
    ],
    codeExample: `// EXAMPLE ANSWER for you:
"Hi, I'm Pratiksha Jadhav, an MCA graduate from Shivaji University 
with hands-on experience in full-stack web development. 

I have a strong foundation in React.js, Node.js, and MongoDB, 
which I've applied in building responsive web applications 
and REST APIs. During my internship at Global Technologies, 
I developed a fully responsive Online Job Portal System, 
working with HTML, CSS, PHP, and MySQL.

More recently, I completed a rental booking platform project 
using React, Node.js, Express, and MongoDB, implementing 
features like user authentication, property listings, and 
dynamic search functionality.

I'm passionate about building scalable, user-friendly applications 
and staying current with modern web technologies. I'm particularly 
interested in this role because it aligns with my goal to deepen 
my full-stack expertise and work on impactful projects with a 
talented team."`,
    language: "text",
    commonMistakes: [
      "Making it too long (more than 2 minutes)",
      "Reading from a script (not engaging)",
      "Focusing only on technical skills (forgot soft skills)",
      "Not showing enthusiasm or passion",
      "Not connecting to the role",
      "Mentioning irrelevant details",
    ],
    thinkingProcess: `Step 1: Identify your unique value proposition
Step 2: Structure: background → experience → skills → goals
Step 3: Connect your experience to the job
Step 4: Show progression and learning mindset
Step 5: Practice saying it naturally (not scripted)`,
    realWorldApplication:
      "You will answer this in almost every interview. This answer is your foundation for the entire interview.",
    interviewTip:
      "Practice this until you can say it naturally without reading. Make eye contact, smile, and show genuine enthusiasm. This sets the tone for the entire interview.",
  },

  {
    id: "hr-2",
    question: "What are your strengths and weaknesses?",
    difficulty: "Basic",
    shortAnswer:
      "Strengths: real skills with examples. Weaknesses: challenges you're actively improving.",
    detailedAnswer: `This is a classic question. Answer honestly but strategically.

STRENGTHS (Pick 3-4):
- Choose qualities relevant to the job
- Back up with specific examples
- Show impact/results
- Be authentic, not arrogant

WEAKNESSES (Pick 1-2):
- Be honest (don't say "I work too hard")
- Choose something you're genuinely improving
- Show self-awareness
- Explain your action plan
- Demonstrate growth mindset

STRATEGY:
- Don't repeat what's already obvious
- Show self-awareness
- Prove you learn from feedback
- Connect to job requirements`,
    keyPoints: [
      "Strengths: use real examples with impact",
      "Weaknesses: show self-awareness and growth",
      "Avoid generic answers",
      "Connect strengths to job role",
      "Show active improvement on weaknesses",
      "Be humble yet confident",
    ],
    codeExample: `// STRENGTHS EXAMPLE:
"I would say my strongest strengths are:

1. Problem-solving ability - When building the rental booking platform,
I faced a complex filtering issue. I broke it down, researched solutions,
and implemented efficient filtering that improved user experience by 40%.

2. Adaptability - In my internship, I started with PHP/MySQL knowledge.
I quickly learned React and Node.js to meet project requirements,
and successfully delivered a modern full-stack application.

3. Communication - I document my code well and explain technical concepts
clearly to non-technical stakeholders, making collaboration seamless."

// WEAKNESSES EXAMPLE:
"One area I'm actively working on is public speaking in large groups.
I'm naturally more comfortable in one-on-one discussions or small teams.
To improve, I've started attending tech meetups and presenting my projects
to practice. I'm also reading 'Speak With No Fear' and plan to give
a talk at our local developer community next quarter."`,
    language: "text",
    commonMistakes: [
      'Claiming impossible strengths ("I\'m perfect at everything")',
      'Using obviously negative weaknesses ("I\'m bad at coding")',
      "Not backing up strengths with examples",
      "Choosing weaknesses irrelevant to the job",
      "Seeming defensive about weaknesses",
      "Not showing effort to improve",
    ],
    thinkingProcess: `Step 1: Pick strengths relevant to the role
Step 2: Prepare real examples showing impact
Step 3: Choose genuine weakness you're improving
Step 4: Show concrete actions you're taking
Step 5: Practice maintaining confidence while being honest`,
    realWorldApplication:
      "Employers want to see self-awareness and growth mindset. This answer reveals how you view yourself and your development.",
    interviewTip:
      "The weakness answer is actually a strength in disguise if you show self-awareness and commitment to growth. Employers love people who recognize areas for improvement and take action.",
  },

  {
    id: "hr-3",
    question:
      "Describe a challenging project you worked on and how you overcame obstacles.",
    difficulty: "Intermediate",
    shortAnswer:
      "Use STAR method: Situation, Task, Action, Result. Focus on your role and learning.",
    detailedAnswer: `Use the STAR method for maximum impact:

SITUATION:
- Set the context clearly
- What was the challenge?
- What were the constraints?
- Why was it difficult?

TASK:
- What was your responsibility?
- What was expected?
- What was at stake?

ACTION:
- What specific steps did you take?
- How did you solve it?
- Who did you collaborate with?
- What resources did you use?
- Show problem-solving approach

RESULT:
- What was the outcome?
- Quantify if possible (time saved, efficiency improved)
- What did you learn?
- How does it apply now?

TIPS:
- Use real examples from your experience
- Focus on your contributions (not "we")
- Show challenges you actually overcame
- Demonstrate learning and growth`,
    keyPoints: [
      "Use STAR method consistently",
      "Pick a genuinely challenging situation",
      "Show your specific contribution",
      "Quantify results when possible",
      "Explain what you learned",
      "Connect to current role",
    ],
    codeExample: `// STAR METHOD EXAMPLE using your experience:

SITUATION:
"During my internship at Global Technologies, I was tasked with 
building an Online Job Portal System. The challenge was implementing 
complex job search filters (by category, salary range, experience level) 
while maintaining fast performance. I had limited experience with 
filtering logic and the client expected the feature within 2 weeks."

TASK:
"I was responsible for the entire filtering feature - both backend logic 
and frontend UI. The feature needed to handle thousands of job listings 
and return results in under 2 seconds."

ACTION:
"I took these steps:
1. Researched filtering best practices and database indexing
2. Designed an efficient query structure in MySQL
3. Implemented debouncing on the frontend to reduce API calls
4. Created reusable filter components in React
5. Optimized database queries with proper indexes
6. Tested with large datasets (10,000+ jobs)
7. Collaborated with the backend team to optimize API response times"

RESULT:
"Delivered the feature 2 days early. The filtering now returns results 
in <1 second even with 100K+ job listings. This resulted in 35% increase 
in search engagement. I learned advanced SQL optimization and how UI 
decisions impact database performance. This experience strengthened my 
ability to solve complex technical problems under tight deadlines."`,
    language: "text",
    commonMistakes: [
      'Using "we" instead of "I" (hides your contribution)',
      "Choosing a project where you didn't actually face challenges",
      "Not explaining how you solved it (just saying it was hard)",
      "Forgetting the result/learning part",
      "Making the story too long (keep it 2-3 minutes)",
      "Criticizing teammates or making excuses",
    ],
    thinkingProcess: `Step 1: Recall a real challenging project
Step 2: Identify specific obstacles you faced
Step 3: Explain your problem-solving approach
Step 4: Highlight your unique contributions
Step 5: Show quantifiable results and learnings`,
    realWorldApplication:
      "Employers use this to assess: problem-solving, resilience, collaboration, technical depth, and learning ability.",
    interviewTip:
      "Practice 3-4 different STAR stories about different scenarios (technical challenge, team conflict, deadline pressure, learning quickly). Prepare them to use flexibly.",
  },

  {
    id: "hr-4",
    question: "How do you handle conflicts or disagreements with team members?",
    difficulty: "Intermediate",
    shortAnswer: "Show communication skills, empathy, and focus on solutions.",
    detailedAnswer: `This reveals your emotional intelligence and team collaboration ability.

FRAMEWORK:
1. Listen actively - Understand their perspective
2. Stay calm - Don't get defensive or emotional
3. Find common ground - What do you both want?
4. Focus on solution - Not blame
5. Document agreement - Clear understanding going forward

KEY APPROACH:
- Acknowledge their point of view
- Separate person from problem
- Look for win-win solutions
- Escalate if necessary
- Follow up to ensure resolution

WHAT NOT TO DO:
- Don't avoid the conflict
- Don't be aggressive or dismissive
- Don't make it personal
- Don't ignore the issue
- Don't blame others`,
    keyPoints: [
      "Show emotional intelligence",
      "Demonstrate listening skills",
      "Focus on solving the problem",
      "Maintain professional relationships",
      "Know when to escalate",
      "Learn from the experience",
    ],
    codeExample: `// EXAMPLE CONFLICT RESOLUTION:

SITUATION:
"On the rental booking project, the designer wanted a complex 
animation for property listings that would take 1 week to implement. 
As the developer, I was concerned about performance impact and timeline."

YOUR APPROACH:
"Instead of dismissing their idea, I:

1. Listened to understand why the animation mattered to them
   'Help me understand the user experience goal here.'

2. Shared my concerns professionally
   'I love the concept, but I'm concerned about performance 
    on mobile devices and our 2-week deadline.'

3. Explored solutions together
   'Let's find a way to achieve the visual impact with better 
    performance. Can we simplify the animation or use CSS instead 
    of JavaScript?'

4. Implemented compromise
   'We settled on a CSS-based animation that looked 90% as good 
    but loaded 10x faster and took only 1 day to implement.'

5. Followed up
   'The animations shipped, users loved them, and there were 
    no performance complaints.'"

OUTCOME:
"Both of us got what we needed - beautiful visuals and solid performance. 
The designer learned about performance constraints, and I learned the 
value of investing in great UX. It strengthened our working relationship."`,
    language: "text",
    commonMistakes: [
      'Saying "I never have conflicts" (unrealistic)',
      "Blaming the other person",
      "Not listening to their perspective",
      "Being aggressive or sarcastic",
      "Avoiding the issue",
      "Letting it damage the relationship",
    ],
    thinkingProcess: `Step 1: Choose a real professional conflict
Step 2: Show you understood their perspective
Step 3: Explain your calm, solution-focused approach
Step 4: Demonstrate the positive outcome
Step 5: Show what you learned`,
    realWorldApplication:
      "Teamwork is essential in any company. Your answer reveals how you work with diverse personalities and handle pressure.",
    interviewTip:
      "Employers value people who can disagree professionally and find solutions. This shows maturity and collaboration skills.",
  },

  {
    id: "hr-5",
    question: "Why are you interested in this specific company and role?",
    difficulty: "Intermediate",
    shortAnswer:
      "Show genuine interest. Research company values, products, culture, and role requirements.",
    detailedAnswer: `This reveals how prepared you are and how seriously you take the opportunity.

RESEARCH BEFORE INTERVIEW:
1. Company background - History, mission, values
2. Recent news - New products, funding, expansion
3. Current projects - What are they building?
4. Culture - How do they describe themselves?
5. Team structure - Who would you work with?
6. Technologies - What stack do they use?

YOUR ANSWER SHOULD SHOW:
- Understanding of company mission
- Alignment with your values/goals
- How your skills match their needs
- Genuine enthusiasm (not just a paycheck)
- Specific reasons (not generic)
- How you can contribute

STRUCTURE:
1. What impressed you about the company
2. How the role aligns with your goals
3. How you can contribute to their success
4. Your enthusiasm for the opportunity`,
    keyPoints: [
      "Do thorough company research",
      "Be specific, not generic",
      "Show genuine interest",
      "Connect your skills to their needs",
      "Mention their products/recent news",
      "Show alignment with company values",
    ],
    codeExample: `// EXAMPLE ANSWER:

"I'm excited about this opportunity for several specific reasons:

First, I've been following [Company Name] since you launched [Product], 
and I'm impressed by your focus on [Mission/Values]. Your commitment to 
[specific initiative] resonates with my own values around 
[relevant value].

Second, this role perfectly aligns with my career goals. I've been 
deepening my full-stack expertise, and this position offers the chance 
to work on [specific projects/technologies] at scale. Your tech stack 
of React, Node.js, and MongoDB matches my expertise perfectly.

Third, I believe I can make a meaningful contribution. In my rental 
booking project, I built [relevant feature] that improved [metric]. 
I'm excited to apply similar problem-solving skills to your challenges 
with [company challenge/goal].

Finally, your company culture around [specific aspect - continuous 
learning, innovation, collaboration] aligns with how I work best. 
I saw on LinkedIn that your team recently [company news], which shows 
the kind of innovative work I want to be part of.

I'm genuinely excited about the opportunity to contribute to your 
mission and grow as an engineer with your team."`,
    language: "text",
    commonMistakes: [
      "Not researching the company",
      'Generic answer ("It\'s a great company")',
      "Only mentioning salary/benefits",
      "Not knowing their products",
      "Criticizing their competitors",
      "Focusing only on what you want (not what you give)",
    ],
    thinkingProcess: `Step 1: Research company thoroughly
Step 2: Identify 2-3 specific reasons you're interested
Step 3: Connect to your career goals
Step 4: Show how you can contribute
Step 5: Express genuine enthusiasm`,
    realWorldApplication:
      "This answer shows you're serious, prepared, and genuinely interested in this opportunity.",
    interviewTip:
      "Employers can tell if you're interested or just looking for any job. Genuine interest and preparation stand out.",
  },

  {
    id: "hr-6",
    question: "Where do you see yourself in 5 years?",
    difficulty: "Basic",
    shortAnswer:
      "Show ambition and growth, but realistic and aligned with company.",
    detailedAnswer: `This reveals your ambition, self-awareness, and alignment with the company.

GOOD ANSWER SHOWS:
- Clear career progression
- Skill development areas
- Increasing responsibility
- Alignment with company culture
- Realistic expectations
- Commitment to growth

WHAT TO AVOID:
- "I want your job" (threatening)
- No plans or ambition
- Clearly unrealistic ("I'll be CEO in 5 years")
- Misaligned with company (wanting to move to startup when they're enterprise)
- Too focused on money/titles
- Vague answers

STRUCTURE:
1. Technical growth - What skills?
2. Professional growth - What roles/responsibilities?
3. Company/team contribution - How will you impact?
4. Industry involvement - What else? (open source, speaking, mentoring)
5. Why this path aligns with this role`,
    keyPoints: [
      "Show career vision",
      "Be realistic but ambitious",
      "Connect to company goals",
      "Emphasize continuous learning",
      "Show you'll grow with company",
      "Mention broader impact",
    ],
    codeExample: `// EXAMPLE ANSWER:

"In 5 years, I see myself as a strong mid-level to senior full-stack 
engineer. Specifically:

TECHNICAL GROWTH:
- Mastered not just React/Node, but also cloud platforms (AWS/GCP)
- Deeper expertise in system design and architecture
- Understanding of DevOps and infrastructure
- Possibly exploring backend optimization and database performance

PROFESSIONAL GROWTH:
- Graduated from individual contributor to someone who mentors 
  junior developers
- Led medium-sized projects from design to deployment
- Contributed meaningfully to major product features

AT THIS COMPANY:
- Became a go-to person for complex full-stack problems
- Helped establish best practices and architecture patterns
- Contributed to our tech culture and helped grow the team

BROADER IMPACT:
- Active in tech community (blog posts, open source contributions)
- Speaking at tech meetups or conferences
- Mentoring others interested in full-stack development

I see this role as a perfect stepping stone for this growth. The 
opportunity to work on [company products], learn from your experienced 
team, and contribute to [company mission] aligns perfectly with these goals."`,
    language: "text",
    commonMistakes: [
      'Being vague ("Just keep learning")',
      "Wanting their job (seems threatening)",
      "Not mentioning the company/role",
      "Unrealistic expectations",
      "Showing you'll leave quickly",
      "All focus on money/title",
    ],
    thinkingProcess: `Step 1: Reflect on your career aspirations
Step 2: Identify skills you want to develop
Step 3: Envision growth trajectory
Step 4: Connect to company/role
Step 5: Show how role supports these goals`,
    realWorldApplication:
      "Employers want to know you'll grow with them and are seriously invested in your career development.",
    interviewTip:
      "Show ambition but also realism. They want someone who'll stay and grow, not someone using them as a stepping stone.",
  },

  {
    id: "hr-7",
    question: "Tell me about a time you failed. What did you learn?",
    difficulty: "Intermediate",
    shortAnswer:
      "Be honest about failure, show responsibility, explain learning and improvement.",
    detailedAnswer: `This reveals emotional maturity, growth mindset, and self-awareness.

WHAT THEY'RE LOOKING FOR:
- Honesty and integrity
- Willingness to take responsibility
- Ability to learn from mistakes
- Resilience and growth mindset
- Humility
- Commitment to improvement

FRAMEWORK:
1. Acknowledge the failure honestly
2. Explain what went wrong (your role)
3. Take responsibility (not blaming)
4. Explain impact (was it serious?)
5. Show how you fixed it
6. Explain what you learned
7. How it changed your approach

WHAT NOT TO DO:
- Don't blame others
- Don't say you never fail
- Don't choose something too recent/serious
- Don't minimize the mistake
- Don't skip the learning part
- Don't sound defensive`,
    keyPoints: [
      "Choose a real failure with learning",
      "Take responsibility (don't blame)",
      "Show the impact of the failure",
      "Explain concrete actions taken",
      "Demonstrate clear learnings",
      "Show changed behavior/approach",
    ],
    codeExample: `// EXAMPLE ANSWER:

FAILURE:
"Early in my rental booking project, I built a payment processing 
feature without writing proper tests. I assumed my code was correct 
and deployed it to production."

IMPACT:
"Three days later, a user reported that their payment processed 
twice. This caused them financial and emotional stress, and we 
nearly had a refund nightmare. We had to refund the user and 
manually audit all transactions."

RESPONSIBILITY:
"I took full responsibility. I was the one who:
- Wrote untested code
- Didn't ask for code review
- Didn't think through edge cases
- Assumed it would 'just work'"

HOW I FIXED IT:
"I immediately:
1. Refunded the user and apologized
2. Audited all transactions for similar issues
3. Rewrote the payment logic with comprehensive tests
4. Implemented proper error handling
5. Set up monitoring for payment anomalies
6. Had senior developer review the code"

WHAT I LEARNED:
"This taught me several critical lessons:
- Testing is not optional, especially for payments
- I should ask for code review on critical features
- Edge cases matter more than happy path
- User impact determines urgency

CHANGED BEHAVIOR:
Now I:
- Write tests first, especially for critical code
- Always request code review on sensitive features
- Think through edge cases before coding
- Have proper monitoring and alerting
- Document assumptions clearly"`,
    language: "text",
    commonMistakes: [
      'Saying "I never really fail"',
      "Blaming others for the failure",
      "Choosing something too recent/too serious",
      "Not explaining what you learned",
      "Being defensive about the mistake",
      "Not taking responsibility",
    ],
    thinkingProcess: `Step 1: Pick a real failure with learning
Step 2: Explain what went wrong honestly
Step 3: Show the impact/consequences
Step 4: Demonstrate responsibility
Step 5: Explain specific changes made`,
    realWorldApplication:
      "Everyone fails. Companies want people who can learn and improve from failures rather than defend mistakes.",
    interviewTip:
      "This answer shows maturity and growth mindset. Employers actually like this answer because it shows self-awareness and commitment to improvement.",
  },

  {
    id: "hr-8",
    question: "Describe your ideal work environment and team culture.",
    difficulty: "Basic",
    shortAnswer:
      "Show what motivates you, be specific, align with company culture.",
    detailedAnswer: `This reveals your values, work style, and fit with the team.

ELEMENTS TO CONSIDER:
- Collaboration vs independence
- Learning opportunities
- Feedback and growth
- Communication style
- Work-life balance
- Autonomy
- Company mission alignment
- Team dynamics
- Leadership style

GOOD ANSWER SHOWS:
- Self-awareness about what motivates you
- Specific examples (not generic)
- Alignment with this company
- Flexibility/adaptability
- Focus on growth and impact
- Respect for diverse approaches

AVOID:
- Only mentioning perks (free lunch, ping pong)
- Being too rigid ("only like X")
- Misaligning with company culture
- Negative about previous culture
- Unrealistic expectations`,
    keyPoints: [
      "Be specific about what motivates you",
      "Align with company culture",
      "Show flexibility",
      "Focus on growth and impact",
      "Mention collaboration/communication",
      "Value learning opportunities",
    ],
    codeExample: `// EXAMPLE ANSWER:

"My ideal work environment has several key characteristics:

COLLABORATION & LEARNING:
I thrive in teams where we learn together. I love code reviews that 
are constructive and focused on improvement. I appreciate senior 
engineers who mentor and share knowledge. I also enjoy pair programming 
to solve complex problems.

AUTONOMY WITH SUPPORT:
I work best with clear goals but flexibility in how to achieve them. 
I want to own projects end-to-end but know I can ask for help. I appreciate 
managers who trust me to figure things out but are available when needed.

CLEAR COMMUNICATION:
Direct, honest feedback helps me grow. I prefer regular 1-on-1s where 
I understand expectations and progress. I appreciate transparency about 
company goals and how my work contributes.

GROWTH OPPORTUNITIES:
I'm motivated by opportunities to expand my skills. Whether it's learning 
new technologies, taking on larger projects, or mentoring others, I want 
to grow professionally. Companies that invest in employee development 
excite me.

MISSION-DRIVEN:
I care about working on products that matter. I want to understand the 
'why' behind what we're building and see how my work impacts users.

DIVERSITY & INCLUSION:
I value teams with diverse perspectives. I believe diverse teams build 
better products and create better work environments.

I believe your team culture reflects all of these values - collaborative, 
learning-focused, transparent, and mission-driven. That's why I'm 
genuinely excited about this opportunity."`,
    language: "text",
    commonMistakes: [
      "Only mentioning perks (free food, remote work)",
      'Being too rigid ("only like remote work")',
      "Criticizing previous company culture",
      "Sounding entitled",
      "Misaligning with company culture",
      "Being vague",
    ],
    thinkingProcess: `Step 1: Reflect on what actually motivates you
Step 2: Think about past experiences (good and bad)
Step 3: Identify specific elements, not just "great team"
Step 4: Research company culture
Step 5: Show genuine alignment`,
    realWorldApplication:
      "Culture fit is important for both you and the company. This answer reveals whether you'll thrive in their environment.",
    interviewTip:
      "Be authentic. Companies want people who are genuinely motivated by their culture, not people pretending to fit in.",
  },

  {
    id: "hr-9",
    question: "How do you stay current with technology trends?",
    difficulty: "Basic",
    shortAnswer:
      "Show commitment to continuous learning with specific examples and actions.",
    detailedAnswer: `This reveals your growth mindset and commitment to staying relevant.

WAYS TO STAY CURRENT:
1. Reading - Blogs, documentation, articles
2. Online learning - Courses, tutorials
3. Community - Meetups, conferences, Twitter
4. Practice - Side projects, open source
5. Networking - Conversations with peers
6. Experimentation - Trying new tools

GOOD ANSWER SHOWS:
- Multiple learning methods
- Specific examples (not vague)
- Regular/consistent effort
- Practical application
- Passion for learning
- Balance of breadth and depth

WHAT TO AVOID:
- "I just work with what the company uses"
- Claiming to know everything
- Learning for learning's sake
- Not applying knowledge practically
- Following every trend (no judgment)`,
    keyPoints: [
      "Show concrete learning habits",
      "Give specific examples",
      "Show practical application",
      "Balance trending + foundational knowledge",
      "Show consistency",
      "Demonstrate genuine interest",
    ],
    codeExample: `// EXAMPLE ANSWER:

"I'm committed to continuous learning. Here's what I actually do:

REGULAR READING:
- Follow key developers on Twitter (Dan Abramov, Kent C. Dodds)
- Subscribe to newsletters: JavaScript Weekly, React Status
- Read articles on Dev.to and CSS-Tricks
- Check official documentation for updates

STRUCTURED LEARNING:
- Started learning TypeScript through official docs and practice
- Taking a course on React Performance optimization
- Planning to learn GraphQL next quarter

COMMUNITY ENGAGEMENT:
- Attend local tech meetups monthly
- Participate in online communities (Stack Overflow, Reddit)
- Network with other developers
- Ask questions and share knowledge

HANDS-ON PROJECTS:
- Build side projects using new technologies
- Contribute to open source (contributed to a React library)
- Refactor old projects using new patterns I've learned
- Implement new techniques in work projects when appropriate

BALANCED APPROACH:
I'm selective about trends - I don't jump on every new framework. 
Instead, I focus on:
- Technologies that solve real problems
- Tools that mature enough to be stable
- Skills that deepen my core expertise (React, Node.js, databases)

REAL EXAMPLE:
Last month, I noticed the team was struggling with component 
state management. I researched modern approaches (Redux, Zustand, Jotai), 
evaluated them, and proposed a solution. This learning directly 
benefited the team."`,
    language: "text",
    commonMistakes: [
      'Being vague ("I like to learn")',
      "Not giving concrete examples",
      "Claiming to know every framework",
      "Not applying learning practically",
      "Learning trends without understanding fundamentals",
      "Seeming out of touch with current tech",
    ],
    thinkingProcess: `Step 1: Reflect on your actual learning habits
Step 2: List specific resources you use
Step 3: Give concrete examples
Step 4: Show how you apply learning
Step 5: Demonstrate consistent effort`,
    realWorldApplication:
      "Tech changes constantly. Companies want engineers who can adapt and stay current without becoming lost in hype.",
    interviewTip:
      "Show you're genuinely curious and have regular habits, not that you're desperately chasing trends.",
  },

  {
    id: "hr-10",
    question: "What questions do you have for us?",
    difficulty: "Basic",
    shortAnswer:
      "Ask thoughtful questions that show interest and help you evaluate fit.",
    detailedAnswer: `This is your chance to learn about the company and show genuine interest.

GOOD QUESTIONS SHOW:
- You've researched the company
- You understand the role
- You're thinking long-term
- You're genuinely interested
- You're evaluating fit

CATEGORIES OF QUESTIONS:

ABOUT THE ROLE:
- What are the main challenges for this position?
- What would success look like in 6 months?
- What skills are most important?
- What surprised you about this role?

ABOUT THE TEAM:
- What's the team structure?
- How is collaboration structured?
- What's the team culture like?

ABOUT THE COMPANY:
- What's the current focus/priorities?
- How is the company evolving?
- What are the biggest challenges?

ABOUT GROWTH:
- How do people typically grow here?
- What's your learning/development approach?
- Any mentoring programs?

ABOUT PROCESS:
- What's the typical project workflow?
- How often do we ship?
- What tools/technologies do we use?

AVOID:
- Questions easily answered by website
- Only asking about vacation/benefits
- Too many questions (pick 3-4)
- Questions that seem confrontational
- "What does the company do?" (you should know)`,
    keyPoints: [
      "Pick 3-4 thoughtful questions",
      "Show you've researched",
      "Focus on learning about fit",
      "Ask about role and team",
      "Listen to answers carefully",
      "Take notes",
    ],
    codeExample: `// GOOD QUESTIONS TO ASK:

1. ABOUT THE ROLE:
"Looking at my background, are there any skills or experiences 
you think would be particularly valuable in the first 6 months?"

"What are the biggest technical challenges this team is facing right now?"

"What does a typical day look like for someone in this position?"

2. ABOUT THE TEAM:
"How would you describe the team culture and collaboration style?"

"What's the onboarding process like? Who would I be working closely with?"

3. ABOUT GROWTH:
"I'm interested in growing from mid-level to senior engineer. 
How does the company support that progression?"

"Are there opportunities for mentoring or mentorship in this role?"

4. ABOUT DECISIONS:
"Can you share an example of a recent technical decision the team made? 
How did you approach that?"

"How is feedback typically handled? Do you have code reviews?"

5. ABOUT THE FUTURE:
"What's the vision for this team over the next year? 
What will success look like?"

"What are the biggest priorities for this project right now?"

// AVOID:
❌ "How much vacation time do I get?" (research this on their site)
❌ "What's the salary?" (let HR handle this)
❌ "What does the company do?" (you should know!)
❌ "How long are meetings?" (seems confrontational)
❌ Asking questions already answered on their website`,
    language: "text",
    commonMistakes: [
      "Not asking any questions (seems uninterested)",
      "Only asking about benefits/vacation",
      "Asking questions that are on their website",
      "Asking too many questions",
      "Not listening to answers",
      "Asking questions that seem like complaints",
    ],
    thinkingProcess: `Step 1: Research the company beforehand
Step 2: Prepare 4-5 thoughtful questions
Step 3: Listen during interview for answers
Step 4: Ask follow-ups based on their responses
Step 5: Wrap up with genuine thanks`,
    realWorldApplication:
      "This is your final impression. Good questions show genuine interest and careful evaluation of fit.",
    interviewTip:
      "Listen carefully to their answers. They reveal a lot about company culture and your potential fit. Take notes and ask thoughtful follow-ups.",
  },
  {
    id: "project-1",
    question:
      "Rental Booking Web Application - How do you present this project?",
    difficulty: "Intermediate",
    shortAnswer:
      "Explain the problem, your solution, technologies used, challenges overcome, and impact/learnings.",
    detailedAnswer: `This is Pratiksha's main portfolio project. Here's how to present it powerfully:

PROJECT OVERVIEW:
- Full-stack rental booking platform
- Complete CRUD operations
- User authentication and authorization
- Dynamic search and filtering
- Responsive design

KEY TALKING POINTS:
1. Problem you solved
2. Your technical solution
3. Technologies chosen and why
4. Architecture decisions
5. Challenges you overcame
6. What you learned
7. How you measured success

PRESENTATION STRUCTURE:
- Start with "why" (the problem)
- Show "what" (the solution/features)
- Explain "how" (technology and architecture)
- Share "challenges" (problems and solutions)
- Conclude with "impact" (learning and results)

DEPTH TO SHOW:
- Code quality (clean, organized)
- Problem-solving (not just features)
- Scalability thinking (how would it grow?)
- User experience (responsive, intuitive)
- Database design (proper schema)`,
    keyPoints: [
      "Problem: Why does this need to exist?",
      "Solution: What features does it have?",
      "Technologies: React, Node.js, Express, MongoDB",
      "Architecture: How is it organized?",
      "Challenges: What was hard? How did you solve?",
      "Learning: What did you gain?",
      "Metrics: How is it performing?",
    ],
    codeExample: `// PROJECT PRESENTATION EXAMPLE:

OPENING:
"I built a Rental Booking Web Application that solves the problem of 
finding and booking rental properties efficiently. Many people struggle 
with complex booking systems - the goal was to make it simple and intuitive."

FEATURES:
"The app includes:
- User authentication and profiles
- Property listings with detailed information
- Dynamic search with filtering (location, price, amenities)
- Booking system with date validation
- User dashboard to manage bookings
- Responsive design for mobile and desktop"

TECHNOLOGY CHOICES:
"I chose:
- React for interactive, responsive UI
- Node.js/Express for robust backend API
- MongoDB for flexible schema (rental data varies)
- Bootstrap for responsive design

This stack allowed me to build the entire application myself, from 
database to UI, demonstrating full-stack capability."

DATABASE DESIGN:
"I designed three main collections:
- Users: authentication, profile info
- Properties: listing details, images, availability
- Bookings: transaction records, dates, pricing

I used proper indexing on frequently searched fields (location, price) 
for performance."

CHALLENGING FEATURE:
"The most challenging part was implementing dynamic filtering. When users 
search with multiple filters (price range, amenities, date availability), 
the query needs to be efficient.

I solved this by:
1. Creating a MongoDB query builder that handles multiple conditions
2. Implementing proper indexes for common filter combinations
3. Using debouncing on the frontend to reduce unnecessary API calls
4. Caching search results for frequently used filters

Result: Search returns results in under 1 second even with large datasets."

USER EXPERIENCE HIGHLIGHT:
"I focused on responsive design and intuitive navigation. The property 
cards show essential info at a glance. The booking flow has clear steps 
and validation. Mobile users get a touch-optimized experience."

METRICS:
"While this is a portfolio project, if it were in production, I would track:
- Search completion rate
- Booking conversion rate
- Average response time
- Mobile vs desktop usage
- User retention"

LEARNINGS:
"Building this taught me:
1. Full-stack thinking: how database design impacts frontend performance
2. User-centric design: simple beats complicated
3. Error handling: what can go wrong with bookings?
4. Security: protecting user data and transactions
5. Project management: breaking down complex features"

FUTURE IMPROVEMENTS:
"If continuing this project, I'd add:
- Payment processing integration
- Email confirmations
- Review and rating system
- Admin dashboard
- Analytics
- Real-time availability updates
- Advanced recommendation engine"`,
    language: "text",
    commonMistakes: [
      "Only listing features without explaining why",
      "Not discussing challenges you faced",
      "Skipping the learning/outcome section",
      "Not showing how you measured success",
      "Being vague about technology choices",
      "Not explaining how decisions impacted users",
    ],
    thinkingProcess: `Step 1: Start with the problem you solved
Step 2: Explain your solution clearly
Step 3: Justify technology choices
Step 4: Describe architecture
Step 5: Share real challenges and solutions
Step 6: Explain what you learned`,
    realWorldApplication:
      "This project demonstrates full-stack capability, problem-solving, and practical web development skills.",
    interviewTip:
      "Be able to defend your technology choices and explain the trade-offs you made. Show you thought deeply about the solution.",
  },

  {
    id: "project-2",
    question:
      "Online Job Portal System - How do you discuss this internship project?",
    difficulty: "Intermediate",
    shortAnswer:
      "Focus on learning, technologies mastered, features built, and collaboration.",
    detailedAnswer: `This was your Global Technologies internship project. Here's how to present it:

PROJECT CONTEXT:
- Internship project (May-August 2024)
- Built with HTML, CSS, PHP, and MySQL
- Full-featured job portal system
- Collaborative team environment

KEY ASPECTS:
1. Learning opportunity (new technologies)
2. Features you implemented
3. Team collaboration experience
4. Problem-solving examples
5. Technical depth
6. Internship learnings

HOW TO FRAME IT:
- Show you could learn quickly
- Demonstrate problem-solving in team
- Explain features clearly
- Share what you learned
- Show growth from start to end

DIFFERENCES FROM PORTFOLIO PROJECT:
- This shows teamwork and mentoring
- This shows learning new tech quickly
- This shows professional environment
- This is less about "your vision"
- This is more about "adapting and delivering"`,
    keyPoints: [
      "Context: Internship, May-August 2024",
      "Technologies: HTML, CSS, PHP, MySQL",
      "Features: Advanced job search, filtering, applications",
      "Learning: Quick learning of new stack",
      "Teamwork: Collaborated with development team",
      "Professional: Real-world project delivery",
    ],
    codeExample: `// PROJECT PRESENTATION:

OPENING:
"During my internship at Global Technologies (May-August 2024), 
I developed a fully responsive Online Job Portal System that helps 
job seekers find opportunities and employers post positions."

TECHNOLOGIES & LEARNING:
"I came in with React/Node.js knowledge, but the project used 
PHP and MySQL. Rather than requesting different tech, I quickly 
learned PHP by:
- Reading official documentation
- Studying existing codebase
- Asking mentors for guidance
- Building small features first

This flexibility showed me the importance of adaptability in 
real-world development."

FEATURES I BUILT:
"Key features I implemented:

1. ADVANCED JOB SEARCH
- Search by keywords, job title, location
- Filtering by salary range, experience level, job type
- Sorting by date posted, relevance, salary
- This required building complex SQL queries

2. CATEGORY-BASED LISTINGS
- Organizing jobs by industry categories
- Hierarchical navigation
- Better user experience for browsing

3. RESUME & APPLICATION SYSTEM
- Job seekers upload resumes
- Track applications and status
- Employers view applicant profiles
- This required file handling and database design

4. RESPONSIVE DESIGN
- Mobile-first approach
- Works on all devices
- CSS optimization for performance"

TECHNICAL CHALLENGES:
"The most challenging feature was the advanced search with multiple 
filters and sorting options.

Challenge: Query performance with large dataset
Solution:
- Optimized SQL queries with proper indexes
- Implemented pagination for large result sets
- Used caching for frequently used filters
- Result: Search completes in <2 seconds

Challenge: File upload security
Solution:
- Validate file types (only PDF, DOC)
- Scan uploaded files
- Store in secure directory
- Limit file size to 5MB"

TEAM COLLABORATION:
"I worked alongside 3 other developers. We:
- Had daily standups to sync progress
- Reviewed each other's code
- Helped debug issues collaboratively
- Learned from experienced developers

One example: When I struggled with SQL optimization, 
a senior developer showed me how to use EXPLAIN to 
analyze query plans. This skill stuck with me."

CROSS-BROWSER TESTING:
"To ensure compatibility, I tested on:
- Chrome, Firefox, Safari, Edge
- iOS and Android devices
- Different screen sizes
- Accessibility with screen readers

This attention to detail ensured all users could access the portal."

LEARNINGS:
"This internship taught me:
1. PHP backend development fundamentals
2. Working in professional team environment
3. Client expectations and project timelines
4. Importance of documentation
5. Testing and quality assurance
6. Learning new technologies quickly
7. Receiving and incorporating feedback"

IMPACT:
"The portal went live and helped 500+ job seekers find positions. 
We received positive feedback about the intuitive interface and 
powerful search capabilities."

WHAT I'D DO DIFFERENTLY:
"If rebuilding today, I would:
- Use modern PHP framework (Laravel)
- Implement API-first architecture
- Use modern frontend framework (React)
- Add real-time notifications
- Implement better authentication (OAuth)"`,
    language: "text",
    commonMistakes: [
      'Only saying "I worked on this project" (no depth)',
      "Criticizing the tech choices",
      "Not mentioning team collaboration",
      "Skipping the learning aspect",
      "Focusing only on what went right",
      "Not explaining technical decisions",
    ],
    thinkingProcess: `Step 1: Set the internship context
Step 2: Show you learned technologies quickly
Step 3: Detail features you built
Step 4: Share team collaboration examples
Step 5: Explain challenges overcome
Step 6: Summarize key learnings`,
    realWorldApplication:
      "This demonstrates you can work in professional teams, learn quickly, and deliver features under supervision.",
    interviewTip:
      "This shows growth from internship to now. Talk about how you've continued learning since then.",
  },

  {
    id: "project-3",
    question: "How do you choose which projects to showcase on your portfolio?",
    difficulty: "Basic",
    shortAnswer:
      "Choose projects that demonstrate diverse skills, problem-solving, and real-world applicability.",
    detailedAnswer: `Not all projects are portfolio-worthy. Here's how to select strategically:

CRITERIA FOR STRONG PORTFOLIO PROJECTS:

1. DEMONSTRATES CORE SKILLS
- Shows your strongest abilities
- Uses technologies you want to work with
- Relevant to your target role

2. TECHNICAL DEPTH
- Not trivial (not just "to-do list")
- Solves real problems
- Shows problem-solving, not just code

3. COMPLETENESS
- Actually finished and working
- Deployed (live URL, not just GitHub)
- User-focused design

4. SCOPE CLARITY
- Appropriate for level (not too simple, not "entire Netflix clone")
- Shows you understand scope
- Completed within reasonable timeframe

5. LEARNING DEMONSTRATED
- Shows how you approached challenges
- Demonstrates growth
- Reflects current skill level

DIVERSITY MATTERS:
- Front-end focused project (React, UI/UX)
- Back-end focused project (APIs, databases)
- Full-stack project (complete system)
- Different domains (not just 3 similar apps)

WHAT TO AVOID SHOWCASING:
- Incomplete projects (doesn't look good)
- Tutorial clones (unless heavily customized)
- Projects with poor code quality
- Projects you can't explain deeply
- Projects misaligned with target role`,
    keyPoints: [
      "Choose 2-3 strong projects maximum",
      "Show diversity of skills",
      "Demonstrate problem-solving",
      "Make sure projects are deployed/accessible",
      "Pick projects you're proud of",
      "Only include what you can explain deeply",
    ],
    codeExample: `// PORTFOLIO STRATEGY for Pratiksha:

STRONG CHOICES (What to showcase):
1. Rental Booking App (Full-stack, React, Node, MongoDB)
   - Demonstrates: React, backend, database design
   - Shows: Problem-solving, responsive design, architecture
   - Portfolio value: ⭐⭐⭐⭐⭐

2. Online Job Portal (Professional, team experience)
   - Demonstrates: Backend fundamentals, database design, UI
   - Shows: Learning quickly, teamwork, professional delivery
   - Portfolio value: ⭐⭐⭐⭐

WEAKER CHOICES (What to skip):
❌ A simple to-do list (too basic, everyone makes these)
❌ A tutorial clone (not original)
❌ An unfinished project (shows incompleteness)
❌ Something you can't explain (forgot the code)

IDEAL PORTFOLIO:
For full-stack developer role:
1. One strong full-stack project (Rental Booking)
2. One that shows depth in your weaker area
3. One open source contribution (if applicable)

PRESENTATION STRATEGY:
For each project, prepare:
- Live demo (deployed on Vercel/Netlify)
- GitHub repository (clean, good README)
- Screenshot/video walkthrough
- 30-second elevator pitch
- Deep explanation (3-5 minutes)
- Technical decisions explanation

ON YOUR RESUME:
List only your best 2-3 projects that align with job description.
Add more in "Other Projects" if space.`,
    language: "text",
    commonMistakes: [
      "Showcasing too many mediocre projects (quality > quantity)",
      "Including incomplete projects",
      "Not having live deployments",
      "Choosing projects that don't show target skills",
      "Projects with code you're embarrassed by",
      "Tutorial clones without customization",
    ],
    thinkingProcess: `Step 1: List all projects you've completed
Step 2: Evaluate each by technical depth
Step 3: Consider diversity of skills
Step 4: Choose 2-3 strongest ones
Step 5: Ensure each is deployed and explained`,
    realWorldApplication:
      "Your portfolio is often the deciding factor for interviews. Choose projects strategically.",
    interviewTip:
      "Be ready to go deep on the projects you showcase. Interviewers will ask detailed questions about decisions and challenges.",
  },

  {
    id: "project-4",
    question: "How do you present your technical decisions and trade-offs?",
    difficulty: "Intermediate",
    shortAnswer:
      "Explain why you chose certain technologies/approaches and what trade-offs you accepted.",
    detailedAnswer: `Employers care about HOW you think, not just WHAT you built.

FRAMEWORK FOR EXPLAINING DECISIONS:

1. STATE THE REQUIREMENT
- What problem needed solving?
- What constraints existed?
- What were the options?

2. EXPLAIN YOUR CHOICE
- Which option did you choose?
- Why was it the best fit?
- What were the key factors?

3. ACKNOWLEDGE TRADE-OFFS
- What did you give up?
- Why were those acceptable?
- Could you have chosen differently?

4. SHOW REASONING
- How did you evaluate options?
- What research did you do?
- Who did you consult?

5. DEMONSTRATE LEARNING
- Would you do it differently now?
- What did you learn?
- How applies to future projects?

DECISION CATEGORIES:
- Technology choices (React vs Vue vs Angular)
- Architecture patterns (MVC, serverless, microservices)
- Database decisions (SQL vs NoSQL)
- Authentication approach
- Deployment strategy
- Testing approach
- Code organization`,
    keyPoints: [
      "Show you considered alternatives",
      "Explain trade-offs honestly",
      "Connect decisions to constraints/goals",
      "Show you can defend choices",
      "Demonstrate ability to learn from decisions",
      "Know when different choices would be better",
    ],
    codeExample: `// DECISION EXPLANATION EXAMPLES:

TECHNOLOGY CHOICE - Why React?:
"I chose React for the frontend because:

REQUIREMENT:
- Interactive, dynamic UI needed
- Component reusability important
- Need to update UI based on user actions

OPTIONS CONSIDERED:
1. Vanilla JavaScript - Full control, lightweight
2. jQuery - Simple, but less structure
3. Vue.js - Simpler learning curve
4. React - Large ecosystem, component-based
5. Angular - Full framework, overkill for this

MY CHOICE: React

REASONING:
1. Component-based architecture perfectly suited the app structure
   (each property listing is a reusable component)
2. React ecosystem has great tools for what I needed
   (React Router for navigation, Redux-like libraries for state)
3. Strong learning value (React is industry-standard)
4. Performance: Virtual DOM handles updates efficiently

TRADE-OFFS I ACCEPTED:
- Larger bundle size (but acceptable with code splitting)
- Steeper learning curve than jQuery (but worth it for long-term)
- More boilerplate than Vue (but value structure over simplicity)

WOULD I CHOOSE DIFFERENTLY NOW?
Actually, no. React was right for this project. For a simpler project,
I might choose Vue. For a large enterprise app, maybe Next.js. But for
a portfolio project showing full capability, React was ideal."

---

DATABASE CHOICE - Why MongoDB?:

REQUIREMENT:
- Store varied rental property data (different amenities, features)
- Flexible schema (properties have different fields)
- Need fast reads
- Need to scale horizontally

OPTIONS:
1. PostgreSQL (SQL) - Structured, reliable, complex joins
2. MongoDB (NoSQL) - Flexible schema, document-oriented
3. Firebase (BaaS) - Quick to set up, limited control

MY CHOICE: MongoDB

REASONING:
1. FLEXIBILITY: Rental properties have different amenities. 
   In SQL I'd need many columns with NULLs, or complex joins.
   In MongoDB, each property has its own schema within the collection.
   
2. SCALABILITY: MongoDB shards horizontally, good for growing datasets
   
3. JAVASCRIPT ALIGNMENT: MongoDB uses JSON-like documents,
   same as my JavaScript frontend
   
4. LEARNING: Wanted to learn NoSQL for portfolio

TRADE-OFFS:
- Less data consistency (no ACID transactions in early MongoDB)
- Larger file size (documents repeat data)
- Requires careful schema design (no enforced relationships)

MITIGATIONS:
- Used MongoDB 4.0+ for multi-document ACID support
- Designed schema carefully to minimize duplication
- Used indexes on frequently searched fields

WOULD I CHOOSE DIFFERENTLY NOW?
I'd probably still choose MongoDB for this specific project.
But I've learned there are scenarios where PostgreSQL is better:
- Complex relationships between entities
- Strong consistency requirements
- Analytical queries

So my real answer is: understand your constraints and choose accordingly."

---

ARCHITECTURE - Why REST API?:

REQUIREMENT:
- Backend needed to serve multiple frontends
- Mobile app potentially in future
- Need clear separation of concerns

OPTIONS:
1. Server-rendered (PHP - like the job portal)
2. REST API + Single-Page App
3. GraphQL
4. WebSockets for real-time

MY CHOICE: REST API + React SPA

REASONING:
1. Separation of concerns - frontend and backend separate
2. Flexibility - can build mobile app with same API
3. Scalability - easier to scale API independently
4. Learning value - industry standard approach

TRADE-OFFS:
- More complex than server-rendered
- Need to think about API design
- Client-side routing complexity
- CORS considerations

WOULD I CHOOSE DIFFERENTLY NOW?
For a similar project, I might consider:
- Next.js (server-side rendering + API routes)
- GraphQL (if complex data relationships)
But REST was right for a portfolio project showing full-stack capability."`,
    language: "text",
    commonMistakes: [
      "Not explaining why you chose something",
      "Acting like your choice was obviously best",
      "Not understanding trade-offs",
      "Changing answer when challenged",
      "Dismissing alternatives without evaluation",
      "Not showing you considered options",
    ],
    thinkingProcess: `Step 1: Identify major decisions in your project
Step 2: Articulate what problem each solved
Step 3: List alternatives you considered
Step 4: Explain why you chose yours
Step 5: Acknowledge trade-offs and learning`,
    realWorldApplication:
      "Tech decisions shape project success. Showing you think strategically about them is valuable.",
    interviewTip:
      "Interviewers will challenge your decisions. Show you can defend them AND acknowledge when different choices might be better.",
  },

  {
    id: "project-5",
    question: "How do you handle project scope creep and incomplete features?",
    difficulty: "Intermediate",
    shortAnswer:
      "Define scope clearly, prioritize features, focus on completion, document decisions.",
    detailedAnswer: `Scope creep derails many projects. Here's how to handle it:

CAUSES OF SCOPE CREEP:
- Not defining scope upfront
- Client/stakeholder requests
- "Just add this feature..."
- Under-estimating complexity
- Perfectionism

PREVENTION STRATEGIES:

1. DEFINE SCOPE UPFRONT
- List must-haves vs nice-to-haves
- Get agreement on features
- Write specifications
- Set realistic timeline

2. PRIORITIZE RUTHLESSLY
- Core features first
- Cut non-essential features
- MVP (Minimum Viable Product) approach
- "Nice to haves" go to v2

3. TRACK AND MANAGE
- Kanban board (Trello, GitHub Projects)
- Regular check-ins
- Adjust timeline as needed
- Communicate changes

4. SAY NO STRATEGICALLY
- "Great idea for v2"
- "That would require X additional time"
- Document decisions
- Keep stakeholders aligned

FOR PORTFOLIO PROJECTS:
- You control scope
- Choose features you can complete
- Better to complete well than half-ass everything
- Incomplete projects hurt your portfolio`,
    keyPoints: [
      "Define scope before starting",
      "Prioritize ruthlessly (MVP first)",
      "Say no to scope creep",
      "Complete < half-done is always better",
      "Document decisions",
      "Communicate timeline realistically",
    ],
    codeExample: `// HOW TO HANDLE SCOPE on Rental Booking Project:

INITIAL AMBITIOUS SCOPE (Too much):
- User authentication
- Email notifications
- Payment processing
- Review system
- Messaging between users
- Admin dashboard
- Analytics
- Mobile app
Timeline: 2 weeks (unrealistic!)

SCOPED DOWN FOR PORTFOLIO (Realistic):
MUST-HAVES (MVP):
✓ User authentication (sign up, login)
✓ Property listings with search
✓ Filtering by price, location, amenities
✓ Booking system
✓ Responsive design

NICE-TO-HAVES (V2, V3):
⟳ Email confirmations (complexity: medium)
⟳ Rating/review system (complexity: medium)
⟳ Payment processing (complexity: high)
⟳ Admin dashboard (complexity: high)
⟳ Messaging system (complexity: high)

TIMELINE BREAKDOWN:
Week 1-2: Setup, authentication, database design
Week 3: Property listings and UI
Week 4: Search and filtering
Week 5: Booking system
Week 6: Testing, polish, deployment

DECISION MADE:
"I chose to focus on core functionality and polish rather than 
add incomplete features. The booking system works great, search 
is fast, the design is responsive. These fundamentals matter more 
than half-baked payment processing."

IN INTERVIEW:
When they ask "Why no payment processing?"
Answer: "Great question. Payment processing requires security 
considerations (PCI compliance, encryption) that deserve full 
attention, not a rushed implementation. For a portfolio project, 
I prioritized completing the core features well. In a real product,
I'd dedicate proper time to payments."

This shows:
✓ Strategic thinking about priorities
✓ Realistic timeline estimation
✓ Understanding of complexity
✓ Commitment to quality
✓ Ability to make trade-off decisions`,
    language: "text",
    commonMistakes: [
      "Starting with too many features",
      "Leaving multiple features incomplete",
      "Not communicating scope clearly",
      'Getting distracted by "cool ideas"',
      "Underestimating feature complexity",
      "Portfolio with half-finished features",
    ],
    thinkingProcess: `Step 1: List all possible features
Step 2: Prioritize by importance and complexity
Step 3: Define MVP (minimum viable product)
Step 4: Build MVP completely
Step 5: Add features if time permits`,
    realWorldApplication:
      "Professional projects always have scope constraints. Learning to manage scope is critical skill.",
    interviewTip:
      "Show you can make tough decisions about priorities. Employers love people who deliver complete solutions, not partially-done features.",
  },

  {
    id: "project-6",
    question: "How do you measure success for your projects?",
    difficulty: "Intermediate",
    shortAnswer:
      "Define metrics before building, track progress, reflect on results.",
    detailedAnswer: `What does "success" mean for your project? Define it clearly.

SUCCESS METRICS BY PROJECT TYPE:

FOR PORTFOLIO PROJECTS:
- Does it work? (Core functionality)
- Does it look good? (UI/UX quality)
- Is code clean? (Readable, maintainable)
- Is it complete? (All features shipped)
- Can I explain it? (Understanding demonstrated)
- Did I learn? (New skills gained)
- Does it impress? (Portfolio value)

FOR REAL PRODUCTS:
- User adoption (how many use it?)
- User engagement (do they keep using it?)
- Performance metrics (speed, reliability)
- Business metrics (revenue, retention)
- User satisfaction (feedback, reviews)
- Code quality (maintainability, testing)

HOW TO MEASURE YOURSELF:
- Performance testing (how fast is it?)
- User feedback (does it solve the problem?)
- Code quality (tests, linting, documentation)
- Completion (all features shipped?)
- Learning outcomes (did you grow?)

TOOLS FOR MEASURING:
- Lighthouse (performance audit)
- User testing (ask real people)
- Analytics (how people use it)
- Monitoring (error rates, uptime)
- Testing (unit, integration, e2e)`,
    keyPoints: [
      "Define success metrics upfront",
      "Track measurable outcomes",
      "Get user feedback",
      "Monitor performance",
      "Reflect on learning",
      "Celebrate successes",
    ],
    codeExample: `// SUCCESS METRICS for Rental Booking App:

CODE QUALITY METRICS:
✓ Test coverage: 80%+ (unit tests for core logic)
✓ Lighthouse score: 90+ (performance, accessibility)
✓ No console errors on Chrome, Firefox, Safari
✓ Mobile responsive: works on iPhone, Android
✓ Code organization: clear folder structure, readable

FUNCTIONAL METRICS:
✓ Search returns results in <1 second
✓ Filtering works with multiple criteria
✓ Booking validation prevents double-bookings
✓ Login/logout works securely
✓ Forms validate input properly

USER EXPERIENCE METRICS:
✓ Intuitive navigation
✓ Clear call-to-action buttons
✓ Mobile-friendly (no horizontal scrolling)
✓ Accessible (can navigate with keyboard)
✓ Loads in <3 seconds

PERSONAL LEARNING METRICS:
✓ Deepened React knowledge (hooks, context)
✓ Built backend with Node.js/Express
✓ Designed MongoDB schema properly
✓ Understood responsive design
✓ Deployed to production

EXAMPLE MEASUREMENTS:
Running Lighthouse:
- Performance: 92/100 ✓
- Accessibility: 95/100 ✓
- Best Practices: 88/100 ✓
- SEO: 90/100 ✓

Code test results:
- Unit tests: 45 tests passing
- Test coverage: 82%
- No critical linting errors

Performance testing:
- Search query: 487ms ✓
- Booking submission: 234ms ✓
- Page load: 1.8s ✓

IN INTERVIEW:
When they ask "How do you know it was successful?"
Answer: "I measured it in several ways:
1. Functional: All features work as designed, no bugs
2. Performance: Lighthouse score 92, pages load fast
3. Code quality: 82% test coverage, clean architecture
4. User experience: Works perfectly on mobile, intuitive navigation
5. Learning: Gained deep full-stack knowledge

If this were a real product, I'd also measure:
- User adoption and engagement
- Feature usage statistics
- User feedback and satisfaction
- Retention rates"`,
    language: "text",
    commonMistakes: [
      "No metrics defined (can't show success)",
      "Only measuring technical metrics (forget UX)",
      'Not measuring anything (just "it works")',
      'Unmeasurable goals ("make it good")',
      "Not documenting metrics",
      "Measuring wrong things",
    ],
    thinkingProcess: `Step 1: Define what success looks like
Step 2: Identify measurable indicators
Step 3: Track metrics during development
Step 4: Analyze results
Step 5: Reflect on learnings`,
    realWorldApplication:
      "Professional development always involves metrics. Learning to measure success shows maturity.",
    interviewTip:
      "Show you think about outcomes, not just building. This demonstrates you understand product thinking, not just coding.",
  },

  {
    id: "project-7",
    question: "How do you handle technical debt and refactoring?",
    difficulty: "Intermediate",
    shortAnswer:
      "Recognize technical debt, prioritize refactoring, balance new features with code quality.",
    detailedAnswer: `Technical debt is shortcuts taken for speed. Managing it is important.

WHAT IS TECHNICAL DEBT:
- Code written quickly without proper structure
- Skipped tests to save time
- Duplicated code (DRY violation)
- Poor error handling
- Inconsistent patterns
- Documentation gaps

WHEN TO ACCUMULATE DEBT:
- MVP (Minimum Viable Product) phase
- Time-sensitive features
- Proof of concept work
- Learning projects (acceptable)

WHEN TO REPAY DEBT:
- After MVP ships
- When it impacts new features
- When performance suffers
- Before adding complexity
- When team grows (need clarity)

STRATEGIES FOR MANAGING:
1. Recognize it upfront ("this is a quick hack")
2. Document it (notes for future)
3. Plan to refactor (add to backlog)
4. Don't accumulate endlessly
5. Regular refactoring sprints
6. Automate what you can (linting, formatting)

EXAMPLES OF DEBT PAYOFF:
- Extract repeated code into functions
- Add missing tests
- Improve error messages
- Organize files better
- Update outdated dependencies`,
    keyPoints: [
      "Some debt is acceptable early on",
      "Must plan to repay it",
      "Document decisions and debt",
      "Regular refactoring prevents buildup",
      "Balance features with code quality",
      "Automate quality checks",
    ],
    codeExample: `// TECHNICAL DEBT EXAMPLE:

INITIAL QUICK SOLUTION (High Debt):
// In property search component
async function searchProperties() {
  try {
    const url = \`/api/properties?search=\${search}&location=\${location}&price=\${price}\`;
    const response = await fetch(url);
    const data = await response.json();
    setProperties(data);
  } catch (e) {
    console.log(e); // Lazy error handling
  }
}

// In booking component (duplicate code!)
async function getPropertyDetails() {
  try {
    const url = \`/api/properties/\${id}\`;
    const response = await fetch(url);
    const data = await response.json();
    setProperty(data);
  } catch (e) {
    console.log(e); // Same lazy error handling
  }
}

DEBT ACCUMULATED:
❌ Error handling is lazy (console.log)
❌ API calls duplicated (DRY violation)
❌ No loading states
❌ No retry logic
❌ No timeout handling
❌ URL building inconsistent

REFACTORED VERSION (Debt Repaid):
// Create API utility (DRY)
const apiClient = {
  async get(endpoint) {
    try {
      const response = await fetch(\`/api\${endpoint}\`);
      if (!response.ok) throw new Error(\`API error: \${response.status}\`);
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  }
};

// Reuse in components
async function searchProperties() {
  setLoading(true);
  try {
    const params = new URLSearchParams({ search, location, price });
    const data = await apiClient.get(\`/properties?\${params}\`);
    setProperties(data);
  } catch (error) {
    setError('Failed to search properties');
  } finally {
    setLoading(false);
  }
}

// Add tests
describe('Property search', () => {
  it('should fetch properties', async () => {
    const result = await searchProperties();
    expect(result).toBeDefined();
  });
});

IMPROVEMENTS:
✓ Reusable API client
✓ Consistent error handling
✓ Loading states
✓ User-friendly error messages
✓ Testable code
✓ DRY (Don't Repeat Yourself)

IN INTERVIEW:
When they ask "What would you do differently?"
Answer: "Looking back, I'd have better error handling and less code 
duplication from the start. For a portfolio project, I accepted some 
quick solutions to ship features. If continuing development, my next 
step would be:
1. Create API client utility (reduce duplication)
2. Add comprehensive error handling
3. Add loading states and user feedback
4. Write tests for core functionality

This shows I understand technical debt and how to manage it."`,
    language: "text",
    commonMistakes: [
      "Accumulating debt without acknowledging it",
      'Never refactoring ("it works, why change?")',
      "Over-engineering early (over-refactoring)",
      "Refactoring instead of shipping features",
      "Poor error handling (technical debt)",
      "No tests (major technical debt)",
    ],
    thinkingProcess: `Step 1: Recognize shortcuts taken for speed
Step 2: Document them explicitly
Step 3: Plan refactoring later
Step 4: Don't accumulate endlessly
Step 5: Regular quality improvement`,
    realWorldApplication:
      "Professional codebases always have technical debt. Managing it well is a key engineering skill.",
    interviewTip:
      "Show you understand that speed and quality are related, not opposed. Good engineers balance both.",
  },

  {
    id: "project-8",
    question: "How do you handle testing and ensure code quality?",
    difficulty: "Intermediate",
    shortAnswer:
      "Write tests for critical code, use linting, code review, and manual testing.",
    detailedAnswer: `Code quality comes from multiple layers of testing and review.

TYPES OF TESTING:

UNIT TESTS:
- Test individual functions/components
- Fastest to run
- Easiest to write
- Test logic, not implementation

INTEGRATION TESTS:
- Test multiple components working together
- Test API calls and database
- More realistic scenarios
- Slower than unit tests

END-TO-END TESTS:
- Test entire user flow
- Click through like real user
- Most realistic
- Slowest, most brittle

MANUAL TESTING:
- Test features manually
- Find issues unit tests miss
- User perspective
- Always needed

CODE QUALITY TOOLS:
- ESLint: Code style consistency
- Prettier: Code formatting
- TypeScript: Type safety
- Jest: Testing framework
- React Testing Library: Component testing

STRATEGY FOR PORTFOLIO:
- Write tests for critical features
- Use linting and formatting
- Manual testing on multiple browsers
- Performance testing (Lighthouse)
- Accessibility testing`,
    keyPoints: [
      "Write tests for critical code",
      "Use linting for consistency",
      "Manual testing on real devices",
      "Test edge cases",
      "Performance monitoring",
      "Accessibility testing",
    ],
    codeExample: `// TESTING STRATEGY for Rental Booking:

UNIT TEST EXAMPLE:
// utils/priceCalculation.js
export function calculateTotal(nights, pricePerNight, tax = 0.1) {
  return nights * pricePerNight * (1 + tax);
}

// __tests__/priceCalculation.test.js
describe('Price calculation', () => {
  it('should calculate total correctly', () => {
    const total = calculateTotal(5, 100);
    expect(total).toBe(550); // 5 * 100 * 1.1
  });
  
  it('should handle zero nights', () => {
    const total = calculateTotal(0, 100);
    expect(total).toBe(0);
  });
  
  it('should handle custom tax rate', () => {
    const total = calculateTotal(5, 100, 0.2);
    expect(total).toBe(600);
  });
});

COMPONENT TEST EXAMPLE:
// __tests__/SearchForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../SearchForm';

describe('SearchForm', () => {
  it('should render search inputs', () => {
    render(<SearchForm />);
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument();
  });
  
  it('should call onSearch when button clicked', () => {
    const mockSearch = jest.fn();
    render(<SearchForm onSearch={mockSearch} />);
    
    fireEvent.click(screen.getByText('Search'));
    expect(mockSearch).toHaveBeenCalled();
  });
  
  it('should validate required fields', () => {
    render(<SearchForm />);
    fireEvent.click(screen.getByText('Search'));
    expect(screen.getByText('Location required')).toBeInTheDocument();
  });
});

LINTING SETUP:
// .eslintrc.json
{
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "react/prop-types": "warn"
  }
}

// package.json scripts
"scripts": {
  "lint": "eslint src/",
  "lint:fix": "eslint src/ --fix",
  "test": "jest",
  "test:coverage": "jest --coverage"
}

TESTING CHECKLIST:
☑ Core calculations tested (prices, dates)
☑ Form validation tested
☑ API errors handled
☑ Component rendering tested
☑ User interactions tested
☑ Edge cases covered
☑ No console errors/warnings
☑ Lighthouse score 90+
☑ Mobile responsiveness verified
☑ Cross-browser tested (Chrome, Firefox, Safari)

IN INTERVIEW:
When they ask about testing:
Answer: "I test on multiple levels:
1. Unit tests for critical logic (calculations, validation)
2. Component tests for UI interactions
3. Manual testing on multiple devices and browsers
4. Lighthouse for performance and accessibility
5. ESLint for code consistency

For the rental booking app, I have:
- 45 unit tests covering core features
- 82% code coverage
- No linting errors
- Lighthouse score of 92

In a production environment, I'd also implement:
- CI/CD pipeline to run tests automatically
- Integration tests for API interactions
- E2E tests for critical user flows
- Monitoring in production"`,
    language: "javascript",
    commonMistakes: [
      "No tests at all (too risky)",
      "Only writing tests they asked for",
      "Tests that don't catch real bugs",
      "Poor test coverage (untested code breaks)",
      "No linting/formatting (inconsistent code)",
      "Not testing edge cases",
    ],
    thinkingProcess: `Step 1: Identify critical code that must work
Step 2: Write tests for that code
Step 3: Use linting for consistency
Step 4: Test manually on real devices
Step 5: Monitor performance and accessibility`,
    realWorldApplication:
      "Testing is essential in production. Learning to test well prevents bugs and gives confidence.",
    interviewTip:
      "Show you understand testing isn't optional, it's fundamental to good engineering. Companies want quality-focused developers.",
  },
];
