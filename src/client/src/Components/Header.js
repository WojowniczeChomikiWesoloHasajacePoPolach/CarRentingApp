import React from 'react';
import NavBarElement from './NavBarElement';

class Header extends React.Component{
    render() {
        return(
            <header className='nav-bar'>
                <div className='logo'>
                    <img src='./img/car.png' alt='Our logo' />
                    <p>WoCh</p>
                </div>
                <NavBarElement address='#WhyUs' name='Why us?'/>
                <NavBarElement address='#About' name='About us'/>
                <NavBarElement address='#Team' name='Our team'/>
                <NavBarElement address='#Contact' name='Contact'/>
                <NavBarElement className='button' address='#Sign' name='Sign up/in'/>
            </header>
        )
    }
}

export default Header