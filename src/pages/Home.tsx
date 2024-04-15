import FadeIn from "@/components/FadeIn";
import Resume from "./Resume";
import Navbar from "@/components/Navbar";
import WorkExperience from "./WorkExperience";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-24 lg:space-y-12 bg-gray-200">
      <Navbar isHome={true} isEducation={false} isProjects={false} />

      <div className="bg-gray-200 lg:p-24 p-8">
        <FadeIn>
          <div className="flex flex-col justify-start items-center h-full space-y-8 sm:space-y-20 mt-2">
            <Resume />
            <WorkExperience />
          </div>
        </FadeIn>
      </div>

      <div className="h-12 sm:h-4"></div>
      <Footer />
    </div>
  );
};

export default Home;
