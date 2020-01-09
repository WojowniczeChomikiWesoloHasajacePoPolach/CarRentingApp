import React from 'react';


class Customers extends React.Component {


    render() {
        let y ="aaa";

        return <div><Custom value={y}/></div>;
        
    }
}

function Custom(props) {
    return <div>{props.value}</div>
}

export default Customers;