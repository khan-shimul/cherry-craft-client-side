import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddCraftItems = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="hero bg-base-200 font-quicksand">
      <div className="hero-content flex-col w-full ">
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="text-center pt-7 border-b md:mx-16">
            <h1 className="text-3xl font-bold pb-5">
              Please Add Your Craft Items
            </h1>
          </div>
          <form className="card-body">
            {/* Image & Item */}
            <div className="flex flex-col md:flex-row md:gap-x-5">
              {/* Img */}
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
              {/* Item */}
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
              {/* Price */}
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
                className="textarea textarea-bordered h-24"
                placeholder="Description"
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
                  type="number"
                  placeholder="rating"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* customization- example- yes, no */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">
                    Customization Example
                  </span>
                </label>
                <input
                  name="customizationExample"
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
                  type="text"
                  placeholder="processing time"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Stock Status */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Stock Status</span>
                </label>
                <input
                  name="stockStatus"
                  type="text"
                  placeholder="In stock / Made to Order"
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
              <button className="btn bg-orange">Add Craft</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItems;
