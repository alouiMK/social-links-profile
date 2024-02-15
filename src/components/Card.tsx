import avatar from "../assets/avatar-jessica.jpeg";

const Card = () => {
  const links = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="bg-DarkGrey w-96 rounded-lg px-10 py-5 text-center">
        <img
          className="w-20 h-w-20 rounded-full mx-auto mb-5"
          src={avatar}
          alt="avatar"
        />
        <p className="text-2xl font-bold">Jessica Randall</p>
        <p className="text-sm text-Green mb-5 mt-2">London, United Kingdom</p>
        <p className="text-sm font-normal">
          "Front-end developer and avid reader."
        </p>
        <div>
          <ul className="text-sm">
            {links.map((elem, i) => (
              <li
                className="bg-Grey hover:bg-Green hover:text-DarkGrey rounded-md p-3 my-5 cursor-pointer"
                key={i}
              >
                {elem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Card;
