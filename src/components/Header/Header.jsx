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
          <div className="names">
            <div className="header_college_details_name">ایم ایچ ار</div>
            <div className="header_college_details_place">پاکستان، کراچی </div>
            <div className="header_college_details_name">MHR Institute...</div>
            <div className="header_college_details_place">
              Pakistan, Karachi
            </div>
          </div>
        </div>

        <div className="header_college_details_right">
          <div className="header_college_social_media">
            <a href="https://www.youtube.com/@codingzone05" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png"
                className="header_social_media_image"
                alt="youtube_logo"
              />
            </a>
            <a href="https://www.facebook.com/@MuhammadHassan" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                className="header_social_media_image"
                alt="facebook_logo"
              />
            </a>
            <a href="https://x.com/" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"
                className="header_social_media_image"
                alt="twitter_logo"
              />
            </a>
            <a
              href="https://www.instagram.com/@hassan._owais_555"
              target="_blank"
            >
              <img
                src="https://th.bing.com/th/id/OIP.0wjhvLpjGf_-r-1lqG3QAQHaHw?rs=1&pid=ImgDetMain"
                className="header_social_media_image"
                alt="instagram_logo"
              />
            </a>
          </div>
          <input type="text" className="header_input_tags" />
        </div>
      </div>
    </div>
  );
};

export default Header;
