import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import useServices from "../Hooks/useServices";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { id } = useParams();
  const { services } = useServices();
  const { user } = useContext(AuthContext);

  const [service, setService] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Wait for services to load
  useEffect(() => {
    if (services.length > 0) {
      const found = services.find((s) => s.serviceId == id);
      setService(found);
    }
  }, [services, id]);

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Service Booked Successfully!");
    setName("");
    setEmail("");
  };

  if (!service) {
    return <p className="text-center mt-10 text-xl">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5">
      <h1 className="text-4xl font-bold text-blue-900 mb-5">
        {service.serviceName}
      </h1>

      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-80 object-cover rounded-xl mb-5"
      />

      <p className="text-lg mb-4">{service.description}</p>
      <p className="font-bold text-2xl mb-5">Price: ${service.price}</p>

      <hr className="my-5" />
      <h2 className="text-3xl font-bold mb-3">Book This Service</h2>

      <form onSubmit={handleBooking} className="space-y-3">
        <input
          className="input input-bordered w-full"
          placeholder="Your Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="input input-bordered w-full"
          placeholder="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn bg-blue-900 text-white w-full">Book Now</button>
      </form>
    </div>
  );
};

export default ServiceDetails;
