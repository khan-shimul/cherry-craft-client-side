import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DiscountBanner from "./DiscountBanner/DiscountBanner";
import CraftItem from "./CraftItem";
import CeramicsFeeling from "./CeramicsFeeling";

const Home = () => {
  const loadedData = useLoaderData();
  return (
    <div>
      <Banner />
      <DiscountBanner />
      {/* Craft items section */}
      <section className="font-quicksand my-5">
        <div>
          <h2 className="font-bold text-4xl text-center pb-5">
            Best Craft Items
          </h2>
          <div className="border-b-8 border-orange w-1/2 md:w-1/4 lg:w-1/6 flex mx-auto"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
            {loadedData.slice(0, 8).map((craftItem) => (
              <CraftItem key={craftItem._id} craftItem={craftItem} />
            ))}
          </div>
        </div>
      </section>
      {/* Ceramics with Feeling Section */}
      <CeramicsFeeling />
      <h2 className="font-playFair text-orange my-5 text-center">
        Art & Craft Categories Section
      </h2>
    </div>
  );
};

export default Home;
