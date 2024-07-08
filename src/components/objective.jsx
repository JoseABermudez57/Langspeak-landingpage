import React from "react";

export const Objective = (props) => {
  return (
    <div id="objective" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Objective</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                  {" "}
                  <div className="card">
                    <div className="card-image">
                      <img src={d.image} alt="" />
                    </div>
                    <div className="card-content">
                      <h3>{d.title}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
