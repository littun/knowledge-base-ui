/**
 * KnowledgeBasePage Component
 * 
 * This is the main content area of the application — the "Knowledge Base" page.
 * It contains:
 *   - A toolbar row: page title, search bar, and "Create New" button
 *   - A 3-column grid of KnowledgeCard components
 *   - A Pagination bar at the bottom
 *   - The CreateKnowledgeBaseModal (shown/hidden based on state)
 * 
 * State managed here:
 *   - isModalOpen (boolean): controls the visibility of the Create New modal
 * 
 * Props: none
 */

import { useState } from 'react';
import { Search, Plus } from 'lucide-react';

// Import child components
import KnowledgeCard from './KnowledgeCard';
import Pagination from './Pagination';
import CreateKnowledgeBaseModal from './CreateKnowledgeBaseModal';

// -------------------------------------------------------
// Mock data: represents the 6 knowledge base cards
// In a real app, this would come from an API call
// -------------------------------------------------------
const KNOWLEDGE_BASE_ITEMS = [
  {
    id: 1,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 2,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 3,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 4,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 5,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
  {
    id: 6,
    title: 'Test',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: '14/07/2025',
  },
];

function KnowledgeBasePage() {
  // isModalOpen controls whether the "Create New" drawer is visible
  // useState(false) means the modal starts closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // Page wrapper: fills remaining height, uses flexbox column layout
    <div className="flex-1 flex flex-col min-h-0 bg-gray-50">

      {/* ===== TOOLBAR ===== */}
      {/* Contains: page heading | search input | create button */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        
        {/* Page title */}
        <h1 className="text-lg font-bold text-gray-900">Knowledge Base</h1>

        {/* Right side: search + button */}
        <div className="flex items-center gap-3">
          
          {/* Local search bar (searches within knowledge base cards) */}
          <div className="flex items-center border border-gray-200 rounded-md px-3 py-1.5 gap-2 bg-white hover:border-gray-300 focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-300 transition-all">
            <Search size={14} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none text-sm text-gray-700 placeholder-gray-400 w-44 bg-transparent"
            />
          </div>

          {/* 
            "Create New" button — the only interactive button on this page (per requirements).
            Clicking this opens the CreateKnowledgeBaseModal drawer.
          */}
          <button
            id="create-new-btn"
            onClick={() => setIsModalOpen(true)}  // Open the modal
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white rounded-md hover:opacity-90 active:scale-95 transition-all"
            style={{ backgroundColor: '#4F46E5' }}
          >
            <Plus size={15} />
            Create New
          </button>
        </div>
      </div>

      {/* ===== CARDS GRID ===== */}
      {/* 3-column grid of knowledge base cards */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4">
          {KNOWLEDGE_BASE_ITEMS.map((item) => (
            // We pass each item's properties as props to the KnowledgeCard component
            <KnowledgeCard
              key={item.id}
              title={item.title}
              description={item.description}
              createdOn={item.createdOn}
            />
          ))}
        </div>
      </div>

      {/* ===== PAGINATION BAR ===== */}
      {/* Sits at the very bottom of the content area */}
      <Pagination
        totalRows={KNOWLEDGE_BASE_ITEMS.length}
        rowsPerPage={10}
        currentPage={1}
        totalPages={1}
      />

      {/* ===== MODAL ===== */}
      {/* 
        The modal is rendered here (at the end of the tree) so it floats above everything.
        isModalOpen controls its visibility.
        onClose sets isModalOpen back to false to hide it.
      */}
      <CreateKnowledgeBaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default KnowledgeBasePage;
