import React from 'react';
import './App.css';
import Select from './Select';



class OrderForm extends React.Component{ 
    state = {
        brand: 'Brand',
        model: 'Model',
        age: 'Age',
        motor: 'Motor'
    }
 
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
                        <p>Age:</p>
                        <Select content={this.state.age}/>
                    </div>
                    <div>
                        <p>Motor:</p>
                        <Select content={this.state.motor}/>
                    </div>
                <div><button>ORDER!</button></div>
            </form>
        );
    }
}


export default OrderForm;