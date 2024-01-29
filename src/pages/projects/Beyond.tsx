import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Beyond = () => {
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
          <h1 className="text-4xl font-bold mb-6">Project Beyond</h1>
          {/* <Link to="https://www.synergyonline.app" target="_blank"> */}
          <div className="relative h-36 w-36 transition-transform transform hover:scale-110">
            <div className="h-full w-full rounded-full shadow-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}beyond_logo.svg`}
                className="h-full w-full object-contain mx-auto my-auto p-4 mt-1"
                alt="Beyond Logo"
              />
            </div>
          </div>
          {/* </Link> */}
        </div>

        <div className="grid gap-8">
          <div className="synergy-container p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">
              Guassing Splotting Graphics
            </h1>
            <p className="text-gray-700 mb-8">
              Synergy is a social media chat app that aims to improve online
              communication by providing a platform that's confidential,
              transparent, and user-friendly. Synergy encapsulates all the great
              features of other messaging apps and combines them into a platform
              that puts users first. The app's design focuses on creating a
              strong technical foundation and ensuring an intuitive user
              experience that simplifies messaging. By doing so, Synergy offers
              a concise and easy-to-understand platform that enables users to
              communicate effectively and securely.
            </p>
            <div className="feature-section mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
              <ul className="list-disc">
                <li className="text-gray-700">
                  <strong>Confidential Communication:</strong> Synergy places a
                  premium on user privacy through the implementation of
                  end-to-end encryption, ensuring the confidentiality of all
                  communications. This pivotal feature creates a secure
                  environment for the exchange of sensitive information without
                  compromising data integrity.
                </li>
                <li className="text-gray-700">
                  <strong>Transparent Operations:</strong> Synergy's design
                  emphasizes transparency, offering comprehensive audit logs for
                  users to track and review all activities within the platform.
                  This feature fosters accountability and trust, making Synergy
                  an ideal choice for professional and collaborative
                  environments.
                </li>
                <li className="text-gray-700">
                  <strong>Feature-Rich Interface:</strong> Boasting a diverse
                  set of features, Synergy enhances communication and
                  collaboration. From multimedia sharing to real-time messaging,
                  voice chat, and more, the platform caters to various user
                  needs. Customizable user profiles and advanced notification
                  settings contribute to a personalized and efficient user
                  experience.
                </li>
                <li className="text-gray-700">
                  <strong>User-Friendly Design:</strong> Synergy's user
                  interface is crafted for simplicity and intuitiveness. A clean
                  and responsive layout ensures that users can navigate the
                  application effortlessly, making it accessible to individuals
                  with varying levels of technical expertise.
                </li>
              </ul>
            </div>

            <div className="technical-details-section mb-8">
              <h2 className="text-2xl font-bold mb-4">Technical Details:</h2>
              <ul className="list-disc">
                <li className="text-gray-700">
                  <strong>Node.js Express Backend:</strong> The backend of
                  Synergy is powered by Node.js, leveraging the Express
                  framework for scalability and high performance. This
                  architecture enables Synergy to handle a large volume of
                  concurrent users seamlessly.
                </li>
                <li className="text-gray-700">
                  <strong>PostgreSQL Database:</strong> Synergy relies on a
                  PostgreSQL SQL database for robust data management. This
                  choice provides the application with the necessary flexibility
                  and reliability to store and retrieve user data efficiently.
                </li>
                <li className="text-gray-700">
                  <strong>React Frontend with Vite:</strong> The frontend of
                  Synergy is built using React, a popular JavaScript library for
                  building user interfaces. Vite serves as the frontend build
                  tool, enhancing development speed and overall performance for
                  a responsive and engaging user interface.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beyond;
