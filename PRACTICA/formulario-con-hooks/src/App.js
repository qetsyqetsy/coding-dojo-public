import React, { useState } from 'react'; // Importing necessary modules from React library
import Form from './components/Form'; // Importing the Form component
import Results from './components/Results'; // Importing the Results component
import './App.css'; // Importing the CSS file for styling

const App = () => {
    const [inputs, setInputs] = useState({ // Initializing state variables for form inputs
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    return (
        <div className="App"> {/* Main container for the application */}
            <Form inputs={inputs} setInputs={setInputs} /> {/* Rendering the Form component with input data */}
            {/* <Results data={inputs} /> */} {/* Results component commented out for now */}
        </div>
    );
}

export default App; // Exporting the App component as the default export
