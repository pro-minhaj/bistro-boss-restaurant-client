import bgImg from "../../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authentication2 from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createAccount, updateName } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    setLoading(true);
    createAccount(data.email, data.password)
      .then(() => {
        updateName(data.name);
        fetch("https://bistro-boss-server-five-black.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name: data.name, email: data.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              setLoading(false);
              navigate(from, { replace: true });
              toast.success("Register SuccessFull");
            }
          });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message.substr(10));
      });
  };

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>

      <div
        style={{ backgroundImage: `url('${bgImg}')` }}
        className="flex items-center justify-center px-5 overflow-x-hidden bg-no-repeat bg-cover lg:h-screen lg:w-screen"
      >
        <div className="grid lg:grid-cols-2 shadow-[11px_19px_31px_-8px_rgba(0,0,0,0.75)] my-5 px-5 lg:px-20 py-10 border rounded-md border-gray-300 items-center gap-10">
          <div>
            <h3 className="text-center text-neutral-900 text-2xl mb-5 lg:text-[40px] font-bold font-['Inter']">
              Sign Up
            </h3>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="grid gap-4"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                />
                {errors.name && (
                  <span className="text-red-600">Name is Required</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                />
                {errors.email && (
                  <span className="text-red-600">email is Required</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                    })}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                    className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                  />
                  {/* Show Password */}
                  <span
                    className="absolute toggle-password right-3 bottom-3"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaRegEyeSlash className="text-2xl text-black" />
                    ) : (
                      <FaRegEye className="text-2xl text-black" />
                    )}
                  </span>
                </div>

                {/* Show Error */}
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is Required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 8 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less den 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-center text-red-600">
                    Password must have one uppercase one lower case, <br /> one
                    number and one special characters
                  </span>
                )}
              </div>
              <div className="my-3">
                <button
                  type="submit"
                  className="w-full h-[50px] cursor-pointer duration-300 text-white text-xl font-bold font-['Inter'] bg-[#D1A054] hover:bg-[#ffb84e] focus:bg-[#ffb84e] hover:text-black bg-opacity-70 rounded-lg flex items-center justify-center"
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    "Sing Up"
                  )}
                </button>
              </div>
            </form>
            <div className="text-[#D1A054] text-center my-4 text-lg font-medium font-['Inter']">
              <span>Already registered? </span>
              <Link to="/login" className="font-bold hover:text-[#ffb84e]">
                Go to log in
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={authentication2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
