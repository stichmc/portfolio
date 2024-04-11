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
    <>
      <Navbar isHome={false} isEducation={false} isProjects={true} />
      <div className="mb-20 sm:mb-8">
        <div className="bg-gray-200 lg:p-24 p-8">
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
                  <div className="mb-8 block items-center md:flex md:w-1/2">
                    <img src={startScreenPicture} className="rounded-2xl" />
                  </div>

                  <div className="md:w-1/2">
                    <h1 className="text-xl sm:text-3xl font-bold mb-4">Game Details:</h1>
                    <p className="text-sm sm:text-xl mb-8">
                      This was one of my first coding projects ever, which started as a small class assignment and
                      evolved into a fully fledged 2D console viewport videogame. The style of gameplay is inspired by
                      the "Space Invaders" game, and the styling is derived from the "DOOM" video game franchise. It is
                      a turn based game with many levels for the user to play, including a final boss. It has
                      animations, checkpoints, character customization, and various other game modes for hours of fun.
                      For what is lacks in visuals it makes up for in gameplay mechanics. The game feels good to play
                      and rewarding when you win.
                    </p>
                  </div>
                </div>

                <div className="mb-8 block items-center md:flex">
                  <div className="md:w-1/2">
                    <p className="text-sm sm:text-xl mb-8">
                      <strong>Getting Started:</strong> To start the game you first declare your username, (which you
                      can use to resume your game if you ever need to quit), the you can choose which ASCII emoji you
                      would like the game to represent your player as. Once you are in the game, you will be prompted
                      with a map screen that will display all the levels you need to traverse through to get to the
                      final boss, and various other modes you can play.
                    </p>
                  </div>

                  <div className="md:w-1/2 md:pl-8 space-y-2">
                    <img src={chooseNamePicture} className="rounded-2xl" />
                    <img src={chooseIconPicture} className="rounded-2xl" />
                  </div>
                </div>

                <div className="mb-8 block items-center md:flex">
                  <div className="md:w-1/2 md:pr-8 space-y-2 mb-4">
                    <img src={mapPicture} className="rounded-2xl" />
                    <img src={levelPicture} className="rounded-2xl" />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-sm sm:text-xl mb-8">
                      <strong>Rules:</strong> Each player is given 100 health, and a set amount of ammo for each of
                      there guns. Different keys on the keyboard inputted into the console shoot different weapons, and
                      (WASD) are used to navigate around the level you are in. Every time you take a turn, shoot a gun,
                      an animation will play and strike your enemy if you are positioned in the right place to shoot at
                      them. If you miss your ammo is spent and the enemy doesn't lose any health. Every time you shoot
                      at the enemy, the enemy will return fire with a random attack. BE CAREFUL! Some attacks can really
                      hurt you. Each weapon has a unique property, so try to leverage that based on what enemy you are
                      facing.
                    </p>
                  </div>
                </div>

                <div className="mb-2 sm:mb-4 block items-center md:flex">
                  <div className="md:w-1/2">
                    <p className="text-sm sm:text-xl mb-8">
                      <strong>Final Boss:</strong> The final boss is a dragon with an EPIC death animation! He has
                      special attacks that can really eat your health fast. You need to be quick and smart with this
                      guy, if you slip up just for a second he will kill you! Make sure to hold onto your best weapons
                      ammo!
                    </p>
                  </div>

                  <div className="md:w-1/2 md:pl-8">
                    <img src={dragonPicture} className="rounded-2xl" />
                  </div>
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

export default Doom;
