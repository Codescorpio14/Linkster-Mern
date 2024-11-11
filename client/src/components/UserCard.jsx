const UserCard = ({ user }) => {
  const { name, links, country, role } = user;

  const linksElm = links?.map((link, i) => (
    <li key={i}>
      <a className="w-6 block" href={link.link}>
        <img src={`/icon-${link.site}.png`} alt="" />
      </a>
    </li>
  ));

  return (
    <div className="border rounded-md shadow-lg shadow-gray-100 p-4">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>

      <p className="text-xs font-semibold capitalize">{role}</p>
      <div className="mt-2 font-semibold">
        <p className="text-sm mb-1 uppercase">from {country}</p>
        <h4>Social Contacts</h4>

        <ul className="flex gap-4 font-bold my-1">
          {linksElm.length < 1 ? (
            <p>No Contacts are available to show...</p>
          ) : (
            linksElm
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
