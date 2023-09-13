"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="container mx-auto flex flex-col  justify-between space-y-6 py-12">
      <h1 className="text-center text-xl font-semibold tracking-wide">About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        quisquam rem dignissimos id, expedita, debitis exercitationem porro cum
        perferendis vitae, perspiciatis impedit asperiores. Deleniti, dolores?
        Mollitia error voluptates sapiente dolore?
      </p>
      <button
        onClick={() => router.push("/")}
        className="w-fit transform rounded-md bg-white px-6 py-2 text-gray-900 duration-300 hover:scale-110"
      >
        Go to Home
      </button>
    </div>
  );
}
