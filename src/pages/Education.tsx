import buffsIcon from "@/assets/education/buffs.svg";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Education = () => {
  return (
    <>
      <Navbar isHome={false} isEducation={true} isProjects={false} />

      <div className="bg-gray-200 h-[95vh]">
        <FadeIn>
          <div className="flex items-center justify-center lg:p-24 p-8 h-[80vh]">
            <div className="flex flex-row md:space-x-8 w-full h-[36vh] items-center justify-center mt-20">
              <div className="text-black p-8 rounded-2xl shadow-lg w-full bg-white flex flex-row space-x-4 xl:space-x-48">
                <div className="flex flex-col justify-center">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">Education</h1>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">University of Colorado Boulder</h2>
                  <p className="text-xl sm:text-2xl font-semibold mb-1">Bachelor of Science in Computer Science</p>
                  <p className="text-lg sm:text-xl">Expected Graduation: May 2025</p>
                  <p className="text-md sm:text-xl mt-2">
                    I chose to pursue a computer science degree due to my enduring fascination with technology and its
                    capacity to tackle intricate challenges, foster innovation, and develop impactful solutions that
                    benefit society. The field's dynamic nature and the constant opportunities for learning and
                    contribution have deepened my passion for computer science. My coursework encompasses mastering
                    algorithms, data structures, software engineering, and computer architecture, which has
                    significantly improved my programming and problem-solving abilities.
                  </p>
                </div>

                <img src={buffsIcon} className="w-1/3 hidden lg:block" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </>
  );
};

export default Education;
