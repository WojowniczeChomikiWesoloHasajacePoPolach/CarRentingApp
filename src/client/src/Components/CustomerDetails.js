import React from 'react';
import { connect } from 'react-redux';
import { getCustomer } from '../actions';
import { Redirect } from 'react-router-dom';



class CustomerDetail extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
            _id: null,
            login: '',
            email: '',
            name: '',
            dateOfBirth: '',
            driverLicenseNumber: '',
            comeBack: false
        }
    }
componentDidMount = async () => {
        if (this.props.match.params) {
        await this.props.getCustomer(this.props.match.params._id)
        this.setState({_id: this.props.customer._id, login: this.props.customer.login, email: this.props.customer.email, name: this.props.customer.name, dateOfBirth: this.props.customer.dateOfBirth, driverLicenseNumber: this.props.customer.driverLicenseNumber})
     }
    }
    
    handleBack = e => {
        e.preventDefault();
        this.setState({comeBack: true})
    }



    render() {
           const { _id, login, name, email, dateOfBirth, driverLicenseNumber} = this.state;
        const detailForm =  (
            <div>
                {/* {!!this.isLogged ? <Redirect push to="admin/home" /> : ''} */}
            <div className="ui form">
                <form id="customerDetail">
                <label>Customer ID: {_id}</label>
                    <div className="field">
                        <label>Login</label>
                        <input
                        type="text"
                        name="login"
                        placeholder=""
                        value={login}
                        readOnly="true"
                        required></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                        type="text"
                        name="email"
                        value={email}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Name</label>
                        <input
                        type="text"
                        name="name"
                        value={name}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Date Of Birth</label>
                        <input
                        type="text"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Driver License Number</label>
                        <input
                        type="text"
                        name="driverLicenseNumber"
                        value={driverLicenseNumber}
                        required></input>
                    </div>
                    <button className="ui button" form="carUpdate" onClick={this.handleBack}>Back</button>
                </form>
            </div>
            </div>
        );

        return <div>{this.state.comeBack ? <Redirect push to="/admin/customers"/> : detailForm }</div>
    }
}

const mapStateToProps = (state) => {
    return { customer: state.customer };

};


export default connect(
    mapStateToProps,
    { getCustomer }
    )(CustomerDetail);



