
import React from 'react';
import { StatCard } from '../widgets/StatCard';
import { Activity, Clock, CreditCard, Percent, ShoppingCart, Target, TrendingUp, Users } from 'lucide-react';

export const SummaryCards = () => {
  return (
    <>
      {/* Quick Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Visitors" 
          value="24,589" 
          change={12.5} 
          icon={<Users size={20} />} 
          trend={[18, 22, 19, 24, 21, 25, 28]}
          tooltip="Unique visitors across all channels"
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.2%" 
          change={0.8} 
          icon={<Percent size={20} />} 
          trend={[2.8, 2.9, 3.0, 3.1, 3.2, 3.2, 3.2]}
          tooltip="Percentage of visitors who complete a purchase"
        />
        <StatCard 
          title="Total Orders" 
          value="1,429" 
          change={-2.3} 
          icon={<ShoppingCart size={20} />} 
          trend={[38, 42, 35, 37, 36, 35, 34]}
          tooltip="Number of completed transactions"
        />
        <StatCard 
          title="Average Order Value" 
          value="$78.50" 
          change={4.1} 
          icon={<CreditCard size={20} />} 
          trend={[72, 74, 75, 76, 77, 78, 78.5]}
          tooltip="Average revenue per order"
        />
      </div>

      {/* Additional KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Customer Lifetime Value" 
          value="$195" 
          change={10.3} 
          icon={<Target size={20} />} 
          tooltip="Average revenue from a customer over their lifetime"
        />
        <StatCard 
          title="Monthly Revenue" 
          value="$84,000" 
          change={16.7} 
          icon={<TrendingUp size={20} />} 
          trend={[45, 42, 58, 63, 75, 72, 84]}
          tooltip="Total revenue for the current month"
        />
        <StatCard 
          title="Avg. Session Duration" 
          value="4m 12s" 
          change={8.4} 
          icon={<Clock size={20} />} 
          trend={[3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2]}
          tooltip="Average time visitors spend on your site"
        />
        <StatCard 
          title="Bounce Rate" 
          value="32%" 
          change={-5.2} 
          changeLabel="lower is better"
          icon={<Activity size={20} />} 
          trend={[38, 37, 36, 35, 34, 33, 32]}
          tooltip="Percentage of single-page visits"
        />
      </div>
    </>
  );
};
