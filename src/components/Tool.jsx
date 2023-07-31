import React, { Suspense } from "react";
import { Underlay } from "./Common";
import { Three } from "../Three";
import ToolList from "./ToolList";
import TecList from "./TecList";

const Tool = ({ text, desc, PTime, color, func }) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // padding: 40,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          pointerEvents: "auto",
        }}
      >
        <div className="header_space"></div>
        <div className="mian_contents">
          <div className="page_desc">
            <p>Tools_</p>
            <p>You can try the demo by clicking tool text.</p>
          </div>

          <div className="tool_desc">
            <p>{desc}</p>
          </div>
          <TecList tecNum={func} />

          <div className="production_time">
            <p>Production_Time ：{PTime}</p>
          </div>
        </div>
        <ToolList />
        <div className="footer_space"></div>
      </div>

      <Suspense fallback={null}>
        {/* <Three mainText={text} mainColor={color} mainFunc={func} /> */}
      </Suspense>
    </>
  );
};

export default Tool;
