import type {
  Author,
  Category,
  Article,
  FAQ,
  Bank,
  Comparison,
  ComparisonItem,
  ProgrammaticPage,
} from '@/types';

const now = new Date('2026-06-01T00:00:00Z');
const past = (days: number) => new Date(now.getTime() - days * 86400000);

export const MOCK_AUTHORS: Author[] = [
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    avatar: '/images/authors/priya-sharma.jpg',
    bio: 'Chartered Accountant with 12+ years of experience in banking and financial advisory. She specializes in credit management, tax planning, and personal finance strategies for Indian households.',
    email: 'priya@finshastra.in',
    social: {
      twitter: 'https://twitter.com/priyasharma_ca',
      linkedin: 'https://linkedin.com/in/priyasharma-ca',
    },
    createdAt: past(365),
    updatedAt: past(10),
  },
  {
    id: 'rahul-gupta',
    name: 'Rahul Gupta',
    avatar: '/images/authors/rahul-gupta.jpg',
    bio: 'MBA Finance from IIM Bangalore with over 8 years in fintech and consumer lending. Rahul focuses on breaking down complex financial products into simple, actionable advice.',
    email: 'rahul@finshastra.in',
    social: {
      twitter: 'https://twitter.com/rahulgupta_fin',
      linkedin: 'https://linkedin.com/in/rahulgupta-finance',
    },
    createdAt: past(300),
    updatedAt: past(5),
  },
];

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat-credit-score',
    name: 'Credit Score',
    slug: 'credit-score',
    description:
      'Everything you need to know about credit scores in India — how they work, how to check them for free, and proven strategies to improve your CIBIL score.',
    parentId: null,
    metaTitle: 'Credit Score Guide India 2026 — Check, Improve & Understand CIBIL Score',
    metaDescription:
      'Complete guide to credit scores in India. Learn how to check your CIBIL score for free, understand factors affecting it, and improve your credit score quickly.',
    createdAt: past(400),
    updatedAt: past(15),
  },
  {
    id: 'cat-personal-loan',
    name: 'Personal Loan',
    slug: 'personal-loan',
    description:
      'Compare personal loan interest rates, eligibility criteria, and documentation requirements from top banks in India. Use our EMI calculator to plan your loan.',
    parentId: null,
    metaTitle: 'Personal Loans in India 2026 — Best Rates, Eligibility & EMI Calculator',
    metaDescription:
      'Find the best personal loan rates in India. Compare offers from HDFC, ICICI, SBI and more. Check eligibility, documents required and calculate EMI online.',
    createdAt: past(400),
    updatedAt: past(12),
  },
  {
    id: 'cat-credit-cards',
    name: 'Credit Cards',
    slug: 'credit-cards',
    description:
      'Compare credit cards across categories — cashback, travel, rewards, and lifetime free. Find the best credit card for your spending pattern.',
    parentId: null,
    metaTitle: 'Best Credit Cards in India 2026 — Compare Cashback, Travel & Rewards',
    metaDescription:
      'Compare the best credit cards in India for 2026. Find top cashback, travel, and rewards credit cards from HDFC, ICICI, SBI and more.',
    createdAt: past(400),
    updatedAt: past(8),
  },
];

const CREDIT_SCORE_CONTENT = `<h2>What is a Credit Score and Why Does It Matter?</h2>
<p>A credit score is a three-digit number that represents your creditworthiness to lenders. In India, the most widely used credit score is the CIBIL score, which ranges from 300 to 900. This score is calculated by TransUnion CIBIL based on your credit history, including your repayment behavior, outstanding debts, credit utilization, and the length of your credit history.</p>
<p>Think of your credit score as your financial report card. Just as your academic grades determine your eligibility for college admissions, your credit score determines your eligibility for loans and credit cards. A higher score signals to lenders that you are a responsible borrower who is likely to repay debts on time.</p>
<p>In India, a score of 750 or above is generally considered excellent and makes you eligible for the best loan terms and credit card offers. Scores between 700 and 749 are considered good, while anything below 650 makes it significantly harder to get approved for credit products.</p>

<h2>How is Your Credit Score Calculated?</h2>
<p>CIBIL uses a proprietary algorithm that considers five key factors to calculate your credit score. Understanding these factors is the first step toward improving your score.</p>

<h3>1. Payment History (30%)</h3>
<p>Your repayment track record is the single most important factor. Even a single missed payment can drop your score by 50 to 100 points. Lenders want to see consistent, on-time payments across all your credit accounts — credit cards, home loans, personal loans, and any other EMIs.</p>
<p>Set up auto-debit or calendar reminders to ensure you never miss a payment date. If you have missed payments in the past, getting current on all accounts immediately is the fastest way to start rebuilding your score.</p>

<h3>2. Credit Utilization Ratio (25%)</h3>
<p>This is the percentage of your available credit limit that you are currently using. If your credit card has a limit of ₹2,00,000 and you have outstanding dues of ₹1,40,000, your utilization ratio is 70%, which is dangerously high.</p>
<p>Financial experts recommend keeping your credit utilization below 30% across all credit cards and combined across all cards. Ideally, keeping it under 10% will boost your score significantly. If your utilization is high, consider requesting a credit limit increase or spreading your expenses across multiple cards.</p>

<h3>3. Length of Credit History (20%)</h3>
<p>The longer your credit accounts have been active, the better it is for your score. This is why financial advisors often recommend keeping your oldest credit card active even if you rarely use it. A long credit history with a track record of responsible use gives lenders more data points to assess your reliability.</p>
<p>If you are just starting out, be patient. Your score will naturally improve as your credit accounts age. Avoid closing old accounts unless they carry high annual fees that do not justify their value.</p>

<h3>4. Credit Mix (15%)</h3>
<p>Lenders like to see that you can manage different types of credit responsibly. Having a healthy mix of secured loans (like home loan, car loan) and unsecured credit (like credit cards, personal loans) is beneficial for your score. However, do not take on unnecessary debt just to improve your credit mix.</p>

<h3>5. New Credit Inquiries (10%)</h3>
<p>Every time you apply for a loan or credit card, the lender makes a hard inquiry on your credit report. Too many hard inquiries in a short period can signal desperation and lower your score. Each hard inquiry can reduce your score by 5 to 10 points, and these inquiries remain on your report for two years.</p>
<p>Only apply for credit products that you genuinely need and are likely to be approved for. Pre-qualification checks typically do not impact your score.</p>

<h2>How to Check Your Credit Score for Free</h2>
<p>RBI mandates that every Indian citizen is entitled to one free credit report per year from each credit bureau. You can get your free CIBIL score from the official CIBIL website or through various fintech platforms like BankBazaar, Paisabazaar, and others that offer free score checks without any hidden charges.</p>
<p>To check your score, you will need to provide your PAN card number, date of birth, and answer a few identity verification questions based on your credit history. The process takes less than five minutes and does not affect your score.</p>

<h2>Common Myths About Credit Scores Debunked</h2>
<p><strong>Myth:</strong> Checking your own credit score lowers it.<br/>
<strong>Fact:</strong> Only hard inquiries by lenders affect your score. When you check your own score, it is a soft inquiry and has zero impact.</p>
<p><strong>myth:</strong> Having a high salary guarantees a good credit score.<br/>
<strong>Fact:</strong> Your income is not directly factored into your credit score. A high earner who misses payments will have a lower score than a moderate earner who pays on time.</p>
<p><strong>Myth:</strong> Closing old credit cards improves your score.<br/>
<strong>Fact:</strong> Closing old cards reduces your total available credit (increasing utilization ratio) and shortens your credit history, both of which can hurt your score.</p>

<h2>Practical Steps to Improve Your Credit Score</h2>
<p>If your credit score needs work, here are actionable steps you can take starting today:</p>
<p><strong>Step 1:</strong> Pay all outstanding dues immediately. Prioritize credit card payments and loan EMIs that are overdue.</p>
<p><strong>Step 2:</strong> Reduce your credit card utilization to below 30%. Make multiple payments throughout the month if needed.</p>
<p><strong>Step 3:</strong> Do not apply for new credit for at least six months. Let your existing accounts demonstrate a clean repayment history.</p>
<p><strong>Step 4:</strong> Dispute any errors on your credit report. Check for accounts you do not recognize, incorrect payment statuses, or wrong personal details.</p>
<p><strong>Step 5:</strong> Consider a credit-builder loan from a bank or NBFC if you have no credit history at all.</p>
<p>Improving your credit score is a marathon, not a sprint. With disciplined financial habits, most people can see meaningful improvement within six to twelve months.</p>`;

