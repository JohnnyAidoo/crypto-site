import { motion } from "framer-motion";

function Glow(props: { children?: any; more: any }) {
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 0.5,
          },
        }}
        transition={{
          delay: 0.3,
          duration: 1,
        }}
        initial="hidden"
        animate="visible"
        id="glow"
        style={{ translateY: -100 }}
        className={`rounded-full opacity-50 mix-blend-hard-light blur-3xl bg-ctrColor1 w-80 h-80 fixed ${props.more}`}
      ></motion.div>
    </>
  );
}

export default Glow;
