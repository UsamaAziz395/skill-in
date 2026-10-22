
import React from "react";
import { FiGrid, FiMonitor, FiUsers } from "react-icons/fi";

import FeaturesData from "../../data/Featuresdata";

const icons = {
  grid: FiGrid,
  monitor: FiMonitor,
  users: FiUsers,
};

function Features() {
  const data = FeaturesData;

  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-16 md:py-24">

      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#252641]">
          Our <span className="text-orange-500">Features</span>
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-5">
          {data.description}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT SIDE - CLASSROOM CARD */}
        <div className="relative min-h-[470px] flex items-center justify-center">

          {/* Green Circle */}
          <div className="absolute top-2 left-8 w-16 h-16 bg-emerald-400 rounded-full" />

          {/* Blue Dot */}
          <div className="absolute top-5 right-10 w-3 h-3 bg-cyan-400 rounded-full" />

          {/* Main Classroom Card - No Background Image, No Blur */}
          <div className="relative z-10 w-full max-w-[480px] h-[280px] rounded-2xl bg-slate-100 shadow-xl overflow-hidden">

            {/* Browser Header */}
            <div className="absolute top-0 left-0 right-0 h-9 bg-gray-200 flex items-center gap-1.5 px-4 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>

            {/* Student Image 1 - Large */}
            <div className="absolute top-16 left-[6%] w-[40%] h-[150px] rounded-xl overflow-hidden shadow-lg bg-white">
              {data.students[0]?.image ? (
                <img
                  src={data.students[0].image}
                  alt={data.students[0].name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <FiUsers size={35} />
                </div>
              )}
            </div>

            {/* Student Image 2 */}
            <div className="absolute top-16 left-[52%] w-[24%] h-[65px] rounded-lg overflow-hidden shadow-md bg-white">
              {data.students[1]?.image ? (
                <img
                  src={data.students[1].image}
                  alt={data.students[1].name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <FiUsers size={24} />
                </div>
              )}
            </div>

            {/* Student Image 3 */}
            <div className="absolute top-[145px] left-[52%] w-[24%] h-[65px] rounded-lg overflow-hidden shadow-md bg-white">
              {data.students[2]?.image ? (
                <img
                  src={data.students[2].image}
                  alt={data.students[2].name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <FiUsers size={24} />
                </div>
              )}
            </div>

            {/* Present and Call Buttons */}
            <div className="absolute bottom-5 left-[6%] flex gap-3 z-10">
              <button className="bg-blue-500 text-white text-xs font-semibold px-5 py-2 rounded-full shadow-md">
                Present
              </button>

              <button className="bg-pink-500 text-white text-xs font-semibold px-5 py-2 rounded-full shadow-md">
                Call
              </button>
            </div>

          </div>

          {/* Student Image 4 - Right Upper Card */}
          <div className="absolute top-12 right-0 md:right-[-5px] z-20 w-[95px] h-[105px] md:w-[110px] md:h-[120px] bg-white p-1.5 rounded-xl shadow-xl overflow-hidden">

            {data.students[3]?.image ? (
              <img
                src={data.students[3].image}
                alt={data.students[3].name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <FiUsers size={30} />
              </div>
            )}

          </div>

          {/* Student Image 5 - Bigger Card Below */}
          <div className="absolute top-[235px] right-5 md:right-[-8px] z-30 w-[135px] h-[145px] md:w-[155px] md:h-[165px] bg-white p-2 rounded-2xl shadow-xl overflow-hidden">

            {data.students[4]?.image ? (
              <img
                src={data.students[4].image}
                alt={data.students[4].name}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <FiUsers size={35} />
              </div>
            )}

          </div>

          {/* Decorative Shapes */}
          <div className="absolute bottom-3 left-10 w-3 h-3 bg-red-400 rounded-full" />

          <div className="absolute bottom-2 right-12 w-20 h-20 bg-indigo-600 rounded-full -z-10" />

        </div>

        {/* RIGHT SIDE - FEATURES */}
        <div className="md:pl-2">

          <h3 className="text-2xl md:text-3xl font-bold text-[#252641] leading-snug mb-8">
            A{" "}
            <span className="text-orange-500">user interface</span>{" "}
            designed
            <br />
            for the classroom
          </h3>

          {/* Features List */}
          <div className="space-y-7">

            {data.features.map((feature) => {
              const Icon = icons[feature.icon];

              return (
                <div
                  key={feature.id}
                  className="flex items-start gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#252641]">
                    {Icon && <Icon size={23} />}
                  </div>

                  <p className="text-gray-500 text-sm md:text-base leading-7 pt-1">
                    {feature.text}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
