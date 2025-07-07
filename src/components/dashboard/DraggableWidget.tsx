
import React, { useState } from 'react';
import { MoreHorizontal, GripVertical, Database } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface DraggableWidgetProps {
  title: string;
  children: React.ReactNode;
  height?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onExport?: () => void;
  dataSource?: string;
}

export function DraggableWidget({
  title,
  children,
  height = 'auto',
  onEdit,
  onDelete,
  onExport,
  dataSource,
}: DraggableWidgetProps) {
  const [isDragging, setIsDragging] = useState(false);

  // Map data sources to colors for visual distinction
  const getSourceColor = (source: string) => {
    const sourceColors: Record<string, string> = {
      'Google Analytics': 'bg-orange-100 text-orange-800 border-orange-200',
      'Meta Ads': 'bg-blue-100 text-blue-800 border-blue-200',
      'Klaviyo': 'bg-purple-100 text-purple-800 border-purple-200',
      'Shopify': 'bg-green-100 text-green-800 border-green-200',
      'CSV Import': 'bg-gray-100 text-gray-800 border-gray-200',
      'Custom API': 'bg-amber-100 text-amber-800 border-amber-200',
      'Google Ads': 'bg-red-100 text-red-800 border-red-200',
      'TikTok Ads': 'bg-teal-100 text-teal-800 border-teal-200',
    };
    return sourceColors[source] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div 
      className={`widget border rounded-lg shadow-sm p-4 ${isDragging ? 'widget-dragging border-dashed' : ''}`}
      style={{ height }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {/* Drag handle */}
          <div className="cursor-move opacity-50 hover:opacity-100">
            <GripVertical size={18} />
          </div>
          <h3 className="font-medium text-sm">{title}</h3>
          
          {/* Data source badge */}
          {dataSource && (
            <Badge variant="outline" className={`text-xs px-2 py-0.5 ml-2 flex items-center gap-1 ${getSourceColor(dataSource)}`}>
              <Database size={10} />
              <span>{dataSource}</span>
            </Badge>
          )}
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              <MoreHorizontal size={16} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Widget Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {onEdit && <DropdownMenuItem onClick={onEdit}>Edit</DropdownMenuItem>}
            {onExport && <DropdownMenuItem onClick={onExport}>Export Data</DropdownMenuItem>}
            {onDelete && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={onDelete}
                  className="text-red-500 focus:text-red-500"
                >
                  Delete
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
}
