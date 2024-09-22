import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import MyCraftItem from "./MyCraftItem";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const loadedItems = useLoaderData();
  const specifiedItems = loadedItems.filter(
    (item) => item.userEmail === user.email
  );
  const [craftItems, setCraftItems] = useState(specifiedItems);

  return (
    <div>
      <h2 className="font-playFair text-3xl text-orange text-center mt-8 pb-2 mx-auto">
        My Craft List!!
      </h2>
      <div className="border-b-2 w-1/6 md:w-1/12 mx-auto"></div>
      <div className="max-w-7xl lg:mx-auto md:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
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
