import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import myLogo from "../images/icon/273DoLogo.png";
import { info } from "./Preview";
import { useTheme } from "./ThemeProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    // Swal.fire({
    //   background: "transparent",
    //   type: "warning",
    //   title: "<p style='color:#fff'>coming soon</p>",
    //   showConfirmButton: false,
    //   toast: true,
    // });
    if (window.innerWidth >= 450) {
      const Toast = Swal.mixin({
        showConfirmButton: false,
        timer: 10000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        background: "#222",
        type: "warning",
        title: `<p style='color:${
          theme ? "#f4ede4" : "#222"
        }'>Toolページの3D表示を有効にするにはブラウザのハードウェアアクセラレーションを有効にしてください</p>`,
        toast: true,
        width: "360px",
        position: "top-end", //top-end：右上
      });
    }
  }, []);
  return (
    <header>
      <h1 className={`site_logo ${theme ? "" : "light_mode_logo"}`}>
        <img src={myLogo} alt="273*Logo" onClick={() => info(theme)} />
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
