import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './sass/main.scss';
import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Loader/Loader';

import LandingPage from './containers/LandingPage/LandingPage';

const Signup = React.lazy(() => import('./components/Form/Form'));
const Cart = React.lazy(() => import('./containers/Cart/Cart'));
const Search = React.lazy(() => import('./containers/Search/Search'));

class App extends Component {
    state = {
        auth: true
    }
    render() {
        return (
            <Router basename="/goodie">
                <Layout>
                    <Switch>
                        {this.state.auth ? <Route path="/signup" render={(props) =>
                            <Suspense fallback={<Spinner />}>
                                <Signup {...props} type='signup' />
                            </Suspense>} /> : null};

                        {this.state.auth ? <Route path="/cart" render={() =>
                            <Suspense fallback={<Spinner />}>
                                <Cart />
                            </Suspense>} /> : null};

                        <Route path="/search" exact render={() =>
                            <Suspense fallback={<Spinner />}>
                                <Search />
                            </Suspense>} />
                        <Route path='/' exact component={LandingPage} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
