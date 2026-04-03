/**
 * Pagination Component
 * 
 * Renders the bottom pagination bar, matching the Figma design:
 *   - "6 rows" label on the left
 *   - "Rows per page" dropdown (10) in the center-right
 *   - Page info "page 1 of 1" 
 *   - First / Prev / Next / Last navigation arrows
 * 
 * Props:
 *   - totalRows (number)  : Total number of data rows, e.g. 6
 *   - rowsPerPage (number): How many rows per page, e.g. 10
 *   - currentPage (number): Current page number, e.g. 1
 *   - totalPages (number) : Total page count, e.g. 1
 */

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

function Pagination({ totalRows = 6, rowsPerPage = 10, currentPage = 1, totalPages = 1 }) {
  return (
    // Pagination bar - sits at the bottom of the content area
    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-white text-xs text-gray-600">
      
      {/* LEFT: Total row count */}
      <span className="font-medium">{totalRows} rows</span>

      {/* RIGHT GROUP: Rows per page + page info + nav buttons */}
      <div className="flex items-center gap-4">
        
        {/* Rows per page selector */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Rows per page</span>
          <select
            className="border border-gray-200 rounded px-2 py-0.5 text-xs text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500"
            defaultValue={rowsPerPage}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        {/* Page info text */}
        <span className="text-gray-500">
          page <span className="font-semibold text-gray-700">{currentPage}</span> of{' '}
          <span className="font-semibold text-gray-700">{totalPages}</span>
        </span>

        {/* Navigation arrow buttons */}
        <div className="flex items-center gap-1">
          {/* First page */}
          <button
            className="p-1 rounded border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-colors"
            disabled={currentPage === 1}
            aria-label="First page"
          >
            <ChevronsLeft size={13} />
          </button>

          {/* Previous page */}
          <button
            className="p-1 rounded border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-colors"
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft size={13} />
          </button>

          {/* Next page */}
          <button
            className="p-1 rounded border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-colors"
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight size={13} />
          </button>

          {/* Last page */}
          <button
            className="p-1 rounded border border-gray-200 text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-colors"
            disabled={currentPage === totalPages}
            aria-label="Last page"
          >
            <ChevronsRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
