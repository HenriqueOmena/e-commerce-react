import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, ...otherProps}) => (
    <button
      className='custom-button'
      {...otherProps}
    >
        { children }  {/* text to put in button */}
    </button>
)

export default CustomButton;
