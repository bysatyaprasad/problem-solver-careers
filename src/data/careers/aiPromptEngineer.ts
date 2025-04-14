
import { CareerPath } from '../careerData';

export const aiPromptEngineerCareer: CareerPath = {
  id: "ai-prompt-engineer",
  title: "AI Prompt Engineer",
  description: "AI Prompt Engineers design, refine, and optimize inputs to AI systems to produce desired outputs. They bridge the gap between human intention and machine interpretation, enabling organizations to effectively leverage large language models and other AI tools for specific applications.",
  problemsSolved: [
    "Crafting precise prompts that extract relevant information from AI systems",
    "Designing conversational flows that maintain context and coherence",
    "Mitigating bias and harmful outputs in AI responses",
    "Creating prompting strategies that maximize AI capabilities for specific domains",
    "Building scalable prompt libraries and frameworks for enterprise use"
  ],
  salaryProspect: {
    trend: "Rising",
    entryLevelRange: "₹5-10 LPA",
    midLevelRange: "₹10-20 LPA",
    seniorLevelRange: "₹20-40+ LPA",
    notes: "This emerging role has significant salary variation. Specialists with domain expertise in high-value sectors like legal, healthcare, or finance often command premium compensation."
  },
  demandLevel: "High",
  requiredSkills: [
    {
      name: "AI/ML Understanding",
      description: "Foundational knowledge of how large language models and other AI systems work",
      level: "Intermediate"
    },
    {
      name: "Natural Language Processing",
      description: "Understanding of linguistic concepts and language structure",
      level: "Intermediate"
    },
    {
      name: "Creative Writing",
      description: "Ability to craft clear, precise, and effective text for various contexts",
      level: "Advanced"
    },
    {
      name: "Critical Thinking",
      description: "Skill in analyzing problems and designing systematic prompt approaches",
      level: "Advanced"
    },
    {
      name: "Domain Expertise",
      description: "Knowledge in specific fields where AI is being applied",
      level: "Intermediate"
    },
    {
      name: "Testing & Iteration",
      description: "Methodical approach to refining prompts based on results",
      level: "Advanced"
    }
  ],
  roadmap: [
    {
      title: "Build AI Foundations (3-6 months)",
      description: "Develop understanding of AI capabilities and limitations",
      timeframe: "3-6 months",
      skills: [
        "AI and language model basics",
        "Natural language processing concepts",
        "Writing and communication fundamentals",
        "Prompt engineering principles",
        "AI tools landscape"
      ],
      resources: [
        {
          title: "Prompt Engineering Guide",
          url: "https://www.promptingguide.ai/",
          type: "Website",
          free: true,
          description: "Comprehensive guide to prompt engineering techniques"
        },
        {
          title: "Elements of AI",
          url: "https://www.elementsofai.com/",
          type: "Course",
          free: true,
          description: "Introduction to AI concepts and technologies"
        },
        {
          title: "Learn Prompting",
          url: "https://learnprompting.org/",
          type: "Course",
          free: true,
          description: "Educational resource for prompt engineering"
        }
      ],
      milestones: [
        "Create a portfolio of effective prompts for different use cases",
        "Complete 2-3 AI and prompt engineering courses",
        "Build a personal knowledge base of prompt techniques",
        "Experiment with major AI platforms (ChatGPT, Claude, etc.)"
      ]
    },
    {
      title: "Develop Specialized Prompting Skills (6-9 months)",
      description: "Master advanced prompt techniques and domain-specific applications",
      timeframe: "6-9 months",
      skills: [
        "Few-shot and zero-shot learning",
        "Chain-of-thought prompting",
        "System prompt design",
        "Bias mitigation strategies",
        "Domain-specific prompting"
      ],
      resources: [
        {
          title: "Anthropic's Claude Prompt Design Guide",
          url: "https://docs.anthropic.com/claude/docs/introduction-to-prompt-design",
          type: "Website",
          free: true,
          description: "Best practices for prompting Claude models"
        },
        {
          title: "Prompt Engineering for ChatGPT",
          url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
          type: "Course",
          free: true,
          description: "Course on effective prompt engineering techniques"
        },
        {
          title: "Dair.ai Prompt Engineering Course",
          url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
          type: "Course",
          free: true,
          description: "Advanced guide to prompt engineering"
        }
      ],
      milestones: [
        "Develop specialized prompt libraries for specific domains",
        "Create complex multi-step prompting workflows",
        "Build a framework for evaluating prompt effectiveness",
        "Contribute to prompt engineering communities"
      ]
    },
    {
      title: "Master Application Development (9-12 months)",
      description: "Learn to integrate advanced prompting into applications and workflows",
      timeframe: "9-12 months",
      skills: [
        "API integration",
        "Prompt orchestration",
        "System design for AI applications",
        "Automated prompt optimization",
        "Human-AI collaboration frameworks"
      ],
      resources: [
        {
          title: "Building LLM Powered Applications",
          url: "https://www.fullstackpython.com/blog/build-first-llm-application.html",
          type: "Website",
          free: true,
          description: "Guide to creating applications with language models"
        },
        {
          title: "LangChain Documentation",
          url: "https://python.langchain.com/docs/get_started/introduction",
          type: "Website",
          free: true,
          description: "Framework for developing applications with language models"
        },
        {
          title: "Prompt Engineering for Generative AI",
          url: "https://www.coursera.org/learn/prompt-engineering",
          type: "Course",
          free: false,
          description: "Comprehensive course on advanced prompt engineering"
        }
      ],
      milestones: [
        "Develop an AI application using advanced prompting techniques",
        "Create an automated prompt testing and optimization pipeline",
        "Design a prompt management system for team use",
        "Build domain-specific AI assistants with specialized knowledge"
      ]
    },
    {
      title: "Leadership and Innovation (Ongoing)",
      description: "Set standards and innovate in the prompt engineering field",
      timeframe: "Ongoing",
      skills: [
        "Prompt strategy and governance",
        "Emerging AI model capabilities",
        "Prompt security and safety",
        "Team training and development",
        "Innovation in human-AI interaction"
      ],
      resources: [
        {
          title: "AI Safety and Alignment Research",
          url: "https://www.alignmentforum.org/",
          type: "Website",
          free: true,
          description: "Research on developing safe and aligned AI systems"
        },
        {
          title: "Anthropic's Red Teaming Guide",
          url: "https://github.com/anthropics/anthropic-responsible-use-guide",
          type: "Website",
          free: true,
          description: "Guide to testing AI systems for safety and harmful outputs"
        },
        {
          title: "Building AI Products Course",
          url: "https://www.ycombinator.com/library/8l-building-ai-products",
          type: "Course",
          free: true,
          description: "Y Combinator's guide to building AI-powered products"
        }
      ],
      milestones: [
        "Lead AI implementation strategy for an organization",
        "Develop organizational prompt governance frameworks",
        "Mentor junior prompt engineers",
        "Publish research or speak at conferences on prompt engineering"
      ]
    }
  ],
  careerOutlook: "AI Prompt Engineering is a rapidly emerging field with growing demand as organizations seek to effectively leverage generative AI technologies. As language models become more capable and widespread, the need for specialists who can effectively direct these systems grows. While the specific job title may evolve, the core skills of interfacing between human needs and AI capabilities will remain valuable across industries. Those who combine prompt engineering expertise with domain knowledge in fields like healthcare, legal, finance, or content creation will be particularly well-positioned for high-value roles."
};
