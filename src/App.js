import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/sass/main.scss';
import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Loader/Loader';

import LandingPage from './containers/LandingPage/LandingPage';

const Signup = React.lazy(() => import('./components/Form/Form'));
const Cart = React.lazy(() => import('./containers/Cart/Cart'));
const Search = React.lazy(() => import('./containers/Search/Search'));

class App extends Component {
    render() {
        return (
            <Router basename="/goodie">
                <Layout>
                    <Switch>
                        <Route path="/signup" render={(props) =>
                            <Suspense fallback={<Spinner />}>
                                <Signup {...props} type='signup' />
                            </Suspense>} />;

                        <Route path="/cart" render={(props) =>
                            <Suspense fallback={<Spinner />}>
                                <Cart {...props} />
                            </Suspense>} />;

                        <Route path="/search" exact render={(props) =>
                            <Suspense fallback={<Spinner />}>
                                <Search {...props} />
                            </Suspense>} />
                        <Route path='/' exact component={LandingPage} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
