import React from 'react';
import './HeaderMain.css';
import Frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <div id="header-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="rightside-content">
                            <h1>
                                Let’s Grow Your
                                Brand To The
                                Next Level
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis
                                laoreet maecenas. Feugiat
                            </p>
                            <button>
                                Hire us
                            </button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="leftside-content">
                            <img className="img-fluid mx-auto d-flex" src={Frame} alt="framelogo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;