
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardHeader } from './components/DashboardHeader';
import { SummaryCards } from './components/SummaryCards';
import { SalesTrafficTab } from './tabs/SalesTrafficTab';
import { ConversionsTab } from './tabs/ConversionsTab';
import { ChannelsTab } from './tabs/ChannelsTab';
import { OrdersProductsSection } from './components/OrdersProductsSection';

export function Dashboard() {
  const [dateRange, setDateRange] = useState('month');

  return (
    <div className="space-y-8">
      {/* Header with date range selector */}
      <DashboardHeader dateRange={dateRange} setDateRange={setDateRange} />

      {/* Summary Stats Cards */}
      <SummaryCards />

      {/* Main Tabs */}
      <Tabs defaultValue="sales" className="w-full">
        <TabsList className="grid grid-cols-3 md:w-auto w-full">
          <TabsTrigger value="sales">Sales & Traffic</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
          <TabsTrigger value="channels">Channel Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sales">
          <SalesTrafficTab />
        </TabsContent>
        
        <TabsContent value="conversions">
          <ConversionsTab />
        </TabsContent>

        <TabsContent value="channels">
          <ChannelsTab />
        </TabsContent>
      </Tabs>

      {/* Orders & Products Section */}
      <OrdersProductsSection />
    </div>
  );
}
