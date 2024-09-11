import PropTypes from "prop-types";

const CraftItem = ({ craftItem }) => {
  const { image, itemName, stockStatus, price } = craftItem;
  return (
    <div className="card bg-base-100 shadow-md rounded-xl mx-5 md:mx-7 lg:mx-0">
      <figure>
        <img src={image} alt={`Image for ${itemName}`} />
      </figure>
      <div className="absolute top-5 right-5 bg-[#E12C43] text-white px-2">
        <h5 className="text-sm">{stockStatus}</h5>
      </div>
      <div className="card-body">
        <h2 className="font-semibold text-xl">{itemName}</h2>
        <p className="-mt-1 text-orange font-medium">${price}.00</p>
        <button className="btn btn-outline text-orange w-1/2 mt-1">
          View Details
        </button>
      </div>
    </div>
  );
};

CraftItem.propTypes = {
  craftItem: PropTypes.object,
};

export default CraftItem;
