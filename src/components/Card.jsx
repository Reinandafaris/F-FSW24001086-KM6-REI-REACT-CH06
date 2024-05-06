import usersImg from "../assets/img/fi_users1.png";
import settingsImg from "../assets/img/fi_settings.png";
import calendarImg from "../assets/img/fi_calendar.png";

const Card = (props) => {
  const { children } = props;
  return (
    <section className="cars">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </section>
  );
};

const CardItem = (props) => {
  const { car } = props;

  return (
    <div className="col-lg-4 mb-3">
      <div className="card  px-2 py-4">
        <img
          src={`/src/assets/${car.image}`}
          className="card-img-top mt-4 text-center"
        />
        <div className="card-body">
          <h5 className="card-title fs-6">{car.manufacture}</h5>
          <h5 className="card-title fs-5 fw-bold">
            Rp {car.rentPerDay} / hari
          </h5>
          <p className="cars__p">{car.description} </p>
          <div className="row">
            <div className="col-1">
              <img src={usersImg} width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">{car.capacity} orang</div>
          </div>
          <div className="row mt-2">
            <div className="col-1">
              <img src={settingsImg} width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">{car.transmission}</div>
          </div>
          <div className="row mt-2 mb-4">
            <div className="col-1">
              <img src={calendarImg} width="20px" alt="" />
            </div>
            <div className="col-10 ms-lg-2">Tahun {car.year}</div>
          </div>

          <a
            href="#"
            className="btn color-primary-green w-100"
            // style="width:100%"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

Card.CardItem = CardItem;

export default Card;
