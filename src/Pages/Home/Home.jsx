import Banner from "./Banner";
import DiscountBanner from "./DiscountBanner/DiscountBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <DiscountBanner />
      <h2 className="font-playFair text-orange">This is home!!</h2>
    </div>
  );
};

export default Home;
