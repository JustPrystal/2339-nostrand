import { useState } from "react";

const Table = ({ data }) => {

  const [showFloorPlan, setShowFloorPlan] = useState({
    link: "",
    show: false,
  });

  const handleClickOnFloorPlan = (link) => {
    setShowFloorPlan({
      link: link,
      show: true,
    });
  };

  const closeModal = () => {
    setShowFloorPlan({
      link: "",
      show: false,
    });
  };


  return (
    <>
      <div className="table">
        <div className="inner">
          <div className="table-row table-head">
            <div className="residence cell head">Residence</div>
            <div className="bed-bath cell head">Type</div>
            <div className="price cell head">Price</div>
            <div className="three-d-tour cell head">3D Tour</div>
            <div className="tour3d cell head">Floor Plans</div>
          </div>
          {data.map((group, index) => (
            <div className="table-group" key={index}>
              {group.map((row, rowIndex) => {
                return (
                  <div className="table-row" key={rowIndex}>
                    <div className="residence cell">
                      <span className="mobile">Residence</span>
                      {row.residence}
                    </div>
                    <div className="bed-bath cell">
                      <span className="label mobile">Type</span>
                      {row.bedBath}
                    </div>
                    <div className="price cell">
                      <span className="label mobile">Price</span>${row.price}
                    </div>
                    <div className="three-d-tour cell">
                      <span className="label mobile">3D Tour</span>
                      {row.tour3d}
                    </div>
                    <div
                      className={
                        row.floorPlan ? "view floorplan cell" : "floorplan cell"
                      }
                      onClick={
                        row.floorPlan
                          ? () => handleClickOnFloorPlan(row.floorPlan)
                          : undefined
                      }
                    >
                      <span className="label mobile">Floor Plan</span>
                      {row.floorPlan ? "View" : "Coming Soon"}

                    </div>
                  </div>

                );
              })}
            </div>
          ))}
        </div>
      </div>
      {(showFloorPlan.show) && (
        <div className="show3d-modal availabilities-modal">
          <div className="inner">
            <div className="wrapper">
              <svg
                className="close-show3d-modal"
                onClick={closeModal}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19 5L4.99998 19M5.00001 5L19 19"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              {(showFloorPlan.show) && <img src={showFloorPlan.link} alt="floorplan" />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
