import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-red-500 text-4xl font-bold mb-6">Whoops!</h1>
      <p className="text-gray-700 text-xl">Error</p>
      <p className="text-gray-500 mt-4">
        Looks like the page you're looking for is lost in the internet void.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 mt-8 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Go Home
      </button>
    </section>
  );
};

export default ErrorPage;
