import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../images/icon/273DoLogo.png";
import { info } from "./Preview";

const Header = () => {
  return (
    <header>
      <h1 className="site_logo" onClick={() => info()}>
        <img src={myLogo} alt="273*Logo" />
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/tool/credit_checker">Tool</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/other_activities">Other_Activities</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
