import React from 'react';
import { DL, DT, DD } from './styled';

const AmountSummary = ({ price }) => {
    const amountSummary = [
        [1, 'Subtotal', price.subTotal],
        [2, 'Delivery fee', price.deliveryFee],
        [3, 'VAT', price.vat],
        [4, 'Total(incl. VAT)', price.total],
    ].map((el, idx, arr) => (
        <DL key={el[0]}>
            <DT isbold={idx === arr.length - 1}>{el[1]}</DT>
            <DD isbold={idx === arr.length - 1}>${el[2].toFixed(2)}</DD>
        </DL>
    ));
    return amountSummary;
};

export default AmountSummary;
