import bannerImg from "../../assets/banner-img/feelings-banner.png";

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
        <h3 className="text-4xl font-bold">Your Feelings With Ceramics</h3>
        <p className="my-7">
          Ceramics - a source of traditional materials in life. Ceramics have
          been present and changed peoples lives with many applications.
        </p>
        <button className="btn bg-orange px-10 font-medium">Shop Now</button>
      </div>
    </section>
  );
};

export default CeramicsFeeling;
