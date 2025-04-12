
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Share2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Focus on Problem-Solving?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              The highest paying careers are built on solving valuable problems. When you can identify
              and solve problems that impact businesses and people, you become incredibly valuable in the marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 card-hover">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Identify Valuable Problems</h3>
              <p className="text-gray-600 mb-4">
                Learn to spot challenges that businesses and people face that have significant value when solved.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 card-hover">
              <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-5">
                <BookOpen className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Necessary Skills</h3>
              <p className="text-gray-600 mb-4">
                Follow our roadmaps to develop the exact skills needed to solve these valuable problems effectively.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 card-hover">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-5">
                <Share2 className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Create a Portfolio</h3>
              <p className="text-gray-600 mb-4">
                Showcase your problem-solving abilities through real projects that demonstrate your value to employers.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/careers">
              <Button className="bg-brand-purple hover:bg-brand-purple/90">
                Explore Career Paths
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Built for High School Students</h2>
              <p className="mt-4 text-lg text-gray-600">
                We designed this platform specifically for high school students who want to start building
                valuable skills early, regardless of their current knowledge level.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-brand-purple text-white">
                      <span className="text-sm font-medium">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">No Prior Experience Needed</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Our roadmaps start from the very basics, assuming no prior technical knowledge.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-brand-purple text-white">
                      <span className="text-sm font-medium">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Curated Free Resources</h3>
                    <p className="mt-2 text-base text-gray-600">
                      We feature many free learning resources to make skill development accessible to everyone.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-brand-purple text-white">
                      <span className="text-sm font-medium">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Focus on Practical Skills</h3>
                    <p className="mt-2 text-base text-gray-600">
                      Our approach emphasizes practical skills that can be applied to real-world problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <img 
                className="rounded-lg shadow-lg" 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Students learning together" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-brand-purple py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl">
            Explore career paths, study roadmaps, and begin building skills that will set you apart in today's job market.
          </p>
          <Link to="/careers">
            <Button className="bg-white text-brand-purple hover:bg-gray-100">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8">
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

export default Index;
