/**
 * KnowledgeCard Component
 * 
 * A reusable card that displays a single knowledge base entry.
 * Each card shows:
 *   - Title
 *   - Description text (truncated to 3 lines)
 *   - "Created On" date
 *   - A three-dot menu icon (⋮) for actions
 * 
 * Props:
 *   - title (string)      : The name of the knowledge base
 *   - description (string): Short text about the knowledge base
 *   - createdOn (string)  : Date string, e.g. "14/07/2025"
 */

import { MoreVertical } from 'lucide-react'; // Three-dot vertical menu icon

function KnowledgeCard({ title, description, createdOn }) {
  return (
    // Card container: white background, border, rounded corners, shadow on hover
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer">
      
      {/* ===== CARD HEADER: Title + Menu Icon ===== */}
      <div className="flex items-start justify-between">
        {/* Knowledge base name */}
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

        {/* Three-dot menu button - could open a dropdown in a full implementation */}
        <button
          className="text-gray-400 hover:text-gray-600 transition-colors p-0.5 rounded"
          aria-label="More options"
        >
          <MoreVertical size={16} />
        </button>
      </div>

      {/* ===== CARD BODY: Description ===== */}
      {/* line-clamp-3 limits text to 3 lines, with ellipsis overflow */}
      <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 flex-1">
        {description}
      </p>

      {/* ===== CARD FOOTER: Created On Date ===== */}
      <div className="mt-auto pt-2 border-t border-gray-100">
        <span className="text-gray-400 text-xs">
          Created On: <span className="font-medium text-gray-600">{createdOn}</span>
        </span>
      </div>
    </div>
  );
}

export default KnowledgeCard;
