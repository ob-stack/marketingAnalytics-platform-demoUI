
import React from 'react';
import { LineChart as Chart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface LineChartProps {
  data: Array<any>;
  lines: Array<{
    key: string;
    color: string;
    name?: string;
  }>;
  xAxisKey?: string;
  grid?: boolean;
  height?: number;
  dataSource?: string;
}

export function LineChart({
  data,
  lines,
  xAxisKey = 'name',
  grid = true,
  height = 300,
  dataSource
}: LineChartProps) {
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
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.name || line.key}
              stroke={line.color}
              strokeWidth={2}
              activeDot={{ r: 6 }}
              dot={false}
            />
          ))}
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}
