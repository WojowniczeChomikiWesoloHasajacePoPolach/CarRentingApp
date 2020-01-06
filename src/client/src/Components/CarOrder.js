import React from 'react';
import Header from './Header';
import OrderForm from './OrderForm';
import './App.css';
import Footer from './Footer';

class CarOrder extends React.Component{
    
    render(){        
        return(
            <div className="order-page">
                <Header/>
                <OrderForm/>
                <Footer/>
            </div>
            
        )
    }

}

export default CarOrder;