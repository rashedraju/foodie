import styled from 'styled-components';
import signupBG from 'assets/svg/signup-bg.svg';

export const StyledSignupBg = styled.div`
    flex: 1;
    background-image: url(${signupBG});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

export const SignupWrapper = styled.div`
    flex: 1;
`;
