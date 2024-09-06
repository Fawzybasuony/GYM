
import React from "react";

export default function Slidar() {


  return (
    <>
      <div className="main-banner" id="top">
        <video autoPlay  id="bg-video">
          <source
            src="/img/WhatsApp Video 2024-06-13 at 4.37.24 PM.mp4"
            type="video/mp4"
          />
        </video>

        <div className="video-overlay header-text" >
          <div className="caption">
           <div data-aos="zoom-out">
             <h6>
               work harder , get <em className="text-danger">stronger</em>
             </h6>
             <h2>
               It's easy in the Star <em>gym</em>
             </h2>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}
