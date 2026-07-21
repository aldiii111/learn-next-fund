import Link from "next/link";
import AlertButton from "@/components/AlertButton";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const stack = [
    { name: "Next.js App Router", desc: "For dynamic server-rendered pages and optimized API routes." },
    { name: "Tailwind CSS v4", desc: "For ultra-clean CSS structure, native-feeling color schemes, and seamless dark mode." },
    { name: "Base UI React", desc: "Unstyled, accessible primitives providing structural stability for clean styling." },
    { name: "JSONPlaceholder API", desc: "For mock user data fetched dynamically on the server side." }
  ];

  return (
    <div className="max-w-2xl mx-auto py-16 px-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      <header className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">The Project</span>
        <h1 className="text-4xl font-extrabold tracking-tight mt-2 text-foreground">about.</h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          NextFund is built from the ground up to showcase modern Next.js techniques. Using high-quality design principles, we prioritize typography, whitespace, and accessibility.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground/80">Built with</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {stack.map((item) => (
            <div key={item.name} className="border border-border/40 p-5 rounded-xl bg-card text-card-foreground transition-all duration-200 hover:border-border/80">
              <h3 className="font-semibold text-sm tracking-tight text-foreground">{item.name}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 pt-6 border-t border-border/20 flex flex-wrap items-center gap-4">
        <Link 
          href="/" 
          className={cn(
            buttonVariants({ variant: "outline" }), 
            "rounded-full px-5 h-9 text-xs font-medium"
          )}
        >
          Back to Home
        </Link>
        <AlertButton 
          message="hello big boss im from Aboutpage" 
          className="rounded-full px-5 h-9 text-xs font-medium"
        />
      </footer>
    </div>
  );
}