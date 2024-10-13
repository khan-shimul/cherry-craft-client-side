import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login/login-illustration.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  // console.log("inside login page", location);
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("Successfully login to your account");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Successfully login to your account");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // Handle Github Login
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Successfully login to your account");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="flex gap-7 flex-col lg:flex-row items-center font-quicksand">
        <Toaster position="bottom-right" reverseOrder={false} />
        <div className="lg:mr-5">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h3 className="font-medium text-[#3b3b3b]">Welcome Back</h3>
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
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange">Login</button>
            </div>
          </form>
          <div className="text-center -mt-3 mb-4 flex items-center mx-auto gap-x-3">
            <button onClick={handleGoogleLogin} className="btn">
              <FaGoogle />
            </button>
            <button onClick={handleGithubLogin} className="btn text-lg">
              <FaGithub />
            </button>
            <button className="btn text-lg">
              <FaFacebook />
            </button>
          </div>
          <div className="text-center pb-7 font-medium">
            <h3>
              <span className="text-[#fc3c3c]">Don not have an account?</span>{" "}
              <Link className="text-orange" to={"/register"}>
                Register
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
