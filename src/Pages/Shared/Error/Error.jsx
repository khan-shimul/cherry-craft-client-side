import { Link } from "react-router-dom";
import error from "../../../assets/banner-img/error.png";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <section className="p-10 md:p-20 flex flex-col md:flex-row justify-center items-center gap-x-5 mx-auto w-full bg-base-200 font-quicksand">
      <Helmet>
        <title>Cheer Craft | Error</title>
      </Helmet>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-5xl font-bold text-[#ff4953]">
          Oops | 404 | Error
        </h2>
        <p className="my-5 text-lg text-[#5c5c5c]">
          There is an error. Something went wrong or the page you are looking
          for are currently not available. Please stay with us
        </p>
        <Link to={"/"}>
          <button className="btn btn-error px-10">Home</button>
        </Link>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <img className="w-full" src={error} alt="" />
      </div>
    </section>
  );
};

export default Error;
