
import React from 'react';
import { DraggableWidget } from '../DraggableWidget';
import { LineChart } from '../widgets/LineChart';
import { BarChart } from '../widgets/BarChart';
import { DonutChart } from '../widgets/DonutChart';
import { sampleMetricData } from '../data/chartData';

export const SalesTrafficTab = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <DraggableWidget title="Sales & Traffic Overview" onExport={() => console.log('Export data')} dataSource="Shopify">
            <LineChart 
              data={sampleMetricData.sales}
              height={300}
              lines={[
                { key: 'visitors', color: '#3b82f6', name: 'Visitors' },
                { key: 'sales', color: '#22c55e', name: 'Orders' },
                { key: 'revenue', color: '#8b5cf6', name: 'Revenue ($)' }
              ]}
              dataSource="Shopify"
            />
          </DraggableWidget>
        </div>
        <DraggableWidget title="Traffic by Device" onExport={() => console.log('Export data')} dataSource="Google Analytics">
          <DonutChart 
            data={sampleMetricData.deviceData}
            height={300}
            centerLabel="Total Users"
            dataSource="Google Analytics"
          />
        </DraggableWidget>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DraggableWidget title="Daily Revenue by Day of Week" onExport={() => console.log('Export data')} dataSource="Shopify">
          <BarChart 
            data={sampleMetricData.daysOfWeek}
            height={300}
            bars={[
              { key: 'revenue', color: '#3b82f6', name: 'Revenue ($)' },
            ]}
            dataSource="Shopify"
          />
        </DraggableWidget>
        <DraggableWidget title="Orders by Hour of Day" onExport={() => console.log('Export data')} dataSource="Shopify">
          <LineChart 
            data={sampleMetricData.hoursOfDay}
            height={300}
            lines={[
              { key: 'orders', color: '#22c55e', name: 'Orders' },
            ]}
            dataSource="Shopify"
          />
        </DraggableWidget>
      </div>
    </div>
  );
};
