
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { dateRangeOptions } from '../data/chartData';

interface DashboardHeaderProps {
  dateRange: string;
  setDateRange: (value: string) => void;
}

export const DashboardHeader = ({ dateRange, setDateRange }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Client Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Monitor your key metrics and performance insights.
        </p>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto">
        <Select
          defaultValue={dateRange}
          onValueChange={setDateRange}
        >
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            {dateRangeOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button>
          Export Report
        </Button>
      </div>
    </div>
  );
};
