import React from 'react';

import Input from '../../UI/Input/input';
import Button from '../../UI/Button/Button';

const signup = (props) => {
    return (
        <div className="card">
                <div className="card-header text-uppercase text-center">
                    <h5 className="card-title text-uppercase text-success">
                        SignUp
                    </h5>
                </div>
                <div className="card-body w-100 w-sm-50 mx-auto">
                    {[props.inputElement.map((el, i) => <Input config={el.config} key={i} value={el.value} changed={(e) => props.changed(e, el.key)} />)]}
                </div>
                <div className="card-footer text-center">
                    <Button
                        type="submit"
                        title='SignUp'
                        cls="btn btn-primary w-sm-50 w-100 text-white text-center"
                    />
                </div>
            </div>
    )
}

export default signup;