import React from 'react';
import rentingapp from '../apis';



class RegisterCustomer extends React.Component {
    constructor(props) {
        super(props);
        //ustawienie początkowych stanów, żeby mieć kontrolowany komponent
        this.state = { login: '', email: '', name: '', password: '', confirmPassword: '' };
    }
    //funkcja dla wprowadzania zmian w inputach
    handleChange = event => {
        switch (event.target.name) {
            case 'login':
                this.setState({ login: event.target.value });
                break;

            case 'email':
                this.setState({ email: event.target.value });
                break;

            case 'name':
                this.setState({ name: event.target.value });
                break;

            case 'password':
                this.setState({ password: event.target.value });
                break;
            
            case 'confirmPassword':
                this.setState({ confirmPassword: event.target.value });
                break;
            default:
                break;
        }
    };
    //funkcja do wysyłania formularza
    handleSubmit = async event => {
        event.preventDefault();
        const {login, email, name, password, confirmPassword} = this.state;
        const payload = {login, email, name, password, confirmPassword};

    

        await rentingapp.customerRegister(payload).then(req => {
            
            this.setState({
                login:'',
                email: '',
                name: '',
                password: ''
            })
        });
    }

    render() {
        const { login, email, name, password, confirmPassword } = this.state
        return (
            <form className="ui form" id="registerForm" onClick={this.handleSubmit}>
                <div className="field"><label>Login</label><input
                type="text"
                name="login"
                placeholder="Login"
                value={login}
                onChange={this.handleChange}
                required
                ></input></div>
                <div className="field"><label>Email</label><input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
                required
                ></input></div>
                <div className="field"><label>Name</label><input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
                required
                ></input></div>
                <div className="field"><label>Password</label><input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
                required
                ></input></div>
                <div className="field"><label>Confirm Password</label><input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={this.handleChange}
                required
                ></input></div>
                <button className="ui button" form="registerForm">Register</button>
            </form>
        );

    };
}

export default RegisterCustomer;