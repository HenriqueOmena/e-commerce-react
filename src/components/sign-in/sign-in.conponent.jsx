import React, { Component } from 'react'

import './sign-in.style.scss';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <div className="sign-in">
                <h2> I already have an ccount</h2>
                <span> Sign in with your email and password</span>

                <form action="">
                    <input name="email" type="email" value={this.state.email}/>
                    <label htmlFor="email">Email</label>
                </form>
            </div>
        )
    }


}

export default SignIn
