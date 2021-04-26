import { database } from 'adapters/firebase';
import Loader from 'components/UI/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MyOrderItems from 'views/MyOrderItems/MyOrderItems';
import styles from './MyOrders.module.scss';

const MyOrders = ({ isAuthenticated, uid }) => {
    const history = useHistory();
    const [myOrders, setMyOrders] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) history.replace('./');

        setLoading(true);
        const myOrdersRef = database.ref('orders');
        myOrdersRef
            .orderByChild('id')
            .equalTo(uid)
            .on('value', (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const newOrderObj = {
                        orderItems: [],
                    };
                    Object.keys(data).forEach((key) => {
                        newOrderObj.orderItems = [
                            ...newOrderObj.orderItems,
                            ...data[key].orderItems,
                        ];
                    });
                    setMyOrders(newOrderObj);
                }
            });
    }, [history, isAuthenticated, uid]);

    let orders;
    if (loading) orders = <Loader />;
    if (myOrders)
        orders = (
            <>
                <MyOrderItems items={myOrders.orderItems} />
            </>
        );

    return <section className={`container my-3 ${styles.myOrders}`}>{orders}</section>;
};

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.user.isAuthenticated,
    uid: auth.user.uid,
});
export default connect(mapStateToProps)(MyOrders);
