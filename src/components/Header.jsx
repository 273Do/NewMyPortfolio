import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../images/icon/273DoLogo.png";
import { info } from "./Preview";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header>
      <h1
        className={`site_logo ${theme ? "" : "light_mode_logo"}`}
        onClick={() => info()}
      >
        <img src={myLogo} alt="273*Logo" />
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="/" className={` ${theme ? "" : "light_mode_text"}`}>
              Main
            </Link>
          </li>
          <li>
            <Link
              className={` ${theme ? "" : "light_mode_text"}`}
              to="/tool/credit_checker"
            >
              Tool
            </Link>
          </li>
          <li>
            <Link className={` ${theme ? "" : "light_mode_text"}`} to="/movie">
              Movie
            </Link>
          </li>
          <li>
            <Link
              className={` ${theme ? "" : "light_mode_text"}`}
              to="/other_activities"
            >
              Other_Activities
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