const PERSONAL_LOAN_CONTENT = `<h2>Understanding Personal Loans in India</h2>
<p>A personal loan is an unsecured loan offered by banks and financial institutions that can be used for any purpose — from funding a wedding to consolidating debt, home renovation, medical emergencies, or even a vacation. Unlike a home loan or car loan, a personal loan does not require any collateral, making it accessible but typically carrying higher interest rates.</p>
<p>In India, personal loan interest rates in 2026 range from 10.25% to 24% per annum depending on the lender, your credit score, income, employment type, and existing relationship with the bank. The loan amount can range from ₹50,000 to ₹40,00,000 with tenure options from 12 to 60 months.</p>

<h2>Types of Personal Loans</h2>
<p><strong>Term Loan:</strong> The most common type where you borrow a lump sum and repay it in fixed monthly installments (EMIs) over a predetermined tenure. Interest is calculated on the outstanding principal.</p>
<p><strong>Flexi Loan:</strong> Offered by select lenders like Bajaj Finserv and HDFC, a flexi loan gives you a pre-approved limit from which you can withdraw funds as needed. Interest is charged only on the utilized amount, making it ideal for those with variable funding needs.</p>
<p><strong>Top-up Loan:</strong> If you already have a running home loan or personal loan, you can get a top-up loan at the same or slightly higher interest rate. This is useful when you need additional funds without going through the full application process again.</p>
<p><strong>Salary Advance Loan:</strong> Many employers partner with banks to offer salary advance loans to their employees at preferential rates. These are typically deducted directly from your monthly salary.</p>

<h2>Eligibility Criteria for Personal Loans</h2>
<p>Eligibility requirements vary by lender, but the following are the general criteria:</p>
<p><strong>Salaried Individuals:</strong> Minimum age of 21 years, maximum age of 58 to 65 years at loan maturity. Minimum monthly income of ₹25,000 to ₹50,000 depending on the city and lender. At least 2 years of total work experience with a minimum of 6 months at the current employer.</p>
<p><strong>Self-Employed Individuals:</strong> Minimum age of 25 years, maximum age of 65 years. Business should be operational for at least 2 to 3 years. Minimum annual turnover varies by lender, typically ₹10 to ₹15 lakhs. Must file regular income tax returns.</p>
<p><strong>Credit Score Requirement:</strong> A CIBIL score of 750 or above is preferred by most lenders. Some lenders may approve loans for scores between 650 and 749 but at higher interest rates. Scores below 650 significantly reduce approval chances.</p>

<h2>Documents Required for Personal Loan Application</h2>
<p><strong>For Salaried Employees:</strong></p>
<p>Identity proof: PAN card, Aadhaar card, passport, or voter ID. Address proof: Aadhaar card, utility bills (not older than 2 months), or passport. Income proof: Last 3 months salary slips, Form 16 for the last 2 years, and last 6 months bank statements showing salary credits. Employment proof: Offer letter or appointment letter from current employer.</p>
<p><strong>For Self-Employed Individuals:</strong></p>
<p>Identity and address proofs same as above. Income proof: Last 3 years ITR with computation of income, last 6 months bank statements, and P&L statement and balance sheet audited by a CA. Business proof: Business registration certificate, GST registration, or partnership deed.</p>

<h2>How Personal Loan Interest Rates are Determined</h2>
<p>Lenders assess multiple factors before deciding your interest rate:</p>
<p><strong>Credit Score:</strong> The higher your score, the lower your interest rate. A score above 750 can get you rates 2 to 3% lower than someone with a score of 650.</p>
<p><strong>Income Level:</strong> Higher income generally means lower risk for the lender, resulting in better rates. Salaried employees of large corporations often get preferential rates.</p>
<p><strong>Employer Category:</strong> Banks categorize employers into different tiers. Government employees and employees of Fortune 500 companies or well-known MNCs typically get better rates.</p>
<p><strong>Existing Relationship:</strong> If you have a salary account or existing loans with a bank, they may offer you a better rate to retain you as a customer.</p>
<p><strong>Loan Amount and Tenure:</strong> Higher loan amounts may attract slightly lower rates, while longer tenures may result in higher total interest cost.</p>

<h2>Step-by-Step Process to Apply for a Personal Loan</h2>
<p><strong>Step 1: Check Your Eligibility</strong> — Use online eligibility calculators on bank websites or aggregator platforms to get an estimate of the loan amount you qualify for.</p>
<p><strong>Step 2: Compare Interest Rates</strong> — Do not settle for the first offer. Compare rates from at least 4 to 5 lenders. Consider both the interest rate and the processing fee, as they affect your total cost of borrowing.</p>
<p><strong>Step 3: Check Your Credit Score</strong> — Before applying, ensure your credit score is in good shape. If it is below 700, work on improving it before applying to avoid rejection and a further drop in score.</p>
<p><strong>Step 4: Gather Documents</strong> — Keep all required documents ready to avoid delays. Digital copies are accepted by most lenders for online applications.</p>
<p><strong>Step 5: Submit Application</strong> — Apply online through the lender website or visit a branch. Online applications are typically processed faster.</p>
<p><strong>Step 6: Wait for Approval</strong> — The verification process takes 2 to 7 working days. The lender may call you or your employer for verification.</p>
<p><strong>Step 7: Sign Agreement and Receive Funds</strong> — Once approved, review the loan agreement carefully, especially the interest rate, processing fee, prepayment charges, and late payment penalties. After signing, funds are typically disbursed within 24 to 48 hours.</p>

<h2>Tips to Get the Best Personal Loan Deal</h2>
<p>Negotiate the interest rate — most lenders have some flexibility, especially if you have a strong credit profile. Compare processing fees as they can range from nil to 3% of the loan amount. Check for prepayment and foreclosure charges, as some lenders charge 2 to 5% for early repayment. Opt for auto-debit to get a small interest rate discount of 0.1 to 0.25%. Consider transferring your existing high-interest loan to a new lender at a lower rate through a balance transfer.</p>`;

