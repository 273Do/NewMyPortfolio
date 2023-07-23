import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../images/273DoLogo.png";

const Header = () => {
  return (
    <header>
      <h1 className="site_logo">
        <a href="#">
          <img src={myLogo} alt="273*Logo" />
        </a>
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/tool">Tool</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/design">Design</Link>
          </li>
          <li>
            <Link to="/club_other_activities">Club / Other_Activities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
