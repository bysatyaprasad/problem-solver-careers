export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Skill {
  name: string;
  description: string;
  level: SkillLevel;
}

export interface ResourceLink {
  title: string;
  url: string;
  type: 'Course' | 'Book' | 'YouTube' | 'Website' | 'Tool';
  free: boolean;
  description: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
  timeframe: string;
  skills: string[];
  resources: ResourceLink[];
  milestones: string[];
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  problemsSolved: string[];
  salaryRange: {
    entry: number;
    mid: number;
    senior: number;
  };
  demandLevel: 'High' | 'Medium' | 'Low';
  requiredSkills: Skill[];
  roadmap: RoadmapStep[];
  careerOutlook: string;
}

const careerData: CareerPath[] = [
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Data Scientists analyze complex datasets to extract actionable insights, build predictive models, and help businesses make data-driven decisions. They combine statistics, programming, and domain knowledge to solve complex problems.",
    problemsSolved: [
      "Predicting customer behavior to increase retention and sales",
      "Optimizing business operations through data analysis",
      "Creating algorithms that provide personalized recommendations",
      "Detecting fraud and anomalies in large datasets",
      "Automating decision-making processes using machine learning"
    ],
    salaryRange: {
      entry: 500000,
      mid: 1200000, 
      senior: 2500000
    },
    demandLevel: "High",
    requiredSkills: [
      {
        name: "Programming (Python/R)",
        description: "Proficiency in Python and/or R for data manipulation, analysis, and model building",
        level: "Advanced"
      },
      {
        name: "Statistics & Mathematics",
        description: "Strong foundation in statistics, probability, linear algebra, and calculus",
        level: "Advanced"
      },
      {
        name: "Machine Learning",
        description: "Understanding of machine learning algorithms, model training, and evaluation",
        level: "Advanced"
      },
      {
        name: "Data Visualization",
        description: "Ability to create clear, insightful visualizations using tools like Tableau, PowerBI, or programming libraries",
        level: "Intermediate"
      },
      {
        name: "SQL & Database Management",
        description: "Proficiency in SQL for data extraction and database querying",
        level: "Intermediate"
      },
      {
        name: "Big Data Technologies",
        description: "Experience with big data tools like Hadoop, Spark, or cloud-based data solutions",
        level: "Intermediate"
      },
      {
        name: "Communication Skills",
        description: "Ability to explain complex technical concepts to non-technical stakeholders",
        level: "Intermediate"
      }
    ],
    roadmap: [
      {
        title: "Build Foundations (3-6 months)",
        description: "Develop core mathematical and programming skills needed for data analysis",
        timeframe: "3-6 months",
        skills: [
          "Basic Python/R programming",
          "Statistics fundamentals",
          "Mathematics (algebra, calculus basics)",
          "Data manipulation using libraries like Pandas"
        ],
        resources: [
          {
            title: "Python for Data Science and Machine Learning Bootcamp",
            url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
            type: "Course",
            free: false,
            description: "Comprehensive introduction to Python for data science"
          },
          {
            title: "Statistics and Probability by Khan Academy",
            url: "https://www.khanacademy.org/math/statistics-probability",
            type: "Course",
            free: true,
            description: "Fundamental statistics concepts explained clearly"
          },
          {
            title: "Kaggle Learn",
            url: "https://www.kaggle.com/learn",
            type: "Course",
            free: true,
            description: "Hands-on tutorials for Python, SQL, and Machine Learning"
          }
        ],
        milestones: [
          "Complete 2-3 beginner data analysis projects",
          "Build a personal portfolio website",
          "Create a GitHub profile with your projects"
        ]
      },
      {
        title: "Develop Technical Expertise (6-9 months)",
        description: "Master data manipulation, visualization, and start learning machine learning",
        timeframe: "6-9 months",
        skills: [
          "Advanced Python/R",
          "Data visualization",
          "SQL and database querying",
          "Basic machine learning algorithms",
          "Data cleaning and preprocessing"
        ],
        resources: [
          {
            title: "Machine Learning by Andrew Ng (Coursera)",
            url: "https://www.coursera.org/learn/machine-learning",
            type: "Course",
            free: false,
            description: "Fundamental machine learning concepts and algorithms"
          },
          {
            title: "SQL for Data Science",
            url: "https://www.datacamp.com/courses/intro-to-sql-for-data-science",
            type: "Course",
            free: false,
            description: "Learning SQL fundamentals for data analysis"
          },
          {
            title: "Data Visualization with Python",
            url: "https://www.coursera.org/learn/python-for-data-visualization",
            type: "Course",
            free: false,
            description: "Creating impactful visualizations using Python libraries"
          }
        ],
        milestones: [
          "Complete 3-5 intermediate data projects",
          "Participate in a Kaggle competition",
          "Build an end-to-end machine learning project"
        ]
      },
      {
        title: "Apply and Expand Knowledge (9-12 months)",
        description: "Apply your skills to real-world problems and start specializing",
        timeframe: "9-12 months",
        skills: [
          "Advanced machine learning",
          "Deep learning fundamentals",
          "Big data technologies",
          "Cloud computing platforms",
          "Model deployment"
        ],
        resources: [
          {
            title: "Deep Learning Specialization",
            url: "https://www.coursera.org/specializations/deep-learning",
            type: "Course",
            free: false,
            description: "Comprehensive deep learning curriculum by Andrew Ng"
          },
          {
            title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
            url: "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646",
            type: "Book",
            free: false,
            description: "Practical guide to implementing machine learning algorithms"
          },
          {
            title: "Fast.ai",
            url: "https://www.fast.ai/",
            type: "Course",
            free: true,
            description: "Practical deep learning for coders"
          }
        ],
        milestones: [
          "Complete a capstone project solving a real business problem",
          "Contribute to open-source data science projects",
          "Build a machine learning model deployed to production"
        ]
      },
      {
        title: "Professional Growth and Specialization (Ongoing)",
        description: "Specialize in specific domains or techniques and build professional network",
        timeframe: "Ongoing",
        skills: [
          "Domain-specific knowledge",
          "Advanced deep learning",
          "Natural Language Processing or Computer Vision",
          "MLOps and model deployment",
          "Communication and leadership"
        ],
        resources: [
          {
            title: "MLOps: Machine Learning Operations",
            url: "https://cloud.google.com/training/machinelearning-ai/mlops",
            type: "Course",
            free: false,
            description: "Learn how to deploy and manage ML models in production"
          },
          {
            title: "Natural Language Processing Specialization",
            url: "https://www.coursera.org/specializations/natural-language-processing",
            type: "Course",
            free: false,
            description: "Deep dive into NLP techniques and applications"
          },
          {
            title: "Practical Data Science on AWS",
            url: "https://www.coursera.org/specializations/practical-data-science",
            type: "Course",
            free: false,
            description: "Real-world data science on cloud platforms"
          }
        ],
        milestones: [
          "Mentor junior data scientists",
          "Speak at data science conferences or meetups",
          "Lead complex data science projects",
          "Become a subject matter expert in a specific domain"
        ]
      }
    ],
    careerOutlook: "The demand for Data Scientists continues to grow across industries. As companies increasingly rely on data for decision-making, skilled professionals who can extract meaningful insights will be highly valued. With the rise of AI and automation, the role is evolving towards more specialized expertise and greater emphasis on business impact."
  },
  {
    id: "ai-ethics-specialist",
    title: "AI Ethics Specialist",
    description: "AI Ethics Specialists ensure artificial intelligence systems are designed, developed, and deployed in ways that align with human values, fairness, transparency, and societal well-being. They bridge the gap between technical implementation and ethical considerations.",
    problemsSolved: [
      "Identifying and mitigating algorithmic bias in AI systems",
      "Developing frameworks for responsible AI deployment across industries",
      "Creating transparent AI systems that users can understand and trust",
      "Ensuring AI compliance with emerging regulations and standards",
      "Bridging communication between technical teams and stakeholders about ethical implications"
    ],
    salaryRange: {
      entry: 800000,
      mid: 1500000,
      senior: 2800000
    },
    demandLevel: "High",
    requiredSkills: [
      {
        name: "AI/ML Fundamentals",
        description: "Understanding of machine learning algorithms, neural networks, and AI systems",
        level: "Intermediate"
      },
      {
        name: "Ethics & Philosophy",
        description: "Strong foundation in ethical frameworks, moral philosophy, and applied ethics",
        level: "Advanced"
      },
      {
        name: "Policy & Governance",
        description: "Knowledge of technology policy, regulations, and governance frameworks",
        level: "Intermediate"
      },
      {
        name: "Bias Detection",
        description: "Ability to identify and mitigate biases in datasets and algorithms",
        level: "Advanced"
      },
      {
        name: "Communication",
        description: "Excellent ability to communicate complex technical and ethical concepts to diverse stakeholders",
        level: "Advanced"
      },
      {
        name: "Research Skills",
        description: "Strong research methodology skills for investigating ethical implications",
        level: "Intermediate"
      }
    ],
    roadmap: [
      {
        title: "Build Foundations (6-9 months)",
        description: "Develop understanding of AI technology and ethical frameworks",
        timeframe: "6-9 months",
        skills: [
          "Basic programming (Python)",
          "Introduction to AI and machine learning",
          "Ethical theories and frameworks",
          "Critical thinking and analysis",
          "Research methodologies"
        ],
        resources: [
          {
            title: "Ethics of Artificial Intelligence and Robotics",
            url: "https://plato.stanford.edu/entries/ethics-ai/",
            type: "Website",
            free: true,
            description: "Stanford Encyclopedia of Philosophy overview of AI ethics"
          },
          {
            title: "Elements of AI",
            url: "https://www.elementsofai.com/",
            type: "Course",
            free: true,
            description: "Free online course introducing AI concepts to beginners"
          },
          {
            title: "Introduction to AI Ethics Course",
            url: "https://www.edx.org/course/introduction-to-ai-ethics",
            type: "Course",
            free: false,
            description: "Comprehensive introduction to AI ethics principles and challenges"
          }
        ],
        milestones: [
          "Complete 2-3 courses on AI/ML fundamentals",
          "Read at least 5 seminal papers on AI ethics",
          "Create a blog or portfolio documenting ethical analyses of existing AI systems"
        ]
      },
      {
        title: "Develop Technical & Ethical Expertise (9-12 months)",
        description: "Deepen technical understanding while building specialized ethics knowledge",
        timeframe: "9-12 months",
        skills: [
          "Intermediate AI and ML concepts",
          "Fairness metrics and bias detection",
          "Technology policy and governance",
          "Risk assessment frameworks",
          "Stakeholder engagement"
        ],
        resources: [
          {
            title: "Fairness and Machine Learning",
            url: "https://fairmlbook.org/",
            type: "Book",
            free: true,
            description: "Comprehensive guide to fairness in machine learning systems"
          },
          {
            title: "AI Ethics: Global Perspectives",
            url: "https://aiethicscourse.org/",
            type: "Course",
            free: true,
            description: "Multi-disciplinary approach to AI ethics across cultures"
          },
          {
            title: "The Ethical Algorithm",
            url: "https://www.amazon.com/Ethical-Algorithm-Science-Socially-Design/dp/0190948205",
            type: "Book",
            free: false,
            description: "Exploration of how to design algorithms with ethical considerations built in"
          }
        ],
        milestones: [
          "Complete a certification in AI ethics or responsible AI",
          "Develop a bias audit for an existing AI system",
          "Create a case study analyzing an AI ethics failure",
          "Join ethics committees or working groups in your community"
        ]
      },
      {
        title: "Practical Application & Specialization (12-18 months)",
        description: "Apply ethical frameworks to real-world AI systems and develop specialized expertise",
        timeframe: "12-18 months",
        skills: [
          "Ethics by design methodologies",
          "AI governance frameworks",
          "Impact assessment techniques",
          "Industry-specific regulations",
          "Interpretable and explainable AI"
        ],
        resources: [
          {
            title: "AI Ethics Impact Assessment",
            url: "https://www.z-inspection.org/",
            type: "Tool",
            free: true,
            description: "Framework for assessing ethical implications of AI systems"
          },
          {
            title: "Practical AI Ethics",
            url: "https://learning.edx.org/course/course-v1:Microsoft+DEV317x+1T2020/home",
            type: "Course",
            free: false,
            description: "Hands-on course for implementing ethical AI in practice"
          },
          {
            title: "The Oxford Handbook of Ethics of AI",
            url: "https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780190067397.001.0001/oxfordhb-9780190067397",
            type: "Book",
            free: false,
            description: "Comprehensive academic resource on AI ethics across domains"
          }
        ],
        milestones: [
          "Develop an ethics framework for a specific AI application or industry",
          "Contribute to open-source ethical AI tools or guidelines",
          "Complete a capstone project on responsible AI implementation",
          "Publish articles or speak at events on AI ethics topics"
        ]
      },
      {
        title: "Leadership & Policy Influence (Ongoing)",
        description: "Shape organizational policies and influence broader AI governance",
        timeframe: "Ongoing",
        skills: [
          "Strategic leadership",
          "Policy development",
          "Organizational change management",
          "Public communication",
          "Cross-disciplinary collaboration"
        ],
        resources: [
          {
            title: "AI Policy and Governance",
            url: "https://www.edx.org/professional-certificate/harvardx-ai-policy-and-governance",
            type: "Course",
            free: false,
            description: "Professional certificate in AI policy from Harvard"
          },
          {
            title: "The Alignment Problem",
            url: "https://brianchristian.org/the-alignment-problem/",
            type: "Book",
            free: false,
            description: "Exploration of the challenge of aligning AI systems with human values"
          },
          {
            title: "Partnership on AI Resources",
            url: "https://partnershiponai.org/resources/",
            type: "Website",
            free: true,
            description: "Research and best practices from industry-leading AI ethics coalition"
          }
        ],
        milestones: [
          "Lead ethics reviews for AI products or services",
          "Develop organizational AI ethics guidelines",
          "Participate in policy development with government or industry groups",
          "Mentor emerging professionals in the AI ethics field"
        ]
      }
    ],
    careerOutlook: "The demand for AI Ethics Specialists is rapidly growing as organizations recognize the importance of responsible AI development. This role will become increasingly crucial as AI systems become more advanced and pervasive across industries. Professionals who can bridge technical understanding with ethical frameworks and communication skills will be highly sought after, especially as global AI regulations continue to evolve. This emerging field offers significant potential for shaping the future of technology and society."
  },
  {
    id: "climate-tech-entrepreneur",
    title: "Climate Tech Entrepreneur",
    description: "Climate Tech Entrepreneurs create innovative businesses and solutions that address climate change and environmental challenges. They combine technological innovation, sustainability expertise, and business acumen to develop scalable ventures that reduce emissions, improve resource efficiency, or build climate resilience.",
    problemsSolved: [
      "Developing renewable energy solutions that are efficient and affordable",
      "Creating circular economy business models that reduce waste",
      "Building platforms that measure and manage carbon footprints",
      "Designing climate-resilient infrastructure and systems",
      "Pioneering carbon capture and utilization technologies"
    ],
    salaryRange: {
      entry: 600000,
      mid: 1500000,
      senior: 4000000
    },
    demandLevel: "High",
    requiredSkills: [
      {
        name: "Climate Science",
        description: "Understanding of climate change causes, impacts, and mitigation strategies",
        level: "Intermediate"
      },
      {
        name: "Technology Innovation",
        description: "Ability to develop or apply technologies to environmental challenges",
        level: "Advanced"
      },
      {
        name: "Business Development",
        description: "Skills in business modeling, market analysis, and strategic planning",
        level: "Advanced"
      },
      {
        name: "Fundraising",
        description: "Experience with venture capital, grants, and climate finance",
        level: "Intermediate"
      },
      {
        name: "Systems Thinking",
        description: "Capacity to understand complex environmental and social systems",
        level: "Advanced"
      },
      {
        name: "Communication",
        description: "Ability to persuasively communicate complex climate solutions to diverse stakeholders",
        level: "Advanced"
      }
    ],
    roadmap: [
      {
        title: "Build Knowledge Foundation (6-12 months)",
        description: "Develop understanding of climate science, sustainability, and business fundamentals",
        timeframe: "6-12 months",
        skills: [
          "Climate science basics",
          "Sustainability frameworks",
          "Business fundamentals",
          "Green technology overview",
          "Environmental policy"
        ],
        resources: [
          {
            title: "Climate Change: The Science and Global Impact",
            url: "https://www.edx.org/course/climate-change-the-science-and-global-impact",
            type: "Course",
            free: true,
            description: "Comprehensive course on climate science fundamentals"
          },
          {
            title: "How to Build a Startup",
            url: "https://www.udacity.com/course/how-to-build-a-startup--ep245",
            type: "Course",
            free: true,
            description: "Introduction to lean startup methodology and business model canvas"
          },
          {
            title: "Drawdown: The Most Comprehensive Plan Ever Proposed to Reverse Global Warming",
            url: "https://www.drawdown.org/the-book",
            type: "Book",
            free: false,
            description: "Overview of climate solutions and their impact potential"
          }
        ],
        milestones: [
          "Complete 2-3 courses on climate science and sustainability",
          "Build a basic business plan for a climate solution",
          "Join climate tech communities and attend relevant events",
          "Identify specific climate challenge areas that interest you"
        ]
      },
      {
        title: "Develop Technical & Business Skills (9-15 months)",
        description: "Build specialized knowledge in your chosen climate solution area and entrepreneurial skills",
        timeframe: "9-15 months",
        skills: [
          "Domain-specific technical skills",
          "Market research and validation",
          "Financial modeling",
          "Minimum viable product development",
          "Pitching and storytelling"
        ],
        resources: [
          {
            title: "Y Combinator Startup School",
            url: "https://www.startupschool.org/",
            type: "Course",
            free: true,
            description: "Comprehensive guide to building a startup"
          },
          {
            title: "Climate Tech VC Newsletter",
            url: "https://climatetechvc.substack.com/",
            type: "Website",
            free: true,
            description: "Latest trends and investments in climate technology"
          },
          {
            title: "Sustainable Business Model Innovation",
            url: "https://www.coursera.org/learn/sustainable-business-model-innovation",
            type: "Course",
            free: false,
            description: "Developing innovative business models for sustainability"
          }
        ],
        milestones: [
          "Develop a detailed business plan for your climate solution",
          "Create a prototype or minimum viable product",
          "Conduct customer interviews and market validation",
          "Build a basic financial model and funding strategy"
        ]
      },
      {
        title: "Launch & Validate (12-18 months)",
        description: "Launch your climate tech venture and validate your solution in the market",
        timeframe: "12-18 months",
        skills: [
          "Team building and leadership",
          "Product development and iteration",
          "Customer acquisition",
          "Fundraising and investor relations",
          "Partnership development"
        ],
        resources: [
          {
            title: "Climatebase Fellowship",
            url: "https://climatebase.org/fellowship",
            type: "Course",
            free: false,
            description: "Program for climate tech professionals and founders"
          },
          {
            title: "Climate Tech List",
            url: "https://www.climatetechlist.com/",
            type: "Website",
            free: true,
            description: "Directory of climate tech accelerators, investors, and resources"
          },
          {
            title: "The Climate Tech Entrepreneur's Playbook",
            url: "https://www.climatetechbook.org/",
            type: "Book",
            free: false,
            description: "Comprehensive guide to building climate tech ventures"
          }
        ],
        milestones: [
          "Incorporate your company and build initial team",
          "Launch your product to early customers",
          "Secure seed funding or grants",
          "Establish key partnerships in your industry"
        ]
      },
      {
        title: "Scale & Impact (Ongoing)",
        description: "Grow your climate tech venture and maximize its environmental impact",
        timeframe: "Ongoing",
        skills: [
          "Scaling operations",
          "Growth strategy",
          "Impact measurement",
          "Advanced fundraising",
          "Policy engagement and advocacy"
        ],
        resources: [
          {
            title: "How to Measure Anything: Finding the Value of Intangibles in Business",
            url: "https://www.amazon.com/How-Measure-Anything-Intangibles-Business/dp/1118539273",
            type: "Book",
            free: false,
            description: "Framework for measuring impact and outcomes"
          },
          {
            title: "Climate Finance and Investment",
            url: "https://www.coursera.org/learn/climate-finance-and-investment",
            type: "Course",
            free: false,
            description: "Understanding climate finance mechanisms and investment strategies"
          },
          {
            title: "My Climate Journey Podcast",
            url: "https://www.myclimatejourney.co/podcast",
            type: "Website",
            free: true,
            description: "Interviews with climate tech entrepreneurs and investors"
          }
        ],
        milestones: [
          "Achieve significant revenue or impact milestones",
          "Secure larger funding rounds (Series A+)",
          "Expand to new markets or product lines",
          "Establish thought leadership in climate solutions"
        ]
      }
    ],
    careerOutlook: "The climate tech sector is experiencing unprecedented growth as governments, corporations, and investors prioritize climate action. With trillions of dollars expected to flow into climate solutions over the coming decades, opportunities for climate tech entrepreneurs will continue to expand. Entrepreneurs who combine technical innovation with business execution and impact measurement will be particularly successful. While the field is competitive, the urgency of climate change creates a supportive ecosystem for ventures with effective solutions. Beyond financial returns, this career path offers the opportunity to create meaningful environmental impact at scale."
  },
  {
    id: "human-machine-interface-designer",
    title: "Human-Machine Interface Designer",
    description: "Human-Machine Interface (HMI) Designers create intuitive, accessible ways for humans to interact with increasingly complex technological systems. They blend expertise in psychology, design, and technology to ensure that advanced systems from AI assistants to robotic equipment can be effectively and safely controlled by humans of all abilities.",
    problemsSolved: [
      "Designing intuitive interfaces for complex AI and robotic systems",
      "Creating accessible technology interactions for people of all abilities",
      "Reducing cognitive load and mental fatigue when working with advanced technology",
      "Ensuring safety and preventing errors in human-machine collaborations",
      "Bridging the gap between cutting-edge technology and everyday users"
    ],
    salaryRange: {
      entry: 700000,
      mid: 1400000,
      senior: 2800000
    },
    demandLevel: "High",
    requiredSkills: [
      {
        name: "UX/UI Design",
        description: "Expertise in user experience and interface design principles and tools",
        level: "Advanced"
      },
      {
        name: "Cognitive Psychology",
        description: "Understanding of human perception, attention, memory, and decision-making",
        level: "Intermediate"
      },
      {
        name: "Prototyping",
        description: "Ability to create rapid prototypes from low to high fidelity",
        level: "Advanced"
      },
      {
        name: "Human Factors Engineering",
        description: "Knowledge of ergonomics and human capabilities and limitations",
        level: "Intermediate"
      },
      {
        name: "Emerging Interface Technologies",
        description: "Familiarity with AR/VR, voice interfaces, gesture control, and haptics",
        level: "Intermediate"
      },
      {
        name: "Programming Fundamentals",
        description: "Basic coding knowledge to collaborate effectively with developers",
        level: "Intermediate"
      }
    ],
    roadmap: [
      {
        title: "Build Design Foundations (6-12 months)",
        description: "Develop core understanding of design principles and human psychology",
        timeframe: "6-12 months",
        skills: [
          "Visual design fundamentals",
          "UX research methods",
          "Cognitive psychology basics",
          "Wireframing and prototyping",
          "Design thinking methodology"
        ],
        resources: [
          {
            title: "Don't Make Me Think, Revisited",
            url: "https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515/",
            type: "Book",
            free: false,
            description: "Classic guide to web usability principles"
          },
          {
            title: "Interaction Design Foundation Courses",
            url: "https://www.interaction-design.org/courses",
            type: "Course",
            free: false,
            description: "Comprehensive UX/UI design curriculum"
          },
          {
            title: "Human-Computer Interaction Fundamentals",
            url: "https://www.coursera.org/learn/human-computer-interaction",
            type: "Course",
            free: true,
            description: "Introduction to HCI principles and methods"
          }
        ],
        milestones: [
          "Create a portfolio with 2-3 interface design projects",
          "Complete fundamental UX/UI design courses",
          "Learn a prototyping tool like Figma or Adobe XD",
          "Conduct user research for a simple interface project"
        ]
      },
      {
        title: "Develop Specialized Interface Skills (9-15 months)",
        description: "Build expertise in emerging interface technologies and human factors",
        timeframe: "9-15 months",
        skills: [
          "Advanced prototyping",
          "Multimodal interface design",
          "Accessibility principles",
          "Human factors engineering",
          "User testing methodologies"
        ],
        resources: [
          {
            title: "The Design of Everyday Things",
            url: "https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654/",
            type: "Book",
            free: false,
            description: "Fundamental text on human-centered design"
          },
          {
            title: "AR/VR Interface Design",
            url: "https://www.coursera.org/specializations/ar-vr-design",
            type: "Course",
            free: false,
            description: "Designing for immersive environments"
          },
          {
            title: "Voice User Interface Design",
            url: "https://www.udemy.com/course/voice-user-interface-design/",
            type: "Course",
            free: false,
            description: "Principles of designing for voice interfaces"
          }
        ],
        milestones: [
          "Design interfaces for at least two different modalities (e.g., voice, AR/VR)",
          "Complete a human factors or cognitive psychology course",
          "Conduct usability testing with diverse user groups",
          "Create an interface that meets accessibility standards"
        ]
      },
      {
        title: "Apply Skills to Complex Systems (12-18 months)",
        description: "Learn to design interfaces for sophisticated technologies and systems",
        timeframe: "12-18 months",
        skills: [
          "AI interaction design",
          "Data visualization",
          "Complex system mapping",
          "Industrial interface design",
          "Error prevention strategies"
        ],
        resources: [
          {
            title: "Designing AI Products",
            url: "https://www.oreilly.com/library/view/designing-ai-products/9781098141653/",
            type: "Book",
            free: false,
            description: "Guide to designing products with artificial intelligence"
          },
          {
            title: "Information Dashboard Design",
            url: "https://www.amazon.com/Information-Dashboard-Design-Effective-Communication/dp/1938377001/",
            type: "Book",
            free: false,
            description: "Best practices for data visualization in interfaces"
          },
          {
            title: "Human-Robot Interaction",
            url: "https://www.edx.org/course/human-robot-interaction",
            type: "Course",
            free: true,
            description: "Principles of designing interfaces for robotic systems"
          }
        ],
        milestones: [
          "Design an interface for an AI or robotic system",
          "Create a data dashboard for complex information",
          "Develop a case study showcasing error prevention in a critical system",
          "Complete an internship or project with a technology company"
        ]
      },
      {
        title: "Advance to Specialized Applications (Ongoing)",
        description: "Develop expertise in specific domains and emerging interface paradigms",
        timeframe: "Ongoing",
        skills: [
          "Brain-computer interfaces",
          "Haptic feedback systems",
          "Mixed reality environments",
          "Ethical interface design",
          "Predictive interface systems"
        ],
        resources: [
          {
            title: "The Future of Brain-Computer Interfaces",
            url: "https://www.nature.com/articles/s41587-019-0234-8",
            type: "Website",
            free: false,
            description: "Research on emerging neural interface technologies"
          },
          {
            title: "Ethics in Design and Communication",
            url: "https://www.bloomsbury.com/us/ethics-in-design-and-communication-9781350077027/",
            type: "Book",
            free: false,
            description: "Ethical considerations in interface design"
          },
          {
            title: "Advanced Human-Computer Interaction",
            url: "https://www.udemy.com/course/advanced-human-computer-interaction/",
            type: "Course",
            free: false,
            description: "Cutting-edge HCI topics and research"
          }
        ],
        milestones: [
          "Specialize in interfaces for a specific industry (healthcare, manufacturing, etc.)",
          "Publish articles or speak at conferences on HMI design",
          "Lead the design of an innovative interface project",
          "Mentor junior designers in human-centered design principles"
