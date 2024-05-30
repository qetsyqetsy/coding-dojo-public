import React from 'react'; // Importing React library for using React features
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Home from './components/Home'; // Importing the Home component
import Number from './components/Number'; // Importing the Number component
import Word from './components/Word'; // Importing the Word component
import StyledWord from './components/StyledWord'; // Importing the StyledWord component

const App = () => {
    return (
        <Router> {/* Router component to manage routing */}
            <Routes> {/* Routes component to define different routes */}
                <Route path="/home" element={<Home />} /> {/* Route for the Home component */}
                <Route path="/:number" element={<Number />} /> {/* Route for the Number component */}
                <Route path="/:hello" element={<Word />} /> {/* Route for the Word component */}
                <Route path="/:word/:color/:background" element={<StyledWord />} /> {/* Route for the StyledWord component */}
            </Routes>
        </Router>
    );
};

export default App; // Exporting the main App component
