
import { buddies } from '@/lib/buddies-data';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BusinessMentorPage from '@/components/buddy-pages/business-mentor-page';
import RelationshipBuddyPage from '@/components/buddy-pages/relationship-buddy-page';
import FinanceBuddyPage from '@/components/buddy-pages/finance-buddy-page';
import HealthBuddyPage from '@/components/buddy-pages/health-buddy-page';
import BrandingBuddyPage from '@/components/buddy-pages/branding-buddy-page';
import EducationBuddyPage from '@/components/buddy-pages/education-buddy-page';


export async function generateStaticParams() {
  return buddies.map((buddy) => ({
    slug: buddy.slug,
  }));
}

// A simple map to render the correct page component based on the slug
const buddyPageMap: { [key: string]: React.ComponentType<any> } = {
    'business-mentor': BusinessMentorPage,
    'relationship-buddy': RelationshipBuddyPage,
    'finance-buddy': FinanceBuddyPage,
    'health-buddy': HealthBuddyPage,
    'branding-buddy': BrandingBuddyPage,
    'education-buddy': EducationBuddyPage,
};


export default function BuddyPage({ params }: { params: { slug: string } }) {
  const buddy = buddies.find((b) => b.slug === params.slug);

  if (!buddy) {
    notFound();
  }

  const PageComponent = buddyPageMap[buddy.slug];

  if (!PageComponent) {
    // Optionally, render a default layout or an error message if a page component is not found
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 text-center py-40">
                <h1 className="text-4xl font-bold">Page coming soon</h1>
                <p className="text-muted-foreground mt-4">The page for this buddy is still under construction.</p>
            </main>
            <Footer />
        </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageComponent buddy={buddy} />
      </main>
      <Footer />
    </div>
  );
}

    