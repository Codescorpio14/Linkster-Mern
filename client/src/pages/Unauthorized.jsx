import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-red-500 text-4xl font-bold mb-6">
        Authorization Required
      </h1>
      <p className="text-gray-700 text-xl">
        You are not authorized to access this page.
      </p>
      <div className="flex mt-8 space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200"
        >
          Go Home
        </button>
      </div>
    </section>
  );
};

export default Unauthorized;
