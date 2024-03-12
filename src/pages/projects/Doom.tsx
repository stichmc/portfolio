import { useState, useEffect } from "react";

const Doom = () => {
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
          <h1 className="text-4xl font-bold mb-6">C++ Console Based Game Project</h1>
          {/* <Link to="" target="_blank"> */}
          <div className="relative h-36 w-36 transition-transform transform hover:scale-110">
            <div className="h-full w-full rounded-full shadow-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}doom.png`}
                className="h-full w-full object-contain mx-auto my-auto p-4 mt-1"
                alt="Time Logo"
              />
            </div>
          </div>
          {/* </Link> */}
        </div>

        <div className="grid gap-8">
          <div className="p-8 max-w-5xl mx-auto">
            <div className="mb-8 block items-center md:flex">
              <div className="md:w-1/2 pr-8">
                <img src={`${import.meta.env.BASE_URL}start-screen.png`} className="w-full h-auto rounded-lg" />
              </div>
              <div className="md:w-1/2 pr-8">
                <h2 className="text-2xl font-bold mb-4">About the game:</h2>
                <p className="text-gray-700 mb-8">
                  This was one of my first coding projects ever, which started as a small class assignment and evolved
                  into a fully fledged 2D console viewport videogame. The style of gameplay is inspired by the "Space
                  Invaders" game, and the styling is derived from the "DOOM" video game franchise. It is a turn based
                  game with many levels for the user to play, including a final boss. It has animations, checkpoints,
                  character customization, and various other game modes for hours of fun. For what is lacks in visuals
                  it makes up for in gameplay mechanics. The game feels good to play and rewarding when you win.
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Game Details:</h2>
            <div className="mb-8 block items-center md:flex">
              <div className="md:w-1/2 mb-8">
                <ul className="list-disc">
                  <strong>Getting Started:</strong> To start the game you first declare your username, (which you can
                  use to resume your game if you ever need to quit), the you can choose which ASCII emoji you would like
                  the game to represent your player as. Once you are in the game, you will be prompted with a map screen
                  that will display all the levels you need to traverse through to get to the final boss, and various
                  other modes you can play.
                </ul>
              </div>
              <div className="md:w-1/2 pl-8">
                <img src={`${import.meta.env.BASE_URL}choose-name.png`} className="w-full h-auto rounded-lg" />
                <img src={`${import.meta.env.BASE_URL}choose-icon.png`} className="w-full h-auto rounded-lg" />
              </div>
            </div>
            <div className="mb-8 block items-center md:flex">
              <div className="md:w-1/2 pr-8">
                <img src={`${import.meta.env.BASE_URL}map.png`} className="w-full h-auto rounded-lg" />
                <img src={`${import.meta.env.BASE_URL}level.png`} className="w-full h-auto rounded-lg" />
              </div>
              <div className="md:w-1/2 mb-8">
                <ul>
                  <li className="text-gray-700">
                    <strong>Rules:</strong> Each player is given 100 health, and a set amount of ammo for each of there
                    guns. Different keys on the keyboard inputted into the console shoot different weapons, and (WASD)
                    are used to navigate around the level you are in. Every time you take a turn, shoot a gun, an
                    animation will play and strike your enemy if you are positioned in the right place to shoot at them.
                    If you miss your ammo is spent and the enemy doesn't lose any health. Every time you shoot at the
                    enemy, the enemy will return fire with a random attack. BE CAREFUL! Some attacks can really hurt
                    you. Each weapon has a unique property, so try to leverage that based on what enemy you are facing.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-8 block items-center md:flex">
              <div className="md:w-1/2 mb-8">
                <ul>
                  <li className="text-gray-700">
                    <strong>Final Boss:</strong> The final boss is a dragon with an EPIC death animation! He has special
                    attacks that can really eat your health fast. You need to be quick and smart with this guy, if you
                    slip up just for a second he will kill you! Make sure to hold onto your best weapons ammo!
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 pl-8">
                <img src={`${import.meta.env.BASE_URL}dragon.png`} className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doom;
