"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile menu button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}

      {/* Sidebar: remove fixed, use normal flow */}
      <div className="w-[280px]">
        <Sidebar
          isOpen={isSidebarOpen || !isMobile}
          onClose={() => isMobile && setIsSidebarOpen(false)}
        />
      </div>

      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
