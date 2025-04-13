
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, ChevronUp, ArrowLeft, ArrowUpDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CareerPath } from '@/data/careerData';

interface CareerCardProps {
  career: CareerPath;
}

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const getDemandColor = (level: 'High' | 'Medium' | 'Low') => {
    switch (level) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getTrendIcon = (trend: 'Rising' | 'Stable' | 'Variable') => {
    switch (trend) {
      case 'Rising': return <ChevronUp className="ml-1 h-3 w-3" />;
      case 'Stable': return <ArrowLeft className="ml-1 h-3 w-3" />;
      case 'Variable': return <ArrowUpDown className="ml-1 h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <Card className="h-full card-hover">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{career.title}</CardTitle>
          <Badge className={getDemandColor(career.demandLevel)} variant="outline">
            {career.demandLevel} Demand {getTrendIcon(career.demandLevel === 'High' ? 'Rising' : career.demandLevel === 'Medium' ? 'Stable' : 'Variable')}
          </Badge>
        </div>
        <CardDescription className="mt-2 text-sm text-gray-500">
          {career.description.length > 180 
            ? `${career.description.substring(0, 180)}...` 
            : career.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Salary Prospects</h4>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Trend:</span>
              <span className="text-brand-purple font-medium flex items-center">
                {career.salaryProspect.trend}
                {getTrendIcon(career.salaryProspect.trend)}
              </span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-gray-600 text-sm">Senior Level:</span>
              <span className="text-brand-purple font-semibold">{career.salaryProspect.seniorLevelRange}</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Key Skills</h4>
            <div className="flex flex-wrap gap-2">
              {career.requiredSkills.slice(0, 3).map(skill => (
                <Badge key={skill.name} variant="secondary" className="text-xs">
                  {skill.name}
                </Badge>
              ))}
              {career.requiredSkills.length > 3 && (
                <Badge variant="outline" className="text-xs text-gray-500">
                  +{career.requiredSkills.length - 3} more
                </Badge>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Problems You'll Solve</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              {career.problemsSolved.slice(0, 2).map((problem, index) => (
                <li key={index} className="truncate">{problem}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/careers/${career.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Career Path
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
