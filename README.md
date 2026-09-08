# SpendWise Dashboard - Week 4 Assignment

## Project Overview
A modern, responsive financial dashboard built as part of the Web Development Fundamentals course. This project demonstrates mastery of CSS Grid, Flexbox, CSS Custom Properties, and responsive design techniques.

## Features

### 1. Dashboard Layout
- **Sidebar Navigation** with active state indicators
- **Main Content Area** with header, summary stats, and category cards
- Built using **CSS Grid** for the overall page layout

### 2. Modern Layout Techniques
- **CSS Grid**: Used for the main dashboard layout (sidebar + main content)
- **Flexbox**: Used inside the sidebar, header, summary stats, and individual cards
- No absolute positioning used for layout

### 3. CSS Custom Properties (Theme)
All colors are defined as CSS variables on `:root`:
- `--brand-primary`: #1a3c34
- `--brand-accent`: #52b788
- `--bg-surface`: #ffffff
- `--bg-page`: #f0f4f3
- `--text-primary`: #1e293b
- `--text-secondary`: #64748b

### 4. Responsive Design
- **Desktop**: Sidebar + main content (grid layout)
- **Tablet/Mobile (< 768px)**: Collapses to a single-column layout
- Verified using DevTools Device Toolbar

### 5. Card Micro-interactions
- Subtle **hover** and **focus** states on category cards
- Uses `transform: translateY(-6px)` and `box-shadow`
- Transition duration: **250ms** (within the 250ms requirement)
- Keyboard accessible with `tabindex="0"`

### 6. Dark Theme (Stretch Goal)
- Automatically adapts to system preference using `@media (prefers-color-scheme: dark)`
- Overrides CSS variables for a seamless dark experience

## Category Cards
Six spending categories with realistic financial data:
1. **Food** - $680.00 (28%)
2. **Transport** - $320.50 (13%)
3. **Rent** - $850.00 (36%)
4. **Entertainment** - $215.00 (9%)
5. **Savings** - $200.00 (8%)
6. **Utilities** - $80.00 (3%)

## Technologies Used
- **HTML5** - Semantic structure
- **CSS3** - Grid, Flexbox, Custom Properties, Media Queries, Transitions
- **Google Fonts** - Inter
- **Font Awesome** - Icons
- **UI Avatars** - User profile image

## How to Run
1. Clone the repository
2. Open `index.html` in your browser
3. No server or build tools required

## File Structure