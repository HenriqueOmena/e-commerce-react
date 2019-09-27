import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button
      className={`${isGoogleSignIn ?  'google-sign-in' : '' } custom-button`}
      {...otherProps}
    >
        { children }  {/* text to put in button */}
    </button>
)

export default CustomButton;
