async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div className="container mx-auto flex justify-center p-12">
      <div className="w-fit space-y-10  bg-gray-800 p-10">
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
      </div>
    </div>
  );
}
