import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import doomIcon from "@/assets/projects/doom.png";
import startScreenPicture from "@/assets/projects/start_screen.png";
import chooseNamePicture from "@/assets/projects/choose_name.png";
import chooseIconPicture from "@/assets/projects/choose_icon.png";
import mapPicture from "@/assets/projects/map.png";
import levelPicture from "@/assets/projects/level.png";
import dragonPicture from "@/assets/projects/dragon.png";

const Doom = () => {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-24 lg:space-y-12 bg-gray-200">
      <Navbar isHome={false} isEducation={false} isProjects={true} />

      <div className="lg:p-24 p-8">
        <FadeIn>
          <div className="flex flex-col text-black p-4 sm:p-8 rounded-2xl shadow-lg bg-white mt-2 sm:mt-[-2rem]">
            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-4xl font-bold mb-6">C++ Console Based Game Project</h1>
              {/* <a href="" target="blank"> */}
              <div className="w-44 h-24 sm:w-36 sm:h-36 transition-transform transform hover:scale-105 shadow-2xl rounded-full flex items-center justify-center">
                <img src={doomIcon} className="w-24 sm:w-32 p-4 mt-2" alt="Time Logo" />
              </div>
              {/* </a> */}
            </div>

            <div className="mt-6 sm:mt-0">
              <div className="md:flex flex-row md:space-x-8 items-center justify-center">
                <div className="mb-8 block items-center md:flex md:w-1/2 mt-4">
                  <img src={startScreenPicture} className="rounded-xl" />
                </div>

                <div className="md:w-1/2">
                  <h1 className="text-xl sm:text-2xl font-bold mb-4">Game Details:</h1>
                  <p className="text-sm sm:text-xl mb-8">
                    This was one of my first coding projects ever, which started as a small class assignment and evolved
                    into a fully fledged 2D console viewport videogame. The style of gameplay is inspired by the "Space
                    Invaders" game, and the styling is derived from the "DOOM" videogame franchise. It is a turn based
                    game with many levels for the user to play, including a final boss. It has animations, checkpoints,
                    character customization, and various other game modes for hours of fun. For what is lacks in visuals
                    it makes up for in gameplay mechanics. The game feels good to play and rewarding when you win.
                  </p>
                </div>
              </div>

              <div className="mb-8 block items-center md:flex">
                <div className="md:w-1/2">
                  <h1 className="text-xl sm:text-2xl font-bold mb-4">Getting Started:</h1>
                  <p className="text-sm sm:text-xl mb-8">
                    To start the game you first declare your username, (which you can use to resume your game if you
                    ever need to quit), then you can choose which ASCII emoji you would like the game to represent your
                    player as. Once you are in the game, you will be prompted with a map screen that will display all
                    the levels you need to traverse through to get to the final boss, and various other modes you can
                    play.
                  </p>
                </div>

                <div className="md:w-1/2 md:pl-8 space-y-2">
                  <img src={chooseNamePicture} className="rounded-xl" />
                  <img src={chooseIconPicture} className="rounded-xl" />
                </div>
              </div>

              <div className="mb-8 block items-center md:flex">
                <div className="md:w-1/2 md:pr-8 space-y-2 mb-4">
                  <img src={mapPicture} className="rounded-xl" />
                  <img src={levelPicture} className="rounded-xl" />
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-xl sm:text-2xl font-bold mb-4">Rules:</h1>
                  <p className="text-sm sm:text-xl mb-8">
                    Each player is given 100 health, and a set amount of ammo for each gun. Keys (1,2,3,4,5) are used to
                    shoot the player's weapons, and keys (WASD) are used to move the player around the level. Every time
                    the player shoots a gun, an animation will play and strike the enemy if the player is positioned in
                    the right place to shoot the enemy. If the player misses, they lose ammo and the enemy doesn't lose
                    any health. Every time the player shoots at the enemy, the enemy will return fire with a random
                    attack. Some rare attacks can really hurt the player! Each weapon has a unique property, so it's
                    important to leverage each weapon mechanic based on which enemy you're up against.
                  </p>
                </div>
              </div>

              <div className="block items-center md:flex">
                <div className="md:w-1/2">
                  <h1 className="text-xl sm:text-2xl font-bold mb-4">Final Boss:</h1>
                  <p className="text-sm sm:text-xl mb-8">
                    The final boss is a dragon with an EPIC death animation! He has special attacks that can really eat
                    the player's health fast. The player needs to be quick with this boss, if the player slips up just
                    for a second the dragon will kill you! Make sure to hold onto your best weapons ammo!
                  </p>
                </div>

                <div className="md:w-1/2 md:pl-8">
                  <img src={dragonPicture} className="rounded-xl" />
                </div>
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

export default Doom;
