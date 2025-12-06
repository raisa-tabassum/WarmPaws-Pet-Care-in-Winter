import axios from "axios";
import React, { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios("/services.json").then((data) => setServices(data.data));
  }, []);
  return { services };
};

export default useServices;
