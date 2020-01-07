import React from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../actions';
import { connect } from 'react-redux';



class Users extends React.Component {
    constructor(props) {
        super(props);
         this.state = {login: '', name: '', email: '', isAdmin:''}
    }

    componentDidMount() {
        this.props.getUsers();
        console.log(this.props.user)

    }
    renderRow() {
        return this.props.user.map( user => {
            let admin = 'No';
            if(user.isAdmin === true) {admin = 'Yes'};
            return (
                <tr>
                    <td data-label="Name">{user.name}</td>
                    <td data-label="Login">{user.login}</td>
                    <td data-label="Email">{user.email}</td>
                    <td data-label="Admin">{admin}</td>
                    
                    <td data-label=''><Link to='/admin/users/update/_:id' > <button className="ui button">UPDATE</button></Link></td>
                  </tr>)
    });
}
    renderTable() {
        return (
                <table className="ui celled table">
                <thead>
                <tr><th>Name</th>
                <th>Login</th>
                <th>Email</th>
                <th>Admin</th>
                <th></th>
                </tr></thead>
                <tbody>
                {this.renderRow()}
                </tbody>
            </table>
            );
    }
    render() {
        return (
             <div className="ui relaxed divided list">{this.renderTable()}</div>
        )
    }
}


const mapStateToProps = state => {
    return { user: state.user };
};
export default connect(
    mapStateToProps,
    { getUsers }
)(Users);