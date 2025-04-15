
import React from 'react';
import { 
  Brain, 
  ScrollText, 
  FileQuestion, 
  Workflow, 
  PenTool, 
  Search, 
  BarChart, 
  Zap,
  Lightbulb,
  Trophy,
  Clipboard,
  User,
  BookOpen,
  ArrowRightLeft,
  Languages,
  Calculator,
  Code,
  HeartPulse,
  GraduationCap
} from 'lucide-react';

export type AIPromptCategory = {
  title: string;
  icon: React.ReactNode;
  description: string;
  prompts: {
    prompt: string;
    explanation: string;
  }[];
};

export const aiPromptCategories: AIPromptCategory[] = [
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
      },
      {
        prompt: "Compare and contrast [concept A] vs [concept B] using a table format.",
        explanation: "Presents differences and similarities in an organized, visual way."
      },
      {
        prompt: "What are common misconceptions about [topic] that might confuse me?",
        explanation: "Identifies and clarifies potential points of confusion before they happen."
      },
      {
        prompt: "If [concept] were a story, how would you narrate it from beginning to end?",
        explanation: "Transforms abstract concepts into a narrative format that's easier to follow and remember."
      },
      {
        prompt: "Explain how [concept] applies in three different real-world scenarios.",
        explanation: "Helps bridge theoretical understanding with practical applications in various contexts."
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
      },
      {
        prompt: "Create a mnemonic device to help me remember [sequence/list] in [subject].",
        explanation: "Provides a memory aid to recall ordered information more easily."
      },
      {
        prompt: "Turn these notes into a structured study guide with headings, bullet points, and examples: [your notes]",
        explanation: "Transforms rough notes into an organized learning resource."
      },
      {
        prompt: "Create a series of practice quiz questions that gradually increase in difficulty for [topic].",
        explanation: "Provides progressive challenge levels to test and strengthen your understanding."
      },
      {
        prompt: "Generate a glossary of technical terms for [field] with clear, concise definitions.",
        explanation: "Creates a reference tool for quickly understanding specialized terminology."
      },
      {
        prompt: "Create an exam preparation checklist for [subject], including key topics and resource recommendations.",
        explanation: "Helps organize your study approach with a comprehensive preparation plan."
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
      },
      {
        prompt: "Generate a series of progressive practice problems for [topic], starting very simple and gradually increasing in difficulty.",
        explanation: "Creates a learning path that builds skills incrementally."
      },
      {
        prompt: "Design a challenging project that will require me to apply everything I've learned about [topic].",
        explanation: "Provides a comprehensive way to integrate and demonstrate multiple skills."
      },
      {
        prompt: "Create a debugging challenge where I need to find and fix errors in this [code/solution]: [example with errors]",
        explanation: "Develops error-detection skills essential for mastery in technical subjects."
      },
      {
        prompt: "Generate open-ended discussion questions about [topic] that require deep critical thinking.",
        explanation: "Provides prompts for reflection that develop higher-order thinking skills."
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
      },
      {
        prompt: "Create a learning routine that incorporates different study methods for [topic] to avoid burnout and maintain interest.",
        explanation: "Designs a varied approach to keep learning fresh and engaging."
      },
      {
        prompt: "I want to master [skill] in [timeframe]. Create a realistic roadmap with progressive milestones and how to assess my progress.",
        explanation: "Builds a long-term strategy with clear checkpoints to keep you on track."
      },
      {
        prompt: "Design a weekend intensive learning plan for [topic] that maximizes retention and practical application.",
        explanation: "Creates a compressed but effective approach for limited time periods."
      },
      {
        prompt: "How can I structure a group study session for [subject] that benefits everyone's learning?",
        explanation: "Provides collaborative learning strategies that enhance understanding through peer interaction."
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
      },
      {
        prompt: "What aspects of [project] should I focus on to best demonstrate my skills in [area] to employers?",
        explanation: "Helps prioritize features that will highlight your most marketable abilities."
      },
      {
        prompt: "Generate a list of stretch goals I could add to my [project type] to demonstrate advanced skills.",
        explanation: "Provides options to extend your project once the core functionality is complete."
      },
      {
        prompt: "Design a project that would solve a real problem in [industry/field] while showcasing [technical skill].",
        explanation: "Creates a practically valuable project that demonstrates capability in addressing actual needs."
      },
      {
        prompt: "What documentation should I create alongside my [project type] to showcase my thought process?",
        explanation: "Helps create supporting materials that highlight your reasoning and approach."
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
      },
      {
        prompt: "Based on these key terms: [list terms], what research areas or subtopics should I explore?",
        explanation: "Expands your research focus to related areas you might have overlooked."
      },
      {
        prompt: "Create a research question framework for exploring [topic] from multiple perspectives.",
        explanation: "Provides a structured approach to investigate a subject comprehensively."
      },
      {
        prompt: "What methodologies are most appropriate for researching [topic], and what are their strengths/limitations?",
        explanation: "Helps select the right research approach and understand its implications."
      },
      {
        prompt: "Analyze the credibility of this source: [citation/link] for research on [topic].",
        explanation: "Assists in evaluating information quality for more reliable research outcomes."
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
      },
      {
        prompt: "Design a 30-day challenge to rapidly improve my abilities in [skill area].",
        explanation: "Creates an intensive short-term program to accelerate skill development."
      },
      {
        prompt: "What skills or knowledge areas complement [primary skill] and would make me more well-rounded?",
        explanation: "Identifies related competencies that enhance your main area of expertise."
      },
      {
        prompt: "Create a feedback form I can use to get structured input from others on my [skill/project].",
        explanation: "Develops a tool for gathering meaningful external perspectives on your work."
      },
      {
        prompt: "What are industry-standard benchmarks for proficiency in [skill] at entry, mid, and senior levels?",
        explanation: "Provides professional reference points to contextualize your skill development."
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
      },
      {
        prompt: "I keep procrastinating on studying [subject]. What techniques can help me overcome this and develop consistent habits?",
        explanation: "Provides practical methods to build discipline and reduce avoidance behaviors."
      },
      {
        prompt: "I get anxious when attempting [challenging skill]. How can I reduce this stress while still making progress?",
        explanation: "Offers mindset shifts and practical techniques to manage learning-related anxiety."
      },
      {
        prompt: "I'm experiencing burnout while studying [subject]. How can I recover while maintaining progress?",
        explanation: "Provides recovery strategies that don't sacrifice learning momentum."
      },
      {
        prompt: "How can I overcome the frustration of repeated failures when learning [difficult skill]?",
        explanation: "Offers psychological approaches to develop resilience and persistence."
      }
    ]
  },
  {
    title: "Creative Learning Techniques",
    icon: <Lightbulb className="h-6 w-6 text-orange-500" />,
    description: "Discover unconventional methods to enhance learning through creativity and imagination.",
    prompts: [
      {
        prompt: "How can I use storytelling techniques to memorize and understand [complex topic]?",
        explanation: "Provides narrative-based memory techniques for information retention."
      },
      {
        prompt: "Create a metaphorical 'mental palace' or memory journey for remembering key concepts in [subject].",
        explanation: "Designs a spatial memory technique tailored to your specific learning content."
      },
      {
        prompt: "How can I use drawing or visual mapping to better understand relationships in [topic]?",
        explanation: "Offers visual thinking strategies to represent complex information graphically."
      },
      {
        prompt: "Generate a creative game or activity that helps practice skills related to [topic].",
        explanation: "Creates an engaging, playful approach to reinforce learning through active participation."
      },
      {
        prompt: "How can I use music or rhythm to help memorize [information] for [subject]?",
        explanation: "Suggests ways to leverage musical patterns for enhanced memory and recall."
      },
      {
        prompt: "Create a fictional scenario where I need to use [skill/knowledge] to solve a mystery or challenge.",
        explanation: "Develops an immersive context that makes abstract knowledge more concrete and memorable."
      },
      {
        prompt: "How can I use physical movement or gestures to help remember and understand [concept]?",
        explanation: "Incorporates bodily kinesthetic approaches to enhance learning through movement."
      },
      {
        prompt: "Design a role-playing exercise where I can practice and apply my knowledge of [subject].",
        explanation: "Creates an immersive scenario for experiential learning and skill application."
      }
    ]
  },
  {
    title: "Career Application",
    icon: <Trophy className="h-6 w-6 text-emerald-600" />,
    description: "Connect your learning directly to career opportunities and professional growth.",
    prompts: [
      {
        prompt: "How can I showcase my knowledge of [subject] in job interviews effectively?",
        explanation: "Provides strategies to articulate your expertise in professional contexts."
      },
      {
        prompt: "What real-world projects could demonstrate my skills in [area] to potential employers?",
        explanation: "Suggests portfolio pieces that showcase practical application of your knowledge."
      },
      {
        prompt: "Create a script for explaining my experience with [skill/technology] in a way that emphasizes business value.",
        explanation: "Helps frame your technical knowledge in terms meaningful to non-technical stakeholders."
      },
      {
        prompt: "What emerging trends in [field] should I focus on to stay competitive in the job market?",
        explanation: "Identifies forward-looking areas that will be valuable for career advancement."
      },
      {
        prompt: "How can I translate my academic knowledge of [subject] into practical workplace applications?",
        explanation: "Bridges the gap between theoretical understanding and professional implementation."
      },
      {
        prompt: "Create a 60-second elevator pitch about my expertise in [skill/field] for networking events.",
        explanation: "Develops a concise, impactful way to communicate your value to professional connections."
      },
      {
        prompt: "What industry-specific terminology should I master to sound knowledgeable about [field] in interviews?",
        explanation: "Identifies key professional language that demonstrates insider knowledge."
      },
      {
        prompt: "How can I position my self-taught knowledge of [subject] as valuable despite not having formal credentials?",
        explanation: "Provides strategies for showcasing non-traditional learning paths effectively."
      }
    ]
  },
  {
    title: "Interdisciplinary Learning",
    icon: <ArrowRightLeft className="h-6 w-6 text-pink-600" />,
    description: "Explore connections between different domains to develop unique insights and perspectives.",
    prompts: [
      {
        prompt: "How do concepts from [field A] apply to solving problems in [field B]?",
        explanation: "Identifies valuable cross-domain applications of knowledge."
      },
      {
        prompt: "What surprising similarities exist between [subject 1] and [subject 2] that could deepen my understanding of both?",
        explanation: "Reveals unexpected parallels between seemingly unrelated domains."
      },
      {
        prompt: "How can I combine principles from [discipline A] and [discipline B] to create a unique approach to [problem]?",
        explanation: "Generates innovative solutions through interdisciplinary thinking."
      },
      {
        prompt: "Create a learning map that shows how [primary interest] connects to [5 other fields].",
        explanation: "Visualizes the broader ecosystem of knowledge surrounding your focus area."
      },
      {
        prompt: "What cognitive frameworks from [field] could be applied to improve learning in [unrelated subject]?",
        explanation: "Transfers useful thinking tools between different domains of knowledge."
      },
      {
        prompt: "How has [concept] from [field A] influenced developments in [field B] historically?",
        explanation: "Explores the cross-pollination of ideas between disciplines over time."
      },
      {
        prompt: "What unique career opportunities exist at the intersection of [field A] and [field B]?",
        explanation: "Identifies niche professional paths that leverage interdisciplinary knowledge."
      },
      {
        prompt: "How would an expert in [field A] approach and solve this problem in [field B]?",
        explanation: "Applies perspective-shifting to generate novel approaches to challenges."
      }
    ]
  },
  {
    title: "Learning Technology & Tools",
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
    description: "Leverage digital tools and technologies to enhance your learning efficiency and effectiveness.",
    prompts: [
      {
        prompt: "What are the best software tools for learning and practicing [skill] with their pros and cons?",
        explanation: "Provides a curated list of learning technologies specific to your needs."
      },
      {
        prompt: "How can I set up an effective digital note-taking system for [subject] using [tool]?",
        explanation: "Gives structured approaches to organize digital knowledge for retrieval and review."
      },
      {
        prompt: "What automations or workflows could help me streamline my learning process for [subject]?",
        explanation: "Suggests ways to reduce administrative friction in your studying routine."
      },
      {
        prompt: "Create a template for tracking my progress in [skill] that I can implement in [tool].",
        explanation: "Provides a ready-to-use system for monitoring advancement toward learning goals."
      },
      {
        prompt: "What AI tools besides ChatGPT could help me learn [subject] more effectively?",
        explanation: "Expands your toolkit with specialized AI assistants for specific learning needs."
      },
      {
        prompt: "Compare these learning platforms: [platform A, B, and C] for studying [subject]. Which would be best for my needs?",
        explanation: "Provides personalized recommendations based on comparative analysis of learning resources."
      },
      {
        prompt: "How can I use APIs or data sources to create real-world practice exercises for [technical skill]?",
        explanation: "Suggests authentic learning opportunities using actual data and systems."
      },
      {
        prompt: "What digital organization system would work best for managing resources and notes across multiple subjects?",
        explanation: "Provides knowledge management architecture for comprehensive learning activities."
      }
    ]
  },
  {
    title: "Explaining & Teaching",
    icon: <User className="h-6 w-6 text-violet-600" />,
    description: "Enhance your understanding by learning to explain concepts clearly to others.",
    prompts: [
      {
        prompt: "Help me prepare to teach a 10-minute lesson on [topic] to someone with no background knowledge.",
        explanation: "Structures key information for effective knowledge transfer to beginners."
      },
      {
        prompt: "What analogies, demonstrations, or visual aids would make [complex concept] easier to explain to others?",
        explanation: "Provides concrete tools to make abstract ideas more accessible."
      },
      {
        prompt: "Create a series of guided questions that would help someone discover the principles of [topic] through their own reasoning.",
        explanation: "Designs a Socratic approach to facilitate deeper understanding through inquiry."
      },
      {
        prompt: "What are the most common questions or points of confusion when teaching [topic], and how should I address them?",
        explanation: "Prepares you for typical learning obstacles others might encounter."
      },
      {
        prompt: "How can I convert my knowledge of [subject] into an engaging presentation or workshop?",
        explanation: "Transforms information into an interactive learning experience for others."
      },
      {
        prompt: "Create a step-by-step tutorial for teaching a beginner how to [perform skill/task].",
        explanation: "Structures procedural knowledge in a learner-friendly sequence."
      },
      {
        prompt: "How can I assess whether someone has truly understood [concept] after I've explained it?",
        explanation: "Provides verification techniques to confirm successful knowledge transfer."
      },
      {
        prompt: "What storytelling elements could I use to make a lesson on [topic] more memorable and engaging?",
        explanation: "Incorporates narrative techniques to enhance listener retention and interest."
      }
    ]
  },
  {
    title: "Language Learning",
    icon: <Languages className="h-6 w-6 text-teal-600" />,
    description: "Specialized strategies for mastering new languages efficiently and effectively.",
    prompts: [
      {
        prompt: "Create a practical conversation script in [language] about [situation] with vocabulary I should focus on as a beginner/intermediate learner.",
        explanation: "Provides contextual language practice with key words highlighted for learning."
      },
      {
        prompt: "What are the most efficient methods to memorize vocabulary in [language], and how should I implement them daily?",
        explanation: "Offers evidence-based techniques for expanding vocabulary with practical routines."
      },
      {
        prompt: "Generate a learning sequence for mastering the [grammar point] in [language] with example sentences showing progressive difficulty.",
        explanation: "Creates a structured path to build grammatical understanding incrementally."
      },
      {
        prompt: "What cultural aspects should I study alongside [language] to better understand idioms, expressions, and context?",
        explanation: "Connects language learning to cultural knowledge for deeper comprehension."
      },
      {
        prompt: "Design a daily 20-minute routine that balances all four language skills (reading, writing, speaking, listening) for [language].",
        explanation: "Creates a balanced, time-efficient practice schedule for holistic language development."
      },
      {
        prompt: "Create a list of cognates between English and [language] to give me an instant vocabulary boost.",
        explanation: "Identifies words with shared origins that are easy to recognize and remember."
      },
      {
        prompt: "What are the most common everyday phrases I should master first in [language]?",
        explanation: "Prioritizes high-frequency expressions for immediate practical communication."
      },
      {
        prompt: "Design shadowing exercises for improving my accent and pronunciation in [language].",
        explanation: "Creates practice activities for developing authentic-sounding speech patterns."
      },
      {
        prompt: "How can I use music, movies, or TV shows effectively to improve my [language] skills?",
        explanation: "Suggests entertainment-based immersion strategies for enjoyable language acquisition."
      }
    ]
  },
  {
    title: "Math & Quantitative Skills",
    icon: <Calculator className="h-6 w-6 text-red-500" />,
    description: "Specific approaches for mastering mathematical concepts and quantitative reasoning.",
    prompts: [
      {
        prompt: "Explain the intuition behind [mathematical concept] without using formulas first, then show how the formulas represent that intuition.",
        explanation: "Builds conceptual understanding before introducing symbolic representations."
      },
      {
        prompt: "Create a series of increasingly complex problems to help me master [mathematical technique].",
        explanation: "Provides scaffolded practice that gradually builds computational skill."
      },
      {
        prompt: "What real-world situations would I use [mathematical concept] to model or solve?",
        explanation: "Connects abstract mathematics to concrete applications for enhanced relevance."
      },
      {
        prompt: "Create a visual representation or diagram that explains how [mathematical process] works.",
        explanation: "Translates numerical or symbolic concepts into visual form for spatial learners."
      },
      {
        prompt: "What are common mistakes or misconceptions when learning [mathematical topic], and how can I avoid them?",
        explanation: "Identifies cognitive pitfalls specific to mathematical reasoning."
      },
      {
        prompt: "Create analogies that would help explain [mathematical concept] to someone with math anxiety.",
        explanation: "Provides accessible entry points for understanding complex quantitative ideas."
      },
      {
        prompt: "Design a progression of learning activities that would take me from understanding [basic concept] to mastering [advanced concept].",
        explanation: "Creates a structured path through related mathematical knowledge."
      }
    ]
  },
  {
    title: "Coding & Technical Skills",
    icon: <Code className="h-6 w-6 text-emerald-500" />,
    description: "Methods for effectively learning programming and other technical capabilities.",
    prompts: [
      {
        prompt: "Create a series of mini-projects that would help me practice [programming concept] in [language], starting with the simplest possible example.",
        explanation: "Provides hands-on application opportunities with increasing complexity."
      },
      {
        prompt: "Explain how [technical concept] works under the hood, then show practical code examples of using it.",
        explanation: "Connects theoretical understanding with practical implementation."
      },
      {
        prompt: "What are the most common bugs or errors when implementing [technical feature], and how can I avoid them?",
        explanation: "Helps anticipate and prevent common technical pitfalls."
      },
      {
        prompt: "Create a cheat sheet of the most useful [language/framework] methods and patterns for [specific task].",
        explanation: "Provides a reference guide for frequently-needed technical solutions."
      },
      {
        prompt: "Design a code review checklist I can use when practicing [programming language/paradigm].",
        explanation: "Creates a quality assurance tool for self-assessment of technical work."
      },
      {
        prompt: "What mental models should I develop to think effectively about [programming concept]?",
        explanation: "Suggests conceptual frameworks that facilitate technical reasoning."
      },
      {
        prompt: "Create analogies that explain [technical concept] in non-technical terms before diving into the code.",
        explanation: "Builds intuitive understanding before introducing technical specifics."
      }
    ]
  },
  {
    title: "Physical & Practical Skills",
    icon: <HeartPulse className="h-6 w-6 text-pink-500" />,
    description: "Approaches for mastering physical abilities and hands-on capabilities.",
    prompts: [
      {
        prompt: "Break down the proper form for [physical skill/movement] into clear steps, with common mistakes to avoid.",
        explanation: "Provides technical guidance for physical execution with error prevention."
      },
      {
        prompt: "Design a progression of practice drills for [physical skill] that isolate different components before combining them.",
        explanation: "Creates a structured approach to building component skills before integration."
      },
      {
        prompt: "What mental cues or visualizations can help me execute [physical movement] correctly?",
        explanation: "Provides cognitive frameworks that support proper physical execution."
      },
      {
        prompt: "Create a training plan for [physical skill] that includes appropriate rest and recovery to prevent plateaus and injuries.",
        explanation: "Designs a sustainable approach to physical skill development."
      },
      {
        prompt: "What supplementary exercises would help me develop the specific strength/flexibility/coordination needed for [physical skill]?",
        explanation: "Identifies targeted physical preparation for skill-specific requirements."
      },
      {
        prompt: "How can I use video analysis effectively to improve my [physical skill]?",
        explanation: "Provides a methodology for visual self-assessment and correction."
      },
      {
        prompt: "What are appropriate milestones and realistic timelines for progressing from beginner to advanced in [physical skill]?",
        explanation: "Sets reasonable expectations for physical skill development trajectory."
      }
    ]
  },
  {
    title: "Academic Writing & Research",
    icon: <GraduationCap className="h-6 w-6 text-blue-700" />,
    description: "Techniques for producing scholarly work and conducting effective research.",
    prompts: [
      {
        prompt: "Help me develop a thesis statement for a paper about [topic] that is specific, arguable, and significant.",
        explanation: "Assists in creating a focused central argument for academic writing."
      },
      {
        prompt: "Create an outline for a research paper on [topic] with appropriate sections and key points to address in each.",
        explanation: "Provides structural organization for comprehensive academic treatment of a subject."
      },
      {
        prompt: "Generate research questions about [topic] at different levels: descriptive, comparative, and causal/theoretical.",
        explanation: "Develops inquiry frameworks with increasing analytical sophistication."
      },
      {
        prompt: "What would be effective counterarguments to address in a paper arguing that [position]?",
        explanation: "Identifies opposing viewpoints to strengthen scholarly argumentation."
      },
      {
        prompt: "How can I strengthen the analytical components of my paper on [topic] to move beyond description?",
        explanation: "Provides strategies for enhancing critical thinking in academic writing."
      },
      {
        prompt: "Help me design a literature review strategy for researching [topic], including search terms and approaches to synthesizing sources.",
        explanation: "Creates a methodical approach to surveying existing scholarship."
      },
      {
        prompt: "Create strategies for effectively incorporating evidence from [type of sources] into my arguments about [topic].",
        explanation: "Develops techniques for integrating research materials into scholarly writing."
      }
    ]
  }
];
