import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const AddCraftItems = () => {
  const { user } = useContext(AuthContext);
  // handle add craft items
  const handleAddCraftItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subCategoryName = form.subCategoryName.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const craftItem = {
      image,
      itemName,
      subCategoryName,
      price,
      description,
      rating,
      customization,
      processingTime,
      stockStatus,
      userName,
      userEmail,
    };
    // craft-item post to db
    fetch("http://localhost:5000/craft-items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully added your item");
          form.reset();
        } else {
          toast.error("Something went wrong. Please try again");
        }
      });
  };
  return (
    <div className="hero bg-base-200 font-quicksand">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="hero-content flex-col w-full ">
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="text-center pt-7 md:mx-16">
            <h1 className="text-3xl font-bold pb-3">Add Your Craft Items</h1>
          </div>
          <div className="border-b w-1/2 md:w-1/5 flex mx-auto"></div>
          <form onSubmit={handleAddCraftItem} className="card-body">
            {/* Image & Item */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Image</span>
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Item</span>
                </label>
                <input
                  name="itemName"
                  type="text"
                  placeholder="Item Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* Subcategory & Price */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Subcategory</span>
                </label>
                <input
                  name="subCategoryName"
                  type="text"
                  placeholder="subcategory name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Price</span>
                </label>
                <input
                  name="price"
                  type="number"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="description"
              ></textarea>
            </div>
            {/* Rating & Customization Example */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Rating</span>
                </label>
                <input
                  name="rating"
                  type="text"
                  placeholder="rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Customization</span>
                </label>
                <input
                  name="customization"
                  type="text"
                  placeholder="yes / no"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* Processing Time & Stock Status */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">
                    Processing Time
                  </span>
                </label>
                <input
                  name="processingTime"
                  type="number"
                  placeholder="processing days"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Stock Status</span>
                </label>
                <input
                  name="stockStatus"
                  type="text"
                  placeholder="in stock / made to order"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* User Name & Email */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Your Name</span>
                </label>
                <input
                  name="userName"
                  type="text"
                  defaultValue={user.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Your Email</span>
                </label>
                <input
                  name="userEmail"
                  type="email"
                  defaultValue={user.email}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange font-medium text-base">
                Add Craft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItems;
