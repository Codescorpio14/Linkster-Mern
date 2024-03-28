import { useDispatch, useSelector } from "react-redux";
import { useDeleteMutation } from "../redux/features/userApiSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const Profile = () => {
  const [deleteUser] = useDeleteMutation();
  const { name, email, country, memberSince } = useSelector(
    (state) => state.auth.user
  );
  const [deleteModal, setDeleteModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const creationDate = new Date(memberSince).toLocaleDateString();

  const handleDelete = async () => {
    try {
      const res = await deleteUser()
        .unwrap()
        .catch((error) => {
          throw new Error(error?.data?.message || "Logout failed");
        });

      dispatch(logout());
      navigate("/");
      toast.success(res.msg);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="mx-4 my-4 border border-gray-400 p-4">
      {deleteModal && (
        <div className="absolute text-center flex place-items-center justify-center inset-0">
          <div className="bg-gray-100 drop-shadow-lg max-w-screen-sm rounded-sm p-8">
            <h1 className="text-2xl font-semibold">
              Are you sure you want to delete your account?
            </h1>
            <p className="py-4">
              Deleting account means all your data will be deleted and you wont
              be able to recover anything.
            </p>
            <div className="flex gap-12 justify-center">
              <button
                onClick={() => setDeleteModal(false)}
                className="bg-green-500 px-4 py-1 rounded-md text-white font-semibold hover:bg-green-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 px-4 py-1 rounded-md text-white font-semibold hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <img
        className="max-w-40 aspect-square h-full mb-8"
        src="/icon-male.jpg"
        alt="profile picture"
      />
      <div>
        <p className="mb-2 text-lg">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold">Country:</span> {country}
        </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold">Account Created:</span> {creationDate}
        </p>
        <button
          onClick={() => setDeleteModal(true)}
          className="bg-red-500 px-4 py-2 rounded-md text-white font-semibold hover:bg-red-600 transition-colors"
        >
          Delete Account
        </button>
      </div>
    </section>
  );
};

export default Profile;