const CREDIT_CARDS_CONTENT = `<h2>The Ultimate Guide to Credit Cards in India (2026)</h2>
<p>Credit cards have become an essential financial tool for millions of Indians. Beyond the convenience of cashless payments, the right credit card can save you money through cashback, reward points, airport lounge access, and exclusive discounts. But with over 500 credit card products available in India, choosing the right one can be overwhelming.</p>
<p>This guide breaks down everything you need to know — from how credit cards work to choosing the best card for your lifestyle, understanding fees, and maximizing your rewards.</p>

<h2>How Credit Cards Work</h2>
<p>A credit card gives you access to a pre-approved credit limit set by the issuing bank. When you make a purchase, the bank pays the merchant on your behalf, and you repay the bank either in full by the due date or in parts over time. If you pay the full statement balance by the due date, you pay zero interest. If you carry a balance, interest is charged at 2.5% to 3.5% per month (36% to 42% annually) on the outstanding amount.</p>
<p>Every credit card comes with a billing cycle (typically 30 days) and a grace period (usually 15 to 20 days after the statement date). Paying within the grace period means you never pay interest. This is the single most important habit for credit card users.</p>

<h2>Types of Credit Cards</h2>
<p><strong>Cashback Cards:</strong> These cards give you a percentage of your spending back as cashback. The best cashback cards in India offer 1% to 5% cashback on all spending, with some offering higher rates on specific categories like groceries, fuel, or online shopping.</p>
<p><strong>Reward Points Cards:</strong> You earn reward points for every rupee spent. These points can be redeemed for merchandise, gift vouchers, airline miles, or sometimes even statement credits. The value of reward points varies significantly between cards — always calculate the effective return percentage.</p>
<p><strong>Travel Cards:</strong> Designed for frequent travelers, these cards offer airport lounge access, air miles, travel insurance, and discounts on hotel bookings. Premium travel cards like the HDFC Infinia and Amex Platinum Charge offer exceptional travel benefits for high spenders.</p>
<p><strong>Fuel Cards:</strong> If you spend heavily on fuel, dedicated fuel cards can save you 1% to 5% on every fill. Some fuel cards also offer additional benefits like free roadside assistance.</p>
<p><strong>Lifetime Free Cards:</strong> These cards have no annual fee, making them ideal for occasional users. While they may offer fewer perks, the zero-fee structure means you benefit from credit card features without any cost.</p>
<p><strong>Co-branded Cards:</strong> Cards issued in partnership with airlines (IndiGo, Vistara), e-commerce platforms (Amazon ICICI, Flipkart Axis), or retail chains (Tata Neu, Myntra) offer enhanced rewards on spending with those specific brands.</p>

<h2>Best Credit Cards by Category in 2026</h2>
<p><strong>Best Overall Cashback:</strong> Amazon Pay ICICI Credit Card — 5% cashback on Amazon purchases, 2% on all digital payments, and 1% on offline spending. No annual fee.</p>
<p><strong>Best for Travel:</strong> HDFC Infinia Metal Card — Unlimited airport lounge access worldwide, 5x reward points on travel bookings, complimentary golf rounds, and dedicated concierge. Annual fee is waived on ₹10 lakh annual spend.</p>
<p><strong>Best for Dining & Entertainment:</strong> SBI Card ELITE — 10x reward points on dining and entertainment, complimentary movie tickets every month, and airport lounge access.</p>
<p><strong>Best Lifetime Free:</strong> Flipkart Axis Bank Credit Card — 5% cashback on Flipkart, 4% on preferred merchants, and 1.5% on everything else. Zero annual fee forever.</p>
<p><strong>Best for Beginners:</strong> HDFC MoneyBack+ — Easy to get approved for, 2X reward points on online spends, and a reasonable annual fee of ₹500 (waived on ₹50,000 annual spend).</p>

<h2>Understanding Credit Card Fees and Charges</h2>
<p><strong>Annual Fee:</strong> Ranges from ₹0 for lifetime free cards to ₹50,000+ for ultra-premium cards. Most annual fees can be waived if you meet a minimum annual spend requirement.</p>
<p><strong>Interest Rate:</strong> If you carry a balance beyond the grace period, expect to pay 2.5% to 3.5% per month. This translates to 36% to 42% per year, making it one of the most expensive forms of borrowing.</p>
<p><strong>Joining Fee:</strong> A one-time fee charged when your card is issued. Some cards waive this through welcome offers or milestone benefits.</p>
<p><strong>Foreign Transaction Fee:</strong> Typically 1.5% to 3.5% of the transaction amount for international purchases. Consider getting a forex-optimized card if you travel abroad frequently.</p>
<p><strong>Cash Advance Fee:</strong> Withdrawing cash from an ATM using your credit card attracts a fee of 2% to 3% of the amount, plus immediate interest charges without any grace period.</p>
<p><strong>Late Payment Fee:</strong> Ranges from ₹100 to ₹1,300 depending on the outstanding amount. Late payments also attract a penalty interest rate and negatively impact your credit score.</p>

<h2>How to Choose the Right Credit Card</h2>
<p>Start by analyzing your monthly spending pattern. If you spend more online, get a card with enhanced rewards on e-commerce. If you travel frequently, a travel card with lounge access will save you thousands. If you want simplicity, a flat-rate cashback card eliminates the complexity of reward point calculations.</p>
<p>Consider the total cost of ownership — annual fee minus the value of benefits you will actually use. A card with a ₹5,000 annual fee might be worth it if you will use the ₹8,000 worth of lounge access and insurance it provides. But if you will never use those benefits, a lifetime free card with 1.5% cashback on everything is a better deal.</p>

<h2>Maximizing Your Credit Card Benefits</h2>
<p>Always pay your statement balance in full and on time. This builds your credit score and avoids interest charges. Use your credit card for all regular spending to maximize rewards — but only spend what you would spend anyway. Never spend extra just to earn rewards.</p>
<p>Combine multiple credit cards strategically. Use one card for groceries, another for online shopping, and a third for travel. This lets you maximize category-specific bonuses while keeping overall spending optimized. Track your reward points and redeem them before they expire.</p>
<p>Take advantage of welcome bonuses and milestone rewards. Many cards offer bonus points or vouchers when you spend a certain amount in the first 90 days. Plan your large purchases to coincide with these bonus windows.</p>`;

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-001',
    title: 'How to Check Your Credit Score for Free in India (2026 Guide)',
    slug: 'check-credit-score-free',
    excerpt:
      'Learn how to check your CIBIL score for free through official channels and fintech platforms. Step-by-step instructions to access your credit report without paying anything.',
    content: CREDIT_SCORE_CONTENT,
    coverImage: '/images/articles/credit-score-check.jpg',
    authorId: 'priya-sharma',
    author: MOCK_AUTHORS[0],
    categoryId: 'cat-credit-score',
    category: MOCK_CATEGORIES[0],
    tags: [
      'credit score',
      'CIBIL score',
      'free credit report',
      'check credit score',
      'credit bureau',
    ],
    metaTitle: 'Check Your Credit Score Free in India — Step-by-Step Guide (2026)',
    metaDescription:
      'Check your CIBIL score for free in 2026. Get your free annual credit report from CIBIL, Experian, or CRIF. No hidden charges, instant results.',
    isPublished: true,
    isFeatured: true,
    readingTime: 8,
    views: 24500,
    publishedAt: past(30),
    createdAt: past(35),
    updatedAt: past(5),
  },
  {
    id: 'art-002',
    title: '10 Proven Ways to Improve Your CIBIL Score Quickly',
    slug: 'improve-cibil-score',
    excerpt:
      'Struggling with a low credit score? Here are 10 practical and proven strategies to boost your CIBIL score and qualify for better loan and credit card offers.',
    content: CREDIT_SCORE_CONTENT,
    coverImage: '/images/articles/improve-cibil-score.jpg',
    authorId: 'rahul-gupta',
    author: MOCK_AUTHORS[1],
    categoryId: 'cat-credit-score',
    category: MOCK_CATEGORIES[0],
    tags: ['improve credit score', 'CIBIL score', 'credit improvement', 'credit tips'],
    metaTitle: '10 Proven Ways to Improve Your CIBIL Score in 2026',
    metaDescription:
      'Boost your CIBIL score with these 10 practical tips. Learn how to improve payment history, reduce utilization, and build a strong credit profile.',
    isPublished: true,
    isFeatured: true,
    readingTime: 10,
    views: 31200,
    publishedAt: past(20),
    createdAt: past(25),
    updatedAt: past(3),
  },
  {
    id: 'art-003',
    title: 'Personal Loan Interest Rates Compared: Top 10 Banks in 2026',
    slug: 'best-personal-loan-rates',
    excerpt:
      'Compare personal loan interest rates from HDFC, ICICI, SBI, Axis, and 6 other top banks. Find the lowest rate for your profile and loan amount.',
    content: PERSONAL_LOAN_CONTENT,
    coverImage: '/images/articles/personal-loan-rates.jpg',
    authorId: 'priya-sharma',
    author: MOCK_AUTHORS[0],
    categoryId: 'cat-personal-loan',
    category: MOCK_CATEGORIES[1],
    tags: [
      'personal loan interest rates',
      'compare loans',
      'HDFC personal loan',
      'ICICI personal loan',
      'best rates',
    ],
    metaTitle: 'Personal Loan Interest Rates 2026 — Compare Top 10 Banks',
    metaDescription:
      'Compare personal loan interest rates from top Indian banks in 2026. HDFC, ICICI, SBI, Axis Bank rates starting from 10.25%. Find the best deal.',
    isPublished: true,
    isFeatured: true,
    readingTime: 12,
    views: 18700,
    publishedAt: past(15),
    createdAt: past(18),
    updatedAt: past(2),
  },
  {
    id: 'art-004',
    title: 'Complete Personal Loan Eligibility Checklist for 2026',
    slug: 'personal-loan-eligibility',
    excerpt:
      'Everything you need to know about personal loan eligibility in India — income requirements, credit score thresholds, age limits, and documentation for salaried and self-employed applicants.',
    content: PERSONAL_LOAN_CONTENT,
    coverImage: '/images/articles/loan-eligibility.jpg',
    authorId: 'rahul-gupta',
    author: MOCK_AUTHORS[1],
    categoryId: 'cat-personal-loan',
    category: MOCK_CATEGORIES[1],
    tags: [
      'personal loan eligibility',
      'loan criteria',
      'documents required',
      'salaried loan',
      'self-employed loan',
    ],
    metaTitle: 'Personal Loan Eligibility 2026 — Complete Checklist & Documents',
    metaDescription:
      'Check your personal loan eligibility for 2026. Income, credit score, age and document requirements for salaried and self-employed individuals.',
    isPublished: true,
    isFeatured: false,
    readingTime: 9,
    views: 14300,
    publishedAt: past(10),
    createdAt: past(14),
    updatedAt: past(1),
  },
  {
    id: 'art-005',
    title: 'Best Cashback Credit Cards in India for 2026',
    slug: 'best-cashback-credit-cards',
    excerpt:
      'Earn money back on every swipe. We compare the top cashback credit cards in India offering 1% to 5% cashback across categories with no annual fees.',
    content: CREDIT_CARDS_CONTENT,
    coverImage: '/images/articles/cashback-cards.jpg',
    authorId: 'priya-sharma',
    author: MOCK_AUTHORS[0],
    categoryId: 'cat-credit-cards',
    category: MOCK_CATEGORIES[2],
    tags: ['cashback credit cards', 'best credit cards', 'no annual fee', 'credit card rewards'],
    metaTitle: 'Best Cashback Credit Cards in India 2026 — Earn on Every Purchase',
    metaDescription:
      'Compare the best cashback credit cards in India for 2026. Get 1% to 5% cashback on all spending. Zero annual fee options included.',
    isPublished: true,
    isFeatured: true,
    readingTime: 11,
    views: 22100,
    publishedAt: past(8),
    createdAt: past(12),
    updatedAt: past(1),
  },
  {
    id: 'art-006',
    title: 'Credit Card Annual Fees Explained: Are Premium Cards Worth It?',
    slug: 'credit-card-annual-fees',
    excerpt:
      'Is paying ₹5,000 or more in annual fees for a premium credit card justified? We break down the math and help you decide if premium cards are worth the cost.',
    content: CREDIT_CARDS_CONTENT,
    coverImage: '/images/articles/premium-cards.jpg',
    authorId: 'rahul-gupta',
    author: MOCK_AUTHORS[1],
    categoryId: 'cat-credit-cards',
    category: MOCK_CATEGORIES[2],
    tags: ['credit card fees', 'premium cards', 'annual fee waiver', 'credit card value'],
    metaTitle: 'Credit Card Annual Fees Explained — Is a Premium Card Worth It?',
    metaDescription:
      'Understand credit card annual fees in India. We help you calculate whether a premium credit card is worth its annual fee based on your spending.',
    isPublished: true,
    isFeatured: false,
    readingTime: 7,
    views: 16800,
    publishedAt: past(5),
    createdAt: past(9),
    updatedAt: past(1),
  },
];

