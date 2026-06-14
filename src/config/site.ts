import type { ProgrammaticPageConfig, BankListItem, City } from '@/types';
import { NAVIGATION } from '@/lib/constants';

export const VERTICALS_CONFIG = {
  creditScore: {
    title: 'Credit Score',
    description: 'Check, improve, and understand your credit score',
    basePath: '/credit-score',
    image: '/images/verticals/credit-score.jpg',
  },
  personalLoan: {
    title: 'Personal Loan',
    description: 'Find the best personal loan rates and offers',
    basePath: '/personal-loan',
    image: '/images/verticals/personal-loan.jpg',
  },
  creditCards: {
    title: 'Credit Cards',
    description: 'Compare and choose the right credit card',
    basePath: '/credit-cards',
    image: '/images/verticals/credit-cards.jpg',
  },
} as const;

export const PROGRAMMATIC_PAGES: ProgrammaticPageConfig[] = [
  {
    title: 'Best Personal Loan Interest Rates',
    description: 'Compare personal loan interest rates from top banks in India',
    template: 'personal-loan-rates',
    basePath: '/personal-loan/banks',
  },
  {
    title: 'Best Credit Cards in India',
    description: 'Compare and find the best credit cards for your needs',
    template: 'credit-card-listing',
    basePath: '/credit-cards/listing',
  },
  {
    title: 'Personal Loan EMI Calculator',
    description: 'Calculate your personal loan EMI easily',
    template: 'emi-calculator',
    basePath: '/calculators/emi',
  },
  {
    title: 'Home Loan EMI Calculator',
    description: 'Calculate your home loan EMI easily',
    template: 'emi-calculator',
    basePath: '/calculators/home-loan-emi',
  },
  {
    title: 'Credit Score Check',
    description: 'Check your credit score for free',
    template: 'credit-score-check',
    basePath: '/credit-score/check',
  },
];

export const BANK_LIST: BankListItem[] = [
  { name: 'HDFC Bank', slug: 'hdfc-bank', logo: '/images/banks/hdfc.svg', rating: 4.5 },
  { name: 'ICICI Bank', slug: 'icici-bank', logo: '/images/banks/icici.svg', rating: 4.4 },
  { name: 'SBI', slug: 'sbi', logo: '/images/banks/sbi.svg', rating: 4.3 },
  { name: 'Axis Bank', slug: 'axis-bank', logo: '/images/banks/axis.svg', rating: 4.2 },
  {
    name: 'Kotak Mahindra Bank',
    slug: 'kotak-mahindra-bank',
    logo: '/images/banks/kotak.svg',
    rating: 4.1,
  },
  { name: 'Punjab National Bank', slug: 'pnb', logo: '/images/banks/pnb.svg', rating: 4.0 },
  { name: 'Bank of Baroda', slug: 'bank-of-baroda', logo: '/images/banks/bob.svg', rating: 3.9 },
  { name: 'Canara Bank', slug: 'canara-bank', logo: '/images/banks/canara.svg', rating: 3.8 },
  { name: 'IndusInd Bank', slug: 'indusind-bank', logo: '/images/banks/indusind.svg', rating: 4.0 },
  { name: 'Yes Bank', slug: 'yes-bank', logo: '/images/banks/yes.svg', rating: 3.7 },
];

export const CITY_LIST: City[] = [
  { name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra' },
  { name: 'Delhi', slug: 'delhi', state: 'Delhi' },
  { name: 'Bangalore', slug: 'bangalore', state: 'Karnataka' },
  { name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana' },
  { name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu' },
  { name: 'Kolkata', slug: 'kolkata', state: 'West Bengal' },
  { name: 'Pune', slug: 'pune', state: 'Maharashtra' },
  { name: 'Ahmedabad', slug: 'ahmedabad', state: 'Gujarat' },
  { name: 'Jaipur', slug: 'jaipur', state: 'Rajasthan' },
  { name: 'Lucknow', slug: 'lucknow', state: 'Uttar Pradesh' },
  { name: 'Chandigarh', slug: 'chandigarh', state: 'Chandigarh' },
  { name: 'Bhopal', slug: 'bhopal', state: 'Madhya Pradesh' },
];

export const SITE_CONFIG = {
  navigation: NAVIGATION,
  verticals: VERTICALS_CONFIG,
  programmaticPages: PROGRAMMATIC_PAGES,
  banks: BANK_LIST,
  cities: CITY_LIST,
} as const;
