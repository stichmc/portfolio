import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import timeIcon from "@/assets/projects/time.svg";
import timeEscapementPicture from "@/assets/projects/time_escapement.png";

const TimeEscapement = () => {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-24 lg:space-y-12 bg-gray-200 lg:h-screen">
      <Navbar isHome={false} isEducation={false} isProjects={true} />

      <div className="lg:p-24 p-8">
        <FadeIn>
          <div className="flex flex-col text-black p-8 rounded-2xl shadow-lg bg-white mt-2 sm:mt-[-2rem]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl sm:text-4xl font-bold mb-6">Time Escapement Project</h1>
              <div className="w-40 h-24 sm:w-36 sm:h-36 shadow-2xl rounded-full flex items-center justify-center">
                <img src={timeIcon} className="w-32 sm:w-40 p-4" alt="Time Logo" />
              </div>
            </div>

            <div className="mt-6 sm:mt-0">
              <h1 className="text-xl sm:text-3xl font-bold mb-4">University of Colorado Engineering Projects Expo</h1>
              <p className="text-sm sm:text-xl mb-8">
                I led a team of four in the development of a 17th-century time escapement for a Physics Professor's
                visual teaching aid. This project took place during the Engineering Projects Expo at the University of
                Colorado from February 2022 to April 2022.
              </p>
              <div className="items-center lg:flex">
                <div className="lg:w-1/2 lg:pr-8">
                  <img src={timeEscapementPicture} alt="Time Escapement Picture" className="rounded-xl" />
                </div>

                <div className="mt-4 lg:mt-0">
                  <h1 className="text-xl sm:text-2xl font-bold mb-4">Project Details:</h1>
                  <ul className="list-disc text-sm sm:text-lg">
                    <li>
                      <strong>Team Leadership:</strong> Led a team of four members throughout the project, overseeing
                      tasks and ensuring collaboration for successful completion.
                    </li>
                    <li>
                      <strong>Time Escapement Design:</strong> Designed and constructed a 17th-century time escapement,
                      serving as a visual teaching aid for the Physics Professor.
                    </li>
                    <li>
                      <strong>Project Timeline:</strong> Successfully completed the time escapement within a 10-week
                      window, meeting the project's deadline.
                    </li>
                    <li>
                      <strong>Budget Management:</strong> Accomplished the project within the allocated budget of $250,
                      demonstrating efficient resource utilization.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="h-12 sm:h-4"></div>
      <Footer />
    </div>
  );
};

export default TimeEscapement;
