import React from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

const Info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <LocationOnOutlinedIcon className="about-icon" />
        <h3 className="about-title">In</h3>
        <span className="about-subtitle">Canada</span>
      </div>

      <div className="about-box">
        <SchoolOutlinedIcon className="about-icon" />
        <h3 className="about-title">Education</h3>
        <span className="about-subtitle">Diploma</span>
      </div>

      <div className="about-box">
        <EventAvailableOutlinedIcon className="about-icon" />
        <h3 className="about-title">Status</h3>
        <span className="about-subtitle">Available</span>
      </div>
    </div>
  );
};

export default Info;
