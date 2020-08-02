import React from 'react';
import './CustomButton.scss';
import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <CustomButtonContainer {...otherProps}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;