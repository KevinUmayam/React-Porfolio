import "./Resume.css";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
const styles = {
  TextB: {
    borderRadius: "0px",
    backgroundColor: "transparent",
  },
  aS: {
    textDecoration: "none",
  },
};

export default function Resume() {
  return (
    <div className="Rbackground font">
      <div className="wholeContainer">
        <div className="textFormat">
          <div>
            <h1 className="rText">Coding Competency</h1>
          </div>
          <h1 className="rText lines"> || </h1>
          <div>
            <a
              style={styles.aS}
              className="aStyle"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/1mlsF9I6ojmnCectHfj89Ig477aHB9UEwPAHqn7CRI0c/edit?usp=sharing"
            >
              <h1 className="rText">My Resume</h1>
            </a>
          </div>
        </div>
        <div>
          <div className="listDivs ">
            <div>
              <h3 className="rText lists ">Front End</h3>
              <ul>
                <li>
                  <h5 className="listT">React</h5>
                </li>
                <li>
                  <h5 className="listT">Handlebars</h5>
                </li>
                <li>
                  <h5 className="listT"> Javascript</h5>
                </li>
                <li>
                  <h5 className="listT">jQuery</h5>
                </li>
                <li>
                  <h5 className="listT">HTML5</h5>
                </li>
                <li>
                  <h5 className="listT">CSS</h5>
                </li>
                <li>
                  <h5 className="listT">Bootstrap</h5>
                </li>
              </ul>
            </div>
            <div className="margins">
              <h3 className="rText lists ">Back End</h3>
              <ul>
                <li>
                  <h5 className="listT">Javascript</h5>
                </li>
                <li>
                  <h5 className="listT">Express</h5>
                </li>
                <li>
                  <h5 className="listT"> Sequelize</h5>
                </li>
                <li>
                  <h5 className="listT">jQuery</h5>
                </li>
                <li>
                  <h5 className="listT">MVC</h5>
                </li>
                <li>
                  <h5 className="listT">Node</h5>
                </li>
                <li>
                  <h5 className="listT">Jest</h5>
                </li>
              </ul>
            </div>
          </div>
          {/* here is the next div */}
          <div className="listDivs ">
            <div>
              <h3 className="rText lists">Databases </h3>
              <ul>
                <li>
                  <h5 className="listT">MySQL </h5>
                </li>
                <li>
                  <h5 className="listT">MongoDb</h5>
                </li>
              </ul>
            </div>
            <div className="margins">
              <h3 className="rText lists">Version Control</h3>
              <ul>
                <li>
                  <h5 className="listT">Git </h5>
                </li>
                <li>
                  <h5 className="listT">Github</h5>
                </li>
                <li>
                  <h5 className="listT"> Gitlab</h5>
                </li>
              </ul>
            </div>
          </div>
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
