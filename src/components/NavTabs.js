import "./Nav.css";
// import GitIcon from "./pages/assets/github.svg";

const styles = {
  text: {
    color: "aliceblue",
  },

  selected: {
    color: "#0d6efd",
  },

  background: {
    backgroundColor: "#000000",
    paddingTop: " 3px",
    paddingBottom: " 3px",
  },
};

function NavTabs({ currentPage, pageSetter }) {
  return (
    <div>
      <nav
        style={styles.background}
        className=" font navbar navbar-expand-lg ftco_navbar "
        id="ftco-navbar"
      >
        <div className="containers">
          <div className="" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              {/* nav link AboutMe */}
              <li className="nav-item ">
                <a
                  style={
                    currentPage === "AboutMe" ? styles.selected : styles.text
                  }
                  href="#aboutMe"
                  onClick={() => pageSetter("AboutMe")}
                  className={
                    currentPage === "AboutMe" ? "nav-link  " : "nav-link "
                  }
                >
                  About Me
                </a>
              </li>
              {/* nav link Porfolio */}
              <li className="nav-item">
                <a
                  style={
                    currentPage === "Porfolio" ? styles.selected : styles.text
                  }
                  href="#porfolio"
                  onClick={() => pageSetter("Porfolio")}
                  className={
                    currentPage === "Porfolio" ? "nav-link " : "nav-link"
                  }
                >
                  Porfolio
                </a>
              </li>
              {/* nav link ContactMe */}
              <li className="nav-item">
                <a
                  style={
                    currentPage === "ContactMe" ? styles.selected : styles.text
                  }
                  href="#contactMe"
                  onClick={() => pageSetter("ContactMe")}
                  className={
                    currentPage === "ContactMe" ? "nav-link " : "nav-link"
                  }
                >
                  Contact Me
                </a>
              </li>
              {/* nav link Resume */}
              <li className="nav-item">
                <a
                  style={
                    currentPage === "Resume" ? styles.selected : styles.text
                  }
                  href="#resume"
                  onClick={() => pageSetter("Resume")}
                  className={
                    currentPage === "Resume" ? "nav-link " : "nav-link "
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
