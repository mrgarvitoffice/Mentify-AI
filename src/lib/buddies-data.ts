
import { Briefcase, HeartHandshake, LandPlot, MonitorSmartphone, BookOpen, ShieldPlus, type LucideIcon } from 'lucide-react';

export type Buddy = {
  icon: LucideIcon;
  slug: string;
  title: string;
  description: string;
  features: string;
  strengths: string[];
  dataAiHint: string;
};

export const buddies: Buddy[] = [
  {
    icon: Briefcase,
    slug: 'business-mentor',
    title: "Business Motivator & Mentor",
    description: "Your 24/7 business coach for strategy, motivation, and growth guidance aligned to your entrepreneurial stars.",
    features: "Strategy Planning • Goal Setting • Market Analysis • Team Building",
    strengths: ["Strategic Planning", "Sales Coaching", "Motivation Boost", "Business Plan Explanations", "Market Analysis", "Team Leadership", "Product Development", "Financial Forecasting"],
    dataAiHint: "business dashboard chart"
  },
  {
    icon: HeartHandshake,
    slug: 'relationship-buddy',
    title: "Relationship & Social Buddy",
    description: "Navigate love, friendship, and social connections with cosmic wisdom tailored to your relational patterns.",
    features: "Dating Advice • Social Skills • Emotional Support • Communication",
    strengths: ["Communication Skills", "Empathy Development", "Dating & Friendship Advice", "Conflict Resolution", "Social Confidence", "Active Listening", "Building Trust", "Understanding Needs"],
     dataAiHint: "happy couple"
  },
  {
    icon: LandPlot,
    slug: 'finance-buddy',
    title: "Finance & Real Estate Buddy",
    description: "Your personal wealth advisor for investments, savings, and property decisions based on your financial stars.",
    features: "Investment Planning • Portfolio Management • Real Estate • Budgeting",
    strengths: ["Investment Insights", "Savings Strategies", "Real Estate Market Analysis", "Budgeting Help", "Debt Reduction", "Retirement Planning", "Portfolio Diversification", "Wealth Growth"],
    dataAiHint: "real estate"
  },
  {
    icon: ShieldPlus,
    slug: 'health-buddy',
    title: "Health & Wellness Buddy",
    description: "Holistic health guidance for body, mind, and spirit aligned to your wellness potential and energy cycles.",
    features: "Fitness Plans • Nutrition Guidance • Mental Health • Sleep Optimization",
    strengths: ["Custom Fitness Plans", "Holistic Diet Advice", "Mindfulness Practices", "Wellness Tracking", "Stress Management", "Sleep Improvement", "Energy Boosting", "Mental Resilience"],
    dataAiHint: "person meditating"
  },
  {
    icon: MonitorSmartphone,
    slug: 'branding-buddy',
    title: "Social Media & Branding Buddy",
    description: "Build your online presence and personal brand with content strategies aligned to your authentic self.",
    features: "Content Creation • Brand Strategy • Growth Tactics • Analytics",
    strengths: ["Content Creation", "Brand Voice Development", "Audience Growth Strategies", "Viral Trend Analysis", "Platform Optimization", "Engagement Tactics", "Personal Branding", "Monetization"],
    dataAiHint: "social media interface"
  },
  {
    icon: BookOpen,
    slug: 'education-buddy',
    title: "Problem Solver & Education Buddy",
    description: "Your learning companion for skill development and problem-solving aligned to your intellectual strengths.",
    features: "Learning Paths • Skill Building • Research • Knowledge Retention",
    strengths: ["Skill Acquisition", "Complex Problem-Solving", "Personalized Learning Paths", "Sales Training", "Critical Thinking", "Research Assistance", "Exam Preparation", "Knowledge Synthesis"],
    dataAiHint: "person studying"
  },
];
