import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import satelliteIcon from "@/assets/projects/satellite.svg";
import satTrackPicture from "@/assets/projects/sat-track.png";
import globePicture from "@/assets/projects/globe.png";
import satTerminalPicture from "@/assets/projects/terminal.png";

const SatTrack = () => {
  return (
    <>
      <Navbar isHome={false} isEducation={false} isProjects={true} />
      <div className="mb-20 sm:mb-8">
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
                <div className="md:flex flex-row md:space-x-8 items-center justify-center">
                  <div className="mb-8 block items-center md:flex">
                    <img src={satTrackPicture} alt="SatTrack" className="rounded-2xl" />
                  </div>
                  
                  <div>
                    <h1 className="text-xl sm:text-3xl font-bold mb-4">Your go-to satellite tracking website!</h1>
                    <p className="text-sm sm:text-xl mb-8">
                      Sat-Track is designed to provide real-time tracking information for various satellites orbiting
                      Earth, making it easier for enthusiasts, researchers, and curious minds to observe these celestial
                      objects from the comfort of their screens. Whether you're interested in spotting the International
                      Space Station (ISS), the Hubble Space Telescope, or any other satellite, Sat-Track has you
                      covered. My team and I developed this entire project in 24 hours at HackCU 2024.
                    </p>
                  </div>
                </div>

                <div className="mb-8 items-center md:flex">
                  <div className="md:w-1/2">
                    <h1 className="text-xl sm:text-3xl font-bold mb-4">The Globe</h1>
                    <p className="text-sm sm:text-xl mb-8">
                      This labor of love, this globe rendered by Three.js took a majority of our time. The satellite
                      data we receive from our external apis give us all the positioning and velocity variables we
                      needed to approximate a satellites location and orbit around Earth. Our little green dots are able
                      to move around the globe accurately to that satellite's current position, velocity, and altitude.
                    </p>
                  </div>
                  <div className="md:w-1/3 md:pr-8 mx-auto">
                    <img src={globePicture} alt="Globe" className="h-auto rounded-2xl" />
                  </div>
                </div>

                <div className="mb-8 items-center md:flex">
                  <div className="md:w-1/2 md:pr-8 mx-auto">
                    <img src={satTerminalPicture} alt="Control Panel" className="h-auto rounded-2xl" />
                  </div>

                  <div className="md:w-1/2 mt-2">
                    <h1 className="text-xl sm:text-3xl font-bold mb-4">The Control Panel</h1>
                    <p className="text-sm sm:text-xl mb-8">
                      The control panel is where you can see the data we are pulling from our external apis. This
                      includes the satellite's real time longitude, latitude and altitude. If you have a satellite's id,
                      you can input it into the control panel and add it to our tracked satellites list. This will also
                      allow you to see the satellite's position on the globe.
                    </p>
                  </div>
                </div>

                <div>
                  <h1 className="text-xl sm:text-3xl font-bold mb-4">Features:</h1>
                  <ul className="list-disc">
                    <li className="text-sm sm:text-lg">
                      <strong>Default Display:</strong> Sat-Track comes pre-loaded with information about several
                      popular orbiters in low Earth orbit, including the ISS and the Hubble Space Telescope. This allows
                      users to quickly access data about these well-known satellites without the need for manual
                      searches.
                    </li>
                    <li className="text-sm sm:text-lg">
                      <strong>Custom Satellite Search:</strong> In addition to the default display, Sat-Track offers
                      users the flexibility to search for and add any additional satellites orbiting Earth. Whether
                      you're tracking a specific scientific mission, a commercial satellite, or a governmental project,
                      Sat-Track's search functionality makes it easy to find and monitor the desired satellite.
                    </li>
                    <li className="text-sm sm:text-lg">
                      <strong>Real-Time Updates:</strong> Sat-Track provides real-time updates on the positions and
                      trajectories of tracked satellites, ensuring that users have access to the most accurate and
                      up-to-date information available. Whether you're planning a stargazing session or conducting
                      research, you can rely on Sat-Track to provide reliable tracking data whenever you need it.
                    </li>
                  </ul>
                </div>

                <div className="technical-details-section mt-4">
                  <h1 className="text-xl sm:text-3xl font-bold mb-4">Technology:</h1>
                  <ul className="list-disc">
                    <li className="text-sm sm:text-lg">
                      <strong>Frontend:</strong> The front end of stat-track employs modern react with typescript.
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
      </div>
      <Footer />
    </>
  );
};

export default SatTrack;
