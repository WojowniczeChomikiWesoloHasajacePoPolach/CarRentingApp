import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import { getCars } from '../actions';
import {getCar} from '../actions';
import  Users  from './Users';
import  Customers from './Customers';
import Cars from './Cars';
import CarUpdate from './CarUpdate';
import Orders from './Orders';
import { adminProfile, adminLogOut } from '../actions';
import AdminLoginPage from './AdminLoginPage';



class AdminHomePage extends React.Component {
    
    

    
    // handleSubmit = async e => {
    //     e.preventDefault();
    //     // const { id, brand, model, motor } = this.state
    //     let id = this.props.car._id
    //     console.log(id);
    //     this.props.getCar(id);

    // }
    // componentDidMount() {
    //     let id = localStorage.getItem('id');
    //     this.props.adminProfile(id);
    //     console.log(id);
    //     console.log(this.props.admin.login)
    // }
    // componentDidUpdate() {
    //     let id = localStorage.getItem('id');
    //     this.props.adminProfile(id);
    //     console.log(id);
    //     console.log(this.props.admin.login)
    // }
    handleLogOut = () => {

        this.props.adminLogOut();

    }
    isLogged = () => {
        let id = localStorage.getItem('id');
        console.log(id)
        if(id) { return true} else {return false};
    };
    

    
    render() {

        // const isLogged = this.props.admin.login;
        

        const logged = (
            <Router>
                <div className="ui grid">
                <div className="four wide column">
                <div className="ui vertical fluid tabular menu">
                    <Link to="/admin/cars"><a className="item">
                        Cars
                    </a></Link>
                    <Link to="/admin/users"><a className="item">
                        Users
                    </a></Link>
                    <Link to="/admin/customers"><a className="item">
                        Customers
                    </a></Link>
                    <Link to="/admin/orders"><a className="item active">
                        Orders
                    </a></Link>
                    <button className="ui button" onClick={this.handleLogOut}>LOG OUT</button>
                </div>
                </div>
            <div className="twelve wide stretched column">
                <div className="ui segment">
                {/* <div className="ui relaxed divided list">{this.renderTable()}</div> */}
                <Switch>
                    <Route path="/admin/cars" exact component={Cars}/>
                    <Route path="/admin/users" exact component={Users}/>
                    <Route path="/admin/customers" exact component={Customers}/>
                    <Route path="/admin/cars/:_id" exact component={CarUpdate}/>
                </Switch>
                     
                          </div>
            </div>

            </div>
            </Router> 


        );
        return (
            <div>{ this.props.admin.login ? logged : <Redirect push to="/admin"/>}</div>
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

