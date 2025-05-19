'use client';

import { CloudLightning as Lightning } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function SidebarCredits() {
  // In a real application, this would come from user data
  const credits = {
    used: 8,
    total: 10
  };
  
  // Calculate percentage for progress bar
  const percentage = (credits.used / credits.total) * 100;

  return (
    <div className="px-3 py-3">
      <div className="rounded-2xl bg-blue-50 p-4">
        <div className="flex justify-center mb-2">
          <div className="bg-blue-100 rounded-full p-2">
            <Lightning className="h-5 w-5 text-blue-500" />
          </div>
        </div>
        
        <p className="text-xs text-center text-gray-700 mb-3">
          You have {credits.total - credits.used} free credits! Use them to unlock 
          premium features and maximize your job search. Once you run out, upgrade to keep 
          going!
        </p>
        
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1 text-gray-600">
              <svg 
                className="h-4 w-4 text-blue-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Usage Credits
            </span>
            <span className="font-medium text-blue-600">{credits.used}/{credits.total}</span>
          </div>
          <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full" 
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        
        <Button 
          variant="default" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          Upgrade now
        </Button>
      </div>
    </div>
  );
}