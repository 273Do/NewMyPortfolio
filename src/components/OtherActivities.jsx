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
import { motion } from "framer-motion";
import PageTransition from "../utils/PageTransition";

const OtherActivities = () => {
  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="header_space"></div>
        <div className="main_contents">
          <div className="page_desc">
            <p>Other_Activities</p>
            <p>These are my hobbies. I do many things.</p>
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
          </div>

          <div className="tool_desc">
            <p>
              I am making posters for the registered organizations that I belong
              to, as well as promotional posters. I am working with several
              friends to make a plastic model wireless using a microcomputer.
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
    title: "ピアノ環境",
    imgPass: imgPass2,
  },
  {
    id: "oa4",
    title: "写真：カラーグレーディング",
    imgPass: imgPass3,
  },
  {
    id: "oa5",
    title: "Blenderを用いた映像制作",
    imgPass: imgPass4,
  },
  {
    id: "oa6",
    title: "Figma，Stable Diffusion：Webデザイン制作",
    imgPass: imgPass5,
  },
  {
    id: "oa7",
    title: "プラモデル無線化：組み立て&実装",
    imgPass: imgPass6,
  },
  { id: "oa7", title: "プラモデル無線化：テスト", imgPass: imgPass7 },
];
