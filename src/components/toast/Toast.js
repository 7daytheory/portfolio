import React from "react";
import "./Toast.css";

export default function Toast() {
  var alertmsg = document.querySelector("#alert_msg");
	alertmsg.innerText = message;
	alertmsg.classList.add("show");
	if (isError)
   	{
      alertmsg.classList.add("error");
   }
  	setTimeout(function(){ alertmsg.classList.remove("show"); if (isError) {alertmsg.classList.remove("error");} }, 3000);
	}
}

export default Toast;