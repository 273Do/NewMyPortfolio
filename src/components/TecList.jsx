import React from "react";
import AviUtlLogo from "../images/icon/AviUtl.png";
import sa2 from "../images/icon/sa2.png";

const TecList = ({ tecNum, theme }) => {
  if (tecNum == 0) {
    return (
      <div className="tec_list">
        <nav>
          <ul>
            <li>
              <i className="devicon-html5-plain"></i>
            </li>
            <li>
              <i className="devicon-css3-plain"></i>
            </li>
            <li>
              <i className="devicon-javascript-plain"></i>
            </li>
            <li>
              <i className="devicon-jquery-plain"></i>
            </li>
            <li>
              <img
                className="tec_img"
                title="PDF.js による提供"
                src="https://mozilla.github.io/pdf.js/images/logo.svg"
                border="0"
                alt="PDF.js による提供"
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  } else if (tecNum == 1) {
    return (
      <div className="tec_list">
        <nav>
          <ul>
            <li>
              <i className="devicon-html5-plain"></i>
            </li>
            <li>
              <i className="devicon-css3-plain"></i>
            </li>
            <li>
              <i className="devicon-javascript-plain"></i>
            </li>
            <li>
              <i className="devicon-jquery-plain"></i>
            </li>
            <li>
              <img
                className="tec_img"
                title="MathJax による提供"
                src="https://www.mathjax.org/badge/badge-square-2.png"
                border="0"
                alt="MathJax による提供"
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  } else if (tecNum == 2) {
    return (
      <div className="tec_list">
        <nav>
          <ul>
            <li>
              <i className="devicon-html5-plain"></i>
            </li>
            <li>
              <i className="devicon-css3-plain"></i>
            </li>
            <li>
              <i className="devicon-javascript-plain"></i>
            </li>
            <li>
              <img
                className="tec_img"
                title="GAS による提供"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/2048px-Google_Apps_Script.svg.png"
                border="0"
                alt="GAS による提供"
              />
            </li>
            <li>
              <img
                className={`tec_img ${theme ? "" : "light_mode_logo"}`}
                src={sa2}
                border="0"
                alt="sweetalert2による提供"
                style={{
                  width: "100px",
                  marginBottom: "13px",
                  marginLeft: "15px",
                }}
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  } else if (tecNum == 4) {
    return (
      <div className="tec_list">
        <nav>
          <ul>
            {/* <li>
              <i class="devicon-apple-original"></i>
            </li>
            <li>
              <i class="devicon-android-plain"></i>
            </li> */}
            <li>
              <i class="devicon-typescript-plain"></i>
            </li>
            <li>
              <i class="devicon-css3-plain"></i>
            </li>
            <li>
              <i class="devicon-react-original"></i>
            </li>
            <li>
              <i class="devicon-python-plain"></i>
            </li>
            <li>
              <i class="devicon-django-plain"></i>
            </li>
            <li>
              <i class="devicon-mysql-plain"></i>
            </li>
            <li>
              <i class="devicon-nginx-original"></i>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else if (tecNum == 3) {
    return;
  } else if (tecNum == 5) {
    return (
      <div className="tec_list">
        <nav>
          <ul>
            {" "}
            <li>
              <i class="devicon-css3-plain"></i>
            </li>
            <li>
              <i class="devicon-javascript-plain"></i>
            </li>
            <li>
              <i class="devicon-react-original"></i>
            </li>
            <li>
              <i class="devicon-threejs-original"></i>
            </li>
            <li>
              <i class="devicon-devicon-plain"></i>
            </li>
            <li>
              <li>
                <img
                  className={`tec_img ${theme ? "" : "light_mode_logo"}`}
                  src={sa2}
                  border="0"
                  alt="sweetalert2による提供"
                  style={{ width: "100px", marginBottom: "13px" }}
                />
              </li>
            </li>
          </ul>
        </nav>
      </div>
    );
    return;
  } else {
    return (
      <div className="tec_list">
        <nav>
          <ul>
            <li>
              <i class="devicon-html5-plain"></i>
            </li>
            <li>
              <i class="devicon-css3-plain"></i>
            </li>
            <li>
              <i className="devicon-javascript-plain"></i>
            </li>
            <li>
              <i class="devicon-typescript-plain"></i>
            </li>
            <li>
              <i class="devicon-react-original"></i>
            </li>
            <li>
              <i class="devicon-c-plain"></i>
            </li>
            <li>
              <i class="devicon-python-plain"></i>
            </li>
          </ul>
          <ul>
            <li>
              <i class="devicon-git-plain"></i>
            </li>
            <li>
              <i class="devicon-github-original"></i>
            </li>
            <li>
              <i class="devicon-docker-plain"></i>
            </li>
            <li>
              <i class="devicon-markdown-original"></i>
            </li>
            <li>
              <i class="devicon-figma-plain"></i>
            </li>
            <li>
              <i class="devicon-blender-original"></i>
            </li>
            <li>
              <img
                className={`tec_img ${theme ? "" : "light_mode_logo"}`}
                src={AviUtlLogo}
                border="0"
                alt="AviUtlによる提供"
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default TecList;
