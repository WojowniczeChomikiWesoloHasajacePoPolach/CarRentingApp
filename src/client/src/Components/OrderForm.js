import React from 'react';
import './App.css';
import Select from './Select';
import { connect } from 'react-redux'
import { getCars } from '../actions';



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

    

    render(){
        return(
            <form className='order-page-form'>
                <h2>Find your car!</h2>
                    <div>
                        <p>Brand:</p>
                        <Select content={this.state.car.brand}/>
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
