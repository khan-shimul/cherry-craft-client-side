import PropTypes from "prop-types";

const MyCraftItem = ({ craftItem }) => {
  console.log(craftItem);
  const { image, itemName, stockStatus, price, customization, rating } =
    craftItem;
  return (
    <div className="card bg-base-100 shadow-md rounded-xl mx-5 md:mx-0">
      <figure>
        <img
          className="lg:w-full lg:h-[350px]"
          src={image}
          alt={`Image for ${itemName}`}
        />
      </figure>
      <div className="absolute top-5 right-5 bg-[#E12C43] text-white px-2">
        <h5 className="text-sm">{stockStatus}</h5>
      </div>
      <div className="card-body">
        <div>
          <h2 className="font-semibold text-lg">{itemName}</h2>
          <p className="text-orange font-medium">${price}.00</p>
          <p className="text-sm">Customization: {customization}</p>
          <p className="text-sm">Rating: {rating} </p>
        </div>
        <div className="mt-2">
          <button className="btn mr-5">Update</button>
          <button className="btn bg-orange">Delete</button>
        </div>
      </div>
    </div>
  );
};

MyCraftItem.propTypes = {
  craftItem: PropTypes.object,
};

export default MyCraftItem;
