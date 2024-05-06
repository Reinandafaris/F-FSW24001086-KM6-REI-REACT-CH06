import { useState } from "react";

export default function useCarsContext(cars) {
  const [car, setCar] = useState([]);

  const carsFilter = async (date, pickUpTime, totalPassenger) => {
    let filter_dateTime = new Date(`${date} ${pickUpTime}`);
    let formattedDateTime;

    if (totalPassenger == "") totalPassenger = 0;

    if (date == "" && pickUpTime == "" && totalPassenger == "0") {
      setCar(cars);
      return;
    }

    let filteredCars;

    if (totalPassenger == "" || totalPassenger == null) {
      filter_dateTime = new Date(filter_dateTime.getTime());
      formattedDateTime = filter_dateTime.toISOString();
      filteredCars = (car) =>
        car.availableAt <= formattedDateTime &&
        car.available === true;
    } else if (
      date == "" ||
      date == null ||
      pickUpTime == "" ||
      pickUpTime == null
    ) {
      filteredCars = (car) =>
        car.capacity >= totalPassenger && car.available === true;
    } else {
      filter_dateTime = new Date(filter_dateTime.getTime());
      formattedDateTime = filter_dateTime.toISOString();
      filteredCars = (car) =>
        car.capacity >= totalPassenger &&
        car.available === true &&
        car.availableAt <= formattedDateTime;
    }

    const carsFiltered = cars.filter(filteredCars);
    setCar(carsFiltered);
  };

  return {
    car,
    setCar,
    carsFilter,
  };
}
