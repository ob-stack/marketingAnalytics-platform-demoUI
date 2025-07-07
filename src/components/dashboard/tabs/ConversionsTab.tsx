
import React from 'react';
import { DraggableWidget } from '../DraggableWidget';
import { BarChart } from '../widgets/BarChart';
import { LineChart } from '../widgets/LineChart';
import { DonutChart } from '../widgets/DonutChart';
import { sampleMetricData } from '../data/chartData';

export const ConversionsTab = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <DraggableWidget title="Conversion Trends" dataSource="Google Analytics">
            <div className="flex flex-col space-y-4">
              <BarChart 
                data={sampleMetricData.sales}
                height={300}
                bars={[
                  { key: 'conversions', color: '#8b5cf6', name: 'Conversion Rate (%)' },
                ]}
                dataSource="Google Analytics"
              />
            </div>
          </DraggableWidget>
        </div>
        <div>
          <DraggableWidget title="Customer Segmentation" dataSource="Klaviyo">
            <DonutChart 
              data={sampleMetricData.customerSegmentation}
              height={300}
              centerLabel="Customers"
              dataSource="Klaviyo"
            />
          </DraggableWidget>
        </div>
      </div>
      <DraggableWidget title="Customer Lifetime Value" dataSource="Klaviyo">
        <LineChart 
          data={sampleMetricData.customerLifetimeValue}
          height={250}
          lines={[
            { key: 'value', color: '#22c55e', name: 'CLV ($)' },
          ]}
          dataSource="Klaviyo"
        />
      </DraggableWidget>
    </div>
  );
};
