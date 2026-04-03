/**
 * App Component — Root of the Application
 * 
 * This is the top-level component that assembles the full layout.
 * The layout has two main parts:
 * 
 *   1. Header (full-width, at the top)
 *   2. Main area below the header, which is split into:
 *        a. Sidebar (left fixed-width column)
 *        b. KnowledgeBasePage (right, takes remaining space)
 * 
 * Think of it like this:
 * 
 *  ┌────────────────────────────────────────────┐
 *  │                  Header                    │
 *  ├──────────┬─────────────────────────────────┤
 *  │          │                                 │
 *  │ Sidebar  │      KnowledgeBasePage          │
 *  │          │                                 │
 *  └──────────┴─────────────────────────────────┘
 * 
 * The layout fills the entire browser viewport height (h-screen).
 */

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import KnowledgeBasePage from './components/KnowledgeBasePage';

function App() {
  return (
    // Root container: full viewport height, column layout
    <div className="flex flex-col h-screen overflow-hidden">

      {/* ── Top: Navigation Header ── */}
      <Header />

      {/* ── Bottom: Sidebar + Main Content ── */}
      {/* flex-1 makes this row take all remaining height after the header */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left: Sidebar navigation */}
        <Sidebar />

        {/* Right: Main page content — scrollable independently */}
        <main className="flex-1 overflow-y-auto flex flex-col">
          <KnowledgeBasePage />
        </main>

      </div>
    </div>
  );
}

export default App;
