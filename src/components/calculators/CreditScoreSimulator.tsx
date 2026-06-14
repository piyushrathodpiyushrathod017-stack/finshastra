'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FactorConfig {
  key: string;
  label: string;
  options: { value: string; label: string; impact: number }[];
  tip: string;
}

const factors: FactorConfig[] = [
  {
    key: 'paymentHistory',
    label: 'Payment History',
    options: [
      { value: 'on-time', label: 'Always On Time', impact: 100 },
      { value: 'mostly-on-time', label: 'Mostly On Time', impact: 60 },
      { value: 'late', label: 'Frequently Late', impact: 20 },
    ],
    tip: 'Payment history is the biggest factor. Even one missed payment can drop your score significantly.',
  },
  {
    key: 'creditUtilization',
    label: 'Credit Utilization',
    options: [
      { value: 'low', label: 'Low (0-30%)', impact: 100 },
      { value: 'medium', label: 'Medium (30-60%)', impact: 50 },
      { value: 'high', label: 'High (60%+)', impact: 10 },
    ],
    tip: 'Keep your credit utilization below 30%. Pay down balances before the statement closing date.',
  },
  {
    key: 'newApplications',
    label: 'New Credit Applications',
    options: [
      { value: 'none', label: 'None', impact: 100 },
      { value: 'few', label: 'Few (1-2)', impact: 60 },
      { value: 'many', label: 'Many (3+)', impact: 20 },
    ],
    tip: 'Each hard inquiry can lower your score by 5-10 points. Avoid applying for multiple credit cards in a short period.',
  },
  {
    key: 'creditMix',
    label: 'Credit Mix',
    options: [
      { value: 'good', label: 'Good Mix (Cards + Loans)', impact: 100 },
      { value: 'fair', label: 'Fair Mix', impact: 60 },
      { value: 'poor', label: 'Poor Mix', impact: 30 },
    ],
    tip: 'A healthy mix of credit cards, personal loans, and home loans shows you can manage different types of credit.',
  },
];

interface FactorState {
  paymentHistory: string;
  creditUtilization: string;
  newApplications: string;
  creditMix: string;
}

function getScoreRange(state: FactorState): { min: number; max: number } {
  let totalImpact = 0;
  const factorWeights = {
    paymentHistory: 0.35,
    creditUtilization: 0.3,
    newApplications: 0.15,
    creditMix: 0.2,
  };

  for (const factor of factors) {
    const selected = state[factor.key as keyof FactorState];
    const option = factor.options.find((o) => o.value === selected);
    if (option) {
      totalImpact += option.impact * factorWeights[factor.key as keyof typeof factorWeights];
    }
  }

  const baseScore = 300;
  const maxScore = 900;
  const range = maxScore - baseScore;
  const min = Math.round(baseScore + (totalImpact * range) / 100);
  const max = Math.min(maxScore, Math.round(min + 50));

  return { min, max };
}

function getScoreColor(score: number): string {
  if (score >= 750) return 'bg-success';
  if (score >= 650) return 'bg-primary';
  if (score >= 550) return 'bg-warning';
  return 'bg-error';
}

export function CreditScoreSimulator() {
  const [state, setState] = useState<FactorState>({
    paymentHistory: 'on-time',
    creditUtilization: 'low',
    newApplications: 'none',
    creditMix: 'good',
  });

  const scoreRange = useMemo(() => getScoreRange(state), [state]);
  const averageScore = Math.round((scoreRange.min + scoreRange.max) / 2);
  const barWidth = ((averageScore - 300) / 600) * 100;

  const handleChange = (key: string, value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Card className="bg-bg-secondary">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-text-secondary text-sm font-medium">Estimated Credit Score</p>
            <p className="text-text-primary mt-2 text-5xl font-bold">{averageScore}</p>
            <p className="text-text-muted mt-1 text-sm">
              Range: {scoreRange.min} - {scoreRange.max}
            </p>
          </div>
          <div className="mt-6">
            <div className="bg-bg-tertiary relative h-4 w-full overflow-hidden rounded-full">
              <div
                className={cn(
                  'h-full rounded-full transition-all duration-500',
                  getScoreColor(averageScore)
                )}
                style={{ width: `${barWidth}%` }}
              />
            </div>
            <div className="text-text-muted mt-2 flex justify-between text-xs">
              <span>300</span>
              <span>Poor</span>
              <span>Fair</span>
              <span>Good</span>
              <span>Excellent</span>
              <span>900</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {factors.map((factor) => (
          <Card key={factor.key}>
            <CardHeader>
              <CardTitle className="text-lg">{factor.label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {factor.options.map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors',
                      state[factor.key as keyof FactorState] === option.value
                        ? 'border-primary bg-primary-light'
                        : 'border-border hover:bg-bg-tertiary'
                    )}
                  >
                    <input
                      type="radio"
                      name={factor.key}
                      value={option.value}
                      checked={state[factor.key as keyof FactorState] === option.value}
                      onChange={() => handleChange(factor.key, option.value)}
                      className="accent-primary"
                    />
                    <span className="text-text-primary text-sm font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
              <div className="bg-bg-tertiary rounded-lg p-3">
                <p className="text-text-secondary text-xs leading-relaxed">{factor.tip}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
