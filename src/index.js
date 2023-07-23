// Original: https://dribbble.com/shots/5708399-Christmas-Collisions
// By: 𝔅𝔢𝔰𝔱𝔖𝔢𝔯𝔳𝔢𝔡𝔅𝔬𝔩𝔡 @bstsrvdbld

import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import { Underlay, Overlay } from "./components/Common";
import { Three } from "./Three";
import "./style.css";
import Tool from "./components/Tool";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <>
    <Underlay />
    <Tool />
  </>
);
