import React from "react";
import "./ScrollUp.css";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  
  return (
    /* eslint-disable */
    <a href="#" className="scrollup">
      <KeyboardDoubleArrowUpIcon className="scrollup-icon" />
    </a>
  );
};

export default ScrollUp;
