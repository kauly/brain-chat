import { Card, CardBody } from "@nextui-org/card";

import { title } from "@/components/primitives";
import { EMPTY_CHAT_WARNINGS } from "@/config/constants";

export function ChatEmpty() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-2 md:gap-4   flex-1">
      <h1 className={title({ color: "blue", size: "sm" })}>BrainBox</h1>

      {EMPTY_CHAT_WARNINGS.map((warning, i) => (
        <Card key={`chat-warning-${i}`}>
          <CardBody className="w-80 md:w-96 py-2 px-4 md:py-4 md:px-8 text-center">
            <p className="w-full my-2 text-md md:text-xl text-foreground-500 block max-w-full">
              {warning}
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
