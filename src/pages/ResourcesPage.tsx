import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Youtube, 
  Globe, 
  Code, 
  User, 
  MessageSquare, 
  Brain, 
  Clipboard, 
  ScrollText, 
  Trophy, 
  Lightbulb, 
  PenTool, 
  BarChart, 
  FileQuestion, 
  Workflow,
  Search,
  CheckCircle,
  Zap,  // Replace Lightning with Zap
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';

type Resource = {
  title: string;
  description: string;
  url: string;
  type: 'video' | 'course' | 'website' | 'tool' | 'community';
  tags: string[];
  free: boolean;
};

const resources: Resource[] = [
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
  {
    title: "Khan Academy",
    description: "Free courses on math, science, computing, economics, and more with interactive exercises and videos.",
    url: "https://www.khanacademy.org/",
    type: "course",
    tags: ["math", "science", "economics", "fundamentals"],
    free: true
  }
];

type AIPromptCategory = {
  title: string;
  icon: React.ReactNode;
  description: string;
  prompts: {
    prompt: string;
    explanation: string;
  }[];
};

const aiPromptCategories: AIPromptCategory[] = [
  {
    title: "Understanding Complex Concepts",
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    description: "Use AI to break down difficult ideas into understandable pieces and explanations.",
    prompts: [
      {
        prompt: "Explain [complex concept] in simple terms as if I'm 15 years old.",
        explanation: "Gets a simplified explanation that avoids jargon but doesn't oversimplify too much."
      },
      {
        prompt: "Create an analogy to help me understand how [concept] works.",
        explanation: "Provides a relatable comparison to make abstract ideas more concrete."
      },
      {
        prompt: "What are 5 key principles I need to understand about [subject]?",
        explanation: "Identifies the foundational ideas that will help you grasp the bigger picture."
      },
      {
        prompt: "Explain the relationship between [concept A] and [concept B].",
        explanation: "Helps you understand how different ideas connect and influence each other."
      },
      {
        prompt: "What's a step-by-step breakdown of how [process] works?",
        explanation: "Breaks a complex process into manageable, sequential steps."
      }
    ]
  },
  {
    title: "Creating Study Materials",
    icon: <ScrollText className="h-6 w-6 text-purple-600" />,
    description: "Generate customized learning resources tailored to your specific needs.",
    prompts: [
      {
        prompt: "Create a comprehensive study guide for [topic] with key definitions, concepts, and examples.",
        explanation: "Produces a well-organized reference document for a specific subject."
      },
      {
        prompt: "Generate 20 flashcard questions and answers for [subject] focusing on [specific aspect].",
        explanation: "Creates ready-to-use review materials for targeted studying."
      },
      {
        prompt: "Make a concept map showing how the main ideas in [topic] relate to each other.",
        explanation: "Visualizes connections between concepts to strengthen understanding."
      },
      {
        prompt: "Create a timeline of the major developments in [field/historical period].",
        explanation: "Organizes information chronologically to help understand progression and context."
      },
      {
        prompt: "Design a one-page cheat sheet with all the essential formulas and rules for [subject].",
        explanation: "Compiles key information in a compact format for quick reference."
      }
    ]
  },
  {
    title: "Practice & Problem Solving",
    icon: <FileQuestion className="h-6 w-6 text-green-600" />,
    description: "Get customized practice problems and feedback on your solutions.",
    prompts: [
      {
        prompt: "Create 5 practice problems about [topic] at [beginner/intermediate/advanced] level, then provide detailed solutions.",
        explanation: "Generates tailored practice with explanations to check your understanding."
      },
      {
        prompt: "Here's my solution to this problem: [your solution]. What mistakes did I make and how can I improve it?",
        explanation: "Gets personalized feedback on your approach and thinking process."
      },
      {
        prompt: "What are common mistakes students make when learning [topic], and how can I avoid them?",
        explanation: "Helps you anticipate and prevent typical errors in your learning."
      },
      {
        prompt: "Create a practice scenario where I need to apply [concept] to solve a real-world problem.",
        explanation: "Provides context-rich problems that test application of knowledge."
      },
      {
        prompt: "I'm stuck on this problem: [problem]. Can you give me a hint without solving it completely?",
        explanation: "Gets guidance that pushes your thinking without giving away the answer."
      }
    ]
  },
  {
    title: "Learning Strategies & Plans",
    icon: <Workflow className="h-6 w-6 text-amber-600" />,
    description: "Develop effective learning approaches tailored to your goals and learning style.",
    prompts: [
      {
        prompt: "Create a 30-day learning plan for [skill/subject] if I can study 1 hour per day. Include resources and milestones.",
        explanation: "Produces a structured timeline with clear objectives and progress tracking."
      },
      {
        prompt: "What are the most effective learning techniques for [visual/auditory/kinesthetic] learners studying [subject]?",
        explanation: "Provides learning methods aligned with your preferred way of processing information."
      },
      {
        prompt: "I'm preparing for [exam/certification]. What's the most efficient study strategy with 3 weeks left?",
        explanation: "Offers a targeted approach based on time constraints and specific requirements."
      },
      {
        prompt: "How can I apply spaced repetition and active recall techniques to learn [subject] more effectively?",
        explanation: "Suggests implementation of evidence-based learning methods for your specific topic."
      },
      {
        prompt: "What prerequisite knowledge do I need before learning [advanced topic], and in what order should I learn these fundamentals?",
        explanation: "Helps you build a logical learning sequence to ensure proper foundation."
      }
    ]
  },
  {
    title: "Project Development",
    icon: <PenTool className="h-6 w-6 text-red-600" />,
    description: "Get guidance on creating portfolio-worthy projects that demonstrate your skills.",
    prompts: [
      {
        prompt: "Suggest 3 beginner-friendly [type] projects that demonstrate [skill] and provide practical value.",
        explanation: "Offers achievable project ideas that balance learning with meaningful outcomes."
      },
      {
        prompt: "Help me brainstorm a unique project idea that combines [skill A] and [skill B] for my portfolio.",
        explanation: "Generates interdisciplinary project concepts that showcase multiple abilities."
      },
      {
        prompt: "Create a detailed project plan for building [project type], including milestones and technical requirements.",
        explanation: "Provides a structured approach to implementing a complex project successfully."
      },
      {
        prompt: "What are the common challenges when creating [project type] and how can I address them?",
        explanation: "Helps you anticipate and prepare for obstacles you might encounter."
      },
      {
        prompt: "Review my project idea: [your idea]. How can I make it more impressive to potential employers or clients?",
        explanation: "Gets specific suggestions to enhance the impact and demonstration value of your work."
      }
    ]
  },
  {
    title: "Research Assistance",
    icon: <Search className="h-6 w-6 text-cyan-600" />,
    description: "Streamline information gathering and organize research findings effectively.",
    prompts: [
      {
        prompt: "What are the most important recent developments in [field] over the past 2 years?",
        explanation: "Helps you identify current trends and advances to focus your learning."
      },
      {
        prompt: "Create an annotated bibliography of 5 essential resources for understanding [topic].",
        explanation: "Provides a curated list of high-quality sources with context about each one."
      },
      {
        prompt: "Compare and contrast the different schools of thought regarding [topic].",
        explanation: "Outlines various perspectives to help you develop a nuanced understanding."
      },
      {
        prompt: "Summarize the main arguments and evidence from this article: [paste abstract or introduction].",
        explanation: "Extracts key points from research to help you process information efficiently."
      },
      {
        prompt: "What are the most influential papers or resources that introduced breakthrough ideas in [field]?",
        explanation: "Identifies seminal works that shaped the development of a discipline."
      }
    ]
  },
  {
    title: "Skill Assessment & Progress",
    icon: <BarChart className="h-6 w-6 text-indigo-600" />,
    description: "Evaluate your current abilities and track your learning journey effectively.",
    prompts: [
      {
        prompt: "Create a skills assessment test for [skill] with questions at beginner, intermediate, and advanced levels.",
        explanation: "Generates a tool to benchmark your current knowledge and identify gaps."
      },
      {
        prompt: "What are the key milestones or signs of progress when learning [skill]?",
        explanation: "Helps you recognize meaningful improvements in your abilities."
      },
      {
        prompt: "I've been learning [skill] for [time period]. What should I be able to do at this stage, and what should I focus on next?",
        explanation: "Provides expectations based on your experience level and guidance for next steps."
      },
      {
        prompt: "How can I measure my improvement in [skill] objectively?",
        explanation: "Suggests concrete metrics and benchmarks to track your development."
      },
      {
        prompt: "Create a self-evaluation rubric for assessing my proficiency in [skill] across different dimensions.",
        explanation: "Provides a structured framework for honest self-assessment of your abilities."
      }
    ]
  },
  {
    title: "Overcoming Obstacles",
    icon: <Zap className="h-6 w-6 text-yellow-600" />,
    description: "Get strategies for pushing through common learning challenges and mental blocks.",
    prompts: [
      {
        prompt: "I'm feeling overwhelmed by the amount of information in [subject]. How can I break this down into manageable pieces?",
        explanation: "Provides strategies to chunk content and create a structured learning path."
      },
      {
        prompt: "I've hit a plateau in my learning of [skill]. What techniques can help me break through this barrier?",
        explanation: "Offers approaches to overcome stagnation and continue making progress."
      },
      {
        prompt: "How can I stay motivated while learning [difficult subject] over a long period?",
        explanation: "Suggests psychological techniques and practical habits to maintain engagement."
      },
      {
        prompt: "I struggle with [specific aspect] of [subject]. What are alternative ways to approach this that might work better for me?",
        explanation: "Provides different learning angles when conventional methods aren't working."
      },
      {
        prompt: "I have limited time to learn [skill] due to [constraint]. What's the most efficient approach given my situation?",
        explanation: "Offers strategies optimized for your specific circumstances and limitations."
      }
    ]
  }
];

