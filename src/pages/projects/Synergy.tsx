import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Synergy = () => {
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
          <h1 className="text-4xl font-bold mb-6">Project Synergy</h1>
          <Link to="https://chat.mcstich.com" target="_blank">
            <div className="relative h-36 w-36 transition-transform transform hover:scale-110">
              <div className="h-full w-full rounded-full shadow-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}synergy_logo.svg`}
                  className="h-full w-full object-contain mx-auto my-auto p-4 mt-1"
                  alt="Synergy Logo"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="grid gap-8">
          <div className="synergy-container p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Refining Online Communication</h1>
            <p className="text-gray-700 mb-8">
              Synergy is a social media chat app that aims to improve online communication by providing a platform
              that's confidential, transparent, and user-friendly. Synergy encapsulates all the great features of other
              messaging apps and combines them into a platform that puts users first. The app's design focuses on
              creating a strong technical foundation and ensuring an intuitive user experience that simplifies
              messaging. By doing so, Synergy offers a concise and easy-to-understand platform that enables users to
              communicate effectively and securely.
            </p>
            <div className="feature-section mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
              <ul className="list-disc">
                <li className="text-gray-700">
                  <strong>Confidential Communication:</strong> Synergy places a premium on user privacy through the
                  implementation of end-to-end encryption, ensuring the confidentiality of all communications. This
                  pivotal feature creates a secure environment for the exchange of sensitive information without
                  compromising data integrity.
                </li>
                <li className="text-gray-700">
                  <strong>Transparent Operations:</strong> Synergy's design emphasizes transparency, offering
                  comprehensive audit logs for users to track and review all activities within the platform. This
                  feature fosters accountability and trust, making Synergy an ideal choice for professional and
                  collaborative environments.
                </li>
                <li className="text-gray-700">
                  <strong>Feature-Rich Interface:</strong> Boasting a diverse set of features, Synergy enhances
                  communication and collaboration. From multimedia sharing to real-time messaging, voice chat, and more,
                  the platform caters to various user needs. Customizable user profiles and advanced notification
                  settings contribute to a personalized and efficient user experience.
                </li>
                <li className="text-gray-700">
                  <strong>User-Friendly Design:</strong> Synergy's user interface is crafted for simplicity and
                  intuitiveness. A clean and responsive layout ensures that users can navigate the application
                  effortlessly, making it accessible to individuals with varying levels of technical expertise.
                </li>
              </ul>
            </div>

            <div className="technical-details-section mb-8">
              <h2 className="text-2xl font-bold mb-4">Technical Details:</h2>
              <ul className="list-disc">
                <li className="text-gray-700">
                  <strong>Node.js Express Backend:</strong> The backend of Synergy is powered by Node.js, leveraging the
                  Express framework for scalability and high performance. This architecture enables Synergy to handle a
                  large volume of concurrent users seamlessly.
                </li>
                <li className="text-gray-700">
                  <strong>PostgreSQL Database:</strong> Synergy relies on a PostgreSQL SQL database for robust data
                  management. This choice provides the application with the necessary flexibility and reliability to
                  store and retrieve user data efficiently.
                </li>
                <li className="text-gray-700">
                  <strong>React Frontend with Vite:</strong> The frontend of Synergy is built using React, a popular
                  JavaScript library for building user interfaces. Vite serves as the frontend build tool, enhancing
                  development speed and overall performance for a responsive and engaging user interface.
                </li>
              </ul>
            </div>

            {/* <div className="feature-section mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Reliability at its Core
              </h2>
              <p className="text-gray-700">
                Tired of dropped calls and unreliable messaging services?
                Synergy guarantees a stable and dependable platform for all your
                communication needs. Our state-of-the-art servers and
                infrastructure are designed to provide a consistent and lag-free
                experience, allowing you to focus on what matters – meaningful
                conversations without interruptions.
              </p>
            </div>
            <div className="feature-section mb-8 flex items-center">
              <div className="w-1/2 pr-8">
                <img
                  src="/path/to/your/image.jpg"
                  alt="Synergy Feature"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                  User-Friendly Interface
                </h2>
                <p className="text-gray-700">
                  Synergy sets itself apart with an intuitive and user-friendly
                  interface, making it easier than ever to connect with friends,
                  family, or colleagues. Whether you're a tech enthusiast or a
                  casual user, our clean design and straightforward navigation
                  ensure that everyone can enjoy the full range of features
                  without a steep learning curve. Effortlessly organize your
                  groups, manage notifications, and customize your experience
                  with Synergy's simplicity.
                </p>
              </div>
            </div>
            <div className="key-features-section mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  End-to-End Encryption: Your conversations stay between you and
                  your intended recipients, ensuring the highest level of
                  privacy.
                </li>
                <li>
                  Reliable Communication: Say goodbye to dropped calls and
                  messages. Synergy provides a stable platform for all your
                  communication needs.
                </li>
                <li>
                  Intuitive Design: A user-friendly interface that caters to
                  both tech-savvy users and those new to online communication
                  platforms.
                </li>
                <li>
                  Efficient Collaboration: Share files, documents, and media
                  effortlessly within your groups or direct messages.
                </li>
                <li>
                  Customizable Experience: Tailor Synergy to fit your
                  preferences with personalized settings for notifications,
                  themes, and more.
                </li>
              </ul>
            </div>
            <p className="text-gray-700">
              Synergy is more than just a web application; it's a commitment to
              providing a secure, reliable, and user-friendly space for
              meaningful connections. Join us in shaping the future of online
              communication – where confidentiality, reliability, and simplicity
              unite under the banner of Synergy.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synergy;
