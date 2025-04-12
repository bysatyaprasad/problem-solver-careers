
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Zap, Brain, Globe, Briefcase, Palette, Microscope } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import CareerCard from '@/components/CareerCard';
import careerData from '@/data/careerData';

// Define career categories
const careerCategories = {
  'all': 'All Careers',
  'tech': 'Technology & Digital',
  'creative': 'Creative & Design',
  'science': 'Science & Research',
  'business': 'Business & Entrepreneurship',
  'sustainability': 'Sustainability & Impact',
  'healthcare': 'Healthcare & Wellness'
};

// Function to categorize careers
const categorizeCareer = (career) => {
  const title = career.title.toLowerCase();
  const skills = career.requiredSkills.map(skill => skill.name.toLowerCase()).join(' ');
  const description = career.description.toLowerCase();
  
  // Enhanced category assignment logic
  if (title.includes('sustainability') || title.includes('climate') || 
      description.includes('environment') || description.includes('sustainable')) {
    return 'sustainability';
  } else if (title.includes('design') || title.includes('art') || title.includes('media') || 
           title.includes('storyteller') || skills.includes('design') || skills.includes('creative')) {
    return 'creative';
  } else if (title.includes('scientist') || title.includes('research') || title.includes('bioinformatics') ||
           skills.includes('research') || description.includes('laboratory')) {
    return 'science';
  } else if (title.includes('entrepreneur') || title.includes('manager') || 
           title.includes('business') || title.includes('strategist') || skills.includes('leadership')) {
    return 'business';
  } else if (title.includes('health') || title.includes('medical') || title.includes('care') ||
           description.includes('health') || description.includes('medical')) {
    return 'healthcare';
  } else if (title.includes('tech') || title.includes('developer') || title.includes('engineer') || 
           title.includes('digital') || title.includes('data') || title.includes('cyber') ||
           title.includes('interface') || title.includes('robotics') ||
           skills.includes('programming') || skills.includes('software')) {
    return 'tech';
  }
  
  return 'all'; // Default category
};

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCareers, setFilteredCareers] = useState(careerData);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      filterByCategory(activeCategory);
    } else {
      const searched = careerData.filter(
        career => 
          career.title.toLowerCase().includes(term.toLowerCase()) ||
          career.description.toLowerCase().includes(term.toLowerCase()) ||
          career.requiredSkills.some(skill => 
            skill.name.toLowerCase().includes(term.toLowerCase())
          )
      );
      setFilteredCareers(searched);
    }
  };
  
  const filterByCategory = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredCareers(careerData);
    } else {
      const filtered = careerData.filter(career => categorizeCareer(career) === category);
      setFilteredCareers(filtered);
    }
    
    // Reset search when changing categories
    if (searchTerm) {
      setSearchTerm('');
    }
  };
  
  // Group careers for display by demand level
  const highDemandCareers = filteredCareers.filter(career => career.demandLevel === 'High');
  const mediumDemandCareers = filteredCareers.filter(career => career.demandLevel === 'Medium');
  const otherCareers = filteredCareers.filter(career => career.demandLevel === 'Low');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-brand-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Explore Multidisciplinary Career Paths
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              Discover careers that blend multiple disciplines and integrate emerging technologies to solve valuable problems
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="-mt-16 mb-8 shadow-lg z-10 relative">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for careers, skills, or interests..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              
              <Tabs defaultValue="all" value={activeCategory} onValueChange={filterByCategory} className="w-full">
                <TabsList className="w-full overflow-x-auto flex justify-start pb-1" style={{ scrollbarWidth: 'none' }}>
                  {Object.entries(careerCategories).map(([key, label]) => (
                    <TabsTrigger key={key} value={key} className="flex items-center whitespace-nowrap">
                      {key === 'all' && <Briefcase className="mr-1 h-4 w-4" />}
                      {key === 'tech' && <Globe className="mr-1 h-4 w-4" />}
                      {key === 'creative' && <Palette className="mr-1 h-4 w-4" />}
                      {key === 'science' && <Microscope className="mr-1 h-4 w-4" />}
                      {key === 'business' && <Briefcase className="mr-1 h-4 w-4" />}
                      {key === 'sustainability' && <Globe className="mr-1 h-4 w-4" />}
                      {key === 'healthcare' && <Zap className="mr-1 h-4 w-4" />}
                      {label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>
        
        {filteredCareers.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">No careers found</h2>
            <p className="mt-2 text-gray-600">Try a different search term or category</p>
          </div>
        ) : (
          <div>
            {highDemandCareers.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-6 w-6 text-brand-purple" />
                  <h2 className="text-xl font-bold text-gray-900">High-Demand Careers</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  These multidisciplinary careers are expected to see significant growth in the coming decade, offering excellent opportunities for those with the right skills.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {highDemandCareers.map(career => (
                    <CareerCard key={career.id} career={career} />
                  ))}
                </div>
              </div>
            )}
            
            {mediumDemandCareers.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-6 w-6 text-brand-blue" />
                  <h2 className="text-xl font-bold text-gray-900">Growing Career Opportunities</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  These careers combine multiple disciplines and are poised for steady growth as industries evolve and adopt new technologies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mediumDemandCareers.map(career => (
                    <CareerCard key={career.id} career={career} />
                  ))}
                </div>
              </div>
            )}
            
            {otherCareers.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-6 w-6 text-brand-blue" />
                  <h2 className="text-xl font-bold text-gray-900">Additional Career Paths</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Explore these established career paths that offer solid income potential and meaningful work across various industries.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherCareers.map(career => (
                    <CareerCard key={career.id} career={career} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Preparing for Multidisciplinary Careers</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              The most valuable careers of the next decade will blend multiple disciplines with technological fluency.
              Focus on building adaptable skills and a growth mindset to thrive in rapidly evolving fields.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Brain className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-medium text-lg mb-2">Multidisciplinary Thinking</h3>
                <p className="text-sm text-gray-700">
                  Combine knowledge from different fields to solve complex problems. The most innovative solutions often emerge at the intersection of disciplines.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <Globe className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-medium text-lg mb-2">Technological Fluency</h3>
                <p className="text-sm text-gray-700">
                  Develop comfort with emerging technologies. You don't need to master everything, but understanding how AI, automation, and digital tools work is essential.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <Zap className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-medium text-lg mb-2">Adaptability</h3>
                <p className="text-sm text-gray-700">
                  Build the ability to learn continuously and pivot as industries evolve. The specific skills needed may change, but adaptability remains constant.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/resources">
                <Button>View Learning Resources</Button>
              </Link>
            </div>
          </div>
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

export default Careers;
