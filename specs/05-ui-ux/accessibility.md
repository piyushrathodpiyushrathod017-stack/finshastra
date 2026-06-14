# Accessibility Standards

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Overview

FinShastra is committed to being accessible to all users, including those with disabilities. We follow WCAG 2.1 AA guidelines.

## WCAG 2.1 AA Requirements

### Perceivable

| Requirement | Specification |
|-------------|---------------|
| **Color Contrast** | 4.5:1 for normal text, 3:1 for large text |
| **Text Resizing** | Content readable up to 200% zoom |
| **Images** | Alt text on all images |
| **Video** | Captions for video content |
| **Audio** | Transcripts for audio content |

### Operable

| Requirement | Specification |
|-------------|---------------|
| **Keyboard** | All interactive elements keyboard accessible |
| **Focus** | Visible focus indicators on all interactive elements |
| **Navigation** | Skip navigation link at top of page |
| **Timing** | No time limits on content |
| **Seizures** | No content that flashes more than 3 times per second |

### Understandable

| Requirement | Specification |
|-------------|---------------|
| **Language** | Page language declared (lang="en") |
| **Labels** | All form inputs have associated labels |
| **Errors** | Clear, descriptive error messages |
| **Consistent** | Consistent navigation across pages |

### Robust

| Requirement | Specification |
|-------------|---------------|
| **Valid HTML** | Valid, well-formed HTML |
| **ARIA** | Proper ARIA attributes where needed |
| **Compatibility** | Works with assistive technologies |

## Component-Specific Requirements

### Forms

| Requirement | Specification |
|-------------|---------------|
| **Labels** | Every input has visible label |
| **Required** | Required fields marked with asterisk |
| **Errors** | Error messages below inputs |
| **Success** | Success messages for form submissions |

### Navigation

| Requirement | Specification |
|-------------|---------------|
| **Skip Link** | "Skip to main content" at top |
| **Keyboard** | All nav items keyboard accessible |
| **Focus** | Visible focus on nav items |
| **Mobile** | Hamburger menu keyboard accessible |

### Buttons

| Requirement | Specification |
|-------------|---------------|
| **Labels** | Clear, descriptive labels |
| **Keyboard** | Enter and Space activate buttons |
| **Focus** | Visible focus indicator |
| **Loading** | Loading state announced to screen readers |

### Images

| Requirement | Specification |
|-------------|---------------|
| **Alt Text** | Descriptive alt text on all images |
| **Decorative** | Empty alt for decorative images |
| **Complex** | Long descriptions for complex images |

### Tables

| Requirement | Specification |
|-------------|---------------|
| **Headers** | Proper header cells (th) |
| **Captions** | Table captions where needed |
| **Keyboard** | Navigable with keyboard |

### Modals

| Requirement | Specification |
|-------------|---------------|
| **Focus Trap** | Focus trapped within modal |
| **Close** | Escape key closes modal |
| **Return** | Focus returns to trigger element |
| **Labels** | Modal has accessible name |

## Testing

### Automated Testing

- Use axe-core for automated accessibility testing
- Run in CI/CD pipeline
- Fix all critical and serious issues

### Manual Testing

- Keyboard-only navigation testing
- Screen reader testing (NVDA, VoiceOver)
- Color contrast testing
- Zoom testing (up to 200%)

### Testing Checklist

- [ ] All pages keyboard navigable
- [ ] All interactive elements focusable
- [ ] Focus indicators visible
- [ ] All images have alt text
- [ ] All forms have labels
- [ ] Error messages clear
- [ ] Color contrast sufficient
- [ ] Content readable at 200% zoom
- [ ] Skip navigation link present
- [ ] Page language declared

## Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Missing alt text | Add descriptive alt text |
| Missing labels | Add associated labels |
| Poor contrast | Increase contrast ratio |
| Missing focus indicators | Add visible focus styles |
| Keyboard traps | Ensure all elements keyboard accessible |
| Missing skip link | Add skip navigation link |