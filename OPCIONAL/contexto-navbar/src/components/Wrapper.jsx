
import React, { useState } from 'react';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';
import { UserContext } from './UserContext';

const Wrapper = () => {
    const [username, setUsername] = useState('User');

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            <div>
                
                <Navbar />
                <FormWrapper />
            </div>
        </UserContext.Provider>
    );
};

export default Wrapper;
