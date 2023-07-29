import { useRef } from "react";
import Card from "../components/card";
import { motion, useScroll } from "framer-motion";

function Us() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <motion.section ref={ref} className="h-screen">
        <h1 className="text-center font-bold text-7xl p-10">Why Choose Us ?</h1>
        <div className="flex justify-around items-center">
          <Card />
          <Card />
          <Card />
        </div>
      </motion.section>
    </>
  );
}

export default Us;
