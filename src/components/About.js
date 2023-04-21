import React from "react";
import Links from "./Links";



function About(props) {
  
  return (
    <div className="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <p>{props.bio}</p>
      <p>{/* add your <Links /> component here */<Links />}</p>
    </div>
  );
}

export default About;
