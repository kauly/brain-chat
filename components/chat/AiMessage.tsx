import { CoreMessage } from "ai";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

import { Copy, ShareNetwork } from "@/components/icons";

type AiMessageProps = {
  message: CoreMessage;
};

export function AiMessage({ message }: AiMessageProps) {
  return (
    <div className="flex flex-col gap-2 py-4 px-6 bg-foreground-200 w-full max-w-lg md:max-w-2xl  md:mx-auto">
      <div className="flex items-center justify-between pb-2 w-full">
        <Avatar alt="AI Avatar" radius="sm" src="/images/astro1.jpeg" />
        <div className="flex items-center gap-1">
          <Tooltip content="Copy">
            <Button
              isIconOnly
              aria-label="Copy Button"
              size="sm"
              variant="light"
            >
              <Copy size={20} />
            </Button>
          </Tooltip>
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
      <div className="text-content4-foreground">
        {message.content as string}
      </div>
    </div>
  );
}
