import React from 'react';
import { Link } from 'react-router-dom';
import { getCars } from '../actions';
import { connect } from 'react-redux';



class Cars extends React.Component {
    constructor(props) {
        super(props);
         this.state = {_id: '', brand: '', model: '', motor: '', isRent: false}
    }
    componentDidMount() {
        this.props.getCars();
        console.log(this.props.car)

    }

    renderRow() {
        return this.props.car.map( car => {
            let rented = "No";
            if (car.isRent === true) { rented = "Yes"};
            return (
                <tr>
                    <td data-label="Car">{car.brand} {car.model}</td>
                    <td data-label="Registry Number">{car.registryNumber}</td>
                    <td data-label="Rented">{rented}</td>
                    <td data-label=''><Link to={`/admin/cars/${car._id}`} > <button className="ui button">EDIT</button></Link></td>

                  </tr>)
    });
}
    renderTable() {
        return (
                <table className="ui celled table">
                <thead>
                <tr><th>Car</th>
                <th>Registry Number</th>
                <th>Rented</th>
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
    return { car: state.car };
};
export default connect(
    mapStateToProps,
    { getCars }
)(Cars);