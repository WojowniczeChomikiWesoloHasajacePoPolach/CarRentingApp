import React from 'react';
import './App.css';
import Select from './Select';
import { getCars } from '../actions';
import { connect } from 'react-redux';



class OrderForm extends React.Component{ 
    constructor(props) {
        super(props);
         this.state = {
         brand: '',
         model: '',
         power: '',
         motor: ''}
    }
    componentDidMount() {
        this.props.getCars();
        console.log(this.props.car)
    }

    // test(){
    //     return this.props.car.map( car => {
    //         let rented = "No";
    //         if (car.isRent === true) { rented = "Yes"};
    //         return (
    //             <tr>
    //                 <td data-label="Car">{car.brand} {car.model}</td>
    //                 <td data-label="Registry Number">{car.registryNumber}</td>
    //                 <td data-label="Rented">{rented}</td>
    //                 <td data-label=''><Link to={`/admin/cars/${car._id}`} > <button className="ui button">EDIT</button></Link></td>

    //               </tr>)
    // });
    // }
    

    render(){
        return(
            <form className='order-page-form'>
                <h2>Find your car!</h2>
                    <div>
                        <p>Brand:</p>
                        <Select content={this.state.brand}/>
                    </div>
                    <div>
                        <p>Model:</p>
                        <Select content={this.state.model}/>
                    </div>
                    <div>
                        <p>Power:</p>
                        <Select content={this.state.power}/>
                    </div>
                    <div>
                        <p>Motor:</p>
                        <Select content={this.state.motor}/>
                    </div>
                <div><button>ORDER!</button></div>
            </form>
        );
    };
}

const mapStateToProps = state => {
    return { car: state.car };
};
export default connect(
    mapStateToProps,
    { getCars }
)(OrderForm);
