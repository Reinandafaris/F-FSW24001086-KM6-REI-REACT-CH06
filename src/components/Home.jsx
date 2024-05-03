import { Link } from "react-router-dom";
import carImg from "../assets/img/Mercedes.png";

const Home = () => {
  return (
    <section id="home" className="home position-relative">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div data-aos="fade-right" className="col-sm-5 home__hero">
            <h1>Sewa & Rental Mobil Terbaik di Bekasi</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan
              mobil kualitas terbaik dengan harga terjangkau. Selalu
              siap melayani kebutuhanmu untuk sewa mobil selama 24
              jam.
            </p>
            <Link to="/filter">
              <button
                id="btn-sewa-mobil"
                className="btn color-primary-green"
              >
                Mulai Sewa Mobil
              </button>
            </Link>
          </div>
          <div className="col-sm-6">
            <img
              src={carImg}
              alt="Mercedez Benz Car"
              className="img-fluid home__img"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>

      <div className="row justify-content-between align-items-center position-absolute bottom-0 w-100">
        <div className="col-sm"></div>
        <div className="col-sm home__car-background"></div>
      </div>
    </section>
  );
};

export default Home;
