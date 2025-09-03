'use server';
/**
 * @fileOverview A chatbot flow that provides information about the 6 AI buddies.
 *
 * - chatbot - A function that handles the chatbot interaction.
 */
import {ai} from '@/ai/genkit';
import {z} from 'zod';

const chatbotHistorySchema = z.object({
  history: z.array(
    z.object({
      role: z.enum(['user', 'model']),
      content: z.string(),
    })
  ),
  message: z.string(),
});

const prompt = ai.definePrompt(
  {
    name: 'chatbotPrompt',
    input: {
      schema: chatbotHistorySchema,
    },
    prompt: `You are AI Flix, a friendly and helpful assistant for Mentify-AI.
Your purpose is to answer questions about the 6 AI Buddies. Be concise and encouraging.

Here is the list of AI Buddies and their descriptions:
- Business Motivator & Mentor: Inspires, guides, and explains business strategies. Your 24/7 business coach.
- Relationship & Social Buddy: Navigate love, friendship, and emotional connections with confidence.
- Finance & Real Estate Buddy: Your personal guide for investments, savings, and real estate.
- Health & Wellness Buddy: Holistic health advisor for diet, fitness, and wellbeing transformation.
- Social Media & Branding Buddy: Build your online identity and grow your digital presence.
- Problem Solver & Education Buddy: Your learning companion for skill development and problem-solving.

Conversation History:
{{#each history}}
- {{role}}: {{content}}
{{/each}}

User's new message:
- user: {{{message}}}

Your response:
`,
  },
);

export async function chatbot(history: z.infer<typeof chatbotHistorySchema>) {
  const {output} = await prompt(history);
  return output;
}
