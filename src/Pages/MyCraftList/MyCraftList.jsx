import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import MyCraftItem from "./MyCraftItem";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const loadedItems = useLoaderData();
  // Filter only who logged in
  const specifiedItems = loadedItems.filter(
    (item) => item.userEmail === user.email
  );
  const [craftItems, setCraftItems] = useState(specifiedItems);
  const [filter, setFilter] = useState("all");

  // Handle Filter Dropdown
  const handleFilterChance = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    // Filter Data based on "customization"
    if (selectedFilter === "yes") {
      const selectedItem = specifiedItems.filter(
        (item) => item.customization === "yes"
      );
      setCraftItems(selectedItem);
    } else if (selectedFilter === "no") {
      const selectedItem = specifiedItems.filter(
        (item) => item.customization === "no"
      );
      setCraftItems(selectedItem);
    } else {
      setCraftItems(specifiedItems);
    }
  };

  return (
    <div>
      <h2 className="font-playFair text-3xl text-orange text-center mt-8 pb-2 mx-auto">
        My Craft List!!
      </h2>
      <div className="border-b-2 w-1/6 md:w-1/12 mx-auto"></div>
      {/* Customization */}
      <div className="max-w-7xl font-quicksand flex flex-col md:flex-row items-center mx-5 md:mx-8 lg:mx-auto mt-5">
        <h2 className="text-lg font-medium mr-2">
          Filter Craft Items Based On Customization:
        </h2>
        <select
          onChange={handleFilterChance}
          value={filter}
          className="select select-bordered w-full max-w-xs"
        >
          {/* <option disabled>Customization</option> */}
          <option value={"all"}>All</option>
          <option value={"yes"}>Yes</option>
          <option value={"no"}>No</option>
        </select>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="max-w-7xl lg:mx-auto md:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8"
      >
        {craftItems.map((item) => (
          <MyCraftItem
            key={item._id}
            craftItem={item}
            craftItems={craftItems}
            setCraftItems={setCraftItems}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