export const MOCK_FAQS: FAQ[] = [
  {
    id: 'faq-001',
    question: 'What is a good credit score in India?',
    answer:
      'A credit score of 750 and above is considered excellent in India. Most banks and lenders prefer borrowers with a score of 750 or higher for the best interest rates and terms. Scores between 700 and 749 are considered good, while scores below 650 may make it difficult to get approved for loans or credit cards.',
    category: 'credit-score',
    articleId: 'art-001',
    order: 1,
    createdAt: past(30),
    updatedAt: past(5),
  },
  {
    id: 'faq-002',
    question: 'How often should I check my credit score?',
    answer:
      'You should check your credit score at least once every quarter. Checking your own score is a soft inquiry and does not affect your score at all. Regular monitoring helps you catch errors, track improvement progress, and stay aware of your creditworthiness before applying for any loan or credit card.',
    category: 'credit-score',
    articleId: 'art-001',
    order: 2,
    createdAt: past(30),
    updatedAt: past(5),
  },
  {
    id: 'faq-003',
    question: 'Does checking my credit score lower it?',
    answer:
      'No, checking your own credit score does not lower it. When you check your own score, it is recorded as a soft inquiry which has zero impact on your score. Only hard inquiries made by lenders when you apply for credit products can lower your score by 5 to 10 points each.',
    category: 'credit-score',
    articleId: 'art-001',
    order: 3,
    createdAt: past(30),
    updatedAt: past(5),
  },
  {
    id: 'faq-004',
    question: 'How long does it take to improve a credit score?',
    answer:
      'Improving a credit score typically takes 3 to 6 months of consistent good financial behavior. Paying all EMIs and credit card bills on time, reducing credit utilization below 30%, and avoiding new credit applications can show meaningful improvement within 3 to 4 months. Significant improvements of 50 to 100 points usually take 6 to 12 months.',
    category: 'credit-score',
    articleId: 'art-002',
    order: 1,
    createdAt: past(20),
    updatedAt: past(3),
  },
  {
    id: 'faq-005',
    question: 'What is the minimum salary required for a personal loan?',
    answer:
      'The minimum salary required for a personal loan varies by lender and city. In metros and tier-1 cities, most banks require a minimum monthly salary of ₹25,000 to ₹30,000. In tier-2 and tier-3 cities, the requirement may be ₹20,000 to ₹25,000. Self-employed individuals typically need to show a minimum annual income of ₹2 to ₹5 lakhs depending on the lender.',
    category: 'personal-loan',
    articleId: 'art-003',
    order: 1,
    createdAt: past(15),
    updatedAt: past(2),
  },
  {
    id: 'faq-006',
    question: 'Can I get a personal loan with a low credit score?',
    answer:
      'Getting a personal loan with a low credit score (below 650) is challenging but not impossible. Some NBFCs and fintech lenders offer loans to borrowers with scores between 550 and 650, but at significantly higher interest rates (18% to 36% per annum). It is generally advisable to improve your score to at least 700 before applying for better terms.',
    category: 'personal-loan',
    articleId: 'art-003',
    order: 2,
    createdAt: past(15),
    updatedAt: past(2),
  },
  {
    id: 'faq-007',
    question: 'How long does personal loan approval take?',
    answer:
      'Personal loan approval typically takes 2 to 7 working days from the time of application submission. Online applications are usually processed faster than offline ones. Once approved, the loan amount is disbursed to your bank account within 24 to 48 hours. Some lenders like HDFC and ICICI offer instant personal loan approval for existing customers.',
    category: 'personal-loan',
    articleId: 'art-004',
    order: 1,
    createdAt: past(10),
    updatedAt: past(1),
  },
  {
    id: 'faq-008',
    question: 'What documents are needed for a personal loan?',
    answer:
      'Basic documents include identity proof (PAN card, Aadhaar card), address proof (Aadhaar, utility bills), income proof (salary slips for last 3 months, bank statements for 6 months), and employment proof. Self-employed individuals additionally need ITR for the last 2 to 3 years, P&L statement, and business registration proof.',
    category: 'personal-loan',
    articleId: 'art-004',
    order: 2,
    createdAt: past(10),
    updatedAt: past(1),
  },
  {
    id: 'faq-009',
    question: 'What is the difference between a credit card and a debit card?',
    answer:
      'A credit card lets you borrow money from the bank up to a pre-approved limit to make purchases, which you repay later. A debit card directly debits money from your bank account at the time of transaction. Credit cards offer rewards, build credit history, and provide purchase protection, while debit cards help with budgeting since you can only spend what you have.',
    category: 'credit-cards',
    articleId: 'art-005',
    order: 1,
    createdAt: past(8),
    updatedAt: past(1),
  },
  {
    id: 'faq-010',
    question: 'How many credit cards should I have?',
    answer:
      'There is no single ideal number, but most financial experts recommend having 2 to 3 credit cards. Having multiple cards lets you maximize category-specific rewards, provides a backup if one card is blocked, and increases your total available credit (lowering utilization ratio). However, having too many cards can make tracking difficult and may raise concerns with future lenders.',
    category: 'credit-cards',
    articleId: 'art-005',
    order: 2,
    createdAt: past(8),
    updatedAt: past(1),
  },
  {
    id: 'faq-011',
    question: 'Are credit card reward points worth it?',
    answer:
      'Credit card reward points can be worth it if you choose the right card and redeem strategically. The value of reward points varies from ₹0.20 to ₹1.00 per point depending on the card and redemption method. Travel redemptions typically offer the highest value. Always calculate the effective return rate — if your card earns 2 reward points per ₹100 spent and each point is worth ₹0.50, your effective return is 1%.',
    category: 'credit-cards',
    articleId: 'art-006',
    order: 1,
    createdAt: past(5),
    updatedAt: past(1),
  },
  {
    id: 'faq-012',
    question: 'What happens if I only pay the minimum amount due on my credit card?',
    answer:
      'Paying only the minimum amount due avoids late payment fees but does not prevent interest charges. You will be charged 2.5% to 3.5% per month (36% to 42% annually) on the remaining unpaid balance. Additionally, carrying a balance hurts your credit utilization ratio and credit score. It is always best to pay your full statement balance by the due date.',
    category: 'credit-cards',
    articleId: 'art-006',
    order: 2,
    createdAt: past(5),
    updatedAt: past(1),
  },
];

