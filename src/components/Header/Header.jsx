import React, { useState, useEffect } from "react";
import "./header.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  const [eventpopup, setEventpopup] = useState(false);
  const [helpline, setHelpline] = useState(false);

  const handleOpenPopup = (popup) => {
    if (popup === "event") {
      setEventpopup(true);
    } else {
      setHelpline(true);
    }
  };

  const handleClosePopup = (popup) => {
    if (popup === "event") {
      setEventpopup(false);
    } else {
      setHelpline(false);
    }
  };
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
            <a href="https://www.facebook.com/" target="_blank">
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
            <a href="https://www.instagram.com/" target="_blank">
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

      <div className="navbar">
        <div className="navbar_links">Home</div>
        <div className="navbar_links">Login</div>
        <div className="navbar_links">Stock View</div>
        <div
          className="navbar_links event_links"
          onMouseEnter={() => {
            handleOpenPopup("event");
          }}
          onMouseLeave={() => {
            handleClosePopup("event");
          }}
        >
          <div className="navbar_link_opt">
            New Events <ArrowDropDownIcon />
          </div>
          {eventpopup && (
            <div className="navbar_dropdown event_pop">
              <div className="popup_notification">
                . Celebration Eid-ul-Fitr Day
              </div>
              <div className="popup_notification">
                . Celebration Eid-ul-Adha Day
              </div>
            </div>
          )}
        </div>
        <div
          className="navbar_links event_links"
          onMouseEnter={() => {
            handleOpenPopup("events");
          }}
          onMouseLeave={() => {
            handleClosePopup("events");
          }}
        >
          <div className="navbar_link_opt">
            Helpline <ArrowDropDownIcon />
          </div>
          {helpline && (
            <div className="navbar_dropdown event_pop">
              <div className="popup_notification">. 24/7 Institute Open !</div>
              <div className="popup_notification">
                . Proper Management Service
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="header_banner">
        {/* <img
          src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/white-and-royal-blue-education-banner-template-9m8jbj82c00174.webp"
          alt="header_banner_image"
          className="header_banner_image"
        /> */}
      </div>
    </div>
  );
};

export default Header;
