import FadeIn from "@/components/FadeIn";
import Education from "./Education";
import Resume from "./Resume";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar isHome={true} />
      <div className="flex flex-col justify-start items-center h-screen bg-gray-200">
        <FadeIn>
          <Resume />
          <Education />
        </FadeIn>
      </div>
    </>
  );
};

export default Home;
