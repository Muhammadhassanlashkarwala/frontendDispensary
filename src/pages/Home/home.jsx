import React from "react";
import "./home.css";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CollectionsIcon from "@mui/icons-material/Collections";
const Home = () => {
  return (
    <div className="home">
      <div className="home-block">
        <div className="home-left-page">
          <div className={`home-left-option`}>
            <HomeIcon /> About Us
          </div>
          <div className={`home-left-option`}>
            <GroupIcon /> Staff
          </div>
          <div className={`home-left-option`}>
            <Diversity3Icon /> Facilities
          </div>
          <div className={`home-left-option`}>
            <LocalHospitalIcon /> Nearby Hospitals
          </div>
          <div className={`home-left-option`}>
            <CollectionsIcon /> Gallery
          </div>
        </div>
        <div className="home-right-page">
          <div className="home-right-header">About Us</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
