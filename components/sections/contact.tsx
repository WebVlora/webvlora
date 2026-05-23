"use client";

import { SiGmail, SiWhatsapp } from "react-icons/si";
import { PiMapPin, PiClock, PiPaperPlaneRight } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section";
import { contact } from "@/lib/content/site";

const contactInfo = [
  {
    icon: SiGmail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: contact.whatsapp,
  },
  {
    icon: PiMapPin,
    label: "Lokasi",
    value: "Jakarta, Indonesia",
    href: null,
  },
  {
    icon: PiClock,
    label: "Jam Kerja",
    value: "Sen - Jum, 09:00 - 18:00",
    href: null,
  },
];

export function Contact() {
  return (
    <Section id="kontak" size="lg" className="bg-muted/30">
      <SectionHeader
        eyebrow="Kontak"
        title="Hubungi Kami"
        description="Punya pertanyaan atau ingin konsultasi gratis? Tim kami siap membantu Anda."
        className="mb-10 sm:mb-14 md:mb-16"
      />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-3 lg:col-span-2">
          {contactInfo.map((item) => (
            <Card
              key={item.label}
              className="border-border/60 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="flex items-center gap-3 p-3 sm:p-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-muted-foreground">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-foreground">
                      {item.value}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form Card */}
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm lg:col-span-3">
          <CardHeader>
            <h3 className="text-lg font-semibold text-foreground sm:text-xl">
              Kirim Pesan
            </h3>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nama
                  </label>
                  <Input id="name" placeholder="Nama lengkap" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="email@contoh.com" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subjek
                </label>
                <Input id="subject" placeholder="Apa yang bisa kami bantu?" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Pesan
                </label>
                <Textarea
                  id="message"
                  placeholder="Ceritakan kebutuhan website Anda..."
                  rows={4}
                />
              </div>
              <CardFooter className="border-t-0 bg-transparent px-0 pt-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <PiPaperPlaneRight className="size-4" aria-hidden="true" />
                  Kirim Pesan
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
