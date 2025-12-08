import React from "react";

const winterCareTips = [
  {
    id: 1,
    title: "Stay Hydrated",
    description:
      "Pets may drink less water in winter. Ensure fresh water is always available to prevent dehydration.",
  },
  {
    id: 2,
    title: "Protect Their Paws",
    description:
      "Cold surfaces and snow can damage paws. Use paw balm or pet shoes to keep their paws safe and moisturized.",
  },
  {
    id: 3,
    title: "Avoid Over-bathing",
    description:
      "Frequent baths can dry your pet's skin. Use moisturizing shampoo and reduce bath frequency in winter.",
  },
];

const WinterCareTips = () => {
  return (
    <div className="p-5">
      <h2 className="text-4xl text-[#001436] font-bold text-center">
        Winter Care Tips for Pets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {winterCareTips.map((tips) => (
          <div
            key={tips.id}
            className="bg-white shadow-lg rounded-xl p-4"
            data-aos="fade-up"
            data-aos-delay={`${tips.id * 100}`}
          >
            <h3 className="text-xl font-semibold mb-2">{tips.title}</h3>
            <p className="text-gray-600 ">{tips.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
