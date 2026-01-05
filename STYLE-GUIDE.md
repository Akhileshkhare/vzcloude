# Verizon Brand Style Guide - Quick Reference

## 🎨 Color Palette

### Primary Colors
```
Verizon Red:     #EE0000  ████████
Dark Red (Hover): #CD040B  ████████
Black:           #000000  ████████
White:           #FFFFFF  ████████
```

### Secondary Colors
```
Light Background: #F6F6F6  ████████
Border Gray:      #D8DADA  ████████
Text Gray:        #6F7171  ████████
Alert Background: #FFF5F5  ████████
```

---

## 📝 Typography

### Font Stack
```css
font-family: 'Verizon NHG eDS', 'Verizon-NHG-eDS', 
             'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Font Sizes & Weights

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| **Page Heading** | 28px | 700 | #000000 |
| **Section Title** | 20px | 700 | #000000 |
| **Card Value** | 28px | 700 | #000000 |
| **Button Text** | 16px | 700 | #FFFFFF / #000000 |
| **Body Text** | 16px | 400 | #000000 |
| **Card Label** | 14px | 400 | #6F7171 |
| **Secondary Text** | 15px | 400 | #6F7171 |

---

## 🔘 Button Styles

### Primary Red Button
```css
Background:     #EE0000
Color:          #FFFFFF
Border Radius:  30px (pill)
Padding:        18px 32px
Min Height:     56px
Font Weight:    700
Shadow:         0 4px 12px rgba(238,0,0,0.3)

Hover:
  Background:   #CD040B
  Transform:    translateY(-2px)
  Shadow:       0 6px 20px rgba(238,0,0,0.4)

Active:
  Background:   #B00000
  Transform:    translateY(0)
```

**Use For**: Primary actions (Submit, Pay, Buy Now, Back Up)

### White Action Button
```css
Background:     #FFFFFF
Border:         2px solid #D8DADA
Border Radius:  8px
Padding:        20px 24px
Min Height:     64px
Color:          #000000
Font Weight:    600

Hover:
  Border:       2px solid #000000
  Transform:    translateY(-2px)
  Shadow:       0 4px 12px rgba(0,0,0,0.1)
```

**Use For**: Secondary actions (View Details, Manage, Settings)

---

## 📦 Card Components

### Standard Card
```css
Background:     #FFFFFF
Border:         2px solid transparent
Border Radius:  8px
Padding:        32px 20px
Min Height:     160px
Shadow:         0 2px 8px rgba(0,0,0,0.1)

Hover:
  Border:       2px solid #000000
  Transform:    translateY(-4px)
  Shadow:       0 4px 16px rgba(0,0,0,0.15)
```

**Layout**: 2-column grid with 16px gap

**Content Structure**:
```
┌─────────────────┐
│                 │
│      ICON       │  56px × 56px
│                 │
│   Value Text    │  28px, bold
│   Label Text    │  14px, gray
│                 │
└─────────────────┘
```

---

## 📋 Sections

### Status Section
```css
Background:     #FFFFFF
Border:         1px solid #D8DADA
Border Radius:  8px
Padding:        24px
Margin:         16px 20px
Shadow:         0 2px 8px rgba(0,0,0,0.08)
```

**Item Structure**:
```
Label:  Color #6F7171, 15px
Value:  Color #000000, 15px, weight 600
```

### Message/Alert Box
```css
Background:     #FFF5F5
Border Left:    4px solid #EE0000
Border Radius:  8px
Padding:        24px
Margin:         16px 20px
Shadow:         0 2px 8px rgba(238,0,0,0.1)
```

**Use For**: Alerts, warnings, important notices

---

## 🎯 Spacing System

### Standard Spacing Scale
```
Extra Small:  8px
Small:        12px
Medium:       16px
Large:        20px
Extra Large:  24px
XXL:          32px
```

### Common Patterns
```
Card Padding:           32px 20px
Button Padding:         18px 32px (primary)
                       20px 24px (action)
Section Margin:         16px 20px
Grid Gap:              16px
Icon Size:             56px (cards), 40px (buttons)
Touch Target:          Minimum 44px × 44px
```

---

## 🖼️ Image Guidelines

### Icon Sizes
```
Card Icons:        56px × 56px
Button Icons:      40px × 40px (action buttons)
Menu Icons:        36px × 36px
Header Icons:      22px × 22px
```

### Image Formats
- **SVG**: Preferred for icons and logos (scalable)
- **PNG**: For product images and photos
- **WebP**: Modern format for optimized loading

### Recommended Sources
```
Verizon Icons:  https://www.verizon.com/dam/icons/
Font Awesome:   https://fontawesome.com/
Material Icons: https://fonts.google.com/icons
```

---

## 📱 Header Component

```css
Background:     #FFFFFF
Border Bottom:  1px solid #D8DADA
Padding:        16px 20px
Position:       sticky, top: 0
Shadow:         0 2px 4px rgba(0,0,0,0.08)
Z-index:        100
```

**Layout Structure**:
```
┌─────────────────────────────────────┐
│ ←  [LOGO] Title          🔒  ⋮     │
└─────────────────────────────────────┘
   Back Logo  Text    Search Menu
