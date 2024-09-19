import React, { useState } from "react";
import "./Project.css";
import pennypilot from "../../assets/pennypilot.png";
import dailypost from "../../assets/dailypost.png";
import portfolio from "../../assets/seungyoon-lee.png";
import quickchat from "../../assets/quickchat.png";
import a_game from "../../assets/A_Game.png";
import electric from "../../assets/electricadvantage.png";
import evanescent from "../../assets/Evanescent.png";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FilterIcon from "@mui/icons-material/Filter";
import ChatIcon from "@mui/icons-material/Chat";
import BrushIcon from "@mui/icons-material/Brush";
import StorageIcon from "@mui/icons-material/Storage";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const Project = () => {
  const [toggleType, setToggleType] = useState(1);
  const [toggleState, setToggleState] = useState(0);

  const toggleTypeChange = (index) => {
    setToggleType(index);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="project section" id="projects">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">Most recent works</span>

      <div className="project-tabs">
        <div
          className={
            toggleType === 1
              ? "project-tab-button project-tab-active button--flex"
              : "project-tab-button button--flex"
          }
          onClick={() => toggleTypeChange(1)}
        >
          <PersonOutlineOutlinedIcon />
          Personal
        </div>
        <div
          className={
            toggleType === 2
              ? "project-tab-button project-tab-active button--flex"
              : "project-tab-button button--flex"
          }
          onClick={() => toggleTypeChange(2)}
        >
          <GroupsOutlinedIcon />
          Practicum
        </div>
      </div>

      <div className="project-container container ">
        <div className="project-sections grid">
          <div
            className={
              toggleType === 1
                ? "project-content project-content-active"
                : "project-content"
            }
          >
            <div>
              <RequestQuoteIcon className="project-icon" />
              <h3 className="project-title">PennyPilot</h3>
            </div>

            <img src={pennypilot} className="project-image" />

            <span className="project-button" onClick={() => toggleTab(1)}>
              More Info
              <ArrowForwardIcon className="project-button-icon" />
            </span>

            <div
              className={
                toggleState === 1
                  ? "project-modal active-modal"
                  : "project-modal"
              }
            >
              <div className="project-modal-content">
                <CloseIcon
                  onClick={() => toggleTab(0)}
                  className="project-modal-close"
                />

                <h3 className="project-modal-title">PennyPilot</h3>
                <p className="project-modal-description">
                  A budgeting web app to track income and expenses based on their corresponding categories.
                </p>

                <ul className="project-modal-projects grid">
                  <li className="project-modal-project">
                    <BrushIcon className="project-modal-icon" />
                    <p className="project-modal-info">
                      Frontend: Next.js, TypeScript, TailwindCSS, Clerk
                    </p>
                  </li>
                  <li className="project-modal-project">
                    <StorageIcon className="project-modal-icon" />
                    <p className="project-modal-info">
                      Backend: Next.js, TypeScript, Prisma
                    </p>
                  </li>

                  <li className="project-modal-project-links">
                    <a
                      href="https://penny-pilot-pi.vercel.app"
                      className="project-button"
                      target="_blank"
                    >
                      Go Live
                      <ArrowForwardIcon className="project-button-icon" />
                    </a>
                  </li>

                  <li className="project-modal-project-links">
                    <a
                      href="https://github.com/seungyoon95/PennyPilot-public"
                      className="project-button"
                      target="_blank"
                    >
                      Source code
                      <ArrowForwardIcon className="project-button-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={
              toggleType === 1
                ? "project-content project-content-active"
                : "project-content"
            }
          >
            <div>
              <FilterIcon className="project-icon" />
              <h3 className="project-title">DailyPost</h3>
            </div>

            <img src={dailypost} className="project-image" />
           
            <span className="project-button" onClick={() => toggleTab(2)}>
              More Info
              <ArrowForwardIcon className="project-button-icon" />
            </span>

            <div
              className={
                toggleState === 2
                  ? "project-modal active-modal"
                  : "project-modal"
              }
            >
              <div className="project-modal-content">
                <CloseIcon
                  onClick={() => toggleTab(0)}
                  className="project-modal-close"
                />

                <h3 className="project-modal-title">DailyPost</h3>
                <p className="project-modal-description">
                  A social media platform where users can post an image & a
                  message, and others can like the post or add the user as a
                  friend.
                </p>

                <ul className="project-modal-projects grid">
                  <li className="project-modal-project">
                    <BrushIcon className="project-modal-icon" />
                    <p className="project-modal-info">
                      Frontend: React, Redux, CSS, MaterialUI
                    </p>
                  </li>
                  <li className="project-modal-project">
                    <StorageIcon className="project-modal-icon" />
                    <p className="project-modal-info">
                      Backend: NodeJS, Express, MongoDB
                    </p>
                  </li>

                  <li className="project-modal-project-links">
                    <a
                      href="https://github.com/seungyoon95/DailyPost"
                      className="project-button"
                      target="_blank"
                    >
                      Source code
                      <ArrowForwardIcon className="project-button-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={
              toggleType === 1
                ? "project-content project-content-active"
                : "project-content"
            }
          >
            <div>
              <ChatIcon className="project-icon" />
              <h3 className="project-title">QuickChat</h3>
            </div>

            <img src={quickchat} className="project-image" />
          
            <span className="project-button" onClick={() => toggleTab(3)}>
              More Info
              <ArrowForwardIcon className="project-button-icon" />
            </span>

            <div
              className={
                toggleState === 3
                  ? "project-modal active-modal"
                  : "project-modal"
              }
            >
              <div className="project-modal-content">
                <CloseIcon
                  onClick={() => toggleTab(0)}
                  className="project-modal-close"
                />

                <h3 className="project-modal-title">QuickChat</h3>
                <p className="project-modal-description">
                  A web-based chat app where users can enter the name of the
                  room to join, then chat with others who join the same room.
                  The user must sign in first with google, as the chat menu will
                  only appear when the user is signed in.
                </p>

                <ul className="project-modal-projects grid">
                  <li className="project-modal-project">
                    <BrushIcon className="project-modal-icon" />
                    <p className="project-modal-info">Frontend: React</p>
                  </li>
                  <li className="project-modal-project">
                    <StorageIcon className="project-modal-icon" />
                    <p className="project-modal-info">
                      Backend: NodeJS, Express, SocketIO, Firebase
                    </p>
                  </li>

                  <li className="project-modal-project-links">
                    <a
                      href="https://github.com/seungyoon95/QuickChat"
                      className="project-button"
                      target="_blank"
                    >
                      Source code
                      <ArrowForwardIcon className="project-button-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="project-sections grid">
          <div
            className={
              toggleType === 2
                ? "project-content project-content-active"
                : "project-content"
            }
          >
            <div>
              <FilterIcon className="project-icon" />
              <h3 className="project-title">Evanescent</h3>
            </div>

            <img src={evanescent} className="project-image" />

            <span className="project-button" onClick={() => toggleTab(4)}>
              More Info
              <ArrowForwardIcon className="project-button-icon" />
            </span>

            <div
              className={
                toggleState === 4
                  ? "project-modal active-modal"
                  : "project-modal"
              }
            >
              <div className="project-modal-content">
                <CloseIcon
                  onClick={() => toggleTab(0)}
                  className="project-modal-close"
                />

                <h3 className="project-modal-title">Evanescent</h3>
                <p className="project-modal-description">
                  Evanescent was created by four developers, which is a
                  marketplace designed for the creator who chooses to produce
                  small-batch / one-of-a-kind pieces that may only be produced
                  on a limited basis, and for the patron who is looking for a
                  rare item that very few others may be able to procure. This
                  will create interest for buyers by making them realize that
                  they will not be able to get certain items if they miss the
                  sale window.
                </p>

                <ul className="project-modal-projects grid">
                  <li className="project-modal-project">
                    <BrushIcon className="project-modal-icon" />
                    <p className="project-modal-info">
                      Frontend: HTML, CSS, JavaScript
                    </p>
                  </li>
                  <li className="project-modal-project">
                    <StorageIcon className="project-modal-icon" />
                    <p className="project-modal-info">
                      Backend: NodeJS, ClearDB, Firebase
                    </p>
                  </li>
                  <li className="project-modal-project-links">
                    <a
                      href="https://github.com/seungyoon95/Evanescent"
                      className="project-button"
                      target="_blank"
                    >
                      GitHub
                      <ArrowForwardIcon className="project-button-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={
              toggleType === 2
                ? "project-content project-content-active"
                : "project-content"
            }
          >
            <div>
              <ChatIcon className="project-icon" />
              <h3 className="project-title">Electric Advantage</h3>
            </div>

            <img src={electric} className="project-image" />

            <span className="project-button" onClick={() => toggleTab(5)}>
              More Info
              <ArrowForwardIcon className="project-button-icon" />
            </span>

            <div
              className={
                toggleState === 5
                  ? "project-modal active-modal"
                  : "project-modal"
              }
            >
              <div className="project-modal-content">
                <CloseIcon
                  onClick={() => toggleTab(0)}
                  className="project-modal-close"
                />

                <h3 className="project-modal-title">ElectricAdvantage</h3>
                <p className="project-modal-description">
                  Electric Advantage was a full-stack project created by five
                  developers for a local startup that wanted a website to
                  promote electric vehicles and have dealerships to post their
                  inventory. Dealers would first request dealer privileges to
                  the administrators (our client) and will get access to create
                  a listing upon approval. Customers would then be able to
                  search for a vehicle based on their preferences (price,
                  location, model, etc), and contact the dealer once they find
                  an appropriate vehicle for themselves. This website would act
                  as a hub where multiple dealers could have their listings
                  posted, similar to Autotrader or CarGurus but with electric
                  vehicles only.
                </p>

                <ul className="project-modal-projects grid">
                  <li className="project-modal-project">
                    <BrushIcon className="project-modal-icon" />
                    <p className="project-modal-info">Frontend: React, CSS</p>
                  </li>
                  <li className="project-modal-project">
                    <StorageIcon className="project-modal-icon" />
                    <p className="project-modal-info">
                      Backend: NodeJS, Express, MariaDB, Firebase
                    </p>
                  </li>
                  <li className="project-modal-project-links">
                    <a
                      href="https://github.com/seungyoon95/Electric-Advantage"
                      className="project-button"
                      target="_blank"
                    >
                      GitHub
                      <ArrowForwardIcon className="project-button-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={
              toggleType === 2
                ? "project-content project-content-active"
                : "project-content"
            }
          >
            <div>
              <WebAssetIcon className="project-icon" />
              <h3 className="project-title">A_Game</h3>
            </div>

            <img src={a_game} className="project-image" />

            <span className="project-button" onClick={() => toggleTab(6)}>
              More Info
              <ArrowForwardIcon className="project-button-icon" />
            </span>

            <div
              className={
                toggleState === 6
                  ? "project-modal active-modal"
                  : "project-modal"
              }
            >
              <div className="project-modal-content">
                <CloseIcon
                  onClick={() => toggleTab(0)}
                  className="project-modal-close"
                />

                <h3 className="project-modal-title">A_Game</h3>
                <p className="project-modal-description">
                  A_Game is a series of minigames designed by five developers
                  during the time of COVID-19. This website contains 8 different
                  games that can be played on the browser, which are aimed to
                  provide a fun way to educate users on safe practices regarding
                  the pandemic.
                </p>

                <ul className="project-modal-projects grid">
                  <li className="project-modal-project">
                    <BrushIcon className="project-modal-icon" />
                    <p className="project-modal-info">
                      Frontend: HTML, CSS, JavaScript
                    </p>
                  </li>
                  <li className="project-modal-project">
                    <StorageIcon className="project-modal-icon" />
                    <p className="project-modal-info">Backend: Firebase</p>
                  </li>
                  <li className="project-modal-project-links">
                    <a
                      href="https://github.com/seungyoon95/A_Game"
                      className="project-button"
                      target="_blank"
                    >
                      GitHub
                      <ArrowForwardIcon className="project-button-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
