import { create } from "zustand";
import { BlogPost } from "../types";
import { initialPosts } from "./posts";

// SCHRITT 1: Types definieren.

type PageState = {
  posts: BlogPost[];
};

type PageActions = {
  addLike(id: number): void;
};

function addLikeToPost(post: BlogPost): BlogPost {
  return { ...post, likes: post.likes + 1 };
}

// SCHRITT 2: Den Store bauen
export const usePageStore = create<PageState & PageActions>()(
  (set /*get*/) => ({
    posts: initialPosts,
    addLike(id) {
      // 2 Möglichkeiten
      //
      // 1) Wir nutzen get()
      // const newPosts = get().posts.map((post) =>
      //   post.id === id ? addLikeToPost(post) : post,
      // );
      // set({ posts: newPosts });
      // 2) Wir nutzen nur set mit predicate
      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === id ? addLikeToPost(post) : post,
        ),
      }));
    },
  }),
);
