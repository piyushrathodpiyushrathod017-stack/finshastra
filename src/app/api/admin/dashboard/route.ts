import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const [
      totalArticles,
      publishedArticles,
      draftArticles,
      totalViews,
      totalCategories,
      totalAuthors,
    ] = await Promise.all([
      db.article.count(),
      db.article.count({ where: { isPublished: true } }),
      db.article.count({ where: { isPublished: false } }),
      db.article.aggregate({ _sum: { views: true } }),
      db.category.count(),
      db.author.count(),
    ]);

    return NextResponse.json({
      success: true,
      stats: {
        totalArticles,
        publishedArticles,
        draftArticles,
        totalViews: totalViews._sum.views || 0,
        totalCategories,
        totalAuthors,
      },
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    );
  }
}
