
import React from 'react';
import Navbar from '@/components/Navbar';
import CareerDetail from '@/components/CareerDetail';

const CareerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CareerDetail />
      
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
                <li><a href="/" className="text-gray-400 hover:text-white text-sm">Home</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
                <li><a href="/resources" className="text-gray-400 hover:text-white text-sm">Resources</a></li>
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

export default CareerDetails;
