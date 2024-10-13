import { Button } from "@nextui-org/button";

import { CaretLeft, DotsThreeHorizontal } from "@/components/icons";
import { Link } from "@nextui-org/link";
import { ROUTES } from "@/config/constants";

export function ChatNav() {
  return (
    <nav className="flex w-full items-center justify-between p-6">
      <Button isIconOnly as={Link} href={ROUTES.HOME}>
        <CaretLeft />
      </Button>
      <Button isIconOnly variant="light">
        <DotsThreeHorizontal />
      </Button>
    </nav>
  );
}
