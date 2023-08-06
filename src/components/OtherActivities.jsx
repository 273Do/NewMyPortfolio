import React from "react";
import WorkList from "./WorkList";
import imgPass0 from "../images/OtherAct/oa1.png";
import imgPass1 from "../images/OtherAct/oa2.png";
import imgPass2 from "../images/OtherAct/oa3.png";
import imgPass3 from "../images/OtherAct/oa4.png";
import imgPass4 from "../images/OtherAct/oa5.png";
import imgPass5 from "../images/OtherAct/oa6.png";
import imgPass6 from "../images/OtherAct/oa7.png";
import imgPass7 from "../images/OtherAct/oa8.png";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import PageTransition from "../utils/PageTransition";

const OtherActivities = () => {
  const { theme, setTheme } = useTheme();
  return (
    <PageTransition BGColor={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="header_space"></div>
        <div className="main_contents">
          <div className="page_desc">
            <p>Other_Activities</p>
            <p>以下は趣味一覧です．色々なことに手を出しています．</p>
          </div>

          <div className="work_list OA">
            <ul>
              {OtherActivitiesList.map((OAdata) => (
                <WorkList
                  id={OAdata.id}
                  title={OAdata.title}
                  imgPass={OAdata.imgPass}
                />
              ))}
            </ul>
            <div className="mobile_space"></div>
          </div>

          <div className="tool_desc">
            <p>
              私が所属する登録団体の勧誘ポスターや宣伝ポスターの制作をしています．また，数人の友人とマイコンを用いてプラモデルの無線化に取り組んだんりしています．
            </p>
          </div>
        </div>
        <div className="footer_space"></div>
      </motion.div>
    </PageTransition>
  );
};

export default OtherActivities;

const OtherActivitiesList = [
  { id: "oa1", title: "登録団体：宣伝ポスター(文字なし)", imgPass: imgPass0 },
  {
    id: "oa2",
    title: "登録団体：イベントポスター",
    imgPass: imgPass1,
  },
  {
    id: "oa3",
    title: "ピアノ",
    imgPass: imgPass2,
  },
  {
    id: "oa4",
    title: "写真：カラーグレーディング",
    imgPass: imgPass3,
  },
  {
    id: "oa5",
    title: "AviUtl，Blenderを用いた映像制作",
    imgPass: imgPass4,
  },
  {
    id: "oa6",
    title: "Figma，Stable Diffusion：Webデザイン",
    imgPass: imgPass5,
  },
  {
    id: "oa7",
    title: "プラモデル無線化：組み立て&実装",
    imgPass: imgPass6,
  },
  { id: "oa7", title: "プラモデル無線化：テスト", imgPass: imgPass7 },
];
