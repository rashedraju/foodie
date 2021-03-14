import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './adapters/fontawesome';
import Spinner from './components/UI/Loader/Loader';
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions';
import './styles/app.scss';
import './styles/custom.scss';

const Signup = React.lazy(() => import('./containers/Signup/Signup'));
const Cart = React.lazy(() => import('./containers/Cart/Cart'));
const Search = React.lazy(() => import('./containers/Search/Search'));

class App extends PureComponent {
    componentDidMount() {
        const { onGetSession } = this.props;
        onGetSession();
    }

    render() {
        return (
            <Router basename="/foodie">
                <Layout>
                    <Switch>
                        <Route
                            path="/signup"
                            render={(props) => (
                                <Suspense fallback={<Spinner />}>
                                    <Signup {...props} />
                                </Suspense>
                            )}
                        />
                        <Route
                            path="/cart"
                            render={(props) => (
                                <Suspense fallback={<Spinner />}>
                                    <Cart {...props} />
                                </Suspense>
                            )}
                        />
                        <Route
                            path="/search"
                            render={(props) => (
                                <Suspense fallback={<Spinner />}>
                                    <Search {...props} />
                                </Suspense>
                            )}
                        />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetSession: () => dispatch(actions.getSession()),
});

export default connect(null, mapDispatchToProps)(App);
