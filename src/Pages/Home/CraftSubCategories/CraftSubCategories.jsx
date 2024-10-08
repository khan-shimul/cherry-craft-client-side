import ceramic from "../../../assets/banner-img/ceramic.webp";
import pottery from "../../../assets/banner-img/pottery.webp";
import clayMadePottery from "../../../assets/banner-img/Clay-made pottery.jpg";
import homeDecorPottery from "../../../assets/banner-img/Home decor pottery.jpg";
import stoneware from "../../../assets/banner-img/Stoneware.jpg";
import terraCotta from "../../../assets/banner-img/Terra Cotta.jpg";

const CraftSubCategories = () => {
  return (
    <section className="font-quicksand ">
      <h2 className="font-bold text-4xl text-center pb-5">Craft Categories</h2>
      <div className="border-b-8 border-orange w-1/2 md:w-1/4 lg:w-1/6 flex mx-auto"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
        {/* Ceramic */}
        <div
          style={{
            backgroundImage: `url(${ceramic})`,
          }}
          className="bg-no-repeat bg-cover h-[350px] bg-blend-overlay bg-[#3d3d3d] mx-5 lg:w-full"
        >
          <div className="text-white flex flex-col justify-center items-center h-full">
            <h2 className="font-bold text-3xl mb-7">Ceramic</h2>
            <button className="btn btn-outline btn-warning px-10">
              View All
            </button>
          </div>
        </div>
        {/* Pottery */}
        <div
          style={{
            backgroundImage: `url(${pottery})`,
          }}
          className="bg-no-repeat bg-cover h-[350px] bg-blend-overlay bg-[#3d3d3d] mx-5 lg:w-full"
        >
          <div className="text-white flex flex-col justify-center items-center h-full">
            <h2 className="font-bold text-3xl mb-7">Pottery</h2>
            <button className="btn btn-outline btn-warning px-10">
              View All
            </button>
          </div>
        </div>
        {/* Clay-made Pottery */}
        <div
          style={{
            backgroundImage: `url(${clayMadePottery})`,
          }}
          className="bg-no-repeat bg-cover h-[350px] bg-blend-overlay bg-[#3d3d3d] mx-5 lg:w-full"
        >
          <div className="text-white flex flex-col justify-center items-center h-full">
            <h2 className="font-bold text-3xl mb-7">Clay-made Pottery</h2>
            <button className="btn btn-outline btn-warning px-10">
              View All
            </button>
          </div>
        </div>
        {/* Home-decor Pottery */}
        <div
          style={{
            backgroundImage: `url(${homeDecorPottery})`,
          }}
          className="bg-no-repeat bg-cover h-[350px] bg-blend-overlay bg-[#3d3d3d] mx-5 lg:w-full"
        >
          <div className="text-white flex flex-col justify-center items-center h-full">
            <h2 className="font-bold text-3xl mb-7">Home Decor Pottery</h2>
            <button className="btn btn-outline btn-warning px-10">
              View All
            </button>
          </div>
        </div>
        {/* Stoneware */}
        <div
          style={{
            backgroundImage: `url(${stoneware})`,
          }}
          className="bg-no-repeat bg-cover h-[350px] bg-blend-overlay bg-[#3d3d3d] mx-5 lg:w-full"
        >
          <div className="text-white flex flex-col justify-center items-center h-full">
            <h2 className="font-bold text-3xl mb-7">Stoneware</h2>
            <button className="btn btn-outline btn-warning px-10">
              View All
            </button>
          </div>
        </div>
        {/* Terra Cotta */}
        <div
          style={{
            backgroundImage: `url(${terraCotta})`,
          }}
          className="bg-no-repeat bg-cover h-[350px] bg-blend-overlay bg-[#3d3d3d] mx-5 lg:w-full"
        >
          <div className="text-white flex flex-col justify-center items-center h-full">
            <h2 className="font-bold text-3xl mb-7">Terra Cotta</h2>
            <button className="btn btn-outline btn-warning px-10">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftSubCategories;
