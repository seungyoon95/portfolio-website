import React from "react";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Web = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Web-related</h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">JavaScript</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">NodeJS</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>
          
          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">CSS</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">React</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">HTML</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills-data">
            <WorkspacePremiumIcon />

            <div>
              <h3 className="skills-name">Firebase</h3>
              {/* <span className="skills-level">Intermediate</span> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Web;
