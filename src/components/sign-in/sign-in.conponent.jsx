import React, { Component } from 'react'

import FormInput from "../forn-input/forn-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from '../../firebase/firebase.utils.js'

import './sign-in.style.scss';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = event => {
        const {value, name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2> I already have an ccount</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                      name="email"
                      type="email"
                      handleChange={this.handleChange}
                      label="Email"
                      value={this.state.email}
                      required
                    />

                    <FormInput
                      name='password'
                      type='password'
                      value={this.state.email}
                      label="Password"
                      handleChange={this.handleChange}
                      required
                    />

                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form"> SignIn </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            SignIn with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }


}

export default SignIn
