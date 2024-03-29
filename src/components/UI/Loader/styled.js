import styled, { keyframes } from 'styled-components';

const loaderRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const StyledLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: #fff;
    box-shadow: 2px 2px 5px #333;
    border-radius: 50%;
    margin: 0 auto;
    div {
        box-sizing: border-box;
        position: absolute;
        width: 32px;
        height: 32px;
        border: 3px solid #fff;
        border-radius: 50%;
        animation: ${loaderRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #d60e64 transparent transparent transparent;

        :nth-child(1) {
            animation-delay: -0.45s;
        }
        :nth-child(2) {
            animation-delay: -0.3s;
        }
        :nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`;
