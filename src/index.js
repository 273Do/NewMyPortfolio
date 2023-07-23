// Original: https://dribbble.com/shots/5708399-Christmas-Collisions
// By: 𝔅𝔢𝔰𝔱𝔖𝔢𝔯𝔳𝔢𝔡𝔅𝔬𝔩𝔡 @bstsrvdbld

import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import { Underlay, Overlay } from "./App";
import { Three } from "./Three";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <>
    <Underlay />
    <Suspense fallback={null}>
      <Three />
    </Suspense>
  </>
);
