"use client";

import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { ChatMessage } from "@langchain/core/messages";

export const ChatContext = createContext({
  messages: [] as ChatMessage[],
  loading: false,
  handleMessages: (_messages: ChatMessage[]) => {},
  handleSingleMessage: (_message: ChatMessage) => {},
  handleUpdateMessage: (_content: string, _id: string) => {},
  handleLoading: (_loading: boolean) => {},
  toggleLoading: () => {},
});

export function Chat({ children }: PropsWithChildren) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleMessages = useCallback((newMessages: ChatMessage[]) => {
    setMessages((prev) => [...prev, ...newMessages]);
  }, []);

  const handleSingleMessage = useCallback((message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  const handleUpdateMessage = useCallback((content: string, id: string) => {
    setMessages((prev) => {
      const messages = prev.map((message) =>
        message.id === id ? ({ ...message, content } as ChatMessage) : message
      );

      return messages;
    });
  }, []);

  const handleLoading = useCallback((loading: boolean) => {
    setLoading(loading);
  }, []);

  const toggleLoading = useCallback(() => {
    setLoading((prev) => !prev);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        loading,
        handleMessages,
        handleSingleMessage,
        handleUpdateMessage,
        handleLoading,
        toggleLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
