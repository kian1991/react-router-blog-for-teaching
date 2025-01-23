import { useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return (
    <div className="grid h-full min-h-screen place-items-center bg-slate-900 text-5xl text-neutral-100">
      {error instanceof Error && error.message}
    </div>
  );
}
