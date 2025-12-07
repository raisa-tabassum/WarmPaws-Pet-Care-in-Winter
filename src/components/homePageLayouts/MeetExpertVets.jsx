// ExpertVets.jsx
import React from "react";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Khan",
    specialization: "Veterinary Surgeon",
    image: "https://img.icons8.com/color/48/user-female-circle--v1.png",
    email: "sarah.khan@warmpaws.com",
  },
  {
    id: 2,
    name: "Dr. Imran Hossain",
    specialization: "Pet Nutritionist",
    image: "https://img.icons8.com/color/48/user-male-circle--v3.png",
    email: "imran.hossain@warmpaws.com",
  },
  {
    id: 3,
    name: "Dr. Fatima Rahman",
    specialization: "Pet Behaviorist",
    image: "https://img.icons8.com/color/48/user-female-circle--v3.png",
    email: "fatima.rahman@warmpaws.com",
  },
  {
    id: 4,
    name: "Dr. Tanvir Ahmed",
    specialization: "Animal Physiotherapist",
    email: "tanvir.ahmed@warmpaws.com",
    image: "https://img.icons8.com/color/48/user-male-circle--v1.png",
  },
];

const MeetExpertVets = () => {
  return (
    <div className="p-5 my-6">
      <h2 className="text-4xl text-[#001436] font-bold mb-5 text-center">
        Meet Our Expert Vets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {experts.map((vet) => (
          <div
            key={vet.id}
            className="card bg-base-100 shadow-lg rounded-xl py-2 my-6"
          >
            <figure>
              <img
                src={vet.image}
                alt={vet.name}
                className="rounded-full w-28 h-28 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold">{vet.name}</h3>
              <p className="text-[#001436] font-semibold">
                {vet.specialization}
              </p>
              <p className="text-gray-400">{vet.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetExpertVets;
