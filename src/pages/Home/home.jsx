import React, { useState } from "react";
import "./home.css";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CollectionsIcon from "@mui/icons-material/Collections";
import About from "../../components/AboutUs/about";
import Staff from "../../components/Staffs/staff";
import Facilities from "../../components/Facilities/facilities";
import Nearbyhospitals from "../../components/NearByHospitals/nearbyhospitals";
import Gallery from "../../components/Gallery/gallery";
const Home = () => {
  const [page, setPage] = useState("About");
  let [rightSideHeader, setRightSideHeader] = useState("About Us");

  const handleChangeTab = (pagename) => {
    setPage(pagename);
    switch (pagename) {
      case "About":
        setRightSideHeader("About Us");
        break;
      case "Staff":
        setRightSideHeader("Our Staffs");
        break;
      case "Facilities":
        setRightSideHeader("Facilities");
        break;
      case "NearByHospitals":
        setRightSideHeader("Near By Hospitals");
        break;
      case "Gallery":
        setRightSideHeader("Gallery");
        break;
    }
  };

  const getComponent = () => {
    // return page === "About" ? <About /> : null;

    switch (page) {
      case "About":
        return <About />;

      case "Staff":
        return <Staff />;

      case "Facilities":
        return <Facilities />;

      case "NearByHospitals":
        return <Nearbyhospitals />;

      case "Gallery":
        return <Gallery />;

      default:
        return null;
    }
  };

  return (
    <div className="home">
      <div className="home-block">
        <div className="home-left-page">
          <div
            className={`home-left-option ${
              page === "About" ? "active-pop" : null
            }`}
            onClick={() => {
              handleChangeTab("About");
            }}
          >
            <HomeIcon /> About Us
          </div>
          <div
            className={`home-left-option ${
              page === "Staff" ? "active-pop" : null
            }`}
            onClick={() => {
              handleChangeTab("Staff");
            }}
          >
            <GroupIcon /> Staffs
          </div>
          <div
            className={`home-left-option ${
              page === "Facilities" ? "active-pop" : null
            }`}
            onClick={() => {
              handleChangeTab("Facilities");
            }}
          >
            <Diversity3Icon /> Facilities
          </div>
          <div
            className={`home-left-option ${
              page === "NearByHospitals" ? "active-pop" : null
            }`}
            onClick={() => {
              handleChangeTab("NearByHospitals");
            }}
          >
            <LocalHospitalIcon /> Nearby Hospitals
          </div>
          <div
            className={`home-left-option ${
              page === "Gallery" ? "active-pop" : null
            }`}
            onClick={() => {
              handleChangeTab("Gallery");
            }}
          >
            <CollectionsIcon /> Gallery
          </div>
        </div>
        <div className="home-right-page">
          <div className="home-right-header">{rightSideHeader}</div>
          <div className="home-right-section">{getComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
