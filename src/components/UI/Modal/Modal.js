import React from 'react';
import { Modal as BSModal } from 'react-bootstrap';
import styles from './Modal.module.scss';

const Modal = (props) => {
    const { show, setClose, children } = props;
    return (
        <BSModal show={show} onHide={setClose} className={styles.modal}>
            <div className={styles.close} role="button" tabIndex="0" onClick={setClose}>
                <button type="button" className={styles['close-btn']} onClick={setClose} />
            </div>
            <BSModal.Body> {children} </BSModal.Body>
        </BSModal>
    );
};

export default Modal;
