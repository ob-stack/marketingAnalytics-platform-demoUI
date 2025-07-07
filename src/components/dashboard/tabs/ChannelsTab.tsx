
import React from 'react';
import { DraggableWidget } from '../DraggableWidget';
import { BarChart } from '../widgets/BarChart';
import { DonutChart } from '../widgets/DonutChart';
import { sampleMetricData } from '../data/chartData';

export const ChannelsTab = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <DraggableWidget title="Revenue by Marketing Channel" dataSource="Meta Ads">
            <BarChart 
              data={sampleMetricData.revenueByChannel}
              height={300}
              bars={[
                { key: 'direct', color: '#3b82f6', name: 'Direct' },
                { key: 'organic', color: '#22c55e', name: 'Organic' },
                { key: 'social', color: '#8b5cf6', name: 'Social' },
                { key: 'email', color: '#f97316', name: 'Email' },
                { key: 'referral', color: '#ef4444', name: 'Referral' },
              ]}
              stackId="stack"
              dataSource="Meta Ads"
            />
          </DraggableWidget>
        </div>
        <div>
          <DraggableWidget title="Traffic Sources" dataSource="Google Analytics">
            <DonutChart 
              data={sampleMetricData.sourceData}
              height={300}
              centerLabel="Traffic"
              dataSource="Google Analytics"
            />
          </DraggableWidget>
        </div>
      </div>
      <DraggableWidget title="Ad Campaign Performance" dataSource="Meta Ads">
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium">Campaign</th>
                  <th className="text-right p-2 font-medium">Impressions</th>
                  <th className="text-right p-2 font-medium">Clicks</th>
                  <th className="text-right p-2 font-medium">CTR (%)</th>
                  <th className="text-right p-2 font-medium">Spend ($)</th>
                  <th className="text-right p-2 font-medium">CPA ($)</th>
                </tr>
              </thead>
              <tbody>
                {sampleMetricData.adPerformance.map((campaign) => (
                  <tr key={campaign.name} className="border-b hover:bg-muted/50">
                    <td className="text-left p-2 font-medium">{campaign.name}</td>
                    <td className="text-right p-2">{campaign.impressions.toLocaleString()}</td>
                    <td className="text-right p-2">{campaign.clicks.toLocaleString()}</td>
                    <td className="text-right p-2">{campaign.ctr.toFixed(1)}%</td>
                    <td className="text-right p-2">${campaign.spend.toLocaleString()}</td>
                    <td className="text-right p-2">${campaign.cpa.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DraggableWidget>
    </div>
  );
};