function makeBank(overrides: Partial<Bank> & Pick<Bank, 'slug'>): Bank {
  return {
    id: `bank-${overrides.slug}`,
    name: '',
    logo: '',
    website: '',
    description: '',
    rating: 4.0,
    features: [],
    pros: [],
    cons: [],
    interestRate: '10.50%',
    processingFee: '1%',
    minLoanAmount: 50000,
    maxLoanAmount: 4000000,
    minCreditScore: 750,
    createdAt: past(400),
    updatedAt: past(10),
    ...overrides,
  };
}

export const MOCK_BANKS: Bank[] = [
  makeBank({
    slug: 'hdfc-bank',
    name: 'HDFC Bank',
    logo: '/images/banks/hdfc.svg',
    website: 'https://www.hdfcbank.com',
    description:
      "HDFC Bank is India's largest private sector bank offering a comprehensive range of personal loans, credit cards, and financial products with quick disbursal and competitive rates.",
    rating: 4.5,
    features: [
      'Instant loan approval for existing customers',
      'Net banking and mobile app integration',
      'Flexible repayment options from 12 to 60 months',
      'Pre-approved loans up to ₹40 lakhs',
    ],
    pros: [
      'Fastest disbursal (24 hours for existing customers)',
      'Competitive interest rates from 10.50%',
      'Wide branch network across India',
      'Excellent digital banking experience',
    ],
    cons: [
      'Strict eligibility for new customers',
      'Higher processing fees for low credit scores',
      'Prepayment charges of 2% to 4%',
    ],
    interestRate: '10.50% - 21.00%',
    processingFee: 'Up to 2.5%',
    minLoanAmount: 50000,
    maxLoanAmount: 4000000,
    minCreditScore: 750,
  }),
  makeBank({
    slug: 'icici-bank',
    name: 'ICICI Bank',
    logo: '/images/banks/icici.svg',
    website: 'https://www.icicibank.com',
    description:
      'ICICI Bank offers personal loans with minimal documentation and quick processing through their digital platform. Known for competitive rates and a wide product portfolio.',
    rating: 4.4,
    features: [
      'Pre-approved loans via iMobile app',
      'Minimal documentation for salaried',
      'Top-up loan facility available',
      'Doorstep service in select cities',
    ],
    pros: [
      'Attractive interest rates from 10.75%',
      'Quick online application process',
      'Good customer support',
      'Competitive credit card offerings',
    ],
    cons: [
      'Strict processing for self-employed',
      'Higher rates for low credit scores',
      'Limited flexibility on tenure for small loans',
    ],
    interestRate: '10.75% - 19.00%',
    processingFee: 'Up to 2%',
    minLoanAmount: 50000,
    maxLoanAmount: 5000000,
    minCreditScore: 750,
  }),
  makeBank({
    slug: 'sbi',
    name: 'State Bank of India',
    logo: '/images/banks/sbi.svg',
    website: 'https://www.sbi.co.in',
    description:
      "SBI is India's largest public sector bank offering personal loans at competitive rates with the trust of government backing and an extensive branch network.",
    rating: 4.3,
    features: [
      'Xpress Credit for existing customers',
      'Gold loan and overdraft options',
      'No hidden charges',
      'Government employee special schemes',
    ],
    pros: [
      'Lowest interest rates starting from 11.15%',
      'Trusted government bank',
      'Wide branch and ATM network',
      'Special schemes for government employees',
    ],
    cons: [
      'Slower processing compared to private banks',
      'Higher documentation requirements',
      'Digital platform less polished than private peers',
    ],
    interestRate: '11.15% - 16.00%',
    processingFee: 'Up to 1%',
    minLoanAmount: 25000,
    maxLoanAmount: 2000000,
    minCreditScore: 700,
  }),
  makeBank({
    slug: 'axis-bank',
    name: 'Axis Bank',
    logo: '/images/banks/axis.svg',
    website: 'https://www.axisbank.com',
    description:
      'Axis Bank provides personal loans with flexible repayment options and competitive rates. Known for their credit card offerings and digital banking solutions.',
    rating: 4.2,
    features: [
      'Quick disbursal within 48 hours',
      'Flexible EMI options',
      'Pre-approved offers for existing customers',
      'Salary account special rates',
    ],
    pros: [
      'Good balance of rate and service',
      'Strong credit card portfolio',
      'Competitive processing fees',
      'Good digital banking platform',
    ],
    cons: [
      'Higher interest rates for new customers',
      'Limited tenure options for small loans',
      'Stricter eligibility for self-employed',
    ],
    interestRate: '10.49% - 20.00%',
    processingFee: 'Up to 2%',
    minLoanAmount: 50000,
    maxLoanAmount: 4000000,
    minCreditScore: 750,
  }),
  makeBank({
    slug: 'kotak-mahindra-bank',
    name: 'Kotak Mahindra Bank',
    logo: '/images/banks/kotak.svg',
    website: 'https://www.kotak.com',
    description:
      'Kotak Mahindra Bank offers personal loans with attractive interest rates and quick processing. Known for their wealth management services and innovative financial products.',
    rating: 4.1,
    features: [
      'Zero prepayment charges on select products',
      'Digital-first application process',
      'Competitive rates for salaried professionals',
      'Balance transfer facility',
    ],
    pros: [
      'Attractive interest rates',
      'Good digital experience',
      'Flexible repayment options',
      'No foreclosure charges on some products',
    ],
    cons: [
      'Limited branch presence in rural areas',
      'Higher rates for self-employed',
      'Slower customer service response times',
    ],
    interestRate: '10.99% - 20.50%',
    processingFee: 'Up to 2%',
    minLoanAmount: 50000,
    maxLoanAmount: 3000000,
    minCreditScore: 750,
  }),
  makeBank({
    slug: 'pnb',
    name: 'Punjab National Bank',
    logo: '/images/banks/pnb.svg',
    website: 'https://www.pnbindia.in',
    description:
      'PNB is a leading public sector bank offering personal loans at affordable rates with the reliability of a government-backed institution.',
    rating: 4.0,
    features: [
      'Special schemes for pensioners',
      'Government employee benefits',
      'Wide rural branch network',
      'Competitive rates for existing customers',
    ],
    pros: [
      'Government bank trust',
      'Affordable interest rates',
      'Extensive branch network',
      'No hidden fees',
    ],
    cons: [
      'Slower digital processing',
      'Higher documentation burden',
      'Limited online features compared to private banks',
    ],
    interestRate: '11.15% - 16.50%',
    processingFee: 'Up to 1%',
    minLoanAmount: 50000,
    maxLoanAmount: 1000000,
    minCreditScore: 700,
  }),
  makeBank({
    slug: 'bank-of-baroda',
    name: 'Bank of Baroda',
    logo: '/images/banks/bob.svg',
    website: 'https://www.bankofbaroda.com',
    description:
      'Bank of Baroda provides a range of personal loan products catering to salaried employees and self-employed individuals with competitive rates.',
    rating: 3.9,
    features: [
      'Pre-approved offers for existing customers',
      'Multi-city loan facility',
      'Flexi-repayment options',
      'Special rates for Baroda customers',
    ],
    pros: [
      'Competitive interest rates',
      'Good branch coverage',
      'Government bank reliability',
      'Flexible loan amounts',
    ],
    cons: [
      'Slower loan processing',
      'Customer service can be inconsistent',
      'Digital platform needs improvement',
    ],
    interestRate: '11.35% - 17.00%',
    processingFee: 'Up to 1.5%',
    minLoanAmount: 50000,
    maxLoanAmount: 2000000,
    minCreditScore: 700,
  }),
  makeBank({
    slug: 'canara-bank',
    name: 'Canara Bank',
    logo: '/images/banks/canara.svg',
    website: 'https://www.canarabank.com',
    description:
      'Canara Bank is a public sector bank offering affordable personal loans with straightforward terms and a large branch network across India.',
    rating: 3.8,
    features: [
      'Simple application process',
      'Competitive rates for government employees',
      'Wide ATM network',
      'Multiple loan products',
    ],
    pros: [
      'Low processing fees',
      'Government bank stability',
      'Accessible across India',
      'Transparent terms',
    ],
    cons: [
      'Digital experience lags private banks',
      'Processing time can be longer',
      'Limited pre-approval options',
    ],
    interestRate: '11.25% - 16.50%',
    processingFee: 'Up to 1%',
    minLoanAmount: 50000,
    maxLoanAmount: 1500000,
    minCreditScore: 700,
  }),
  makeBank({
    slug: 'indusind-bank',
    name: 'IndusInd Bank',
    logo: '/images/banks/indusind.svg',
    website: 'https://www.indusind.com',
    description:
      'IndusInd Bank offers personal loans with competitive rates and quick disbursal, known for their customer-centric approach and digital innovation.',
    rating: 4.0,
    features: [
      'Instant approval for existing customers',
      'Minimal documentation',
      'Competitive credit card rewards',
      'Digital-first approach',
    ],
    pros: [
      'Quick disbursal',
      'Competitive interest rates',
      'Good digital experience',
      'Strong credit card offerings',
    ],
    cons: [
      'Limited branch network',
      'Higher rates for new customers',
      'Customer service can be variable',
    ],
    interestRate: '10.75% - 20.00%',
    processingFee: 'Up to 2.5%',
    minLoanAmount: 50000,
    maxLoanAmount: 5000000,
    minCreditScore: 750,
  }),
  makeBank({
    slug: 'yes-bank',
    name: 'Yes Bank',
    logo: '/images/banks/yes.svg',
    website: 'https://www.yesbank.in',
    description:
      'Yes Bank offers personal loans with flexible terms and competitive rates. Known for innovative banking solutions and a growing digital presence.',
    rating: 3.7,
    features: [
      'Quick online application',
      'Flexible repayment options',
      'Pre-approved offers',
      'Balance transfer facility',
    ],
    pros: [
      'Competitive interest rates',
      'Good digital platform',
      'Flexible loan amounts',
      'Growing branch network',
    ],
    cons: [
      'Recently restructured bank — some caution',
      'Limited product range compared to larger banks',
      'Customer service still improving',
    ],
    interestRate: '10.99% - 21.00%',
    processingFee: 'Up to 2.5%',
    minLoanAmount: 50000,
    maxLoanAmount: 4000000,
    minCreditScore: 750,
  }),
];

