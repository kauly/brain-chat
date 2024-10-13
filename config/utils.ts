import type { ApiError } from "@/types";

import { Message } from "ai";
import { AIMessage, HumanMessage } from "@langchain/core/messages";

export const parseError = (
  e: unknown,
  message = "Error processing request"
): ApiError => ({
  message: (e as ApiError).message ?? message,
  status: (e as ApiError).status ?? 500,
});

export const parseMessages = (messages: Message[]) =>
  messages.map((message) =>
    message.role === "assistant"
      ? new AIMessage(message.content)
      : new HumanMessage(message.content)
  );
