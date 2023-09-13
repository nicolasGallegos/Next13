import PostCard from "@/components/PostCard";
import PostPage from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
}

async function page({ params }) {
  const post = await loadPost(params.id);
  return (
    <main className="flex min-h-screen flex-col space-y-10 p-12">
      <h1 className="text-3xl font-bold">Post number {post.id}!</h1>
      <PostCard post={post} key={post.id} />
      <hr />
      <p className="text-xl">Other posts</p>
      <Suspense fallback={<div>Loading Post</div>}>
        <PostPage />
      </Suspense>
    </main>
  );
}

export default page;
