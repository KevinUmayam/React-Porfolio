import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import "./Porfolio.css";

import CarouselC from "./Carousel";

const styles = {
  TextB: {
    borderRadius: "0px",
    backgroundColor: "transparent",
  },
  ulS: {
    padding: "0px",
  },
};

export default function Porfolio() {
  return (
    <div className="Pbackground">
      <div className="block">
        <div className="cDiv">
          <CarouselC />
        </div>
      </div>
      <div>
        <ul style={styles.ulS} className="bottom">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kevin-umayam/"
            >
              <FaLinkedin className="icons" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/KevinUmayam"
            >
              <FaGithub className="icons" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/19267013/kevin-umayam"
            >
              <FaStackOverflow className="icons" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
