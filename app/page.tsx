import Link from "next/link";
import AlertButton from "@/components/AlertButton";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <section className="flex-1 flex flex-col justify-center items-center py-20 px-6 max-w-3xl mx-auto text-center">
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          Next.js 16 Fundamental
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.15]">
          nextfund.
          <span className="block text-muted-foreground font-light text-3xl sm:text-4xl md:text-5xl mt-2">
            clean, minimal development.
          </span>
        </h1>
      </div>

      <p className="mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
        A minimalist playground exploring Next.js App Router capabilities, modern rendering, and clean UI components.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
        <Link
          href="/users"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "rounded-full px-6 h-10 font-medium text-sm w-full sm:w-auto transition-transform hover:scale-[1.02] active:scale-[0.98]"
          )}
        >
          Explore Users
        </Link>
        
        <AlertButton 
          message="hello boss im from Homepage" 
          className="rounded-full px-6 h-10 font-medium text-sm w-full sm:w-auto transition-transform hover:scale-[1.02] active:scale-[0.98]"
        />

        <Link
          href="/about"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "rounded-full px-6 h-10 font-medium text-sm w-full sm:w-auto text-muted-foreground hover:text-foreground"
          )}
        >
          About
        </Link>
      </div>
    </section>
  );
}