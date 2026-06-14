'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formatCurrency } from '@/lib/utils';

const eligibilitySchema = z.object({
  monthlyIncome: z.number().min(10000).max(1000000),
  existingEmis: z.number().min(0).max(500000),
  employmentType: z.enum(['salaried', 'self-employed']),
  age: z.number().min(21).max(60),
});

type EligibilityFormData = z.infer<typeof eligibilitySchema>;

interface EligibilityResult {
  maxLoanAmount: number;
  maxMonthlyEmi: number;
}

function calculateEligibility(data: EligibilityFormData): EligibilityResult {
  const netIncome = data.monthlyIncome;
  const maxEmiRatio = data.employmentType === 'salaried' ? 0.5 : 0.4;
  const maxMonthlyEmi = Math.max(0, netIncome * maxEmiRatio - data.existingEmis);
  const interestRate = 8.5 / 12 / 100;
  const tenureMonths = Math.min(data.age, 30) * 12;
  const factor = Math.pow(1 + interestRate, tenureMonths);
  const maxLoanAmount =
    maxMonthlyEmi > 0 ? (maxMonthlyEmi * (factor - 1)) / (interestRate * factor) : 0;
  return { maxLoanAmount, maxMonthlyEmi };
}

export function LoanEligibilityCalculator() {
  const [result, setResult] = useState<EligibilityResult | null>(null);

  const { register, watch, setValue } = useForm<EligibilityFormData>({
    defaultValues: {
      monthlyIncome: 100000,
      existingEmis: 0,
      employmentType: 'salaried',
      age: 30,
    },
  });

  const monthlyIncome = watch('monthlyIncome');
  const existingEmis = watch('existingEmis');
  const employmentType = watch('employmentType');
  const age = watch('age');

  const handleCalculate = () => {
    const parsed = eligibilitySchema.safeParse({
      monthlyIncome,
      existingEmis,
      employmentType,
      age,
    });
    if (parsed.success) {
      setResult(calculateEligibility(parsed.data));
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-text-primary text-sm font-medium">Monthly Income</label>
              <span className="text-primary text-sm font-semibold">
                {formatCurrency(monthlyIncome)}
              </span>
            </div>
            <input
              type="range"
              min={10000}
              max={1000000}
              step={10000}
              {...register('monthlyIncome', { valueAsNumber: true })}
              onChange={(e) => {
                register('monthlyIncome', { valueAsNumber: true }).onChange(e);
                handleCalculate();
              }}
              className="accent-primary w-full"
            />
            <div className="text-text-muted flex justify-between text-xs">
              <span>₹10K</span>
              <span>₹10L</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-text-primary text-sm font-medium">Existing EMIs</label>
              <span className="text-primary text-sm font-semibold">
                {formatCurrency(existingEmis)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={500000}
              step={5000}
              {...register('existingEmis', { valueAsNumber: true })}
              onChange={(e) => {
                register('existingEmis', { valueAsNumber: true }).onChange(e);
                handleCalculate();
              }}
              className="accent-primary w-full"
            />
            <div className="text-text-muted flex justify-between text-xs">
              <span>₹0</span>
              <span>₹5L</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-text-primary text-sm font-medium">Employment Type</label>
            <Select
              value={employmentType}
              onValueChange={(value: 'salaried' | 'self-employed') => {
                setValue('employmentType', value);
                setTimeout(handleCalculate, 0);
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salaried">Salaried</SelectItem>
                <SelectItem value="self-employed">Self-Employed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-text-primary text-sm font-medium">Age</label>
              <span className="text-primary text-sm font-semibold">{age} years</span>
            </div>
            <input
              type="range"
              min={21}
              max={60}
              step={1}
              {...register('age', { valueAsNumber: true })}
              onChange={(e) => {
                register('age', { valueAsNumber: true }).onChange(e);
                handleCalculate();
              }}
              className="accent-primary w-full"
            />
            <div className="text-text-muted flex justify-between text-xs">
              <span>21</span>
              <span>60</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-bg-secondary">
        <CardHeader>
          <CardTitle>Eligibility Result</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {result ? (
            <>
              <div className="bg-success rounded-xl p-6 text-center text-white">
                <p className="text-sm font-medium opacity-90">Maximum Loan Eligible</p>
                <p className="mt-1 text-3xl font-bold">{formatCurrency(result.maxLoanAmount)}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <span className="text-text-secondary text-sm">Max Monthly EMI</span>
                  <span className="text-text-primary font-semibold">
                    {formatCurrency(result.maxMonthlyEmi)}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <span className="text-text-secondary text-sm">Employment Type</span>
                  <span className="text-text-primary font-semibold capitalize">
                    {employmentType}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <span className="text-text-secondary text-sm">Tenure Used</span>
                  <span className="text-text-primary font-semibold">{Math.min(age, 30)} years</span>
                </div>
              </div>
              <Button asChild className="w-full">
                <a href="https://www.bankbazaar.com" target="_blank" rel="noopener noreferrer">
                  Check with Bank
                </a>
              </Button>
            </>
          ) : (
            <div className="text-text-muted flex h-48 items-center justify-center">
              Adjust the inputs to check eligibility
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
