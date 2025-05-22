"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SidebarNav, bottomNavItems, NavItem } from "./SidebarNav";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarCredits } from "./SidebarCredits";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle clicks outside sidebar on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 768 &&
        isOpen
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop for mobile */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onClose}
        />
      )} */}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-[280px] bg-gray-50 flex flex-col transition-transform duration-300 ease-in-out shadow-md md:shadow-none md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo section */}
        <div className="flex items-center justify-between px-3 py-4">
          <Image
            src="/icons/Talentrah 2.png"
            alt="Logo"
            width={116}
            height={58}
          />
          <div className="p-2 rounded-full bg-white drop-shadow-[0_4px_15px_0_rgba(41,45,50,0.05)]">
            <Image src="/icons/menu.svg" alt="Menu" width={16} height={16} />
          </div>
        </div>

        {/* Navigation section */}
        <div className="flex-1 flex flex-col ">
          <SidebarNav />
        </div>

        {/* Credits section */}

        <div className="mt-[300px] bg-white-default">
          <nav className="space-y-1.5 px-3 pt-4">
            {bottomNavItems.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                isActive={pathname === item.href}
              />
            ))}
          </nav>
          <SidebarCredits />
          <SidebarFooter />
        </div>
      </aside>
    </>
  );
}
