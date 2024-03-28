import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useLoginMutation } from "../redux/features/userApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/features/authSlice";
import { loginSchema } from "../utils/formSchemas";

function Login({ togglePage }) {
  const [loginUser] = useLoginMutation();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onSubmit(formData) {
    try {
      const res = await loginUser(formData)
        .unwrap()
        .catch((error) => {
          throw new Error(error?.data?.message || "Login failed");
        });

      dispatch(setCredentials(res));
      navigate("/dashboard");
      toast.success("Login Successful");
      reset();
    } catch (error) {
      setError("root", { message: error.message });
    }
  }

  return (
    <div>
      <form
        className="grid gap-2 mt-24 max-w-sm mx-auto px-8 py-12 shadow-md bg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center font-semibold text-lg mb-4">
          Login to Your Account
        </h2>
        <label htmlFor="email" className="font-semibold text-sm">
          Your email:
        </label>
        <input
          type="email"
          id="email"
          className="border-2 border-gray-200 p-2 mb-4 rounded-md px-2"
          {...register("email")}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
        <label htmlFor="pass" className="font-semibold text-sm">
          Password:
        </label>
        <input
          type="password"
          id="pass"
          className="border-2 border-gray-200 p-2 mb-4 rounded-md px-2"
          {...register("password")}
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}
        {errors.root && <p className="text-red-500">{errors.root?.message}</p>}
        <button
          disabled={isSubmitting}
          className="bg-blue-500 text-white uppercase hover:bg-blue-400 rounded-md px-8 py-2 font-semibold place-self-center"
        >
          {isSubmitting ? "Login in..." : "Log in"}
        </button>
        <button
          onClick={() => togglePage(false)}
          className="text-sm mt-2 hover:text-purple-400"
          type="button"
        >
          Don&apos;t have an Account? Click here
        </button>
      </form>
    </div>
  );
}

export default Login;
