import React from "react";
import Team1 from "../assets/images/team-1.jpg";
import Team3 from "../assets/images/team-3.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const experts = [
  {
    name: "Martin Cousis",
    role: "Developer",
    image: Team1,
  },
  {
    name: "John Doe",
    role: "Designer",
    image: Team3,
  },
];
const Experts = () => {
  return (
    <div className="container mx-auto py-12 ">
      <div className="text-center justify-center">
        <p className="text-xl">Team</p>
        <h2 className="text-3xl font-bold mb-3">Meet Our Experts</h2>
        <div className="flex justify-center">
          <div className="w-32 h-1 rounded bg-red-500 mb-8"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full object-cover"
            />

            <div className="flex justify-center space-x-4 ">
              <a href="#" className="text-gray-800 hover:text-gray-900 text-lg">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-900 text-lg">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-900 text-lg">
                <FaLinkedin />
              </a>
            </div>
            <div className="p-6 text-center">
              <h3> {expert.name} </h3>
              <p> {expert.role} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
