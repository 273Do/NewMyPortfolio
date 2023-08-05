import React from "react";
import { MO, OA } from "./Preview";

const WorkList = ({ id, title, imgPass }) => {
  const preview = () => {
    if (id[0] == "m") MO(id);
    else OA(imgPass);
  };

  return (
    <li>
      <img src={imgPass} alt={id} onClick={() => preview()} />
      <p>{title}</p>
    </li>
  );
};

export default WorkList;
