import { useState, useEffect } from "react";
import AddLinkButton from "../components/AddLinkButton";
import LinkModal from "../components/LinkModal";
import { useGetUserLinksMutation } from "../redux/features/linkApiSlice";
import { toast } from "react-toastify";

const MyLinks = () => {
  const [getLinks] = useGetUserLinksMutation();
  const [userLinks, setUserLinks] = useState([]);

  const getMyLinks = async () => {
    try {
      const res = await getLinks().unwrap();
      setUserLinks(res.links);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getMyLinks();
  }, []);

  const linksElm = userLinks.map((link) => (
    <LinkModal key={link._id} refresh={getMyLinks} {...link} />
  ));

  return (
    <section className="m-4">
      <AddLinkButton />

      <div>
        <button
          onClick={getMyLinks}
          className="bg-blue-500 text-white uppercase hover:bg-blue-600 rounded-md px-4 py-1 font-semibold text-sm m-2 "
        >
          Refresh
        </button>
        <div className="p-4 border-2 rounded-md flex flex-wrap gap-8">
          {userLinks.length < 1 ? <p>No Links to show..</p> : linksElm}
        </div>
      </div>
    </section>
  );
};

export default MyLinks;
