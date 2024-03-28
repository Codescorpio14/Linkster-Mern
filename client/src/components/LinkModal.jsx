import { useState } from "react";
import {
  useDeleteLinkMutation,
  useUpdateLinkMutation,
} from "../redux/features/linkApiSlice";
import { toast } from "react-toastify";

const LinkModal = ({ site, link, _id, refresh }) => {
  const [deleteUserLink, { isLoading }] = useDeleteLinkMutation();
  const [updateUserLink] = useUpdateLinkMutation();

  const [changedLink, setChangedLink] = useState("");
  const [updateModal, setUpdateModal] = useState(false);

  const deleteLink = async () => {
    try {
      const res = await deleteUserLink(_id)
        .unwrap()
        .catch((error) => {
          throw new Error(error?.data?.message || "not found");
        });
      refresh();
      toast.success(res.msg);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateLink = async (e) => {
    e.preventDefault();
    const newData = { link: changedLink, site };

    try {
      const res = await updateUserLink({ _id, newData })
        .unwrap()
        .catch((error) => {
          throw new Error(error?.data?.message || "not found");
        });

      refresh();
      toast.success(res.msg);
      setUpdateModal(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative">
      {updateModal && (
        <div className="absolute inset-1 bg-white">
          <form className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Update Link</h2>
            <input
              type="url"
              defaultValue={link}
              className="text-center border rounded-md"
              onChange={(e) => setChangedLink(e.target.value)}
            />
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                className="bg-red-500  px-2 py-1 rounded-md text-white font-semibold hover:bg-red-600"
                onClick={() => setUpdateModal(false)}
              >
                Cancel
              </button>
              <button
                onClick={updateLink}
                className="bg-green-500  px-2 py-1 rounded-md text-white font-semibold hover:bg-green-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="border rounded-md p-8 max-w-md text-center">
        <h1 className="text-lg font-semibold capitalize">
          <span>Site: </span>
          {site}
        </h1>
        <p>
          <span className="font-semibold">Link: </span>
          <a className="underline text-purple-600 text-sm" href={link}>
            {link.slice(8)}
          </a>
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <button
            disabled={isLoading}
            onClick={deleteLink}
            className="bg-red-500 px-2 py-1 rounded-md text-white font-semibold hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={() => setUpdateModal(true)}
            className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold hover:bg-green-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkModal;
