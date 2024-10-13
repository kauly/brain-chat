"use client";

import { Input } from "@nextui-org/input";

import { PaperPlane } from "@/components/icons";
import { Button } from "@nextui-org/button";

export function ChatInput() {
  return (
    <form>
      <Input
        placeholder="Send a message."
        variant="faded"
        size="lg"
        fullWidth
        endContent={
          <Button isIconOnly variant="light" size="sm">
            <PaperPlane />
          </Button>
        }
      />
    </form>
  );
}
