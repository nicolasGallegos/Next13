import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h2 className="text-6xl font-bold">404</h2>
      <p className="text-2xl">Pagin not found</p>
      <Link
        href="/"
        className="rounded-xl bg-white px-4 py-2 text-xl font-light tracking-tight text-gray-900  transition-all duration-300 ease-in-out hover:scale-110"
      >
        Go Home
      </Link>
    </section>
  );
}
