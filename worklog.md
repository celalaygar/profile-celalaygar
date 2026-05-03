---
Task ID: 2
Agent: Main Agent
Task: Restructure site with separate pages and 4-item limit on home page, add Medium articles

Work Log:
- Added MediumArticle interface and 16 medium articles to data/index.ts
- Added translation keys for Medium section, View All buttons, page titles, Back to Home in both TR and EN
- Moved LanguageProvider from page.tsx to layout.tsx (shared across all pages)
- Updated Navbar with Next.js Link components pointing to /projects, /games, /interview, /medium, /#about, /#contact
- Added active state detection for nav items based on pathname
- Updated ProjectsSection, GamesSection, InterviewSection with optional `limit` prop
- Created MediumSection component with limit prop, BookOpen icons, 2-column layout
- Updated home page (page.tsx) to pass limit={4} to each section
- Created PageHeader component with back-to-home link, title, subtitle, gradient bar
- Created /projects/page.tsx, /games/page.tsx, /interview/page.tsx, /medium/page.tsx
- Each section shows "View All" button when limit is set and items exceed limit
- All pages tested: / returns 200, /projects 200, /games 200, /interview 200, /medium 200
- Lint passes clean

Stage Summary:
- Site restructured: home page shows 4 items per section with "View All" buttons
- 4 separate pages created: /projects, /games, /interview, /medium
- Medium articles section added with 16 articles
- PageHeader shared component with "Back to Home" navigation
- Navbar updated with links to all separate pages + active state
