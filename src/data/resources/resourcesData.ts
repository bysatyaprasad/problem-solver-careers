
import { Resource } from '@/components/resources/ResourceCard';

export const resources: Resource[] = [
  {
    title: "How to Learn Technical Skills Efficiently",
    description: "An in-depth guide on effective learning strategies for technical skills with practical examples and exercises.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    type: "video",
    tags: ["learning", "technical skills", "study strategies"],
    free: true
  },
  {
    title: "Building a Professional Portfolio from Scratch",
    description: "Learn how to create an impressive portfolio that showcases your skills, even if you're just starting out.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    type: "video",
    tags: ["portfolio", "career development", "personal branding"],
    free: true
  },
  {
    title: "freeCodeCamp",
    description: "A free, comprehensive platform to learn web development, data science, and more through interactive lessons and projects.",
    url: "https://www.freecodecamp.org/",
    type: "course",
    tags: ["programming", "web development", "data science"],
    free: true
  },
  {
    title: "Khan Academy",
    description: "Free courses on math, science, computing, economics, and more with interactive exercises and videos.",
    url: "https://www.khanacademy.org/",
    type: "course",
    tags: ["math", "science", "economics", "fundamentals"],
    free: true
  },
  {
    title: "LinkedIn Learning",
    description: "Professional courses on business, technology, and creative skills with certificates upon completion.",
    url: "https://www.linkedin.com/learning/",
    type: "course",
    tags: ["professional skills", "technology", "business"],
    free: false
  },
  {
    title: "Coursera",
    description: "Online courses from top universities and companies, with certificates and degrees available.",
    url: "https://www.coursera.org/",
    type: "course",
    tags: ["academics", "professional certificates", "university courses"],
    free: false
  },
  {
    title: "GitHub",
    description: "Platform for version control and collaboration that lets you work on projects with others.",
    url: "https://github.com/",
    type: "tool",
    tags: ["code collaboration", "version control", "portfolio"],
    free: true
  },
  {
    title: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases to organize your learning and projects.",
    url: "https://www.notion.so/",
    type: "tool",
    tags: ["productivity", "organization", "project management"],
    free: true
  },
  {
    title: "Stack Overflow",
    description: "Community-driven Q&A platform where you can find answers to technical questions and help others.",
    url: "https://stackoverflow.com/",
    type: "community",
    tags: ["technical support", "programming", "problem solving"],
    free: true
  },
  {
    title: "Medium",
    description: "Platform with articles on technology, career development, and personal growth written by professionals.",
    url: "https://medium.com/",
    type: "website",
    tags: ["articles", "career insights", "personal development"],
    free: false
  },
  {
    title: "Dev.to",
    description: "Community of software developers sharing ideas and helping each other grow.",
    url: "https://dev.to/",
    type: "community",
    tags: ["programming", "community", "career development"],
    free: true
  },
  {
    title: "Canva",
    description: "Design tool for creating professional presentations, resumes, social media graphics, and more.",
    url: "https://www.canva.com/",
    type: "tool",
    tags: ["design", "portfolio creation", "visual communication"],
    free: true
  },
  {
    title: "Codecademy",
    description: "Interactive platform offering coding classes in various programming languages with hands-on practice.",
    url: "https://www.codecademy.com/",
    type: "course",
    tags: ["programming", "coding", "interactive learning"],
    free: false
  },
  {
    title: "edX",
    description: "Platform offering courses from top institutions on subjects ranging from computer science to humanities.",
    url: "https://www.edx.org/",
    type: "course",
    tags: ["university courses", "professional education", "certificates"],
    free: true
  },
  {
    title: "Udemy",
    description: "Marketplace for online learning with courses on virtually any skill from programming to photography.",
    url: "https://www.udemy.com/",
    type: "course",
    tags: ["skills development", "professional training", "diverse topics"],
    free: false
  },
  {
    title: "HackerRank",
    description: "Platform for practicing coding skills, preparing for technical interviews, and participating in challenges.",
    url: "https://www.hackerrank.com/",
    type: "tool",
    tags: ["coding practice", "technical interviews", "competitive programming"],
    free: true
  },
  {
    title: "LeetCode",
    description: "Platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.",
    url: "https://leetcode.com/",
    type: "tool",
    tags: ["algorithm practice", "coding interviews", "problem solving"],
    free: true
  },
  {
    title: "Kaggle",
    description: "Platform for data science competitions, datasets, notebooks, and learning resources for data analysis.",
    url: "https://www.kaggle.com/",
    type: "community",
    tags: ["data science", "machine learning", "competitions"],
    free: true
  },
  {
    title: "Figma",
    description: "Collaborative design tool for creating user interfaces, prototypes, and design systems.",
    url: "https://www.figma.com/",
    type: "tool",
    tags: ["UI design", "prototyping", "collaboration"],
    free: true
  },
  {
    title: "Brilliant",
    description: "Platform offering courses in math, science, and computer science with interactive problem-solving.",
    url: "https://brilliant.org/",
    type: "course",
    tags: ["math", "science", "interactive learning"],
    free: false
  },
  {
    title: "Duolingo",
    description: "Language learning platform offering free courses in dozens of languages through gamified lessons.",
    url: "https://www.duolingo.com/",
    type: "tool",
    tags: ["language learning", "gamification", "accessibility"],
    free: true
  },
  {
    title: "Anki",
    description: "Powerful, intelligent flashcard program that makes remembering things easy through spaced repetition.",
    url: "https://apps.ankiweb.net/",
    type: "tool",
    tags: ["flashcards", "memorization", "spaced repetition"],
    free: true
  },
  {
    title: "Scratch",
    description: "Visual programming language designed for teaching coding concepts to beginners and children.",
    url: "https://scratch.mit.edu/",
    type: "tool",
    tags: ["beginner programming", "visual coding", "education"],
    free: true
  },
  // New resources start here
  {
    title: "Datacamp",
    description: "Interactive learning platform focusing on data science, analytics, and programming through hands-on exercises.",
    url: "https://www.datacamp.com/",
    type: "course",
    tags: ["data science", "programming", "analytics", "statistics"],
    free: false
  },
  {
    title: "Scrimba",
    description: "Interactive coding platform that lets you code along with instructors in a real interactive environment.",
    url: "https://scrimba.com/",
    type: "course",
    tags: ["web development", "interactive learning", "frontend"],
    free: true
  },
  {
    title: "Frontend Mentor",
    description: "Platform that provides real-world projects to improve your front-end coding skills by building real projects.",
    url: "https://www.frontendmentor.io/",
    type: "community",
    tags: ["web development", "design", "challenges", "portfolio"],
    free: true
  },
  {
    title: "The Odin Project",
    description: "Free, comprehensive curriculum to learn full-stack web development with a project-based approach.",
    url: "https://www.theodinproject.com/",
    type: "course",
    tags: ["web development", "open source", "project-based"],
    free: true
  },
  {
    title: "Exercism",
    description: "Platform offering code practice and mentorship to improve programming skills through solving challenges.",
    url: "https://exercism.org/",
    type: "community",
    tags: ["coding practice", "mentorship", "problem solving"],
    free: true
  },
  {
    title: "Google Digital Garage",
    description: "Free online courses on digital marketing, career development, and digital skills from Google.",
    url: "https://learndigital.withgoogle.com/digitalgarage",
    type: "course",
    tags: ["digital marketing", "career development", "Google certification"],
    free: true
  },
  {
    title: "Harvard CS50",
    description: "Introduction to computer science from Harvard University, available for free on edX.",
    url: "https://cs50.harvard.edu/",
    type: "course",
    tags: ["computer science", "programming", "university level"],
    free: true
  },
  {
    title: "Feynman Technique Videos",
    description: "Collection of videos explaining how to use the Feynman Technique for learning complex subjects.",
    url: "https://www.youtube.com/results?search_query=feynman+technique",
    type: "video",
    tags: ["learning techniques", "knowledge retention", "teaching"],
    free: true
  },
  {
    title: "Draw.io",
    description: "Free online diagram software for making flowcharts, process diagrams, UML, ER diagrams, and more.",
    url: "https://draw.io/",
    type: "tool",
    tags: ["diagramming", "visual learning", "conceptual mapping"],
    free: true
  },
  {
    title: "Open AI Cookbook",
    description: "Collection of examples and guides for using the OpenAI API for various applications and tasks.",
    url: "https://cookbook.openai.com/",
    type: "website",
    tags: ["AI development", "prompt engineering", "API usage"],
    free: true
  },
  {
    title: "Practical Deep Learning for Coders",
    description: "Course by fast.ai teaching deep learning from a practical, code-first approach.",
    url: "https://course.fast.ai/",
    type: "course",
    tags: ["deep learning", "AI", "machine learning", "practical"],
    free: true
  },
  {
    title: "MindTools",
    description: "Resource for leadership skills, management techniques, personal development, and productivity tools.",
    url: "https://www.mindtools.com/",
    type: "website",
    tags: ["soft skills", "leadership", "personal development"],
    free: false
  },
  {
    title: "Replit",
    description: "Browser-based IDE for coding in 50+ languages without setting up a local environment.",
    url: "https://replit.com/",
    type: "tool",
    tags: ["coding environment", "collaboration", "learning"],
    free: true
  },
  {
    title: "Obsidian",
    description: "Knowledge base and note-taking app that works on local Markdown files and helps build a personal knowledge graph.",
    url: "https://obsidian.md/",
    type: "tool",
    tags: ["note-taking", "knowledge management", "personal wiki"],
    free: true
  },
  {
    title: "Quillbot",
    description: "AI-powered paraphrasing tool to improve writing and help with content creation.",
    url: "https://quillbot.com/",
    type: "tool",
    tags: ["writing", "AI assistant", "content creation"],
    free: true
  }
];
