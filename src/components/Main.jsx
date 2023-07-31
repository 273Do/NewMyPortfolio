import React from "react";
import TecList from "./TecList";

const Main = () => {
  return (
    <>
      <div className="header_space"></div>

      <div className="mian_contents">
        <div className="page_desc">
          <p>Main_</p>
          <p>Please select a section from the header.</p>
        </div>
        <div className="main_title">
          <p>Welcome_</p>
          <p>to</p>
          <p>273*</p>
          <p>Portfolio</p>
        </div>
        <div className="main_desc">
          <ul>
            <li>
              <p>About_</p>
              <p>Kei_ / 273*</p>
              <p>University_Student</p>
            </li>
            <li>
              <p>Major_</p>
              <p>Sensor / Web_Service</p>
            </li>
            <li>
              <p>Hobby_</p>
              <p>Code / 2DMG / 3DCG</p>
            </li>
            <li>
              <p>Origin of name_</p>
              <p>
                I like “Tuna_Sand(tunaSandwiches)”, so I'm working under the
                name 273*.
              </p>
            </li>
            <li>
              <p>Skill_Tool</p>
              <TecList tecNum={-1} />
            </li>
            <li>
              <p>Contact_</p>
              <p>For requests and inquiries, please DM me on Twitter.</p>
            </li>
          </ul>
        </div>
        {/* <div className="main_mylogo">
          <img src={tunaSandLogo} alt="273DoLogo" />
        </div> */}
      </div>

      <div className="footer_space"></div>
    </>
  );
};

export default Main;
