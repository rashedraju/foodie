import React from 'react';

import Button from '../../UI/Button/Button';

const signup = () => {
    const suggest = <p className="text-muted text-center">You have an account? <a href="/" data-toggle="modal" data-target="#loginModal" className="text-primary">Login</a></p>;
    return (
        <div className="card">
            <div className="card-header text-uppercase text-center">
                <h5 className="card-title text-uppercase text-success"> Register </h5>
            </div>
            <div className="card-body w-100 w-sm-50 mx-auto">
                <div className="form-group">
                    <input type="text" placeholder="First Name" className="form-control"></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Last Name" className="form-control"></input>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" className="form-control"></input>
                </div>
                <div className="form-group">
                    <input type="phone" placeholder="Phone" className="form-control"></input>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" className="form-control"></input>
                </div>
            </div>
            <div className="card-footer text-center">
                <Button
                    title="Register"
                    cls="btn btn-primary w-sm-50 w-100 text-white text-center"
                />
                {suggest}
            </div>
        </div>
    )
}

export default signup;