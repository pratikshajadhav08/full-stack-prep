export const gitQuestions = [
  {
    id: "git-1",

    question: "What is Git?",

    difficulty: "basic",

    shortAnswer:
      "Git is a distributed version control system used to track changes in source code and collaborate with developers.",

    detailedAnswer: `Git is a Version Control System (VCS) created by Linus Torvalds.

It helps developers:

- Track code changes
- Manage project history
- Collaborate with teams
- Create branches
- Merge code safely

Git stores snapshots of files, making it easy to restore previous versions and manage software development efficiently.`,

    keyPoints: [
      "Distributed version control system",

      "Tracks code changes",

      "Supports collaboration",

      "Maintains project history",

      "Widely used in software development",
    ],

    codeExample: `git init

git add .

git commit -m "Initial Commit"`,

    language: "git",

    commonMistakes: [
      "Not committing regularly",

      "Ignoring branch strategy",

      "Working directly on main branch",

      "Poor commit messages",

      "Not understanding merge conflicts",
    ],

    thinkingProcess: `Step 1: Initialize repository

Step 2: Track files

Step 3: Commit changes

Step 4: Create branches

Step 5: Collaborate with team`,

    realWorldApplication:
      "Used in almost every software project for version control and team collaboration.",

    interviewTip:
      "Git is a distributed version control system that tracks changes and enables collaborative development.",
  },

  {
    id: "git-2",

    question: "What are the features of Git?",

    difficulty: "basic",

    shortAnswer:
      "Git provides version control, branching, merging, distributed development, speed, and collaboration features.",

    detailedAnswer: `Git includes many powerful features for software development.

Main Features:

- Distributed Version Control
- Branching
- Merging
- Fast Performance
- Data Integrity
- Collaboration
- Offline Development
- Rollback Support

These features make Git the most popular version control system today.`,

    keyPoints: [
      "Distributed architecture",

      "Fast performance",

      "Supports branching",

      "Maintains data integrity",

      "Enables collaboration",
    ],

    codeExample: `Git Features

↓

Track Changes

↓

Branch

↓

Merge

↓

Deploy`,

    language: "git",

    commonMistakes: [
      "Not using branches",

      "Poor workflow management",

      "Ignoring commit history",

      "Not syncing repositories",

      "Skipping code reviews",
    ],

    thinkingProcess: `Step 1: Understand Git features

Step 2: Use version control

Step 3: Create branches

Step 4: Merge changes

Step 5: Collaborate effectively`,

    realWorldApplication:
      "Used in startups, enterprises, open-source projects, and development teams worldwide.",

    interviewTip:
      "Git is known for speed, branching, distributed development, and reliable version tracking.",
  },

  {
    id: "git-3",

    question: "What is Version Control System (VCS)?",

    difficulty: "basic",

    shortAnswer:
      "A Version Control System is a tool that tracks changes to files over time and allows developers to manage versions of a project.",

    detailedAnswer: `A Version Control System records changes made to files and source code.

Benefits:

- Track modifications
- Restore previous versions
- Collaborate with teams
- Manage project history
- Reduce accidental data loss

Examples:

- Git
- SVN
- Mercurial

Git is currently the most widely used VCS.`,

    keyPoints: [
      "Tracks file changes",

      "Maintains history",

      "Supports collaboration",

      "Allows rollback",

      "Improves development workflow",
    ],

    codeExample: `Version 1

↓

Version 2

↓

Version 3

↓

Restore Any Version`,

    language: "git",

    commonMistakes: [
      "No version control usage",

      "Not committing changes",

      "Poor version tracking",

      "Overwriting files manually",

      "Ignoring backups",
    ],

    thinkingProcess: `Step 1: Save changes

Step 2: Create versions

Step 3: Track history

Step 4: Collaborate

Step 5: Restore if needed`,

    realWorldApplication:
      "Used in software development, documentation management, and collaborative projects.",

    interviewTip:
      "A VCS tracks project history and allows developers to manage changes efficiently.",
  },

  {
    id: "git-4",

    question: "Difference Between Git and GitHub?",

    difficulty: "basic",

    shortAnswer:
      "Git is a version control system, while GitHub is a cloud platform used to host Git repositories.",

    detailedAnswer: `Many beginners confuse Git and GitHub.

Git:

- Version control system
- Installed locally
- Tracks code changes

GitHub:

- Cloud hosting platform
- Stores Git repositories online
- Enables collaboration and code sharing

Git can work without GitHub, but GitHub uses Git internally.`,

    keyPoints: [
      "Git is a tool",

      "GitHub is a platform",

      "Git tracks changes",

      "GitHub hosts repositories",

      "Used together frequently",
    ],

    codeExample: `Local Machine

↓

Git Repository

↓

Push

↓

GitHub Repository`,

    language: "git",

    commonMistakes: [
      "Thinking Git and GitHub are the same",

      "Ignoring local repositories",

      "Not understanding remote repositories",

      "Poor collaboration workflow",

      "Incorrect push/pull operations",
    ],

    thinkingProcess: `Step 1: Understand Git

Step 2: Understand GitHub

Step 3: Connect repositories

Step 4: Push code

Step 5: Collaborate`,

    realWorldApplication:
      "Developers use Git locally and GitHub for team collaboration and code hosting.",

    interviewTip:
      "Git manages version control, while GitHub provides online repository hosting.",
  },

  {
    id: "git-5",

    question: "What is a Repository in Git?",

    difficulty: "basic",

    shortAnswer:
      "A repository is a storage location that contains project files, Git history, commits, and configuration data.",

    detailedAnswer: `A Git repository (repo) stores all project files and version history.

Contains:

- Source Code
- Commit History
- Branches
- Tags
- Configuration Files

Repositories can be:

- Local Repository
- Remote Repository

Every Git project is managed inside a repository.`,

    keyPoints: [
      "Stores project files",

      "Contains commit history",

      "Tracks branches",

      "Supports collaboration",

      "Core Git concept",
    ],

    codeExample: `my-project/

├─ src/

├─ public/

└─ .git/`,

    language: "git",

    commonMistakes: [
      "Deleting .git folder",

      "Poor repository structure",

      "Ignoring README files",

      "Not using remote repositories",

      "Committing unnecessary files",
    ],

    thinkingProcess: `Step 1: Create repository

Step 2: Add files

Step 3: Commit changes

Step 4: Create branches

Step 5: Share repository`,

    realWorldApplication:
      "Every software project uses repositories to manage code and collaboration.",

    interviewTip:
      "A repository is the central storage location for a Git-managed project.",
  },
  {
    id: "git-6",

    question: "What is git init?",

    difficulty: "basic",

    shortAnswer:
      "git init initializes a new Git repository in a project folder.",

    detailedAnswer: `The git init command creates a new Git repository.

When executed:

- Creates a .git folder
- Starts version tracking
- Enables Git commands
- Initializes repository metadata

This is usually the first Git command used in a new project.`,

    keyPoints: [
      "Initializes repository",

      "Creates .git directory",

      "Starts version control",

      "First Git command",

      "Used in new projects",
    ],

    codeExample: `mkdir my-project

cd my-project

git init`,

    language: "git",

    commonMistakes: [
      "Running in wrong directory",

      "Creating nested repositories",

      "Deleting .git folder",

      "Not verifying repository status",

      "Ignoring initialization output",
    ],

    thinkingProcess: `Step 1: Create project folder

Step 2: Open terminal

Step 3: Run git init

Step 4: Verify .git folder

Step 5: Start tracking files`,

    realWorldApplication: "Used when starting a new software project.",

    interviewTip:
      "git init creates a local Git repository by generating the hidden .git directory.",
  },

  {
    id: "git-7",

    question: "What is git clone?",

    difficulty: "basic",

    shortAnswer:
      "git clone creates a copy of a remote repository on your local machine.",

    detailedAnswer: `The git clone command downloads an existing repository.

Benefits:

- Gets complete project history
- Copies all branches
- Connects remote origin automatically
- Enables collaboration

Developers use git clone to start working on existing projects.`,

    keyPoints: [
      "Copies repository",

      "Downloads history",

      "Connects remote origin",

      "Used for collaboration",

      "Creates local repository",
    ],

    codeExample: `git clone

https://github.com/user/project.git`,

    language: "git",

    commonMistakes: [
      "Using wrong repository URL",

      "Cloning into wrong folder",

      "Missing access permissions",

      "Forgetting authentication",

      "Cloning unnecessary repositories",
    ],

    thinkingProcess: `Step 1: Copy repository URL

Step 2: Run git clone

Step 3: Download project

Step 4: Open folder

Step 5: Start development`,

    realWorldApplication:
      "Used when joining existing projects or working with open-source repositories.",

    interviewTip:
      "git clone downloads a complete copy of a repository including its commit history.",
  },

  {
    id: "git-8",

    question: "What is git add?",

    difficulty: "basic",

    shortAnswer:
      "git add moves changes from the working directory to the staging area.",

    detailedAnswer: `Git uses a staging area before creating commits.

git add is used to:

- Stage new files
- Stage modified files
- Prepare files for commit

Common Commands:

git add file.js

git add .

git add src/

The command does not create a commit; it only stages changes.`,

    keyPoints: [
      "Stages changes",

      "Prepares for commit",

      "Works on files and folders",

      "Uses staging area",

      "Required before commit",
    ],

    codeExample: `git add index.js

git add .`,

    language: "git",

    commonMistakes: [
      "Forgetting git add",

      "Adding unnecessary files",

      "Using git add . blindly",

      "Ignoring .gitignore",

      "Not reviewing changes",
    ],

    thinkingProcess: `Step 1: Modify files

Step 2: Run git add

Step 3: Stage changes

Step 4: Verify status

Step 5: Commit changes`,

    realWorldApplication: "Used before every Git commit.",

    interviewTip:
      "git add places changes into the staging area before committing.",
  },

  {
    id: "git-9",

    question: "What is git commit?",

    difficulty: "basic",

    shortAnswer:
      "git commit saves staged changes as a snapshot in Git history.",

    detailedAnswer: `A commit records changes permanently in the repository history.

Benefits:

- Creates project checkpoints
- Maintains history
- Enables rollback
- Improves collaboration

Each commit should have a meaningful message describing the changes.`,

    keyPoints: [
      "Creates snapshot",

      "Stores project history",

      "Requires staged changes",

      "Supports rollback",

      "Uses commit messages",
    ],

    codeExample: `git commit -m

"Add login functionality"`,

    language: "git",

    commonMistakes: [
      "Poor commit messages",

      "Large commits",

      "Skipping commits",

      "Committing unfinished code",

      "Committing sensitive data",
    ],

    thinkingProcess: `Step 1: Stage files

Step 2: Run commit

Step 3: Add message

Step 4: Save snapshot

Step 5: Continue development`,

    realWorldApplication:
      "Used throughout software development to track project progress.",

    interviewTip:
      "A commit is a permanent snapshot of staged changes in Git history.",
  },

  {
    id: "git-10",

    question: "What is git status?",

    difficulty: "basic",

    shortAnswer:
      "git status displays the current state of the working directory and staging area.",

    detailedAnswer: `git status is one of the most frequently used Git commands.

It shows:

- Modified files
- Staged files
- Untracked files
- Current branch
- Commit readiness

Developers often run git status before committing changes.`,

    keyPoints: [
      "Shows repository state",

      "Displays staged files",

      "Displays modified files",

      "Shows current branch",

      "Useful before commit",
    ],

    codeExample: `git status`,

    language: "git",

    commonMistakes: [
      "Ignoring status output",

      "Committing without checking status",

      "Not noticing untracked files",

      "Forgetting staged changes",

      "Working on wrong branch",
    ],

    thinkingProcess: `Step 1: Run git status

Step 2: Review changes

Step 3: Stage files

Step 4: Verify status

Step 5: Commit changes`,

    realWorldApplication:
      "Used daily by developers to monitor repository changes.",

    interviewTip:
      "git status shows exactly what Git is tracking and what will be included in the next commit.",
  },
  {
    id: "git-11",

    question: "What is git log?",

    difficulty: "basic",

    shortAnswer: "git log displays the commit history of a repository.",

    detailedAnswer: `The git log command shows all commits made in a repository.

Information Displayed:

- Commit ID (SHA)
- Author
- Date
- Commit Message

Useful Options:

- git log --oneline
- git log --graph
- git log --all

It helps developers understand project history and track changes.`,

    keyPoints: [
      "Shows commit history",

      "Displays author information",

      "Displays commit messages",

      "Useful for debugging",

      "Tracks project progress",
    ],

    codeExample: `git log

git log --oneline`,

    language: "git",

    commonMistakes: [
      "Ignoring commit history",

      "Not using filters",

      "Confusing commit IDs",

      "Poor commit messages",

      "Not checking branch history",
    ],

    thinkingProcess: `Step 1: Run git log

Step 2: Review commits

Step 3: Identify changes

Step 4: Track history

Step 5: Debug issues`,

    realWorldApplication:
      "Used for auditing changes, debugging, and reviewing project history.",

    interviewTip: "git log provides a complete history of repository commits.",
  },

  {
    id: "git-12",

    question: "What is git diff?",

    difficulty: "basic",

    shortAnswer:
      "git diff shows the differences between file versions, commits, or branches.",

    detailedAnswer: `git diff compares changes in code.

It can compare:

- Working Directory vs Staging Area
- Staging Area vs Repository
- Branch vs Branch
- Commit vs Commit

Developers use git diff before committing to review changes.`,

    keyPoints: [
      "Compares code changes",

      "Shows added lines",

      "Shows removed lines",

      "Useful before commit",

      "Supports branch comparison",
    ],

    codeExample: `git diff

git diff --staged`,

    language: "git",

    commonMistakes: [
      "Not reviewing changes",

      "Confusing staged and unstaged differences",

      "Ignoring large diffs",

      "Skipping code review",

      "Using wrong comparison target",
    ],

    thinkingProcess: `Step 1: Modify file

Step 2: Run git diff

Step 3: Review changes

Step 4: Fix mistakes

Step 5: Commit confidently`,

    realWorldApplication: "Used during development and code review processes.",

    interviewTip:
      "git diff helps developers inspect changes before creating commits.",
  },

  {
    id: "git-13",

    question: "What is .gitignore?",

    difficulty: "basic",

    shortAnswer:
      ".gitignore is a file that tells Git which files and folders should not be tracked.",

    detailedAnswer: `The .gitignore file prevents unnecessary files from being committed.

Common Entries:

- node_modules/
- .env
- dist/
- build/
- logs/

Benefits:

- Cleaner repositories
- Improved security
- Reduced repository size
- Better project organization`,

    keyPoints: [
      "Excludes files from tracking",

      "Protects sensitive files",

      "Reduces repository clutter",

      "Improves organization",

      "Widely used in projects",
    ],

    codeExample: `node_modules/

.env

dist/

build/`,

    language: "git",

    commonMistakes: [
      "Committing .env files",

      "Adding files after tracking starts",

      "Incorrect patterns",

      "Ignoring security risks",

      "Large repository sizes",
    ],

    thinkingProcess: `Step 1: Identify files

Step 2: Add to .gitignore

Step 3: Verify exclusion

Step 4: Commit safely

Step 5: Maintain file`,

    realWorldApplication:
      "Used to exclude dependencies, secrets, logs, and generated files.",

    interviewTip:
      ".gitignore prevents Git from tracking unwanted files and directories.",
  },

  {
    id: "git-14",

    question: "What is a Branch in Git?",

    difficulty: "basic",

    shortAnswer:
      "A branch is an independent line of development that allows developers to work on features without affecting the main codebase.",

    detailedAnswer: `Branches enable parallel development.

Benefits:

- Feature development
- Bug fixes
- Experimentation
- Team collaboration

Common Branches:

- main
- develop
- feature/*
- bugfix/*

Branches can later be merged into the main branch.`,

    keyPoints: [
      "Separate line of development",

      "Supports teamwork",

      "Protects main branch",

      "Enables experimentation",

      "Can be merged later",
    ],

    codeExample: `main

↓

feature-login

↓

feature-dashboard`,

    language: "git",

    commonMistakes: [
      "Working directly on main",

      "Long-lived branches",

      "Poor branch naming",

      "Not syncing branches",

      "Merge conflicts",
    ],

    thinkingProcess: `Step 1: Create branch

Step 2: Develop feature

Step 3: Commit changes

Step 4: Merge branch

Step 5: Delete branch`,

    realWorldApplication: "Used in all modern software development workflows.",

    interviewTip:
      "Branches allow developers to work independently without affecting production code.",
  },

  {
    id: "git-15",

    question: "How do you create a branch?",

    difficulty: "basic",

    shortAnswer:
      "A branch is created using the git branch or git switch command.",

    detailedAnswer: `Git provides multiple ways to create branches.

Commands:

git branch feature-login

git switch -c feature-login

git checkout -b feature-login

After creation, developers can switch to the branch and start development.`,

    keyPoints: [
      "Creates new branch",

      "Supports feature development",

      "Uses branch commands",

      "Protects main branch",

      "Common Git workflow",
    ],

    codeExample: `git branch feature-login

git switch feature-login

// OR

git switch -c feature-login`,

    language: "git",

    commonMistakes: [
      "Creating duplicate branches",

      "Poor branch names",

      "Not switching branches",

      "Working on wrong branch",

      "Forgetting to push branch",
    ],

    thinkingProcess: `Step 1: Choose branch name

Step 2: Create branch

Step 3: Switch branch

Step 4: Start coding

Step 5: Commit changes`,

    realWorldApplication:
      "Used when building new features, fixing bugs, or experimenting safely.",

    interviewTip:
      "Modern Git prefers git switch -c branch-name for creating and switching branches.",
  },
  {
    id: "git-16",

    question: "What is git checkout?",

    difficulty: "basic",

    shortAnswer:
      "git checkout is used to switch branches or restore files from a repository.",

    detailedAnswer: `git checkout is an older Git command with multiple purposes.

Uses:

- Switch branches
- Restore files
- Checkout specific commits

Examples:

git checkout main

git checkout feature-login

git checkout file.js

Modern Git recommends using git switch and git restore for clarity.`,

    keyPoints: [
      "Switches branches",

      "Restores files",

      "Can checkout commits",

      "Older Git command",

      "Replaced by switch and restore",
    ],

    codeExample: `git checkout main

git checkout feature-login`,

    language: "git",

    commonMistakes: [
      "Using checkout for too many tasks",

      "Switching without committing changes",

      "Working on wrong branch",

      "Overwriting changes accidentally",

      "Confusing checkout and clone",
    ],

    thinkingProcess: `Step 1: Select target branch

Step 2: Run checkout

Step 3: Verify branch

Step 4: Continue work

Step 5: Commit changes`,

    realWorldApplication:
      "Used in older Git workflows for branch navigation and file recovery.",

    interviewTip:
      "git checkout can switch branches, but modern Git prefers git switch.",
  },

  {
    id: "git-17",

    question: "What is git switch?",

    difficulty: "basic",

    shortAnswer:
      "git switch is a modern Git command used specifically for changing branches.",

    detailedAnswer: `git switch was introduced to simplify branch switching.

Benefits:

- Easier to understand
- Branch-focused command
- Safer than checkout
- Cleaner syntax

Common Commands:

git switch main

git switch feature-login

git switch -c new-feature`,

    keyPoints: [
      "Modern branch command",

      "Simpler than checkout",

      "Supports branch creation",

      "Improves readability",

      "Recommended by Git",
    ],

    codeExample: `git switch main

git switch -c feature-auth`,

    language: "git",

    commonMistakes: [
      "Using checkout unnecessarily",

      "Forgetting to commit before switching",

      "Switching to non-existent branches",

      "Working on wrong branch",

      "Ignoring branch status",
    ],

    thinkingProcess: `Step 1: Choose branch

Step 2: Run switch command

Step 3: Verify branch

Step 4: Continue development

Step 5: Commit changes`,

    realWorldApplication: "Used in modern Git workflows for branch management.",

    interviewTip:
      "git switch is the newer and cleaner alternative to git checkout for branch switching.",
  },

  {
    id: "git-18",

    question: "What is git merge?",

    difficulty: "basic",

    shortAnswer:
      "git merge combines changes from one branch into another branch.",

    detailedAnswer: `git merge integrates work from multiple branches.

Typical Workflow:

1. Switch to target branch
2. Run merge command
3. Resolve conflicts if needed
4. Commit merge

Git automatically combines changes whenever possible.`,

    keyPoints: [
      "Combines branches",

      "Supports collaboration",

      "Preserves history",

      "May create merge commit",

      "Core Git operation",
    ],

    codeExample: `git switch main

git merge feature-login`,

    language: "git",

    commonMistakes: [
      "Merging wrong branch",

      "Ignoring conflicts",

      "Not testing after merge",

      "Merging outdated branches",

      "Skipping code review",
    ],

    thinkingProcess: `Step 1: Finish feature

Step 2: Switch target branch

Step 3: Merge feature

Step 4: Resolve conflicts

Step 5: Test application`,

    realWorldApplication:
      "Used when integrating completed features into the main codebase.",

    interviewTip:
      "git merge combines branch histories while preserving all commits.",
  },

  {
    id: "git-19",

    question: "What is a Merge Conflict?",

    difficulty: "basic",

    shortAnswer:
      "A merge conflict occurs when Git cannot automatically combine changes from different branches.",

    detailedAnswer: `Merge conflicts happen when two branches modify the same part of a file.

Example:

Branch A changes line 10

Branch B changes line 10

Git cannot determine which version to keep automatically.

Developers must manually resolve the conflict and complete the merge.`,

    keyPoints: [
      "Occurs during merge",

      "Requires manual resolution",

      "Happens on overlapping changes",

      "Common in team projects",

      "Must be resolved before merge completes",
    ],

    codeExample: `<<<<<<< HEAD

Current Branch Code

=======

Incoming Branch Code

>>>>>>> feature-login`,

    language: "git",

    commonMistakes: [
      "Ignoring conflict markers",

      "Deleting correct code",

      "Not testing after resolution",

      "Rushing conflict resolution",

      "Poor team communication",
    ],

    thinkingProcess: `Step 1: Identify conflict

Step 2: Compare versions

Step 3: Choose final code

Step 4: Remove markers

Step 5: Commit merge`,

    realWorldApplication: "Common in collaborative software development.",

    interviewTip:
      "A merge conflict occurs when Git cannot automatically decide which code version should be kept.",
  },

  {
    id: "git-20",

    question: "How do you resolve Merge Conflicts?",

    difficulty: "basic",

    shortAnswer:
      "Merge conflicts are resolved by manually editing conflicting files, removing conflict markers, and committing the result.",

    detailedAnswer: `Conflict Resolution Process:

1. Open conflicted file
2. Locate conflict markers
3. Decide final code
4. Remove markers
5. Save file
6. Stage file
7. Commit merge

Always test the application after resolving conflicts.`,

    keyPoints: [
      "Manual process",

      "Requires code review",

      "Remove conflict markers",

      "Stage resolved files",

      "Complete merge with commit",
    ],

    codeExample: `git status

// Resolve conflicts

git add .

git commit`,

    language: "git",

    commonMistakes: [
      "Leaving conflict markers",

      "Choosing wrong code",

      "Skipping testing",

      "Forgetting git add",

      "Not communicating with team",
    ],

    thinkingProcess: `Step 1: Open file

Step 2: Review changes

Step 3: Resolve conflict

Step 4: Stage file

Step 5: Commit merge`,

    realWorldApplication:
      "Used daily in teams where multiple developers modify the same files.",

    interviewTip:
      "The key to resolving conflicts is understanding both changes before deciding the final version.",
  },
  {
    id: "git-21",

    question: "What is git rebase?",

    difficulty: "intermediate",

    shortAnswer:
      "git rebase moves or reapplies commits from one branch onto another branch to create a cleaner history.",

    detailedAnswer: `git rebase is used to integrate changes from one branch into another.

Instead of creating a merge commit, rebase rewrites commit history by placing commits on top of another branch.

Benefits:

- Cleaner history
- Linear commit timeline
- Easier project tracking

However, rebasing shared branches should be done carefully because it rewrites history.`,

    keyPoints: [
      "Rewrites commit history",

      "Creates linear history",

      "Alternative to merge",

      "Avoids unnecessary merge commits",

      "Use carefully on shared branches",
    ],

    codeExample: `git switch feature-login

git rebase main`,

    language: "git",

    commonMistakes: [
      "Rebasing shared branches",

      "Losing commits",

      "Ignoring conflicts",

      "Not understanding history rewriting",

      "Using rebase unnecessarily",
    ],

    thinkingProcess: `Step 1: Update main branch

Step 2: Switch feature branch

Step 3: Run rebase

Step 4: Resolve conflicts

Step 5: Continue rebase`,

    realWorldApplication:
      "Used to keep commit history clean before merging features.",

    interviewTip:
      "Rebase creates a cleaner history, while merge preserves complete branch history.",
  },

  {
    id: "git-22",

    question: "Difference Between Merge and Rebase?",

    difficulty: "intermediate",

    shortAnswer:
      "Merge combines histories with a merge commit, while rebase rewrites history into a linear sequence.",

    detailedAnswer: `Both merge and rebase integrate changes.

Merge:

- Preserves history
- Creates merge commit
- Safer for teams

Rebase:

- Rewrites history
- Creates linear history
- Cleaner commit log

Choice depends on team workflow and project requirements.`,

    keyPoints: [
      "Merge preserves history",

      "Rebase rewrites history",

      "Merge creates merge commit",

      "Rebase creates linear history",

      "Both integrate branches",
    ],

    codeExample: `Merge:

main ← merge ← feature

Rebase:

main → feature commits replayed`,

    language: "git",

    commonMistakes: [
      "Using rebase on shared branches",

      "Confusing merge and rebase",

      "Ignoring team workflow",

      "Creating unnecessary merge commits",

      "Not understanding history changes",
    ],

    thinkingProcess: `Step 1: Understand merge

Step 2: Understand rebase

Step 3: Compare history

Step 4: Choose workflow

Step 5: Apply correctly`,

    realWorldApplication:
      "Used in collaborative Git workflows and pull request management.",

    interviewTip:
      "Merge preserves history; rebase creates a cleaner linear history.",
  },

  {
    id: "git-23",

    question: "What is git stash?",

    difficulty: "intermediate",

    shortAnswer:
      "git stash temporarily saves uncommitted changes so you can switch tasks without committing them.",

    detailedAnswer: `git stash stores modified files in a temporary stack.

Use Cases:

- Urgent bug fix
- Branch switching
- Temporary work pause

Commands:

git stash

git stash list

git stash apply

git stash pop

Stashed changes can be restored later.`,

    keyPoints: [
      "Temporarily saves work",

      "Avoids unnecessary commits",

      "Supports multiple stashes",

      "Easy restoration",

      "Useful during context switching",
    ],

    codeExample: `git stash

git switch main

git stash pop`,

    language: "git",

    commonMistakes: [
      "Forgetting stashed work",

      "Too many stashes",

      "Applying wrong stash",

      "Not naming stashes",

      "Assuming stash is permanent",
    ],

    thinkingProcess: `Step 1: Save changes

Step 2: Switch tasks

Step 3: Complete work

Step 4: Restore stash

Step 5: Continue development`,

    realWorldApplication:
      "Used when developers need to quickly change branches without committing unfinished work.",

    interviewTip:
      "git stash is like a temporary storage area for uncommitted changes.",
  },

  {
    id: "git-24",

    question: "What is git reset?",

    difficulty: "intermediate",

    shortAnswer:
      "git reset moves the current branch pointer and can remove commits, staged changes, or working directory changes.",

    detailedAnswer: `git reset is used to undo changes.

Common Types:

- --soft
- --mixed
- --hard

soft:
Keeps staged changes.

mixed:
Keeps working directory changes.

hard:
Deletes changes completely.

Use git reset carefully because it can permanently remove work.`,

    keyPoints: [
      "Undo changes",

      "Moves HEAD pointer",

      "Supports soft, mixed, hard",

      "Can remove commits",

      "Potentially destructive",
    ],

    codeExample: `git reset --soft HEAD~1

git reset --hard HEAD~1`,

    language: "git",

    commonMistakes: [
      "Using hard reset accidentally",

      "Losing work",

      "Resetting shared commits",

      "Ignoring backups",

      "Not understanding reset modes",
    ],

    thinkingProcess: `Step 1: Identify target commit

Step 2: Choose reset mode

Step 3: Execute reset

Step 4: Verify history

Step 5: Continue safely`,

    realWorldApplication:
      "Used to fix mistakes before code is shared with others.",

    interviewTip:
      "git reset can rewrite history, so use it carefully on shared repositories.",
  },

  {
    id: "git-25",

    question: "What is git revert?",

    difficulty: "intermediate",

    shortAnswer:
      "git revert creates a new commit that reverses the changes introduced by a previous commit.",

    detailedAnswer: `Unlike reset, git revert does not remove commit history.

Benefits:

- Safe for shared repositories
- Preserves history
- Creates reversal commit
- Easy collaboration

This makes revert the preferred way to undo changes in team environments.`,

    keyPoints: [
      "Creates undo commit",

      "Preserves history",

      "Safe for teams",

      "Does not rewrite history",

      "Common production workflow",
    ],

    codeExample: `git revert

a1b2c3d`,

    language: "git",

    commonMistakes: [
      "Using reset instead of revert",

      "Reverting wrong commit",

      "Ignoring conflicts",

      "Not testing reverted code",

      "Multiple unnecessary reverts",
    ],

    thinkingProcess: `Step 1: Find commit

Step 2: Run revert

Step 3: Create reversal commit

Step 4: Test application

Step 5: Push changes`,

    realWorldApplication:
      "Used to safely undo production changes without rewriting Git history.",

    interviewTip:
      "Use git revert when working with shared repositories because it preserves commit history.",
  },
  {
    id: "git-26",

    question: "What is git fetch?",

    difficulty: "intermediate",

    shortAnswer:
      "git fetch downloads the latest changes from a remote repository without merging them into the current branch.",

    detailedAnswer: `git fetch retrieves updates from a remote repository.

It downloads:

- New commits
- New branches
- Updated references

However, it does not modify your working files or current branch.

This allows developers to review changes before integrating them.`,

    keyPoints: [
      "Downloads remote changes",

      "Does not merge changes",

      "Safe operation",

      "Updates remote tracking branches",

      "Useful before reviewing updates",
    ],

    codeExample: `git fetch origin`,

    language: "git",

    commonMistakes: [
      "Expecting automatic merge",

      "Ignoring fetched updates",

      "Not checking differences",

      "Confusing fetch and pull",

      "Working with outdated branches",
    ],

    thinkingProcess: `Step 1: Connect remote

Step 2: Download updates

Step 3: Review changes

Step 4: Decide integration method

Step 5: Merge or rebase`,

    realWorldApplication:
      "Used to safely inspect team updates before merging them into local branches.",

    interviewTip: "git fetch downloads changes only; it does not merge them.",
  },

  {
    id: "git-27",

    question: "What is git pull?",

    difficulty: "intermediate",

    shortAnswer:
      "git pull downloads remote changes and immediately merges them into the current branch.",

    detailedAnswer: `git pull is a combination of:

git fetch

+

git merge

It updates your local branch with changes from the remote repository.

Developers commonly run git pull before starting work to ensure they have the latest code.`,

    keyPoints: [
      "Downloads changes",

      "Automatically merges",

      "Updates current branch",

      "Combines fetch and merge",

      "Common daily command",
    ],

    codeExample: `git pull origin main`,

    language: "git",

    commonMistakes: [
      "Pulling without committing local work",

      "Unexpected merge conflicts",

      "Pulling wrong branch",

      "Ignoring incoming changes",

      "Not reviewing updates",
    ],

    thinkingProcess: `Step 1: Contact remote

Step 2: Download changes

Step 3: Merge updates

Step 4: Resolve conflicts if needed

Step 5: Continue development`,

    realWorldApplication:
      "Used daily to synchronize local repositories with team updates.",

    interviewTip: "git pull = git fetch + git merge.",
  },

  {
    id: "git-28",

    question: "Difference Between Fetch and Pull?",

    difficulty: "intermediate",

    shortAnswer:
      "git fetch only downloads changes, while git pull downloads and merges them automatically.",

    detailedAnswer: `Both commands retrieve updates from a remote repository.

git fetch:

- Downloads changes
- Does not merge
- Safer for review

git pull:

- Downloads changes
- Merges automatically
- Faster workflow

Fetch gives more control, while pull provides convenience.`,

    keyPoints: [
      "Fetch only downloads",

      "Pull downloads and merges",

      "Fetch is safer",

      "Pull is faster",

      "Common interview topic",
    ],

    codeExample: `git fetch origin

git pull origin main`,

    language: "git",

    commonMistakes: [
      "Using pull blindly",

      "Not reviewing changes",

      "Confusing fetch behavior",

      "Unexpected merge conflicts",

      "Working with outdated branches",
    ],

    thinkingProcess: `Step 1: Understand fetch

Step 2: Understand pull

Step 3: Compare workflows

Step 4: Choose appropriately

Step 5: Integrate updates`,

    realWorldApplication:
      "Teams often use fetch for code reviews and pull for quick synchronization.",

    interviewTip: "Fetch downloads only; pull downloads and merges.",
  },

  {
    id: "git-29",

    question: "What is git push?",

    difficulty: "intermediate",

    shortAnswer:
      "git push uploads local commits from a repository to a remote repository.",

    detailedAnswer: `git push shares your local changes with a remote repository.

Uses:

- Share completed work
- Backup commits
- Collaborate with teams
- Trigger CI/CD pipelines

Before pushing, developers typically commit their changes locally.`,

    keyPoints: [
      "Uploads commits",

      "Updates remote repository",

      "Supports collaboration",

      "Shares code changes",

      "Common Git workflow",
    ],

    codeExample: `git push origin main

git push origin feature-login`,

    language: "git",

    commonMistakes: [
      "Pushing unfinished code",

      "Pushing wrong branch",

      "Force pushing unnecessarily",

      "Ignoring code review process",

      "Not pulling latest changes first",
    ],

    thinkingProcess: `Step 1: Commit changes

Step 2: Verify branch

Step 3: Run push

Step 4: Upload commits

Step 5: Verify remote update`,

    realWorldApplication:
      "Used to share code with teammates and deploy applications.",

    interviewTip:
      "git push sends local commits to a remote repository such as GitHub.",
  },

  {
    id: "git-30",

    question: "What is Pull Request (PR)?",

    difficulty: "intermediate",

    shortAnswer:
      "A Pull Request is a request to merge changes from one branch into another after review and approval.",

    detailedAnswer: `A Pull Request (PR) is commonly used on GitHub, GitLab, and Bitbucket.

Workflow:

1. Create feature branch
2. Push branch
3. Open Pull Request
4. Code Review
5. Approve Changes
6. Merge Branch

PRs improve code quality through discussion and review.`,

    keyPoints: [
      "Requests code merge",

      "Supports code review",

      "Improves collaboration",

      "Tracks discussions",

      "Common GitHub workflow",
    ],

    codeExample: `Feature Branch

↓

Push to GitHub

↓

Create PR

↓

Review

↓

Merge`,

    language: "git",

    commonMistakes: [
      "Large pull requests",

      "No code review",

      "Poor PR descriptions",

      "Ignoring feedback",

      "Merging without testing",
    ],

    thinkingProcess: `Step 1: Create branch

Step 2: Push code

Step 3: Open PR

Step 4: Review changes

Step 5: Merge after approval`,

    realWorldApplication:
      "Used in professional development teams to review and merge code safely.",

    interviewTip:
      "A Pull Request is a collaborative review process before merging code into a target branch.",
  },
];
