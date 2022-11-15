import React from "react";
import { FaGithub } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import image1 from "../pages/assets/5-6-7-8P1.png";
import image2 from "../pages/assets/fit-foodP2.jpeg";
import image3 from "../pages/assets/weatherApp-P3.jpeg";
import image4 from "../pages/assets/teamgen.jpeg";
import "./Carousel.css";

const styles = {
  TextD: {
    color: "aliceblue",
    textDecoration: "none",
    opacity: ".9",
  },
};

function CarouselC() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  image"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="textI">
            <div className="bbg">
              <h2 style={styles.TextD} className="textI">
                5-6-7-8!
              </h2>
              <div className="alignsB">
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/KevinUmayam/5-6-7-8"
                  >
                    <FaGithub className="icons onC" />
                  </a>
                </div>
                <div className="aligns">
                  <a
                    style={styles.TextD}
                    target="_blank"
                    rel="noreferrer"
                    href="https://still-eyrie-34699.herokuapp.com/login"
                  >
                    <h4 className="texts textI">Inspect</h4>
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100  image"
            src={image2}
            alt="First slide"
          />
          <Carousel.Caption className="textI">
            <div className="bbg">
              <h2 style={styles.TextD}>Fit-Food</h2>

              <div className="alignsB">
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href=" https://github.com/KevinUmayam/Fit-Food"
                  >
                    <FaGithub className="icons onC aligns" />
                  </a>
                </div>
                <div className="aligns">
                  <a
                    style={styles.TextD}
                    target="_blank"
                    rel="noreferrer"
                    href="https://kevinumayam.github.io/Fit-Food/"
                  >
                    <h4 className="texts aligns">Inspect</h4>
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100  image"
            src={image3}
            alt="First slide"
          />
          <Carousel.Caption className="textI">
            <div className="bbg">
              <h2 style={styles.TextD}>Wheather Dashboard</h2>

              <div className="alignsB">
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/KevinUmayam/Weather-App"
                  >
                    <FaGithub className="icons onC" />
                  </a>
                </div>
                <div className="aligns">
                  <a
                    style={styles.TextD}
                    target="_blank"
                    rel="noreferrer"
                    href="https://kevinumayam.github.io/Weather-App/"
                  >
                    <h4 className="texts">Inspect</h4>
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* 4 */}
        <Carousel.Item>
          <img
            className="d-block w-100  image"
            src={image4}
            alt="First slide"
          />
          <Carousel.Caption className="textI">
            <div className="bbg">
              <h2 style={styles.TextD}>Team Generator</h2>

              <div className="alignsB">
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/KevinUmayam/Team_Profile_Generator"
                  >
                    <FaGithub className="icons onC" />
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselC;
