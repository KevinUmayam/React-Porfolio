function NavTabs({ currentPage, pageSetter }) {
  return (
    <nav
      className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Megawidth
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {/* nav link AboutMe */}
            <li className="nav-item">
              <a
                href="#aboutMe"
                onClick={() => pageSetter("AboutMe")}
                className={
                  currentPage === "AboutMe" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>
            {/* nav link Porfolio */}
            <li className="nav-item">
              <a
                href="#porfolio"
                onClick={() => pageSetter("Porfolio")}
                className={
                  currentPage === "Porfolio" ? "nav-link active" : "nav-link"
                }
              >
                Porfolio
              </a>
            </li>
            {/* nav link ContactMe */}
            <li className="nav-item">
              <a
                href="#contactMe"
                onClick={() => pageSetter("ContactMe")}
                className={
                  currentPage === "ContactMe" ? "nav-link active" : "nav-link"
                }
              >
                Contact Me
              </a>
            </li>
            {/* nav link Resume */}
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => pageSetter("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
