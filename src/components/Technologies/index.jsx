import React, { useEffect, useState } from "react";
import "./styles/ihover.css";
import images from "./images/images.json";

function Technologies() {
  const [charge, setCharge] = useState([]);

  useEffect(() => {
    setCharge(images.images);
  }, []);

  return charge.length > 0 ? (
    <div className="centerAll" id="SKILLS">
      <div className="subtitle">Skills</div>
      <h3 className="h3">TECHNOLOGIES</h3>
      <div className="row box">
        {charge.map((item, index) => {
          return (
            <>
              <div className="col imgSmall">
                <img src={item.imgColor} alt="img"/>
              </div>
              <div className="col-sm-2 flexCenter" key={index}>
                <div className="ih-item circle effect3 left_to_right">
                  <a href="#">
                    <div className="img">
                      <img src={item.imgBW} alt="img" className="first" />
                      <img src={item.imgColor} alt="img" className="second" />
                    </div>
                    <div className="info">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Technologies;
