import React from 'react';
import { deleteUser } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class DeleteUser extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
            _id: null,
            comeBack: false
        }
    }

handleDelete = async (e) => {
    e.preventDefault();
    if (this.props.match.params) {
    await this.props.deleteUser(this.props.match.params._id)
    }
    this.setState({comeBack: true});
}

handleBack = e => {
    e.preventDefault();
    this.setState({comeBack: true});

}


render() {
        const renderCard = (
            <div class="ui card">
                <div class="card">
                    <div class="content">
                        <div class="header">
                            Are you sure you want to delete this user?
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="ui two buttons">
                            <div class="ui basic green button" onClick={this.handleDelete}>YES</div>
                            <div class="ui basic red button" onClick={this.handleBack}>NO</div>
                        </div>
                    </div>
                </div>
            </div>
    )

    return <div>{this.state.comeBack ? <Redirect push to="/admin/users"/> : renderCard}</div>
    }
}

const mapStateToProps = state => {
    return { user: state.user };
}
export default connect(
    mapStateToProps,
    { deleteUser }
)(DeleteUser);