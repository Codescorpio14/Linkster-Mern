import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
      <ul className="flex px-4 mt-8  gap-4">
        <li>
          <Link
            className="rounded-md transition-colors bg-orange-300 px-4 py-1 font-semibold hover:bg-orange-500 "
            to="."
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            className="rounded-md transition-colors bg-orange-300 px-4 py-1 font-semibold hover:bg-orange-500"
            to="my-links"
          >
            My Links
          </Link>
        </li>
      </ul>

      <Outlet />
    </section>
  );
};

export default Dashboard;
