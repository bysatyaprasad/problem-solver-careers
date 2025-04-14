
import { CareerPath } from '../careerData';

export const augmentedRealityDeveloperCareer: CareerPath = {
  id: "augmented-reality-developer",
  title: "Augmented Reality Developer",
  description: "Augmented Reality Developers create interactive experiences that blend digital content with the physical world. They combine expertise in 3D modeling, computer vision, and software development to build AR applications across industries like gaming, education, retail, healthcare, and manufacturing.",
  problemsSolved: [
    "Creating intuitive interfaces that bridge physical and digital realms",
    "Developing spatial computing solutions for training and education",
    "Building AR applications that enhance productivity in industrial settings",
    "Designing immersive customer experiences for retail and marketing",
    "Creating accessible AR tools for healthcare and accessibility applications"
  ],
  salaryProspect: {
    trend: "Rising",
    entryLevelRange: "₹5-12 LPA",
    midLevelRange: "₹12-25 LPA",
    seniorLevelRange: "₹25-50+ LPA",
    notes: "Specialized roles in enterprise AR, particularly in manufacturing, healthcare, and defense sectors, typically offer higher compensation than consumer AR development."
  },
  demandLevel: "High",
  requiredSkills: [
    {
      name: "3D Development",
      description: "Proficiency in creating and manipulating 3D assets and environments",
      level: "Advanced"
    },
    {
      name: "AR Platforms",
      description: "Experience with AR development frameworks like ARKit, ARCore, or Unity AR Foundation",
      level: "Advanced"
    },
    {
      name: "Software Development",
      description: "Strong programming skills in relevant languages (C#, Swift, Java/Kotlin)",
      level: "Advanced"
    },
    {
      name: "Computer Vision",
      description: "Understanding of image recognition, tracking, and spatial mapping",
      level: "Intermediate"
    },
    {
      name: "UX Design",
      description: "Knowledge of user experience principles for spatial computing",
      level: "Intermediate"
    },
    {
      name: "Performance Optimization",
      description: "Ability to optimize applications for mobile devices and AR headsets",
      level: "Intermediate"
    }
  ],
  roadmap: [
    {
      title: "Build Development Foundations (6-12 months)",
      description: "Develop core programming and 3D development skills",
      timeframe: "6-12 months",
      skills: [
        "Programming fundamentals",
        "3D modeling and design basics",
        "Mobile development",
        "Game engine fundamentals",
        "Computer graphics principles"
      ],
      resources: [
        {
          title: "Unity Learn Premium",
          url: "https://learn.unity.com/",
          type: "Course",
          free: false,
          description: "Comprehensive platform for learning Unity development"
        },
        {
          title: "Introduction to Augmented Reality and ARCore",
          url: "https://www.coursera.org/learn/ar",
          type: "Course",
          free: false,
          description: "Google's course on AR development fundamentals"
        },
        {
          title: "Fundamentals of Computer Graphics",
          url: "https://www.amazon.com/Fundamentals-Computer-Graphics-Steve-Marschner/dp/1482229390",
          type: "Book",
          free: false,
          description: "Core principles of computer graphics and rendering"
        }
      ],
      milestones: [
        "Complete Unity or Unreal Engine fundamentals courses",
        "Build a simple 3D mobile application",
        "Experiment with basic AR features using ARCore or ARKit",
        "Create a portfolio with 2-3 basic AR demonstrations"
      ]
    },
    {
      title: "Master AR Development (12-18 months)",
      description: "Develop specialized AR development skills and applications",
      timeframe: "12-18 months",
      skills: [
        "AR framework mastery (ARKit/ARCore)",
        "3D asset optimization",
        "Spatial mapping and anchoring",
        "Environment understanding",
        "Gesture and interaction design"
      ],
      resources: [
        {
          title: "ARKit by Tutorials",
          url: "https://www.raywenderlich.com/books/arkit-by-tutorials",
          type: "Book",
          free: false,
          description: "Hands-on guide to developing with Apple's ARKit"
        },
        {
          title: "Unity AR Foundation Courses",
          url: "https://learn.unity.com/course/creating-ar-content-with-ar-foundation",
          type: "Course",
          free: true,
          description: "Learning to build cross-platform AR applications in Unity"
        },
        {
          title: "Mixed Reality Design Labs",
          url: "https://github.com/microsoft/MixedRealityDesignLabs_Unity",
          type: "Website",
          free: true,
          description: "Open-source examples of mixed reality interactions"
        }
      ],
      milestones: [
        "Develop a fully featured AR application",
        "Master environment tracking and spatial anchors",
        "Create natural gesture-based interactions",
        "Build a portfolio showcasing diverse AR capabilities"
      ]
    },
    {
      title: "Advanced AR Development (18-24 months)",
      description: "Explore cutting-edge AR technologies and industry applications",
      timeframe: "18-24 months",
      skills: [
        "Multi-user AR experiences",
        "Cloud anchors and persistence",
        "Machine learning for AR",
        "WebAR development",
        "Industry-specific AR solutions"
      ],
      resources: [
        {
          title: "Designing for Mixed Reality",
          url: "https://www.oreilly.com/library/view/understanding-augmented-reality/9780240824086/",
          type: "Book",
          free: false,
          description: "Principles and patterns for AR/MR design"
        },
        {
          title: "Advanced ARKit Tutorials",
          url: "https://developer.apple.com/videos/play/wwdc2019/602/",
          type: "Website",
          free: true,
          description: "Advanced techniques for ARKit development"
        },
        {
          title: "WebXR Device API Fundamentals",
          url: "https://developers.google.com/web/updates/2018/06/ar-for-the-web",
          type: "Website",
          free: true,
          description: "Guide to creating AR experiences for web browsers"
        }
      ],
      milestones: [
        "Build a multi-user AR experience with cloud anchors",
        "Integrate computer vision ML models with AR applications",
        "Develop industry-specific AR solutions (retail, education, etc.)",
        "Create a WebAR application with advanced features"
      ]
    },
    {
      title: "Specialize and Innovate (Ongoing)",
      description: "Pioneer new AR applications and techniques",
      timeframe: "Ongoing",
      skills: [
        "Spatial computing research",
        "AR hardware integration (headsets, glasses)",
        "Computer vision R&D",
        "Enterprise AR solutions",
        "AR content management systems"
      ],
      resources: [
        {
          title: "Spatial Computing Research",
          url: "https://research.fb.com/blog/2019/08/exploring-the-challenges-of-spatial-computing-with-michael-abrash/",
          type: "Website",
          free: true,
          description: "Cutting-edge research in spatial computing"
        },
        {
          title: "AR/VR Developer Conferences",
          url: "https://augmentedworldexpo.com/",
          type: "Website",
          free: false,
          description: "Industry conferences showcasing latest AR technologies"
        },
        {
          title: "Building Enterprise AR Applications",
          url: "https://enterprise.vuforia.com/resources",
          type: "Website",
          free: true,
          description: "Resources for developing industrial AR solutions"
        }
      ],
      milestones: [
        "Lead complex AR development projects",
        "Contribute to AR open standards or frameworks",
        "Develop expertise in specialized AR domains",
        "Create innovative AR applications that solve industry problems"
      ]
    }
  ],
  careerOutlook: "Augmented Reality development is experiencing robust growth as the technology matures and finds applications beyond entertainment and gaming. Major technology companies continue to invest in AR platforms and hardware, while industries from manufacturing to healthcare increasingly adopt AR solutions for training, visualization, and task guidance. The introduction of AR-capable glasses and wearables will create significant new opportunities in the coming years. Developers who combine technical AR skills with industry domain knowledge or specializations in areas like computer vision will be particularly valuable."
};
