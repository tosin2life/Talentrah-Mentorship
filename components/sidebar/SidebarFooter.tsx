'use client';

import { User } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function SidebarFooter() {
  // In a real application, this would come from authentication state
  const user = {
    name: 'Mercy Benjamin',
    email: 'mercybenjamin2@gmail.com',
    avatar: null, // Would be an image URL in a real app
  };

  return (
    <div className="px-3 py-4 border-t border-gray-200">
      <div className="flex items-center gap-3 p-2 rounded-md transition-colors hover:bg-gray-200 cursor-pointer">
        <div className="relative flex-shrink-0">
          {user.avatar ? (
            <Image
              src={user.avatar}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
              <User className="h-5 w-5" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-gray-900 truncate">{user.name}</h4>
          <p className="text-xs text-gray-500 truncate">{user.email}</p>
        </div>
        <div className="text-gray-400">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}