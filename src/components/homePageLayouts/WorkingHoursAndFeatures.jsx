import React from "react";
import { FaDog, FaPills, FaBath, FaCalendarCheck } from "react-icons/fa";

const WorkingHoursAndFeatures = () => {
  const workingHours = [
    { day: "Monday", time: "08AM - 10PM" },
    { day: "Tuesday", time: "08AM - 10PM" },
    { day: "Wednesday", time: "08AM - 10PM" },
    { day: "Thursday", time: "08AM - 10PM" },
    { day: "Friday", time: "08AM - 10PM" },
    { day: "Saturday", time: "08AM - 10PM" },
    { day: "Sunday", time: "Holiday", isHoliday: true },
  ];
  const features = [
    {
      title: "Pet Care",
      desc: "Get a solid solution",
      icon: <FaDog className="text-pink-500 w-6 h-6" />,
    },
    {
      title: "Pet Medicine",
      desc: "Get a solid solution",
      icon: <FaPills className="text-pink-500 w-6 h-6" />,
    },
    {
      title: "Grooming",
      desc: "Get a solid solution",
      icon: <FaBath className="text-pink-500 w-6 h-6" />,
    },
    {
      title: "Monthly Care",
      desc: "Get a solid solution",
      icon: <FaCalendarCheck className="text-pink-500 w-6 h-6" />,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-white rounded-xl shadow-xl mx-6">
      {/* Working Hours */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-md w-full md:w-1/2">
        <h3 className="text-lg font-semibold mb-2 text-[#131952]">
          Working Hours
        </h3>
        <p className="text-gray-500 mb-6">
          WarmPaws start their activity from morning 08am to till night 10pm.
        </p>
        <ul className="space-y-2">
          {workingHours.map((wh) => (
            <li key={wh.day} className="flex justify-between">
              <span>{wh.day}</span>
              <span
                className={
                  wh.isHoliday
                    ? "text-pink-500 font-semibold"
                    : "text-green-500 font-semibold"
                }
              >
                {wh.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Core Level Features */}
      <div className="w-full md:w-1/2">
        <h6 className="text-pink-500 uppercase tracking-widest mb-2">
          {" "}
          Features{" "}
        </h6>
        <h2 className="text-2xl font-bold my-4 not-visited:text-sky-950">
          Core Level Features
        </h2>
        <p className="text-gray-500 mb-6">
          At WarmPaws, we go to great extents to guarantee that your dog is in
          the best possible hands. We devote individual attention and sensitive
          loving care to all of our Campers as if they are really our own. If
          you need anything any time, warmPaws there for you.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-3">
              {feature.icon}
              <div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursAndFeatures;
