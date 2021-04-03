import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';

const CheckoutStepButtons = ({ loading, backTitle, nextTitle, buttonBack, buttonNext }) => (
    <div className="w-100 d-flex justify-content-between my-3 px-3">
        <Button
            type="button"
            variant="light"
            className="border border-primary mr-2 shadow-none text-uppercase d-flex align-items-center"
            onClick={buttonBack}
        >
            <IoArrowBackOutline /> {backTitle}
        </Button>
        <Button
            type="submit"
            variant="primary"
            className="ml-2 shadow-none text-uppercase d-flex align-items-center"
            onClick={buttonNext}
        >
            {loading ? (
                <Spinner as="span" role="status" animation="border" size="sm" />
            ) : (
                <>
                    {' '}
                    {nextTitle} <IoArrowForwardOutline />{' '}
                </>
            )}
        </Button>
    </div>
);

export default CheckoutStepButtons;
