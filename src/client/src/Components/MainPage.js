import React from 'react';
import Header from './Header';
import Comment from './Comment';
import Reason from './Reason';
import Search from './Search';
import TeamPerson from './TeamPerson';
import Contact from './Contact';
import Footer from './Footer';

class MainPage extends React.Component {
    render() {
        return (
        <div className='main-page'>
            <Header/>
            <div className='search-bar'>
                <h1>The only site<br />where You can rent<br />truly amazing cars!</h1>
                <Search/>
            </div>
            <div id='WhyUs'>
                <h2>Why us?</h2>
                <div className='reasons-why'>
                    <Reason imgSrc='./img/shield.png' reasonWhy='We are going to rob you' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                    <Reason className='bright-reason' imgSrc='./img/dolar.png' reasonWhy='We want your $$$' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                    <Reason imgSrc='./img/book.png' reasonWhy='Beacuse we believe' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                </div>
            </div>
            <div id='About'>
                <h2>About us</h2>
                <div className='comments'>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
            </div>
            <div id='Team'>
                <h2>Our team</h2>
                <div className='team-members'>
                    <TeamPerson imgSrc='./img/Wojtek.png' name='Wojtek' text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem.'/>
                    <TeamPerson imgSrc='./img/Tomek.png' name='Tomek' text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem.'/>
                    <TeamPerson imgSrc='./img/Bartek.png' name='Bartek' text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem.'/>
                    <TeamPerson imgSrc='./img/Karol.png' name='Karol' text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem.'/>
                </div>
            </div>
            <div id='Contact'>
                <h2>Contact</h2>
                <h3>If You have a question or You just want to contact with us,<br />please leave a message!</h3>
                <Contact/>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default MainPage