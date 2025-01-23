import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { App } from "./app";
import { User } from "./pages/user";
import { Blog } from "./pages/blog";
import { BlogPostDetail } from "./pages/blog-post-detail";
import { ErrorBoundary } from "./pages/error";
import { Shop } from "./pages/shop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:postId",
        element: <BlogPostDetail />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
