import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell, Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 z-30 ">
      <div className="flex items-center justify-end px-4 sm:px-6 lg:px-8 h-full">
        {/* <Button className="text-white rounded-xl px-6 py-2 font-semibold shadow-none">
          + Create job loop
        </Button> */}
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
                  width={20}
                  height={20}
                />
                <span className="hidden sm:inline-block">English</span>
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
