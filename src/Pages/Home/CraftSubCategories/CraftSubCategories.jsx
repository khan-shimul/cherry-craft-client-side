import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CraftSubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  // loaded sub-categories from db
  useEffect(() => {
    fetch("http://localhost:5000/craft/sub-categories")
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, []);

  return (
    <section className="font-quicksand mb-16">
      <h2 className="font-bold text-4xl text-center pb-5 dark:text-white">
        Craft Categories
      </h2>
      <div className="border-b-8 border-orange w-1/2 md:w-1/4 lg:w-1/6 flex mx-auto"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
        {/* Sub-Categories */}
        {subCategories.map((subCategory) => (
          <div
            key={subCategory._id}
            style={{
              backgroundImage: `url(${subCategory.image})`,
            }}
            className="bg-no-repeat bg-cover h-[350px] bg-blend-overlay bg-[#3d3d3d] mx-5 lg:w-full"
          >
            <div className="text-white flex flex-col justify-center items-center h-full">
              <h2 className="font-bold text-3xl mb-7">
                {subCategory.subCategoryName}
              </h2>
              <Link
                to={`/craft-item/sub-categories/${subCategory.subCategoryName}`}
              >
                <button className="btn btn-outline btn-warning px-10">
                  View All
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CraftSubCategories;