function makeComparisonItem(
  comparisonId: string,
  bank: Bank,
  features: Record<string, string | number | boolean>,
  rating: number,
  order: number
): ComparisonItem {
  return {
    id: `${comparisonId}-item-${order}`,
    comparisonId,
    bankId: bank.id,
    bank,
    features,
    rating,
    order,
  };
}

export const MOCK_COMPARISONS: Comparison[] = [
  {
    id: 'comp-001',
    title: 'HDFC Credit Card vs SBI Credit Card',
    slug: 'hdfc-vs-sbi-credit-card',
    description:
      'Compare HDFC Bank and SBI credit cards side by side to find which bank offers better rewards, lower fees, and more benefits for your spending pattern.',
    items: [
      makeComparisonItem(
        'comp-001',
        MOCK_BANKS[0],
        {
          annualFee: '₹500 - ₹10,000',
          interestRate: '3.49% per month',
          rewardRate: '2X on online, 1X offline',
          loungeAccess: '4 domestic per quarter',
          fuelSurcharge: '1% waiver',
          welcomeBonus: 'Up to 10,000 points',
        },
        4.5,
        1
      ),
      makeComparisonItem(
        'comp-001',
        MOCK_BANKS[2],
        {
          annualFee: '₹499 - ₹4,999',
          interestRate: '3.35% per month',
          rewardRate: '10X on dining & movies',
          loungeAccess: '2 domestic per quarter',
          fuelSurcharge: '1% waiver',
          welcomeBonus: 'Up to 5,000 points',
        },
        4.3,
        2
      ),
    ],
    metaTitle: 'HDFC vs SBI Credit Card — Detailed Comparison 2026',
    metaDescription:
      'Compare HDFC and SBI credit cards on annual fees, interest rates, rewards, and benefits. Find which bank offers the best credit card for you.',
    isPublished: true,
    createdAt: past(20),
    updatedAt: past(3),
  },
  {
    id: 'comp-002',
    title: 'HDFC Personal Loan vs ICICI Personal Loan',
    slug: 'hdfc-vs-icici-personal-loan',
    description:
      'A detailed comparison of personal loan offerings from HDFC Bank and ICICI Bank covering interest rates, processing fees, disbursal time, and customer experience.',
    items: [
      makeComparisonItem(
        'comp-002',
        MOCK_BANKS[0],
        {
          interestRate: '10.50% - 21%',
          processingFee: 'Up to 2.5%',
          maxLoanAmount: '₹40 lakhs',
          disbursalTime: '24 hours (existing customers)',
          prepaymentCharges: '2% to 4%',
          minCreditScore: 750,
        },
        4.5,
        1
      ),
      makeComparisonItem(
        'comp-002',
        MOCK_BANKS[1],
        {
          interestRate: '10.75% - 19%',
          processingFee: 'Up to 2%',
          maxLoanAmount: '₹50 lakhs',
          disbursalTime: '48 hours',
          prepaymentCharges: '2% to 3%',
          minCreditScore: 750,
        },
        4.4,
        2
      ),
    ],
    metaTitle: 'HDFC vs ICICI Personal Loan — Interest Rate & Features Comparison',
    metaDescription:
      'Compare HDFC and ICICI personal loans on interest rates, processing fees, disbursal speed, and prepayment charges. Find the best personal loan for you.',
    isPublished: true,
    createdAt: past(15),
    updatedAt: past(2),
  },
];

