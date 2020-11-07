import React from 'react';

import ficon1 from '../../../assets/img/ic_Food_Feature_1.png';
import ficon2 from '../../../assets/img/ic_Food_Feature_2.png';
import ficon3 from '../../../assets/img/ic_Food_Feature_3.png';

const feature = () => {
    const featureItem = [
        {
            img: ficon1,
            title: 'Select and set your food',
            details: 'Select the food you want from thousands of restaurants.'
        },
        {
            img: ficon2,
            title: 'Confirm your order and wait',
            details: 'Just confirm your order and enjoy our fastest delivery. Fresh and delicious food will be delivered to your doorstep.'
        },
        {
            img: ficon3,
            title: 'Pay cashlesss for your food',
            details: 'Have no cash? No worries pay digitally instead of cash.'
        }
    ]

    // FEATURE ITEMS 
    let feature = featureItem.map((el, i) => (
        <div className="col-md-4 p-2 mb-2 text-center" key={i}>
            <img src={el.img} alt={el.title} className="img-fluid"></img>
            <h3 className="text-light">{`0${i + 1}`}</h3>
            <h3>{el.title}</h3>
            <p className="text-muted mt-3">{el.details}</p>
        </div>
    ));
    return (
        <section className="feature py-5">
            <div className="container">
                <div className="row">
                    {feature}
                </div>
            </div>
        </section>
    );
}
export default feature;