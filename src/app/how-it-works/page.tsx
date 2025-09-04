
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import HowItWorksSection from '@/components/sections/how-it-works-section';

export default function HowItWorksPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                <HowItWorksSection />
            </main>
            <Footer />
        </div>
    );
}
