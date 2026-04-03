/**
 * CreateKnowledgeBaseModal Component
 * 
 * A slide-in panel (right-side drawer) that appears when the user clicks
 * the "Create New" button. It allows the user to fill in details for a
 * new Knowledge Base entry.
 * 
 * Fields:
 *   - Name (required, cannot be edited later)
 *   - Description (optional textarea)
 *   - Vector Store (required dropdown, default: "Qdrant")
 *   - LLM Embedding Model (required dropdown, default: "text-embedding-ada-002")
 * 
 * Actions:
 *   - Close (X button) → calls onClose()
 *   - Create button    → calls onClose() (in a real app, would submit form data)
 * 
 * Props:
 *   - isOpen  (boolean)  : Whether the modal should be visible
 *   - onClose (function) : Callback to close the modal
 */

import { X } from 'lucide-react';     // X icon for close button
import { useState } from 'react';      // useState to track form field values

function CreateKnowledgeBaseModal({ isOpen, onClose }) {

  // ------------------------------------------------------------
  // Local form state — tracks what the user types in each field
  // ------------------------------------------------------------
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    embeddingModel: 'text-embedding-ada-002',
  });

  // Generic change handler for all inputs/selects/textareas
  // It reads the field's `name` attribute and updates the matching key in formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle the Create button click
  // In a real app, this would validate and submit to an API
  const handleCreate = () => {
    console.log('Creating knowledge base with:', formData);
    // Reset form after submission
    setFormData({ name: '', description: '', vectorStore: 'Qdrant', embeddingModel: 'text-embedding-ada-002' });
    onClose();
  };

  // If the modal is not open, don't render anything
  // This improves performance by avoiding unnecessary DOM nodes
  if (!isOpen) return null;

  return (
    // ===== OVERLAY =====
    // A semi-transparent dark overlay covers the main content when modal is open
    // Clicking the overlay closes the modal (good UX pattern)
    <div
      className="fixed inset-0 z-50 flex"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Dark semi-transparent backdrop */}
      <div
        className="flex-1 bg-black/30"
        onClick={onClose}  // Click outside to close
      />

      {/* ===== MODAL PANEL (right-side drawer) ===== */}
      <div className="w-96 bg-white h-full shadow-2xl flex flex-col overflow-y-auto">

        {/* ----- MODAL HEADER ----- */}
        <div className="flex items-start justify-between p-5 border-b border-gray-200">
          <div>
            {/* Title */}
            <h2 id="modal-title" className="text-sm font-semibold text-gray-900">
              Create New Knowledge Base
            </h2>
            {/* Subtitle */}
            <p className="text-xs text-gray-500 mt-0.5">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>

          {/* Close (X) button */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors ml-4 mt-0.5"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* ----- MODAL BODY: Form Fields ----- */}
        <div className="flex-1 p-5 flex flex-col gap-5">

          {/* Field 1: Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="kb-name" className="text-xs font-medium text-gray-700">
              Name (Cannot be edited later)
              <span className="text-red-500 ml-0.5">*</span>  {/* Required indicator */}
            </label>
            <input
              id="kb-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Field 2: Description */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="kb-description" className="text-xs font-medium text-gray-700">
              Description
            </label>
            {/* Textarea for multi-line description */}
            <textarea
              id="kb-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows={4}
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Field 3: Vector Store dropdown */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="kb-vector-store" className="text-xs font-medium text-gray-700">
              Vector Store
              <span className="text-red-500 ml-0.5">*</span>
            </label>
            <select
              id="kb-vector-store"
              name="vectorStore"
              value={formData.vectorStore}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer appearance-none"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              <option value="Qdrant">Qdrant</option>
              <option value="Pinecone">Pinecone</option>
              <option value="Weaviate">Weaviate</option>
              <option value="Chroma">Chroma</option>
            </select>
          </div>

          {/* Field 4: LLM Embedding Model dropdown */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="kb-embedding-model" className="text-xs font-medium text-gray-700">
              LLM Embedding Model
              <span className="text-red-500 ml-0.5">*</span>
            </label>
            <select
              id="kb-embedding-model"
              name="embeddingModel"
              value={formData.embeddingModel}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer appearance-none"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              <option value="text-embedding-ada-002">text-embedding-ada-002</option>
              <option value="text-embedding-3-small">text-embedding-3-small</option>
              <option value="text-embedding-3-large">text-embedding-3-large</option>
            </select>
          </div>
        </div>

        {/* ----- MODAL FOOTER: Action Button ----- */}
        <div className="p-5 border-t border-gray-200 flex justify-end">
          <button
            onClick={handleCreate}
            className="px-5 py-2 text-sm font-medium text-white rounded-md transition-colors hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#4F46E5' }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateKnowledgeBaseModal;
