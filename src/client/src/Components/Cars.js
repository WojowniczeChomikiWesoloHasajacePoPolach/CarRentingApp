import React from 'react';
import { Link } from 'react-router-dom';
import { getCars } from '../actions';
import { connect } from 'react-redux';

function CarItem({car}) {

    let rented = "No";
    if (car.isRent === true) { rented = "Yes"};

    return (
        <tr>
            <td data-label="Car">{car.brand} {car.model}</td>
            <td data-label="Registry Number">{car.registryNumber}</td>
            <td data-label="Rented">{rented}</td>
            <td data-label=''><Link to={`cars/${car._id}`}><button className="ui button" id={car._id}>EDIT</button></Link></td>
        </tr>
    )
}


function CarsTable({cars}) {
     return cars.map( car => <CarItem car={car} key={car._id}/>)
    }

class Cars extends React.Component {
    constructor(props) {
        super(props);
         this.state = {_id: '', brand: '', model: '', motor: '', isRent: false, showForm: false}
    }
    async componentDidMount() {
       await this.props.getCars();
    }

    render() {
        return (
            <div className="ui relaxed divided list"><table className="ui celled table">
            <thead>
            <tr><th>Car</th>
            <th>Registry Number</th>
            <th>Rented</th>
            <th></th>
            </tr></thead>
            <tbody>
            < CarsTable cars={this.props.cars}/>
            </tbody>
            </table>
            <Link to="/admin/cars/new"><button className="ui button">ADD CAR</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { cars: state.cars };
};
export default connect(
    mapStateToProps,
    { getCars }
)(Cars);