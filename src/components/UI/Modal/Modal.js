import React from 'react';

import Form from '../../Form/Form';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const modal = props => {
    const suggest = (
        <p className="text-muted mx-auto">
                Don't have an account?{' '}
                <NavLink to="/signup" className="text-primary">
                    Sign Up here
                </NavLink>
            </p>
    );
    return (
        <div className="modal fade" id={props.id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header text-uppercase">
                        <h5 className="modal-title"> {props.title} </h5>
                        <button className="close" data-dismiss="modal"> &times; </button>
                    </div>
                    <div className="modal-body">
                        <Form {...props}  />
                    </div>
                    <div className="modal-footer">
                        <Button
                            type="submit"
                            title={props.title}
                            cls="btn btn-primary w-100 text-white text-center"
                        />
                        {suggest}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default modal;