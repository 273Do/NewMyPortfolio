import React, { Suspense } from "react";
import { Underlay } from "./App";
import { Three } from "../Three";

const Tool = () => {
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
          pointerEvents: "none",
        }}
      >
        <h1>コンテンツ</h1>
      </div>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </>
  );
};

export default Tool;
