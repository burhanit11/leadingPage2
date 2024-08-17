import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import { FaAmbulance, FaHeart, FaPhoneAlt } from "react-icons/fa";
import Counter from "./Counter";
import Experts from "./Experts";
const Home = () => {
  return (
    <div>
      <Header />
      <Slider className="z-50" />

      <div className="border-2 w-[90vw] mx-auto flex justify-center  ">
        <div className="flex flex-row w-full max-w-8xl ">
          <div className="flex-1 bg-white text-black  flex items-center justify-center py-6 px-6">
            <FaPhoneAlt className="mr-3" />
            <span> Nutritional Counseling</span>
          </div>

          <div className="flex-1 bg-red-500 text-white  flex items-center justify-center py-6 px-6">
            <FaHeart className="mr-3 text-white" />
            <span> Mental Health Care</span>
          </div>

          <div className="flex-1 bg-white text-black  flex items-center justify-center py-6 px-6">
            <FaAmbulance className="mr-3 " />
            <span>Immediate Emergency Services</span>
          </div>
        </div>
      </div>

      <Counter className="z-0" />
      <Experts />
    </div>
  );
};

export default Home;
