import { useState, useEffect } from "react";

const TimeEscapement = () => {
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
          <h1 className="text-4xl font-bold mb-6">Time Escapement Project</h1>
          {/* <Link to="" target="_blank"> */}
          <div className="relative h-36 w-36 transition-transform transform hover:scale-110">
            <div className="h-full w-full rounded-full shadow-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}time.svg`}
                className="h-full w-full object-contain mx-auto my-auto p-4"
                alt="Time Logo"
              />
            </div>
          </div>
          {/* </Link> */}
        </div>

        <div className="grid gap-8">
          <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">
              University of Colorado Engineering Projects Expo
            </h1>
            <p className="text-gray-700 mb-8">
              I led a team of four in the development of a 17th-century time
              escapement for a Physics Professor's visual teaching aid. This
              project took place during the Engineering Projects Expo at the
              University of Colorado from February 2022 to April 2022.
            </p>
            <div className="mb-8 block items-center md:flex">
              <div className="md:w-1/2 pr-8">
                <img
                  src={`${import.meta.env.BASE_URL}time-escapement.png`}
                  alt="Time Escapement Picture"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-1/2 mb-8">
                <h2 className="text-2xl font-bold mb-4">Project Details:</h2>
                <ul className="list-disc">
                  <li className="text-gray-700">
                    <strong>Team Leadership:</strong> Led a team of four members
                    throughout the project, overseeing tasks and ensuring
                    collaboration for successful completion.
                  </li>
                  <li className="text-gray-700">
                    <strong>Time Escapement Design:</strong> Designed and
                    constructed a 17th-century time escapement, serving as a
                    visual teaching aid for the Physics Professor.
                  </li>
                  <li className="text-gray-700">
                    <strong>Project Timeline:</strong> Successfully completed
                    the time escapement within a 10-week window, meeting the
                    project's deadline.
                  </li>
                  <li className="text-gray-700">
                    <strong>Budget Management:</strong> Accomplished the project
                    within the allocated budget of $250, demonstrating efficient
                    resource utilization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeEscapement;