const getIconForResourceType = (type: Resource['type']) => {
  switch (type) {
    case 'video':
      return <Youtube className="h-5 w-5" />;
    case 'course':
      return <BookOpen className="h-5 w-5" />;
    case 'website':
      return <Globe className="h-5 w-5" />;
    case 'tool':
      return <Code className="h-5 w-5" />;
    case 'community':
      return <MessageSquare className="h-5 w-5" />;
    default:
      return <BookOpen className="h-5 w-5" />;
  }
};

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const icon = getIconForResourceType(resource.type);
  
  return (
    <Card className="h-full card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-md ${
            resource.type === 'video' ? 'bg-red-100 text-red-600' :
            resource.type === 'course' ? 'bg-blue-100 text-blue-600' :
            resource.type === 'website' ? 'bg-green-100 text-green-600' :
            resource.type === 'tool' ? 'bg-purple-100 text-purple-600' :
            'bg-yellow-100 text-yellow-600'
          }`}>
            {icon}
          </div>
          <CardTitle className="text-lg">{resource.title}</CardTitle>
        </div>
        {resource.free ? (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 w-fit ml-8">Free</span>
        ) : (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 w-fit ml-8">Paid</span>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 min-h-[80px]">
          {resource.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1 mt-3">
          {resource.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full">
            Visit Resource
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const PromptCard: React.FC<{ prompt: string; explanation: string }> = ({ prompt, explanation }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 border-b border-gray-100">
        <p className="font-medium text-gray-800 mb-1">{prompt}</p>
        <p className="text-sm text-gray-600">{explanation}</p>
      </div>
      <div className="bg-gray-50 px-4 py-3 flex justify-end">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={copyToClipboard} 
          className="flex items-center text-xs gap-1"
        >
          {copied ? (
            <>
              <CheckCircle className="h-3.5 w-3.5 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Clipboard className="h-3.5 w-3.5 mr-1" />
              Copy Prompt
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

const Resources = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  
  const filteredResources = selectedTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === selectedTab);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-brand-orange py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Learning Resources
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-orange-100">
              Curated tools, courses, and materials to help you build your skills
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recommended Resources</h2>
              <p className="text-gray-600 mt-1">
                Quality materials to help you learn and build your skills
              </p>
            </div>
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-3 sm:grid-cols-6 w-full sm:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="video">Videos</TabsTrigger>
                <TabsTrigger value="course">Courses</TabsTrigger>
                <TabsTrigger value="website">Websites</TabsTrigger>
                <TabsTrigger value="tool">Tools</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Master AI Tools for Accelerated Learning</h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Harness AI assistants to dramatically enhance your learning process by using these expert-crafted prompts. Copy any prompt and adapt it to your specific subject or needs.
            </p>
          </div>
          
          <Tabs defaultValue={aiPromptCategories[0].title}>
            <div className="mb-8">
              <TabsList className="h-auto flex flex-wrap justify-center gap-2">
                {aiPromptCategories.map((category) => (
                  <TabsTrigger 
                    key={category.title}
                    value={category.title}
                    className="flex items-center gap-2 px-4 py-2"
                  >
                    {category.icon}
                    <span className="hidden md:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {aiPromptCategories.map((category) => (
              <TabsContent key={category.title} value={category.title}>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.prompts.map((item, index) => (
                    <PromptCard 
                      key={index} 
                      prompt={item.prompt} 
                      explanation={item.explanation}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-xl text-blue-800 mb-3">Advanced AI Learning Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-blue-700"><strong>Be specific:</strong> Include your background level and learning goals in your prompts for more tailored responses.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-blue-700"><strong>Use iterative prompting:</strong> Follow up initial responses with more specific questions to dig deeper into a topic.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-blue-700"><strong>Request different perspectives:</strong> Ask the AI to explain concepts from multiple angles to enhance understanding.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-blue-700"><strong>Verify information:</strong> Cross-check important facts from AI responses with reliable sources.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-blue-700"><strong>Create learning dialogues:</strong> Engage in back-and-forth conversations about a topic to build deeper understanding.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-blue-700"><strong>Prompt for active recall:</strong> Ask the AI to quiz you after providing information to strengthen retention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-brand-purple text-white rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Need Personalized Guidance?</h2>
              <p className="mt-2">
                Explore our career paths for structured learning roadmaps designed specifically for each role.
              </p>
            </div>
            <Link to="/careers">
              <Button className="bg-white text-brand-purple hover:bg-gray-100 whitespace-nowrap">
                View Career Paths
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CareerPath</h3>
              <p className="text-gray-400 text-sm">
                Helping high school students discover and prepare for high-income careers through problem-solving skills.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white text-sm">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 text-sm">
                Questions or feedback? Reach out to us at support@careerpath.example.com
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} CareerPath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resources;
