# Teeldear - Claude Code Guidelines

## Project Overview

Teeldear is a centralised dashboard for software engineers to manage and oversee their daily work. It aggregates information from GitHub, AWS, Kubernetes, Datadog, and internal task management.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

---

## Architecture

### File Structure

The codebase is **page-centric**. Follow these rules strictly:

```
src/
├── components/           # Shared components used across multiple pages
│   └── [ComponentName]/
│       ├── [ComponentName].tsx
│       ├── index.ts
│       ├── types.ts      # If component has its own types
│       └── data.ts       # If component has static data
│
├── pages/
│   └── [PageName]/
│       ├── [PageName].tsx
│       ├── index.ts
│       ├── types.ts      # All types for this page
│       ├── data.ts       # All static/mock data for this page
│       └── components/   # Components ONLY used within this page
│           └── [ComponentName]/
│               ├── [ComponentName].tsx
│               └── index.ts
```

### Rules

1. **ONE component per file** - Never define multiple components in a single file
2. **Static data** → `data.ts` - Export from a local data file
3. **Types** → `types.ts` - Keep types in dedicated type files
4. **Page-specific components** → `pages/[PageName]/components/` - If a component is only used within one page, it lives under that page's directory
5. **Shared components** → `src/components/` - Only components used across multiple pages go here

---

## Design System

### Visual Style: Neobrutalist

The app uses a **neobrutalist** design aesthetic characterised by:
- Bold black borders
- Hard drop shadows
- High contrast colours
- Uppercase headers
- Monospace font
- No rounded corners on main containers (subtle rounding on inner elements only)

### Core Design Tokens

#### Borders
```css
/* Primary borders - cards, panels, major containers */
border-4 border-black

/* Secondary borders - inner elements, list items */
border-2 border-black

/* Dividers within cards */
border-b-4 border-black  /* for headers */
border-b-2 border-zinc-200  /* for content dividers */
```

#### Shadows
```css
/* Standard shadow for cards */
shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]

/* Hover state - lift effect */
hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]

/* Modal/expanded state */
shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]

/* Small elements (buttons, badges) */
shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
```

#### Backgrounds
```css
/* App background */
bg-zinc-800

/* Card/panel backgrounds */
bg-white

/* Content area backgrounds */
bg-zinc-50

/* Sidebar/panel chrome */
bg-zinc-100
```

#### Typography
```css
/* Font family - set on root */
font-mono

/* Card headers */
text-base font-black uppercase tracking-wide text-white

/* Body text */
text-sm font-bold text-zinc-900

/* Secondary text */
text-xs text-zinc-600

/* Labels */
text-xs font-bold uppercase text-zinc-600
```

### Colour Palette

#### Status Colours
```css
/* Green - healthy/approved/on-track */
bg-emerald-400 border-emerald-600  /* badges */
bg-emerald-500                      /* bars, fills */
bg-emerald-100 border-emerald-300 text-emerald-700  /* light badges */

/* Yellow - warning/pending/at-risk */
bg-yellow-400 border-yellow-600
bg-yellow-500
bg-yellow-100 border-yellow-300 text-yellow-700

/* Red - error/blocked/failed */
bg-red-400 border-red-600
bg-red-500
bg-red-100 border-red-300 text-red-700
```

#### Accent Colours (for card headers)
```css
bg-violet-500   /* Primary - Tasks, Calendar */
bg-zinc-800     /* GitHub */
bg-orange-500   /* AWS */
bg-blue-600     /* Kubernetes */
bg-purple-600   /* Datadog */
bg-zinc-700     /* Neutral/secondary headers */
bg-cyan-500     /* Helping */
bg-pink-500     /* Meetings */
bg-emerald-500  /* PRs */
```

### Component Patterns

#### Card Structure
```tsx
<div className="flex flex-col border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
  {/* Header */}
  <div className="flex items-center gap-2 border-b-4 border-black bg-violet-500 px-4 py-3">
    <Icon size={20} className="text-white" strokeWidth={3} />
    <h3 className="text-base font-black uppercase tracking-wide text-white">
      Title
    </h3>
  </div>
  {/* Content */}
  <div className="bg-zinc-50 p-4">
    {children}
  </div>
</div>
```

#### Interactive List Item
```tsx
<div className="flex items-center border-2 border-black bg-white rounded-lg overflow-hidden transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
  {/* Content */}
</div>
```

#### Status Badge (light variant)
```tsx
<span className="rounded border bg-emerald-100 border-emerald-300 px-2 py-0.5 text-xs font-bold text-emerald-700">
  Label
</span>
```

#### Status Badge (solid variant)
```tsx
<div className="flex h-7 w-7 items-center justify-center border-2 text-xs font-black text-black bg-emerald-400 border-emerald-600">
  3
</div>
```

#### Buttons
```tsx
{/* Icon button */}
<button className="flex h-8 w-8 items-center justify-center border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
  <X size={18} strokeWidth={3} />
</button>
```

#### Progress Bar
```tsx
<div className="h-2 w-full rounded-full bg-zinc-200 border border-black">
  <div
    className="h-full rounded-full bg-emerald-500"
    style={{ width: '67%' }}
  />
</div>
```

### Layout Patterns

#### Two-Column Grid (Dashboard)
```tsx
<div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
  {/* Cards */}
</div>
```

#### Stacked Layout (Tasks)
```tsx
<div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 w-full h-full">
  {/* Top section - auto height */}
  {/* Bottom section - fills remaining space */}
</div>
```

#### Collapsible Sidebar
```tsx
<aside className={`relative flex h-full flex-col border-r-4 border-black bg-zinc-100 transition-all duration-300 ${
  collapsed ? 'w-16' : 'w-56'
}`}>
  {/* Toggle button positioned outside */}
  <button className="absolute -right-3 top-20 ...">
    <ChevronIcon />
  </button>
</aside>
```

### Animation Guidelines

- **Duration**: 300ms for most transitions
- **Easing**: `ease-out` for expansions, default for hovers
- **Hover lift**: `translate-x-[-2px] translate-y-[-2px]` with shadow
- **Expand animations**: Capture element rect, animate from original position to final position using CSS transitions

### Icon Usage

- **Size**: 14-20px depending on context
- **Stroke width**: 2.5-3 for bold appearance
- **Colours**: White on coloured backgrounds, `text-zinc-500/600` on light backgrounds

---

## Best Practices

1. **Consistency over creativity** - Follow established patterns, don't introduce new design elements without updating this guide
2. **Contrast matters** - Avoid light text on light backgrounds; use `text-zinc-600` minimum for readable text
3. **Interactive feedback** - All clickable elements should have hover states with the lift animation
4. **Spacing** - Use `gap-4` between cards, `p-4` for card content, `gap-2` for tight groups
5. **Keep it bold** - When in doubt, use heavier weights and stronger borders
