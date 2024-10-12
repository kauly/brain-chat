import { ArrowLeft } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
      <Button isIconOnly>
        <ArrowLeft />
      </Button>
    </section>
  );
}
