import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FilterAccordionItemProps {
  value: string;
  title: string;
  onClear: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const FilterAccordionItem: React.FC<FilterAccordionItemProps> = ({ value, title, onClear, children }) => (
  <AccordionItem value={value} className="border-b border-border bg-card px-4 rounded-md">
    <AccordionTrigger className="hover:no-underline py-4">
      <div className="flex justify-between items-center w-full">
        <span className="font-semibold text-sm text-primary">{title}</span>
        <span
          className="text-muted-foreground text-xs font-normal hover:text-primary cursor-pointer pr-2"
          onClick={onClear}
        >
          Clear
        </span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="pb-4">
      {children}
    </AccordionContent>
  </AccordionItem>
);

const SidebarFilters: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('Today');

  const handleClear = (filterName: string) => (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    console.log(`Clearing ${filterName} filter`);
    if (filterName === 'Date') {
      setSelectedDate('');
    }
  };

  const dateOptions = ['Today', 'Tomorrow', 'This Weekend'] as const;

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground p-4 space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Filters</h2>
      <div className="space-y-2">
        <Accordion type="multiple" defaultValue={['date', 'categories', 'more-filters', 'price']} className="w-full space-y-4">
          
          <FilterAccordionItem value="date" title="Date" onClear={handleClear('Date')}>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {dateOptions.map(option => (
                  <Button 
                    key={option} 
                    variant={selectedDate === option ? 'default' : 'outline'}
                    className={cn(
                      'border-border text-xs h-9',
                      selectedDate === option ? 
                      'bg-primary text-primary-foreground hover:bg-primary/90' : 
                      'bg-card text-primary border-primary hover:bg-primary/10'
                    )}
                    onClick={() => setSelectedDate(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="date-range" className="border-muted-foreground" />
                <Label htmlFor="date-range" className="text-sm font-medium text-foreground">Date Range</Label>
              </div>
            </div>
          </FilterAccordionItem>

          <FilterAccordionItem value="categories" title="Categories" onClear={handleClear('Categories')}>
            <p className="text-sm text-muted-foreground">Category filters will be here.</p>
          </FilterAccordionItem>

          <FilterAccordionItem value="more-filters" title="More Filters" onClear={handleClear('More Filters')}>
             <p className="text-sm text-muted-foreground">More filters will be here.</p>
          </FilterAccordionItem>

          <FilterAccordionItem value="price" title="Price" onClear={handleClear('Price')}>
            <p className="text-sm text-muted-foreground">Price filters will be here.</p>
          </FilterAccordionItem>

        </Accordion>
      </div>
      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
        Browse by Venues
      </Button>
    </aside>
  );
};

export default SidebarFilters;
