import React from "react";


function Links (props) {
    return(
        <div className = "about">
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.likedin}>{props.likedin}</a>

        </div>
    )
}
export default Links;
