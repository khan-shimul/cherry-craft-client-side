import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const CraftItemUpdate = () => {
  const {
    _id,
    image,
    itemName,
    subCategoryName,
    price,
    description,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = useLoaderData();

  //   Handle Update
  const handleUpdateItem = (e) => {
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
    const updatedCraftItem = {
      image,
      itemName,
      subCategoryName,
      price,
      description,
      rating,
      customization,
      processingTime,
      stockStatus,
    };
    fetch(`http://localhost:5000/craft-item/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Successfully updated your item");
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div className="hero bg-base-200 font-quicksand">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="hero-content flex-col w-full ">
        <div className="card bg-base-100 w-full shadow-sm">
          <div className="text-center pt-7 md:mx-16">
            <h1 className="text-3xl font-bold pb-3">Update Your Craft Item</h1>
          </div>
          <div className="border-b w-1/2 md:w-1/5 flex mx-auto"></div>
          <form onSubmit={handleUpdateItem} className="card-body">
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
                  defaultValue={image}
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
                  defaultValue={itemName}
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
                  defaultValue={subCategoryName}
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
                  defaultValue={price}
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
                defaultValue={description}
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
                  defaultValue={rating}
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
                  defaultValue={customization}
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
                  defaultValue={processingTime}
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
                  defaultValue={stockStatus}
                  type="text"
                  placeholder="in stock / made to order"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange font-medium text-base">
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CraftItemUpdate;
