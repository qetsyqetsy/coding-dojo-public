import React from 'react';
import './App.css';
import FormComponent from './components/FormComponent';

const App = () => {
    return (
        <div className="App">
            <h1>Form Validation with useReducer</h1>
            <FormComponent />
        </div>
    );
};

export default App;
