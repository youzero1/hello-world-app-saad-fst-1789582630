import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
          Hello, World!
        </h1>
        <p className="text-base leading-relaxed text-slate-600 text-pretty sm:text-lg dark:text-slate-400">
          Welcome — your app is up and running.
        </p>
      </div>
    </main>
  );
}
