import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export interface ActivityCardProps {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
  venue: string;
  category: string;
  isPromoted: boolean;
  className?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  imageUrl,
  title,
  date,
  venue,
  category,
  isPromoted,
  className,
}) => {
  return (
    <div className={cn('bg-card text-card-foreground rounded-lg overflow-hidden flex flex-col', className)}>
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x400.png?text=Image+not+found'; }}
        />
        {isPromoted && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-none tracking-wider">PROMOTED</Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-sm font-semibold">{date}</p>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 truncate">{venue}</p>
        <p className="text-sm text-muted-foreground mt-auto pt-2">{category}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
