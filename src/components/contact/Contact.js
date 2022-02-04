import React from "react";
import "./Contact.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import {contactInfo} from "../../content";
import {Fade} from "react-reveal";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className="subTitle contact-subtitle"
            >
              {contactInfo.subtitle}
            </p>
            <form
	  		className="contact_form"
	  		id="form"
	  		method="post"
	  		action="send.php"
	  		>
	  		
	  		<label for="name">
	  		Name
	  		</label><br />
	  
	  		<input
	  		className="contact_input"
	  		id="name"
	  		name="name"
	  		type="text"
	  		placeholder="Your Name"
	  		required
	  		/><br />
	  		
	  		<label for="email">
	  		Email Address
	  		</label><br />
	  	
	  		<input
	  		className="contact_input"
	  		id="email"
	  		name="email"
	  		type="email"
	  		placeholder="example@domain.com"
	  		required
	  		/><br />
	  		
	  		<label for="name">
	  		What can I help you with?
	  		</label><br />
	  		
	  		<textarea
	  		classname="contact_textarea"
	  		id="comments"
	  		name="comments"
	  		placeholder="Comments..."
	  		required
	  		>
	  		</textarea>
	  		<br />
	  		<input
	  		className="contact_btn"
	  		type="submit"
	  		value="SUBMIT"
	  		/>
	  		
	  
	  		</form>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
        </div>
    </Fade>
  );
}
