import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Home = () => {
  // const handleDownload = () => {
  //   const pdfFilePath = `${import.meta.env.BASE_URL}resume.pdf`;
  //   const anchor = document.createElement("a");
  //   anchor.href = pdfFilePath;
  //   anchor.download = "Michael_Stich_Resume.pdf";
  //   document.body.appendChild(anchor);
  //   anchor.click();
  //   document.body.removeChild(anchor);
  // };

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-full p-20 ${
        fadeIn ? "opacity-100 duration-1000" : "opacity-0 duration-500"
      } transition-opacity mb-10`}
    >
      <div className="text-black p-8 rounded-md shadow-lg sm:max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Michael Stich!</h1>
        <h2 className="text-2xl mb-4">
          An aspiring software engineering student with 2+ years of professional
          software development experience.
        </h2>

        <a
          href={`${import.meta.env.BASE_URL}Michael_Stich_Resume.pdf`}
          target="_blank"
        >
          <Button
            // onClick={handleDownload}
            className="bg-gray-950 text-white px-4 py-2 rounded-full text-lg transition-transform transform hover:scale-110"
          >
            Download Resume
          </Button>
        </a>
      </div>

      {/* <div className="ml-12 hidden xl:block">
        <img
          src={`${import.meta.env.BASE_URL}miguel.jpg`}
          className="h-64 w-64 rounded-full shadow-2xl"
        />
      </div> */}
    </div>
  );
};

export default Home;
