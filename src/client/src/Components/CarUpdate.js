import React from 'react';
import { connect } from 'react-redux';
import { updateCar, getCar, deleteCar, addCar } from '../actions';
import { Redirect } from 'react-router-dom';


class CarUpdate extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
            _id: null,
            brand: '',
            model: '',
            registryNumber: '',
            motor: '',
            mileage: '',
            power: '',
            dailyRentalRate: '',
            isUpdated: false,
            isDeleted: false,
            isAdded: false
        }
    }
componentDidMount = async () => {
        if (this.props.match.params) {
        await this.props.getCar(this.props.match.params._id)
        this.setState({_id: this.props.car._id})
        this.setState({brand: this.props.car.brand})
        this.setState({model: this.props.car.model})
        this.setState({registryNumber: this.props.car.registryNumber})
        this.setState({motor: this.props.car.motor})
        this.setState({mileage: this.props.car.mileage})
        this.setState({power: this.props.car.power})
        this.setState({dailyRentalRate: this.props.car.dailyRentalRate})
     }
    }
    componentWillUnmount = () => {
        console.log("komponent zniknal")
        this.props.car._id = '';
        }

    handleChange = event => {
        switch (event.target.name) {
            case 'brand':
               this.setState({ brand: event.target.value });
                break;
            case 'model':
                this.setState({ model: event.target.value });
                break;
            case 'registryNumber':
                this.setState({ registryNumber: event.target.value });
                break;
            case 'motor':
                this.setState({ motor: event.target.value });
                break;
            case 'mileage':
                this.setState({ mileage: event.target.value });
                break;
            case 'power':
                this.setState({ power: event.target.value });
                break;
            case 'dailyRentalRate':
                this.setState({ dailyRentalRate: event.target.value });
                break;
            default:
                break;
        }
    };

    handleUpdate = async event => {
        event.preventDefault();
        const {_id, brand, model, motor, mileage, power, registryNumber, dailyRentalRate} = this.state;
        await this.props.updateCar(_id, brand, model, motor, mileage, power, registryNumber, dailyRentalRate);
        this.setState({isUpdated: true});
    }

    handleDelete = async e => {
        e.preventDefault();
        const {_id} = this.state;
        await this.props.deleteCar(_id);
        this.setState({isDeleted: true});
    }
    handleAddCar = async e => {
        e.preventDefault();
        const {_id, brand, model, motor, mileage, power, registryNumber, dailyRentalRate} = this.state;
        await this.props.addCar(_id, brand, model, motor, mileage, power, registryNumber, dailyRentalRate);
        this.setState({isAdded: true});
    }



    render() {
           const { _id, brand, model, motor, mileage, power, registryNumber, dailyRentalRate} = this.state;
        const updateForm =  (
            <div>
                {/* {!!this.isLogged ? <Redirect push to="admin/home" /> : ''} */}
            <div className="ui form">
                <form id="carUpdate">
                {this.props.car._id ? <label>Car ID: {_id}</label> : ''}
                    <div className="field">
                        <label>Brand</label>
                        <input
                        type="text"
                        name="brand"
                        placeholder=""
                        value={brand}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Model</label>
                        <input
                        type="text"
                        name="model"
                        value={model}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Registry Number</label>
                        <input
                        type="text"
                        name="registryNumber"
                        value={registryNumber}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Motor</label>
                        <input
                        type="text"
                        name="motor"
                        placeholder=""
                        value={motor}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Mileage</label>
                        <input
                        type="text"
                        name="mileage"
                        placeholder=""
                        value={mileage}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Power</label>
                        <input
                        type="text"
                        name="power"
                        placeholder=""
                        value={power}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Daily Rental Rate</label>
                        <input
                        type="text"
                        name="dailyRentalRate"
                        placeholder=""
                        value={dailyRentalRate}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    {this.props.car._id ? <div><button className="ui button" form="carUpdate" onClick={this.handleUpdate}>Update</button>
                    <button className="ui button" form="carUpdate" onClick={this.handleDelete}>Delete</button></div> : 
                    <button className="ui button" form="carUpdate" onClick={this.handleAddCar}>Add</button>}
                </form>
            </div>
            </div>
        );

        return <div>{this.state.isUpdated || this.state.isDeleted || this.state.isAdded ? <Redirect push to="/admin/cars"/> : updateForm }</div>
    }
}

const mapStateToProps = (state) => {
    return { car: state.car };

};


export default connect(
    mapStateToProps,
    { updateCar, getCar, deleteCar, addCar }
    )(CarUpdate);



