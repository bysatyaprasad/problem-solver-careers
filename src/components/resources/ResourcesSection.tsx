
import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { resources } from '@/data/resources/resourcesData';

const ResourcesSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  
  const filteredResources = selectedTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === selectedTab);
  
  return (
    <div className="mb-16">
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
  );
};

export default ResourcesSection;
