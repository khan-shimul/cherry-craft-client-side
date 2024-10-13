import toast, { Toaster } from "react-hot-toast";
import loginImg from "../../assets/login/login-illustration.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { user, setUser, createUser, setUserPhotoName } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // Handle register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    // Password Validation
    if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
      return toast.error(
        "Your password should be one uppercase one lowercase and at least 6 character"
      );
    }
    // create the user
    createUser(email, password)
      .then(() => {
        toast.success("Successfully create your account");
        // Set User Photo and Name
        setUserPhotoName(name, photo)
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            form.reset();
          })
          .catch((err) => console.log(err.message));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex gap-7 flex-col lg:flex-row items-center font-quicksand">
        <Toaster position="bottom-right" reverseOrder={false} />
        <div className="lg:mr-5">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-lg">
          <form onSubmit={handleRegister} className="card-body">
            <h3 className="font-medium text-[#3b3b3b]">
              Welcome to{" "}
              <span className="font-bold text-orange">Cheer Craft!!</span>
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange">Register</button>
            </div>
          </form>

          <div className="text-center pb-7 font-medium">
            <h3>
              <span className="text-[#fc3c3c]">Already have an account?</span>{" "}
              <Link className="text-orange" to={"/login"}>
                Login
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
