import { useContext, useState } from "react";
import { CarsContext } from "../context/CarsContext";
import Card from "./Card";

const Filter = () => {
  const { cars } = useContext(CarsContext);
  const [car, setCar] = useState([]);

  const [driverType, setDriverType] = useState("");
  const [date, setDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  let [totalPassenger, setTotalPassenger] = useState("");

  const carsFilter = async () => {
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
  const filter = cars.sort(() => Math.random() - 0.5);
  const carFilter = car.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="search">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search__card mx-lg-5 py-3 px-4">
                <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="tipeDriver"
                    value={driverType}
                    onChange={(e) => setDriverType(e.target.value)}
                  >
                    <option hidden value="">
                      Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;
                    </option>
                    <option value="dengan supir">Dengan Supir</option>
                    <option value="tanpa supir">
                      Tanpa Supir (Lepas Kunci)
                    </option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    id="tanggal"
                  />
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                  <label>Pilih Waktu</label>
                  <select
                    value={pickUpTime}
                    onChange={(e) => setPickUpTime(e.target.value)}
                    className="form-select"
                    aria-label="Default select example"
                    id="waktuJemput"
                  >
                    <option hidden value="">
                      Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;
                    </option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label className="fw-light">
                    Jumlah Penumpang (optional)
                  </label>
                  <div className="input-group">
                    <input
                      value={totalPassenger}
                      onChange={(e) =>
                        setTotalPassenger(e.target.value)
                      }
                      type="number"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      id="jumlahPenumpang"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                  <button
                    type="button"
                    onClick={() => carsFilter()}
                    className="btn color-primary-green"
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card>
        {car.length === 0
          ? filter.map((car) => (
              <Card.CardItem key={car.id} car={car} />
            ))
          : carFilter.map((car) => (
              <Card.CardItem key={car.id} car={car} />
            ))}
      </Card>
    </>
  );
};

export default Filter;
