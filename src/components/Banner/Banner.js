import React from "react";
import {Fade} from "react-reveal";
import "./Banner.css";

//Maybes
import landingPerson from "../../assets/images/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

import {illustration, banner} from "../../content";

function Banner() {
  if (!banner.displayBanner) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="banner">
        <div className="banner-main">
          <div className="banner-text-div">
            <div>
              <h1
                className="banner-text"
              >
                {" "}
                {banner.title}{" "}
              </h1>
              <p
                className="banner-text-p subTitle"
              >
                {banner.subTitle}
              </p>
            </div>
          </div>
          <div className="banner-image-div">
          {illustration.animated ? (
          <DisplayLottie animationData={landingPerson} />
        ) : (
          <img
            alt="man sitting on table"
            src={require("../../assets/images/manOnTable.svg")}
          ></img>
        )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Banner;
