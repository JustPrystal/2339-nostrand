import React from "react";
export default function Tour3d({ link, close }) {
  return (
    <>

      <div className="background">
        <div className="inner">
          <div className="wrapper">
            <div className="close-btn">
              <svg className="close" onClick={close} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
              </svg>
            </div>
            <iframe title="tour3dViewer" width="853" height="480" className="Tourframe" src={link} frameBorder="0" allowFullScreen allow="xr-spatial-tracking">
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};


