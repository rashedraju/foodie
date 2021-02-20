import React from 'react';

import { Modal as BSModal } from 'react-bootstrap';
import styles from './Modal.module.scss';

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
        <BSModal show={props.show} onHide={props.setClose} className={styles.modal}>
            <div className={styles.close} onClick={props.setClose}>
                <button className={styles['close-btn']} onClick={props.setClose}></button>
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