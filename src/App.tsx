
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import { Dashboard } from "./components/dashboard/Dashboard";
import { ClientProfile } from "./components/dashboard/ClientProfile";
import { AdminPanel } from "./components/dashboard/AdminPanel";
import { ApiIntegration } from "./components/dashboard/ApiIntegration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          } />
          <Route path="/profile" element={
            <DashboardLayout>
              <ClientProfile />
            </DashboardLayout>
          } />
          <Route path="/admin" element={
            <DashboardLayout>
              <AdminPanel />
            </DashboardLayout>
          } />
          <Route path="/api-integration" element={
            <DashboardLayout>
              <ApiIntegration />
            </DashboardLayout>
          } />
          <Route path="/content" element={
            <DashboardLayout>
              <div className="space-y-6">
                <h1 className="text-2xl font-bold tracking-tight">Content Manager</h1>
                <p className="text-muted-foreground">
                  This page is under construction.
                </p>
              </div>
            </DashboardLayout>
          } />
          <Route path="/settings" element={
            <DashboardLayout>
              <div className="space-y-6">
                <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">
                  This page is under construction.
                </p>
              </div>
            </DashboardLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
