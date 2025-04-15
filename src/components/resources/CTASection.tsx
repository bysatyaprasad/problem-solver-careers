
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
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
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
