import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-balance text-blue-900 sm:text-5xl md:text-6xl dark:text-blue-200">
          Hello, World!
        </h1>
        <p className="text-base leading-relaxed text-blue-800/70 text-pretty sm:text-lg dark:text-blue-100/60">
          Welcome — your app is up and running.
        </p>
      </div>
    </main>
  );
}
