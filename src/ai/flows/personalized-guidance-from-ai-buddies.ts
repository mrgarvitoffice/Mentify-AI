'use server';

/**
 * @fileOverview A flow for providing personalized guidance from AI buddies based on user data.
 *
 * - getPersonalizedGuidance - A function that takes user data and returns personalized advice.
 * - PersonalizedGuidanceInput - The input type for the getPersonalizedGuidance function.
 * - PersonalizedGuidanceOutput - The return type for the getPersonalizedGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGuidanceInputSchema = z.object({
  userData: z
    .string()
    .describe('User-provided data including personal preferences and goals.'),
  aiBuddyExpertise: z
    .string()
    .describe(
      'The area of expertise the AI Buddy should have (e.g., business, relationship, finance).'
    ),
});
export type PersonalizedGuidanceInput = z.infer<
  typeof PersonalizedGuidanceInputSchema
>;

const PersonalizedGuidanceOutputSchema = z.object({
  advice: z
    .string()
    .describe('Personalized advice and insights from the AI Buddy.'),
});
export type PersonalizedGuidanceOutput = z.infer<
  typeof PersonalizedGuidanceOutputSchema
>;

export async function getPersonalizedGuidance(
  input: PersonalizedGuidanceInput
): Promise<PersonalizedGuidanceOutput> {
  return personalizedGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGuidancePrompt',
  input: {schema: PersonalizedGuidanceInputSchema},
  output: {schema: PersonalizedGuidanceOutputSchema},
  prompt: `You are a personalized AI Buddy with expertise in {{{aiBuddyExpertise}}}.

  Based on the following user data:
  {{{userData}}}

  Provide personalized advice and insights to help the user achieve their goals.
  Focus on actionable steps and practical recommendations.
  Keep the advice concise and easy to understand.
  Make the response personable and friendly.
  Speak directly to the user, as if having a conversation.
  
  Ensure that the advice is relevant to the user's specific situation and goals.
  Do not give generic advice that could apply to anyone.
  Be specific and provide tailored recommendations.
  Think step by step, then provide a detailed answer.
  
  Return a single, complete, useful answer.
  
  AI Buddy Advice:`,
});

const personalizedGuidanceFlow = ai.defineFlow(
  {
    name: 'personalizedGuidanceFlow',
    inputSchema: PersonalizedGuidanceInputSchema,
    outputSchema: PersonalizedGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
