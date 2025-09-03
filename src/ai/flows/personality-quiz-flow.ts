'use server';
/**
 * @fileOverview A flow that recommends an AI buddy based on a personality quiz.
 *
 * - recommendBuddy - A function that takes quiz answers and returns a recommended buddy.
 * - PersonalityQuizInput - The input type for the recommendBuddy function.
 * - PersonalityQuizOutput - The return type for the recommendBuddy function.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const PersonalityQuizInputSchema = z.object({
  answers: z.array(z.string()).describe('An array of answers from the personality quiz.'),
});
export type PersonalityQuizInput = z.infer<typeof PersonalityQuizInputSchema>;

const PersonalityQuizOutputSchema = z.object({
  recommendedBuddy: z.string().describe('The name of the recommended AI buddy.'),
  reasoning: z.string().describe('A brief explanation for the recommendation.'),
});
export type PersonalityQuizOutput = z.infer<typeof PersonalityQuizOutputSchema>;

const prompt = ai.definePrompt({
  name: 'personalityQuizPrompt',
  input: { schema: PersonalityQuizInputSchema },
  output: { schema: PersonalityQuizOutputSchema },
  prompt: `You are an expert at matching people with their ideal AI companion based on their personality.
Analyze the following quiz answers and recommend the most suitable AI Buddy from the list below. Provide a short, encouraging reason for your choice.

AI Buddies:
- Business Motivator & Mentor: For ambitious, goal-oriented, and strategic individuals.
- Relationship & Social Buddy: For empathetic, communicative people focused on connection.
- Finance & Real Estate Buddy: For practical, analytical, and wealth-focused minds.
- Health & Wellness Buddy: For disciplined, health-conscious, and mindful people.
- Social Media & Branding Buddy: For creative, expressive, and trend-aware personalities.
- Problem Solver & Education Buddy: For curious, logical, and knowledge-seeking individuals.

Quiz Answers:
{{#each answers}}
- {{{this}}}
{{/each}}
`,
});

export async function recommendBuddy(input: PersonalityQuizInput): Promise<PersonalityQuizOutput> {
  const { output } = await prompt(input);
  return output!;
}
