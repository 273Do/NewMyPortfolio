import { Underlay, Overlay } from "./components/Common";
import {
  BrowserRouter as Router,
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
              path="/tool/credit_checker"
              element={
                <Tool
                  text={"Credit_\nChecker"}
                  desc={
                    "ユニパからダウンロードした 成績表 PDFファイルを読み込むと，自動で不足単位数や修得進捗，GPA表示してくれます．現在は情報と経済学部に対応しています．"
                  }
                  PTime={"2週間"}
                  color={["#79a4d3", "#4e6292", "#0a2d53"]}
                  func={0}
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
                  color={["#36b6c6", "#12387a", "#0d4850"]}
                  func={1}
                />
              }
            />
            <Route
              path="/tool/online_Form"
              element={
                <Tool
                  text={"Online_\nForm"}
                  desc={
                    "大学内生徒限定の掲示板です．現在開発中でスレッド作成ができません．DBの変更とReactに対応させます．"
                  }
                  // color={["#c37ebc", "#7667b6", "#400239"]}
                  PTime={"3ヶ月"}
                  color={["#ff9cf5", "#ff7eb3", "#400239"]}
                  func={2}
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
                />
              }
            />
            <Route
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
                />
              }
            />
            <Route
              path="/tool/portfolio"
              element={
                <Tool
                  text={"My_\nPortfolio"}
                  desc={"私のポートフォリオを作成しました．"}
                  PTime={"2週間"}
                  color={["#d5b6f8", "#b8cce8", "#3d1b65"]}
                  func={5}
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