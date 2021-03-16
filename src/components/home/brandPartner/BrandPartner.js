import React from 'react';
import './BrandPartner.css';
import Google from '../../../images/logos/google.png';

const brandPartner = () => {
    return (
        <div>
            <section id="brand-showcase">
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="img-fluid brand-img" src={Google} alt="brand-image"/>
                </div>
                <div className="col">
                    <img className="img-fluid brand-img" src={Google} alt="brand-image"/>
                </div>
                <div className="col">
                    <img className="img-fluid brand-img" src={Google} alt="brand-image"/>
                </div>
                <div className="col">
                    <img className="img-fluid brand-img" src={Google} alt="brand-image"/>
                </div>
                <div className="col">
                    <img className="img-fluid brand-img" src={Google} alt="brand-image"/>
                </div>

            </div>
        </div>

    </section>
        </div>
    );
};

export default brandPartner;