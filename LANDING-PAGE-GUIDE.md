# Luxury Landing Page – Section-by-Section Guide

## Overview

The redesigned landing page uses **Tailwind CSS** (CDN), **semantic HTML5**, and a **minimal luxury aesthetic** comparable to elite executive coaching sites. It is mobile-first, fully responsive, and optimized for conversions.

---

## Section Order & Layout

### 1. Sticky Navigation (Glassmorphism)
- **Structure:** `<header>` → `<nav>` with logo, links, dual CTAs
- **Design:** `backdrop-filter: blur(20px)`, semi-transparent white background
- **Elements:** Logo (serif), nav links (About, Programs, Podcast, Testimonials, Benefits, Contact), "Book a Call" (outline), "Apply Now" (gold fill)
- **Mobile:** Hamburger menu, full-width stacked links + CTAs
- **Accessibility:** `aria-label` on nav, `aria-label="Toggle menu"` on button

### 2. Hero Section
- **Structure:** `<section>` → `<article>` for content, image container
- **Design:** Full-width gradient (white → lilac → sand), radial overlay, large typography
- **Elements:** Eyebrow ("Energy Transformation Coach"), H1, subheadline, dual CTAs, badges, professional portrait with glow
- **Hierarchy:** H1 4xl–6xl, serif; body 18px
- **Mobile:** Vertical stack, image above text on small screens

### 3. Authority Stats (Animated Counters)
- **Structure:** `<section>` → 3× `<article>` stat cards
- **Design:** White cards, icon circles, border, hover shadow
- **Elements:** Instagram icon + "449K+" (animated), Podcast icon + "Podcast Host", Star icon + "Creator"
- **Animation:** Counter animates 0→449 when scrolled into view (IntersectionObserver)
- **Accessibility:** `aria-label` on section, `aria-hidden` on decorative icons

### 4. About Story
- **Structure:** `<section>` → 2-column grid (image + article)
- **Design:** Soft gradient background, image with decorative frame
- **Elements:** Portrait placeholder, H2, 3 paragraphs, "Read Full Story →" link
- **Tone:** Personal, authority-building, concise

### 5. Coaching Programs
- **Structure:** `<section>` → `<header>` + 3× `<article>` cards
- **Design:** Card layout; Quantum Leaders highlighted with gold border
- **Elements:** Icon + title + description + CTA per program
- **Programs:** Quantum Leaders (flagship), 1:1 Energy Coaching, Speaking & Workshops
- **CTA:** "Apply for Quantum Leaders" button below grid

### 6. Podcast Showcase
- **Structure:** `<section>` → 4× `<article>` episode cards
- **Design:** Aspect-ratio thumbnails, play icon, hover scale
- **Elements:** Gradient placeholder, episode title, "Watch on YouTube →"
- **Mobile:** 1–2 columns; horizontal scroll optional
- **CTA:** "View All Episodes" → podcast.html

### 7. Testimonials Carousel
- **Structure:** `<section>` → scrollable track with 3 testimonial cards
- **Design:** Snap scroll, avatar circles, quote cards
- **Elements:** Initial, name, role, quote text
- **UX:** Horizontal scroll (touch/swipe), snap points
- **Accessibility:** Semantic `<article>`, proper contrast

### 8. Transformation Benefits
- **Structure:** `<section>` → 4× `<article>` benefit cards
- **Design:** Icon + title + description, checkmark icons in gold circles
- **Benefits:** Speak with authority, Decide with clarity, Lead with presence, Attract aligned opportunities
- **Layout:** 2×2 grid on desktop, stacked on mobile

### 9. Final CTA
- **Structure:** `<section>` with purple background
- **Design:** Full-width brand purple, white text, dual CTAs
- **Elements:** H2, supporting copy, "Apply for Quantum Leaders" (gold), "DM on Instagram" (outline)
- **Contrast:** White on #5B51D8 meets 4.5:1+

### 10. Footer
- **Structure:** `<footer>` → logo, nav, copyright
- **Design:** Dark background (#111318), social icons (Instagram, YouTube), links
- **Elements:** Logo, Instagram/YouTube/Podcast/Email, copyright line

---

## Tailwind Structure

- **CDN:** `https://cdn.tailwindcss.com`
- **Config:** Custom colors (`brand-purple`, `brand-gold`, `brand-lilac`, etc.), fonts (Cormorant Garamond, DM Sans)
- **Utilities:** `max-w-7xl`, `px-4 sm:px-6 lg:px-8`, `py-20 lg:py-28`, `rounded-2xl`, `shadow-*`
- **Custom CSS:** `.glass`, `.gradient-hero`, `.gradient-soft`, `[data-reveal]`, `.line-clamp-2`

---

## UX Enhancements

| Feature | Implementation |
|---------|----------------|
| Sticky header | `fixed top-0` + `z-50` |
| Glassmorphism | `backdrop-filter: blur(20px)` |
| Scroll reveal | `IntersectionObserver` + `data-reveal` |
| Animated counter | `requestAnimationFrame` + ease-out |
| Smooth scroll | `scrollIntoView({ behavior: 'smooth' })` |
| Hover animations | `transition-all`, `hover:scale-110`, `hover:shadow-xl` |
| Touch-friendly | 44px+ tap targets, `py-4` buttons |

---

## Accessibility

- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Headings:** H1 (hero), H2 (section titles), H3 (cards)
- **Labels:** `aria-label` on nav, footer, buttons, links
- **Contrast:** Purple (#5B51D8) and ink (#111318) on white/lilac meet WCAG AA
- **Focus:** Tailwind focus states; add `focus-visible:ring-2` if needed

---

## Mobile Optimization

- **Breakpoints:** `sm:`, `md:`, `lg:` for responsive grids
- **Stacking:** Single column on mobile, 2–4 columns on desktop
- **Menu:** Hamburger → full-width nav with CTAs
- **Touch:** Snap scroll for testimonials, large buttons
- **Viewport:** `width=device-width, initial-scale=1.0`

---

## Files

- **index.html** – Landing page (Tailwind CDN)
- **landing.js** – Menu toggle, counter, scroll reveal, smooth scroll
- **about.html, program.html, podcast.html, contact.html** – Use `styles.css` (unchanged)
