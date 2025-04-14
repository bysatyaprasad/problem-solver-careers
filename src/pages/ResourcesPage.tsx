
import React from 'react';
import { 
  BookOpen, Video, Globe, Wrench, Award, Brain, 
  Newspaper, Code, Users, Share, Lightning, Database, 
  Shield, Youtube, School, Presentation, Headphones, Terminal
} from 'lucide-react';
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
        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="communities">Communities</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Resources</h2>
              <p className="text-gray-600 mb-8">
                We've curated the best learning resources across various formats to help you master the skills needed for future careers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <li>
                        <a href="https://www.skillshare.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Skillshare
                        </a>
                        <p className="text-sm text-gray-600">
                          Creative and practical skills taught through project-based classes by industry professionals.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/learning" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          LinkedIn Learning
                        </a>
                        <p className="text-sm text-gray-600">
                          Professional development courses integrated with LinkedIn's career ecosystem.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.masterclass.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          MasterClass
                        </a>
                        <p className="text-sm text-gray-600">
                          Learn from world-class experts and celebrities in their fields with high-production value courses.
                        </p>
                      </li>
                      <li>
                        <a href="https://frontendmasters.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Frontend Masters
                        </a>
                        <p className="text-sm text-gray-600">
                          In-depth courses on frontend technologies taught by industry experts.
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
                        <li>
                          <p className="text-sm text-gray-600">
                            "Design Patterns: Elements of Reusable Object-Oriented Software" by Gang of Four
                          </p>
                        </li>
                        <li>
                          <p className="text-sm text-gray-600">
                            "Cracking the Coding Interview" by Gayle Laakmann McDowell - Preparation for technical interviews
                          </p>
                        </li>
                        <li>
                          <p className="text-sm text-gray-600">
                            "Introduction to Algorithms" by Thomas H. Cormen - Comprehensive coverage of algorithms
                          </p>
                        </li>
                        <li>
                          <p className="text-sm text-gray-600">
                            "Effective TypeScript" by Dan Vanderkam - 62 specific ways to improve your TypeScript
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
                        <li>
                          <p className="text-sm text-gray-600">
                            "Atomic Habits" by James Clear - Building good habits and breaking bad ones
                          </p>
                        </li>
                        <li>
                          <p className="text-sm text-gray-600">
                            "Mindset: The New Psychology of Success" by Carol S. Dweck - Developing a growth mindset
                          </p>
                        </li>
                        <li>
                          <p className="text-sm text-gray-600">
                            "The Coding Career Handbook" by Shawn Wang - Principles and strategies for a successful coding career
                          </p>
                        </li>
                        <li>
                          <p className="text-sm text-gray-600">
                            "So Good They Can't Ignore You" by Cal Newport - Why skills trump passion in the quest for work you love
                          </p>
                        </li>
                      </ul>
                      
                      <h3 className="font-medium">Technology & Future Trends</h3>
                      <ul className="space-y-2 ml-5 list-disc">
                        <li>
                          <p className="text-sm text-gray-600">
                            "The Age of AI" by Henry Kissinger, Eric Schmidt, and Daniel Huttenlocher
                          </p>
                        </li>
                        <li>
                          <p className="text-sm text-gray-600">
                            "Life 3.0" by Max Tegmark - Being human in the age of artificial intelligence
                          </p>
                        </li>
                        <li>
                          <p className="text-sm text-gray-600">
                            "AI Superpowers" by Kai-Fu Lee - China, Silicon Valley, and the new world order
                          </p>
                        </li>
                        <li>
                          <p className="text-sm text-gray-600">
                            "The Innovators" by Walter Isaacson - How a group of hackers, geniuses, and geeks created the digital revolution
                          </p>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Podcasts & Audio Learning */}
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-purple-100 text-purple-600 rounded-md">
                        <Headphones className="h-5 w-5" />
                      </div>
                      <CardTitle>Podcasts & Audio Learning</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li>
                        <a href="https://syntax.fm/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Syntax
                        </a>
                        <p className="text-sm text-gray-600">
                          A tasty treats podcast for web developers by Wes Bos and Scott Tolinski.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.codenewbie.org/podcast" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          CodeNewbie
                        </a>
                        <p className="text-sm text-gray-600">
                          Stories from people on their coding journey, helping newcomers find their way.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.se-radio.net/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Software Engineering Radio
                        </a>
                        <p className="text-sm text-gray-600">
                          In-depth technical discussions with industry professionals.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.frontendhappyhour.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Front End Happy Hour
                        </a>
                        <p className="text-sm text-gray-600">
                          Engineers from Netflix, Twitch, and Atlassian discuss frontend development.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.dataengineeringpodcast.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Data Engineering Podcast
                        </a>
                        <p className="text-sm text-gray-600">
                          Discussions about data engineering, data management, and data infrastructure.
                        </p>
                      </li>
                      <li>
                        <a href="https://changelog.com/podcast" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          The Changelog
                        </a>
                        <p className="text-sm text-gray-600">
                          Conversations with the hackers, leaders, and innovators of software development.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.pythonpodcast.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Podcast.__init__
                        </a>
                        <p className="text-sm text-gray-600">
                          Stories about Python and the people who make it great.
                        </p>
                      </li>
                      <li>
                        <a href="https://twimlai.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          TWIML AI Podcast
                        </a>
                        <p className="text-sm text-gray-600">
                          Machine learning and artificial intelligence interviews with experts.
                        </p>
                      </li>
                    </ul>
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
                        <li>
                          <a href="https://hashnode.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Hashnode
                          </a>
                          <p className="text-sm text-gray-600">
                            Developer blogging platform and community for sharing knowledge.
                          </p>
                        </li>
                        <li>
                          <a href="https://dev.to" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            DEV Community
                          </a>
                          <p className="text-sm text-gray-600">
                            Inclusive community for developers to share ideas and help each other grow.
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
                        <li>
                          <a href="https://exercism.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Exercism
                          </a>
                          <p className="text-sm text-gray-600">
                            Improve your coding skills with exercises and mentoring in 50+ languages.
                          </p>
                        </li>
                        <li>
                          <a href="https://www.freecodecamp.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            freeCodeCamp
                          </a>
                          <p className="text-sm text-gray-600">
                            Learn to code with free interactive courses, projects, and certifications.
                          </p>
                        </li>
                        <li>
                          <a href="https://www.hackerrank.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            HackerRank
                          </a>
                          <p className="text-sm text-gray-600">
                            Practice coding challenges and prepare for technical interviews.
                          </p>
                        </li>
                      </ul>
                      
                      <h3 className="font-medium">Community Forums & Networking</h3>
                      <ul className="space-y-2 ml-5">
                        <li>
                          <a href="https://discord.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Discord Developer Communities
                          </a>
                          <p className="text-sm text-gray-600">
                            Join specialized server communities for programming languages, frameworks, and tech interests.
                          </p>
                        </li>
                        <li>
                          <a href="https://www.meetup.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Meetup Tech Groups
                          </a>
                          <p className="text-sm text-gray-600">
                            Find local tech meetups and communities to learn and network in person.
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
                        <li>
                          <a href="https://oyc.yale.edu" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Yale Open Courses
                          </a>
                          <p className="text-sm text-gray-600">
                            Free access to introductory courses taught by Yale professors.
                          </p>
                        </li>
                        <li>
                          <a href="https://cs50.harvard.edu" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Harvard CS50
                          </a>
                          <p className="text-sm text-gray-600">
                            Harvard's introduction to computer science, free and accessible online.
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
                        <li>
                          <a href="https://www.youtube.com/c/Fireship" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Fireship
                          </a>
                          <p className="text-sm text-gray-600">
                            Fast-paced, high-density coding tutorials on modern web development.
                          </p>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/c/TheCodingTrain" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            The Coding Train
                          </a>
                          <p className="text-sm text-gray-600">
                            Creative coding tutorials with a focus on visualization and generative art.
                          </p>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/c/TechWithTim" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Tech with Tim
                          </a>
                          <p className="text-sm text-gray-600">
                            Python tutorials, machine learning, and artificial intelligence content.
                          </p>
                        </li>
                      </ul>
                      
                      <h3 className="font-medium">Interactive Learning Platforms</h3>
                      <ul className="space-y-2 ml-5">
                        <li>
                          <a href="https://www.khanacademy.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Khan Academy
                          </a>
                          <p className="text-sm text-gray-600">
                            Free educational content ranging from basic to advanced topics in math, science, and computing.
                          </p>
                        </li>
                        <li>
                          <a href="https://scrimba.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Scrimba
                          </a>
                          <p className="text-sm text-gray-600">
                            Interactive coding screencasts where you can edit the code directly in the tutorial.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Interactive Coding Platforms */}
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-amber-100 text-amber-600 rounded-md">
                        <Code className="h-5 w-5" />
                      </div>
                      <CardTitle>Interactive Coding Platforms</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li>
                        <a href="https://leetcode.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          LeetCode
                        </a>
                        <p className="text-sm text-gray-600">
                          Platform for practicing coding problems, especially for technical interviews.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.codewars.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Codewars
                        </a>
                        <p className="text-sm text-gray-600">
                          Community-driven platform with coding challenges called "kata".
                        </p>
                      </li>
                      <li>
                        <a href="https://projecteuler.net" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Project Euler
                        </a>
                        <p className="text-sm text-gray-600">
                          Series of challenging mathematical/programming problems that require creative problem-solving.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.codecademy.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Codecademy
                        </a>
                        <p className="text-sm text-gray-600">
                          Learn to code interactively with immediate feedback in your browser.
                        </p>
                      </li>
                      <li>
                        <a href="https://codesandbox.io" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          CodeSandbox
                        </a>
                        <p className="text-sm text-gray-600">
                          Online code editor and prototyping tool for rapid web development.
                        </p>
                      </li>
                      <li>
                        <a href="https://replit.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Replit
                        </a>
                        <p className="text-sm text-gray-600">
                          Collaborative, in-browser IDE for coding in 50+ languages.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.frontendmentor.io" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Frontend Mentor
                        </a>
                        <p className="text-sm text-gray-600">
                          Real-world front-end coding challenges with professional designs.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="courses">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>The Best Online Courses & Learning Platforms</CardTitle>
                <CardDescription>Comprehensive courses for structured learning paths</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Technical Skills</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://www.deeplearning.ai" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          DeepLearning.AI
                        </a>
                        <p className="text-sm text-gray-600">
                          Specialized AI and deep learning courses by Andrew Ng and experts.
                        </p>
                      </li>
                      <li>
                        <a href="https://frontendmasters.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Frontend Masters
                        </a>
                        <p className="text-sm text-gray-600">
                          Advanced workshops on JavaScript, React, Vue, and modern frontend development.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.datacamp.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          DataCamp
                        </a>
                        <p className="text-sm text-gray-600">
                          Interactive data science and analytics courses with hands-on exercises.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.educative.io" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Educative
                        </a>
                        <p className="text-sm text-gray-600">
                          Text-based interactive courses for software developers with embedded coding environments.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.codecademy.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Codecademy
                        </a>
                        <p className="text-sm text-gray-600">
                          Interactive programming courses with immediate feedback and projects.
                        </p>
                      </li>
                      <li>
                        <a href="https://teamtreehouse.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Treehouse
                        </a>
                        <p className="text-sm text-gray-600">
                          Project-based courses in web development, mobile development, and design.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Business & Soft Skills</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://www.coursera.org/business" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Coursera for Business
                        </a>
                        <p className="text-sm text-gray-600">
                          Business, management, and leadership courses from top universities.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.udemy.com/courses/business/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Udemy Business
                        </a>
                        <p className="text-sm text-gray-600">
                          Practical courses on communication, leadership, and business skills.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          LinkedIn Learning
                        </a>
                        <p className="text-sm text-gray-600">
                          Professional development courses with certificates that integrate with LinkedIn.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.futurelearn.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          FutureLearn
                        </a>
                        <p className="text-sm text-gray-600">
                          Courses from leading universities and cultural institutions around the world.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.skillshare.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Skillshare
                        </a>
                        <p className="text-sm text-gray-600">
                          Creative and practical skills with project-based learning.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="books">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Essential Reading Materials</CardTitle>
                <CardDescription>Books and publications for in-depth learning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Technical Foundations</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li className="text-sm text-gray-600">
                        "Clean Code" by Robert C. Martin - Principles for writing maintainable code
                      </li>
                      <li className="text-sm text-gray-600">
                        "The Pragmatic Programmer" by Andy Hunt & Dave Thomas - Timeless practical advice
                      </li>
                      <li className="text-sm text-gray-600">
                        "Code Complete" by Steve McConnell - Software construction techniques and practices
                      </li>
                      <li className="text-sm text-gray-600">
                        "Designing Data-Intensive Applications" by Martin Kleppmann - For understanding data systems
                      </li>
                      <li className="text-sm text-gray-600">
                        "Refactoring" by Martin Fowler - Improving the design of existing code
                      </li>
                      <li className="text-sm text-gray-600">
                        "Patterns of Enterprise Application Architecture" by Martin Fowler - Architecture patterns
                      </li>
                      <li className="text-sm text-gray-600">
                        "Programming Pearls" by Jon Bentley - Programming puzzles and lessons
                      </li>
                      <li className="text-sm text-gray-600">
                        "Computer Systems: A Programmer's Perspective" by Bryant & O'Hallaron - Deep dive into systems
                      </li>
                      <li className="text-sm text-gray-600">
                        "Effective Java" by Joshua Bloch - Best practices for Java programming
                      </li>
                      <li className="text-sm text-gray-600">
                        "Python Crash Course" by Eric Matthes - Fast-paced, project-based introduction to Python
                      </li>
                      <li className="text-sm text-gray-600">
                        "JavaScript: The Good Parts" by Douglas Crockford - Focus on best practices
                      </li>
                      <li className="text-sm text-gray-600">
                        "Eloquent JavaScript" by Marijn Haverbeke - Modern JavaScript programming
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Career & Future Technologies</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li className="text-sm text-gray-600">
                        "Deep Work" by Cal Newport - Rules for focused success in a distracted world
                      </li>
                      <li className="text-sm text-gray-600">
                        "The Phoenix Project" by Gene Kim et al. - Novel about IT, DevOps, and business
                      </li>
                      <li className="text-sm text-gray-600">
                        "The Manager's Path" by Camille Fournier - Guide for tech leaders and managers
                      </li>
                      <li className="text-sm text-gray-600">
                        "Cracking the Coding Interview" by Gayle Laakmann McDowell - Interview preparation
                      </li>
                      <li className="text-sm text-gray-600">
                        "The Mythical Man-Month" by Frederick P. Brooks Jr. - Essays on software engineering
                      </li>
                      <li className="text-sm text-gray-600">
                        "Zero to One" by Peter Thiel - Creating innovative companies and products
                      </li>
                      <li className="text-sm text-gray-600">
                        "Thinking in Systems" by Donella H. Meadows - System thinking approach to problems
                      </li>
                      <li className="text-sm text-gray-600">
                        "Accelerate" by Nicole Forsgren et al. - Science of DevOps and high-performing organizations
                      </li>
                      <li className="text-sm text-gray-600">
                        "How to Create a Mind" by Ray Kurzweil - The secret of human thought revealed
                      </li>
                      <li className="text-sm text-gray-600">
                        "AI Superpowers" by Kai-Fu Lee - China, Silicon Valley, and the new world order
                      </li>
                      <li className="text-sm text-gray-600">
                        "Grokking Algorithms" by Aditya Bhargava - Illustrated guide to algorithms
                      </li>
                      <li className="text-sm text-gray-600">
                        "The Missing README" by Chris Riccomini & Dmitriy Ryaboy - A guide for new software engineers
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="communities">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Learning Communities & Networks</CardTitle>
                <CardDescription>Connect with peers and experts to accelerate your learning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Q&A Forums</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://stackoverflow.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Stack Overflow
                        </a>
                        <p className="text-sm text-gray-600">
                          The largest programming Q&A site with millions of answered questions.
                        </p>
                      </li>
                      <li>
                        <a href="https://meta.stackexchange.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Stack Exchange Network
                        </a>
                        <p className="text-sm text-gray-600">
                          Specialized Q&A communities covering many technology domains.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.quora.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Quora
                        </a>
                        <p className="text-sm text-gray-600">
                          Q&A platform with expert answers on wide-ranging topics.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Content & Discussion</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://dev.to" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          DEV Community
                        </a>
                        <p className="text-sm text-gray-600">
                          Inclusive community for sharing ideas and helping each other grow.
                        </p>
                      </li>
                      <li>
                        <a href="https://hashnode.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Hashnode
                        </a>
                        <p className="text-sm text-gray-600">
                          Developer blogging platform with community engagement.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.reddit.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Reddit Tech Communities
                        </a>
                        <p className="text-sm text-gray-600">
                          Subreddits for programming, computer science, and technology careers.
                        </p>
                      </li>
                      <li>
                        <a href="https://news.ycombinator.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Hacker News
                        </a>
                        <p className="text-sm text-gray-600">
                          Technology-focused news aggregator and discussion forum.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Real-time & Networking</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://discord.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Discord Communities
                        </a>
                        <p className="text-sm text-gray-600">
                          Real-time chat communities for languages, frameworks, and tech topics.
                        </p>
                      </li>
                      <li>
                        <a href="https://slack.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Slack Communities
                        </a>
                        <p className="text-sm text-gray-600">
                          Professional communities and workspaces for technology niches.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.meetup.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Meetup
                        </a>
                        <p className="text-sm text-gray-600">
                          Find local tech events, workshops, and communities in your area.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/groups/" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          LinkedIn Groups
                        </a>
                        <p className="text-sm text-gray-600">
                          Professional networking groups focused on specific technologies or industries.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tools">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Learning & Productivity Tools</CardTitle>
                <CardDescription>Tools and applications to enhance your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Note-Taking & Knowledge Management</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://www.notion.so" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Notion
                        </a>
                        <p className="text-sm text-gray-600">
                          All-in-one workspace for notes, tasks, wikis, and databases with AI features.
                        </p>
                      </li>
                      <li>
                        <a href="https://obsidian.md" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Obsidian
                        </a>
                        <p className="text-sm text-gray-600">
                          Knowledge graph note-taking app that creates a network of interconnected notes.
                        </p>
                      </li>
                      <li>
                        <a href="https://roamresearch.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Roam Research
                        </a>
                        <p className="text-sm text-gray-600">
                          Note-taking tool designed for networked thought and building a personal knowledge base.
                        </p>
                      </li>
                      <li>
                        <a href="https://evernote.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Evernote
                        </a>
                        <p className="text-sm text-gray-600">
                          Note-taking app with powerful organization and search capabilities.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.remnote.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          RemNote
                        </a>
                        <p className="text-sm text-gray-600">
                          Combines note-taking with spaced repetition for efficient learning and recall.
                        </p>
                      </li>
                    </ul>
                    
                    <h3 className="font-medium text-lg mt-6 mb-2">Coding & Development</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://code.visualstudio.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Visual Studio Code
                        </a>
                        <p className="text-sm text-gray-600">
                          Powerful, extensible code editor with rich language support and integrations.
                        </p>
                      </li>
                      <li>
                        <a href="https://github.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          GitHub
                        </a>
                        <p className="text-sm text-gray-600">
                          Code hosting, version control, and collaboration platform with Copilot AI support.
                        </p>
                      </li>
                      <li>
                        <a href="https://replit.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Replit
                        </a>
                        <p className="text-sm text-gray-600">
                          Collaborative browser-based IDE with integrated debugging and deployment.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">AI Learning Assistants</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://chat.openai.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          ChatGPT
                        </a>
                        <p className="text-sm text-gray-600">
                          Conversational AI assistant for explanations, tutoring, and code help.
                        </p>
                      </li>
                      <li>
                        <a href="https://gemini.google.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Google Gemini
                        </a>
                        <p className="text-sm text-gray-600">
                          Google's AI assistant with access to real-time information.
                        </p>
                      </li>
                      <li>
                        <a href="https://claude.ai" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Claude
                        </a>
                        <p className="text-sm text-gray-600">
                          Anthropic's AI assistant focused on helpful, harmless, and honest interactions.
                        </p>
                      </li>
                    </ul>
                    
                    <h3 className="font-medium text-lg mt-6 mb-2">Spaced Repetition & Memory</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://apps.ankiweb.net" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Anki
                        </a>
                        <p className="text-sm text-gray-600">
                          Powerful spaced repetition flashcard system for long-term knowledge retention.
                        </p>
                      </li>
                      <li>
                        <a href="https://quizlet.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Quizlet
                        </a>
                        <p className="text-sm text-gray-600">
                          Flexible study tools with flashcards and practice tests.
                        </p>
                      </li>
                    </ul>
                    
                    <h3 className="font-medium text-lg mt-6 mb-2">Project Management & Organization</h3>
                    <ul className="space-y-3 ml-5 list-disc">
                      <li>
                        <a href="https://trello.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Trello
                        </a>
                        <p className="text-sm text-gray-600">
                          Visual board-based project management for organizing learning goals and projects.
                        </p>
                      </li>
                      <li>
                        <a href="https://www.notion.so" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Notion
                        </a>
                        <p className="text-sm text-gray-600">
                          All-in-one workspace that combines notes, tasks, wikis, and databases.
                        </p>
                      </li>
                      <li>
                        <a href="https://todoist.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                          Todoist
                        </a>
                        <p className="text-sm text-gray-600">
                          Task management app for organizing learning activities and deadlines.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
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
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="chatgpt">
                    <AccordionTrigger>
                      <span className="text-blue-600 font-medium">ChatGPT - Comprehensive Learning Support</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-gray-600 mb-2">
                        AI assistant for explanations, tutoring, and answering questions. Effective prompts:
                      </p>
                      <ul className="space-y-2 mt-2 ml-5 list-disc text-sm text-gray-600">
                        <li>"Explain [concept] as if I'm a beginner with no background in this field."</li>
                        <li>"Create a step-by-step learning path for becoming proficient in [skill]."</li>
                        <li>"What are common misconceptions about [topic] that beginners should avoid?"</li>
                        <li>"Generate practice problems for [topic] at [beginner/intermediate/advanced] level."</li>
                        <li>"Compare and contrast [concept A] and [concept B] with examples of when to use each."</li>
                        <li>"I'm trying to learn [topic]. What are the core principles I should focus on first?"</li>
                        <li>"Generate a series of flashcards covering key concepts in [topic]."</li>
                        <li>"What are the prerequisites I should know before learning [topic]?"</li>
                        <li>"Help me debug this code: [paste your code]. Explain what's wrong and how to fix it."</li>
                        <li>"Explain [concept] using different analogies for different learning styles."</li>
                        <li>"What are practical projects I can build to apply my knowledge of [topic]?"</li>
                        <li>"What are the most important papers/books to read on [topic]?"</li>
                        <li>"Create a quiz to test my knowledge of [topic]."</li>
                        <li>"What's the difference between [term1] and [term2] in [field]?"</li>
                        <li>"I've been learning [topic] for [time period]. What should I learn next to advance?"</li>
                      </ul>
                      <div className="mt-3">
                        <a href="https://chat.openai.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">
                          Try ChatGPT →
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="gemini">
                    <AccordionTrigger>
                      <span className="text-blue-600 font-medium">Google Gemini - Real-Time Information</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-gray-600 mb-2">
                        Google's AI assistant with real-time information access. Effective prompts:
                      </p>
                      <ul className="space-y-2 mt-2 ml-5 list-disc text-sm text-gray-600">
                        <li>"Find the most recent research papers on [topic] and summarize their key findings."</li>
                        <li>"What are the latest developments in [field] in the past year?"</li>
                        <li>"Create a comparison chart of the top learning resources for [skill]."</li>
                        <li>"What are current best practices for [technique/process]?"</li>
                        <li>"Find video tutorials teaching [specific skill] and rank them by quality."</li>
                        <li>"What are emerging career opportunities in [field] based on current trends?"</li>
                        <li>"Analyze these GitHub repositories: [links] and compare their approaches to [problem]."</li>
                        <li>"What are the latest tools professionals are using for [task]?"</li>
                        <li>"Create a reading list of the newest books on [topic] with brief summaries."</li>
                        <li>"What companies are currently innovating in [field] and what are they working on?"</li>
                        <li>"Help me understand this recent academic paper: [paste abstract or link]"</li>
                        <li>"What conferences or events are coming up related to [topic]?"</li>
                        <li>"Create a timeline of major developments in [field] over the last 5 years."</li>
                      </ul>
                      <div className="mt-3">
                        <a href="https://gemini.google.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">
                          Try Google Gemini →
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="claude">
                    <AccordionTrigger>
                      <span className="text-blue-600 font-medium">Claude - In-Depth Understanding</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-gray-600 mb-2">
                        Anthropic's AI assistant with strong reasoning capabilities. Effective prompts:
                      </p>
                      <ul className="space-y-2 mt-2 ml-5 list-disc text-sm text-gray-600">
                        <li>"Help me understand [complex topic] by breaking it down into simple components."</li>
                        <li>"Analyze this research paper and explain its findings in simpler terms: [paste paper]"</li>
                        <li>"What are the underlying principles that connect [concept A] and [concept B]?"</li>
                        <li>"Create a mental model to help me understand and remember [complex system]."</li>
                        <li>"I'm confused about [topic]. Can you provide multiple perspectives on it?"</li>
                        <li>"Explain the historical development of [field] and how it evolved to current understanding."</li>
                        <li>"What are the foundational concepts I need to master to understand [advanced topic]?"</li>
                        <li>"Create a concept map showing how different ideas in [field] relate to each other."</li>
                        <li>"What are common cognitive biases that might affect my understanding of [topic]?"</li>
                        <li>"Can you help me understand both sides of the debate about [controversial topic in field]?"</li>
                      </ul>
                      <div className="mt-3">
                        <a href="https://claude.ai" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">
                          Try Claude →
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="perplexity">
                    <AccordionTrigger>
                      <span className="text-blue-600 font-medium">Perplexity - Research Assistant</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-gray-600 mb-2">
                        AI research assistant that provides cited answers. Effective prompts:
                      </p>
                      <ul className="space-y-2 mt-2 ml-5 list-disc text-sm text-gray-600">
                        <li>"Create an annotated bibliography of important resources on [topic]."</li>
                        <li>"What are the competing theories about [topic] and who supports each perspective?"</li>
                        <li>"Find research studies that support or contradict [specific claim]."</li>
                        <li>"What are the leading academic institutions and researchers in [field]?"</li>
                        <li>"Track how thinking on [topic] has evolved over the past decade with citations."</li>
                        <li>"What are the methodological challenges in researching [topic]?"</li>
                        <li>"Find examples of successful implementations of [technique] in industry."</li>
                        <li>"What are open research questions in [field] that haven't been resolved?"</li>
                        <li>"Compile a list of influential papers that changed our understanding of [topic]."</li>
                        <li>"Find learning resources that present different pedagogical approaches to [topic]."</li>
                      </ul>
                      <div className="mt-3">
                        <a href="https://www.perplexity.ai" target="_blank" rel="noopener" className="text-blue-600 hover:underline text-sm">
                          Try Perplexity →
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="notetaking">
                    <AccordionTrigger>
                      <span className="text-blue-600 font-medium">Note-Taking & Knowledge Management</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 ml-5">
                        <li>
                          <a href="https://www.notion.so" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Notion AI
                          </a>
                          <p className="text-sm text-gray-600">
                            AI-enhanced note-taking with features to summarize, improve writing, and generate content. Try these prompts:
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>"Summarize this lecture/article into key points"</li>
                            <li>"Create a study schedule for learning [topic] over [time period]"</li>
                            <li>"Generate a list of questions to test my understanding of [topic]"</li>
                            <li>"Rewrite my notes in a clearer, more structured format"</li>
                            <li>"Create a glossary of key terms from my notes on [topic]"</li>
                            <li>"Convert my bullet points into a concept map outline"</li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://www.obsidian.md" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Obsidian
                          </a>
                          <p className="text-sm text-gray-600">
                            Knowledge graph note-taking that helps connect concepts. Ideal for building a personal learning system.
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Create "Map of Content" notes to organize topics hierarchically</li>
                            <li>Use bidirectional linking to connect related concepts</li>
                            <li>Leverage the graph view to visualize connections between ideas</li>
                            <li>Use spaced repetition plugins to review key information</li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://elicit.org" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Elicit
                          </a>
                          <p className="text-sm text-gray-600">
                            AI research assistant that finds and summarizes academic papers.
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Ask research questions to get relevant papers with key findings</li>
                            <li>Compare methodologies across multiple studies</li>
                            <li>Extract data and conclusions from papers</li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="coding">
                    <AccordionTrigger>
                      <span className="text-blue-600 font-medium">AI Coding Assistants</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 ml-5">
                        <li>
                          <a href="https://github.com/features/copilot" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            GitHub Copilot
                          </a>
                          <p className="text-sm text-gray-600">
                            AI pair programmer that suggests code as you type. Effective approaches:
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Write detailed comments explaining what you want to implement</li>
                            <li>Start writing function signatures with descriptive names</li>
                            <li>Use Copilot to learn new APIs by letting it suggest implementations</li>
                            <li>Ask for explanations of complex code by writing "// explain how this works:"</li>
                            <li>Generate test cases by writing test function skeletons</li>
                            <li>Create documentation by writing "// generate documentation for this function:"</li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://www.replit.com/ai" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Replit Ghostwriter
                          </a>
                          <p className="text-sm text-gray-600">
                            AI coding assistant integrated with Replit's online IDE. Effective prompts:
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>"Create a step-by-step tutorial for implementing [feature/algorithm]"</li>
                            <li>"Explain this code and suggest improvements"</li>
                            <li>"Refactor this code to be more [efficient/readable/maintainable]"</li>
                            <li>"Show me how to implement [feature] with proper error handling"</li>
                            <li>"Generate unit tests for this function"</li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://www.cursor.so" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Cursor
                          </a>
                          <p className="text-sm text-gray-600">
                            AI-native code editor with powerful code explanation and generation features.
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Ask for explanations of complex codebases</li>
                            <li>Generate implementations from natural language descriptions</li>
                            <li>Debug issues with specific error messages</li>
                            <li>Explore unfamiliar code by asking questions about its functionality</li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="study">
                    <AccordionTrigger>
                      <span className="text-blue-600 font-medium">AI-Enhanced Study Tools</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 ml-5">
                        <li>
                          <a href="https://quizlet.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Quizlet
                          </a>
                          <p className="text-sm text-gray-600">
                            Flashcard and study tools with AI-powered learning assistance.
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Generate flashcards from your notes or textbooks</li>
                            <li>Use the explanation feature to understand complex concepts</li>
                            <li>Practice with adaptive quizzes that focus on your weak areas</li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://www.duolingo.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Duolingo
                          </a>
                          <p className="text-sm text-gray-600">
                            AI-powered language learning platform with adaptive exercises.
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Personalized learning paths based on your progress</li>
                            <li>Spaced repetition to optimize vocabulary retention</li>
                            <li>Real-time feedback on pronunciation and grammar</li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://apps.ankiweb.net" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Anki with AI Integration
                          </a>
                          <p className="text-sm text-gray-600">
                            Combine Anki's spaced repetition with AI-generated content.
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Use ChatGPT to generate comprehensive flashcard decks</li>
                            <li>Create question-answer pairs from your learning materials</li>
                            <li>Generate example scenarios to apply theoretical knowledge</li>
                            <li>Use AI to create varied versions of the same question to test deeper understanding</li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="content">
                    <AccordionTrigger>
                      <span className="text-blue-600 font-medium">Content Creation & Learning Projects</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 ml-5">
                        <li>
                          <a href="https://www.canva.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Canva with Magic Write
                          </a>
                          <p className="text-sm text-gray-600">
                            Visual design platform with AI writing and design generation. Try these approaches:
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Create visual summaries of complex topics</li>
                            <li>Generate mind maps to organize information</li>
                            <li>Design infographics to visualize data and concepts</li>
                            <li>Create educational presentations with AI-generated content suggestions</li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://www.synthesia.io" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Synthesia
                          </a>
                          <p className="text-sm text-gray-600">
                            AI video generation platform for creating educational content.
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Create video explanations of complex topics</li>
                            <li>Generate multilingual video content from a single script</li>
                            <li>Create personalized learning video materials</li>
                          </ul>
                        </li>
                        <li>
                          <a href="https://miro.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline font-medium">
                            Miro with AI Features
                          </a>
                          <p className="text-sm text-gray-600">
                            Collaborative whiteboard platform with AI-powered templates and organization.
                          </p>
                          <ul className="space-y-1 mt-1 ml-5 list-disc text-sm text-gray-600">
                            <li>Generate concept maps for visual learning</li>
                            <li>Create project roadmaps with AI assistance</li>
                            <li>Organize and connect ideas with AI-suggested relationships</li>
                            <li>Summarize collaborative brainstorming sessions</li>
                          </ul>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Learning Technique: The AI Tutor Method</CardTitle>
                <CardDescription>A systematic approach to maximize learning with AI assistants</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal ml-5">
                  <li className="text-gray-800">
                    <span className="font-medium">Initial Exploration</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Ask the AI to explain a concept at a high level, then gradually drill down into specific aspects that interest you or seem important.
                    </p>
                    <p className="text-sm text-gray-600 italic mt-1">
                      Example: "Explain machine learning at a high level, then focus on the difference between supervised and unsupervised learning."
                    </p>
                  </li>
                  <li className="text-gray-800">
                    <span className="font-medium">Multiple Perspectives</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Request explanations from different angles or for different learning styles to build a well-rounded understanding.
                    </p>
                    <p className="text-sm text-gray-600 italic mt-1">
                      Example: "Explain how databases work from a theoretical perspective, then from a practical usage perspective."
                    </p>
                  </li>
                  <li className="text-gray-800">
                    <span className="font-medium">Progressive Challenge</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Start with basic questions and gradually increase complexity as your understanding grows.
                    </p>
                    <p className="text-sm text-gray-600 italic mt-1">
                      Example: "First explain how APIs work for beginners, then explain RESTful principles, then explain advanced concepts like GraphQL."
                    </p>
                  </li>
                  <li className="text-gray-800">
                    <span className="font-medium">Active Recall Practice</span>
                    <p className="text-sm text-gray-600 mt-1">
                      After learning a concept, ask the AI to generate questions that test your understanding.
                    </p>
                    <p className="text-sm text-gray-600 italic mt-1">
                      Example: "Generate 5 quiz questions about JavaScript closures that test different aspects of the concept."
                    </p>
                  </li>
                  <li className="text-gray-800">
                    <span className="font-medium">Application & Projects</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Ask for project ideas that apply what you've learned, then get guidance on implementation.
                    </p>
                    <p className="text-sm text-gray-600 italic mt-1">
                      Example: "Suggest 3 beginner projects that apply React hooks concepts, then help me plan the implementation of one."
                    </p>
                  </li>
                  <li className="text-gray-800">
                    <span className="font-medium">Spaced Repetition</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Return to topics after intervals to reinforce learning, asking for different examples each time.
                    </p>
                    <p className="text-sm text-gray-600 italic mt-1">
                      Example: "I learned about Big O notation last week. Can you quiz me on it and provide new examples I haven't seen before?"
                    </p>
                  </li>
                  <li className="text-gray-800">
                    <span className="font-medium">Teaching Back (Feynman Technique)</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Explain the concept back to the AI in your own words and ask it to identify gaps or misconceptions.
                    </p>
                    <p className="text-sm text-gray-600 italic mt-1">
                      Example: "Here's my understanding of how blockchain works: [your explanation]. What did I miss or misunderstand?"
                    </p>
                  </li>
                  <li className="text-gray-800">
                    <span className="font-medium">Connecting Concepts</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Ask how new topics relate to things you already know to build a connected knowledge network.
                    </p>
                    <p className="text-sm text-gray-600 italic mt-1">
                      Example: "I understand object-oriented programming. How does functional programming relate to or differ from it?"
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
