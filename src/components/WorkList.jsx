import React from "react";

const WorkList = ({ id, title, imgPass }) => {
  return (
    <li>
      <img src={imgPass} alt={id} />
      <p>{title}</p>
    </li>
  );
};

export default WorkList;
