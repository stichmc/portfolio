import { Link } from "react-router-dom";
import linkedInIcon from "@/assets/footer/linkedin.svg";
import gitHubIcon from "@/assets/footer/github.svg";
import stackOverflowIcon from "@/assets/footer/stack-overflow.svg";
import mailIcon from "@/assets/footer/mail.svg";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black p-4 flex items-center justify-center space-x-4 bg-opacity-80">
      <Link to="https://www.linkedin.com/in/mcstich?trk=profile-badge" target="_blank">
        <img src={linkedInIcon} className="h-14 w-14 transition-transform transform hover:scale-110" alt="LinkedIn" />
      </Link>
      <Link to="https://github.com/stichmc" target="_blank">
        <img src={gitHubIcon} className="h-12 w-12 transition-transform transform hover:scale-110" alt="GitHub" />
      </Link>
      <Link to="https://stackoverflow.com/users/21374669/stichmc" target="_blank">
        <img
          src={stackOverflowIcon}
          className="h-14 w-14 transition-transform transform hover:scale-110"
          alt="Stack Overflow"
        />
      </Link>
      <Link to="mailto:mcstich@outlook.com" target="_blank">
        <img src={mailIcon} className="h-14 w-14 transition-transform transform hover:scale-110" alt="Outlook" />
      </Link>
    </div>
  );
};

export default Footer;
