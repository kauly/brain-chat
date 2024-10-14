"use client";

import { ChatMessage } from "@langchain/core/messages";
import { useEffect, useRef } from "react";

import { AiMessage } from "./AiMessage";
import { UserMessage } from "./UserMessage";

type ChatListProps = {
  messages: ChatMessage[];
  handleEdit: (text?: string) => void;
};

export function ChatList({ messages, handleEdit }: ChatListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [messages]);

  return (
    <div className="w-full h-full overflow-y-auto flex flex-1 justify-center pb-2">
      <div
        ref={listRef}
        className="max-h-full w-full overflow-y-auto scrollbar-hide scroll-smooth"
      >
        {messages.map((message) =>
          message.role === "assistant" ? (
            <AiMessage key={message.id} message={message} />
          ) : (
            <UserMessage
              key={message.id}
              handleEdit={handleEdit}
              message={message}
            />
          )
        )}
      </div>
    </div>
  );
}
