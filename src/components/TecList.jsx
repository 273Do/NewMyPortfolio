import React from "react";
import AviUtlLogo from "../images/icon/AviUtl.png";

const TecList = ({ tecNum }) => {
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
              <a href="https://www.mathjax.org">
                <img
                  className="tec_img"
                  title="MathJax による提供"
                  src="https://www.mathjax.org/badge/badge-square-2.png"
                  border="0"
                  alt="MathJax による提供"
                />
              </a>
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
              <a href="https://www.mathjax.org">
                <img
                  className="tec_img"
                  title="MathJax による提供"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/2048px-Google_Apps_Script.svg.png"
                  border="0"
                  alt="MathJax による提供"
                />
              </a>
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
            <li>
              <i class="devicon-apple-original"></i>
            </li>
            <li>
              <i class="devicon-android-plain"></i>
            </li>
            <li>
              <i class="devicon-typescript-plain"></i>
            </li>
            <li>
              <i class="devicon-css3-plain"></i>
            </li>
            <li>
              <i class="devicon-python-plain"></i>
            </li>
            <li>
              <i class="devicon-react-original"></i>
            </li>
            <li>
              <i class="devicon-django-plain"></i>
            </li>
            <li>
              <img
                className="tec_img"
                title="MariaDB による提供"
                src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_white-transparent.png"
                border="0"
                alt="MariaDB による提供"
              />
            </li>
          </ul>
        </nav>
      </div>
    );
  } else if (tecNum == 3) {
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
              <i class="devicon-arduino-plain"></i>
            </li>
            <li>
              <i class="devicon-c-plain"></i>
            </li>
            <li>
              <i class="devicon-python-plain"></i>
            </li>
          </ul>
          <br />
          <ul>
            <li>
              <i class="devicon-vscode-plain"></i>
            </li>

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
                className="tec_img"
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