export const MOCK_PROGRAMMATIC_PAGES: ProgrammaticPage[] = [
  {
    id: 'pp-001',
    title: 'Best Personal Loan Interest Rates in Mumbai',
    slug: 'best-personal-loan-rates-mumbai',
    description:
      'Compare personal loan interest rates offered by top banks in Mumbai. Find the best rates starting from 10.25% for salaried and self-employed individuals.',
    template: 'personal-loan-rates',
    data: {
      city: 'Mumbai',
      banks: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank'],
      minRate: '10.25%',
      maxRate: '21%',
    },
    metaTitle: 'Best Personal Loan Rates in Mumbai 2026 — Compare Top Banks',
    metaDescription:
      'Find the best personal loan interest rates in Mumbai. Compare offers from HDFC, ICICI, SBI and Axis Bank. Starting from 10.25% p.a.',
    isPublished: true,
    createdAt: past(30),
    updatedAt: past(5),
  },
  {
    id: 'pp-002',
    title: 'Best Credit Cards in Bangalore',
    slug: 'best-credit-cards-bangalore',
    description:
      'Discover the best credit cards for Bangalore residents. Compare cashback, travel, and rewards cards tailored for IT professionals and frequent travelers.',
    template: 'credit-card-listing',
    data: {
      city: 'Bangalore',
      topCards: ['Amazon Pay ICICI', 'HDFC Infinia', 'Flipkart Axis'],
      categories: ['cashback', 'travel', 'rewards'],
    },
    metaTitle: 'Best Credit Cards in Bangalore 2026 — Top Picks for You',
    metaDescription:
      'Find the best credit cards in Bangalore for 2026. Compare cashback, travel and rewards cards from top banks. Apply online.',
    isPublished: true,
    createdAt: past(25),
    updatedAt: past(3),
  },
];
