
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Navbar = () => {
    const { username } = useContext(UserContext);

    return (
        <nav>
            <h1>Hello, {username}!</h1>
        </nav>
    );
};

export default Navbar;
