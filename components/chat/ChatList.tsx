"use client";

import { useContext } from "react";

import { AiMessage } from "./AiMessage";
import { UserMessage } from "./UserMessage";
import { ChatContext } from "./Chat";

export function ChatList() {
  const { messages } = useContext(ChatContext);

  return (
    <div className="w-full h-full overflow-y-auto flex justify-center pb-2">
      <div className="max-h-full w-full overflow-y-auto scrollbar-hide scroll-smooth">
        {messages.map((message) =>
          message.role === "assistant" ? (
            <AiMessage key={message.id} message={message} />
          ) : (
            <UserMessage key={message.id} message={message} />
          )
        )}
      </div>
    </div>
  );
}
