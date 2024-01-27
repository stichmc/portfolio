import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black p-4 flex items-center justify-center space-x-4">
      <Link
        to="https://www.linkedin.com/in/mcstich?trk=profile-badge"
        target="_blank"
      >
        <img
          src="/linkedin.svg"
          className="h-14 w-14 transition-transform transform hover:scale-125"
          alt="LinkedIn"
        />
      </Link>
      <Link to="https://github.com/stichmc" target="_blank">
        <img
          src="/github.svg"
          className="h-12 w-12 transition-transform transform hover:scale-125"
          alt="GitHub"
        />
      </Link>
      <Link
        to="https://stackoverflow.com/users/21374669/stichmc"
        target="_blank"
      >
        <img
          src="/stack-overflow.svg"
          className="h-14 w-14 transition-transform transform hover:scale-125"
          alt="Stack Overflow"
        />
      </Link>
      <Link to="mailto:mcstich@outlook.com" target="_blank">
        <img
          src="/outlook.svg"
          className="h-14 w-14 transition-transform transform hover:scale-125"
          alt="Outlook"
        />
      </Link>
    </div>
  );
};

export default Footer;
