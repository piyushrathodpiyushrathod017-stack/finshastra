'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

const emiSchema = z.object({
  loanAmount: z.number().min(100000).max(10000000),
  interestRate: z.number().min(6).max(30),
  tenure: z.number().min(1).max(30),
});

type EmiFormData = z.infer<typeof emiSchema>;

interface EmiResult {
  monthlyEmi: number;
  totalInterest: number;
  totalAmount: number;
}

function calculateEmi(principal: number, annualRate: number, tenureYears: number): EmiResult {
  const monthlyRate = annualRate / 12 / 100;
  const tenureMonths = tenureYears * 12;
  const factor = Math.pow(1 + monthlyRate, tenureMonths);
  const monthlyEmi = (principal * monthlyRate * factor) / (factor - 1);
  const totalAmount = monthlyEmi * tenureMonths;
  const totalInterest = totalAmount - principal;
  return { monthlyEmi, totalInterest, totalAmount };
}

export function EMICalculator() {
  const [result, setResult] = useState<EmiResult | null>(null);

  const { register, watch } = useForm<EmiFormData>({
    defaultValues: {
      loanAmount: 1000000,
      interestRate: 8.5,
      tenure: 10,
    },
  });

  const loanAmount = watch('loanAmount');
  const interestRate = watch('interestRate');
  const tenure = watch('tenure');

  const handleCalculate = () => {
    const parsed = emiSchema.safeParse({ loanAmount, interestRate, tenure });
    if (parsed.success) {
      setResult(calculateEmi(parsed.data.loanAmount, parsed.data.interestRate, parsed.data.tenure));
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Loan Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-text-primary text-sm font-medium">Loan Amount</label>
              <span className="text-primary text-sm font-semibold">
                {formatCurrency(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min={100000}
              max={10000000}
              step={50000}
              {...register('loanAmount', { valueAsNumber: true })}
              onChange={(e) => {
                register('loanAmount', { valueAsNumber: true }).onChange(e);
                handleCalculate();
              }}
              className="accent-primary w-full"
            />
            <div className="text-text-muted flex justify-between text-xs">
              <span>₹1L</span>
              <span>₹1Cr</span>
            </div>
            <Input
              type="number"
              {...register('loanAmount', { valueAsNumber: true })}
              onChange={(e) => {
                register('loanAmount', { valueAsNumber: true }).onChange(e);
                handleCalculate();
              }}
              aria-label="Loan amount in rupees"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-text-primary text-sm font-medium">Interest Rate</label>
              <span className="text-primary text-sm font-semibold">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min={6}
              max={30}
              step={0.1}
              {...register('interestRate', { valueAsNumber: true })}
              onChange={(e) => {
                register('interestRate', { valueAsNumber: true }).onChange(e);
                handleCalculate();
              }}
              className="accent-primary w-full"
            />
            <div className="text-text-muted flex justify-between text-xs">
              <span>6%</span>
              <span>30%</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-text-primary text-sm font-medium">Loan Tenure</label>
              <span className="text-primary text-sm font-semibold">{tenure} years</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              {...register('tenure', { valueAsNumber: true })}
              onChange={(e) => {
                register('tenure', { valueAsNumber: true }).onChange(e);
                handleCalculate();
              }}
              className="accent-primary w-full"
            />
            <div className="text-text-muted flex justify-between text-xs">
              <span>1 year</span>
              <span>30 years</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-bg-secondary">
        <CardHeader>
          <CardTitle>EMI Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {result ? (
            <>
              <div className="bg-primary rounded-xl p-6 text-center text-white">
                <p className="text-sm font-medium opacity-90">Monthly EMI</p>
                <p className="mt-1 text-3xl font-bold">{formatCurrency(result.monthlyEmi)}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <span className="text-text-secondary text-sm">Principal Amount</span>
                  <span className="text-text-primary font-semibold">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <span className="text-text-secondary text-sm">Total Interest Payable</span>
                  <span className="text-error font-semibold">
                    {formatCurrency(result.totalInterest)}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <span className="text-text-secondary text-sm">Total Amount Payable</span>
                  <span className="text-text-primary font-semibold">
                    {formatCurrency(result.totalAmount)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-text-muted flex h-48 items-center justify-center">
              Adjust the sliders to calculate EMI
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
