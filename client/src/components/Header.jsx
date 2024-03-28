import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/features/userApiSlice";
import { logout } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const res = await logoutUser()
        .unwrap()
        .catch((error) => {
          throw new Error(error?.data?.message || "Logout failed");
        });
      dispatch(logout());
      toast.success(res.msg);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <header
      id="header"
      className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-purple-200 to-gray-200 drop-shadow-md uppercase"
    >
      <h1 className="font-bold text-xl">
        <Link to="/">Link✨</Link>
      </h1>
      <nav>
        <ul className="flex justify-between gap-4 font-semibold">
          <li>
            <Link className=" hover:text-purple-600" to="explore">
              Explore
            </Link>
          </li>
          <li>
            <Link className=" hover:text-purple-600" to="contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className=" hover:text-purple-600" to="about">
              About
            </Link>
          </li>
          {user ? (
            <li>
              <button
                className="flex uppercase relative"
                onClick={() => setIsOpen((p) => !p)}
              >
                <span className="inline-block">{user?.name}</span>
                <svg
                  className={`transform ${
                    isOpen ? "-rotate-180" : ""
                  } ml-1 h-5 w-4 transition duration-200 ease-in-out`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z"
                    fill="#030D45"
                  />
                </svg>
              </button>
              {isOpen && (
                <ul className="absolute z-20 top-full right-12 bg-white rounded shadow-md mt-2 py-2">
                  <li>
                    <Link
                      to="dashboard"
                      className="block capitalize px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      className="block  px-4 py-2 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <Link className=" hover:text-purple-600" to="account">
                Account
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
