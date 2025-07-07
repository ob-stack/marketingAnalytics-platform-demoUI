
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Database, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSourcesKey, setShowSourcesKey] = useState(true);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const dataSources = [
    { name: 'Google Analytics', color: 'bg-orange-100 text-orange-800 border-orange-200' },
    { name: 'Meta Ads', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'Klaviyo', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { name: 'Shopify', color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'CSV Import', color: 'bg-gray-100 text-gray-800 border-gray-200' },
    { name: 'Custom API', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen || !isMobile ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-sidebar transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-64`}
      >
        <Sidebar onCloseSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar onMenuClick={toggleSidebar} />

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {/* Data Sources Legend */}
          {showSourcesKey && (
            <div className="m-4 mb-0 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5 text-sm font-medium">
                  <Database size={14} />
                  <span>Data Sources</span>
                </div>
                <div className="flex gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button>
                          <Info size={14} className="text-muted-foreground" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs max-w-xs">
                          This legend shows the color-coding for different data sources integrated 
                          in your dashboard. Each widget displays its data source with a matching badge.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <button 
                    className="text-xs text-muted-foreground hover:text-foreground"
                    onClick={() => setShowSourcesKey(false)}
                  >
                    Hide
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {dataSources.map((source) => (
                  <div 
                    key={source.name}
                    className={`text-xs px-2 py-0.5 rounded-full flex items-center gap-1 ${source.color} border`}
                  >
                    <Database size={10} />
                    <span>{source.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="py-6 px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
