import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_college_details">
        <div className="header_college_details_left">
          <img
            className="header_college_details_left_logo"
            src="https://t3.ftcdn.net/jpg/07/60/14/42/360_F_760144234_Kuqy2vR9ZSfoGPP4bL3q8cFEauJn6QsT.jpg"
            alt="logo_img"
          />
        </div>
        <div className="header_college_details_name">
          MHR Institute of Technology
        </div>
        <div className="header_college_details_place">Pakistan, Karachi</div>
      </div>
    </div>
  );
};

export default Header;

// 46:10
