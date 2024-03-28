import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "../redux/features/userApiSlice";
import { toast } from "react-toastify";
import { registerSchema } from "../utils/formSchemas";

function Register({ togglePage }) {
  const [addUser] = useRegisterMutation();
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerSchema) });

  async function onSubmit(formData) {
    const { fName, lName, email, country, password, checked } = formData;

    if (checked) {
      const newUserData = {
        name: fName + " " + lName,
        country,
        password,
        email,
      };

      try {
        const res = await addUser(newUserData)
          .unwrap()
          .catch((error) => {
            throw new Error(error?.data?.message || "Login failed");
          });
        toast.success(res?.msg);
        reset();
      } catch (error) {
        setError("root", { message: error?.message });
      }
    } else {
      setError("root", { message: "You must agree to term and conditions" });
    }
  }

  return (
    <form
      className="grid gap-2 my-12 max-w-xl mx-auto px-12 py-12 shadow-md bg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-center font-semibold text-xl mb-4">
        Create an Account
      </h2>

      <div className="flex gap-4">
        <label htmlFor="fName" className="font-semibold text-sm">
          First Name
          <input
            type="text"
            id="fName"
            className="border-2 border-gray-200 w-full font-normal p-2 text-base mb-4 rounded-md px-2 mt-2"
            {...register("fName")}
            placeholder="First name"
          />
          {errors.fName && (
            <p className="text-red-500 text-sm">{errors.fName?.message}</p>
          )}
        </label>

        <label htmlFor="lName" className="font-semibold text-sm">
          Last Name
          <input
            type="text"
            id="lName"
            className="border-2 border-gray-200 w-full font-normal p-2 text-base mb-4 rounded-md px-2 mt-2"
            {...register("lName")}
            placeholder="Last name"
          />
          {errors.lName && (
            <p className="text-red-500 text-sm">{errors.lName?.message}</p>
          )}
        </label>
      </div>

      <label htmlFor="email" className="font-semibold text-sm">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="border-2 border-gray-200 p-2 mb-4 rounded-md px-2"
        {...register("email")}
        placeholder="name@mail.com"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      )}

      <label htmlFor="country" className="font-semibold text-sm">
        Country Name
      </label>
      <input
        type="text"
        id="country"
        className="border-2 border-gray-200 p-2 mb-4 rounded-md px-2"
        {...register("country")}
        placeholder="Enter your Country"
      />
      {errors.country && (
        <p className="text-red-500 text-sm">{errors.country?.message}</p>
      )}

      <label htmlFor="pass" className="font-semibold text-sm">
        Password
      </label>
      <input
        type="password"
        id="pass"
        className="border-2 border-gray-200 p-2 mb-4 rounded-md px-2"
        {...register("password")}
        placeholder="Password"
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      )}

      <label htmlFor="confPass" className="font-semibold text-sm">
        Confirm Password
      </label>
      <input
        type="password"
        id="confPass"
        className="border-2 border-gray-200 p-2 mb-4 rounded-md px-2"
        {...register("confPass")}
        placeholder="Confirm Password"
      />
      {errors.confPass && (
        <p className="text-red-500 text-sm">{errors.confPass?.message}</p>
      )}

      <label className="flex gap-2 text-sm mb-2" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" {...register("checked")} />I agree
        to all the terms & conditions of the page.
      </label>
      {errors.checked && (
        <p className="text-red-500 text-sm">{errors.checked?.message}</p>
      )}
      {errors.root && (
        <p className="text-red-500 text-sm">{errors.root?.message}</p>
      )}

      <button
        disabled={isSubmitting}
        className="bg-blue-500 text-white uppercase hover:bg-blue-400 rounded-md px-8 py-2 font-semibold place-self-center"
      >
        {isSubmitting ? "Signing Up..." : "Sign Up"}
      </button>

      <button
        onClick={() => togglePage(true)}
        className="text-sm mt-2 hover:text-purple-400"
        type="button"
      >
        Already have an Account? Click here
      </button>
    </form>
  );
}

export default Register;
