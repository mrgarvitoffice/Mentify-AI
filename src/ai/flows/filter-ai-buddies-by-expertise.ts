'use server';
/**
 * @fileOverview Filters AI buddies by expertise for customized interactions, displaying buddy strengths relative to user prompts.
 *
 * - filterAIBuddiesByExpertise - A function that filters AI buddies based on user input.
 * - FilterAIBuddiesByExpertiseInput - The input type for the filterAIBuddiesByExpertise function.
 * - FilterAIBuddiesByExpertiseOutput - The return type for the filterAIBuddiesByExpertise function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FilterAIBuddiesByExpertiseInputSchema = z.object({
  userInput: z.string().describe('The user input describing the desired expertise.'),
});
export type FilterAIBuddiesByExpertiseInput = z.infer<typeof FilterAIBuddiesByExpertiseInputSchema>;

const FilterAIBuddiesByExpertiseOutputSchema = z.object({
  filteredBuddies: z.array(z.string()).describe('An array of AI buddy names filtered by expertise.'),
});
export type FilterAIBuddiesByExpertiseOutput = z.infer<typeof FilterAIBuddiesByExpertiseOutputSchema>;

export async function filterAIBuddiesByExpertise(input: FilterAIBuddiesByExpertiseInput): Promise<FilterAIBuddiesByExpertiseOutput> {
  return filterAIBuddiesByExpertiseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'filterAIBuddiesByExpertisePrompt',
  input: {schema: FilterAIBuddiesByExpertiseInputSchema},
  output: {schema: FilterAIBuddiesByExpertiseOutputSchema},
  prompt: `Given the following user input: {{{userInput}}}, filter the following list of AI buddies by expertise, and return only the names of the buddies that are most relevant to the user input.\nAI Buddies: Business Motivator & Mentor, Relationship & Social Buddy, Finance & Real Estate Buddy, Health & Wellness Buddy, Social Media & Branding Buddy, Problem Solver & Education Buddy.\nReturn the result as a JSON array of strings.`,
});

const filterAIBuddiesByExpertiseFlow = ai.defineFlow(
  {
    name: 'filterAIBuddiesByExpertiseFlow',
    inputSchema: FilterAIBuddiesByExpertiseInputSchema,
    outputSchema: FilterAIBuddiesByExpertiseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
