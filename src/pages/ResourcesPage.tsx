
import React from 'react';
import { BookOpen, Video, Globe, Wrench, Award, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';

const ResourcesPage = () => {
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Resources</h2>
          <p className="text-gray-600 mb-8">
            We've curated the best learning resources across various formats to help you master the skills needed for future careers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Online Courses */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-red-100 text-red-600 rounded-md">
                    <Video className="h-5 w-5" />
                  </div>
                  <CardTitle>Online Courses</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.coursera.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                      Coursera
                    </a>
                    <p className="text-sm text-gray-600">
                      University-backed courses from institutions like Stanford, MIT, and Google across all tech and business domains.
                    </p>
                  </li>
                  <li>
                    <a href="https://www.edx.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                      edX
                    </a>
                    <p className="text-sm text-gray-600">
                      Free courses with optional paid certificates from top universities and organizations.
                    </p>
                  </li>
                  <li>
                    <a href="https://www.udacity.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                      Udacity Nanodegrees
                    </a>
                    <p className="text-sm text-gray-600">
                      Industry-aligned programs with hands-on projects and mentorship in cutting-edge fields.
                    </p>
                  </li>
                  <li>
                    <a href="https://www.udemy.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                      Udemy
                    </a>
                    <p className="text-sm text-gray-600">
                      Practical, skill-based courses often taught by industry practitioners rather than academics.
                    </p>
                  </li>
                  <li>
                    <a href="https://www.pluralsight.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                      Pluralsight
                    </a>
                    <p className="text-sm text-gray-600">
                      Technology skill platform with assessments, learning paths, and in-depth courses for professionals.
                    </p>
                  </li>
                  <li>
                    <a href="https://www.codecademy.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                      Codecademy
                    </a>
                    <p className="text-sm text-gray-600">
                      Interactive coding lessons with immediate feedback for programming languages and web development.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Books & Publications */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-md">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <CardTitle>Books & Publications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-medium">Technology & Programming</h3>
                  <ul className="space-y-2 ml-5 list-disc">
                    <li>
                      <p className="text-sm text-gray-600">
                        "Clean Code" by Robert C. Martin - Principles for writing maintainable code
                      </p>
                    </li>
                    <li>
                      <p className="text-sm text-gray-600">
                        "The Pragmatic Programmer" by Andrew Hunt & David Thomas - Practical approaches to software development
                      </p>
                    </li>
                    <li>
                      <p className="text-sm text-gray-600">
                        "Hands-On Machine Learning with Scikit-Learn and TensorFlow" by Aurélien Géron
                      </p>
                    </li>
                  </ul>
                  
                  <h3 className="font-medium">Career Development</h3>
                  <ul className="space-y-2 ml-5 list-disc">
                    <li>
                      <p className="text-sm text-gray-600">
                        "Range: Why Generalists Triumph in a Specialized World" by David Epstein
                      </p>
                    </li>
                    <li>
                      <p className="text-sm text-gray-600">
                        "Deep Work" by Cal Newport - Rules for focused success in a distracted world
                      </p>
                    </li>
                    <li>
                      <p className="text-sm text-gray-600">
                        "The Squiggly Career" by Helen Tupper & Sarah Ellis - Navigate and thrive in the changing world of work
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Online Platforms & Communities */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-green-100 text-green-600 rounded-md">
                    <Globe className="h-5 w-5" />
                  </div>
                  <CardTitle>Online Platforms & Communities</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-medium">Q&A and Knowledge Sharing</h3>
                  <ul className="space-y-2 ml-5">
                    <li>
                      <a href="https://stackoverflow.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        Stack Overflow
                      </a>
                      <p className="text-sm text-gray-600">
                        Community-driven Q&A for programmers with extensive archives of solved problems.
                      </p>
                    </li>
                    <li>
                      <a href="https://www.reddit.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        Reddit - Learning Communities
                      </a>
                      <p className="text-sm text-gray-600">
                        Specialized subreddits like r/learnprogramming, r/datascience, r/MachineLearning.
                      </p>
                    </li>
                  </ul>
                  
                  <h3 className="font-medium">Project-Based Learning</h3>
                  <ul className="space-y-2 ml-5">
                    <li>
                      <a href="https://github.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        GitHub
                      </a>
                      <p className="text-sm text-gray-600">
                        Access open-source projects, tutorials, and educational repositories.
                      </p>
                    </li>
                    <li>
                      <a href="https://www.kaggle.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        Kaggle
                      </a>
                      <p className="text-sm text-gray-600">
                        Data science competitions, notebooks, datasets, and learning resources.
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Open Educational Resources */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-md">
                    <Award className="h-5 w-5" />
                  </div>
                  <CardTitle>Open Educational Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-medium">University Open Courseware</h3>
                  <ul className="space-y-2 ml-5">
                    <li>
                      <a href="https://ocw.mit.edu" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        MIT OpenCourseWare
                      </a>
                      <p className="text-sm text-gray-600">
                        Free access to MIT course materials across disciplines.
                      </p>
                    </li>
                    <li>
                      <a href="https://online.stanford.edu/free-courses" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        Stanford Online
                      </a>
                      <p className="text-sm text-gray-600">
                        Free courses and materials from Stanford University.
                      </p>
                    </li>
                  </ul>
                  
                  <h3 className="font-medium">Video Resources</h3>
                  <ul className="space-y-2 ml-5">
                    <li>
                      <a href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        freeCodeCamp YouTube Channel
                      </a>
                      <p className="text-sm text-gray-600">
                        In-depth coding tutorials and courses on various programming topics.
                      </p>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/c/3blue1brown" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        3Blue1Brown
                      </a>
                      <p className="text-sm text-gray-600">
                        Visual explanations of mathematical concepts often used in computer science.
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Master AI Tools for Accelerated Learning</h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Leverage AI-powered tools to enhance your learning process and master skills more efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Learning Assistants */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-md">
                    <Brain className="h-5 w-5" />
                  </div>
                  <CardTitle>AI Learning Assistants</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li>
                    <a href="https://chat.openai.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                      ChatGPT
                    </a>
                    <p className="text-sm text-gray-600">
                      AI assistant for explanations, tutoring, and answering questions. Effective prompts:
                    </p>
                    <ul className="space-y-1 mt-2 ml-5 list-disc text-sm text-gray-600">
                      <li>"Explain [concept] as if I'm a beginner with no background in this field."</li>
                      <li>"Create a step-by-step learning path for becoming proficient in [skill]."</li>
                      <li>"What are common misconceptions about [topic] that beginners should avoid?"</li>
                      <li>"Generate practice problems for [topic] at [beginner/intermediate/advanced] level."</li>
                      <li>"Compare and contrast [concept A] and [concept B] with examples of when to use each."</li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://bard.google.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                      Google Bard / Gemini
                    </a>
                    <p className="text-sm text-gray-600">
                      Google's AI assistant with real-time information access. Effective prompts:
                    </p>
                    <ul className="space-y-1 mt-2 ml-5 list-disc text-sm text-gray-600">
                      <li>"Find the most recent research papers on [topic] and summarize their key findings."</li>
                      <li>"What are the latest developments in [field] in the past year?"</li>
                      <li>"Create a comparison chart of the top learning resources for [skill]."</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* AI Content Creation & Study Tools */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-md">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <CardTitle>AI Content Creation & Study Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-medium">Note-Taking & Knowledge Management</h3>
                  <ul className="space-y-2 ml-5">
                    <li>
                      <a href="https://www.notion.so" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        Notion AI
                      </a>
                      <p className="text-sm text-gray-600">
                        AI-enhanced note-taking with features to summarize, improve writing, and generate content.
                      </p>
                    </li>
                    <li>
                      <a href="https://www.obsidian.md" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        Obsidian
                      </a>
                      <p className="text-sm text-gray-600">
                        Knowledge graph note-taking that helps connect concepts. Ideal for building a personal learning system.
                      </p>
                    </li>
                  </ul>
                  
                  <h3 className="font-medium">AI Coding Assistants</h3>
                  <ul className="space-y-2 ml-5">
                    <li>
                      <a href="https://github.com/features/copilot" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        GitHub Copilot
                      </a>
                      <p className="text-sm text-gray-600">
                        AI pair programmer that suggests code as you type.
                      </p>
                    </li>
                    <li>
                      <a href="https://www.replit.com/ai" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                        Replit Ghostwriter
                      </a>
                      <p className="text-sm text-gray-600">
                        AI coding assistant integrated with Replit's online IDE. Great for learning to code through guided projects.
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
