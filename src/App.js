import { auth } from 'adapters/firebase';
import Header from 'containers/Header/Header';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Routes from 'routes';
import * as actions from 'store/actions';
import 'styles/app.scss';
import 'styles/custom.scss';
import Footer from 'views/Footer/Footer';
import Layout from './hoc/Layout/Layout';

const App = (props) => {
    const { onAuthStateChanged } = props;
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const data = {
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                    isAuthenticated: true,
                };
                onAuthStateChanged(data);
            } else {
                onAuthStateChanged({ isAuthenticated: false });
            }
        });
    }, [onAuthStateChanged]);
    return (
        <>
            <Header />
            <Layout>
                <Routes />
            </Layout>
            <Footer />
        </>
    );
};

const mapStateToProps = (state) => ({ user: state.auth.user });

const mapDispatchToProps = (dispatch) => ({
    onAuthStateChanged: (user) => dispatch(actions.authStateChanged(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
