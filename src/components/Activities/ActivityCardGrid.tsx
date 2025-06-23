import React from 'react';
import ActivityCard, { ActivityCardProps } from './ActivityCard';
import { Button } from '@/components/ui/button';

const dummyActivities: ActivityCardProps[] = [
  {
    id: '1',
    imageUrl: '/images/activity1.jpg',
    title: 'VGP Wonder World Chennai',
    date: 'Sun, 22 Jun onwards',
    venue: 'VGP Wonder World: Chennai',
    category: 'Amusement Park',
    isPromoted: true,
  },
  {
    id: '2',
    imageUrl: '/images/activity2.jpg',
    title: 'Ideal Beach Resort Day Outing',
    date: 'Mon, 23 Jun onwards',
    venue: 'Ideal Beach Resort: ECR',
    category: 'Resorts',
    isPromoted: true,
  },
  {
    id: '3',
    imageUrl: '/images/activity3.jpg',
    title: 'Casagrand Sundance',
    date: 'Sun, 22 Jun onwards',
    venue: 'Casagrand Suncity: Chennai',
    category: 'Theme parks',
    isPromoted: false,
  },
  {
    id: '4',
    imageUrl: '/images/activity4.jpg',
    title: 'VGP Marine Kingdom - Chennai',
    date: 'Sun, 22 Jun onwards',
    venue: 'VGP Marine Kingdom: ECR',
    category: 'Aquarium',
    isPromoted: false,
  },
];

const categoryFilters = [
  'Amusement Parks',
  'Tourist Attractions',
  'Gaming',
  'Adventure',
  'Nightlife',
  'Food and Drinks',
  'Parties',
  'Unique Tours',
] as const;

const ActivityCardGrid: React.FC = () => {
  return (
    <main className="p-6 flex-1">
      <h1 className="text-3xl font-bold text-foreground mb-4">Activities In Chennai</h1>
      
      <div className="flex flex-wrap gap-3 mb-6">
        {categoryFilters.map((category) => (
          <Button key={category} variant="outline" className="rounded-full bg-card hover:bg-secondary">
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dummyActivities.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </main>
  );
};

export default ActivityCardGrid;
