"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import { Header } from "@/components/Header";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsSidebarOpen(false);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Lock background scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobile, isSidebarOpen]);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar: always at the left, full height, no top padding */}
      {!isMobile && (
        <div className="w-[280px] h-screen">
          <Sidebar isOpen={true} onClose={() => {}} />
        </div>
      )}
      {/* Sidebar overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-50 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          {/* Sidebar overlay, scrollable */}
          <div className="fixed top-0 left-0 h-full w-[280px] bg-white-default shadow-lg z-50 animate-slide-in overflow-y-auto md:hidden">
            <Sidebar isOpen={true} onClose={() => setIsSidebarOpen(false)} />
          </div>
        </>
      )}
      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header: in normal flow, not sticky or fixed */}
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
