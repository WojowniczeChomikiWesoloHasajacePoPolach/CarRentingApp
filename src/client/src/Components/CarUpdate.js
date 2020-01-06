import React from 'react';
import { connect } from 'react-redux';
import {getCar} from '../actions';

class CarUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _id:this.props.car ? this.props.car._id: null,
            brand:this.props.car ? this.props.car.brand: '',
            model:this.props.car ? this.props.car.model: '',
            registryNumber:this.props.car ? this.props.car.registryNumber: '',
        }
    }

    //  componentDidMount() {
    //     if (this.props.params._id) {
    //     this.props.getCar(this.props.params._id)     }
    //  }

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
            default:
                break;
        }
    };



    render() {
           const { brand, model, registryNumber} = this.state;
        return (
            <div>
                {/* {!!this.isLogged ? <Redirect push to="admin/home" /> : ''} */}
            <div className="ui form">
                <form id="carUpdate">
                    <div className="field">
                        <label>Brand</label>
                        <input
                        type="text"
                        name="brand"
                        placeholder=""
                        value={this.state.brand}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Model</label>
                        <input
                        type="text"
                        name="model"
                        value={this.state.model}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <div className="field">
                        <label>Registry Number</label>
                        <input
                        type="text"
                        name="registryNumber"
                        value={this.state.registryNumber}
                        onChange={this.handleChange}
                        required></input>
                    </div>
                    <button className="ui button" form="carUpdate" onClick={this.handleSubmit}>Update</button>
                </form>
            </div>
            </div>
        );
    }
}

// const mapStateToProps = (state, props) => {
//     if (props.params._id) {
//         return {
//             car: state.car.find(item => item._id === props.params._id)
//         }
//     }
//     return { car: null}
// };
// const mapStateToProps = (state, props) => {
//     if (props.params._id) {return {
//         car: state.car.find(item => item._id === props.params._id)
//     }
//     }
//     return {car:null}
// }
// export default connect(
//     mapStateToProps,
//     { getCar }
// )(CarUpdate);

export default CarUpdate;