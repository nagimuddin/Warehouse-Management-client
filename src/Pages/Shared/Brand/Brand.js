import React from "react";
import "./Brand.css";
import brandImg1 from '../../../images/brand-img-1.png';
import brandImg2 from '../../../images/brand-img-2.png';
import brandImg3 from '../../../images/brand-img-3.png';
import brandImg4 from '../../../images/brand-img-4.png';
import brandImg5 from '../../../images/brand-img-5.png';

const Brand = () => {
  return (
    <div className="brand-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="brand">
                <img src={brandImg1} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="brand">
                <img src={brandImg2} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="brand">
                <img src={brandImg3} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="brand">
                <img src={brandImg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
