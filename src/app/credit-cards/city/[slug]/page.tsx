import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQAccordion } from '@/components/seo/FAQAccordion';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { RelatedArticles } from '@/components/sections/RelatedArticles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Check, MapPin, CreditCard, Plane, Gift, Shield, Fuel } from '@/components/icons';
import { CITY_LIST } from '@/config/site';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/config/seo';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

function getCityBySlug(slug: string) {
  return CITY_LIST.find((c) => c.slug === slug) ?? null;
}

interface CityCardData {
  topCards: {
    name: string;
    type: string;
    annualFee: string;
    rewardRate: string;
    bestFor: string;
  }[];
  loungeAccess: string;
  fuelBenefits: string;
  coBrandCards: string[];
  faqs: { question: string; answer: string }[];
}

const CITY_CARDS_DATA: Record<string, CityCardData> = {
  mumbai: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Frequent flyers',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Dining & movies',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'HDFC MoneyBack+',
        type: 'Cashback',
        annualFee: '₹500',
        rewardRate: '2X on online',
        bestFor: 'Beginners',
      },
    ],
    loungeAccess:
      'Mumbai has Chhatrapati Shivaji Maharaj International Airport with 6 domestic and 4 international lounges. HDFC Infinia and Amex Platinum cards offer unlimited complimentary access.',
    fuelBenefits:
      'Mumbai residents can save 1-5% on fuel with dedicated cards like HPCL Axis Bank and Indian Oil Axis Bank cards. Fuel surcharge waiver is available on most premium cards.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'IRCTC SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Mumbai residents?',
        answer:
          'For Mumbai residents, the HDFC Infinia Metal Card is ideal for frequent travelers due to unlimited airport lounge access at both Mumbai airport terminals. For everyday spending, the Amazon Pay ICICI Card offers 5% cashback on Amazon purchases with no annual fee. The SBI Card ELITE is great for dining and entertainment with 10x reward points.',
      },
      {
        question: 'Do credit cards offer lounge access at Mumbai airport?',
        answer:
          'Yes, several premium credit cards offer complimentary lounge access at Chhatrapati Shivaji Maharaj International Airport. HDFC Infinia, Diners Club, and American Express Platinum cards offer unlimited access. SBI Card ELITE and Axis Bank Vistara cards offer 2-4 domestic lounge visits per quarter.',
      },
      {
        question: 'What is the best cashback credit card in Mumbai?',
        answer:
          'The Amazon Pay ICICI Credit Card is the best cashback card for Mumbai residents, offering 5% cashback on Amazon purchases, 2% on digital payments, and 1% on offline spending with zero annual fee. For online shopping enthusiasts, the Flipkart Axis Bank Card offers 5% cashback on Flipkart.',
      },
      {
        question: 'Are there any co-branded credit cards popular in Mumbai?',
        answer:
          'Yes, co-branded cards like the Tata Neu HDFC Card, MakeMyTrip ICICI Card, and IRCTC SBI Card are popular among Mumbai residents who frequently shop at Tata stores, travel via MakeMyTrip, or book train tickets. These cards offer enhanced rewards on their respective platforms.',
      },
      {
        question: 'How can I avoid credit card annual fees in Mumbai?',
        answer:
          'Many credit cards in Mumbai offer annual fee waivers on meeting minimum spend requirements. For example, the HDFC MoneyBack+ waives its ₹500 annual fee on ₹50,000 annual spend. The SBI Card ELITE waives its ₹4,999 fee on ₹10 lakh annual spend. Always check the fee waiver criteria before applying.',
      },
    ],
  },
  delhi: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Business travelers',
      },
      {
        name: 'American Express Platinum Charge',
        type: 'Travel',
        annualFee: '₹60,000',
        rewardRate: 'Membership rewards',
        bestFor: 'Premium lifestyle',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card PRIME',
        type: 'Rewards',
        annualFee: '₹2,999',
        rewardRate: '10x on select',
        bestFor: 'All-rounders',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
    ],
    loungeAccess:
      'Delhi NCR has Indira Gandhi International Airport with multiple terminals and over 10 lounges. Premium cards like HDFC Infinia, Diners Club Black, and Amex Platinum offer unlimited access at all terminals.',
    fuelBenefits:
      'Delhi residents benefit from several fuel credit cards. The HPCL Axis Bank Espresso Card offers 5% value back on fuel purchases. Most premium cards also offer 1% fuel surcharge waiver at all fuel stations.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'Yatra SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Delhi NCR residents?',
        answer:
          'For Delhi NCR residents, the HDFC Infinia is excellent for frequent flyers with its unlimited lounge access at IGI Airport. The American Express Platinum Charge is ideal for premium lifestyle seekers. For everyday use, the Amazon Pay ICICI Card offers the best cashback with zero annual fee.',
      },
      {
        question: 'Do credit cards offer lounge access at Delhi airport?',
        answer:
          'Yes, Delhi IGI Airport has over 10 lounges across Terminals 1, 2, and 3. HDFC Infinia, Diners Club, and Amex Platinum cards offer unlimited complimentary access. SBI Card ELITE and Axis Bank cards offer 2-4 quarterly visits.',
      },
      {
        question: 'What is the best credit card for online shopping in Delhi?',
        answer:
          'The Amazon Pay ICICI Card offers 5% cashback on Amazon, the Flipkart Axis Bank Card offers 5% on Flipkart, and the HDFC MoneyBack+ offers 2X reward points on all online spends. Choose based on your preferred shopping platform.',
      },
      {
        question: 'Are there special credit card benefits for government employees in Delhi?',
        answer:
          'Some banks offer special credit card terms for central and state government employees in Delhi. SBI Card PRIME and PNB RuPay Platinum cards offer special benefits for government sector employees, including lower interest rates and exclusive reward structures.',
      },
    ],
  },
  bangalore: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Tech professionals',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'IT professionals',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Foodies',
      },
      {
        name: 'HDFC MoneyBack+',
        type: 'Cashback',
        annualFee: '₹500',
        rewardRate: '2X on online',
        bestFor: 'Beginners',
      },
    ],
    loungeAccess:
      'Bangalore Kempegowda Airport has dedicated lounges for premium cardholders. HDFC Infinia and Diners Club offer unlimited access. IT professionals traveling frequently benefit from lounge access on both domestic and international routes.',
    fuelBenefits:
      'Bangalore fuel cards like HPCL Axis Bank offer 5% value back. With high fuel costs in the city, using a fuel card can save ₹500-1000 monthly for regular commuters.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'Flipkart Axis Card'],
    faqs: [
      {
        question: 'Which credit card is best for IT professionals in Bangalore?',
        answer:
          'IT professionals in Bangalore prefer the HDFC Infinia for its travel benefits and lounge access during frequent business trips. The Amazon Pay ICICI Card is popular for its zero annual fee and 5% Amazon cashback. Many tech employees also use the Flipkart Axis Bank Card for online shopping.',
      },
      {
        question: 'Do credit cards offer lounge access at Bangalore airport?',
        answer:
          'Yes, Bangalore airport has several lounges accessible with premium credit cards. HDFC Infinia, Diners Club, and Amex cards offer unlimited access. SBI and Axis Bank cards offer quarterly lounge visits.',
      },
      {
        question: 'What is the best credit card for daily commuting in Bangalore?',
        answer:
          'For daily commuting, fuel cards like HPCL Axis Bank Espresso Card offer 5% value back on fuel. Additionally, some cards offer cashback on metro recharges and Ola/Uber rides. The HDFC MoneyBack+ is a good all-purpose card for daily expenses.',
      },
    ],
  },
  hyderabad: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Frequent flyers',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Dining & movies',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'HDFC MoneyBack+',
        type: 'Cashback',
        annualFee: '₹500',
        rewardRate: '2X on online',
        bestFor: 'Beginners',
      },
    ],
    loungeAccess:
      'Rajiv Gandhi International Airport in Hyderabad has domestic and international lounges. HDFC Infinia and Diners Club cards offer complimentary access. IT corridor employees who travel to other metros benefit from lounge access.',
    fuelBenefits:
      'Hyderabad fuel cards offer 1-5% savings on fuel. The city expanding metro system also makes some cards with transit benefits valuable for daily commuters.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'IRCTC SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Hyderabad residents?',
        answer:
          'For Hyderabad residents, the HDFC Infinia Metal Card is excellent for its travel benefits and lounge access at RGIA. The Amazon Pay ICICI Card is popular among IT professionals for its cashback on online shopping with zero annual fee.',
      },
      {
        question: 'Do credit cards offer lounge access at Hyderabad airport?',
        answer:
          'Yes, Rajiv Gandhi International Airport has lounges accessible with premium credit cards like HDFC Infinia, Diners Club, and American Express. Most premium cards offer unlimited or quarterly complimentary access.',
      },
    ],
  },
  chennai: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Business travelers',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Dining lovers',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'HDFC MoneyBack+',
        type: 'Cashback',
        annualFee: '₹500',
        rewardRate: '2X on online',
        bestFor: 'Beginners',
      },
    ],
    loungeAccess:
      'Chennai Airport has domestic and international lounges. HDFC Infinia and Diners Club offer complimentary access. For manufacturing sector employees who travel to other cities, lounge access is a valuable perk.',
    fuelBenefits:
      'Chennai fuel cards offer 1-5% savings. The city growing metro network also makes transit-focused credit cards valuable for daily commuters.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'IRCTC SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Chennai residents?',
        answer:
          'For Chennai residents, the HDFC Infinia is great for frequent travelers. The Amazon Pay ICICI Card is ideal for online shopping with zero annual fee. The SBI Card ELITE is popular for dining and entertainment benefits.',
      },
      {
        question: 'Do credit cards offer lounge access at Chennai airport?',
        answer:
          'Yes, Chennai Airport has domestic and international lounges accessible with premium credit cards. HDFC Infinia and Diners Club cards offer complimentary access.',
      },
    ],
  },
  kolkata: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Frequent flyers',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Dining & movies',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'HDFC MoneyBack+',
        type: 'Cashback',
        annualFee: '₹500',
        rewardRate: '2X on online',
        bestFor: 'Beginners',
      },
    ],
    loungeAccess:
      'Netaji Subhas Chandra Bose International Airport in Kolkata has domestic lounges. HDFC Infinia and Diners Club offer complimentary access for frequent travelers.',
    fuelBenefits:
      'Kolkata fuel cards offer 1-5% savings on fuel. For those commuting daily, fuel cards can provide significant monthly savings.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'IRCTC SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Kolkata residents?',
        answer:
          'For Kolkata residents, the HDFC Infinia is excellent for travel benefits. The Amazon Pay ICICI Card offers great cashback with zero annual fee. The SBI Card ELITE is popular for dining and entertainment.',
      },
      {
        question: 'Do credit cards offer lounge access at Kolkata airport?',
        answer:
          'Yes, Kolkata airport has domestic lounges accessible with premium credit cards. HDFC Infinia and Diners Club cards offer complimentary access.',
      },
    ],
  },
  pune: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'IT professionals',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Foodies',
      },
      {
        name: 'HDFC MoneyBack+',
        type: 'Cashback',
        annualFee: '₹500',
        rewardRate: '2X on online',
        bestFor: 'Beginners',
      },
    ],
    loungeAccess:
      'Pune Airport has domestic lounges. IT professionals who frequently travel to Mumbai and Bangalore benefit from credit cards with lounge access at connecting airports.',
    fuelBenefits:
      'Pune fuel cards offer 1-5% savings. The expanding metro and ring road make fuel cards valuable for daily commuters.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'Flipkart Axis Card'],
    faqs: [
      {
        question: 'Which credit card is best for Pune residents?',
        answer:
          'For Pune IT professionals, the HDFC Infinia is ideal for travel benefits. The Amazon Pay ICICI Card offers excellent cashback with zero annual fee. The Flipkart Axis Bank Card is great for online shopping.',
      },
    ],
  },
  ahmedabad: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Business travelers',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Dining & movies',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'Bank of Baroda Prime Card',
        type: 'Cashback',
        annualFee: '₹500',
        rewardRate: '1% on all',
        bestFor: 'Business owners',
      },
    ],
    loungeAccess:
      'Sardar Vallabhbhai Patel International Airport has domestic and international lounges. Premium cards offer complimentary access for frequent business travelers.',
    fuelBenefits:
      'Ahmedabad fuel cards offer 1-5% savings. Business owners who travel frequently within Gujarat benefit from fuel rewards.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'IRCTC SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Ahmedabad residents?',
        answer:
          'For Ahmedabad business owners, the HDFC Infinia is excellent for travel. The Amazon Pay ICICI Card offers great cashback. Bank of Baroda cards are popular among local business owners for their competitive rates.',
      },
    ],
  },
  jaipur: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Business travelers',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Dining & movies',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'PNB RuPay Platinum',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '1% on all',
        bestFor: 'PSU employees',
      },
    ],
    loungeAccess:
      'Jaipur Airport has domestic lounges. Premium credit cards offer complimentary access for travelers visiting Jaipur for business.',
    fuelBenefits:
      'Jaipur fuel cards offer 1-5% savings. For those traveling within Rajasthan, fuel cards provide significant benefits.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'IRCTC SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Jaipur residents?',
        answer:
          'For Jaipur residents, the HDFC Infinia is great for business travelers. The Amazon Pay ICICI Card offers excellent cashback. PNB RuPay Platinum is popular among government employees.',
      },
    ],
  },
  lucknow: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Business travelers',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Dining & movies',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'PNB RuPay Platinum',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '1% on all',
        bestFor: 'Government employees',
      },
    ],
    loungeAccess:
      'Chaudhary Charan Singh Airport has domestic lounges. Premium cards offer complimentary access.',
    fuelBenefits: 'Lucknow fuel cards offer 1-5% savings on fuel purchases.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'IRCTC SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Lucknow residents?',
        answer:
          'For Lucknow residents, the HDFC Infinia is excellent for travel. The Amazon Pay ICICI Card offers great cashback with zero annual fee. PNB RuPay Platinum is popular among government employees in Lucknow.',
      },
    ],
  },
  chandigarh: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Frequent flyers',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Dining & movies',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'PNB RuPay Platinum',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '1% on all',
        bestFor: 'Government employees',
      },
    ],
    loungeAccess:
      'Chandigarh Airport has domestic lounges. Premium cards offer complimentary access for residents.',
    fuelBenefits: 'Chandigarh fuel cards offer 1-5% savings on fuel.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'IRCTC SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Chandigarh residents?',
        answer:
          'For Chandigarh residents, the HDFC Infinia is excellent for travel benefits. The Amazon Pay ICICI Card offers great cashback. PNB RuPay Platinum is popular among government employees in the Tricity area.',
      },
    ],
  },
  bhopal: {
    topCards: [
      {
        name: 'HDFC Infinia Metal Card',
        type: 'Travel',
        annualFee: '₹10,000',
        rewardRate: '5x on travel',
        bestFor: 'Business travelers',
      },
      {
        name: 'Amazon Pay ICICI Credit Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Amazon',
        bestFor: 'Online shoppers',
      },
      {
        name: 'SBI Card ELITE',
        type: 'Rewards',
        annualFee: '₹4,999',
        rewardRate: '10x on dining',
        bestFor: 'Dining & movies',
      },
      {
        name: 'Flipkart Axis Bank Card',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '5% on Flipkart',
        bestFor: 'E-commerce',
      },
      {
        name: 'PNB RuPay Platinum',
        type: 'Cashback',
        annualFee: '₹0',
        rewardRate: '1% on all',
        bestFor: 'Government employees',
      },
    ],
    loungeAccess:
      'Raja Bhoj Airport has domestic lounges. Premium cards offer complimentary access.',
    fuelBenefits: 'Bhopal fuel cards offer 1-5% savings on fuel purchases.',
    coBrandCards: ['Tata Neu HDFC Card', 'MakeMyTrip ICICI Card', 'IRCTC SBI Card'],
    faqs: [
      {
        question: 'Which credit card is best for Bhopal residents?',
        answer:
          'For Bhopal residents, the HDFC Infinia is great for business travelers. The Amazon Pay ICICI Card offers excellent cashback with zero annual fee. PNB RuPay Platinum is popular among state government employees.',
      },
    ],
  },
};

