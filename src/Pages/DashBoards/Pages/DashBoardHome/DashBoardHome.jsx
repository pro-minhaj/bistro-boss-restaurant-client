import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import walletImg from "../../../../assets/dashboard/Home/wallet.svg";
import telephoneImg from "../../../../assets/dashboard/Home/telephone.svg";
import storeImg from "../../../../assets/dashboard/Home/store.svg";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { IoCart } from "react-icons/io5";
import { FaRegCalendarAlt, FaStar, FaWallet } from "react-icons/fa";

const DashBoardHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Dashboard | Home</title>
      </Helmet>

      <h1 className="text-neutral-900 text-[20px] sm:text-[32px] font-semibold font-['Cinzel']">
        HI, welcome back!
      </h1>

      {/* Items Section */}
      <section className="grid w-full gap-6 py-6 md:grid-cols-3">
        <div className="flex items-center justify-center w-full gap-6 py-8 rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-100">
          <img src={walletImg} alt="" />
          <div className="flex flex-col">
            <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
              205
            </h2>
            <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
              Menu
            </h6>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-6 py-8 rounded-lg bg-gradient-to-r from-orange-400 to-amber-100">
          <img src={telephoneImg} alt="" />
          <div className="flex flex-col">
            <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
              103
            </h2>
            <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
              Shop
            </h6>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-6 py-8 rounded-lg bg-gradient-to-r from-pink-500 to-pink-200">
          <img src={storeImg} alt="" />
          <div className="flex flex-col">
            <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
              03
            </h2>
            <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
              Contact
            </h6>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="grid lg:grid-cols-2 md:pt-4">
        <div className="flex flex-col items-center justify-center w-full py-10 bg-orange-100 border-orange-400 lg:border-r-2 lg:py-20 gap-y-3 sm:gap-y-6">
          <div>
            {user?.photoURL ? (
              <img
                className="w-[100px] sm:w-[130px] md::w-[198px] rounded-full border-2 border-orange-400"
                src={user?.photoURL}
                alt="Profile Img"
              />
            ) : (
              <div className="avatar online placeholder">
                <div className="w-16 rounded-full sm:w-24 bg-neutral text-neutral-content">
                  <span className="text-xl">
                    {user?.displayName?.slice(0, 2)}
                  </span>
                </div>
              </div>
            )}
          </div>
          <h2 className="text-neutral-900 text-[25px] sm:text-[32px] font-semibold font-['Cinzel']">
            {user?.displayName}
          </h2>
        </div>
        <div className="bg-yellow-100 py-10 lg:pt-0 flex flex-col lg:justify-center ps-[25px] sm:ps-[100px] lg:ps-[50px] xl:ps-[100px]">
          <h1 className="text-neutral-900 text-[25px] sm:text-[40px] font-semibold font-['Cinzel']">
            Your Activities
          </h1>
          <div className="pt-5">
            <ul className="flex flex-col gap-2">
              <li className="text-sky-500 text-2xl font-semibold font-['Cinzel'] flex items-center gap-2">
                <IoCart />
                Orders: 6
              </li>
              <li className="text-teal-500 text-2xl font-semibold font-['Cinzel'] flex items-center gap-2">
                <FaStar />
                Reviews: 2
              </li>
              <li className="text-amber-400 text-2xl font-semibold font-['Cinzel'] flex items-center gap-2">
                <FaRegCalendarAlt />
                Bookings: 1
              </li>
              <li className="text-orange-400 text-2xl font-semibold font-['Cinzel'] flex items-center gap-2">
                <FaWallet />
                Payment: 3
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoardHome;
