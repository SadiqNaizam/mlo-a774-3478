import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface HeaderSearchProps {
  className?: string;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ className }) => {
  return (
    <div className={cn('relative w-full max-w-md', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
        className="pl-10 h-10 bg-secondary border-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1"
      />
    </div>
  );
};

export default HeaderSearch;
