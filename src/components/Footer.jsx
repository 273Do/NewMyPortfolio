import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="copy_light">
        <p>273DoWorks</p>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">
              <ion-icon size="small" name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
