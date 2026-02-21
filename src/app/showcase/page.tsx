import dynamic from "next/dynamic";

export default function ShowcasePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] py-section-md">
      <section className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8 px-4">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Showcase
            </h1>
            <p className="text-muted-foreground text-lg">
              Work in progress.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
