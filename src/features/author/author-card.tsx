import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, ExternalLink } from 'lucide-react';

interface AuthorCardProps {
  author: {
    name: string;
    avatar: string;
    bio: string;
    credentials?: string;
    social?: {
      linkedin?: string;
      twitter?: string;
    };
  };
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Card>
      <CardContent className="flex gap-4 p-6">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-text-primary text-lg font-semibold">{author.name}</h3>
            {author.credentials && <Badge variant="secondary">{author.credentials}</Badge>}
          </div>
          <p className="text-text-secondary mt-2 text-sm leading-relaxed">{author.bio}</p>
          {author.social && (
            <div className="mt-3 flex gap-3">
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors"
                  aria-label={`${author.name} on LinkedIn`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors"
                  aria-label={`${author.name} on Twitter`}
                >
                  <Globe className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
