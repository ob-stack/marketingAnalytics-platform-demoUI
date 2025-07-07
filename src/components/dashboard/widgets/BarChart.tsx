
import React from 'react';
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Info } from 'lucide-react';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface BarChartProps {
  data: Array<any>;
  bars: Array<{
    key: string;
    color: string;
    name?: string;
  }>;
  xAxisKey?: string;
  grid?: boolean;
  height?: number;
  stackId?: string | null;
  dataSource?: string;
}

export function BarChart({
  data,
  bars,
  xAxisKey = 'name',
  grid = true,
  height = 300,
  stackId = null,
  dataSource,
}: BarChartProps) {
  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      {dataSource && (
        <div className="flex items-center gap-1.5 mb-2">
          <div className="text-xs px-2 py-0.5 bg-muted rounded-full flex items-center gap-1">
            <span className="font-medium">{dataSource}</span>
            <TooltipProvider>
              <UITooltip>
                <TooltipTrigger asChild>
                  <Info size={12} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Data imported from {dataSource}</p>
                </TooltipContent>
              </UITooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <Chart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />}
          <XAxis dataKey={xAxisKey} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              border: 'none',
            }}
          />
          {bars.map((bar) => (
            <Bar
              key={bar.key}
              dataKey={bar.key}
              name={bar.name || bar.key}
              fill={bar.color}
              stackId={stackId}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}
