# Calculator Page Specification

> **Version:** 2.0.0  
> **Last Updated:** 2026-06-14

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                              │
├─────────────────────────────────────────────────────────────┤
│                      BREADCRUMBS                            │
├─────────────────────────────────────────────────────────────┤
│                    CALCULATOR HEADER                        │
│                    (Title, Description)                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐  ┌─────────────────────────────┐  │
│  │   CALCULATOR FORM   │  │      RESULTS SECTION        │  │
│  │                     │  │                             │  │
│  │   - Input fields    │  │      - Calculated values    │  │
│  │   - Sliders         │  │      - Charts/graphs        │  │
│  │   - Dropdowns       │  │      - Breakdown table      │  │
│  │   - Calculate btn   │  │      - Share button         │  │
│  │                     │  │                             │  │
│  └─────────────────────┘  └─────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                    HOW IT WORKS                              │
├─────────────────────────────────────────────────────────────┤
│                    EXAMPLE SCENARIO                          │
├─────────────────────────────────────────────────────────────┤
│                       FAQ SECTION                           │
├─────────────────────────────────────────────────────────────┤
│                    RELATED ARTICLES                          │
├─────────────────────────────────────────────────────────────┤
│                         FOOTER                              │
└─────────────────────────────────────────────────────────────┘
```

## Calculator Form

### Requirements

| Element | Specification |
|---------|---------------|
| **Inputs** | Relevant input fields for calculation |
| **Validation** | Real-time validation with error messages |
| **Defaults** | Sensible default values |
| **Reset** | Reset button to clear all inputs |
| **Calculate** | Prominent calculate button |

### Input Types

| Type | Usage |
|------|-------|
| Number | For numeric values (loan amount, interest rate) |
| Slider | For ranges (tenure, interest rate) |
| Dropdown | For fixed options (bank, loan type) |
| Toggle | For yes/no options |

### Design Rules

- Labels always visible
- Placeholder text for guidance
- Error messages below inputs
- Mobile: Single column
- Desktop: Side-by-side with results

## Results Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Values** | Calculated results displayed prominently |
| **Charts** | Visual representation (pie chart, bar chart) |
| **Breakdown** | Detailed breakdown table |
| **Share** | Share results via link or social |
| **Save** | Save results (optional) |

### Design Rules

- Results update in real-time
- Clear visual hierarchy
- Highlight key values
- Mobile: Below form
- Desktop: Side-by-side with form

## How It Works Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Steps** | 3-5 steps explaining the calculation |
| **Icons** | Relevant icons for each step |
| **Text** | Brief description (2-3 sentences per step) |

## Example Scenario Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Example** | Real-world example with sample values |
| **Table** | Step-by-step breakdown |
| **Explanation** | How the calculation works |

## FAQ Section

### Requirements

| Element | Specification |
|---------|---------------|
| **Questions** | 3-5 common questions about the calculator |
| **Design** | Accordion-style expandable |
| **Schema** | FAQPage schema |

## SEO Requirements

| Element | Specification |
|---------|---------------|
| **Title** | "{Calculator Name} - Free Online Calculator | FinShastra" |
| **Meta Description** | 120-158 characters |
| **Schema** | SoftwareApplication, BreadcrumbList |
| **H1** | Calculator name |
| **Canonical** | Self-referencing |

## Performance Requirements

| Metric | Target |
|--------|--------|
| **Lighthouse** | >= 90 |
| **LCP** | < 2.5s |
| **CLS** | < 0.1 |
| **INP** | < 200ms |

## Accessibility Requirements

| Requirement | Specification |
|-------------|---------------|
| **Labels** | All inputs have visible labels |
| **Keyboard** | All controls keyboard accessible |
| **Screen Reader** | Results announced to screen readers |
| **Focus** | Visible focus indicators |
| **Errors** | Clear error messages |