'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Mail, Globe, ExternalLink, Send, CheckCircle } from '@/components/icons';
import { SOCIAL_LINKS } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <section className="mb-12 text-center">
          <Badge className="mb-4">Get in Touch</Badge>
          <h1 className="text-text-primary text-4xl font-bold">Contact Us</h1>
          <p className="text-text-secondary mx-auto mt-4 max-w-2xl text-lg">
            Have questions, feedback, or need assistance? We are here to help. Reach out to us and
            we will get back to you as soon as possible.
          </p>
        </section>

        <section className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
                    <h3 className="text-text-primary mb-2 text-xl font-semibold">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-text-secondary">
                      Thank you for reaching out. We will get back to you within 24-48 hours.
                    </p>
                    <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-text-primary mb-1 block text-sm font-medium"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-text-primary mb-1 block text-sm font-medium"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Invalid email address',
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="text-text-primary mb-1 block text-sm font-medium"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        {...register('subject', { required: 'Subject is required' })}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="text-text-primary mb-1 block text-sm font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Your message..."
                        className="border-border text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-primary w-full rounded-lg border bg-white px-3 py-2 text-sm focus:ring-1 focus:outline-none"
                        {...register('message', { required: 'Message is required' })}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                      )}
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-text-primary text-sm font-medium">Email</p>
                    <p className="text-text-secondary text-sm">hello@finshastra.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:bg-bg-secondary hover:text-text-primary flex items-center gap-3 rounded-lg p-2 text-sm transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  Twitter
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:bg-bg-secondary hover:text-text-primary flex items-center gap-3 rounded-lg p-2 text-sm transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:bg-bg-secondary hover:text-text-primary flex items-center gap-3 rounded-lg p-2 text-sm transition-colors"
                >
                  <span className="text-lg font-bold">f</span>
                  Facebook
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-sm">
                  We typically respond within 24-48 hours during business days. For urgent matters,
                  please email us directly at hello@finshastra.in.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
