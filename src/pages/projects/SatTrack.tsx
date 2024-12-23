import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import satelliteIcon from "@/assets/projects/satellite.svg";
import satTrackPicture from "@/assets/projects/sat-track.png";
import globePicture from "@/assets/projects/globe.png";
import satTerminalPicture from "@/assets/projects/terminal.png";

const SatTrack = () => {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-24 lg:space-y-12 bg-gray-200">
      <Navbar isHome={false} isEducation={false} isProjects={true} />

      <div className="bg-gray-200 lg:p-24 p-8">
        <FadeIn>
          <div className="flex flex-col text-black p-8 rounded-2xl shadow-lg bg-white mt-2 sm:mt-[-2rem]">
            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-4xl font-bold mb-6">HackCU 2024 24hr Project: Sat-track</h1>
              <a href="https://github.com/stichmc/sat-track" target="blank">
                <div className="w-24 h-24 sm:w-36 sm:h-36 transition-transform transform hover:scale-105 shadow-2xl rounded-full flex items-center justify-center">
                  <img src={satelliteIcon} className="w-24 sm:w-32 p-4 mt-2" alt="Sat-track Logo" />
                </div>
              </a>
            </div>

            <div className="mt-6 sm:mt-0">
              <div className="mb-8 sm:mt-8">
                <img src={satTrackPicture} alt="SatTrack" className="rounded-xl" />
              </div>

              <h1 className="text-xl sm:text-3xl font-bold mb-4">Your go-to satellite tracking website!</h1>
              <p className="text-sm sm:text-xl mb-8">
                Sat-Track is designed to provide real-time tracking information for satellites orbiting Earth, making it
                easier for enthusiasts, researchers, and curious minds to observe the telemetry data from satellites.
                Whether you're interested in spotting the International Space Station (ISS), the Hubble Space Telescope,
                or any other satellite, Sat-Track has you covered. My team and I developed this entire project within 24
                hours for the HackCU 2024 hackathon.
              </p>

              <div className="mb-8 items-center md:flex">
                <div className="md:w-1/2 md:pr-8 mx-auto">
                  <img src={satTerminalPicture} alt="Control Panel" className="h-auto rounded-xl" />
                </div>

                <div className="md:w-1/2 mt-4">
                  <h1 className="text-xl sm:text-2xl font-bold mb-4">Control Panel:</h1>
                  <p className="text-sm sm:text-xl mb-8">
                    The control panel is where you can see the live satellite data being pulled from the external apis.
                    This includes the satellite's real time longitude, latitude and altitude. If you have a satellite's
                    id, you can input it into the control panel and add it to the tracked satellites list. This will
                    also allow you to see the satellite's position on the globe.
                  </p>
                </div>
              </div>

              <div className="mb-8 items-center md:flex">
                <div className="md:w-1/2">
                  <h1 className="text-xl sm:text-2xl font-bold mb-4">The Globe:</h1>
                  <p className="text-sm sm:text-xl mb-8">
                    Projecting the live telemetry data onto a Three.js rendered globe took a majority of our time on
                    this project. The green dots orbiting the globe are the live positions of the tracked satellites
                    relative to Earth. The globe is interactive and can be rotated and zoomed in on to see the live data
                    in more detail.
                  </p>
                </div>
                <div className="md:w-1/3 md:pr-8 mx-auto">
                  <img src={globePicture} alt="Globe" className="h-auto rounded-xl" />
                </div>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl font-bold mb-4">Features:</h1>
                <ul className="list-disc">
                  <li className="text-sm sm:text-lg">
                    <strong>Default Display:</strong> Sat-Track comes pre-loaded with information about several popular
                    satellites in low Earth orbit, including the ISS and the Hubble Space Telescope. This allows users
                    to quickly access data about these well-known satellites without the need for manual searches.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Custom Satellite Search:</strong> In addition to the default display, Sat-Track offers users
                    the flexibility to search for and add any additional satellites orbiting Earth. Whether you're
                    tracking a specific scientific mission, a commercial satellite, or a governmental project,
                    Sat-Track's search functionality makes it easy to find and monitor the desired satellite.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Real-Time Updates:</strong> Sat-Track provides real-time updates on satellite telemetry
                    data, ensuring that users have access to the most accurate and up-to-date information available.
                    Whether you're planning a stargazing session or conducting research, you can rely on Sat-Track to
                    provide reliable tracking data whenever you need it.
                  </li>
                </ul>
              </div>

              <div className="technical-details-section mt-4">
                <h1 className="text-xl sm:text-2xl font-bold mb-4">Technical Details:</h1>
                <ul className="list-disc">
                  <li className="text-sm sm:text-lg">
                    <strong>Frontend:</strong> The frontend of Sat-Track is built using React, a popular JavaScript
                    library for building user interfaces. React's component-based architecture allows for modular and
                    scalable development, enhancing the user experience.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Backend:</strong> A Postgres SQL database was used to store satellite information, such as
                    name, id, and position data. An Express based Rest API was used to interface between the frontend
                    and the database. API calls were made to n2yo.com to get updated satellite tracking information.
                  </li>
                </ul>
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

export default SatTrack;
