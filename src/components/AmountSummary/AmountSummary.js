import React from 'react';

const AmountSummary = ({ price }) => {
    const amountSummary = [
        [1, 'Subtotal', price.subTotal],
        [2, 'Delivery fee', price.deliveryFee],
        [3, 'VAT', price.vat],
        [4, 'Total(incl. VAT)', price.total],
    ].map((el, idx, arr) => (
        <dl className="d-flex justify-content-between mb-0 mx-2 px-2" key={el[0]}>
            <dt className={`mb-0 font-weight-${idx !== arr.length - 1 ? 'light' : 'bold'}`}>
                {el[1]}
            </dt>
            <dd className={idx === arr.length - 1 ? 'font-weight-bold' : ''}>
                ${el[2].toFixed(2)}
            </dd>
        </dl>
    ));
    return amountSummary;
};

export default AmountSummary;
