import { CoreMessage } from "ai";
import { AiMessage } from "./AiMessage";
import { UserMessage } from "./UserMessage";

type ChatListProps = {
  messages: CoreMessage[];
};

export function ChatList({ messages = [] }: ChatListProps) {
  return (
    <div className="w-full h-full overflow-y-auto flex justify-center pb-2">
      <div className="max-h-full w-full overflow-y-auto scrollbar-hide scroll-smooth">
        <AiMessage message={{ content: "ola", role: "assistant" }} />
        <UserMessage
          message={{ content: "ola asasssssss as as as a s", role: "user" }}
        />
        <AiMessage message={{ content: "ola", role: "assistant" }} />
        <UserMessage
          message={{ content: "ola asasssssss as as as a s", role: "user" }}
        />
        <AiMessage message={{ content: "ola", role: "assistant" }} />
        <UserMessage
          message={{ content: "ola asasssssss as as as a s", role: "user" }}
        />
        <AiMessage message={{ content: "ola", role: "assistant" }} />
        <UserMessage
          message={{ content: "ola asasssssss as as as a s", role: "user" }}
        />
        <AiMessage message={{ content: "ola", role: "assistant" }} />
        <UserMessage
          message={{ content: "ola asasssssss as as as a s", role: "user" }}
        />
        <AiMessage message={{ content: "ola", role: "assistant" }} />
        <UserMessage
          message={{ content: "ola asasssssss as as as a s", role: "user" }}
        />
        <AiMessage message={{ content: "ola", role: "assistant" }} />
        <UserMessage
          message={{ content: "ola asasssssss as as as a s", role: "user" }}
        />
      </div>
    </div>
  );
}
