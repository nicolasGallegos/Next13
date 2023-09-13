import PostCard from "@/components/PostCard";
import { Suspense } from "react";

async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return posts;
}

export default async function Post() {
  const posts = await loadPost();
  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-12">
      <h1 className="text-3xl font-bold">Post!</h1>
      <div className="flex flex-col items-start justify-start space-y-4">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </main>
  );
}
