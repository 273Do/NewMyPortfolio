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
            <a
              href="https://github.com/273Do"
              target="_blank"
              rer="noopener noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ktu_na3do"
              target="_blank"
              rer="noopener noreferrer"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/kei310__?igshid=MmIzYWVlNDQ5Yg=="
              target="_blank"
              rer="noopener noreferrer"
              class="icon"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCh4boc9_9Dxiz9QP_VkwGww"
              target="_blank"
              rer="noopener noreferrer"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
