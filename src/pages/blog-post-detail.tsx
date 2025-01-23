import { useParams } from "react-router-dom";
import { usePageStore } from "../store/page-store";
import { BlogPost } from "../components/blog/blog-post";

export function BlogPostDetail() {
  const { postId } = useParams();
  const posts = usePageStore((state) => state.posts);

  if (!postId) throw new Error("Ehhhr no? :/");

  const requestedPost = posts.find((post) => parseInt(postId) === post.id);
  // Error Handling
  if (!requestedPost) throw new Error("No Post found! :(");

  return (
    <div className="grid h-full min-h-screen place-items-center bg-neutral-200 text-5xl text-neutral-900">
      <BlogPost post={requestedPost} />
    </div>
  );
}
