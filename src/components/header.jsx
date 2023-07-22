import React from "react";
import myLogo from "../images/273DoLogo.png";

const Header = () => {
  return (
    <header>
      <h1 class="site_logo">
        <a href="#">
          <img src={myLogo} alt="273*Logo" />
        </a>
      </h1>

      <nav>
        <ul>
          <li>
            <a href="#">Main</a>
          </li>
          <li>
            <a href="#">Tools</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Club / Other_Activities</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
