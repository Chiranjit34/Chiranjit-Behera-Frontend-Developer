import "./Navbar.scss";
// import LogoS from "../../assets/images/logo-c.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  // faAward,
  // faTasks,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <div className="nav-bar-div">
        <div className="logo-div">
          <p>
            Space <span>X</span>
          </p>
        </div>
        <nav className="nav-bar-n">
          <div>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </div>
          <div className="about-link">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </div>

          {/* <div className="skill-link">
            <FontAwesomeIcon icon={faAward} color="#4d4d4e" />
          </div>

          <div className="project-link">
            <FontAwesomeIcon icon={faTasks} color="#4d4d4e" />
          </div> */}
          <div className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
