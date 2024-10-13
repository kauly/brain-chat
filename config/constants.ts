import type { CarouselItem } from "@/components/carousel/Carousel";

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    imageSrc: "/images/astro1.jpeg",
    title: "Unlock the power of future AI",
    description:
      "Chat with the smartest AI Future Experience power of AI with us",
  },
  {
    imageSrc: "/images/astro2.jpeg",
    title: "Or agents will help you to get started",
    description: "Get started with our agents to unlock the power of AI",
  },
  {
    imageSrc: "/images/astro3.jpeg",
    title: "Fastest way to get started with AI",
    description: "Get started with AI in minutes with our agents",
  },
];

export const siteConfig = {
  name: "Brain Chat",
  description: "The fastest way to get started with AI",
  links: {
    github: "https://github.com/kauly/brain-chat",
  },
};

export enum ROUTES {
  HOME = "/",
  CHAT = "/chat",
}

export const EMPTY_CHAT_WARNINGS = [
  "Remembers what user said earlier in the conversation",
  "Allow user to provide follow-up corrections With AI",
  "Limited knowledge of world and events after 2021",
  "May occasionally generate incorrect information",
  "May occasionally produce harmful instructions or biased content",
];
