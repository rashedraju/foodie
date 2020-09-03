import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Loader/Loader';

import Goodie from './containers/Goodie/Goodie';

/** RENDER COMPONENTS WHEN THEY WAKEUP ELSE THEY NEED TO SLEEP**/
const Signup = React.lazy(() => import('./components/Form/Form'));
const Cart = React.lazy(() => import('./containers/Cart/Cart'));
const Search = React.lazy(() => import('./components/Search/Search'));

class App extends Component {
    state = {
        auth: true
    }
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        {this.state.auth ? <Route path="/search" render={() =>
                            <Suspense fallback={<Spinner />}>
                                <Search />
                            </Suspense>} /> : null};

                        {this.state.auth ? <Route path="/signup" render={(props) =>
                            <Suspense fallback={<Spinner />}>
                                <Signup {...props} type='signup' />
                            </Suspense>} /> : null};

                        {this.state.auth ? <Route path="/cart" render={() =>
                            <Suspense fallback={<Spinner />}>
                                <Cart />
                            </Suspense>} /> : null};

                        <Goodie />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
