/**
 * Header Component
 * 
 * Renders the top navigation bar with:
 * - Logo and workspace name on the left
 * - Search bar in the center
 * - Notification bell and user avatar on the right
 * 
 * Props: none (static component - data is hardcoded for display)
 */

// Icons from lucide-react library (free, lightweight icon set)
import { Search, ChevronDown, Bell } from 'lucide-react';

function Header() {
  return (
    // Main header bar - dark navy background matching the Figma design
    <header className="flex items-center justify-between px-4 py-2 h-12" style={{ backgroundColor: '#1E1B4B' }}>
      
      {/* ===== LEFT SECTION: Logo + Workspace ===== */}
      <div className="flex items-center gap-3">
        {/* Logo icon - a simple circular gradient to represent the "W" brand */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs"
            style={{ background: 'linear-gradient(135deg, #6366f1, #4F46E5)' }}
          >
            W
          </div>
          {/* Brand name */}
          <span className="text-white font-semibold text-sm">Worcspace</span>
        </div>

        {/* Workspace dropdown pill */}
        <div className="flex items-center gap-1 bg-white/10 rounded-md px-2 py-1 cursor-pointer hover:bg-white/20 transition-colors">
          <span className="text-white text-xs">Worcspace 1</span>
          <ChevronDown size={12} className="text-white/70" />
        </div>
      </div>

      {/* ===== CENTER SECTION: Global Search Bar ===== */}
      <div className="flex-1 max-w-md mx-6">
        <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3 py-1.5 gap-2">
          <Search size={14} className="text-white/50" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white text-xs placeholder-white/50 outline-none flex-1 w-full"
          />
          {/* Keyboard shortcut hint */}
          <span className="text-white/40 text-xs border border-white/20 rounded px-1">⌘K</span>
        </div>
      </div>

      {/* ===== RIGHT SECTION: Notifications + User Avatar ===== */}
      <div className="flex items-center gap-3">
        {/* Notification bell icon */}
        <Bell size={16} className="text-white/70 cursor-pointer hover:text-white transition-colors" />

        {/* User avatar circle with initials */}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs cursor-pointer"
          style={{ backgroundColor: '#4F46E5' }}
        >
          GK
        </div>
      </div>
    </header>
  );
}

export default Header;
