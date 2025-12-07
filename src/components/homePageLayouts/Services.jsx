// import React, { useContext, useState } from "react";
// import { useLoaderData, useParams } from "react-router";
// import { AuthContext } from "../provider/AuthProvider";
// import toast from "react-hot-toast";

// const ServiceDetails = () => {
// const {services} = useServices("services")  const { id } = useParams();
//   const { user } = useContext(AuthContext);

//   const service = services.find((item) => item.id == id);

//   const [name, setName] = useState(user?.displayName || "");
//   const [email, setEmail] = useState(user?.email || "");

//   const handleBooking = (e) => {
//     e.preventDefault();
//     toast.success("Service Booked Successfully!");
//     setName("");
//     setEmail("");
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-5">

//       <h1 className="text-4xl font-bold text-blue-900 mb-5">
//         {service.title}
//       </h1>

//       <img
//         src={service.image}
//         alt=""
//         className="w-full h-80 object-cover rounded-xl mb-5"
//       />

//       <p className="text-lg mb-4">{service.description}</p>

//       <p className="font-bold text-2xl">Price: {service.price}</p>

//       <hr className="my-5" />

//       <h2 className="text-3xl font-bold mb-3">Book This Service</h2>

//       <form onSubmit={handleBooking} className="space-y-3">
//         <input
//           className="input input-bordered w-full"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <input
//           className="input input-bordered w-full"
//           placeholder="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <button className="btn bg-blue-900 text-white w-full">
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ServiceDetails;

