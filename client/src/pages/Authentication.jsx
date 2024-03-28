import { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const Authentication = () => {
  const [registered, setRegistered] = useState(true);

  return registered ? (
    <Login togglePage={setRegistered} />
  ) : (
    <Register togglePage={setRegistered} />
  );
};

export default Authentication;
