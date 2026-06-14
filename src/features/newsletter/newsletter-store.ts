import { create } from 'zustand';
import { z } from 'zod';

interface NewsletterState {
  email: string;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  setEmail: (email: string) => void;
  subscribe: () => Promise<void>;
  reset: () => void;
}

const emailSchema = z.string().email('Please enter a valid email address');

export const useNewsletterStore = create<NewsletterState>((set, get) => ({
  email: '',
  isLoading: false,
  isSuccess: false,
  error: null,

  setEmail: (email) => set({ email, error: null }),

  subscribe: async () => {
    const { email } = get();
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      set({ error: validation.error.issues[0].message });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        set({ isLoading: false, error: data.error || 'Something went wrong' });
        return;
      }

      set({ isLoading: false, isSuccess: true, error: null });
    } catch {
      set({ isLoading: false, error: 'Network error. Please try again.' });
    }
  },

  reset: () => set({ email: '', isLoading: false, isSuccess: false, error: null }),
}));
