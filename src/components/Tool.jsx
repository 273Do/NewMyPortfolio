import React, { Suspense } from "react";
import { Underlay } from "./Common";
import { Three } from "../Three";
import ToolList from "./ToolList";

const Tool = ({ toolNameF, toolNameL, desc, color }) => {
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
            <p>You can try the demo by clicking logo icon.</p>
          </div>

          <div className="tool_desc">
            <p>{desc}</p>
          </div>
        </div>

        <ToolList />
        <div className="footer_space"></div>
      </div>

      <Suspense fallback={null}>
        <Three gradation={color} />
      </Suspense>
    </>
  );
};

export default Tool;
