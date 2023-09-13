"use client";

import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="flex flex-col space-y-4">
      <Link href={`/post/${post.id}`}>
        <h3 className="text-xl font-bold">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
    </div>
  );
}
