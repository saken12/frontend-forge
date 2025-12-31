import { Home, Briefcase, Bookmark, MonitorPlay, User, HelpCircle, Settings, PlusCircle } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Briefcase, label: "Jobs", path: "/jobs" },
  { icon: Bookmark, label: "Saved Jobs", path: "/saved-jobs" },
  { icon: MonitorPlay, label: "Learn", path: "/learn" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[200px] min-h-screen bg-background border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-4 pt-6">
        <h1 className="text-xl font-bold text-foreground tracking-tight">Jobhunt</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={cn(
                    "sidebar-item",
                    isActive ? "sidebar-item-active" : "sidebar-item-inactive"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="p-3 space-y-2">
        <NavLink
          to="/support"
          className={cn(
            "sidebar-item",
            location.pathname === "/support" ? "sidebar-item-active" : "sidebar-item-inactive"
          )}
        >
          <HelpCircle className="h-4 w-4" />
          <span>Support</span>
        </NavLink>

        <NavLink
          to="/post-job"
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
        >
          <PlusCircle className="h-4 w-4" />
          <span>Post Job</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={cn(
            "sidebar-item",
            location.pathname === "/settings" ? "sidebar-item-active" : "sidebar-item-inactive"
          )}
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}
