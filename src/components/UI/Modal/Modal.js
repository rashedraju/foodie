import React from 'react';
import { StyledModal } from './styled';

const Modal = (props) => {
    const { show, setClose, children } = props;
    return (
        <StyledModal centered show={show} onHide={setClose}>
            <StyledModal.Body> {children} </StyledModal.Body>
        </StyledModal>
    );
};

export default Modal;
