import React from 'react'
import './CustomButton.scss'

const CustomButton = ({children, type}) => {
    return (
        <button className='custom-button' type={type}>
            {children}
        </button>
    )
}

export default CustomButton;