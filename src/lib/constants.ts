export const SITE_NAME = 'FinShastra';
export const SITE_URL = 'https://finshastra.in';
export const SITE_DESCRIPTION =
  'Your trusted guide to personal finance in India. Compare credit scores, personal loans, and credit cards from top banks.';

export const AUTHOR_DEFAULT = {
  name: 'FinShastra Editorial',
  avatar: '/images/authors/editorial.jpg',
  bio: 'Expert financial advisors helping Indians make smarter money decisions.',
  social: {
    twitter: 'https://twitter.com/finshastra',
    linkedin: 'https://linkedin.com/company/finshastra',
  },
};

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/finshastra',
  linkedin: 'https://linkedin.com/company/finshastra',
  facebook: 'https://facebook.com/finshastra',
  youtube: 'https://youtube.com/@finshastra',
  instagram: 'https://instagram.com/finshastra',
} as const;

export const NAVIGATION = [
  {
    label: 'Credit Score',
    href: '/credit-score',
    description: 'Check, improve, and understand your credit score',
    children: [
      { label: 'What is Credit Score?', href: '/credit-score' },
      { label: 'Check Credit Score Free', href: '/credit-score/check-credit-score-free' },
      { label: 'Improve Credit Score', href: '/credit-score/improve-cibil-score' },
      { label: 'CIBIL Score Range', href: '/credit-score' },
      { label: 'Credit Score Factors', href: '/credit-score' },
    ],
  },
  {
    label: 'Personal Loan',
    href: '/personal-loan',
    description: 'Find the best personal loan rates and offers',
    children: [
      { label: 'Best Personal Loans', href: '/personal-loan/best' },
      { label: 'Eligibility Criteria', href: '/personal-loan/personal-loan-eligibility' },
      { label: 'Documents Required', href: '/personal-loan' },
      { label: 'EMI Calculator', href: '/tools/emi-calculator' },
      { label: 'Top Banks', href: '/personal-loan/bank/hdfc-bank' },
    ],
  },
  {
    label: 'Credit Cards',
    href: '/credit-cards',
    description: 'Compare and choose the right credit card',
    children: [
      { label: 'Best Credit Cards', href: '/credit-cards/best' },
      { label: 'Compare Cards', href: '/compare/credit-cards/hdfc-bank-vs-icici-bank' },
      { label: 'Cashback Cards', href: '/credit-cards/best-cashback-credit-cards' },
      { label: 'Travel Cards', href: '/credit-cards' },
      { label: 'Reward Cards', href: '/credit-cards' },
    ],
  },
] as const;

export type NavigationItem = (typeof NAVIGATION)[number];
