import React, { useContext, useState } from "react";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  // const [LightMode, setLightMode] = useState(false);

  // const toggleLightMode = () => {
  //   setLightMode(!LightMode);
  // };
  // const lightMode = useContext(LightMode);

  const { theme, setTheme } = useTheme();

  if (theme) {
    document.body.classList.remove("light_mode");
    document.body.classList.remove("light_mode_cursor");
  } else {
    document.body.classList.add("light_mode");
    document.body.classList.add("light_mode_cursor");
  }

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
              className={` ${theme ? "" : "light_mode_text"}`}
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ktu_na3do"
              target="_blank"
              rer="noopener noreferrer"
              className={` ${theme ? "" : "light_mode_text"}`}
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
              className={` ${theme ? "" : "light_mode_text"}`}
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCh4boc9_9Dxiz9QP_VkwGww"
              target="_blank"
              rer="noopener noreferrer"
              className={` ${theme ? "" : "light_mode_text"}`}
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li
            className={` ${theme ? "" : "light_mode_text"}`}
            id="mode"
            onClick={() => setTheme(!theme)}
          >
            {theme ? (
              <ion-icon name="sunny-outline"></ion-icon>
            ) : (
              <ion-icon name="moon-outline"></ion-icon>
            )}
          </li>
        </ul>
      </nav>
    </footer>
  );
};

// function mode() {
//   document.querySelector(".main_contents").classList.toggle("light_mode");
//   document.querySelector("#root").classList.toggle("light_mode");
//   document
//     .querySelector("header nav ul li")
//     .classList.toggle("light_mode_text");
//   document
//     .querySelector("footer nav ul li")
//     .classList.toggle("light_mode_text");
//   console.log("test");
// }

export default Footer;
