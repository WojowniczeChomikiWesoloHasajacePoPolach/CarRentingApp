import React from 'react';
import { Link } from 'react-router-dom';
import { getCustomers } from '../actions';
import { connect } from 'react-redux';


function CustomerItem({customer}) {
            return (
                <tr>
                    <td data-label="Login">{customer.login}</td>
                    <td data-label="Email">{customer.email}</td>
                    <td data-label=''><Link to={`customers/${customer._id}`}><button className="ui button" id={customer._id}>SHOW MORE</button></Link></td>
                </tr>
            )
}

function CustomersTable({customers}) {
    return customers.map( customer => <CustomerItem customer={customer} key={customer._id}/>)
   }

class Customers extends React.Component {
    constructor(props) {
        super(props);
         this.state = {login: '', email: ''}
    }

    async componentDidMount() {
        await this.props.getCustomers();
    }

    render() {
        return (
            <div className="ui relaxed divided list"><table className="ui celled table">
            <thead>
            <tr><th>Login</th>
            <th>Email</th>
            <th></th>
            </tr></thead>
            <tbody>
            < CustomersTable customers={this.props.customers}/>
            </tbody>
            </table>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { customers: state.customers };
};
export default connect(
    mapStateToProps,
    { getCustomers }
)(Customers);