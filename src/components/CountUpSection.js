"use client";
import CountUp from "react-countup";
import { FaUserFriends, FaFilm, FaTv, FaStar } from "react-icons/fa";

export default function CountUpSection() {
  return (
    <div className="text-red-500 py-10 pt-20 px-5 text-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Platform <span className="text-white">Statistics</span>
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Users */}
        <div className="flex flex-col items-center space-y-2 bg-[#131313] py-10 rounded-3xl">
          <FaUserFriends className="text-5xl" />
          <h2 className="text-4xl font-bold">
            <CountUp end={1000} duration={2} />+
          </h2>
          <p>Users</p>
        </div>

        {/* Movies */}
        <div className="flex flex-col items-center space-y-2 bg-[#131313] py-10 rounded-3xl">
          <FaFilm className="text-5xl" />
          <h2 className="text-4xl font-bold">
            <CountUp end={50} duration={2} />+
          </h2>
          <p>Movies</p>
        </div>

        {/* Series */}
        <div className="flex flex-col items-center space-y-2 bg-[#131313] py-10 rounded-3xl">
          <FaTv className="text-5xl" />
          <h2 className="text-4xl font-bold">
            <CountUp end={200} duration={2} />+
          </h2>
          <p>Series</p>
        </div>

        {/* Awards */}
        <div className="flex flex-col items-center space-y-2 bg-[#131313] py-10 rounded-3xl">
          <FaStar className="text-5xl" />
          <h2 className="text-4xl font-bold">
            <CountUp end={20} duration={2} />+
          </h2>
          <p>Awards</p>
        </div>
      </div>
    </div>
  );
}
