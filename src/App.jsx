import { Underlay, Overlay } from "./components/Common";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Tool from "./components/Tool";
import Main from "./components/Main";
import OtherActivities from "./components/OtherActivities";
import Movie from "./components/Movie";
import { ThemeProvider } from "./components/ThemeProvider";
import { AnimatePresence } from "framer-motion";

import Cc from "./images/icon/CreditChecker.png";
import Fg from "./images/icon/FormulaGenerator.png";
import Of from "./images/icon/OnlineForm.png";
import Th from "./images/icon/Thor.png";
import S from "./images/icon/SOMETAROKAIcon.png";
import Mp from "./images/icon/MyPortfolio.png";
import R8 from "./images/icon/Route8.png";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <ThemeProvider>
          <Underlay />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/other_activities" element={<OtherActivities />} />
            <Route
              path="/tool/route8"
              element={
                <Tool
                  text={"Route8"}
                  desc={
                    "Route8 は走行時の状態や移動手段なども合わせて経路を共有できるサイトです．"
                  }
                  // color={["#c37ebc", "#7667b6", "#400239"]}
                  PTime={"2ヶ月"}
                  color={["#bbbcde", "#f4ede4", "#223a70"]}
                  func={6}
                  img={R8}
                />
              }
            />
            <Route
              path="/tool/online_Form"
              element={
                <Tool
                  text={"Online_\nForm"}
                  desc={
                    "大学内生徒限定の掲示板です．javascriptの勉強のために制作しました．見た目だけです．"
                  }
                  // color={["#c37ebc", "#7667b6", "#400239"]}
                  PTime={"3ヶ月"}
                  color={["#ff9cf5", "#ff7eb3", "#400239"]}
                  func={2}
                  img={Of}
                />
              }
            />
            <Route
              path="/tool/project_thor"
              element={
                <Tool
                  text={"Project_\nThor"}
                  desc={"私の研究内容を更新していく予定です．"}
                  PTime={"開発中"}
                  color={["#ffa680", "#c6578b", "#ce4104"]}
                  func={3}
                  img={Th}
                />
              }
            />
            <Route
              path="/tool/credit_checker"
              element={
                <Tool
                  text={"Credit_\nChecker"}
                  desc={
                    "ユニパからダウンロードした 成績表 PDFファイルを読み込むと，自動で不足単位数や修得進捗，GPA表示してくれます．現在は情報と経済学部に対応しています．"
                  }
                  PTime={"2週間"}
                  color={["#a0d8ef", "#4e6292", "#0a2d53"]}
                  func={0}
                  img={Cc}
                />
              }
            />
            <Route
              path="/tool/formula_generator"
              element={
                <Tool
                  text={"Formula_\nGenerator"}
                  desc={
                    "ボタンで操作する数式生成ツールです．wordの数式の書式にも対応できる機能もあります．"
                  }
                  PTime={"2週間"}
                  color={["#83ccd2", "#12387a", "#0d4850"]}
                  func={1}
                  img={Fg}
                />
              }
            />
            {/* <Route
              path="/tool/sometaroka"
              element={
                <Tool
                  text={"SOME\nTAROKA_"}
                  desc={
                    "４つの大学と合同でアプリを開発中．ミライケータイプロジェクトの中の一つである”SOMETAROKA”の開発に参加した．方言にフォーカスした新感覚SNSである．"
                  }
                  PTime={"開発中"}
                  color={["#f945f9", "#7e36ff", "#f945f9"]}
                  func={4}
                  img={S}
                />
              }
            /> */}
            <Route
              path="/tool/portfolio"
              element={
                <Tool
                  text={"My_\nPortfolio"}
                  desc={"私のポートフォリオを作成しました．"}
                  PTime={"2週間"}
                  color={["#d5b6f8", "#b8cce8", "#3d1b65"]}
                  func={5}
                  img={Mp}
                />
              }
            />
          </Routes>
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
}

export default App;
