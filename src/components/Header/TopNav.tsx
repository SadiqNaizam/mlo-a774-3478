import React from 'react';
import { cn } from '@/lib/utils';

interface TopNavProps {
  className?: string;
  activeLink?: string;
}

const navItems = [
  { name: 'Movies', href: '#' },
  { name: 'Stream', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Plays', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Activities', href: '#' },
] as const;

const TopNav: React.FC<TopNavProps> = ({ className, activeLink = 'Activities' }) => {
  return (
    <nav className={cn('flex items-center', className)}>
      <ul className="flex items-center space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                activeLink === item.name
                  ? 'text-primary'
                  : 'text-foreground/80'
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
