import React from 'react';
import './Resume.css';

import SocialMedia from "../SocialMedia/SocialMedia";
import Button from "../Button/Button";
import {banner} from "../../content";

const Resume = () => {
  return (
    <div className="resume_wrap">
    <SocialMedia />
      <div className="contact_wrap">
      <Button text="Contact me" href="#contact" />
      <Button
        text="See my resume"
        newTab={true}
        href={banner.resumeLink}
      />
      </div>
    </div>
    )
}

export default Resume;