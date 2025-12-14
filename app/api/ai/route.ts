import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
      return new Response("Missing OPENAI_API_KEY", { status: 500 });
  }

  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages,
  });

  return result.toTextStreamResponse();
}
