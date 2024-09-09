import Banner from "./Banner";
import DiscountBanner from "./DiscountBanner/DiscountBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <DiscountBanner />
      <h2 className="font-playFair text-orange my-5 text-center">
        Craft items section
      </h2>
      <h2 className="font-playFair text-orange my-5 text-center">
        Art & Craft Categories Section
      </h2>
    </div>
  );
};

export default Home;
