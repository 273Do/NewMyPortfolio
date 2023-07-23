// Original: https://dribbble.com/shots/5708399-Christmas-Collisions

import { createRoot } from "react-dom/client";
import { Underlay, Overlay } from "./components/Common";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";

import Tool from "./components/Tool";
import Main from "./components/Main";
import Design from "./components/Design";
import ClubOtherActivities from "./components/ClubOtherActivities";
import Movie from "./components/Movie";

createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Underlay />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tool/credit_checker" element={<Tool />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/design" element={<Design />} />
        <Route
          path="/club_other_activities"
          element={<ClubOtherActivities />}
        />
      </Routes>
    </Router>
  </>
);
