import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, TrendingUp, Banknote, CreditCard } from '@/components/icons';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-primary text-7xl font-bold">404</p>
      <h1 className="text-text-primary mt-4 text-3xl font-bold">Page Not Found</h1>
      <p className="text-text-secondary mt-3 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find
        what you need.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/">Go to Homepage</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/search">
            <Search className="mr-2 h-4 w-4" />
            Search Articles
          </Link>
        </Button>
      </div>

      <div className="mt-12 w-full max-w-2xl">
        <p className="text-text-muted mb-4 text-sm font-medium">Popular pages</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link href="/credit-score" className="group">
            <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader className="pb-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <CardTitle className="group-hover:text-primary text-base transition-colors">
                  Credit Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-sm">Check and improve your CIBIL score</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/personal-loan" className="group">
            <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader className="pb-2">
                <Banknote className="h-6 w-6 text-emerald-600" />
                <CardTitle className="group-hover:text-primary text-base transition-colors">
                  Personal Loans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-sm">Compare rates from top banks</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/credit-cards" className="group">
            <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader className="pb-2">
                <CreditCard className="h-6 w-6 text-orange-600" />
                <CardTitle className="group-hover:text-primary text-base transition-colors">
                  Credit Cards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary text-sm">Find the best credit card for you</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
