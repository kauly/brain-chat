"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { PaperPlane } from "@/components/icons";

export function ChatInput() {
  return (
    <form>
      <Input
        fullWidth
        endContent={
          <Button isIconOnly size="sm" variant="light">
            <PaperPlane />
          </Button>
        }
        placeholder="Send a message."
        size="lg"
        variant="faded"
      />
    </form>
  );
}
