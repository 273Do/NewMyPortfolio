import React from "react";
import Cc from "../images/CreditChecker.png";
import Fg from "../images/FormulaGenerator.png";
import Of from "../images/OnlineForm.png";
import Th from "../images/Thor.png";
import S from "../images/SOMETAROKAIcon.png";
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
            <Link to="/tool/thor">
              <img src={Th} alt="Thor" />
            </Link>
          </li>
          <li>
            <Link to="/tool/sometaroka">
              <img src={S} alt="SOMETAROKA" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ToolList;
