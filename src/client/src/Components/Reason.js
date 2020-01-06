import React from 'react';

const Reason = ({imgSrc,reasonWhy, text}) => {
    return(
        <div className='reason'>
            <img src={imgSrc}/>
            <h4>{reasonWhy}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Reason;