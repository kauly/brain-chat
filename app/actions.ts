"use server";

import { createStreamableValue } from "ai/rsc";
import { ChatGroq } from "@langchain/groq";
import { ChatMessage } from "@langchain/core/messages";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function conversation(messages: ChatMessage[]) {
  const stream = createStreamableValue();

  (async () => {
    const llm = new ChatGroq({
      model: "mixtral-8x7b-32768",
      temperature: 0,
    });
    const response = await llm.stream(messages);

    for await (const chunk of response) {
      stream.update(chunk.content);
    }

    stream.done();
  })();

  return {
    messages,
    newMessage: stream.value,
  };
}
