import { useLoaderData, useParams } from "react-router-dom";
import categoryNameBG from "../../../assets/banner-img/categoryName.webp";
import CraftItem from "../CraftItem";

const SubCategoryItems = () => {
  const { name } = useParams();
  const loadedSubCategoriesData = useLoaderData();
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${categoryNameBG})`,
        }}
        className="h-[200px] bg-no-repeat bg-cover bg-blend-overlay bg-[#302a2a] flex justify-center items-center"
      >
        <h2 className="uppercase text-white font-bold font-quicksand text-3xl">
          {name}
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
        {loadedSubCategoriesData.map((subCategory) => (
          <CraftItem key={subCategory._id} craftItem={subCategory} />
        ))}
      </div>
    </section>
  );
};

export default SubCategoryItems;
