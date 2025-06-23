import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import HeaderSearch from '../Header/HeaderSearch';
import TopNav from '../Header/TopNav';

// A simple, text-based logo component for BookMyShow
const BookMyShowLogo = () => (
  <a href="/" aria-label="BookMyShow Home">
    <span className="text-3xl font-bold text-gray-800 tracking-tighter">
      book<span className="font-light">my</span>show
    </span>
  </a>
);

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("bg-card shadow-sm z-10", className)}>
      {/* Main Header Section */}
      <div className="flex items-center justify-between px-6 h-16 border-b border-border">
        <div className="flex items-center gap-6">
          <BookMyShowLogo />
          <HeaderSearch className="hidden lg:block" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex items-center gap-1 text-sm text-foreground">
            Chennai
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm h-8 px-4 rounded-md">
            Sign In
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Sub Navigation Section */}
      <div className="flex items-center justify-between px-6 h-12 bg-background">
          <TopNav activeLink="Activities" />
          <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">ListYourShow</a>
              <a href="#" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Corporates</a>
              <a href="#" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Offers</a>
              <a href="#" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Gift Cards</a>
          </div>
      </div>
    </header>
  );
};

export default Header;
