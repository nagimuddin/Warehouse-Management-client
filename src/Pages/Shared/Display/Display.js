import React from 'react';
import './Display.css';
import displayImg1 from '../../../images/display-img-1.jpg';
import displayImg2 from '../../../images/display-img-2.jpg';
import displayImg3 from '../../../images/display-img-3.jpg';
import displayImg4 from '../../../images/display-img-4.jpg';

const Display = () => {
    return (
        <div className="display-section">
            <div className="container">
                <div className="display-title">
                    <h2>Display Items</h2>
                </div>
                <div className="row gx-0">
                    <div className="col-md-3">
                        <div className="display">
                            <img src={displayImg1} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="display">
                            <img src={displayImg2} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="display">
                        <img src={displayImg3} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="display">
                        <img src={displayImg4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Display;