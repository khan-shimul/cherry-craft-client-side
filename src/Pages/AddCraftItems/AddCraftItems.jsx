import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const AddCraftItems = () => {
  const { user } = useContext(AuthContext);
  const [subCategory, setSubCategory] = useState("");
  const [craftCustomization, setCraftCustomization] = useState("");
  const [stockOrder, setStockOrder] = useState("");
  // Dropdown values
  const handleSubCategory = (e) => {
    setSubCategory(e.target.value);
  };
  const handleCustomization = (e) => {
    setCraftCustomization(e.target.value);
  };
  const handleStockOrder = (e) => {
    setStockOrder(e.target.value);
  };

  // handle add craft items
  const handleAddCraftItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subCategoryName = subCategory;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const customization = craftCustomization;
    const processingTime = form.processingTime.value;
    const stockStatus = stockOrder;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    console.log(subCategory, customization, stockStatus);
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
    <div className="hero bg-base-200 dark:bg-[#211f3d] font-quicksand py-10">
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <div className="hero-content flex-col w-full ">
        <div className="card bg-base-100 dark:bg-[#151427] w-full shadow-sm">
          <div className="text-center pt-7 md:mx-16">
            <h1 className="text-3xl font-bold pb-3 dark:text-white">
              Add Your Craft Items
            </h1>
          </div>
          <div className="border-b w-1/2 md:w-1/5 flex mx-auto"></div>
          <form
            onSubmit={handleAddCraftItem}
            className="card-body dark:text-white"
          >
            {/* Image & Item */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium dark:text-white">
                    Image
                  </span>
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="image url"
                  className="input input-bordered dark:bg-[#211f3d]"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium dark:text-white">
                    Item
                  </span>
                </label>
                <input
                  name="itemName"
                  type="text"
                  placeholder="Item Name"
                  className="input input-bordered dark:bg-[#211f3d]"
                  required
                />
              </div>
            </div>
            {/* Subcategory & Price */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium text-white">
                    Subcategory
                  </span>
                </label>
                <div className="dropdown text-[#707070]">
                  <select
                    onChange={handleSubCategory}
                    value={subCategory}
                    className="select select-bordered w-full dark:bg-[#211f3d]"
                  >
                    <option value={"ceramic"}>Ceramic</option>
                    <option value={"pottery"}>Pottery</option>
                    <option value={"Clay-made pottery"}>
                      Clay-Made Pottery
                    </option>
                    <option value={"Home decor pottery"}>
                      Home Decor Pottery
                    </option>
                    <option value={"Terra Cotta"}>Terra Cotta</option>
                    <option value={"Stoneware"}>Stoneware</option>
                  </select>
                </div>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium dark:text-white">
                    Price
                  </span>
                </label>
                <input
                  name="price"
                  type="number"
                  placeholder="price"
                  className="input input-bordered dark:bg-[#211f3d]"
                  required
                />
              </div>
            </div>
            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium dark:text-white">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24 dark:bg-[#211f3d]"
                placeholder="description"
              ></textarea>
            </div>
            {/* Rating & Customization Example */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium dark:text-white">
                    Rating
                  </span>
                </label>
                <input
                  name="rating"
                  type="text"
                  placeholder="rating"
                  className="input input-bordered dark:bg-[#211f3d]"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium dark:text-white">
                    Customization
                  </span>
                </label>
                <div className="dropdown text-[#707070]">
                  <select
                    onChange={handleCustomization}
                    className="select select-bordered w-full dark:bg-[#211f3d]"
                  >
                    <option value={"yes"}>Yes</option>
                    <option value={"no"}>No</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Processing Time & Stock Status */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium dark:text-white">
                    Processing Time
                  </span>
                </label>
                <input
                  name="processingTime"
                  type="number"
                  placeholder="processing days"
                  className="input input-bordered dark:bg-[#211f3d]"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium dark:text-white">
                    Stock Status
                  </span>
                </label>
                <div className="dropdown text-[#707070]">
                  <select
                    onChange={handleStockOrder}
                    className="select select-bordered w-full dark:bg-[#211f3d]"
                  >
                    <option value="in stock">In Stock</option>
                    <option value="made to order">Made To Order</option>
                  </select>
                </div>
              </div>
            </div>
            {/* User Name & Email */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium dark:text-white">
                    Your Name
                  </span>
                </label>
                <input
                  name="userName"
                  type="text"
                  defaultValue={user.displayName}
                  className="input input-bordered dark:bg-[#211f3d]"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium dark:text-white">
                    Your Email
                  </span>
                </label>
                <input
                  name="userEmail"
                  type="email"
                  defaultValue={user.email}
                  className="input input-bordered dark:bg-[#211f3d]"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange font-medium text-base border-0">
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
