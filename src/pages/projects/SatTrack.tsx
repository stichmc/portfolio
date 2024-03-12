import { useState, useEffect } from "react";

const SatTrack = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-full ${
        fadeIn ? "opacity-100 duration-1000" : "opacity-0 duration-500"
      } transition-opacity mb-32`}
    >
      <div className="text-black p-8 rounded-md shadow-lg max-w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-6">HackCU 2024 24hr Project: Sat-track</h1>
          {/* <Link to="" target="_blank"> */}
          <div className="relative h-36 w-36 transition-transform transform hover:scale-110">
            <a href="https://github.com/stichmc/sat-track" target="blank">
              <div className="h-full w-full rounded-full shadow-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}satellite.svg`}
                  className="h-full w-full object-contain mx-auto my-auto p-4 mt-1"
                  alt="Sat-track Logo"
                />
              </div>
            </a>
          </div>
          {/* </Link> */}
        </div>

        <div className="grid gap-8">
          <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Your go-to satellite tracking website!</h1>
            <p className="text-gray-700 mb-8">
              Sat-Track is designed to provide real-time tracking information for various satellites orbiting Earth,
              making it easier for enthusiasts, researchers, and curious minds to observe these celestial objects from
              the comfort of their screens. Whether you're interested in spotting the International Space Station (ISS),
              the Hubble Space Telescope, or any other satellite, Sat-Track has you covered. My team and I developed
              this entire project in 24 hours at HackCU 2024.
            </p>
            <div className="mb-8">
              <div className=" pr-8">
                <img
                  src={`${import.meta.env.BASE_URL}sat-track.png`}
                  alt="SatTrack"
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </div>

            <div className="mb-8 block items-center md:flex">
              <div className="md:w-1/2 pr-8">
                <img src={`${import.meta.env.BASE_URL}globe.png`} alt="Globe" className="h-auto rounded-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">The Globe</h2>
                <p className="text-gray-700">
                  This labor of love, this globe rendered by Three.js took a majority of our time. The satellite data we
                  receive from our external apis give us all the positioning and velocity variables we needed to
                  approximate a satellites location and orbit around Earth. Our little green dots are able to move
                  around the globe accurately to that satellite's current position, velocity, and altitude.
                </p>
              </div>
            </div>

            <div className="mb-8 block items-center md:flex">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">The Control Panel</h2>
                <p className="text-gray-700">
                  The control panel is where you can see the data we are pulling from our external apis. This includes
                  the satellite's real time longitude, latitude and altitude. If you have a satellite's id, you can
                  input it into the control panel and add it to our tracked satellites list. This will also allow you to
                  see the satellite's position on the globe.
                </p>
              </div>
              <div className="md:w-1/2 pl-8">
                <img
                  src={`${import.meta.env.BASE_URL}terminal.png`}
                  alt="Control Panel"
                  className="h-auto rounded-lg"
                />
              </div>
            </div>

            <div className="technical-details-section mb-8">
              <h2 className="text-2xl font-bold mb-4">Features:</h2>
              <ul className="list-disc">
                <li className="text-gray-700">
                  <strong>Default Display:</strong> Sat-Track comes pre-loaded with information about several popular
                  orbiters in low Earth orbit, including the ISS and the Hubble Space Telescope. This allows users to
                  quickly access data about these well-known satellites without the need for manual searches.
                </li>
                <li className="text-gray-700">
                  <strong>Custom Satellite Search:</strong> In addition to the default display, Sat-Track offers users
                  the flexibility to search for and add any additional satellites orbiting Earth. Whether you're
                  tracking a specific scientific mission, a commercial satellite, or a governmental project, Sat-Track's
                  search functionality makes it easy to find and monitor the desired satellite.
                </li>
                <li className="text-gray-700">
                  <strong>Real-Time Updates:</strong> Sat-Track provides real-time updates on the positions and
                  trajectories of tracked satellites, ensuring that users have access to the most accurate and
                  up-to-date information available. Whether you're planning a stargazing session or conducting research,
                  you can rely on Sat-Track to provide reliable tracking data whenever you need it.
                </li>
              </ul>
            </div>

            <div className="technical-details-section mb-8">
              <h2 className="text-2xl font-bold mb-4">Technology:</h2>
              <ul className="list-disc">
                <li className="text-gray-700">
                  <strong>Frontend:</strong> The front end of stat-track employs modern react with typescript.
                </li>
                <li className="text-gray-700">
                  <strong>Backend:</strong> A Postgres SQL database was used to store satellite information, such as
                  name, id, and position data. An Express based Rest API was used to interface between the frontend and
                  the database. API calls were made to n2yo.com to get updated satellite tracking information.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatTrack;
