"use client";

import { useState } from "react";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";

import { CheckFat, Copy } from "./icons";

interface ICopyButtonProps {
  targetId?: string;
}

export default function CopyButton({ targetId }: ICopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    if (!targetId) return;
    const elem: HTMLElement | null = document.getElementById(targetId);

    if (elem?.textContent) {
      navigator.clipboard.writeText(elem.textContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    }
  };

  return (
    <Tooltip content="Copy">
      <Button
        isIconOnly
        aria-label="Copy Button"
        size="sm"
        variant="light"
        onClick={copyToClipboard}
      >
        {isCopied ? <CheckFat fill="green" size={20} /> : <Copy size={20} />}
      </Button>
    </Tooltip>
  );
}
