import React from 'react';
import {Redirect} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { customerLogin } from '../actions';
import Footer from './Footer';
import Header from './Header';



class CustomerLoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '', password: '', isLogin: false
        }
    }

    handleChange = event => {
        switch (event.target.name) {
            case 'login':
               this.setState({ login: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            default:
                break;
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
        const {login, password} = this.state;
        await this.props.customerLogin(login, password);
        this.setState({isLogin: true});
    }

    render() {
        const { login, password} = this.state;
        const renderForm = (
            <div className="main-page">< Header />
            <form className="order-page-form" id="customerLogin">
                    <div className="field">
                    <label>Login</label>
                        <input
                        type="text"
                        name="login"
                        value={login}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                    <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <button className="ui button" form="customerLogin" onClick={this.handleSubmit}>SIGN UP</button>
            </form>
            < Footer /></div>
        )

        return (
            <div>{this.state.isLogin ? <Redirect push to="/"/> : renderForm} </div>
            )
    }
}

const mapStateToProps = (state) => {
    return { customer: state.customer };
};

export default connect(
    mapStateToProps,
    { customerLogin }
    )(CustomerLoginPage);

