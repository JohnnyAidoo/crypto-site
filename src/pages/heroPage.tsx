import btc from "../assets/btc.png";
import Glow from "../components/glow";
import { useAnimate, motion, useScroll } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const ref = useRef(null);
  const WIDTH = window.screen.width;
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <>
      <header className="border-b border-y-cyan-400 h-14 sticky">
        <ul className="flex justify-around items-center h-full">
          <li>
            <a className="font-bold text-lg hover:text-ctrColor1" href="">
              BIG COIN
            </a>
          </li>
          <li>
            <a className="font-bold hover:text-ctrColor1" href="">
              More
            </a>
          </li>
          <li>
            <button className="bg-gradient-to-r from-ctrColor1 to-ctrColor2 hover:scale-105 text-white font-bold py-2 px-4 rounded">
              EXPLORE
            </button>
          </li>
        </ul>
      </header>

      {/* hero */}
      <section className="h-screen w-full">
        <div
          ref={ref}
          className="w-full h-screen flex justify-around items-center "
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
              },
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{ delay: 0.2 }}
            initial="hidden"
            animate="show"
            className="w-1/3 flex flex-col justify-around h-72"
          >
            <h1 className="text-4xl font-semibold">
              Welcome to Big Coin Unleashing the Power of Blockchain!
            </h1>
            <p>
              Your Gateway to the World of Cryptocurrencies and Blockchain
              Technology
            </p>
            <button className=" w-1/2 bg-gradient-to-r from-ctrColor1 to-ctrColor2 hover:scale-105 text-white font-bold py-2 px-4 rounded">
              EXPLORE
            </button>
          </motion.div>
          <div className="w-1/3"></div>

          <motion.img
            variants={{
              hidden: {
                opacity: 0,
                x: 100,
              },
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            animate="show"
            src={btc}
            alt=""
            className="w-2/5 fixed right-0 m-20"
          />
        </div>
        <Glow more="top-0 left-0" />
        <Glow more="bottom-0 right-0" />
      </section>
    </>
  );
}

export default Hero;
