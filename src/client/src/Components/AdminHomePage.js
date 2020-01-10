import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import Users  from './Users';
import Customers from './Customers';
import Cars from './Cars';
import CarUpdate from './CarUpdate';
import UserUpdate from './AddUser';
import AdminProfile from './AdminProfile';
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import CustomerDetails from './CustomerDetails';
import { adminLogOut } from '../actions';



class AdminHomePage extends React.Component {
    
    
    handleLogOut = () => {
        this.props.adminLogOut();
    }
    

    
    render() {        

        const renderSite = (
            <Router>
                <div className="ui grid">
                <div className="four wide column">
                <div className="ui vertical fluid tabular menu">
                    <Link to="/admin/cars"><div className="item">
                        Cars
                    </div></Link>
                    <Link to="/admin/users"><div className="item">
                        Users
                    </div></Link>
                    <Link to="/admin/customers"><div className="item">
                        Customers
                    </div></Link>
                    <Link to="/admin/orders"><div className="item active">
                        Orders
                    </div></Link>
                    <Link to="/admin/my-account"><button className="ui button">EDIT MY ACCOUNT</button></Link>
                    <button className="ui button" onClick={this.handleLogOut}>LOG OUT</button>
                </div>
                </div>
            <div className="twelve wide stretched column">
                <div className="ui segment">
                <Switch>
                    <Route path="/admin/cars" exact component={Cars}/>
                    <Route path="/admin/users" exact component={Users}/>
                    <Route path="/admin/customers" exact component={Customers}/>
                    <Route path="/admin/customers/:_id" exact component={CustomerDetails}/>
                    <Route path="/admin/cars/:_id" exact component={CarUpdate}/>
                    <Route path="/admin/users/:_id" exact component={UserUpdate}/>
                    <Route path="/admin/users/delete/:_id" exact component={DeleteUser}/>
                    <Route path="/admin/my-account" exact component={AdminProfile}/>
                    <Route path="/admin/users/new" exact component={AddUser}/>
                </Switch>
                     
                          </div>
            </div>

            </div>
            </Router> 


        );
        return (
            <div>{ this.props.admin.login ? renderSite : <Redirect push to="/admin"/>}</div>
        )
    }
}

const mapStateToProps = state => {
    return { admin: state.admin };
};
export default connect(
    mapStateToProps,
    { adminLogOut }
)(AdminHomePage);

