import React, { Suspense } from "react";
import { Underlay } from "./Common";
import { Three } from "../Three";
import ToolList from "./ToolList";
import TecList from "./TecList";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const Tool = ({ text, desc, PTime, color, func }) => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const toolLogo = document.querySelectorAll(".tool_list nav ul li img");

  let selectedElement = null;
  function handleClick(event) {
    if (selectedElement) {
      // 選択された要素以外のCSSを解除
      selectedElement.classList.remove("clicked");
    }
    if (selectedElement === event.target) {
      // 同じ要素がクリックされた場合は選択を解除
      // selectedElement = null;
      event.target.classList.add("clicked");
    } else {
      // クリックされた要素にCSSを適用
      event.target.classList.add("clicked");
      selectedElement = event.target;
    }
  }
  // 各要素にクリックイベントリスナーを追加する
  toolLogo.forEach((e) => {
    e.addEventListener("click", handleClick);
  });

  return (
    <motion.div
      className="ThreeD_text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
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
        <div className="main_contents">
          <div className="page_desc">
            <p>Tools_</p>
            <p>文字をクリックすることでデモを試すことができます．</p>
          </div>

          <div className="tool_desc">
            <p>{desc}</p>
          </div>

          <TecList tecNum={func} theme={theme} />

          <div className="production_time">
            <p>開発期間：{PTime}</p>
          </div>
        </div>

        <ToolList theme={theme} />

        <div className="footer_space"></div>
      </div>

      <Suspense fallback={null}>
        <Three
          mainText={text}
          mainColor={color}
          mainFunc={func}
          BGtheme={theme}
        />
      </Suspense>
    </motion.div>
  );
};

export default Tool;
