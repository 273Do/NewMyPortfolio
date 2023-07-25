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
        <Route path="/movie" element={<Movie />} />
        <Route path="/design" element={<Design />} />
        <Route
          path="/club_other_activities"
          element={<ClubOtherActivities />}
        />
        {/* ページごとに変数を追加してルーティング設定を行う */}
        <Route
          path="/tool/credit_checker"
          element={
            <Tool
              toolNameF={"Credit_"}
              toolNameL={"Checker"}
              desc={
                "ユニパからダウンロードした 成績表 PDFファイルを読み込むと，自動で不足単位数や修得進捗，GPA表示してくれます．現在は情報と経済学部に対応しています．"
              }
              color={["#79a4d3", "#4e6292"]}
            />
          }
        />
        <Route
          path="/tool/formula_generator"
          element={
            <Tool
              toolNameF={"Formula_"}
              toolNameL={"Generator"}
              desc={
                "ボタンで操作する数式生成ツールです．wordの数式の書式にも対応できる機能もあります．"
              }
              color={["#36b6c6", "#537eb8"]}
            />
          }
        />
        <Route
          path="/tool/online_Form"
          element={
            <Tool
              toolNameF={"Online_"}
              toolNameL={"Form"}
              desc={
                "大学内生徒限定の掲示板です．現在開発中でスレッド作成ができません．DBの変更とReactに対応させます．"
              }
              color={["#c37ebc", "#7667b6"]}
            />
          }
        />
        <Route
          path="/tool/project_thor"
          element={
            <Tool
              toolNameF={"Project_"}
              toolNameL={"Thor"}
              desc={"私の研究内容を更新していく予定です．"}
              color={["#ffa680", "#c6578b"]}
            />
          }
        />
        <Route
          path="/tool/sometaroka"
          element={
            <Tool
              toolNameF={"SOME"}
              toolNameL={"TAROKA_"}
              desc={
                "４つの大学と合同でアプリを開発中．ミライケータイプロジェクトの中の一つである”SOMETAROKA”の開発に参加した．方言にフォーカスした新感覚SNSである．"
              }
              color={["#f945f9", "#7e36ff"]}
            />
          }
        />
      </Routes>
    </Router>
  </>
);
