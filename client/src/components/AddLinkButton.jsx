import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { linkSchema } from "../utils/formSchemas";
import { useAddLinkMutation } from "../redux/features/linkApiSlice";
import { toast } from "react-toastify";

const AddLinkButton = () => {
  const [addLink] = useAddLinkMutation();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(linkSchema) });

  async function onSubmit(formData) {
    try {
      const res = await addLink(formData)
        .unwrap()
        .catch((error) => {
          throw new Error(error?.data?.message || "failed to add");
        });
      toast.success(res.msg);
      reset();
    } catch (error) {
      setError("root", { message: error.message });
    }
  }

  return (
    <div>
      <form
        className="flex gap-4 items-center justify-start my-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <select
            className="border-2 border-gray-200 p-2  rounded-md px-2"
            {...register("site")}
          >
            <option value="">Select a Site</option>
            <option value="github">Github</option>
            <option value="youtube">Youtube</option>
            <option value="linkedin">LinkedIn</option>
            <option value="facebook">Facebook</option>
          </select>
        </div>

        <div>
          <input
            className="border-2 border-gray-200 p-2  rounded-md px-2"
            type="url"
            {...register("link")}
          />
        </div>

        <button
          disabled={isSubmitting}
          className="bg-blue-500 px-4 py-2 rounded-md text-white font-semibold drop-shadow-md hover:bg-blue-600"
        >
          + New Link
        </button>
      </form>
      {errors.root && <p className="text-red-500">{errors.root?.message}</p>}
      {errors.site && <p className="text-red-500">{errors.site?.message}</p>}
      {errors.link && <p className="text-red-500">{errors.link?.message}</p>}
    </div>
  );
};

export default AddLinkButton;
