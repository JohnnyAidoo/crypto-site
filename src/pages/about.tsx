import btc from "../assets/btc.png";
import Glow from "../components/glow";

function About() {
  return (
    <>
      <section className="h-screen">
        <div className="w-full h-screen flex justify-around items-center ">
          <img src={btc} alt="" className="w-1/3" />
          <div className="w-1/2 flex flex-col p-20 justify-around h-72">
            <h1 className=" font-semibold">
              Join us on an exciting journey into the world of cryptocurrencies
              and blockchain technology, where innovation knows no bounds.
            </h1>
            <p>
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

export default About;
