import React from 'react';
import Link from 'react-router-dom';
import rentingapp from '../apis';
import { connect } from 'react-redux';
import { adminLogin } from '../actions';
import { Redirect } from 'react-router-dom';



class AdminLoginPage extends React.Component {
    constructor(props) {
        super(props);
        //ustawienie początkowych stanów, żeby mieć kontrolowany komponent
        this.state = { login: '', password: ''};
    }


    handleSubmit = async event => {
        event.preventDefault();
        const {login, password} = this.state;
        this.props.adminLogin(login, password);
    
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
    isLogged = () => {
        let id = localStorage.getItem('id');
        console.log('id' + id)
        if(id) { return true} else {return false};
    };
    
    
    render() {
        const { login, password} = this.state;

        const mustLogin = (
            <div>
            <div className="ui form">
                <form id="adminLogin">
                    <div className="field">
                        <label>Login</label>
                        <input
                        type="text"
                        name="login"
                        placeholder="Login"
                        value={login}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <button className="ui button" form="adminLogin" onClick={this.handleSubmit}>Log in!</button>
                </form>
            </div>
            </div>
        )
        return (
            <div> {this.props.admin.login === '' ? mustLogin : <Redirect push to="/admin/home" /> }
            </div>
            
        );
    }

}


const mapStateToProps = state => {
    return { admin: state.admin };
};
export default connect(
    mapStateToProps,
    { adminLogin }
)(AdminLoginPage);



