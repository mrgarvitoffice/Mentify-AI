import {NextRequest} from 'next/server';
import {chatbot} from '@/ai/flows/chatbot';
import {Message, StreamingTextResponse} from 'ai';

export async function POST(req: NextRequest) {
  const {messages} = await req.json();

  const history = {
    history: messages.slice(0, -1).map((m: Message) => ({
      role: m.role,
      content: m.content,
    })),
    message: messages[messages.length - 1].content,
  };

  const response = await chatbot(history);
  return new StreamingTextResponse(response.stream());
}
