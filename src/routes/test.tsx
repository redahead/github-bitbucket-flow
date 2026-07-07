import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  head: () => ({
    meta: [
      { title: "Mirror Test — GitHub to Bitbucket" },
      {
        name: "description",
        content: "Test page to verify the GitHub to Bitbucket mirror is working.",
      },
    ],
  }),
  component: TestPage,
});

function TestPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-3xl font-bold text-foreground">Mirror-Test</h1>
      <p className="text-muted-foreground">
        Wenn diese Seite in Bitbucket ankommt, funktioniert der Mirror.
      </p>
      <p className="text-sm text-muted-foreground">Commit-Test: 2026-07-07</p>
    </div>
  );
}

