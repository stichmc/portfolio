import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import anelloLogo from "@/assets/anello_logo.svg";
import anelloPage from "@/assets/projects/anello.png";

const Anello = () => {
  return (
    <>
      <Navbar isHome={false} isEducation={false} isProjects={true} />
      <div className="mb-20 sm:mb-8">
        <div className="bg-gray-200 lg:p-24 p-8">
          <FadeIn>
            <div className="flex flex-col text-black p-8 rounded-2xl shadow-lg bg-white mt-2 sm:mt-[-2rem]">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-4xl font-bold mb-6">Project Anello</h1>
                <Link to="https://chat.mcstich.com" target="_blank">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 transition-transform transform hover:scale-105 shadow-2xl rounded-full flex items-center justify-center">
                    <img src={anelloLogo} className="w-24 sm:w-28 p-4 mt-2" alt="Anello Logo" />
                  </div>
                </Link>
              </div>

              <div className="mt-6 sm:mt-0">
                <h1 className="text-xl sm:text-3xl font-bold mb-4">Refining Online Communication</h1>
                <p className="text-sm sm:text-xl  mb-8">
                  Anello is a messaging webapp that aims to improve online communication by providing a platform that's
                  confidential, transparent, and user-friendly. Anello encapsulates all the great features of other
                  messaging apps and combines them into a platform that puts users first. The app's design focuses on
                  creating a strong technical foundation and ensuring an intuitive user experience that simplifies
                  messaging and video conferencing. By doing so, Anello offers a concise and easy-to-understand platform
                  that enables users to communicate effectively and securely.
                </p>
                <div className="mb-8 block items-center md:flex">
                  <div className="md:w-1/2 md:pr-8">
                    <img src={anelloPage} alt="Beyond Title Screen" className="rounded-2xl" />
                  </div>

                  <div className="md:w-3/4 mt-4 sm:mt-0">
                    <h1 className="text-xl sm:text-3xl font-bold mb-4">Key Features:</h1>
                    <ul className="list-disc text-sm sm:text-lg">
                      <li>
                        <strong>Confidential Communication:</strong> Anello places a premium on user privacy through the
                        implementation of end-to-end encryption, ensuring the confidentiality of all communications.
                        This pivotal feature creates a secure environment for the exchange of sensitive information
                        without compromising data integrity.
                      </li>
                      <li>
                        <strong>Transparent Operations:</strong> Anello's design emphasizes transparency, offering
                        comprehensive audit logs for users to track and review all activities within the platform. This
                        feature fosters accountability and trust, making Anello an ideal choice for professional and
                        collaborative environments.
                      </li>
                      <li>
                        <strong>Feature-Rich Interface:</strong> Boasting a diverse set of features, Anello enhances
                        communication and collaboration. From multimedia sharing to real-time messaging, voice chat, and
                        more, the platform caters to various user needs. Customizable user profiles and advanced
                        notification settings contribute to a personalized and efficient user experience.
                      </li>
                      <li>
                        <strong>User-Friendly Design:</strong> Anello's user interface is crafted for simplicity and
                        intuitiveness. A clean and responsive layout ensures that users can navigate the application
                        effortlessly, making it accessible to individuals with varying levels of technical expertise.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h1 className="text-xl sm:text-3xl font-bold mb-4">Technical Details:</h1>
                  <ul className="list-disc">
                    <li className="text-sm sm:text-lg">
                      <strong>Node.js Express Backend:</strong> The backend of Anello is powered by Node.js, leveraging
                      the Express framework for scalability and high performance. This architecture enables Anello to
                      handle a large volume of concurrent users seamlessly.
                    </li>
                    <li className="text-sm sm:text-lg">
                      <strong>PostgreSQL Database:</strong> Anello relies on a PostgreSQL SQL database for robust data
                      management. This choice provides the application with the necessary flexibility and reliability to
                      store and retrieve user data efficiently.
                    </li>
                    <li className="text-sm sm:text-lg">
                      <strong>React Frontend with Vite:</strong> The frontend of Anello is built using React, a popular
                      JavaScript library for building user interfaces. Vite serves as the frontend build tool, enhancing
                      development speed and overall performance for a responsive and engaging user interface.
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

export default Anello;
