import { describe, it, expect } from 'vitest';
import { cn, formatCurrency, formatDate, slugify } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('cn', () => {
    it('merges class names', () => {
      const result = cn('text-red-500', 'text-blue-500');
      expect(result).toBe('text-blue-500');
    });

    it('handles conditional classes', () => {
      const result = cn('base', false && 'hidden', 'extra');
      expect(result).toContain('base');
      expect(result).toContain('extra');
      expect(result).not.toContain('hidden');
    });
  });

  describe('formatCurrency', () => {
    it('formats Indian Rupees', () => {
      const result = formatCurrency(100000);
      expect(result).toContain('1');
      expect(result).toContain('00');
    });
  });

  describe('slugify', () => {
    it('converts text to slug', () => {
      const result = slugify('Hello World');
      expect(result).toBe('hello-world');
    });

    it('handles special characters', () => {
      const result = slugify('Credit Score & More!');
      expect(result).toBe('credit-score-more');
    });
  });

  describe('formatDate', () => {
    it('formats a date', () => {
      const date = new Date('2026-01-15');
      const result = formatDate(date);
      expect(result).toBeTruthy();
    });
  });
});
