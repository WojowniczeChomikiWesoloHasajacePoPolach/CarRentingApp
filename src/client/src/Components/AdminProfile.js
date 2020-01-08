import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { adminProfile } from '../actions';


class AdminProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', name: '', email: '', isAdmin: ''}
    }
    componentDidMount() {
        let id = localStorage.getItem('id');
        console.log(id);
        this.props.adminProfile(id);
    }
    isLogged = () => {
        let id = localStorage.getItem('id');
        console.log(id)
        if(id) { return true} else {return false};
    };


    render() {

        return (
            <div>
                { !this.isLogged ? <Redirect push to="/admin"/> : ''}
                <label><div>Name: {this.props.admin.name}</div></label>
                <label><div>Login: {this.props.admin.login}</div></label>
                <label><div>Email: {this.props.admin.email}</div></label>

            </div>
        )
    }



}

const mapStateToProps = state => {
    return { admin: state.admin };
};

export default connect(
    mapStateToProps,
    { adminProfile }
)(AdminProfile);