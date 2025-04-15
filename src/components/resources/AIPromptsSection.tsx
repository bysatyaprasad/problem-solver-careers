
import React from 'react';
import PromptCard from './PromptCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle } from 'lucide-react';
import { aiPromptCategories } from '@/data/resources/aiPromptsData';

const AIPromptsSection: React.FC = () => {
  return (
    <div className="mt-16 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Master AI Tools for Accelerated Learning</h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          Harness AI assistants to dramatically enhance your learning process by using these expert-crafted prompts. Copy any prompt and adapt it to your specific subject or needs.
        </p>
      </div>
      
      <Tabs defaultValue={aiPromptCategories[0].title}>
        <div className="mb-8">
          <TabsList className="h-auto flex flex-wrap justify-center gap-2">
            {aiPromptCategories.map((category) => (
              <TabsTrigger 
                key={category.title}
                value={category.title}
                className="flex items-center gap-2 px-4 py-2"
              >
                {category.icon}
                <span className="hidden md:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {aiPromptCategories.map((category) => (
          <TabsContent key={category.title} value={category.title}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                {category.icon}
                {category.title}
              </h3>
              <p className="text-gray-600 mt-1">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.prompts.map((item, index) => (
                <PromptCard 
                  key={index} 
                  prompt={item.prompt} 
                  explanation={item.explanation}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h3 className="font-semibold text-xl text-blue-800 mb-3">Advanced AI Learning Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-blue-700"><strong>Be specific:</strong> Include your background level and learning goals in your prompts for more tailored responses.</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-blue-700"><strong>Use iterative prompting:</strong> Follow up initial responses with more specific questions to dig deeper into a topic.</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-blue-700"><strong>Request different perspectives:</strong> Ask the AI to explain concepts from multiple angles to enhance understanding.</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-blue-700"><strong>Verify information:</strong> Cross-check important facts from AI responses with reliable sources.</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-blue-700"><strong>Create learning dialogues:</strong> Engage in back-and-forth conversations about a topic to build deeper understanding.</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <p className="text-blue-700"><strong>Prompt for active recall:</strong> Ask the AI to quiz you after providing information to strengthen retention.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPromptsSection;
