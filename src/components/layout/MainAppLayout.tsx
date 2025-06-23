import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Defines the main application layout structure for the BookMyShow Activities page.
 * It uses a CSS Grid to create a persistent header and a left sidebar, with a
 * main content area for page-specific components.
 *
 * Layout Structure (HLSB - Header, Left Sidebar, Body):
 * - Row 1: Header (spans both columns)
 * - Row 2, Col 1: Sidebar
 * - Row 2, Col 2: Main Content (children)
 *
 * The grid is defined by `grid-rows-[auto_1fr]` and `grid-cols-[auto_1fr]`,
 * ensuring the header and sidebar take only the space they need, while the
 * main content area fills the rest of the viewport.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] grid-cols-[auto_1fr] bg-background text-foreground">
      <Header className="col-span-2" />
      <Sidebar />
      <main className={cn("overflow-y-auto", className)}>
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
