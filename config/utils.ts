import type { ApiError } from "@/types";

import { Message } from "ai";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";

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

export const documentFromBlob = async (blob: Blob) => {
  try {
    const loader = new WebPDFLoader(blob);
    const docs = await loader.load();

    return docs;
  } catch {
    throw { message: "Error loading document", status: 400 };
  }
};
