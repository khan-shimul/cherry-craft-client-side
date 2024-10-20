import { useLoaderData } from "react-router-dom";
import CraftItem from "../Home/CraftItem";
import { Helmet } from "react-helmet-async";

const AllCraftItems = () => {
  const loadedCrafts = useLoaderData();
  return (
    <section>
      <Helmet>
        <title>Cheer Craft | All Craft</title>
      </Helmet>
      <h2 className="text-center font-playFair mt-8 text-orange text-3xl mx-10 pb-2">
        Our Craft Items
      </h2>
      <div className="border-b-2 w-1/6 md:w-1/12 mx-auto"></div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10"
      >
        {loadedCrafts.map((craftItem) => (
          <CraftItem key={craftItem._id} craftItem={craftItem} />
        ))}
      </div>
    </section>
  );
};

export default AllCraftItems;
