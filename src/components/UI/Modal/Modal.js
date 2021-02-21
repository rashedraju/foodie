import React from 'react';

import { Modal as BSModal } from 'react-bootstrap';
import styles from './Modal.module.scss';

const Modal = props => (
    <BSModal show={props.show} onHide={props.setClose} className={styles.modal}>
        <div className={styles.close} onClick={props.setClose}>
            <button className={styles['close-btn']} onClick={props.setClose}></button>
        </div>
        <BSModal.Body> {props.children} </BSModal.Body>
    </BSModal>
);

export default Modal;