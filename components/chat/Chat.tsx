"use client";

import { useState } from "react";
import { ChatMessage } from "@langchain/core/messages";
import { readStreamableValue } from "ai/rsc";
import { v4 as uuidv4 } from "uuid";

import { ChatNav } from "./ChatNav";
import { ChatList } from "./ChatList";
import { ChatInput } from "./ChatInput";
import { ChatEmpty } from "./ChatEmpty";

import { conversation } from "@/app/actions";

export function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEdit = (text?: string) => {
    if (text) {
      setInputValue(text);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const userMessage = {
        content: inputValue,
        role: "user",
        id: uuidv4(),
      } as ChatMessage;
      const aiMessage = {
        role: "assistant",
        id: uuidv4(),
      } as ChatMessage;

      setMessages((prev) => [...prev, userMessage, aiMessage]);
      const { newMessage } = await conversation(
        [...messages, userMessage],
        inputValue
      );
      let textContent = "";

      for await (const delta of readStreamableValue(newMessage)) {
        textContent = `${textContent}${delta}`;

        setMessages((prev) => {
          const messages = prev.map((message) =>
            message.id === aiMessage.id
              ? ({ ...message, content: textContent } as ChatMessage)
              : message
          );

          return messages;
        });
      }
      setInputValue("");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col overflow-y-auto items-center justify-center gap-2 w-full h-full">
      <ChatNav />

      {messages.length ? (
        <ChatList handleEdit={handleEdit} messages={messages} />
      ) : (
        <ChatEmpty />
      )}

      <ChatInput
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        loading={loading}
      />
    </section>
  );
}
