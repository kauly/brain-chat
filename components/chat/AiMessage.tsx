import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { ChatMessage } from "@langchain/core/messages";
import { Skeleton } from "@nextui-org/skeleton";
import ReactMarkdown from "react-markdown";

import CopyButton from "@/components/copy-button";
import { ShareNetwork } from "@/components/icons";

type AiMessageProps = {
  message: ChatMessage;
};

export function AiMessage({ message }: AiMessageProps) {
  return (
    <div className="flex flex-col gap-2 py-4 px-4 md:px-6 bg-foreground-200 w-full max-w-lg md:max-w-2xl  md:mx-auto">
      <div className="flex items-center justify-between pb-2 w-full">
        <Avatar alt="AI Avatar" radius="sm" src="/images/astro1.jpeg" />
        <div className="flex items-center gap-1">
          <CopyButton targetId={message?.id} />
          <Tooltip content="Share">
            <Button
              isIconOnly
              aria-label="Share Button"
              size="sm"
              variant="light"
            >
              <ShareNetwork size={20} />
            </Button>
          </Tooltip>
        </div>
      </div>
      {!message.content && <Skeleton className="w-full h-4" />}
      <div className="text-content4-foreground" id={message?.id}>
        <ReactMarkdown>{message?.content as string}</ReactMarkdown>
      </div>
    </div>
  );
}
