import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useEffect } from "react";

const FilterPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Filter />
      <Footer />
    </>
  );
};

export default FilterPage;
