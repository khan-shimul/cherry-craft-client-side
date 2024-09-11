import banner1 from "../../../assets/banner-img/banner7.1.jpg";
import banner2 from "../../../assets/banner-img/banner7.2.jpg";
import banner3 from "../../../assets/banner-img/banner7.3.jpg";

const DiscountBanner = () => {
  return (
    <div className="max-w-7xl flex md:mx-7 font-quicksand mx-5 my-10 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
        {/* Banner-1 */}
        <div
          style={{
            backgroundImage: `url(${banner1})`,
          }}
          className="row-span-2 bg-cover bg-no-repeat bg-center h-[700px] text-white flex justify-center items-center p-5"
        >
          <div className="flex flex-col items-center justify-center border w-full h-full">
            <h2 className="font-medium text-4xl text-center">
              Nib Vas Large <br />{" "}
              <span className="pt-4 inline-block">50% Off</span>
            </h2>
            <button className="btn bg-orange border-none text-white uppercase w-2/6 mt-8">
              Shop Now
            </button>
          </div>
        </div>
        {/* Banner-2 */}
        <div
          style={{
            backgroundImage: `url(${banner2})`,
          }}
          className="bg-cover bg-center bg-no-repeat p-5"
        >
          <div className="text-white text-4xl border h-full flex flex-col justify-center p-8">
            <h2 className="font-medium pb-4">Nib Vas Medium</h2>
            <h2>10% Off</h2>
          </div>
        </div>
        {/* Banner-3 */}
        <div
          style={{
            backgroundImage: `url(${banner3})`,
          }}
          className="bg-cover bg-center bg-no-repeat p-5"
        >
          <div className="text-white text-4xl border h-full flex flex-col justify-center p-8 text-end">
            <h2 className="font-medium pb-4">Nib Vas White</h2>
            <h2>25% Off</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
