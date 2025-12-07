import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Profile Updated Successfully!");

        setUser({ ...user, displayName: name, photoURL });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="max-w-md mx-auto mt-80 p-5 rounded-lg shadow-2xl">
      <h2 className="text-3xl text-[#131952] font-bold mb-5 text-center">
        Update Your Profile
      </h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Show updated preview */}
        <div className="text-center">
          <img
            src={photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt=""
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h3 className="text-xl font-semibold mt-2">{name}</h3>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={photoURL}
            placeholder="Photo URL"
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>
        <button className="btn w-full bg-blue-900 text-white">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
