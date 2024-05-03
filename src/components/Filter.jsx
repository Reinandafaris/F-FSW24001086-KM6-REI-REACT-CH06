import { useEffect, useState } from "react";
import Select from "react-select";

const Filter = () => {
  const [product, setProduct] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const categories = Array.from(
    new Set(product.map((item) => item.available))
  );

  const categoryOptions = categories.map((available) => ({
    value: available,
    label: available ? "supir" : "dewek",
  }));

  const filterProduct = selectCategory
    ? product.filter(
        (item) => item.available === selectCategory.value
      )
    : product;

  return (
    <div className="search">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="row search__card mx-lg-5 py-3 px-4">
              <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                <label>Tipe Driver</label>
                <Select
                  options={categoryOptions}
                  isClearable
                  placeholder="Driver"
                  onChange={(selectOption) =>
                    setSelectCategory(selectOption)
                  }
                  value={selectCategory}
                />
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label>Tanggal</label>
                <input
                  // value={tanggal}
                  // onChange={handleTanggalChange}
                  type="date"
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="tanggal"
                />
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                <label>Pilih Waktu</label>
                <select
                  // value={waktuJemput}
                  // onChange={handleWaktuJemputChange}
                  className="form-select"
                  aria-label="Default select example"
                  id="waktuJemput"
                >
                  <option defaultValue={"false"}>
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
                    // value={jumlahPenumpang}
                    // onChange={handleJumlahPenumpangChange}
                    type="number"
                    className="form-control border-end-0"
                    placeholder="Jumlah Penumpang"
                    id="jumlahPenumpang"
                  />
                  {/* <span className="input-group-text bg-white">
                    <img src={users} width="20px" alt="" />
                  </span> */}
                </div>
              </div>
              <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                <button
                  type="button"
                  // onClick={handleFilter}
                  className="btn color-primary-green"
                  // id="load-btn"
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
