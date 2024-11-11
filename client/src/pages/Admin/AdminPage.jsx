import { Outlet, NavLink } from "react-router-dom";

const AdminPage = () => {
  return (
    <section className="border-t-2 mt-4">
      <h1 className="text-3xl font-semibold py-8 px-4 bg-orange-100">
        Welcome to Management Dashboard
      </h1>
      <div className="flex">
        <aside className="border-r-2 h-screen">
          <ul>
            <li>
              <NavLink
                to="."
                className="px-8 py-4 border-b uppercase font-semibold hover:bg-orange-200 block"
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="px-8 py-4 border-b uppercase font-semibold hover:bg-orange-200 block">
                Links
              </NavLink>
            </li>
            <li>
              <NavLink className="px-8 py-4 border-b uppercase font-semibold hover:bg-orange-200 block">
                Logs
              </NavLink>
            </li>
          </ul>
        </aside>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
