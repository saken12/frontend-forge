import { AppSidebar } from "./AppSidebar";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";

export function MainLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-secondary/30">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <header className="h-14 border-b border-border bg-background flex items-center justify-end px-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background">
              <span className="text-sm">Hi,</span>
              <span className="text-lg">👋</span>
            </div>
          </header>
          
          {/* Main content */}
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
