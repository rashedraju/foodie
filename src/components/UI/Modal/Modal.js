import React from 'react';

import { Modal as BSModal } from 'react-bootstrap';
import './Modal.scss';

const Modal = props => {
    // const suggest = (
    //     <p className="text-muted mx-auto">
    //             Don't have an account?{' '}
    //             <NavLink to="/signup" className="text-primary" onClick={props.setClose}>
    //                 Sign Up here
    //             </NavLink>
    //         </p>
    // );
    return (
        <BSModal show={props.show} onHide={props.setClose}>
            <div className="modal__close" onClick={props.setClose}>
                <button className="modal__close-btn" onClick={props.setClose}></button>
            </div>
            <BSModal.Body> {props.children} </BSModal.Body>
            {/* <BSModal.Footer>
                <Button
                    type="submit"
                    title={props.title}
                    cls="btn btn-primary w-100 text-white text-center" />
                {suggest}
            </BSModal.Footer> */}
        </BSModal>
    );
}

export default Modal;