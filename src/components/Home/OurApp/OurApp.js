import React from 'react';

import playstoreIcon from '../../../assets/img/play-store.png';
import appstoreIcon from '../../../assets/img/play-store.png';

const ourApp = () => (
    <section className="py-3 bg-primary text-white">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h3>Download the food you love</h3>
                    <p className="py-2">It's all your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download us.</p>
                </div>
                <div className="col-sm-6 text-center align-self-center">
                    <a href="/">
                        <img src={playstoreIcon} alt="download from playstore"></img>
                    </a>
                    <a href="/">
                        <img src={appstoreIcon} alt="download from appstore"></img>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default ourApp;