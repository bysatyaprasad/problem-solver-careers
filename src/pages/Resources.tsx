
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, YouTube, Globe, Code, User, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  }
];

const getIconForResourceType = (type: Resource['type']) => {
  switch (type) {
    case 'video':
      return <YouTube className="h-5 w-5" />;
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

const Resources = () => {
  const [selectedTab, setSelectedTab] = React.useState('all');
  
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
        <div className="mb-10">
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
            <h2 className="text-2xl font-bold text-gray-900">How to Use AI Tools for Learning</h2>
            <p className="text-gray-600 mt-2">
              AI tools can significantly accelerate your learning process. Here's how to use them effectively:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">For Research & Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Use AI to help explain complex concepts or gather information on specific topics.
                </p>
                <div className="bg-gray-50 rounded-md p-3 text-sm">
                  <p className="font-medium text-gray-900 mb-1">Effective Prompts:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>"Explain [complex concept] in simple terms as if I'm a high school student"</li>
                    <li>"What are the fundamental principles of [subject]?"</li>
                    <li>"Create a study guide for [topic] with key points and examples"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">For Practice & Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Get personalized practice problems and feedback on your solutions.
                </p>
                <div className="bg-gray-50 rounded-md p-3 text-sm">
                  <p className="font-medium text-gray-900 mb-1">Effective Prompts:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>"Create 5 practice problems about [topic] at a beginner level"</li>
                    <li>"Review my solution to this [problem/code] and suggest improvements"</li>
                    <li>"What are common mistakes people make when learning [skill]?"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">For Project Ideas & Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Generate project ideas and get guidance on implementing them.
                </p>
                <div className="bg-gray-50 rounded-md p-3 text-sm">
                  <p className="font-medium text-gray-900 mb-1">Effective Prompts:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>"Suggest 3 beginner-friendly [type] projects that demonstrate [skill]"</li>
                    <li>"What are the steps to create a [project type] from scratch?"</li>
                    <li>"How can I improve my portfolio project that does [description]?"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
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
