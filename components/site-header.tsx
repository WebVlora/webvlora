"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label="WebVlora — kembali ke beranda"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-1 rounded-xl bg-primary/30 blur-md opacity-0 transition-opacity group-hover:opacity-100"
            />
            <Image
              src="/icon.png"
              alt=""
              width={32}
              height={32}
              className="relative rounded-lg"
              priority
            />
          </div>
          <span className="text-base font-bold tracking-tight">WebVlora</span>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-0.5">
            {nav.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="relative inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop actions */}
        <div className="hidden items-center gap-1.5 md:flex">
          <ThemeToggle />
          <div className="mx-1 h-5 w-px bg-border/60" aria-hidden="true" />
          <Button variant="ghost" size="sm" className="h-9">
            Masuk
          </Button>
          <Button size="sm" className="h-9 shadow-sm" asChild>
            <Link href="/ai-web-builder">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Mulai Gratis
            </Link>
          </Button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-9"
                aria-label="Buka menu navigasi"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm p-0">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-2.5 border-b px-6 py-5">
                  <Image
                    src="/icon.png"
                    alt=""
                    width={28}
                    height={28}
                    className="rounded-md"
                  />
                  <span className="text-base font-bold">WebVlora</span>
                </div>

                <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-2 border-t px-4 py-5">
                  <Button variant="outline" className="w-full" size="lg">
                    Masuk
                  </Button>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/ai-web-builder">
                      <Sparkles className="size-4" aria-hidden="true" />
                      Mulai Gratis
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