```

---

## ✨ Animation & Transitions

### Standard Timing
```css
transition: all 0.3s ease;
```

### Common Animations

**Button Hover**:
```css
transform: translateY(-2px);
transition: all 0.3s ease;
```

**Card Hover**:
```css
transform: translateY(-4px);
transition: all 0.3s ease;
```

**Loading Spinner**:
```css
animation: spin 1s linear infinite;
```

---

## 🎭 States

### Loading State
```css
Background:     #FFFFFF
Text Color:     #6F7171
Spinner:        56px, border 4px
Spinner Color:  #EE0000 (top), #F6F6F6 (sides)
```

### Error State
```css
Background:     #FFFFFF
Title Color:    #EE0000
Text Color:     #000000
```

### Hover States
- **Cards**: Border → black, lift up
- **Buttons**: Darker background, lift up
- **Icons**: Opacity → 0.7

### Active States
- **Buttons**: Darker background, no lift
- **Cards**: Slight lift (less than hover)

---

## 📐 Layout Guidelines

### Container
```css
Width:          100%
Background:     #FFFFFF
Min Height:     100vh
```

### Content Width
```css
Mobile:         100% - 40px (20px padding each side)
Desktop:        Same (mobile-first design)
```

### Grid System
```
2-Column Grid:  For cards
1-Column:       For buttons, sections, messages
```

---

## ♿ Accessibility

### Color Contrast
- **Text on White**: Must be #000000 or #6F7171
- **White on Red**: Meets WCAG AA standards
- **Touch Targets**: Minimum 44px × 44px

### Font Legibility
- **Minimum Size**: 14px
- **Line Height**: 1.4 - 1.7
- **Font Weight**: 400 minimum for body text

---

## 📊 Responsive Breakpoints

```css
Mobile:     < 768px  (primary focus)
Tablet:     768px - 1024px
Desktop:    > 1024px
```

**Note**: This design is mobile-first. All measurements are optimized for mobile devices.

---

## 🔍 Shadow System

```css
Subtle:     0 2px 4px rgba(0,0,0,0.08)
Standard:   0 2px 8px rgba(0,0,0,0.1)
Medium:     0 4px 12px rgba(0,0,0,0.1)
Strong:     0 4px 16px rgba(0,0,0,0.15)
Red Shadow: 0 4px 12px rgba(238,0,0,0.3)
```

---

## ✅ Do's and Don'ts

### ✅ Do's
- Use Verizon red (#EE0000) for primary actions
- Maintain 44px minimum touch targets
- Use bold font weights for headings
- Include subtle shadows for depth
- Use pill-shaped buttons for primary actions
- Add hover effects to interactive elements

### ❌ Don'ts
- Don't use bright colors other than Verizon red
- Don't make touch targets smaller than 44px
- Don't use thin font weights (< 400)
- Don't use gradients
- Don't use rounded corners > 30px (except buttons)
- Don't animate excessively

---

## 🎯 Quick Copy-Paste

### CSS Variables (Optional Implementation)
```css
:root {
  --vz-red: #EE0000;
  --vz-dark-red: #CD040B;
  --vz-black: #000000;
  --vz-white: #FFFFFF;
  --vz-gray-light: #F6F6F6;
  --vz-gray-border: #D8DADA;
  --vz-gray-text: #6F7171;
  
  --vz-spacing-xs: 8px;
  --vz-spacing-sm: 12px;
  --vz-spacing-md: 16px;
  --vz-spacing-lg: 20px;
  --vz-spacing-xl: 24px;
  
  --vz-radius-sm: 8px;
  --vz-radius-pill: 30px;
  
  --vz-shadow-subtle: 0 2px 4px rgba(0,0,0,0.08);
  --vz-shadow-standard: 0 2px 8px rgba(0,0,0,0.1);
  --vz-shadow-medium: 0 4px 12px rgba(0,0,0,0.1);
}
```

---

**Last Updated**: January 3, 2026  
**Version**: 1.0  
**Brand**: Verizon Business
