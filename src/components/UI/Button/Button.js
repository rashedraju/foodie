import React from 'react';
import { Spinner } from 'react-bootstrap';
import { StyledButton, StyledButtonGroup } from './styled';

const Button = ({ loading, variant = 'primary', width = '', disabled, onClick, children }) => (
    <StyledButton variant={variant} width={width} onClick={onClick} disabled={disabled || loading}>
        {loading ? <Spinner as="span" role="status" animation="border" size="sm" /> : children}
    </StyledButton>
);

export const ButtonGroup = ({ justify, children }) => (
    <StyledButtonGroup justify={justify}> {children}</StyledButtonGroup>
);

export default Button;
