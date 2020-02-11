import React from 'react';
import { customerLogOut } from '../actions';
import { connect } from 'react-redux';



class Logout extends React.Component {

    handleLogout = async() => {
        await this.props.customerLogOut();
    }


    render() {

        return (
            <a href="/" onClick={this.handleLogout}>LOGOUT</a>
        )
    }
}

const mapStateToProps = (state) => {
    return {customer: state.customer};
}

export default connect(
    mapStateToProps,
    { customerLogOut }
    )(Logout);