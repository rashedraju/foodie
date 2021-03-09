import React from 'react';
import ficon1 from '../../../assets/img/ic_Food_Feature_1.png';
import ficon2 from '../../../assets/img/ic_Food_Feature_2.png';
import ficon3 from '../../../assets/img/ic_Food_Feature_3.png';

const feature = () => {
    const featureItem = [
        {
            id: 0,
            img: ficon1,
            title: 'Select and set your food',
            details: 'Select the food you want from thousands of restaurants.',
        },
        {
            id: 1,
            img: ficon2,
            title: 'Confirm your order and wait',
            details:
                'Just confirm your order and enjoy our fastest delivery. Fresh and delicious food will be delivered to your doorstep.',
        },
        {
            id: 2,
            img: ficon3,
            title: 'Pay cashlesss for your food',
            details: 'Have no cash? No worries pay digitally instead of cash.',
        },
    ];

    // FEATURE ITEMS
    const featureElements = featureItem.map((el) => (
        <div className="col-md-4 p-2 mb-2 text-center" key={el.id}>
            <img src={el.img} alt={el.title} className="img-fluid" />
            <h3 className="text-black-50">{`0${el.id + 1}`}</h3>
            <h3>{el.title}</h3>
            <p className="text-muted mt-3">{el.details}</p>
        </div>
    ));
    return (
        <section className="feature py-5">
            <div className="container">
                <div className="row">{featureElements}</div>
            </div>
        </section>
    );
};
export default feature;
