
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
  }
];

export default careerData;
