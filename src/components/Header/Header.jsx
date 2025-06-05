import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_college_details">
        <div className="header_college_details_left">
          <img
            className="header_college_details_left_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoSWjMnaC7vczFUvPiXanhmgK-p3LignNfg&s"
            alt="logo_img"
          />
          <div>
            <div className="header_college_details_name">ایم ایچ ار</div>
            <div className="header_college_details_place">پاکستان، کراچی </div>
            <div className="header_college_details_name">
              MHR Institute of Technology,
            </div>
            <div className="header_college_details_place">
              Pakistan, Karachi
            </div>
          </div>
        </div>

        <div className="header_college_details_right">
          <a href="" target="_blank" className="header_social_media_image"></a>
          <a href="" target="_blank" className="header_social_media_image"></a>
          <a href="" target="_blank" className="header_social_media_image"></a>
          <a href="" target="_blank" className="header_social_media_image"></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
