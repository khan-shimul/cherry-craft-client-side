import { Typewriter } from "react-simple-typewriter";
import bannerImg from "../../assets/banner-img/feelings-banner.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const CeramicsFeeling = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
      className="max-w-7xl mx-auto h-[350px] md:h-[550px] bg-cover bg-no-repeat bg-center flex flex-col md:flex-row items-center justify-center font-quicksand w-full px-5 md:px-14 my-14"
    >
      <div className="lg:w-1/2 lg:block"></div>
      <div className="lg:w-1/2">
        <h3 className="text-4xl font-bold">
          Your Feelings With
          <span className="pl-2 text-orange">
            <Typewriter
              words={["Ceramics", "Pottery", "Terracotta", "Stoneware!"]}
              loop={0 | false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <Fade direction="left">
          <p className="my-7">
            Ceramics - a source of traditional materials in life. Ceramics have
            been present and changed peoples lives with many applications.
          </p>
          <Link to={"/all-craft-items"}>
            <button className="btn bg-orange px-10 font-medium">
              Shop Now
            </button>
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default CeramicsFeeling;
