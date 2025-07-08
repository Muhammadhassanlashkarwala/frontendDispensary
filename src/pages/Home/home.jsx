import React from "react";
import "./home.css";
import HomeIcon from "@mui/icons-material/Home";

const Home = () => {
  return (
    <div className="home">
      <div className="home-block">
        <div className="home-left-page">
          <div className={`home-left-option`}>
            <HomeIcon /> About Us
          </div>
        </div>
        <div className="home-right-page">Right Side</div>
      </div>
    </div>
  );
};

export default Home;
