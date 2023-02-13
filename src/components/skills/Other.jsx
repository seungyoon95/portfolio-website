import React from "react";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Other = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Other</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">Git</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">Linux</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>
          
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">Agile</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">Mobile</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Other;
