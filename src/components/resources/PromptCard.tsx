
import React, { useState } from 'react';
import { CheckCircle, Clipboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PromptCardProps {
  prompt: string;
  explanation: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, explanation }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 border-b border-gray-100">
        <p className="font-medium text-gray-800 mb-1">{prompt}</p>
        <p className="text-sm text-gray-600">{explanation}</p>
      </div>
      <div className="bg-gray-50 px-4 py-3 flex justify-end">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={copyToClipboard} 
          className="flex items-center text-xs gap-1"
        >
          {copied ? (
            <>
              <CheckCircle className="h-3.5 w-3.5 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Clipboard className="h-3.5 w-3.5 mr-1" />
              Copy Prompt
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default PromptCard;
