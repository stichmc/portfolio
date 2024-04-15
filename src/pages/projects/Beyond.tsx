import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import beyondIcon from "@/assets/projects/beyond_logo.svg";
import beyondTitleScreen from "@/assets/projects/beyond_title.jpg";
import Footer from "@/components/Footer";

const Beyond = () => {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-24 lg:space-y-12 bg-gray-200">
      <Navbar isHome={false} isEducation={false} isProjects={true} />

      <div className="lg:p-24 p-8">
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
              <p className="text-sm sm:text-xl mb-4">
                Beyond is a 2D adventure game that I have been working on for a long time. As I continue to develop it,
                I aim to create an immersive experience that combines the excitement of space exploration with engaging
                storytelling and challenging gameplay mechanics.
              </p>

              <div className="mb-4 block items-center md:flex">
                <div className="md:w-1/2 2xl:w-1/3 md:pr-8">
                  <img src={beyondTitleScreen} alt="Beyond Title Screen" className="rounded-2xl" />
                </div>
                <div className="md:w-1/2 2xl:w-2/3 mt-4 sm:mt-0">
                  <h2 className="text-2xl font-bold mb-4 mt-4 md:mt-0">The Story</h2>
                  <p className="text-sm sm:text-lg">
                    Beyond is set in a distant future where the universe teeters on the brink of collapse due to a
                    mysterious and malevolent cosmic anomaly. The anomaly relentlessly consumes entire star systems,
                    leaving nothing behind. As a result, the universe is rapidly losing its balance and is inching
                    closer towards destruction. In this dark and foreboding universe, a lone space explorer embarks on a
                    journey of discovery after stumbling upon an ancient spacecraft capable of traveling to the farthest
                    corners of the universe. The fate of the universe hangs in the balance, and the lone explorer must
                    use their newfound technology to stop the cosmic anomaly and restore balance to the universe.
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-4">Pixel Art Aspect</h2>
                <p className="text-sm sm:text-lg">
                  A significant focus during development has been on the pixel art aspect of Beyond. Meticulously
                  crafted using tools like Aseprite and Pyxel Edit, the game boasts visually stunning and detailed pixel
                  art assets. The dedication extends to the creation of reusable scenes and props, ensuring a cohesive
                  and visually appealing environment throughout every facet of the game.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Technical Details:</h2>
                <ul className="list-disc">
                  <li className="text-sm sm:text-lg">
                    <strong>Unity Game Engine:</strong> Project Beyond is developed using the Unity game engine,
                    providing a robust and versatile platform for 2D game development.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Pixel Art Tools:</strong> The game's pixel art is crafted using industry-leading tools such
                    as Aseprite and Pyxel Edit, ensuring high-quality and visually appealing sprites, scenes, and props.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Tilemap Integration:</strong> Utilizing Unity's built-in tilemap system for efficient level
                    design and rendering, optimizing performance and streamlining the creation of intricate game
                    environments.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Dynamic Lighting:</strong> Implementing a dynamic lighting system, enhancing the visual
                    experience by creating realistic shadows and illumination effects within the pixel art world.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Custom Animation System:</strong> Designing and implementing a custom animation system to
                    bring characters and in-game elements to life, ensuring smooth and engaging movement throughout the
                    gameplay.
                  </li>
                  <li className="text-sm sm:text-lg">
                    <strong>Asset Bundling:</strong> Employing Unity's asset bundling techniques to optimize resource
                    loading, reducing load times and ensuring a seamless gaming experience for players.
                  </li>
                  <li className="text-sm sm:text-lg">
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

      <div className="h-12 sm:h-4"></div>
      <Footer />
    </div>
  );
};

export default Beyond;
