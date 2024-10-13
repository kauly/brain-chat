"use client";

import { v4 as uuidv4 } from "uuid";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useContext } from "react";
import { ChatMessage } from "@langchain/core/messages";
import { readStreamableValue } from "ai/rsc";

import { ChatContext } from "./Chat";

import { PaperPlane } from "@/components/icons";
import { conversation } from "@/app/actions";

export function ChatInput() {
  const { loading, handleMessages, handleUpdateMessage, messages } =
    useContext(ChatContext);

  const handleSubmit = async (formData: FormData) => {
    const input = formData.get("chat-input") as string;
    const userMessage = {
      content: input,
      role: "user",
      id: uuidv4(),
    } as ChatMessage;
    const aiMessage = {
      content: "loading...",
      role: "assistant",
      id: uuidv4(),
    } as ChatMessage;

    handleMessages([userMessage, aiMessage]);
    const { messages: newMessages, newMessage } = await conversation([
      ...messages,
      userMessage,
    ]);
    let textContent = "";

    for await (const delta of readStreamableValue(newMessage)) {
      textContent = `${textContent}${delta}`;
      handleUpdateMessage(textContent, aiMessage.id as string);
    }

    console.log("🚀 ~ handleSubmit ~ newMessages:", newMessages);
  };

  return (
    <form action={handleSubmit}>
      <Input
        fullWidth
        isRequired
        endContent={
          <Button isIconOnly isLoading={loading} size="sm" variant="light">
            <PaperPlane />
          </Button>
        }
        id="chat-input"
        isDisabled={loading}
        name="chat-input"
        placeholder="Send a message."
        size="lg"
        variant="faded"
      />
    </form>
  );
}
