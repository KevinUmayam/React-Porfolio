import "./AboutMe.css";
import img from "./assets/kevin.jpg";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
const styles = {
  TextB: {
    borderRadius: "0px",
    backgroundColor: "transparent",
  },
  ulS: {
    padding: "0px",
  },
};
export default function AboutMe() {
  return (
    <div className="backgroundA">
      <section className="wrapper">
        <div className=" alignA">
          <p className="aText myS alignA"> My History</p>
          <p className="paragh">
            I graduated from San Diego State with a bachelors in sociology and a
            minor in counseling and social justice. I deeply love these fields
            of study and although I have had the privilege of learning from some
            unbelievably passionate and driven teachers, I found myself
            unfulfilled in many aspects of my life aspirations. Due to the
            nature of these fields, you often find yourself with a lack of
            absolute/concrete answers as to what to do or how to proceed when
            facing specific issues. This means that desired outcomes are often
            hard to achieve and usually depend on variables outside of your
            hands.
          </p>
        </div>

        <div>
          <picture>
            <img className="myP" src={img} alt="myself" />
          </picture>
          <div className="">
            <p className="myS aText">Kevin Umayam</p>
          </div>
        </div>

        <div className="alignA">
          <p className="aText myS alignA"> Current Path </p>
          <p className="paragh">
            I graduated from San Diego State with a bachelors in sociology and a
            minor in counseling and social justice. I deeply love these fields
            of study and although I have had the privilege of learning from some
            unbelievably passionate and driven teachers, I found myself
            unfulfilled in many aspects of my life aspirations. Due to the
            nature of these fields, you often find yourself with a lack of
            absolute/concrete answers as to what to do or how to proceed when
            facing specific issues. This means that desired outcomes are often
            hard to achieve and usually depend on variables outside of your
            hands.
          </p>
        </div>
      </section>

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
