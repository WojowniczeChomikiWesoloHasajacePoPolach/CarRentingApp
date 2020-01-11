import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { customerRegister } from '../actions';
import {Redirect} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';



class CustomerRegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '', email: '', name: '', dateOfBirth: '', driverLicenseNumber: '', password: '', confirmPassword: '', isLogin: false
        }
    }

    handleChange = event => {
        switch (event.target.name) {
            case 'login':
               this.setState({ login: event.target.value });
                break;
            case 'name':
                this.setState({ name: event.target.value });
                break;
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            case 'confirmPassword':
                this.setState({ confirmPassword: event.target.value });
                break;
            case 'dateOfBirth':
                this.setState({ dateOfBirth: event.target.value });
                break;
            case 'driverLicenseNumber':
                this.setState({ driverLicenseNumber: event.target.value });
                break;
            default:
                break;
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
        const {login, email, name, dateOfBirth, driverLicenseNumber, password, confirmPassword} = this.state;
        await this.props.customerRegister(login, email, name, dateOfBirth, driverLicenseNumber, password, confirmPassword);
        this.setState({isLogin: true});
    }

    render() {
        const { login, email, name, dateOfBirth, driverLicenseNumber, password, confirmPassword} = this.state;
        const renderForm = (
            <div className="main-page">< Header />
            <form className="order-page-form" id="customerRegister">
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
                        <label>Email</label>
                        <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                    <label>Name</label>
                        <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                    <label>Date Of Birth</label>
                        <input
                        type="date"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                    <label>Driver License Number</label>
                        <input
                        type="text"
                        name="driverLicenseNumber"
                        value={driverLicenseNumber}
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
                
                    <div className="field">
                    <label>Repeat Password</label>
                        <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <button className="ui button" form="customerRegister" onClick={this.handleSubmit}>SIGN UP</button>
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
    { customerRegister }
    )(CustomerRegisterPage);

