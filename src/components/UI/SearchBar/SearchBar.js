import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class SearchBar extends Component {
    state = {
        query: '',
        redirect: false
    }
    componentDidMount() {
        this.nameInput.focus();
    }
    render() {
        /** ON INPUT FIELD FOCUS --> REDIRECT TO /SEARCH PAGE */
        let rdirect = null;
        if (this.state.redirect) rdirect = <Redirect to="/search"></Redirect>;

        return (
            <Aux>
                {rdirect}
                <div className="row mx-0">
                    <div className="col-md-6 m-auto">
                        <div className="input-group">
                            <input type="text" placeholder="Search over million recipes" className="form-control text-muted search__field" onChange={(e) => this.setState({ query: e.target.value })} onClick={(el) => this.setState({ redirect: true })} ref={(input) => { this.nameInput = input }} ></input>

                            {/** CALL SEACHCONTROL METHOD WHEN CLICKED */}
                            <button type="button" className="btn btn-primary input-group-append text-white" onClick={() => this.props.clicked(this.state.query)}>Search</button>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}
export default SearchBar;