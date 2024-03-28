import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { useAllUsersMutation } from "../redux/features/linkApiSlice";

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [allUsers] = useAllUsersMutation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await allUsers().unwrap();
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cardElm = users.map((user, i) => <UserCard key={i} user={user} />);

  return (
    <section className="m-4">
      <article className="mb-12 bg-gradient-to-tr from-yellow-200 to-yellow-100 px-6 py-8">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Linkster</h1>
        <p>Browse through all our members and find what you are looking for.</p>
      </article>
      <article className="border flex flex-col gap-8 rounded-md p-8">
        {cardElm}
      </article>
    </section>
  );
};

export default Explore;
