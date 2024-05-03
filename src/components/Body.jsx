import serviceImg from "../assets/img/img_service.png";
import completeImg from "../assets/img/icon/icon_complete.svg";
import priceImg from "../assets/img/icon/icon_price.svg";
import timeImg from "../assets/img/icon/icon_24hrs.svg";
import profesionalImg from "../assets/img/icon/icon_professional.svg";
import priaImg from "../assets/img/pria.png";
import wanitaImg from "../assets/img/wanita.png";
import rateImg from "../assets/img/icon/rate.svg";

const Body = () => {
  return (
    <>
      {/* <!-- Our services --> */}
      <section id="our-services" className="container service">
        <div className="row align-items-center">
          <div className="service__img-container col-sm">
            <img
              src={serviceImg}
              alt="Woman Illustration"
              className="img-fluid__service"
            />
          </div>
          <div data-aos="fade-down" className="col-sm service__desc">
            <h2>Best Car Rental for any kind of trip in Bekasi!</h2>
            <p>
              Sewa mobil di Bekasi bersama Binar Car Rental jaminan
              harga lebih murah dibandingkan yang lain, kondisi mobil
              baru, serta kualitas pelayanan terbaik untuk perjalanan
              wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul className="service__points">
              <li>Sewa Mobil Dengan Supir di Bekasi 12 Jam</li>
              <li data-aos="fade-left">
                Sewa Mobil Lepas Kunci di Bekasi 24 Jam
              </li>
              <li data-aos="fade-left">
                Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li data-aos="fade-left">
                Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li data-aos="fade-left">
                Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Why Us --> */}
      <section id="why-us" className="container why-us">
        <div className="why-us__header">
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="why-us__cards">
          {/* <!-- Mobil lengkap --> */}
          <div data-aos="fade-up" className="why-us__card col-sm">
            <img
              src={completeImg}
              alt="Mobil lengkap"
              className="why-us__icons"
            />
            <h3 className="fw-semibold mb-0">Mobil Lengkap</h3>
            <p>
              Tersedia banyak pilihan mobil, kondisi masih baru,
              bersih dan terawat
            </p>
          </div>
          {/* <!-- harga murah --> */}
          <div data-aos="fade-down" className="why-us__card col-sm">
            <img
              src={priceImg}
              alt="Harga murah"
              className="why-us__icons"
            />
            <h3 className="fw-semibold mb-0">Harga Murah</h3>
            <p>
              Harga murah dan bersaing, bisa bandingkan harga kami
              dengan rental mobil lain
            </p>
          </div>
          {/* <!-- Layanan 24 jam --> */}
          <div data-aos="fade-up" className="why-us__card col-sm">
            <img
              src={timeImg}
              alt="Layanan 24 jam"
              className="why-us__icons"
            />
            <h3 className="fw-semibold mb-0">Layanan 24 Jam</h3>
            <p>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
              juga tersedia di akhir minggu
            </p>
          </div>
          {/* <!-- Supir profesional --> */}
          <div data-aos="fade-down" className="why-us__card col-sm">
            <img
              src={profesionalImg}
              alt="Supir profesional"
              className="why-us__icons"
            />
            <h3 className="fw-semibold mb-0">Supir Profesional</h3>
            <p>
              Supir yang profesional, berpengalaman, jujur, ramah dan
              selalu tepat waktu
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials --> */}
      <section id="testimonial">
        <div data-aos="zoom-in" className="testimonial__header">
          <h2>Testimonial</h2>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div className="owl-carousel owl-theme">
          {/* <!-- Testimoni 1 --> */}
          <div className="item testimonial_item">
            <div className="row align-items-center">
              <div className="col-sm-3 testimonial__photo-container">
                <div className="testimonial__photo">
                  <img
                    src={priaImg}
                    alt="John Dee"
                    className="rounded-circle"
                  />
                </div>
              </div>
              <div className="col-sm-9 testimonial__desc">
                <img
                  src={rateImg}
                  className="testimonial__rate"
                  alt="Rate"
                />
                <p className="testimoni__desc__opinion">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod lorem
                  ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod”
                </p>
                <p className="fw-bolder text-start w-100">
                  John Dee 32, Bromo
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Testimoni 2 --> */}
          <div className="item testimonial_item">
            <div className="row align-items-center">
              <div className="col-sm-3 testimonial__photo-container">
                <div className="testimonial__photo">
                  <img
                    src={wanitaImg}
                    alt="John Dee"
                    className="rounded-circle"
                  />
                </div>
              </div>
              <div className="col-sm-9 testimonial__desc">
                <img
                  src={rateImg}
                  className="testimonial__rate"
                  alt="Rate"
                />
                <p className="testimoni__desc__opinion">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod lorem
                  ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod”
                </p>
                <p className="fw-bolder text-start w-100">
                  John Dee 32, Bromo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Mulai sewa mobil --> */}
      <section id="cta" className="container cta">
        <div data-aos="zoom-in" className="col cta__content">
          <h2>Sewa Mobil di Bekasi Sekarang</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod
            <br />
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn color-primary-green">
            Mulai Sewa Mobil
          </button>
        </div>
      </section>
      {/* <!-- FAQ --> */}
      <section id="faq" className="container faq">
        <div className="row">
          <div data-aos="fade-right" className="col-sm faq__header">
            <h2>Frequently Asked Question</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
          </div>
          <div
            className="accordion accordion-flush col-sm"
            id="accordionFlushExample"
          >
            <div
              data-aos="fade-down"
              className="accordion-item accordion-item-edit rounded-2"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button rounded-2 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Distinctio fuga sed natus assumenda unde
                  blanditiis tenetur facilis sequi expedita, eveniet
                  accusantium nemo maiores fugiat adipisci, voluptate
                  accusamus quasi ut consequuntur.
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="accordion-item accordion-item-edit rounded-2"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button rounded-2 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Fugiat autem eaque, et magni dicta,
                  perspiciatis numquam nihil nisi possimus quis enim
                  ex similique voluptates officia nulla quod
                  aspernatur ipsa explicabo.
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="accordion-item accordion-item-edit rounded-2"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button rounded-2 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem incidunt temporibus, dolor suscipit
                  nostrum necessitatibus a adipisci qui ipsa numquam
                  ipsam possimus, dolores reiciendis consequatur
                  facilis? Optio tempore nobis voluptate.
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="accordion-item accordion-item-edit rounded-2"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button rounded-2 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem incidunt temporibus, dolor suscipit
                  nostrum necessitatibus a adipisci qui ipsa numquam
                  ipsam possimus, dolores reiciendis consequatur
                  facilis? Optio tempore nobis voluptate.
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="accordion-item accordion-item-edit rounded-2"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button rounded-2 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem incidunt temporibus, dolor suscipit
                  nostrum necessitatibus a adipisci qui ipsa numquam
                  ipsam possimus, dolores reiciendis consequatur
                  facilis? Optio tempore nobis voluptate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
