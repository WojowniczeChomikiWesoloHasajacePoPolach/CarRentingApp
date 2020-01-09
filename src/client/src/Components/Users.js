import React from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../actions';
import { connect } from 'react-redux';


function UserItem({user}) {

    let admin = 'No';
        if(user.isAdmin === true) {admin = 'Yes'};
            return (
                <tr>
                    <td data-label="Name">{user.name}</td>
                    <td data-label="Login">{user.login}</td>
                    <td data-label="Email">{user.email}</td>
                    <td data-label="Admin">{admin}</td>
                    <td data-label=''><Link to={`users/delete/${user._id}`}><button className="ui button" id={user._id}>DELETE</button></Link></td>
                </tr>
            )
}

function UsersTable({users}) {
    return users.map( user => <UserItem user={user} key={user._id}/>)
   }

class Users extends React.Component {
    constructor(props) {
        super(props);
         this.state = {login: '', name: '', email: '', isAdmin:''}
    }

    async componentDidMount() {
        await this.props.getUsers();

    }

    render() {
        return (
            <div className="ui relaxed divided list"><table className="ui celled table">
            <thead>
            <tr><th>Name</th>
            <th>Login</th>
            <th>Email</th>
            <th>Admin</th>
            <th></th>
            </tr></thead>
            <tbody>
            < UsersTable users={this.props.users}/>
            </tbody>
            </table>
            <Link to="/admin/users/new"><button className="ui button">ADD USER</button></Link>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { users: state.users };
};
export default connect(
    mapStateToProps,
    { getUsers }
)(Users);