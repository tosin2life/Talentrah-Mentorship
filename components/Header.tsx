import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 z-30 w-full">
      {/* Mobile header: only this row, no aside/sidebar */}
      <div className="flex items-center justify-between px-4 h-full md:hidden w-full">
        {/* Menu button (left) */}
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow border border-gray-100 hover:bg-gray-50 transition"
          onClick={onMenuClick}
        >
          <Image src="/icons/menu.svg" alt="Menu" width={16} height={16} />
        </button>
        {/* Right side: notification and language */}
        <div className="flex items-center gap-2">
          {/* Notification bell */}
          <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-white shadow border border-gray-100 hover:bg-gray-50 transition">
            <Image
              src="/icons/notification.svg"
              alt="Notifications"
              width={14}
              height={14}
            />
          </button>
          {/* Language selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 bg-white shadow border border-gray-100 rounded-full px-3 py-2 hover:bg-gray-50 transition">
                <Image
                  src="/icons/global.svg"
                  alt="Global"
                  width={14}
                  height={14}
                />
                <span className="text-gray-700 font-medium text-xs">
                  English
                </span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Desktop header (hidden on mobile) */}
      <div className="hidden md:flex items-center justify-end px-4 md:px-6 lg:px-8 h-full w-full">
        <Button variant="default" className="rounded-xl px-6 py-2">
          + Create job loop
        </Button>
        <div className="flex items-center gap-1 ml-14">
          <Button variant="ghost" size="icon" className="relative">
            <Image
              src="/icons/notification.svg"
              alt="Notifications"
              width={20}
              height={20}
            />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 rounded-xl"
              >
                <Image
                  src="/icons/global.svg"
                  alt="Global"
                  width={14}
                  height={14}
                />
                <span className="hidden md:inline-block text-[12px]">
                  English
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button
          variant="outline"
          className="ml-4 text-teal-500 border-teal-500 hover:bg-teal-50 rounded-xl px-5 py-2 font-semibold"
        >
          Upgrade to premium
        </Button>
      </div>
    </header>
  );
}
