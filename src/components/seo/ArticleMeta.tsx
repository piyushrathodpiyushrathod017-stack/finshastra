import { formatDate } from '@/lib/utils';

interface ArticleAuthor {
  name: string;
  avatar: string;
}

interface ArticleMetaProps {
  author: ArticleAuthor;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
}

export function ArticleMeta({ author, publishedAt, updatedAt, readingTime }: ArticleMetaProps) {
  return (
    <div className="text-text-secondary flex flex-wrap items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-8 w-8 rounded-full object-cover"
          loading="lazy"
        />
        <span className="text-text-primary font-medium">{author.name}</span>
      </div>
      <time dateTime={publishedAt}>Published {formatDate(publishedAt)}</time>
      <time dateTime={updatedAt}>Last updated {formatDate(updatedAt)}</time>
      <span>{readingTime} min read</span>
    </div>
  );
}
