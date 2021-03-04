import React, { PureComponent, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';

import './styles/app.scss';

import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Loader/Loader';

import LandingPage from './containers/LandingPage/LandingPage';

const Signup = React.lazy(() => import('./containers/Signup/Signup'));
const Cart = React.lazy(() => import('./containers/Cart/Cart'));
const Search = React.lazy(() => import('./containers/Search/Search'));

class App extends PureComponent {
  componentDidMount() {
    this.props.onGetSession()
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
            ;
            <Route
              path="/cart"
              render={(props) => (
                <Suspense fallback={<Spinner />}>
                  <Cart {...props} />
                </Suspense>
              )}
            />
            ;
            <Route
              path="/search"
              render={(props) => (
                <Suspense fallback={<Spinner />}>
                  <Search {...props} />
                </Suspense>
              )}
            />
            <Route path="/" exact component={LandingPage} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetSession: () => dispatch(actions.getSession())
})

export default connect(null, mapDispatchToProps)(App);
