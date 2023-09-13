import Link from "next/link";

export default function User({ users }) {
  return (
    <ul className="grid grid-cols-3 gap-16 ">
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="group transform space-y-10 rounded-xl bg-gray-800 px-10 py-10 delay-150 duration-300 hover:scale-110">
            <img
              src={user.avatar}
              className="mx-auto w-56 rounded-full object-cover"
            />
            <div className="space-y-4">
              <h5 className="text-center text-xl font-semibold tracking-tight">
                {user.first_name} {user.last_name}
              </h5>
              <p className="text-center font-light text-gray-400">
                email: {user.email}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
