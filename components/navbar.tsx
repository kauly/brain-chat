import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { ROUTES, siteConfig } from "@/config/constants";

import { GithubIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";
import { title } from "./primitives";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between md:py-2">
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
      </div>
      <div className="flex items-center">
        <NextLink
          href={ROUTES.CHAT}
          className={title({ color: "blue", size: "sm" })}
        >
          Skip
        </NextLink>
      </div>
    </nav>
  );
}
