'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Eye, FolderTree, Users, TrendingUp, Clock } from 'lucide-react';

interface DashboardStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  totalViews: number;
  totalCategories: number;
  totalAuthors: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/dashboard');
        if (response.ok) {
          const data = await response.json();
          setStats(data.stats);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="h-20 animate-pulse rounded bg-gray-200" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Articles',
      value: stats?.totalArticles || 0,
      icon: FileText,
      href: '/admin/articles',
      color: 'text-blue-600',
    },
    {
      title: 'Published',
      value: stats?.publishedArticles || 0,
      icon: Eye,
      href: '/admin/articles?status=PUBLISHED',
      color: 'text-green-600',
    },
    {
      title: 'Drafts',
      value: stats?.draftArticles || 0,
      icon: Clock,
      href: '/admin/articles?status=DRAFT',
      color: 'text-yellow-600',
    },
    {
      title: 'Total Views',
      value: stats?.totalViews || 0,
      icon: TrendingUp,
      href: '/admin/analytics',
      color: 'text-purple-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link
          href="/admin/articles/new"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
        >
          New Article
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <Link key={card.title} href={card.href}>
            <Card className="transition-colors hover:bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{card.title}</p>
                    <p className="text-2xl font-bold">{card.value}</p>
                  </div>
                  <card.icon className={`h-8 w-8 ${card.color}`} />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Link
                href="/admin/articles/new"
                className="flex items-center gap-2 rounded-md p-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FileText className="h-4 w-4" />
                Create new article
              </Link>
              <Link
                href="/admin/categories"
                className="flex items-center gap-2 rounded-md p-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FolderTree className="h-4 w-4" />
                Manage categories
              </Link>
              <Link
                href="/admin/authors"
                className="flex items-center gap-2 rounded-md p-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Users className="h-4 w-4" />
                Manage authors
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">No recent activity</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
