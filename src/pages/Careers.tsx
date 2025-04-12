
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import CareerCard from '@/components/CareerCard';
import careerData from '@/data/careerData';

const Careers = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredCareers, setFilteredCareers] = React.useState(careerData);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredCareers(careerData);
    } else {
      const filtered = careerData.filter(
        career => 
          career.title.toLowerCase().includes(term.toLowerCase()) ||
          career.description.toLowerCase().includes(term.toLowerCase()) ||
          career.requiredSkills.some(skill => 
            skill.name.toLowerCase().includes(term.toLowerCase())
          )
      );
      setFilteredCareers(filtered);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-brand-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Explore High-Income Career Paths
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-blue-100">
              Discover careers that solve valuable problems and follow detailed roadmaps to get there
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="-mt-16 mb-8 shadow-lg z-10 relative">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for careers or skills..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filter Options
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {filteredCareers.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900">No careers found</h2>
            <p className="mt-2 text-gray-600">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map(career => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Looking for Something Specific?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're constantly adding new career paths and roadmaps. If you don't see what you're looking for,
              check back soon or explore our resources page for additional guidance.
            </p>
            <div className="mt-8">
              <Link to="/resources">
                <Button>View Resources</Button>
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
