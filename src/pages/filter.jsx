import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getCars } from "../services/car.services";

const FilterPage = () => {
  const [cars, setCars] = useState([]);

  return (
    <>
      <Navbar />
      <Home />
      <Filter />
      <Card>
        {cars.map((car) => (
          <Card.CardItem key={car.id} car={car} />
        ))}
      </Card>
      <Footer />
    </>
  );
};

export default FilterPage;
