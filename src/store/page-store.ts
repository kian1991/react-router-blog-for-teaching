import { create } from "zustand";
import { BlogPost } from "../types";
import { blogPosts } from "./posts";

type PageState = {
  posts: BlogPost[];
};

type PageActions = {
  likePost(postId: number): void;
};

export const usePageStore = create<PageState & PageActions>()((set) => ({
  posts: blogPosts,
  likePost(postId) {
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post,
      ),
    }));
  },
}));
