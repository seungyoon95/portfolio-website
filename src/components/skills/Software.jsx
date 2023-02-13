import React from "react";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Software = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Programming</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">Python</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">SQL</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>
          
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">Java</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">C</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Software;
