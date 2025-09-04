
import { buddies } from '@/lib/buddies-data';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BusinessMentorPage from '@/components/buddy-pages/business-mentor-page';
import RelationshipBuddyPage from '@/components/buddy-pages/relationship-buddy-page';
import FinanceBuddyPage from '@/components/buddy-pages/finance-buddy-page';

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
    // Default to a standard layout for the rest for now
    'health-buddy': BusinessMentorPage, // Placeholder
    'branding-buddy': RelationshipBuddyPage, // Placeholder
    'education-buddy': FinanceBuddyPage, // Placeholder
};


export default function BuddyPage({ params }: { params: { slug: string } }) {
  const buddy = buddies.find((b) => b.slug === params.slug);

  if (!buddy) {
    notFound();
  }

  const PageComponent = buddyPageMap[buddy.slug] || BusinessMentorPage; // Default to one style

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
