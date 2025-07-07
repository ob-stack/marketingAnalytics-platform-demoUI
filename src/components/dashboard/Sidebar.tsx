import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Settings,
  Database,
  LogOut,
  User,
  FileText,
  Grid,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarProps = {
  onCloseSidebar: () => void;
};

export function Sidebar({ onCloseSidebar }: SidebarProps) {
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/dashboard'
    },
    { name: 'Client Profile', icon: <User size={20} />, path: '/profile' },
    { name: 'Admin Panel', icon: <Users size={20} />, path: '/admin' },
    {
      name: 'API Integration',
      icon: <Database size={20} />,
      path: '/api-integration'
    },
    { name: 'Content Manager', icon: <FileText size={20} />, path: '/content' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-md bg-primary">
            <Grid size={18} className="text-white" />
          </div>
          <span className="text-lg font-semibold text-foreground">
            Client Dashboard
          </span>
        </div>
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onCloseSidebar}
            className="lg:hidden"
          >
            <X size={18} />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
              onClick={isMobile ? onCloseSidebar : undefined}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sidebar-foreground hover:bg-sidebar-accent/50"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
