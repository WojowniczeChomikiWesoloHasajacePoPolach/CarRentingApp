import React from 'react';

const NavBarElement = ({address, name}) => {
    return <a href={address}>{name}</a>
}

export default NavBarElement