
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

const featuredPost = {
    title: "The Future of AI Companions: A Deep Dive",
    description: "Explore how hyper-personalized AI is changing the way we interact with technology, fostering growth, and unlocking human potential in ways we never thought possible.",
    author: "Jane Doe, AI Ethicist",
    date: "October 26, 2023",
    image: "https://picsum.photos/seed/blog-hero/1600/800",
    dataAiHint: "futuristic technology abstract",
    href: "#"
};

const blogPosts = [
    {
        title: "5 Ways Your AI Buddy Can Boost Your Business",
        category: "Business",
        image: "https://picsum.photos/seed/blog-1/600/400",
        dataAiHint: "business meeting",
        href: "#"
    },
    {
        title: "The Art of Connection: Building Better Relationships with AI",
        category: "Relationships",
        image: "https://picsum.photos/seed/blog-2/600/400",
        dataAiHint: "people talking",
        href: "#"
    },
    {
        title: "Unlocking Your Financial Potential with an AI Mentor",
        category: "Finance",
        image: "https://picsum.photos/seed/blog-3/600/400",
        dataAiHint: "financial chart",
        href: "#"
    },
    {
        title: "Crafting a Viral Brand: A Guide for Creators",
        category: "Branding",
        image: "https://picsum.photos/seed/blog-4/600/400",
        dataAiHint: "social media interface",
        href: "#"
    },
     {
        title: "Holistic Wellness in the Digital Age",
        category: "Wellness",
        image: "https://picsum.photos/seed/blog-5/600/400",
        dataAiHint: "person meditating",
        href: "#"
    },
     {
        title: "The Science of Learning Faster with AI",
        category: "Education",
        image: "https://picsum.photos/seed/blog-6/600/400",
        dataAiHint: "person studying",
        href: "#"
    },
];

const categories = ["All", "Business", "Relationships", "Finance", "Wellness", "Branding", "Education"];

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-[60vh] w-full">
                    <Image
                        src={featuredPost.image}
                        alt="Featured post"
                        fill
                        className="object-cover"
                        data-ai-hint={featuredPost.dataAiHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-6xl font-bold font-headline">
                                {featuredPost.title}
                            </h1>
                            <p className="mt-4 text-lg text-white/80 max-w-2xl">
                                {featuredPost.description}
                            </p>
                            <div className="mt-6 text-sm text-white/60">
                                <span>{featuredPost.author}</span> &bull; <span>{featuredPost.date}</span>
                            </div>
                            <Button asChild className="mt-8" size="lg">
                                <Link href={featuredPost.href}>Read More <ArrowRight className="ml-2" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-6 lg:px-8 py-16">
                    {/* Sticky Filter Bar */}
                    <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-lg py-4 mb-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 overflow-x-auto pb-2">
                                {categories.map(cat => (
                                    <Button key={cat} variant={cat === "All" ? "default" : "ghost"} className="rounded-full flex-shrink-0">
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                            <div className="relative w-full md:w-64">
                                <Input placeholder="Search articles..." className="pl-10" />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Blog Posts */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {blogPosts.map(post => (
                                <Card key={post.title} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <CardHeader className="p-0">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                            data-ai-hint={post.dataAiHint}
                                        />
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <p className="text-sm font-semibold text-primary">{post.category}</p>
                                        <h2 className="text-xl font-bold mt-2">{post.title}</h2>
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0">
                                        <Link href={post.href} className="font-semibold text-sm group-hover:text-primary transition-colors">
                                            Read More <ArrowRight className="inline-block ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Trending Posts</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {blogPosts.slice(0, 3).map(post => (
                                            <li key={post.title} className="flex items-start gap-4 group">
                                                <Image src={post.image} alt="" width={80} height={80} className="rounded-lg object-cover" data-ai-hint={post.dataAiHint} />
                                                <div>
                                                    <Link href={post.href} className="font-semibold leading-tight group-hover:text-primary transition-colors">{post.title}</Link>
                                                    <p className="text-sm text-muted-foreground mt-1">{post.category}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-primary/5">
                                <CardHeader>
                                    <CardTitle>Subscribe to our Newsletter</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">Get the latest insights and updates delivered to your inbox.</p>
                                    <div className="flex flex-col gap-2">
                                        <Input placeholder="Enter your email" />
                                        <Button>Subscribe</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
