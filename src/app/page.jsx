import User from "@/components/User";

async function getUsers() {
  const res = await fetch(`https://reqres.in/api/users`);
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const user = await getUsers();
  return (
    <div className="container mx-auto flex flex-col items-center justify-between space-y-12 py-12">
      <h1 className="text-center text-xl font-semibold tracking-wide">Home</h1>
      <User users={user} />
    </div>
  );
}
