
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CareerPath } from '@/data/careerData';

interface CareerCardProps {
  career: CareerPath;
}

const formatSalary = (amount: number): string => {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  } else {
    return `₹${(amount / 1000).toFixed(0)}K`;
  }
};

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const getDemandColor = (level: 'High' | 'Medium' | 'Low') => {
    switch (level) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full card-hover">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{career.title}</CardTitle>
          <Badge className={getDemandColor(career.demandLevel)} variant="outline">
            {career.demandLevel} Demand <TrendingUp className="ml-1 h-3 w-3" />
          </Badge>
        </div>
        <CardDescription className="mt-2 text-sm text-gray-500">
          {career.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Salary Range</h4>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Entry: {formatSalary(career.salaryRange.entry)}</span>
              <span className="text-gray-700 font-medium">Mid: {formatSalary(career.salaryRange.mid)}</span>
              <span className="text-brand-purple font-semibold">Senior: {formatSalary(career.salaryRange.senior)}</span>
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
