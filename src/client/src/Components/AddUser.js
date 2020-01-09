import React from 'react';
import { connect } from 'react-redux';
import { addUser} from '../actions';
import { Redirect } from 'react-router-dom';


class AddUser extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
            _id: null,
            login: '',
            email: '',
            name: '',
            password: '',
            confirmPassword: '',
            isAdded: false
        }
    }
// componentDidMount = async () => {
//         if (this.props.match.params) {
//         await this.props.getUser(this.props.match.params._id)
//         // this.setState({_id: this.props.user._id, login: this.props.user.login, email: this.props.user.email, name: this.props.user.name})
//         this.setState({_id: this.props.user._id});
//         this.setState({login: this.props.user.login});
//         this.setState({email: this.props.user.email});
//         this.setState({name: this.props.user.name});
//         }
//     }

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
            default:
                break;
        }
    };

    handleSubmit = async event => {
        event.preventDefault();
        const {login, name, email, password, confirmPassword} = this.state;
        if(login === ''|| name === '' || email === '' || password === '' || confirmPassword === '') {console.log("every must be fill")}
        let response = await this.props.addUser(login, name, email, password, confirmPassword);
        console.log(response)
        this.setState({isAdded: true});

    }



    render() {
           const { _id, login, name, email} = this.state;
        const renderForm =  (
            <div className="ui form">
                <form id="addUser">
                    <label>User ID: {_id}</label>
                    <div className="field">
                        <label>Login</label>
                        <input
                        type="text"
                        name="login"
                        placeholder=""
                        value={login}
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
                        <label>Email</label>
                        <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        {/* <label>Admin</label>
                        <input
                        type="radio"
                        name="isAdmin"
                        placeholder=""
                        value='YES'
                        onChange={this.handleChange}>
                        {this.state.isAdmin ? 'checked' : ''}
                        </input>
                        <input
                        type="radio"
                        name="isAdmin"
                        placeholder=""
                        value='NO'
                        onChange={this.handleChange}>
                        {this.state.isAdmin ? '' : 'checked'}
                        </input> */}
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Confirm Password</label>
                        <input
                        type="password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <button className="ui button" form="addUser" onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
        );
        return <div>{this.state.isAdded ? <Redirect push to="/admin/users"/> : renderForm}</div>
    }
}

const mapStateToProps = (state, props) => {
    return { user: state.user };

};


export default connect(
    mapStateToProps,
    { addUser }
    )(AddUser);



