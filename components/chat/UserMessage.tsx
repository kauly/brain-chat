import { CoreMessage } from "ai";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

import { NotePencil } from "@/components/icons";

type UserMessageProps = {
  message: CoreMessage;
};

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="flex justify-between my-2 items-center gap-2 py-2 px-6 w-full max-w-lg  md:max-w-2xl mx-auto">
      <Avatar src="/images/astro3.jpeg" radius="sm" alt="User Avatar" />
      <div className="text-content4-foreground">
        {message.content as string}
      </div>
      <Tooltip content="Edit">
        <Button variant="light" size="sm" aria-label="Edit Button" isIconOnly>
          <NotePencil size={20} />
        </Button>
      </Tooltip>
    </div>
  );
}
