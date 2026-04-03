# Knowledge Base UI — React Assignment

## What is this?

This is a frontend project built to replicate a Figma design for a Knowledge Base management tool called "Worcspace".
It was built using **React** and **Tailwind CSS**.

---

## What does it look like?

**Screen 1 — Knowledge Base Home:**
- A sidebar on the left with navigation links
- A top bar (header) with logo, search, and user info
- A grid of 6 "Knowledge Base" cards
- A pagination bar at the bottom

**Screen 2 — Create New Modal:**
- Opens when you click the "+ Create New" button
- A right-side sliding drawer/panel
- Form fields: Name, Description, Vector Store, LLM Embedding Model
- A "Create" button to submit

---

## Tech Stack

| Technology     | Purpose                            |
|----------------|------------------------------------|
| React          | UI framework (functional components + hooks) |
| Vite           | Fast dev server and build tool     |
| Tailwind CSS   | Utility-first CSS styling          |
| lucide-react   | Clean, consistent icons            |

---

## Folder Structure

```
src/
├── components/
│   ├── Header.jsx                   ← Top navigation bar
│   ├── Sidebar.jsx                  ← Left sidebar with nav links
│   ├── KnowledgeCard.jsx            ← Individual card for each KB entry
│   ├── KnowledgeBasePage.jsx        ← Main page content (cards + toolbar)
│   ├── CreateKnowledgeBaseModal.jsx ← Popup drawer form
│   └── Pagination.jsx               ← Bottom pagination bar
├── App.jsx                          ← Root layout: Header + Sidebar + Page
├── main.jsx                         ← React entry point
└── index.css                        ← Tailwind CSS import + global styles
```

---

## How to Run This Project

### Step 1 — Install dependencies

```bash
npm install
```

### Step 2 — Start the dev server

```bash
npm run dev
```

### Step 3 — Open in browser

Visit: http://localhost:5173

---

## How the Code is Organized 

### What is a Component?

Think of a component like a LEGO brick. Each component is a small piece of the UI:
- `Header.jsx` → the top bar
- `Sidebar.jsx` → the left navigation
- `KnowledgeCard.jsx` → one card in the grid

We combine these bricks in `App.jsx` to build the full page.

### What is State?

State is information that can change while the user is on the page.
In this project, we have **one piece of state**:

```jsx
const [isModalOpen, setIsModalOpen] = useState(false);
```

- `isModalOpen` → is `true` or `false`
- When user clicks "Create New" → we set it to `true` → the modal appears
- When user clicks "X" or "Create" → we set it to `false` → the modal disappears

### How does Tailwind CSS work?

Instead of writing separate CSS files, Tailwind lets you style directly in JSX:

```jsx
<button className="px-4 py-2 text-white rounded-md">
  Click me
</button>
```

- `px-4` = padding left/right
- `py-2` = padding top/bottom
- `text-white` = white text
- `rounded-md` = rounded corners

---

## Colors (from Figma)

| Name      | HEX       | Usage                                  |
|-----------|-----------|----------------------------------------|
| Primary   | `#4F46E5` | Buttons, active sidebar, focus rings   |
| Secondary | `#1E1B4B` | Header background                      |

---

## Key Design Decisions

1. **Right-side drawer modal** — matches the Figma exactly (not a centered popup)
2. **Backdrop overlay** — clicking outside the modal closes it (standard UX pattern)
3. **Controlled form** — All form inputs use React state, not uncontrolled refs
4. **Static sidebar** — Only "Knowledge Base" is active; other links are display-only
5. **Accessible markup** — Used `aria-label`, `aria-modal`, `role="dialog"` for screen readers

---

## Brand / Colors Reference

Primary Color:   #4F46E5 (indigo)
Secondary Color: #1E1B4B (dark navy)
