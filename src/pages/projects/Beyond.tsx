import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import beyondIcon from "@/assets/projects/beyond_logo.svg";
import beyondTitleScreen from "@/assets/projects/beyond_title.jpg";
import Footer from "@/components/Footer";

const Beyond = () => {
  return (
    <>
      <Navbar isHome={false} isEducation={false} isProjects={true} />
      <div className="mb-20 sm:mb-8">
        <div className="bg-gray-200 lg:p-24 p-8">
          <FadeIn>
            <div className="flex flex-col text-black p-8 rounded-2xl shadow-lg bg-white mt-2 sm:mt-[-2rem]">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-4xl font-bold mb-6">Project Beyond</h1>
                {/* <Link to="" target="_blank"> */}
                <div className="w-36 transition-transform transform hover:scale-105 shadow-2xl rounded-full">
                  <img src={beyondIcon} className="p-4" alt="Beyond Logo" />
                </div>
                {/* </Link> */}
              </div>

              <div className="mt-6 sm:mt-0">
                <h1 className="text-xl sm:text-3xl font-bold mb-4">Bringing fun back to adventure games</h1>
                <p className="text-sm sm:text-xl text-gray-700 mb-8">
                  Beyond is a 2D adventure game that I have been working on for a long time. Its inspiration stems from
                  my love of space-style games and my passion for playing adventure games. As I continue to develop it,
                  I aim to create an immersive experience that combines the excitement of space exploration with
                  engaging storytelling and challenging gameplay mechanics.
                </p>
                <div className="mb-8 block items-center md:flex">
                  <div className="md:w-1/3 md:pr-8">
                    <img src={beyondTitleScreen} alt="Beyond Title Screen" className="rounded-2xl" />
                  </div>
                  <div className="md:w-3/4 mt-4 sm:mt-0">
                    <h2 className="text-2xl font-bold mb-4">Pixel Art Aspect</h2>
                    <p className="text-sm sm:text-lg text-gray-700">
                      A significant focus during development has been on the pixel art aspect of Beyond. Meticulously
                      crafted using tools like Aseprite and Pyxel Edit, the game boasts visually stunning and detailed
                      pixel art assets. The dedication extends to the creation of reusable scenes and props, ensuring a
                      cohesive and visually appealing environment throughout every facet of the game.
                    </p>
                    <br />
                    <p className="text-sm sm:text-lg text-gray-700">
                      The integration of Unity's tilemap system allows for efficient placement and arrangement of pixel
                      art assets, facilitating the seamless construction of diverse and engaging game worlds. Dynamic
                      lighting and a custom animation system further enhance the visual charm, creating an immersive
                      experience for players as they explore the captivating pixelated landscapes.
                    </p>
                  </div>
                </div>
                <div className="key-features-section mb-8">
                  <h2 className="text-2xl font-bold mb-4">The Story</h2>
                  <p className="text-sm sm:text-lg text-gray-700">
                    The story of Beyond revolves around a lone space explorer who discovers an ancient spacecraft
                    capable of traversing the vastness of space. The spacecraft leads the explorer to an ancient temple
                    hidden within a distant nebula, that unravels the secrets of the origins of the universe. The story
                    is set in the future where the universe teeters on the edge of collapse due to a mysterious cosmic
                    anomaly. The anomaly is a malevolent force relentlessly consuming entire star systems, and the
                    explorer's goal is to stop it. The fate of the universe hangs in the balance as the lone explorer
                    ventures Beyond.
                  </p>
                </div>

                <div className="technical-details-section">
                  <h2 className="text-2xl font-bold mb-4">Technical Details:</h2>
                  <ul className="list-disc">
                    <li className="text-sm sm:text-lg text-gray-700">
                      <strong>Unity Game Engine:</strong> Project Beyond is developed using the Unity game engine,
                      providing a robust and versatile platform for 2D game development.
                    </li>
                    <li className="text-sm sm:text-lg text-gray-700">
                      <strong>Pixel Art Tools:</strong> The game's pixel art is crafted using industry-leading tools
                      such as Aseprite and Pyxel Edit, ensuring high-quality and visually appealing sprites, scenes, and
                      props.
                    </li>
                    <li className="text-sm sm:text-lg text-gray-700">
                      <strong>Tilemap Integration:</strong> Utilizing Unity's built-in tilemap system for efficient
                      level design and rendering, optimizing performance and streamlining the creation of intricate game
                      environments.
                    </li>
                    <li className="text-sm sm:text-lg text-gray-700">
                      <strong>Dynamic Lighting:</strong> Implementing a dynamic lighting system, enhancing the visual
                      experience by creating realistic shadows and illumination effects within the pixel art world.
                    </li>
                    <li className="text-sm sm:text-lg text-gray-700">
                      <strong>Custom Animation System:</strong> Designing and implementing a custom animation system to
                      bring characters and in-game elements to life, ensuring smooth and engaging movement throughout
                      the gameplay.
                    </li>
                    <li className="text-sm sm:text-lg text-gray-700">
                      <strong>Asset Bundling:</strong> Employing Unity's asset bundling techniques to optimize resource
                      loading, reducing load times and ensuring a seamless gaming experience for players.
                    </li>
                    <li className="text-sm sm:text-lg text-gray-700">
                      <strong>Sound Design with FMOD:</strong> Integrating the FMOD audio engine for advanced sound
                      design, enabling dynamic and immersive audio experiences that complement the game's atmosphere and
                      interactions.
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

export default Beyond;
