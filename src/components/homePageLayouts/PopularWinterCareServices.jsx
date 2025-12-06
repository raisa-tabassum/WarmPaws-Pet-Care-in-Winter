import React from "react";
import PopularWinterCareServicesCard from "../PopularWinterCareServicesCard";
import useServices from "../../Hooks/useServices";

const PopularWinterCareServices = () => {
    const {services} = useServices("services")

  return (
    <div className="p-5 text-4xl text-center text-[#001436] font-bold mt-6">
          <h1>Popular Winter Care Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {services.map(service=>(
                <PopularWinterCareServicesCard key={service.serviceId} service={service} />
            ))}
        </div>
    </div>
  );
};

export default PopularWinterCareServices;
