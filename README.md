# SpendWise Dashboard - Week 4 Assignment

## Project Overview
A modern, responsive financial dashboard built with CSS Grid and Flexbox. This project demonstrates mastery of advanced CSS layout techniques, custom properties, and responsive design.

## Features

### 1. Dashboard Layout (CSS Grid)
- Sidebar navigation + main content area
- Clean, professional financial dashboard design

### 2. Layout Techniques
- **CSS Grid**: Overall page layout (`grid-template-columns: 250px 1fr`)
- **Flexbox**: Sidebar, header, stats, and cards
- No absolute positioning used

### 3. CSS Custom Properties
All colors defined on `:root`:
- `--brand-primary`: #1a3c34
- `--brand-accent`: #52b788
- `--bg-page`, `--bg-surface`, `--text-primary`, etc.

### 4. Responsive Design
- **Desktop**: Sidebar + main content
- **< 768px**: Single-column layout
- **< 480px**: Stacked cards

### 5. Micro-interactions
- Hover/focus on cards: `translateY(-6px)` + `box-shadow`
- Transition: **250ms** (meets requirement)

### 6. Dark Theme (Stretch Goal)
- Auto-adapts via `@media (prefers-color-scheme: dark)`

## Category Cards (8 categories)
1. Food - $680 (28%)
2. Transport - $320 (13%)
3. Rent - $850 (36%)
4. Entertainment - $215 (9%)
5. Savings - $200 (8%)
6. Utilities - $80 (3%)
7. Healthcare - $95 (4%)
8. Shopping - $150 (6%)

## Technologies
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties, Media Queries)
- Google Fonts (Inter)
- Font Awesome Icons
- UI Avatars

## How to Run
1. Clone the repository
2. Open `index.html` in your browser

## Grading Checklist
- ✅ CSS Grid for layout
- ✅ Flexbox for components
- ✅ CSS Variables on `:root`
- ✅ Responsive (< 768px)
- ✅ Micro-interactions (≤ 250ms)
- ✅ Dark theme (stretch goal)

