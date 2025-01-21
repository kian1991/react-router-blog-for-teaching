import { useParams } from "react-router-dom";

export function User() {
  const { id } = useParams();

  return (
    <div className="grid h-full min-h-screen place-items-center bg-slate-900 text-5xl text-neutral-100">
      USER: {id || "No ID specified."}
    </div>
  );
}
