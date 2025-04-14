
import { CareerPath } from '../careerData';

export const roboticsEngineerCareer: CareerPath = {
  id: "robotics-engineer",
  title: "Robotics Engineer",
  description: "Robotics Engineers design, build, program, and maintain robots and robotic systems that perform complex tasks across industries. They combine expertise in mechanical engineering, electronics, computer science, and artificial intelligence to create machines that can operate autonomously or semi-autonomously in various environments.",
  problemsSolved: [
    "Automating dangerous, repetitive, or precision-critical tasks in manufacturing",
    "Developing robots for exploring hazardous or inaccessible environments",
    "Creating assistive robots for healthcare and elder care applications",
    "Building autonomous systems for agriculture, logistics, and transportation",
    "Designing collaborative robots that safely work alongside humans"
  ],
  salaryProspect: {
    trend: "Rising",
    entryLevelRange: "₹6-12 LPA",
    midLevelRange: "₹12-25 LPA",
    seniorLevelRange: "₹25-50+ LPA",
    notes: "Industry sectors like defense, autonomous vehicles, and specialized industrial automation tend to offer higher compensation. Hardware-focused roles typically pay more than software-only positions in robotics."
  },
  demandLevel: "High",
  requiredSkills: [
    {
      name: "Mechanical Engineering",
      description: "Knowledge of mechanisms, materials, and mechanical design principles",
      level: "Advanced"
    },
    {
      name: "Programming",
      description: "Proficiency in languages like Python, C++, and ROS (Robot Operating System)",
      level: "Advanced"
    },
    {
      name: "Electronics",
      description: "Understanding of sensors, actuators, microcontrollers, and circuit design",
      level: "Intermediate"
    },
    {
      name: "Computer Vision",
      description: "Ability to implement visual perception systems for robots",
      level: "Intermediate"
    },
    {
      name: "Machine Learning",
      description: "Knowledge of AI and ML techniques for robot decision-making",
      level: "Intermediate"
    },
    {
      name: "Control Systems",
      description: "Understanding of feedback control, motion planning, and kinematics",
      level: "Advanced"
    }
  ],
  roadmap: [
    {
      title: "Build Multidisciplinary Foundation (6-12 months)",
      description: "Develop core skills across mechanical, electrical, and software domains",
      timeframe: "6-12 months",
      skills: [
        "Engineering mechanics",
        "Basic electronics",
        "Programming fundamentals",
        "Mathematics for robotics",
        "CAD and 3D modeling"
      ],
      resources: [
        {
          title: "Introduction to Robotics",
          url: "https://www.edx.org/course/introduction-to-robotics",
          type: "Course",
          free: true,
          description: "Foundational course covering robotics principles"
        },
        {
          title: "Arduino Engineering Kit",
          url: "https://store.arduino.cc/products/arduino-engineering-kit",
          type: "Tool",
          free: false,
          description: "Hands-on kit for learning robotics fundamentals"
        },
        {
          title: "Modern Robotics: Mechanics, Planning, and Control",
          url: "https://modernrobotics.northwestern.edu/",
          type: "Book",
          free: true,
          description: "Comprehensive textbook with online resources"
        }
      ],
      milestones: [
        "Build a simple robot from a kit or from scratch",
        "Complete foundational courses in mechanics and programming",
        "Develop proficiency in a CAD software for robot design",
        "Create a GitHub repository for your robotics projects"
      ]
    },
    {
      title: "Master Core Robotics Technologies (12-18 months)",
      description: "Develop specialized skills in key robotics domains",
      timeframe: "12-18 months",
      skills: [
        "Robot Operating System (ROS)",
        "Sensor integration",
        "Control algorithms",
        "Computer vision basics",
        "Embedded systems programming"
      ],
      resources: [
        {
          title: "Robot Operating System (ROS) Tutorial",
          url: "https://www.ros.org/start-guide/",
          type: "Website",
          free: true,
          description: "Official guide to getting started with ROS"
        },
        {
          title: "Robotic Systems Lab (ETH Zurich)",
          url: "https://rsl.ethz.ch/education-students/lectures/ros.html",
          type: "Course",
          free: true,
          description: "Comprehensive ROS programming course"
        },
        {
          title: "Jetson AI Fundamentals",
          url: "https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs",
          type: "Course",
          free: true,
          description: "NVIDIA's course on embedded AI for robotics"
        }
      ],
      milestones: [
        "Build a ROS-based robot with multiple sensors",
        "Implement computer vision for object detection",
        "Program a robotic arm to perform specific tasks",
        "Participate in robotics hackathons or competitions"
      ]
    },
    {
      title: "Develop Advanced Robotics Skills (18-24 months)",
      description: "Master advanced techniques and specialize in robotics domains",
      timeframe: "18-24 months",
      skills: [
        "Robot kinematics and dynamics",
        "Path planning algorithms",
        "Machine learning for robotics",
        "Multi-robot systems",
        "Human-robot interaction"
      ],
      resources: [
        {
          title: "Deep Learning for Robotics",
          url: "https://www.coursera.org/learn/deep-learning-for-robotics",
          type: "Course",
          free: false,
          description: "Advanced course on AI applications in robotics"
        },
        {
          title: "Probabilistic Robotics",
          url: "https://www.amazon.com/Probabilistic-Robotics-INTELLIGENT-ROBOTICS-AUTONOMOUS/dp/0262201623",
          type: "Book",
          free: false,
          description: "Essential text on probabilistic approaches in robotics"
        },
        {
          title: "Open Robotics Software",
          url: "https://www.openrobotics.org/",
          type: "Website",
          free: true,
          description: "Repository of open-source robotics software and resources"
        }
      ],
      milestones: [
        "Implement SLAM (Simultaneous Localization and Mapping) on a robot",
        "Develop a machine learning algorithm for robot decision-making",
        "Build a complete robotics project from conception to implementation",
        "Contribute to open-source robotics projects"
      ]
    },
    {
      title: "Specialize and Innovate (Ongoing)",
      description: "Focus on industry applications and cutting-edge robotics research",
      timeframe: "Ongoing",
      skills: [
        "Industry-specific robotics applications",
        "System integration",
        "Advanced AI for robotics",
        "Soft robotics",
        "Robot ethics and safety"
      ],
      resources: [
        {
          title: "IEEE Robotics and Automation Society",
          url: "https://www.ieee-ras.org/",
          type: "Website",
          free: false,
          description: "Professional organization with resources and publications"
        },
        {
          title: "Robotics: Science and Systems Conference",
          url: "https://roboticsconference.org/",
          type: "Website",
          free: true,
          description: "Annual conference showcasing cutting-edge robotics research"
        },
        {
          title: "The Future of Robotics and Artificial Intelligence",
          url: "https://futureoflife.org/research/robotics-and-ai/",
          type: "Website",
          free: true,
          description: "Research on the societal impact of advanced robotics"
        }
      ],
      milestones: [
        "Lead a complex robotics project for industry application",
        "Mentor junior robotics engineers or students",
        "Publish research papers or file patents",
        "Develop expertise in emerging areas like swarm robotics or soft robotics"
      ]
    }
  ],
  careerOutlook: "The field of Robotics Engineering is experiencing robust growth as automation becomes essential across industries. From manufacturing and healthcare to agriculture and space exploration, robots are being deployed to perform increasingly complex tasks. The integration of AI with robotics is creating new opportunities, particularly in autonomous systems and collaborative robots. While competition exists for entry-level positions, specialized skills in areas like robot perception, manipulation, or human-robot interaction are in high demand and command premium compensation."
};
