const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginData");
    window.location.href = "/";
  };

  return (
    <header className="header-nav">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid d-flex justify-content-between">
            <a href="#">
              <div className="logo"></div>
            </a>
            <div>
              <div className="desktop-nav-hidden">
                <a
                  className="btn"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <span className="navbar-toggler-icon"></span>
                </a>
              </div>
              <div className="desktop-nav-hidden">
                <div
                  className="offcanvas offcanvas-mobile offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title"
                      id="offcanvasExampleLabel"
                    >
                      BCR
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="d-flex flex-column gap-3">
                      <li>
                        <a href="#our-services">Our Services</a>
                      </li>
                      <li>
                        <a href="#why-us">Why Us</a>
                      </li>
                      <li>
                        <a href="#testimonial">Testimonials</a>
                      </li>
                      <li>
                        <a href="#faq">FAQ</a>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="btn color-primary-green"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mobile-nav-hidden">
                <ul className="navbar-nav align-items-center gap-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#our-services">
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#why-us">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonial">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn color-primary-green"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
