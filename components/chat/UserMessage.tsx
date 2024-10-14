import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { ChatMessage } from "@langchain/core/messages";

import { NotePencil } from "@/components/icons";

type UserMessageProps = {
  message: ChatMessage;
  handleEdit: (text?: string) => void;
};

export function UserMessage({ message, handleEdit }: UserMessageProps) {
  return (
    <div className="flex justify-between my-2 items-center gap-2 py-2 px-4 md:px-6 w-full max-w-lg  md:max-w-2xl mx-auto">
      <Avatar
        alt="User Avatar"
        className="flex-none"
        radius="sm"
        src="/images/astro3.jpeg"
      />
      <div className="text-content4-foreground flex-1">
        {message?.content as string}
      </div>
      <Tooltip content="Edit">
        <Button
          isIconOnly
          aria-label="Edit Button"
          isDisabled={!message?.content}
          size="sm"
          variant="light"
          onClick={() => handleEdit(message?.content as string)}
        >
          <NotePencil size={20} />
        </Button>
      </Tooltip>
    </div>
  );
}
