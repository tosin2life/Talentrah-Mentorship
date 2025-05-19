"use client";

import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BriefcaseIcon from "@/public/icons/briefcase.svg";
import SearchIcon from "@/public/icons/search-normal.svg";
import ResumeIcon from "@/public/icons/resume.svg";
import SettingsIcon from "@/public/icons/setting-2.svg";
import Briefcase from "../Icons/Briefcase";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactElement;
  isPrimary?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "Jobs",
    href: "/jobs",
    icon: <SearchIcon width={20} height={20} alt="Search" />,

    isPrimary: true,
  },
  {
    title: "Job tracker",
    href: "/job-tracker",
    icon: <Briefcase />,
    // icon: <BriefcaseIcon width={20} height={20} alt="Briefcase" />,
  },
  {
    title: "Resume builder",
    href: "/resume-builder",
    icon: <ResumeIcon width={20} height={20} alt="Resume" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <SettingsIcon width={20} height={20} alt="Settings" />,
  },
];

export const bottomNavItems: NavItem[] = [
  {
    title: "Mentorship",
    href: "/mentorship",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    title: "Feedback",
    href: "/feedback",
    icon: <MessageSquare className="h-5 w-5" />,
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="px-3 py-4">
      <nav className="space-y-1.5">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>

      {/* bottomNavItems will be rendered in sidebar.tsx after SidebarCredits */}
    </div>
  );
}

function NavItem({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2.5 text-xs font-medium transition-all duration-200",
        isActive
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
      )}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}

export { NavItem };
