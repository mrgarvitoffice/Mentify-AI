
import { Briefcase, HeartHandshake, LandPlot, MonitorSmartphone, BookOpen, ShieldPlus, type LucideIcon, CheckCircle2, Zap, Target, BarChart, Users, Palette, Search, Bot, BrainCircuit, Orbit, MessageSquareText, Star, Quote, TrendingUp, Wallet, GraduationCap, Share2, Wind, HeartPulse, Activity, Coffee, Moon, Sun, Award, Brain, Lightbulb, Heart } from 'lucide-react';

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type HowItWorksStep = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export type Testimonial = {
    quote: string;
    author: string;
};

export type Buddy = {
  icon: LucideIcon;
  slug: string;
  title: string;
  description: string;
  tagline: string;
  features: Feature[];
  howItWorks: HowItWorksStep[];
  testimonials: Testimonial[];
  strengths: string[];
  dataAiHint: string;
  heroImage: string;
  pageStyle?: 'cinematic' | 'interactive' | 'luxury' | 'editorial' | 'grid' | 'functional';
  longDescription: string;
  secondaryFeatures: Feature[];
};

export const buddies: Buddy[] = [
  {
    icon: Briefcase,
    slug: 'business-mentor',
    title: "Business Motivator & Mentor",
    description: "Your 24/7 business coach for strategy, motivation, and growth guidance aligned to your entrepreneurial stars.",
    tagline: "Your AI co-founder for building, scaling, and conquering your market.",
    heroImage: "https://picsum.photos/seed/business/1200/800",
    dataAiHint: "business dashboard chart",
    pageStyle: 'cinematic',
    longDescription: 'The Business Motivator & Mentor is more than an assistant; it’s your AI co-founder. Built on advanced strategic models and personalized to your unique success blueprint, this buddy provides actionable insights, market analysis, and the daily motivation needed to turn your vision into a thriving enterprise.',
    features: [
      { icon: Target, title: "Goal-Oriented Strategies", description: "Receive actionable business plans and strategies tailored to your specific objectives and market conditions, ensuring you're always on the right path to success." },
      { icon: BarChart, title: "Market & Trend Analysis", description: "Stay ahead of the curve with AI-powered analysis of market trends, competitive landscapes, and consumer behavior to make informed decisions." },
      { icon: Users, title: "Leadership & Team Building", description: "Develop your leadership skills with guidance on team motivation, communication, and building a high-performance company culture." },
      { icon: Zap, title: "Productivity Hacks", description: "Get personalized productivity techniques and workflow optimizations to maximize your efficiency and focus on what truly matters." }
    ],
    secondaryFeatures: [
        { icon: TrendingUp, title: "Sales Funnel Optimization", description: "Analyze and improve your sales process from lead generation to conversion." },
        { icon: Wallet, title: "Financial Forecasting", description: "Get data-driven projections to make smarter budgeting and investment decisions." },
    ],
    howItWorks: [
      { icon: Bot, title: "Define Your Business Goals", description: "Tell your buddy about your business, your industry, and what you want to achieve. The more context, the better the strategy." },
      { icon: BrainCircuit, title: "AI Analyzes Your Profile", description: "The buddy cross-references your business goals with your unique birth chart strengths to identify hidden opportunities and potential challenges." },
      { icon: MessageSquareText, title: "Receive Actionable Roadmaps", description: "Get step-by-step plans, motivational messages, and strategic advice delivered daily to keep you on track." }
    ],
    testimonials: [
        { author: "John D., Startup Founder", quote: "The Business Buddy gave me a Q3 strategy that led to our first profitable quarter. It's like having a seasoned CEO in my pocket." },
        { author: "Maria K., Agency Owner", quote: "I was stuck in a growth plateau. My buddy helped me identify a new market segment that has become our primary revenue driver." }
    ],
    strengths: ["Strategic Planning", "Sales Coaching", "Motivation Boost", "Business Plan Explanations", "Market Analysis", "Team Leadership", "Product Development", "Financial Forecasting"],
  },
  {
    icon: HeartHandshake,
    slug: 'relationship-buddy',
    title: "Relationship & Social Buddy",
    description: "Navigate love, friendship, and social connections with cosmic wisdom tailored to your relational patterns.",
    tagline: "Your guide to deeper connections and a more fulfilling social life.",
    heroImage: "https://picsum.photos/seed/love/1200/800",
    dataAiHint: "happy couple",
    pageStyle: 'interactive',
    longDescription: 'The Relationship & Social Buddy is your personal guide to mastering the art of connection. By understanding your unique communication style and emotional needs, it provides the wisdom and confidence to build deep, meaningful relationships in love, friendship, and your social life.',
    features: [
      { icon: Heart, title: "Communication Coaching", description: "Learn to express yourself effectively and understand others' needs with personalized communication tips and role-playing scenarios." },
      { icon: Users, title: "Social Circle Expansion", description: "Get strategies and confidence-building exercises for meeting new people and forming meaningful friendships." },
      { icon: Zap, title: "Conflict Resolution", description: "Receive guidance on navigating disagreements and difficult conversations in a healthy, constructive way." },
      { icon: CheckCircle2, title: "Empathy Development", description: "Deepen your ability to connect with others on an emotional level through guided exercises and perspective-shifting insights." }
    ],
     secondaryFeatures: [
        { icon: Star, title: "Dating Profile Assist", description: "Get tips on creating a dating profile that truly reflects your personality." },
        { icon: Quote, title: "Conversation Starters", description: "Never be at a loss for words with context-aware conversation prompts." },
    ],
    howItWorks: [
      { icon: Bot, title: "Share Your Social Goals", description: "Whether it's finding a partner or making new friends, explain your relationship goals to your AI companion." },
      { icon: BrainCircuit, title: "AI Understands Your Patterns", description: "The buddy analyzes your astrological communication and attachment styles to offer tailored advice." },
      { icon: MessageSquareText, title: "Get Daily Interaction Tips", description: "Receive daily challenges, conversation starters, and insights to help you build confidence and connect." }
    ],
    testimonials: [
        { author: "Sarah J., Recently Engaged", quote: "I struggled with dating for years. The Relationship Buddy helped me understand my own patterns and I finally met my amazing fiancé." },
        { author: "Mike T., New in Town", quote: "Moving to a new city was lonely. This buddy gave me the confidence and tools to build a great group of friends from scratch." }
    ],
    strengths: ["Communication Skills", "Empathy Development", "Dating & Friendship Advice", "Conflict Resolution", "Social Confidence", "Active Listening", "Building Trust", "Understanding Needs"],
  },
  {
    icon: LandPlot,
    slug: 'finance-buddy',
    title: "Finance & Real Estate Buddy",
    description: "Your personal wealth advisor for investments, savings, and property decisions based on your financial stars.",
    tagline: "Master your money and build generational wealth with an AI that gets you.",
    heroImage: "https://picsum.photos/seed/finance/1200/800",
    dataAiHint: "real estate",
    pageStyle: 'luxury',
    longDescription: 'The Finance & Real Estate Buddy brings clarity and confidence to your financial life. It demystifies wealth creation by providing personalized investment strategies, real estate insights, and debt management plans, all while fostering a mindset of abundance and long-term security.',
    features: [
        { icon: BarChart, title: "Personalized Investment Plans", description: "Receive investment strategies tailored to your risk tolerance, financial goals, and astrologically-timed opportunities." },
        { icon: LandPlot, title: "Real Estate Insights", description: "Analyze property markets and get guidance on buying, selling, or investing in real estate with AI-powered data." },
        { icon: Target, title: "Debt Reduction Strategies", description: "Create a customized plan to tackle debt effectively, with motivational support to keep you on track towards financial freedom." },
        { icon: Star, title: "Wealth Growth Mindset", description: "Develop a positive and strategic mindset around money, wealth, and abundance through daily affirmations and insights." }
    ],
    secondaryFeatures: [
        { icon: Wallet, title: "Budgeting Automation", description: "Link your accounts to get automated budgeting help and spending analysis." },
        { icon: ShieldPlus, title: "Retirement Planning", description: "Visualize your retirement goals and get a step-by-step plan to achieve them." },
    ],
     howItWorks: [
      { icon: Bot, title: "Input Your Financial Picture", description: "Securely provide your financial goals, from saving for a home to planning retirement." },
      { icon: BrainCircuit, title: "AI Aligns with Your Risk Profile", description: "Your buddy assesses your financial personality and astrological indicators for wealth to create a unique plan." },
      { icon: MessageSquareText, title: "Receive Smart Money Alerts", description: "Get notifications for investment opportunities, savings milestones, and market shifts tailored to you." }
    ],
    testimonials: [
        { author: "David L., Homeowner", quote: "I never thought I could afford a house. The Finance Buddy created a savings plan that made it possible in just two years." },
        { author: "Emily R., Investor", quote: "My portfolio is up 35% since I started using the investment insights from my buddy. It's an incredible tool." }
    ],
    strengths: ["Investment Insights", "Savings Strategies", "Real Estate Market Analysis", "Budgeting Help", "Debt Reduction", "Retirement Planning", "Portfolio Diversification", "Wealth Growth"],
  },
  {
    icon: ShieldPlus,
    slug: 'health-buddy',
    title: "Health & Wellness Buddy",
    description: "Holistic health guidance for body, mind, and spirit aligned to your wellness potential and energy cycles.",
    tagline: "Your AI partner for achieving total well-being, inside and out.",
    heroImage: "https://picsum.photos/seed/health/1200/800",
    dataAiHint: "person meditating",
    pageStyle: 'editorial',
    longDescription: 'The Health & Wellness Buddy is your dedicated partner in achieving a vibrant, balanced life. It goes beyond generic advice, offering holistic wellness plans for fitness, nutrition, and mental clarity that are synced with your body’s unique energy cycles, helping you feel your best every single day.',
    features: [
      { icon: Sun, title: "Morning Routine", description: "Start your day with purpose. Guided meditation, gentle stretches, and a personalized breakfast plan." },
      { icon: Activity, title: "Afternoon Boost", description: "Beat the slump with a dynamic workout, a healthy snack suggestion, and a motivational push." },
      { icon: Coffee, title: "Evening Wind-Down", description: "Transition to rest with a calming soundscape, a light dinner recipe, and a digital detox reminder." },
      { icon: Moon, title: "Nighttime Ritual", description: "Prepare for deep sleep with breathing exercises, a gratitude journal prompt, and optimal sleep-time suggestions." }
    ],
    secondaryFeatures: [
        { icon: HeartPulse, title: "Bio-Rhythm Sync", description: "Align your activities with your natural energy peaks and troughs for maximum effectiveness." },
        { icon: Wind, title: "Mindful Breathing", description: "Access a library of breathing exercises to reduce stress and increase focus anytime, anywhere." }
    ],
     howItWorks: [
      { icon: Bot, title: "Set Your Wellness Goals", description: "Define what health means to you, from fitness milestones to mental clarity and stress reduction." },
      { icon: BrainCircuit, title: "AI Syncs with Your Body's Clock", description: "The buddy uses your birth chart to understand your natural energy cycles and physical constitution." },
      { icon: MessageSquareText, title: "Get Daily Wellness Nudges", description: "Receive reminders, workout ideas, and mindful check-ins to help you build healthy habits effortlessly." }
    ],
    testimonials: [
        { author: "Jessica P., Fitness Enthusiast", quote: "I broke through my fitness plateau by following the astrologically-timed workout suggestions. I've never felt stronger." },
        { author: "Tom H., Corporate Professional", quote: "The stress management exercises have been a lifesaver. I feel more calm and focused at work than ever before." }
    ],
    strengths: ["Custom Fitness Plans", "Holistic Diet Advice", "Mindfulness Practices", "Wellness Tracking", "Stress Management", "Sleep Improvement", "Energy Boosting", "Mental Resilience"],
  },
  {
    icon: MonitorSmartphone,
    slug: 'branding-buddy',
    title: "Social Media & Branding Buddy",
    description: "Build your online presence and personal brand with content strategies aligned to your authentic self.",
    tagline: "Your personal AI publicist for building an unforgettable brand.",
    heroImage: "https://picsum.photos/seed/branding/1200/800",
    dataAiHint: "social media interface",
    pageStyle: 'grid',
    longDescription: 'The Social Media & Branding Buddy is your secret weapon for digital influence. It helps you craft a powerful, authentic brand that captivates your audience. From viral content strategies to audience growth tactics, this buddy provides the tools to build a thriving online presence.',
    features: [
      { icon: Palette, title: "Authentic Brand Voice", description: "Develop a powerful and authentic brand voice that resonates with your target audience and reflects your core values." },
      { icon: Zap, title: "Viral Content Strategies", description: "Get AI-generated content ideas, trend analyses, and posting schedules designed to maximize your reach and engagement." },
      { icon: Users, title: "Audience Growth Tactics", description: "Learn proven strategies for growing your following on social media and building a loyal, engaged community." },
      { icon: BarChart, title: "Performance Analytics", description: "Track your growth and understand your audience better with simplified analytics and actionable insights." }
    ],
    secondaryFeatures: [
        { icon: Award, title: "Brand Kit Generator", description: "Create a cohesive brand identity with AI-generated logos, color palettes, and font pairings." },
        { icon: TrendingUp, title: "Trend Spotting", description: "Get ahead of viral trends with real-time alerts and content recommendations tailored to your niche." }
    ],
     howItWorks: [
      { icon: Bot, title: "Define Your Brand Identity", description: "Tell your buddy about your niche, your target audience, and the message you want to convey." },
      { icon: BrainCircuit, title: "AI Finds Your Unique Angle", description: "The buddy analyzes your chart to find the most authentic way for you to express yourself and connect with others." },
      { icon: MessageSquareText, title: "Receive Your Content Calendar", description: "Get a daily and weekly plan with content ideas, optimal posting times, and engagement strategies." }
    ],
    testimonials: [
        { author: "Chloe W., Content Creator", quote: "My TikTok following has tripled in two months. The content ideas are pure gold and feel so true to me." },
        { author: "Ben S., Small Business Owner", quote: "I finally have a clear brand strategy. The buddy helped me create a consistent voice that my customers love." }
    ],
    strengths: ["Content Creation", "Brand Voice Development", "Audience Growth Strategies", "Viral Trend Analysis", "Platform Optimization", "Engagement Tactics", "Personal Branding", "Monetization"],
  },
  {
    icon: BookOpen,
    slug: 'education-buddy',
    title: "Problem Solver & Education Buddy",
    description: "Your learning companion for skill development and problem-solving aligned to your intellectual strengths.",
    tagline: "Learn anything faster and solve any problem smarter with your AI tutor.",
    heroImage: "https://picsum.photos/seed/education/1200/800",
    dataAiHint: "person studying",
    pageStyle: 'functional',
    longDescription: 'The Problem Solver & Education Buddy is your personal AI tutor for accelerated learning and creative problem-solving. It creates personalized learning paths that adapt to your unique cognitive style, helping you master any skill or overcome any challenge with confidence and clarity.',
    features: [
        { icon: BrainCircuit, title: "Personalized Learning Paths", description: "Master any skill with a customized curriculum that adapts to your learning style and pace, based on your cognitive profile." },
        { icon: Search, title: "Complex Problem Solving", description: "Break down complex problems into manageable steps and get creative, AI-driven solutions you hadn't considered." },
        { icon: Target, title: "Knowledge Retention", description: "Use scientifically-backed techniques like spaced repetition and active recall, delivered by your buddy to ensure you never forget what you learn." },
        { icon: Zap, title: "Accelerated Skill Acquisition", description: "Receive curated resources, summaries, and practice exercises to help you learn new skills in record time." }
    ],
    secondaryFeatures: [
        { icon: Brain, title: "Critical Thinking Drills", description: "Sharpen your analytical skills with daily logic puzzles and thinking exercises." },
        { icon: Lightbulb, title: "Idea Generation Matrix", description: "Overcome creative blocks with structured brainstorming and idea-generation frameworks." }
    ],
    howItWorks: [
      { icon: Bot, title: "Choose Your Subject or Problem", description: "Whether it's learning a new language or solving a complex work challenge, define your objective." },
      { icon: BrainCircuit, title: "AI Assesses Your Learning Style", description: "Your buddy analyzes your astrological chart to understand how you best absorb and process information." },
      { icon: MessageSquareText, title: "Get Your Custom Lesson Plan", description: "Receive daily micro-lessons, quizzes, and problem-solving exercises tailored to your unique mind." }
    ],
    testimonials: [
        { author: "Ana G., University Student", quote: "I aced my finals using the custom study guides from the Education Buddy. It's the best study partner I've ever had." },
        { author: "Mark R., Software Developer", quote: "I was able to learn Python in a month for a new project at work. The personalized learning path was a game-changer." }
    ],
    strengths: ["Skill Acquisition", "Complex Problem-Solving", "Personalized Learning Paths", "Sales Training", "Critical Thinking", "Research Assistance", "Exam Preparation", "Knowledge Synthesis"],
  },
];

    