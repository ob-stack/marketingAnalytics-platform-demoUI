
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, Label } from 'recharts';
import { Info } from 'lucide-react';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface DonutChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  centerLabel?: string;
  dataSource?: string;
}

export function DonutChart({
  data,
  height = 300,
  innerRadius = 60,
  outerRadius = 80,
  centerLabel,
  dataSource,
}: DonutChartProps) {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      {dataSource && (
        <div className="flex items-center gap-1.5 mb-2">
          <div className="text-xs px-2 py-0.5 bg-muted rounded-full flex items-center gap-1">
            <span className="font-medium">{dataSource}</span>
            {dataSource && (
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
            )}
          </div>
        </div>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            {centerLabel && (
              <Label
                content={({ viewBox }) => {
                  const { cx, cy } = viewBox as { cx: number; cy: number };
                  return (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-lg font-medium"
                    >
                      <tspan x={cx} dy="-0.5em" className="text-sm font-normal text-muted-foreground">
                        {centerLabel}
                      </tspan>
                      <tspan x={cx} dy="1.6em" className="text-2xl font-bold">
                        {total.toLocaleString()}
                      </tspan>
                    </text>
                  );
                }}
              />
            )}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              border: 'none',
            }}
            formatter={(value: number) => [`${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`, '']}
          />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center"
            formatter={(value, entry, index) => (
              <span className="text-xs font-medium">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
