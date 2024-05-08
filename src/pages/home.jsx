import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { useEffect } from "react";

const HomePage = () => {
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
      <Body />
      <Footer />
    </>
  );
};

export default HomePage;
