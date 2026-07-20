"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Users", href: "/users" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/70 backdrop-blur-md transition-all duration-200">
      <div className="mx-auto max-w-5xl h-16 flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-base font-semibold tracking-tight text-foreground/90 transition-colors duration-200 group-hover:text-foreground">
            nextfund
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm tracking-wide transition-colors duration-200 py-1.5",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground/80"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 size-1 bg-primary rounded-full animate-in fade-in zoom-in-50 duration-200" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Button
            variant="default"
            size="sm"
            className="rounded-full text-xs font-medium px-4 h-8 transition-all duration-200"
          >
            Get Started
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden h-8 w-8 items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground focus:outline-none transition-colors duration-200"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border/20 bg-background/95 md:hidden animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-2.5 rounded-lg text-sm transition-colors duration-150",
                    isActive
                      ? "bg-muted text-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-border/20">
              <Button
                variant="default"
                size="sm"
                className="w-full text-xs h-9 rounded-full font-medium"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

