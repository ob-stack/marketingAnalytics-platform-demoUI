
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: number;
  changeLabel?: string;
  changeTimeframe?: string;
  className?: string;
  tooltip?: string;
  trend?: Array<number>;
}

export function StatCard({
  title,
  value,
  icon,
  change,
  changeLabel,
  changeTimeframe = 'from last period',
  className,
  tooltip,
  trend,
}: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  const changeAbs = change ? Math.abs(change) : null;

  // Calculate the min and max for the sparkline
  const min = trend ? Math.min(...trend) : 0;
  const max = trend ? Math.max(...trend) : 0;
  const range = max - min || 1;

  return (
    <div className={cn('p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all', className)}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help">
                    <Info size={14} className="text-muted-foreground" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <div className="mt-1">
        <h3 className="text-3xl font-bold">{value}</h3>
      </div>
      <div className="flex items-center justify-between mt-3">
        {(isPositive || isNegative) && (
          <div className="flex items-center space-x-1">
            <div
              className={cn(
                "flex items-center text-sm",
                isPositive ? "text-green-500" : "text-red-500"
              )}
            >
              {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span className="font-medium">{changeAbs}%</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {changeLabel || changeTimeframe}
            </p>
          </div>
        )}
        
        {/* Mini sparkline chart if trend data available */}
        {trend && trend.length > 1 && (
          <div className="h-8 flex items-end">
            {trend.map((value, index) => {
              const height = ((value - min) / range) * 24;
              return (
                <div
                  key={index}
                  className={cn(
                    "w-1 mx-[1px] rounded-t-sm",
                    isPositive ? "bg-green-500" : isNegative ? "bg-red-500" : "bg-blue-500"
                  )}
                  style={{ height: `${Math.max(4, height)}px` }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
