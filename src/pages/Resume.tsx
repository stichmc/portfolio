import { Button } from "@/components/ui/button";
import profileIcon from "@/assets/resume/profile.png";

const Resume = () => {
  return (
    <div className="flex flex-row sm:space-x-8 w-full items-center justify-center p-8">
      <div className="sm:flex justify-center items-center rounded-full shadow-xl overflow-hidden w-80 hidden">
        <img src={profileIcon} alt="Profile Icon" className="rounded-full" />
      </div>
      <div className="text-black p-8 rounded-2xl shadow-lg w-full bg-white">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Hi, I'm Michael Stich!</h1>
        <h2 className="text-lg sm:text-2xl mb-4">
          An ambitious software engineering student with over three years of hands-on experience in professional
          software development.
        </h2>

        <a href={`${import.meta.env.BASE_URL}Michael_Stich_Resume.pdf`} target="_blank">
          <Button className="bg-gray-950 text-white px-4 py-2 rounded-full text-lg transition-transform transform hover:scale-105">
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
