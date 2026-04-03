/**
 * Sidebar Component
 * 
 * Renders the left navigation sidebar with grouped menu items.
 * The sidebar is divided into 3 sections:
 *   1. MY PROJECTS  - Agents, AI Models, Library
 *   2. ORCHESTRATOR - Published, Machines, Queues, Triggers, Jobs, Executions, Vault, Knowledge Base, Key Store
 *   3. ADMIN        - Tenant, Integrations
 * 
 * The "Knowledge Base" item is highlighted as the active page.
 * All other links are static (non-clickable as per requirements).
 * 
 * Props: none (static component)
 */

// We import icons from lucide-react for each menu item
import {
  Bot,         // Agents
  Brain,       // AI Models
  Library,     // Library
  Rocket,      // Published
  Monitor,     // Machines
  List,        // Queues
  Zap,         // Triggers
  Briefcase,   // Jobs
  Play,        // Executions
  Shield,      // Vault
  Database,    // Knowledge Base
  Key,         // Key Store
  Building,    // Tenant
  Link,        // Integrations
} from 'lucide-react';

// -------------------------------------------------------
// Data configuration: define each nav section and its items
// This makes it easy to add/remove items without touching JSX
// -------------------------------------------------------
const navSections = [
  {
    label: 'MY PROJECTS',     // Section heading text
    items: [
      { id: 'agents',        icon: Bot,      label: 'Agents' },
      { id: 'ai-models',     icon: Brain,    label: 'AI Models' },
      { id: 'library',       icon: Library,  label: 'Library' },
    ],
  },
  {
    label: 'ORCHESTRATOR',
    items: [
      { id: 'published',     icon: Rocket,   label: 'Published' },
      { id: 'machines',      icon: Monitor,  label: 'Machines' },
      { id: 'queues',        icon: List,     label: 'Queues' },
      { id: 'triggers',      icon: Zap,      label: 'Triggers' },
      { id: 'jobs',          icon: Briefcase,label: 'Jobs' },
      { id: 'executions',    icon: Play,     label: 'Executions' },
      { id: 'vault',         icon: Shield,   label: 'Vault' },
      { id: 'knowledge-base',icon: Database, label: 'Knowledge Base', active: true }, // Currently active
      { id: 'key-store',     icon: Key,      label: 'Key Store' },
    ],
  },
  {
    label: 'ADMIN',
    items: [
      { id: 'tenant',        icon: Building, label: 'Tenant' },
      { id: 'integrations',  icon: Link,     label: 'Integrations' },
    ],
  },
];

function Sidebar() {
  return (
    // Sidebar container - white background, fixed width, full height with scroll
    <aside className="w-48 min-h-full bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
      
      {/* Render each navigation section */}
      {navSections.map((section) => (
        <div key={section.label} className="mt-4">
          
          {/* Section heading - small grey uppercase label */}
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-4 mb-1">
            {section.label}
          </p>

          {/* Section items list */}
          <ul>
            {section.items.map((item) => {
              // Destructure for cleaner JSX
              const Icon = item.icon;
              const isActive = item.active === true;

              return (
                <li key={item.id}>
                  {/* 
                    Nav item button:
                    - Active item gets a purple left border + light purple background
                    - Inactive items get a hover effect
                    - We use `role="button"` for accessibility on non-link elements
                  */}
                  <div
                    className={`
                      flex items-center gap-2.5 px-4 py-2 text-sm cursor-pointer transition-colors
                      ${isActive
                        ? 'bg-indigo-50 text-indigo-700 border-l-2 border-indigo-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'}
                    `}
                    role="button"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Icon with matching color */}
                    <Icon
                      size={15}
                      className={isActive ? 'text-indigo-600' : 'text-gray-500'}
                    />
                    {/* Label text */}
                    <span>{item.label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
