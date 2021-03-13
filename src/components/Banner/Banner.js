import React from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Banner.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import Button from "../Button/Button";

//Maybes
import landingPerson from "../../assets/images/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

import {illustration, banner} from "../../content";

function Banner() {
  const {isDark} = false;
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
                className={isDark ? "dark-mode banner-text" : "banner-text"}
              >
                {" "}
                {banner.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode banner-text-p"
                    : "banner-text-p subTitle"
                }
              >
                {banner.subTitle}
              </p>
              <SocialMedia />
              <div className="button-banner-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={banner.resumeLink}
                />
              </div>
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
