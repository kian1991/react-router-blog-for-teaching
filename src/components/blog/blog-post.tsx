import { useState } from "react";
import { usePageStore } from "../../store/page-store";
import { BlogPost as BPost } from "../../types";
import { cn } from "../../lib/utils";

export function BlogPost({ post }: { post: BPost }) {
  const likePost = usePageStore((state) => state.addLike);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleLike() {
    likePost(post.id);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  }
  return (
    <li
      key={post.id}
      className="mb-4 flex flex-col border-t border-neutral-300 p-3"
    >
      <span className="ml-auto w-fit rounded-sm bg-sky-400 px-2 font-mono text-sm font-bold text-black">
        {post.tag}
      </span>
      <h1 className="1 mb-3 mt-auto text-balance text-3xl font-bold tracking-tight">
        {post.title}
      </h1>
      <p className="mb-2 text-neutral-800">{post.text}</p>
      <div className="flex items-start justify-between">
        <p className="text-sm text-neutral-600">{post.date}</p>
        <button className="flex items-center gap-2" onClick={handleLike}>
          <span
            className={cn(
              "text-sm italic text-neutral-700",
              isAnimating && "animate-pop",
            )}
          >
            {post.likes}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={cn(
              `size-8 fill-red-500/50 stroke-none transition-all ease-linear hover:fill-red-500/80`,
            )}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}
