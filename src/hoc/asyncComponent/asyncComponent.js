import Loader from 'components/UI/Loader/Loader';
import React, { Component } from 'react';

const asyncComponent = (importComponent) =>
    class extends Component {
        state = {
            component: null,
            loading: false,
        };

        componentDidMount() {
            this.setState({ loading: true });
            importComponent()
                .then((cmp) => {
                    this.setState({ component: cmp.default });
                    this.setState({ loading: false });
                })
                .catch(() => this.setState({ loading: false }));
        }

        render() {
            const { component, loading } = this.state;
            const C = component;
            const loader = loading ? <Loader /> : null;

            return C ? <C {...this.props} /> : loader;
        }
    };
export default asyncComponent;
