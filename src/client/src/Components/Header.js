import React from 'react';
import NavBarElement from './NavBarElement';
import Logout from './Logout';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    state = {
        isLogin: false
    }

    componentDidMount = async () => {
        let customerId = await localStorage.getItem('customer_id');
        console.log(customerId);
        if(customerId) {this.setState({isLogin: true})}
    }
    render() {
        return(
            <header className='nav-bar'>
                <Link to="/"><div className='logo'>
                    <img src='./img/car.png' alt='Our logo' />
                    <p>WoCh</p>
                </div></Link>
                <NavBarElement address='#WhyUs' name='Why us?'/>
                <NavBarElement address='#About' name='About us'/>
                <NavBarElement address='#Team' name='Our team'/>
                <NavBarElement address='#Contact' name='Contact'/>
                {this.state.isLogin ? <NavBarElement className='button' address='/myaccount' name='Hi!'/> : <NavBarElement className='button' address='/signup' name='Sign up'/>}
                {this.state.isLogin ? <Logout /> :<NavBarElement address='/login' name='Login'/>}
            </header>
        )
    }
}

export default Header