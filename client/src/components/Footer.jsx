import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white">
      <a href="#header" className="w-full block bg-slate-900 p-2 text-center">
        Go Up
      </a>

      <ul className="text-center py-10 bg-gray-800 flex justify-center gap-8 font-semibold">
        <li>
          <Link className="hover:text-purple-600" to="contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-600" to="about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-600" to="account">
            Account
          </Link>
        </li>
      </ul>

      <p className="text-center bg-slate-700 p-2">
        All Rights Reserved By Alvir @2024
      </p>
    </footer>
  );
};

export default Footer;
