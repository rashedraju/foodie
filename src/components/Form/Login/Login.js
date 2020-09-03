import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';

const login = () => (
    <Aux>
        <div className="form-group">
            <input type="email" placeholder="Email" className="form-control"></input>
        </div>
        <div className="form-group">
            <input type="password" placeholder="Password" className="form-control"></input>
        </div>
    </Aux>
)

export default login;