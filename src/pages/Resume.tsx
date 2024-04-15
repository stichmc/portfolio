import profileIcon from "@/assets/resume/profile.png";

const Resume = () => {
  return (
    <div className="flex flex-row lg:space-x-8 w-full items-center justify-center">
      <div className="lg:flex justify-center items-center rounded-full shadow-xl overflow-hidden w-1/3 min-w-64 hidden bg-white">
        <img src={profileIcon} />
      </div>

      <div className="text-black p-8 rounded-2xl shadow-lg w-full bg-white h-full flex flex-col items-start justify-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Hi, I'm Michael Stich!</h1>
        <h2 className="text-lg sm:text-3xl mb-4">
          A computer science student with over two years of hands-on experience in professional software development.
        </h2>

        <a href={`${import.meta.env.BASE_URL}Michael_Stich_Resume.pdf`} target="_blank">
          <button className="bg-gray-950 text-white p-3 font-semibold rounded-full text-lg sm:text-2xl transition-transform transform hover:scale-105">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
