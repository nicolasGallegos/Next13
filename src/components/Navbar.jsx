import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto flex max-w-7xl justify-between px-2 py-4 sm:px-6 lg:px-8">
          <Link href="/">App</Link>
          <div className="flex space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/post">Post</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
