import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeader } from "@/components/section";
import { faqItems } from "@/lib/content/faq";

export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Section id="pertanyaan">
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Pertanyaan yang{" "}
            <span className="text-gradient-brand">sering diajukan</span>
          </>
        }
        description="Jawaban cepat untuk pertanyaan paling umum tentang layanan kami."
        className="mb-12 sm:mb-14"
      />

      <div className="mx-auto max-w-4xl lg:max-w-5xl">
        <Accordion
          type="single"
          collapsible
          className="w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm divide-y divide-border/60"
          defaultValue="item-0"
        >
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b-0 px-5 sm:px-6 md:px-8"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline sm:py-6 sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pr-6 text-sm leading-relaxed text-muted-foreground sm:pb-6 sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Section>
  );
}
