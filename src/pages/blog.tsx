import { BlogPost } from "../components/blog/blog-post";
import { Container } from "../components/ui/container";
import { usePageStore } from "../store/page-store";

export function Blog() {
  const blogPosts = usePageStore((state) => state.posts);

  return (
    <div className="min-h-screen w-full bg-slate-950 pt-16">
      <Container className="mt-12 w-[calc(100%-2rem)] bg-neutral-100 text-neutral-900">
        <h1 className="mb-8 w-full text-end font-mono text-4xl font-bold tracking-wider">
          {"//unser blog"}
        </h1>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </ul>
      </Container>
    </div>
  );
}
