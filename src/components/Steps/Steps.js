import React from 'react';
import { StepItem, StepTitle, StyledStep, StyledStepNumber } from './styled';

const Steps = ({ activeStep }) => {
    const steps = [
        {
            id: 1,
            title: 'Order Summary',
        },
        {
            id: 2,
            title: 'Shipping Details',
        },
        {
            id: 3,
            title: 'Payment',
        },
    ];

    return (
        <StyledStep>
            {steps.map((el) => (
                <StepItem key={el.id}>
                    <StyledStepNumber active={el.id === activeStep}>{el.id}</StyledStepNumber>
                    <StepTitle> {el.title} </StepTitle>
                </StepItem>
            ))}
        </StyledStep>
    );
};

export default Steps;
