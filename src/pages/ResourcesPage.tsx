
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ResourcesSection from '@/components/resources/ResourcesSection';
import AIPromptsSection from '@/components/resources/AIPromptsSection';
import CTASection from '@/components/resources/CTASection';
import Footer from '@/components/resources/Footer';

const ResourcesPage: React.FC = () => {
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
        <ResourcesSection />
        <AIPromptsSection />
        <CTASection />
      </div>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
