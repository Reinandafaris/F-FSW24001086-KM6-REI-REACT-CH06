import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CarsContextItem = createContext();

const CarsContextProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const car = response.data;
      setCars(car);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <CarsContextItem.Provider value={{ cars, setCars }}>
      {children}
    </CarsContextItem.Provider>
  );
};

export const CarsContext = CarsContextItem;
export default CarsContextProvider;
