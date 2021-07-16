import styled, { css } from 'styled-components';

const BaseContainer = css`
    width: 100%;
    display: flex;
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${({ justify }) => justify ?? 'center'};
    align-items: ${({ align }) => align ?? 'center'};
    padding: 1rem;
`;

export const Container = styled.div`
    max-width: 720px;
    ${BaseContainer}
`;

export const Section = styled.section`
    ${BaseContainer}
`;

export const Box = styled.div`
    display: flex;
    flex-direction: ${({ column }) => (column ? 'column' : 'row')};
    justify-content: ${({ justify }) => justify ?? 'center'};
    align-items: ${({ align }) => align ?? 'center'};
    padding: 0.5rem;
    margin: 0.5rem;
`;

const BaseHeading = css`
    color: ${({ variant, theme }) => (variant ? theme.color[variant] : theme.color.dark)};
    margin-bottom: 1rem;
    text-align: center;
`;

export const H1 = styled.h1`
    ${BaseHeading};
`;

export const H2 = styled.h2`
    ${BaseHeading};
`;

export const H4 = styled.h5`
    ${BaseHeading};
`;

export const H5 = styled.h5`
    ${BaseHeading};
`;

export const HeroText = styled.div`
    ${BaseHeading};
    font-size: 3rem;
`;

export const Label = styled.label`
    display: inline;
    color: $color-gray-dark;
    transform: translateY(-4rem);
    transition: all 0.2s ease;
    opacity: 1;
    visibility: visible;
`;

export const MutedText = styled.small`
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.color.secondary};
`;

export const Text = styled.p`
    text-align: center;
    color: ${({ variant, theme }) => theme.color[variant]};
`;

export const DangerText = styled.small`
    color: ${({ theme }) => theme.color.danger};
`;

export const InputRadio = styled.span`
    width: 1rem;
    height: 1rem;
    padding: 0.5rem;
    border: ${({ theme }) => theme.border.primaryBig};
    border-radius: 50%;
    position: relative;
    display: inline-block;
    margin-right: 0.5rem;
    &::after {
        display: ${({ active }) => (active ? 'block' : 'none')};
        content: '';
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.primary};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
