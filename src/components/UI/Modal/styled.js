import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
    z-index: 99999;
    > :first-child {
        > :first-child {
            background-position: center;
            background-size: cover;
            background-position: bottom;
            &-content {
                position: relative;
            }
        }
    }
`;

export const Close = styled.div`
    position: absolute;
    top: 2%;
    right: 2%;
    cursor: pointer;
    z-index: 99999;

    &-btn {
        border: none;
        position: relative;
        transform: rotate(45deg);
        transition: all 0.2s linear;
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            transform: rotate(90deg) translate(-33%);
        }
    }
    &-btn,
    &-btn::after {
        width: 1.5rem;
        height: 0.1rem;
        background: ${({ theme }) => theme.color.secondary};
        margin: 0.5rem 0;
    }
    &:hover &-btn {
        background: ${({ theme }) => theme.color.light};
        &::after {
            background: ${({ theme }) => theme.color.light};
        }
    }
`;
