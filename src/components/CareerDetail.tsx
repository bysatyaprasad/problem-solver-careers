import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, BookOpen, Clock, CheckCircle, ExternalLink, ArrowUpDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { careerData, CareerPath, SkillLevel, ResourceLink, SalaryProspect } from '@/data/careerData';

const SkillBadge = ({ level }: { level: SkillLevel }) => {
  const colors = {
    'Beginner': 'bg-blue-100 text-blue-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Advanced': 'bg-red-100 text-red-800'
  };
  
  return (
    <Badge className={colors[level]} variant="outline">{level}</Badge>
  );
};

const SalaryIndicator = ({ salaryProspect }: { salaryProspect: SalaryProspect }) => {
  const trendColors = {
    'Rising': 'text-green-600',
    'Stable': 'text-blue-600',
    'Variable': 'text-purple-600'
  };
  
  const trendIcons = {
    'Rising': <ChevronUp className="h-4 w-4 inline-block" />,
    'Stable': <ArrowLeft className="h-4 w-4 inline-block" />,
    'Variable': <ArrowUpDown className="h-4 w-4 inline-block" />
  };
  
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-gray-900">Salary Prospects</h3>
        <span className={`flex items-center font-medium ${trendColors[salaryProspect.trend]}`}>
          {trendIcons[salaryProspect.trend]} {salaryProspect.trend}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Entry Level:</span>
          <span className="font-medium">{salaryProspect.entryLevelRange}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Mid Level:</span>
          <span className="font-medium">{salaryProspect.midLevelRange}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Senior Level:</span>
          <span className="font-medium text-brand-purple">{salaryProspect.seniorLevelRange}</span>
        </div>
      </div>
      
      {salaryProspect.notes && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-600 italic">{salaryProspect.notes}</p>
        </div>
      )}
    </div>
  );
};

const ResourceCard = ({ resource }: { resource: ResourceLink }) => {
  const typeIcons = {
    'Course': BookOpen,
    'Book': BookOpen,
    'YouTube': ExternalLink,
    'Website': ExternalLink,
    'Tool': ExternalLink
  };
  
  const Icon = typeIcons[resource.type];
  
  return (
    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="mb-3 card-hover">
        <CardHeader className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-2">
              <Icon className="h-5 w-5 text-brand-purple mt-0.5" />
              <div>
                <CardTitle className="text-base">{resource.title}</CardTitle>
                <CardDescription className="text-xs mt-1">
                  {resource.type} • {resource.free ? 'Free' : 'Paid'}
                </CardDescription>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-gray-400" />
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-gray-600">{resource.description}</p>
        </CardContent>
      </Card>
    </a>
  );
};

const CareerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const career = careerData.find(c => c.id === id);
  
  if (!career) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Career not found</h2>
          <p className="mt-4 text-lg text-gray-500">
            The career path you're looking for doesn't exist.
          </p>
          <div className="mt-6">
            <Link to="/careers">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Careers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/careers">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{career.title}</h1>
              <p className="mt-2 text-lg text-gray-600">{career.description}</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Badge className="text-sm" variant="secondary">
                <TrendingUp className="mr-1 h-4 w-4" /> 
                {career.demandLevel} Demand
              </Badge>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <Tabs defaultValue="roadmap">
            <TabsList className="mb-4">
              <TabsTrigger value="roadmap">Career Roadmap</TabsTrigger>
              <TabsTrigger value="problems">Problems You'll Solve</TabsTrigger>
              <TabsTrigger value="outlook">Career Outlook</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roadmap">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Path to Becoming a {career.title}</h2>
                <p className="text-gray-600">Follow this step-by-step roadmap to develop the skills needed for this career.</p>
              </div>
              
              <div className="space-y-8">
                {career.roadmap.map((step, index) => (
                  <div key={index} className="roadmap-step">
                    <div className="roadmap-step-marker">{index + 1}</div>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                            <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                          </div>
                          <div className="flex items-center whitespace-nowrap">
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-600">{step.timeframe}</span>
                          </div>
                        </div>
                        
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Skills to Develop</h4>
                            <ul className="space-y-2">
                              {step.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                  <span className="text-sm text-gray-600">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Milestones to Achieve</h4>
                            <ul className="space-y-2">
                              {step.milestones.map((milestone, milestoneIndex) => (
                                <li key={milestoneIndex} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-brand-purple mr-2 shrink-0" />
                                  <span className="text-sm text-gray-600">{milestone}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 bg-gray-50 px-4 py-4 sm:px-6">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="resources">
                            <AccordionTrigger className="text-sm font-medium text-brand-purple">
                              Learning Resources ({step.resources.length})
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pt-4 grid grid-cols-1 gap-4">
                                {step.resources.map((resource, resourceIndex) => (
                                  <ResourceCard key={resourceIndex} resource={resource} />
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="problems">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">High-Value Problems You'll Solve</h2>
                <p className="text-gray-600">As a {career.title}, you'll be equipped to tackle these valuable challenges that organizations need solved.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {career.problemsSolved.map((problem, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Problem {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{problem}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="outlook">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Outlook</h2>
                <p className="text-gray-600">Future prospects and industry trends for {career.title}s.</p>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-700 whitespace-pre-line">
                    {career.careerOutlook}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <SalaryIndicator salaryProspect={career.salaryProspect} />
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Required Skills</CardTitle>
              <CardDescription>Key competencies for success as a {career.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {career.requiredSkills.map(skill => (
                  <div key={skill.name} className="pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-gray-900">{skill.name}</h4>
                      <SkillBadge level={skill.level} />
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <h3 className="font-medium text-lg mb-4">Learning Strategy Tips</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-1">Start with fundamentals</h4>
                <p className="text-sm text-blue-700">
                  Begin with basic skills even if they seem simple. A strong foundation makes advanced concepts easier to learn.
                </p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-1">Build real projects</h4>
                <p className="text-sm text-green-700">
                  Apply what you learn by creating projects that solve actual problems. This builds your portfolio and deepens understanding.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                <h4 className="font-medium text-purple-800 mb-1">Connect with mentors</h4>
                <p className="text-sm text-purple-700">
                  Find professionals in the field through LinkedIn, industry forums, or mentorship programs for guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
