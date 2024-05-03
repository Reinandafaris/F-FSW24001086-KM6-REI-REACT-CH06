import { useContext, useEffect } from "react";
import { getCars } from "../services/car.services";
import { CarsContext } from "../context/CarsContext";

export default function useCarsContext() {
  const { cars, setCars } = useContext(CarsContext);

  useEffect(() => {
    getCars((data) => {
      setCars(data);
    });
  }, []);

  return { cars };
}
