export default function Loading() {
  const skeletons = Array.from({ length: 10 });

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <header className="mb-12 animate-pulse">
        <div className="h-3 w-16 bg-muted rounded-md mb-3"></div>
        <div className="h-10 w-48 bg-muted rounded-md mb-4"></div>
        <div className="h-4 w-full max-w-lg bg-muted/80 rounded-md"></div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skeletons.map((_, index) => (
          <div
            key={index}
            className="border border-border/30 w-[210px] p-6 rounded-2xl bg-card/40 flex flex-col justify-between h-[154px] animate-pulse"
          >
            <div>
              <div className="h-5 w-2/3 bg-muted rounded-md mb-2"></div>
              <div className="h-3.5 w-1/2 bg-muted/80 rounded-md"></div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/20 flex items-center justify-between">
              <div className="h-3 w-1/3 bg-muted/70 rounded-md"></div>
              <div className="h-3 w-8 bg-muted/50 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}