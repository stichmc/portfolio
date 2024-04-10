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
            <div className="flex flex-row md:space-x-8 w-full h-[36vh] items-center justify-center">
              <div className="text-black p-8 rounded-2xl shadow-lg w-full bg-white flex flex-row space-x-4 xl:space-x-48">
                <div className="flex flex-col justify-center">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">Education</h1>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">University of Colorado Boulder</h2>
                  <p className="text-xl sm:text-2xl font-semibold mb-1">Bachelor of Science in Computer Science</p>
                  <p className="text-lg sm:text-xl">Expected Graduation: May 2025</p>
                  <p className="text-md sm:text-xl mt-2">
                    I'm pursuing a Bachelor of Science degree in Computer Science to build a strong foundation in
                    computing principles. The coursework covers algorithms, data structures, software engineering, and
                    computer architecture, helping me develop programming and problem-solving skills. This education
                    focuses on critical thinking and communication, allowing me to excel in computer science.
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
