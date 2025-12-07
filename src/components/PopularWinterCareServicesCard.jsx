import React from "react";
import ratings from '../assets/icon-ratings.png';

const PopularWinterCareServicesCard = ({ service }) => {
  //   console.log(service);
  const { image, serviceName, rating, price } = service;
  return (
    <div className="card bg-base-200 w-96 shadow-lg px-2 rounded-2xl">
      <figure>
        <img className="w-80 h-56 rounded-xl mt-6"
          src={image}
          alt="pets"
        />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="card-title text-left text-[21px] font-bold">{serviceName}</h2>
        <div className="flex gap-30">
          <p className="text-xl font-semibold text-gray-600 flex items-center gap-1"><span><img className="w-5" src={ratings} alt="" /></span>{rating} Ratings</p>
          <p className="text-xl font-semibold text-gray-600">{price}<span className="text-sky-950">$</span> </p>
        </div>
        <button className="btn btn-primary mt-2 mx-24 bg-blue-900 text-white">View Details</button>
      </div>
    </div>
  );
};

export default PopularWinterCareServicesCard;
