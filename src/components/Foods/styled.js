import { FiShoppingCart } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import styled, { css } from 'styled-components';

export const FoodsWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
`;

export const Fugure = styled.figure`
    min-height: 150px;
    @media only screen and (max-width: 567px) {
        min-height: 200px;
    }
`;

export const AddCartLayer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    transition: all 0.2s ease;
    top: -100%;
`;

export const Picture = styled.picture`
    display: block;
    height: 150px;
    overflow: hidden;
    position: relative;

    &:hover ${AddCartLayer} {
        top: 0;
    }
    @media only screen and (max-width: 567px) {
        height: 200px;
    }
`;

const BaseImage = css`
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    padding: 0.5rem;
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
        opacity 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover {
        transform: scale(1.06);
    }
`;

export const Image = styled.div`
    ${BaseImage}
    background-image: url(${({ src }) => src});
`;

export const AddCartBtnWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const FoodSkeleton = styled(Skeleton)`
    ${BaseImage}
`;

export const FoodTitle = styled.div`
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    line-height: 1.3em;
    padding: 0.3rem 0;
    font-weight: 600;
`;

export const FoodPrice = styled.strong`
    color: ${({ theme }) => theme.color.primary};
`;

export const StyledCartIcon = styled(FiShoppingCart)`
    color: ${({ isadded, theme }) =>
        isadded === 'true' ? theme.color.primary : theme.color.secondary};
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:focus,
    &:active {
        scale: 1.5;
    }
`;
