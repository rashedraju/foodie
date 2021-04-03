import Home from 'containers/Home/Home';
import asyncComponent from 'hoc/asyncComponent/asyncComponent';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = ({ isAuthenticated }) => {
    const asyncSearch = asyncComponent(() => import('containers/Search/Search'));
    const asyncSignup = asyncComponent(() => import('containers/Signup/Signup'));
    const asyncCheckout = asyncComponent(() => import('containers/Checkout/Checkout'));
    const asyncMyOrders = asyncComponent(() => import('containers/MyOrders/MyOrders'));

    let routes = (
        <Switch>
            <Route path="/search" component={asyncSearch} />
            <Route exact path="/" component={Home} />
            <Redirect to="./" />
        </Switch>
    );
    if (isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/checkout" component={asyncCheckout} />
                <Route path="/my-orders" component={asyncMyOrders} />
                <Route path="/search" component={asyncSearch} />
                <Route exact path="/" component={Home} />
                <Redirect to="./" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/signup" component={asyncSignup} />
                <Route path="/search" component={asyncSearch} />
                <Route exact path="/" component={Home} />
                <Redirect to="./" />
            </Switch>
        );
    }

    return <Suspense>{routes}</Suspense>;
};

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.user.isAuthenticated,
});

export default connect(mapStateToProps)(Routes);
