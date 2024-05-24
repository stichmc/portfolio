import buffsIcon from "@/assets/education/buffs.svg";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Education = () => {
  return (
    <div className="flex flex-col space-y-14 sm:space-y-24 lg:space-y-12 bg-gray-200 sm:h-screen">
      <Navbar isHome={false} isEducation={true} isProjects={false} />

      <div className="lg:p-24 p-8">
        <FadeIn>
          <div className="text-black p-8 rounded-2xl shadow-lg w-full bg-white flex flex-row space-x-12 xl:space-x-24">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Education</h1>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">University of Colorado Boulder</h2>
              <p className="text-xl sm:text-2xl font-semibold mb-1">Bachelor of Science in Computer Science</p>
              <p className="text-lg sm:text-xl">Expected Graduation: December 2024</p>
              <p className="text-md sm:text-xl mt-2">
                I chose to pursue a computer science degree because of my fascination with software engineering and its
                capacity to tackle intricate challenges, foster innovation, and develop impactful solutions that benefit
                everyone. Software engineering's dynamic nature and the constant opportunities for learning and
                contribution have always been my leading motivation for becoming a software engineer. My coursework
                encompasses mastering algorithms, data structures, software engineering, and computer architecture.
              </p>
            </div>

            <img src={buffsIcon} className="w-1/3 hidden lg:block" />
          </div>
        </FadeIn>
      </div>
      <div className="h-12 sm:h-4"></div>
      <Footer />
    </div>
  );
};

export default Education;
