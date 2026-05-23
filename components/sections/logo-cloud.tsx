import { SiShopify, SiWordpress, SiNextdotjs, SiReact, SiTailwindcss, SiFigma, SiVercel, SiStripe } from "react-icons/si";
import { Section } from "@/components/section";
import type { IconType } from "react-icons";

const BRAND_LOGOS: { name: string; Icon: IconType }[] = [
  { name: "Shopify", Icon: SiShopify },
  { name: "WordPress", Icon: SiWordpress },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Figma", Icon: SiFigma },
  { name: "Vercel", Icon: SiVercel },
  { name: "Stripe", Icon: SiStripe },
];

export function LogoCloud() {
  const logos = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <Section
      size="sm"
      className="bg-muted/30"
      ariaLabel="Teknologi yang kami gunakan"
    >
      <div className="flex flex-col items-center gap-6 sm:gap-8">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
          Dibangun dengan teknologi{" "}
          <span className="font-semibold text-foreground">terbaik</span> di
          kelasnya
        </p>

        {/* Marquee with edge fade */}
        <div className="relative w-full overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
          />

          <div className="flex w-max animate-marquee gap-10 sm:gap-14 motion-reduce:animate-none">
            {logos.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex shrink-0 select-none items-center gap-2 whitespace-nowrap px-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                aria-hidden={i >= BRAND_LOGOS.length ? "true" : undefined}
              >
                <item.Icon className="size-5 sm:size-6" />
                <span className="text-sm font-semibold sm:text-base">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
