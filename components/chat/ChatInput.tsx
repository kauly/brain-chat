"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

import { PaperPlane } from "@/components/icons";

type ChatInputProps = {
  loading?: boolean;
  inputValue: string;
  handleSubmit: () => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ChatInput({
  loading,
  handleSubmit,
  handleInput,
  inputValue,
}: ChatInputProps) {
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-full p-4 md:p-6">
      <Input
        fullWidth
        isRequired
        endContent={
          <Button
            isIconOnly
            isLoading={loading}
            size="sm"
            variant="light"
            onClick={() => handleSubmit()}
          >
            {loading ? <Spinner size="sm" /> : <PaperPlane />}
          </Button>
        }
        id="chat-input"
        isDisabled={loading}
        name="chat-input"
        placeholder="Send a message."
        size="lg"
        value={inputValue}
        variant="faded"
        onChange={handleInput}
        onKeyDown={handleEnter}
      />
    </div>
  );
}
