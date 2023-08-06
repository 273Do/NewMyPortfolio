import React from "react";
import WorkList from "./WorkList";
import imgPass0 from "../images/movie/mw1.png";
import imgPass1 from "../images/movie/mw2.png";
import imgPass2 from "../images/movie/mw3.png";
import imgPass3 from "../images/movie/mw4.png";
import imgPass4 from "../images/movie/mw5.png";
import imgPass5 from "../images/movie/mw6.png";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import PageTransition from "../utils/PageTransition";

const Movie = () => {
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
            <p>Movie_</p>
            <p>制作した映像の一部です．YouTubeにて公開しています．</p>
          </div>

          <div className="work_list">
            <ul>
              {MovieData.map((Mdata) => (
                <WorkList
                  id={Mdata.id}
                  title={Mdata.title}
                  imgPass={Mdata.imgPass}
                />
              ))}
            </ul>
          </div>

          <div className="tool_desc">
            <p>
              稀に映像イベントにて別名義で制作した映像を出展しています．かっこいい，かわいい，シンプル，不気味などといったジャンルに縛られない様々な作風で制作しています．
            </p>
          </div>
        </div>
        <div className="footer_space"></div>
      </motion.div>
    </PageTransition>
  );
};

export default Movie;

const MovieData = [
  { id: "mw1", title: "個人制作まとめ", imgPass: imgPass0 },
  {
    id: "mw2",
    title: "【PVSF2022Sp】出展作品",
    imgPass: imgPass1,
  },
  {
    id: "mw3",
    title: "【第103回 限界映像大会】出展作品",
    imgPass: imgPass2,
  },
  {
    id: "mw4",
    title: "【PVSF Collaboration】合作参加作品",
    imgPass: imgPass3,
  },
  {
    id: "mw5",
    title: "【第30回 限界映像大会】出展作品",
    imgPass: imgPass4,
  },
  { id: "mw6", title: "【PVSF2022S】出展作品", imgPass: imgPass5 },
];
