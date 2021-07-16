import styled from 'styled-components';

export const StyledButton = styled.button`
    &,
    &:focus,
    &:active,
    &:hover {
        box-shadow: none;
        border-radius: 0;
        outline: none;
    }
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    width: ${({ width }) => width && `${width}%`};

    border: ${({ variant, theme }) => {
        if (variant === 'outline-primary') return theme.border.primary;
        if (variant === 'outline-dark') return theme.border.dark;
        if (variant === 'outline-light') return theme.border.light;
        if (variant === 'outline-danger') return theme.border.danger;
        return '1px solid transparent';
    }};

    background: ${({ variant, theme }) => {
        if (variant.includes('outline')) return theme.color.white;
        if (variant === 'light') return theme.color.white;
        if (variant === 'danger') return theme.color.danger;
        return theme.color.primary;
    }};

    color: ${({ variant, theme }) => {
        if (variant.includes('outline-primary')) return theme.color.primary;
        if (variant.includes('outline-dark')) return theme.color.dark;
        if (variant.includes('outline-danger')) return theme.color.danger;
        if (variant.includes('light')) return theme.color.dark;
        return theme.color.light;
    }};
`;

export const StyledButtonGroup = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify ?? 'center'};
    align-items: center;
    padding: 0.5rem;
    margin: 0.5rem;
    gap: 0.5rem;
`;
