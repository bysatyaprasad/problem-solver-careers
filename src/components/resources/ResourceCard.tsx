
import React from 'react';
import { 
  Youtube, 
  BookOpen, 
  Globe, 
  Code, 
  MessageSquare 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export type Resource = {
  title: string;
  description: string;
  url: string;
  type: 'video' | 'course' | 'website' | 'tool' | 'community';
  tags: string[];
  free: boolean;
};

export const getIconForResourceType = (type: Resource['type']) => {
  switch (type) {
    case 'video':
      return <Youtube className="h-5 w-5" />;
    case 'course':
      return <BookOpen className="h-5 w-5" />;
    case 'website':
      return <Globe className="h-5 w-5" />;
    case 'tool':
      return <Code className="h-5 w-5" />;
    case 'community':
      return <MessageSquare className="h-5 w-5" />;
    default:
      return <BookOpen className="h-5 w-5" />;
  }
};

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const icon = getIconForResourceType(resource.type);
  
  return (
    <Card className="h-full card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-md ${
            resource.type === 'video' ? 'bg-red-100 text-red-600' :
            resource.type === 'course' ? 'bg-blue-100 text-blue-600' :
            resource.type === 'website' ? 'bg-green-100 text-green-600' :
            resource.type === 'tool' ? 'bg-purple-100 text-purple-600' :
            'bg-yellow-100 text-yellow-600'
          }`}>
            {icon}
          </div>
          <CardTitle className="text-lg">{resource.title}</CardTitle>
        </div>
        {resource.free ? (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 w-fit ml-8">Free</span>
        ) : (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 w-fit ml-8">Paid</span>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 min-h-[80px]">
          {resource.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1 mt-3">
          {resource.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant="outline" className="w-full">
            Visit Resource
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
