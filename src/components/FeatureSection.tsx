
import React from 'react';
import { TrendingUp, BookOpen, Compass, DollarSign } from 'lucide-react';

const features = [
  {
    name: 'High-Income Skills',
    description: 'Discover skills that are in high demand and command top salaries in today\'s market.',
    icon: DollarSign,
    color: 'bg-brand-orange/10 text-brand-orange',
  },
  {
    name: 'Problem-Solving Focus',
    description: 'Learn to identify and solve valuable problems that companies will pay premium salaries for.',
    icon: TrendingUp,
    color: 'bg-brand-purple/10 text-brand-purple',
  },
  {
    name: 'Step-by-Step Roadmaps',
    description: 'Follow clear, actionable pathways from beginner to professional in each career track.',
    icon: Compass,
    color: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    name: 'Curated Resources',
    description: 'Access quality learning materials and tools to help you build your skills efficiently.',
    icon: BookOpen,
    color: 'bg-brand-lightBlue/10 text-brand-lightBlue',
  },
];

const FeatureSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand-purple font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Path to a Successful Career
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Build skills that solve high-value problems and follow proven roadmaps to reach your career goals.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root h-full rounded-lg border border-gray-100 px-6 pb-8 shadow-sm card-hover">
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center p-3 rounded-md shadow-lg ${feature.color}`}>
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-3 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
