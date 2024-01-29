import { useState, useEffect } from "react";

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
          {/* <Link to="" target="_blank"> */}
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
          <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">
              Bringing fun back to adventure games
            </h1>
            <p className="text-gray-700 mb-8">
              Beyond is a 2D pixel game passion project that I have been working
              on for a long time. It's inspiration stems from my love of space
              style games and my passion for playing adventure games.
            </p>
            <div className="mb-8 block items-center md:flex">
              <div className="md:w-1/2 pr-8">
                <img
                  src={`${import.meta.env.BASE_URL}beyond-title.jpg`}
                  alt="Beyond Title Screen"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Pixel Art Aspect</h2>
                <p className="text-gray-700">
                  A significant focus during development has been on the pixel
                  art aspect of Beyond. Meticulously crafted using tools like
                  Aseprite and Pyxel Edit, the game boasts visually stunning and
                  detailed pixel art assets. The dedication extends to the
                  creation of reusable scenes and props, ensuring a cohesive and
                  visually appealing environment throughout every facet of the
                  game.
                </p>
                <br />
                <p className="text-gray-700">
                  The integration of Unity's tilemap system allows for efficient
                  placement and arrangement of pixel art assets, facilitating
                  the seamless construction of diverse and engaging game worlds.
                  Dynamic lighting and a custom animation system further enhance
                  the visual charm, creating an immersive experience for players
                  as they explore the captivating pixelated landscapes.
                </p>
              </div>
            </div>
            <div className="key-features-section mb-8">
              <h2 className="text-2xl font-bold mb-4">The Story</h2>
              <p className="text-gray-700">
                The story of Beyond revolves around a lone space explorer who
                discovers an ancient spacecraft capable of traversing the
                vastness of space. The spacecraft leads the explorer to an
                enigmatic ancient temple hidden within a distant nebula, where
                they unravel the secrets of the universe. The story is set in
                the future where the universe teeters on the edge of collapse
                due to a mysterious cosmic anomaly known as the Eventide Abyss.
                The Abyss is a malevolent force relentlessly consuming entire
                star systems, and the explorer's goal is to stop it. The story
                is filled with diverse civilizations, physical challenges of
                space, moral quandaries, and a final confrontation beyond the
                heart of the cosmic turmoil. The fate of the universe hangs in
                the balance as the lone explorer ventures Beyond.
              </p>
            </div>

            <div className="technical-details-section mb-8">
              <h2 className="text-2xl font-bold mb-4">Technical Details:</h2>
              <ul className="list-disc">
                <li className="text-gray-700">
                  <strong>Unity Game Engine:</strong> Project Beyond is
                  developed using the Unity game engine, providing a robust and
                  versatile platform for 2D game development.
                </li>
                <li className="text-gray-700">
                  <strong>Pixel Art Tools:</strong> The game's pixel art is
                  crafted using industry-leading tools such as Aseprite and
                  Pyxel Edit, ensuring high-quality and visually appealing
                  sprites, scenes, and props.
                </li>
                <li className="text-gray-700">
                  <strong>Tilemap Integration:</strong> Utilizing Unity's
                  built-in tilemap system for efficient level design and
                  rendering, optimizing performance and streamlining the
                  creation of intricate game environments.
                </li>
                <li className="text-gray-700">
                  <strong>Dynamic Lighting:</strong> Implementing a dynamic
                  lighting system, enhancing the visual experience by creating
                  realistic shadows and illumination effects within the pixel
                  art world.
                </li>
                <li className="text-gray-700">
                  <strong>Custom Animation System:</strong> Designing and
                  implementing a custom animation system to bring characters and
                  in-game elements to life, ensuring smooth and engaging
                  movement throughout the gameplay.
                </li>
                <li className="text-gray-700">
                  <strong>Asset Bundling:</strong> Employing Unity's asset
                  bundling techniques to optimize resource loading, reducing
                  load times and ensuring a seamless gaming experience for
                  players.
                </li>
                <li className="text-gray-700">
                  <strong>Sound Design with FMOD:</strong> Integrating the FMOD
                  audio engine for advanced sound design, enabling dynamic and
                  immersive audio experiences that complement the game's
                  atmosphere and interactions.
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
