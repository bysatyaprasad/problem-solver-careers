
import { CareerPath } from '../careerData';

export const quantumComputingSpecialistCareer: CareerPath = {
  id: "quantum-computing-specialist",
  title: "Quantum Computing Specialist",
  description: "Quantum Computing Specialists design, develop, and implement algorithms for quantum computers, bridging advanced physics concepts with practical computing applications. They work on cutting-edge technology that has the potential to revolutionize fields like cryptography, materials science, and drug discovery.",
  problemsSolved: [
    "Designing quantum algorithms that outperform classical approaches",
    "Optimizing quantum circuits to run on current NISQ era hardware",
    "Developing error correction techniques for quantum systems",
    "Creating hybrid quantum-classical solutions for industry problems",
    "Translating complex computational problems into quantum frameworks"
  ],
  salaryProspect: {
    trend: "Rising",
    entryLevelRange: "₹10-15 LPA",
    midLevelRange: "₹18-30 LPA",
    seniorLevelRange: "₹35-60+ LPA",
    notes: "Salaries are at a premium due to scarcity of skilled professionals. Industry partnerships and academic positions offer different compensation models, with industry often paying significantly more."
  },
  demandLevel: "Medium",
  requiredSkills: [
    {
      name: "Quantum Mechanics",
      description: "Strong understanding of quantum mechanics principles and mathematics",
      level: "Advanced"
    },
    {
      name: "Quantum Programming",
      description: "Experience with quantum programming frameworks like Qiskit, Cirq, or Q#",
      level: "Advanced"
    },
    {
      name: "Linear Algebra",
      description: "Deep knowledge of linear algebra, vectors, matrices, and tensor products",
      level: "Advanced"
    },
    {
      name: "Classical Programming",
      description: "Proficiency in Python and other programming languages for classical components",
      level: "Advanced"
    },
    {
      name: "Algorithm Design",
      description: "Ability to design and analyze quantum and classical algorithms",
      level: "Intermediate"
    },
    {
      name: "Industry Domain Knowledge",
      description: "Understanding of application domains like finance, chemistry, or cybersecurity",
      level: "Intermediate"
    }
  ],
  roadmap: [
    {
      title: "Master the Fundamentals (6-12 months)",
      description: "Build strong foundation in quantum mechanics and mathematics",
      timeframe: "6-12 months",
      skills: [
        "Linear algebra",
        "Quantum mechanics",
        "Complex number mathematics",
        "Programming fundamentals",
        "Classical algorithms"
      ],
      resources: [
        {
          title: "Quantum Computation and Quantum Information",
          url: "https://www.cambridge.org/core/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE",
          type: "Book",
          free: false,
          description: "Comprehensive textbook on quantum computing fundamentals"
        },
        {
          title: "Introduction to Quantum Computing",
          url: "https://www.coursera.org/learn/quantum-computing-algorithms",
          type: "Course",
          free: false,
          description: "Beginner-friendly course covering key quantum concepts"
        },
        {
          title: "Qiskit Textbook",
          url: "https://qiskit.org/textbook/preface.html",
          type: "Website",
          free: true,
          description: "Open-source educational resource for quantum computing"
        }
      ],
      milestones: [
        "Complete 2-3 courses in quantum mechanics and linear algebra",
        "Implement basic quantum algorithms like Deutsch-Jozsa",
        "Create a quantum computing study group or join an online community",
        "Build a portfolio of simple quantum circuit implementations"
      ]
    },
    {
      title: "Develop Quantum Programming Skills (6-12 months)",
      description: "Learn quantum programming frameworks and implement standard algorithms",
      timeframe: "6-12 months",
      skills: [
        "Quantum circuit design",
        "Quantum programming (Qiskit, Cirq, Q#)",
        "Quantum algorithm implementation",
        "Quantum simulation techniques",
        "Version control and collaboration tools"
      ],
      resources: [
        {
          title: "Qiskit Documentation",
          url: "https://qiskit.org/documentation/",
          type: "Website",
          free: true,
          description: "Complete reference for IBM's quantum computing framework"
        },
        {
          title: "Programming Quantum Computers",
          url: "https://www.oreilly.com/library/view/programming-quantum-computers/9781492039679/",
          type: "Book",
          free: false,
          description: "Practical guide to quantum programming"
        },
        {
          title: "IBM Quantum Challenge",
          url: "https://quantum-computing.ibm.com/challenges/",
          type: "Website",
          free: true,
          description: "Hands-on quantum programming challenges"
        }
      ],
      milestones: [
        "Implement Grover's and Shor's algorithms",
        "Complete at least one quantum programming certification",
        "Contribute to open-source quantum projects",
        "Run programs on actual quantum hardware"
      ]
    },
    {
      title: "Specialize in Application Areas (12-18 months)",
      description: "Focus on specific quantum computing applications in industry",
      timeframe: "12-18 months",
      skills: [
        "Quantum machine learning",
        "Quantum chemistry simulation",
        "Quantum optimization",
        "Quantum error correction",
        "Hybrid quantum-classical algorithms"
      ],
      resources: [
        {
          title: "Quantum Machine Learning",
          url: "https://www.edx.org/course/quantum-machine-learning",
          type: "Course",
          free: false,
          description: "Advanced course on quantum approaches to ML"
        },
        {
          title: "Quantum Chemistry with Qiskit",
          url: "https://qiskit.org/textbook/ch-applications/quantum-chemistry.html",
          type: "Website",
          free: true,
          description: "Guide to implementing quantum chemistry applications"
        },
        {
          title: "Quantum Computing for the Quantum Curious",
          url: "https://link.springer.com/book/10.1007/978-3-030-61601-4",
          type: "Book",
          free: true,
          description: "Open access book on quantum computing applications"
        }
      ],
      milestones: [
        "Develop a quantum application solving a real-world problem",
        "Publish research papers or technical blog posts",
        "Create a complete project portfolio showcasing specialization",
        "Participate in quantum hackathons or competitions"
      ]
    },
    {
      title: "Industry Integration and Advanced Research (Ongoing)",
      description: "Apply quantum computing to industry challenges and contribute to the field",
      timeframe: "Ongoing",
      skills: [
        "Quantum algorithm optimization",
        "Hardware-specific implementation",
        "Performance benchmarking",
        "Research methodology",
        "Business problem translation"
      ],
      resources: [
        {
          title: "Quantum Computing Industry Applications",
          url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/quantum-computing-use-cases-are-getting-real-what-you-need-to-know",
          type: "Website",
          free: true,
          description: "Analysis of practical quantum computing applications"
        },
        {
          title: "Quantum Computing: Progress and Prospects",
          url: "https://www.nap.edu/catalog/25196/quantum-computing-progress-and-prospects",
          type: "Book",
          free: true,
          description: "National Academies report on the future of quantum computing"
        },
        {
          title: "QWorld's QResearch",
          url: "https://qworld.net/qresearch/",
          type: "Website",
          free: true,
          description: "Platform for collaborative quantum research projects"
        }
      ],
      milestones: [
        "Lead a quantum computing project with industry application",
        "Present work at quantum computing conferences",
        "Mentor junior quantum specialists",
        "Stay current with rapidly evolving quantum hardware and software"
      ]
    }
  ],
  careerOutlook: "Quantum Computing is in its early stages but growing rapidly, with major investments from governments and corporations worldwide. As quantum hardware matures beyond the current NISQ era, demand for specialists will increase dramatically. This field offers the opportunity to work at the cutting edge of computing, with potential applications that could transform industries from pharmaceuticals to finance to cybersecurity."
};
