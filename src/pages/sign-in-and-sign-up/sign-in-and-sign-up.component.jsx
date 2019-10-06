import React from 'react'

import "./sign-in-and-sign-up.style.scss";

import SignIn from '../../components/sign-in/sign-in.conponent'
import SignUp from '../../components/sign-up/sign-up.component';

const SingInAndSignUpPAge = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SingInAndSignUpPAge;
