import React from 'react';

const TeamPerson = ({imgSrc, name, text}) => {
    return (
        <div className='member'>
            <img src={imgSrc} />
            <span>{name}</span>
            <p>{text}</p>
        </div>
    )
}

export default TeamPerson;