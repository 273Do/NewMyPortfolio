import React from "react";
import Cc from "../images/icon/CreditChecker.png";
import Fg from "../images/icon/FormulaGenerator.png";
import Of from "../images/icon/OnlineForm.png";
import Th from "../images/icon/Thor.png";
import S from "../images/icon/SOMETAROKAIcon.png";
import Mp from "../images/icon/MyPortfolio.png";
import { Link } from "react-router-dom";

const ToolList = () => {
  return (
    <div className="tool_list">
      <nav>
        <ul>
          <li>
            <Link to="/tool/credit_checker">
              <img src={Cc} alt="CreditChecker" />
            </Link>
          </li>
          <li>
            <Link to="/tool/formula_generator">
              <img src={Fg} alt="FormulaGenerator" />
            </Link>
          </li>
          <li>
            <Link to="/tool/online_Form">
              <img src={Of} alt="OnlineForm" />
            </Link>
          </li>
          <li>
            <Link to="/tool/project_thor">
              <img src={Th} alt="ProjectThor" />
            </Link>
          </li>
          <li>
            <Link to="/tool/sometaroka">
              <img src={S} alt="SOMETAROKA" />
            </Link>
          </li>
          <li>
            <Link to="/tool/portfolio">
              <img src={Mp} alt="MyPortfolio" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ToolList;
