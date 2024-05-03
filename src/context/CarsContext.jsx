import { createContext, useState } from "react";

const CarsContextItem = createContext();

const CarsContextProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  return (
    <CarsContextItem.Provider value={{ cars, setCars }}>
      {children}
    </CarsContextItem.Provider>
  );
};

export const CarsContext = CarsContextItem;
export default CarsContextProvider;
