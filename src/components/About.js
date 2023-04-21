import React from "react";
import Links from "./Links";



function About({bio, links}) {
  
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {bio === '' ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <p>{/* add your <Links /> component here */<Links github={links.github} linkedin={links.linkedin} />}</p>
    </div>
  );
}

export default About;
