import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftItem = ({ craftItem, setCraftItems, craftItems }) => {
  const { _id, image, itemName, stockStatus, price, customization, rating } =
    craftItem;
  const handleDeleteItem = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craft-item/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              // Update on ui
              const remaining = craftItems.filter(
                (craftItem) => craftItem._id !== _id
              );
              setCraftItems(remaining);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-md rounded-xl mx-5 md:mx-0">
      <figure>
        <img src={image} alt={`Image for ${itemName}`} />
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
          <Link to={`/craft-item-update/${_id}`}>
            <button className="btn mr-5">Update</button>
          </Link>
          <button
            onClick={() => handleDeleteItem(_id)}
            className="btn bg-orange"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

MyCraftItem.propTypes = {
  craftItem: PropTypes.object,
  craftItems: PropTypes.array,
  setCraftItems: PropTypes.func,
};

export default MyCraftItem;
