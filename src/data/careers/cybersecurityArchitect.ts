
import { CareerPath } from '../careerData';

export const cybersecurityArchitectCareer: CareerPath = {
  id: "cybersecurity-architect",
  title: "Cybersecurity Architect",
  description: "Cybersecurity Architects design and implement comprehensive security systems to protect organizations from evolving digital threats. They combine deep technical knowledge with strategic thinking to create resilient security frameworks that safeguard sensitive data and critical infrastructure.",
  problemsSolved: [
    "Designing secure systems that protect against sophisticated cyber attacks",
    "Creating resilient architectures that maintain operations during security incidents",
    "Implementing zero-trust security models across complex organizations",
    "Balancing security requirements with usability and business needs",
    "Developing security strategies for emerging technologies like IoT and cloud"
  ],
  salaryProspect: {
    trend: "Rising",
    entryLevelRange: "₹12-18 LPA",
    midLevelRange: "₹18-30 LPA",
    seniorLevelRange: "₹30-65+ LPA",
    notes: "Financial services, healthcare, and government sectors typically offer premium compensation. Security certifications like CISSP significantly increase earning potential."
  },
  demandLevel: "High",
  requiredSkills: [
    {
      name: "Security Architecture",
      description: "Ability to design end-to-end security systems for complex infrastructures",
      level: "Advanced"
    },
    {
      name: "Network Security",
      description: "Deep understanding of network protocols and security controls",
      level: "Advanced"
    },
    {
      name: "Cloud Security",
      description: "Knowledge of security principles for major cloud platforms",
      level: "Advanced"
    },
    {
      name: "Risk Assessment",
      description: "Skills in identifying, evaluating, and prioritizing security risks",
      level: "Advanced"
    },
    {
      name: "Security Frameworks",
      description: "Familiarity with NIST, ISO, MITRE ATT&CK and other security frameworks",
      level: "Advanced"
    },
    {
      name: "Communication",
      description: "Ability to translate technical security concepts to business stakeholders",
      level: "Intermediate"
    }
  ],
  roadmap: [
    {
      title: "Build Technical Foundation (6-12 months)",
      description: "Develop core IT and security skills necessary for security architecture",
      timeframe: "6-12 months",
      skills: [
        "Networking fundamentals",
        "Operating system security",
        "Basic cryptography",
        "Security principles",
        "IT infrastructure concepts"
      ],
      resources: [
        {
          title: "CompTIA Security+",
          url: "https://www.comptia.org/certifications/security",
          type: "Course",
          free: false,
          description: "Entry-level security certification covering essential concepts"
        },
        {
          title: "Cybersecurity Fundamentals",
          url: "https://www.edx.org/professional-certificate/ritx-cybersecurity-fundamentals",
          type: "Course",
          free: true,
          description: "Comprehensive introduction to cybersecurity concepts"
        },
        {
          title: "NIST Cybersecurity Framework",
          url: "https://www.nist.gov/cyberframework",
          type: "Website",
          free: true,
          description: "Standard security framework for organizations"
        }
      ],
      milestones: [
        "Obtain Security+ or equivalent certification",
        "Build a home lab environment for security testing",
        "Complete 2-3 cybersecurity fundamentals courses",
        "Create a portfolio of basic security projects"
      ]
    },
    {
      title: "Develop Specialized Security Skills (12-18 months)",
      description: "Build expertise in security domains and technologies",
      timeframe: "12-18 months",
      skills: [
        "Penetration testing",
        "Security monitoring and SIEM",
        "Identity and access management",
        "Cloud security implementation",
        "Incident response"
      ],
      resources: [
        {
          title: "Certified Ethical Hacker (CEH)",
          url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
          type: "Course",
          free: false,
          description: "Training in ethical hacking and penetration testing"
        },
        {
          title: "Cloud Security Alliance Guidance",
          url: "https://cloudsecurityalliance.org/research/guidance/",
          type: "Website",
          free: true,
          description: "Best practices for securing cloud environments"
        },
        {
          title: "Practical Malware Analysis",
          url: "https://nostarch.com/malware",
          type: "Book",
          free: false,
          description: "Guide to analyzing and understanding malicious code"
        }
      ],
      milestones: [
        "Obtain intermediate security certifications (CEH, GCIH, etc.)",
        "Participate in capture-the-flag competitions",
        "Implement comprehensive security monitoring system",
        "Contribute to open-source security projects"
      ]
    },
    {
      title: "Master Security Architecture (18-24 months)",
      description: "Develop expertise in designing secure systems and frameworks",
      timeframe: "18-24 months",
      skills: [
        "Security architecture frameworks",
        "Zero-trust architecture",
        "Secure SDLC integration",
        "Enterprise risk management",
        "Security governance"
      ],
      resources: [
        {
          title: "CISSP (Certified Information Systems Security Professional)",
          url: "https://www.isc2.org/Certifications/CISSP",
          type: "Course",
          free: false,
          description: "Gold standard certification for security professionals"
        },
        {
          title: "SABSA Security Architecture Framework",
          url: "https://sabsa.org/",
          type: "Website",
          free: false,
          description: "Enterprise security architecture methodology"
        },
        {
          title: "Zero Trust Networks: Building Secure Systems in Untrusted Networks",
          url: "https://www.oreilly.com/library/view/zero-trust-networks/9781491962183/",
          type: "Book",
          free: false,
          description: "Guide to implementing zero-trust security architecture"
        }
      ],
      milestones: [
        "Obtain CISSP or equivalent advanced certification",
        "Design and implement a zero-trust architecture",
        "Create comprehensive security documentation for an organization",
        "Build reference architectures for different security scenarios"
      ]
    },
    {
      title: "Lead Security Strategy (Ongoing)",
      description: "Develop leadership skills and strategic security thinking",
      timeframe: "Ongoing",
      skills: [
        "Security program management",
        "Strategic planning",
        "Executive communication",
        "Emerging technology evaluation",
        "Regulatory compliance"
      ],
      resources: [
        {
          title: "CISO Leadership: Essential Principles for Success",
          url: "https://www.amazon.com/CISO-Leadership-Essential-Principles-Success/dp/1798618150",
          type: "Book",
          free: false,
          description: "Guide to security leadership principles"
        },
        {
          title: "Cybersecurity Leadership Summit",
          url: "https://cybersecurity-leadership-summit.com/",
          type: "Website",
          free: false,
          description: "Annual event for security leaders"
        },
        {
          title: "NIST Privacy Framework",
          url: "https://www.nist.gov/privacy-framework",
          type: "Website",
          free: true,
          description: "Framework for managing privacy risks"
        }
      ],
      milestones: [
        "Lead enterprise-wide security initiatives",
        "Develop security strategy aligned with business objectives",
        "Mentor junior security professionals",
        "Establish security evangelism program within organization"
      ]
    }
  ],
  careerOutlook: "Cybersecurity Architects are in extremely high demand as organizations face increasingly sophisticated threats and regulatory requirements. With the global cost of cybercrime projected to reach $10.5 trillion annually by 2025, organizations across all sectors are investing heavily in security talent. This role offers long-term stability, competitive compensation, and the opportunity to make a significant impact on organizational resilience and security posture."
};
