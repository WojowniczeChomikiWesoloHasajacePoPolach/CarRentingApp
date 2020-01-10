import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUser, updateUser } from '../actions';


class AdminProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {_id: null, login: '', name: '', email: '', isAdmin: '', currentPassword: '', newPassword: '', isUpdated: false}
    }
    async componentDidMount() {
        let id = localStorage.getItem('id');
        await this.props.getUser(id);
        this.setState({_id: this.props.user._id});
        this.setState({login: this.props.user.login});
        this.setState({email: this.props.user.email});
        this.setState({name: this.props.user.name});
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
            case 'currentPassword':
                this.setState({ currentPassword: event.target.value });
                break;
            case 'newPassword':
                this.setState({ newPassword: event.target.value });
                break;
            default:
                break;
        }
    };
    handleSubmit = async event => {
        event.preventDefault();
        const {_id, login, name, email, currentPassword, newPassword} = this.state;
        await this.props.updateUser(_id, login, name, email, currentPassword, newPassword);
        this.setState({isUpdated: true});
    }

    render() {
        const { _id, login, name, email} = this.state;
        const updateForm = (
            <div className="ui form">
                <form id="userUpdate">
                    <label>User ID: {_id}</label>
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
                        <label>Current Password</label>
                        <input
                        type="password"
                        name="currentPassword"
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>New Password</label>
                        <input
                        type="password"
                        name="newPassword"
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <button className="ui button" form="userUpdate" onClick={this.handleSubmit}>Update</button>
                </form>
            </div>
        )
        return <div>
            {/* {this.props.user.login ? '' : <Redirect push to="/admin/home"/> } */}
            {this.state.isUpdated ? <Redirect push to="/admin/home"/> : updateForm }</div>

    }
}

const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(
    mapStateToProps,
    { getUser, updateUser }
)(AdminProfile);