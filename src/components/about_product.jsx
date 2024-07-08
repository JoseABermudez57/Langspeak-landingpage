import React from "react";

export const AboutProduct = (props) => {
  return (
    <div id="aboutProduct">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Langspeak</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/Langspeak_logo.png" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
