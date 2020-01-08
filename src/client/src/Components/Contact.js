import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <form className='contact-form'>
                <input className='contact-email' type='email' placeholder='Your e-mail'/>
                <textarea className='contact-message' type='text' rows='6' cols='100' wrap='hard' placeholder='Your message'></textarea>
                <input className='button' type='submit' value='Send message'/>
            </form>
        )
    }
}

export default Contact