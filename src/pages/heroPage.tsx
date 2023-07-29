import btc from "../assets/btc.png";
import Glow from "../components/glow";
import { useAnimate, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

function Hero() {
  const ref = useRef(null);
  const WIDTH = window.screen.width;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -WIDTH / 1.7]);

  return (
    <>
      <Glow more="top-0 left-0 " />
      <Glow more="top-0 right-0" />
      <Glow more="bottom-0 right-0" />
      <header className="border-b border-y-cyan-400 h-14 sticky ">
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
            <a href="#about">
              <button className="bg-gradient-to-r from-ctrColor1 to-ctrColor2 hover:scale-105 text-white font-bold py-2 px-4 rounded">
                EXPLORE
              </button>
            </a>
          </li>
        </ul>
      </header>

      {/* hero */}
      <motion.img
        style={{ translateX }}
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
        className="w-2/5 fixed right-0 m-20 top-0"
      />
      <motion.section
        style={{ opacity, scale: opacity }}
        ref={ref}
        className="h-screen w-full"
      >
        <div className="w-full h-screen flex justify-around items-center ">
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
        </div>
      </motion.section>
      {/* about */}

      <section id="about" className="h-screen">
        <div className="w-full h-screen flex justify-around items-center ">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex flex-col p-20 justify-around h-72 mr-5">
            <h1 className=" font-semibold text-2xl pb-5">
              Join us on an exciting journey into the world of cryptocurrencies
              and blockchain technology, where innovation knows no bounds.
            </h1>
            <p className="text-lg">
              Whether you're a seasoned crypto enthusiast or just getting
              started, our platform offers a wealth of knowledge and resources
              to help you navigate the thrilling world of digital assets.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
