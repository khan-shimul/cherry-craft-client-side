import { Link, useLoaderData } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";

const CraftItemDetails = () => {
  const {
    image,
    itemName,
    price,
    description,
    subCategoryName,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = useLoaderData();

  return (
    <section className="max-w-7xl mx-auto font-quicksand my-10">
      <div className="mx-7 flex items-center gap-x-7 text-sm mb-9">
        <Link to={"/"}>
          <p title="Back to front page">Home</p>
        </Link>
        <p>
          <MdNavigateNext />
        </p>
        <p>{itemName}</p>
      </div>
      <div className=" flex flex-col lg:flex-row gap-x-16 gap-y-10 lg:gap-y-0 mx-7 lg:w-full">
        <div className="w-full lg:w-1/2 mx-auto">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="lg:w-1/2">
          <h3 className="font-medium text-2xl">{itemName}</h3>
          <h4 className="font-medium text-lg text-orange pt-2">${price}.00</h4>
          <div className="border-b border-[#C8C8C8] mt-7 mb-5"></div>
          <p className="text-[#b9b9b9] leading-8">{description}</p>
          <div className="mt-8">
            <button className="btn bg-orange mr-5 lg:px-10 font-medium">
              Buy it now
            </button>
            <button className="btn btn-outline lg:px-10 font-medium">
              Add to cart
            </button>
          </div>
          <div className="mt-10">
            <p className="text-sm font-medium">
              Subcategory:{" "}
              <span className="text-[#b9b9b9] text-base">
                {subCategoryName}
              </span>
            </p>
            <p className="text-sm font-medium mt-5">
              Stock Status:{" "}
              <span className="text-[#b9b9b9] text-base">{stockStatus}</span>
            </p>
            <p className="text-sm font-medium mt-5">
              Customization:{" "}
              <span className="text-[#b9b9b9] text-base">{customization}</span>
            </p>
            <p className="text-sm font-medium mt-5">
              Processing Time:{" "}
              <span className="text-[#b9b9b9] text-base">
                {processingTime} days
              </span>
            </p>
            <p className="text-sm font-medium mt-5">
              Rating: <span className="text-[#b9b9b9] text-base">{rating}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftItemDetails;
