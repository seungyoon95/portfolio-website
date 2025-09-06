import React, { useState } from "react";
import "./Bar.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Bar = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="bar section">
      <h2 className="section-title">Timeline</h2>
      <span className="section-subtitle">My Personal Journey</span>

      <div className="bar-container container">
        <div className="bar-tabs">
          <div
            className={
              toggleState === 1
                ? "bar-button bar-active button--flex"
                : "bar-button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <SchoolOutlinedIcon className="bar-active bar-icon" />
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "bar-button bar-active button--flex"
                : "bar-button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <WorkOutlineIcon className="bar-icon" />
            Experience
          </div>
        </div>

        <div className="bar-sections">
          <div
            className={
              toggleState === 1
                ? "bar-content bar-content-active"
                : "bar-content"
            }
          >
            <div className="bar-data">
              <div>
                <div className="bar-calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2025
                </div>
                <h3 className="bar-title">
                  Network Security Applications Development
                </h3>
                <span className="bar-subtitle">
                  BCIT, Bachelor of Science in Applied Computer Science
                </span>
              </div>

              <div>
                <span className="bar-rounder"></span>
                <span className="bar-line"></span>
              </div>
            </div>

            <div className="bar-data">
              <div></div>

              <div>
                <span className="bar-rounder"></span>
                <span className="bar-line"></span>
              </div>

              <div>
                <div className="bar-calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
                <h3 className="bar-title">Computer Systems Technology - Predictive Analytics</h3>
                <span className="bar-subtitle">BCIT, Diploma</span>
              </div>
            </div>

            <div className="bar-data">
              <div>
                <div className="bar-calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2017
                </div>
                <h3 className="bar-title">Audio Production Techniques</h3>
                <span className="bar-subtitle">Musitechnic, Certificate</span>
              </div>

              <div>
                <span className="bar-rounder"></span>
                <span className="bar-line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "bar-content bar-content-active"
                : "bar-content"
            }
          >
            <div className="bar-data">
              <div>
                <div className="bar-calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
                <h3 className="bar-title">Senior Player Support Agent</h3>
                <span className="bar-subtitle">Keywords Studios</span>
              </div>

              <div>
                <span className="bar-rounder"></span>
                <span className="bar-line"></span>
              </div>
            </div>

            <div className="bar-data">
              <div></div>

              <div>
                <span className="bar-rounder"></span>
                <span className="bar-line"></span>
              </div>

              <div>
                <div className="bar-calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
                <h3 className="bar-title">Player Support Agent</h3>
                <span className="bar-subtitle">Keywords Studios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bar;
