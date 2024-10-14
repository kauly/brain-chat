import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";

import { CaretLeft, DotsThreeHorizontal } from "@/components/icons";
import { ROUTES } from "@/config/constants";

export function ChatNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 md:p-6">
      <Tooltip content="Back">
        <Button isIconOnly as={Link} href={ROUTES.HOME}>
          <CaretLeft />
        </Button>
      </Tooltip>

      <Button isIconOnly variant="light">
        <DotsThreeHorizontal />
      </Button>
    </nav>
  );
}
