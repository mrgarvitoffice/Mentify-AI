
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Link from 'next/link';
import { BookOpen, FileText, LifeBuoy, Search, Settings, UserCircle } from 'lucide-react';

const helpCategories = [
    { title: "Getting Started", icon: BookOpen, href: "#" },
    { title: "My Account", icon: UserCircle, href: "#" },
    { title: "Billing", icon: FileText, href: "#" },
    { title: "Buddy Features", icon: Settings, href: "#" },
];

const topArticles = [
    { title: "How do I personalize my AI Buddy?", description: "A step-by-step guide to aligning your buddy with your birth chart..." },
    { title: "Understanding your billing statement", description: "Learn how to read your monthly or yearly invoices..." },
    { title: "What is the difference between a Customer and a Partner?", description: "Explore the two roles you can choose at checkout..." },
    { title: "Troubleshooting voice interactions", description: "Common solutions for issues with voice chat..." },
    { title: "How to reset your password", description: "Follow these simple steps to regain access to your account..." },
];

export default function HelpCenterPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* Hero Search */}
                <section className="py-24 sm:py-32 text-center bg-primary/5">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl font-bold font-headline">How can we help?</h1>
                        <div className="mt-8 max-w-2xl mx-auto relative">
                             <Input placeholder="Search the help center..." className="pl-14 h-14 rounded-full text-lg shadow-lg" />
                             <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                        </div>
                    </div>
                </section>
                
                {/* Main content */}
                <section className="py-24">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {/* Left Sidebar */}
                            <aside className="md:col-span-1">
                                <h2 className="text-xl font-bold mb-4">Categories</h2>
                                <nav className="space-y-2">
                                    {helpCategories.map(cat => {
                                        const Icon = cat.icon;
                                        return (
                                            <Link key={cat.title} href={cat.href} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                                                <Icon className="w-5 h-5 text-primary" />
                                                <span className="font-medium">{cat.title}</span>
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </aside>

                            {/* Right Content */}
                            <div className="md:col-span-3">
                                <h2 className="text-2xl font-bold mb-6">Top Articles</h2>
                                <div className="space-y-4">
                                    {topArticles.map(article => (
                                        <Card key={article.title} className="hover:border-primary/50 transition-colors">
                                            <CardContent className="p-6">
                                                <h3 className="font-bold text-lg hover:text-primary transition-colors">{article.title}</h3>
                                                <p className="text-muted-foreground mt-1">{article.description}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>

                         {/* Support CTA */}
                        <div className="mt-24 text-center p-8 rounded-lg bg-muted/50 border">
                             <h2 className="text-2xl font-bold">Still need help?</h2>
                            <p className="text-muted-foreground mt-2">Our dedicated support team is available around the clock.</p>
                            <Button size="lg" className="mt-4">
                                <LifeBuoy className="mr-2"/>
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
