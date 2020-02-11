import React from 'react';
import './App.css';
import Option from './Option';
import { getCars } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



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
    }

    getBrand(){
        return this.props.cars.map( car => {
            return (
                    <Option content={car.brand}/>
                  )
    });
    }
    getModel(){
        return this.props.cars.map( car => {
            return (
                    <Option content={car.model}/>
                  )
    });
    }
    getMotor(){
        return this.props.cars.map( car => {
            return (
                    <Option content={car.motor}/>
                  )
    });
    }
    getPower(){
        return this.props.cars.map( car => {
            return (
                    <Option content={car.power}/>
                  )
    });
    }

    render(){
        return(
            <form className='order-page-form'>
                <h2>Find your car!</h2>
                    <div>
                        <p>Brand:</p>
                        <select>
                            {this.getBrand()}
                        </select>
                    </div>
                    <div>
                        <p>Model:</p>
                        <select>
                            {this.getModel()}
                        </select>
                    </div>
                    <div>
                        <p>Power:</p>
                        <select>
                            {this.getPower()}
                        </select>
                    </div>
                    <div>
                        <p>Motor:</p>
                        <select>
                            {this.getMotor()}
                        </select>
                    </div>
                <div><button>ORDER!</button></div>
            </form>
        );
    };
}

const mapStateToProps = state => {
    return { cars: state.cars };
};
export default connect(
    mapStateToProps,
    { getCars }
)(OrderForm);