export function generateStaticParams() {
  return CITY_LIST.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `Best Credit Cards in ${city.name} 2026 — Compare Top Cards & Apply Online`,
    description: `Find the best credit cards in ${city.name} for 2026. Compare cashback, travel, and rewards cards from HDFC, ICICI, SBI and more. Apply online.`,
    alternates: {
      canonical: `${SITE_URL}/credit-cards/city/${slug}`,
    },
    openGraph: {
      title: `Best Credit Cards in ${city.name} 2026`,
      description: `Find the best credit cards in ${city.name}. Compare top cards and apply online.`,
      url: `${SITE_URL}/credit-cards/city/${slug}`,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_IN',
    },
  };
}

export default async function CityCreditCardsPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const cityData = CITY_CARDS_DATA[slug] || CITY_CARDS_DATA.mumbai;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Credit Cards', href: '/credit-cards' },
    { label: 'City', href: '/credit-cards/city' },
    { label: city.name, href: `/credit-cards/city/${slug}` },
  ];

  const relatedArticles = [
    {
      title: `Best Cashback Credit Cards in ${city.name}`,
      slug: `best-cashback-cards-${slug}`,
      excerpt: `Earn money back on every swipe. Top cashback credit cards for ${city.name} residents with detailed comparison.`,
      category: 'Credit Cards',
      coverImage: '/images/articles/cashback-cards.jpg',
    },
    {
      title: `Personal Loan Interest Rates in ${city.name}`,
      slug: `personal-loan-rates-${slug}`,
      excerpt: `Compare personal loan interest rates from top banks in ${city.name}. Updated for 2026.`,
      category: 'Personal Loan',
      coverImage: '/images/articles/personal-loan-rates.jpg',
    },
    {
      title: `How to Improve Your Credit Score in ${city.name}`,
      slug: `improve-credit-score-${slug}`,
      excerpt: `Practical tips to improve your CIBIL score in ${city.name}. Local financial advisors share strategies.`,
      category: 'Credit Score',
      coverImage: '/images/articles/improve-cibil-score.jpg',
    },
  ];

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <JsonLd schema={generateBreadcrumbSchema(breadcrumbs)} />

        {/* Hero Section */}
        <section className="mb-12">
          <div className="text-text-secondary flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>
              {city.name}, {city.state}
            </span>
          </div>
          <Badge className="mt-2 mb-4">Credit Cards</Badge>
          <h1 className="text-text-primary text-4xl font-bold">Best Credit Cards in {city.name}</h1>
          <p className="text-text-secondary mt-4 max-w-3xl text-lg">
            Discover the best credit cards for {city.name} residents. Compare cashback, travel, and
            rewards cards from top banks like HDFC, ICICI, SBI, and Axis Bank. Choose the right card
            for your spending pattern and lifestyle in {city.name}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#top-cards">View Top Cards</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/credit-cards/best">All Credit Cards</Link>
            </Button>
          </div>
        </section>

        {/* Top Cards */}
        <section className="mb-12" id="top-cards">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Top Credit Cards for {city.name} Residents
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cityData.topCards.map((card, index) => (
              <Card key={card.name} className="flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={index === 0 ? 'default' : 'secondary'} className="text-xs">
                      {card.type}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{(5 - index * 0.2).toFixed(1)}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{card.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="mb-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Annual Fee</span>
                      <span
                        className={`font-medium ${card.annualFee === '₹0' ? 'text-green-600' : 'text-text-primary'}`}
                      >
                        {card.annualFee}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Reward Rate</span>
                      <span className="font-medium text-emerald-600">{card.rewardRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Best For</span>
                      <span className="font-medium">{card.bestFor}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/credit-cards/best">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Credit Card Features Comparison for {city.name}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-bg-secondary border-b">
                  <th className="text-text-primary p-3 text-left font-semibold">Card</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Type</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Annual Fee</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Reward Rate</th>
                  <th className="text-text-primary p-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {cityData.topCards.map((card) => (
                  <tr key={card.name} className="border-b hover:bg-gray-50">
                    <td className="text-text-primary p-3 font-medium">{card.name}</td>
                    <td className="p-3">
                      <Badge variant="secondary" className="text-xs">
                        {card.type}
                      </Badge>
                    </td>
                    <td
                      className={`p-3 font-medium ${card.annualFee === '₹0' ? 'text-green-600' : ''}`}
                    >
                      {card.annualFee}
                    </td>
                    <td className="p-3 font-medium text-emerald-600">{card.rewardRate}</td>
                    <td className="p-3">{card.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* City-Specific Benefits */}
        <section className="mb-12 rounded-xl bg-emerald-50 p-8">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            Credit Card Benefits in {city.name}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <Plane className="mb-3 h-8 w-8 text-emerald-600" />
                <h3 className="text-text-primary mb-2 font-semibold">Airport Lounge Access</h3>
                <p className="text-text-secondary text-sm">{cityData.loungeAccess}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Fuel className="mb-3 h-8 w-8 text-emerald-600" />
                <h3 className="text-text-primary mb-2 font-semibold">Fuel Benefits</h3>
                <p className="text-text-secondary text-sm">{cityData.fuelBenefits}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Gift className="mb-3 h-8 w-8 text-emerald-600" />
                <h3 className="text-text-primary mb-2 font-semibold">Co-Branded Cards</h3>
                <p className="text-text-secondary text-sm">
                  Popular co-branded cards in {city.name}: {cityData.coBrandCards.join(', ')}. These
                  cards offer enhanced rewards on specific platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-12">
          <h2 className="text-text-primary mb-6 text-3xl font-bold">
            How to Choose the Right Credit Card in {city.name}
          </h2>
          <div className="prose text-text-secondary max-w-none">
            <p>
              Choosing the right credit card in {city.name} depends on your spending pattern,
              lifestyle, and financial goals. Here is a step-by-step guide to help you make the best
              decision:
            </p>
            <p>
              <strong>Analyze Your Monthly Spending:</strong> Start by tracking your expenses for
              2-3 months. If you spend heavily on groceries and fuel, a cashback card with
              category-specific bonuses will save you more. If you travel frequently within India or
              internationally, a travel card with lounge access and air miles is more valuable.
            </p>
            <p>
              <strong>Consider the Total Cost of Ownership:</strong> A card with a ₹5,000 annual fee
              might be worth it if you will use ₹8,000 worth of benefits it provides. But if you
              will never use those benefits, a lifetime free card with 1.5% cashback on everything
              is a better deal for most {city.name} residents.
            </p>
            <p>
              <strong>Check Acceptance in {city.name}:</strong> Ensure the card is widely accepted
              at merchants, restaurants, and fuel stations in {city.name}. Visa and Mastercard have
              the widest acceptance, followed by RuPay cards at local establishments.
            </p>
            <p>
              <strong>Look for Welcome Benefits:</strong> Many cards offer bonus points, vouchers,
              or cashback when you spend a certain amount in the first 90 days. If you have planned
              large purchases, timing your card application can maximize these benefits.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <JsonLd schema={generateFAQSchema(cityData.faqs)} />
        <FAQAccordion faqs={cityData.faqs} />

        {/* Related Articles */}
        <RelatedArticles articles={relatedArticles} />

        {/* Newsletter */}
        <div className="py-12">
          <NewsletterSignup />
        </div>
      </main>
    </>
  );
}
