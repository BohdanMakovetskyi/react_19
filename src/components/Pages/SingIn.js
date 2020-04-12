import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Img, Title, Photo, Input, Check, CheckBox, Paragraph, Button, Website } from './style.js';

class SingIn extends Component {
    state = {
        email: '',
        password: '',
        emailTrue: false,
        passwordTrue: false,
        check: false
    }

    emailInput = (e) => {
        this.setState({
            email: e.target.value
        })
        if(e.target.value.match(/^...+@..+\...+$/)!=null) {
            this.setState({
                emailTrue: true
            })
        } else {
            this.setState({
                emailTrue: false
            })
        }
    }

    passwordInput = (e) => {
        this.setState({
            password: e.target.value
        })
        if (e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) != null) {
            this.setState({
                passwordTrue: true
            })
        } else {
            this.setState({
                passwordTrue: false
            })
        }
    }

    changeCheckbox = () => {
        this.setState({
            check: !this.state.check
        });
    }

    render() {
        return (
            <div>
                <Img><Photo src='https://image.flaticon.com/icons/svg/565/565547.svg' /></Img>
                <Title>Sing in</Title>
                <Input placeholder='Email Address*' empty={this.state.email === ''} border={this.state.emailTrue} onChange={this.emailInput} />
                <br />
                <Input type='password' placeholder='Password*' empty={this.state.password === ''} border={this.state.passwordTrue} onChange={this.passwordInput} />
                <Check>
                    <CheckBox type='checkbox' onChange={this.changeCheckbox} />
                    <Paragraph>Remember me</Paragraph>
                </Check>
                <Button>SING IN</Button>
                <div>
                    <a style={{ fontSize: '10px', color: 'rgb(89, 197, 197)' }}>Forgot password ?</a>
                    <Link style={{ color: 'rgb(89, 197, 197)', fontSize: '10px', marginLeft: '50px' }} to='/sing_up'>Don't have an account? Sign up</Link>
                </div>
                <Website>Copyrigth &copy; Your Website 2020.</Website>
            </div>
        );
    }
}

export default SingIn;