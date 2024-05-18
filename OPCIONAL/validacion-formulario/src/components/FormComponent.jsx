import React, { useReducer } from 'react';
import './FormComponent.css';

// Initial state for the form fields
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

// Reducer function to handle state updates
const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: {
                    value: action.value,
                    error: action.validate ? action.validate(action.value) : null
                }
            };
        default:
            return state;
    }
};

// FormComponent component
const FormComponent = () => {
    // Use reducer hook to manage state
    const [state, dispatch] = useReducer(reducer, initialState);

    // Validation function for email field
    const validateEmail = (email) => {
        return email.includes('@') ? null : 'Invalid email format';
    };

    // Validation function for name fields
    const validateName = (name) => {
        return name.trim() === '' ? 'This field is required' : null;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if all fields are valid
        const isValid = Object.values(state).every(field => field.error === null && field.value !== '');
        if (isValid) {
            alert('Form submitted successfully');
        } else {
            alert('Please correct the errors in the form');
        }
    };

    // Handle field value change
    const handleChange = (field, value, validate) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field,
            value,
            validate
        });
    };

    // Render the form
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    value={state.firstName.value}
                    onChange={(e) => handleChange('firstName', e.target.value, validateName)}
                />
                {state.firstName.error && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>

            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    value={state.lastName.value}
                    onChange={(e) => handleChange('lastName', e.target.value, validateName)}
                />
                {state.lastName.error && (
                    <p className="error">{state.lastName.error}</p>
                )}
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="text"
                    value={state.email.value}
                    onChange={(e) => handleChange('email', e.target.value, validateEmail)}
                />
                {state.email.error && (
                    <p className="error">{state.email.error}</p>
                )}
            </div>

            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
};

export default FormComponent;

/* 

// Explanation
The code provided is a React component that represents a form with three fields: First Name, Last Name, and Email. 
The component uses the useReducer hook to manage the state of the form fields.

// Initial State
The initialState object defines the initial values and errors for each form field. Each field has a value property 
that holds the current value of the field, and an error property that holds any validation error associated with the field.

// Reducer Function
The reducer function is responsible for updating the state based on the dispatched actions. In this case, 
the only action type is 'UPDATE_FIELD', which is used to update the value and error of a specific field. 
The reducer spreads the existing state and updates the specified field with the new value and error. 
If a validation function is provided for the field, it is called with the new value to determine the error.

// Validation Functions
The validateEmail function checks if the email value includes the '@' symbol. 
If it does, it returns null to indicate that the email is valid. Otherwise, it returns the error message 'Invalid email format'.

The validateName function checks if the name value is empty or consists only of whitespace characters. 
If it is, it returns the error message 'This field is required'. Otherwise, it returns null to indicate that the name is valid.

// Handle Submit
The handleSubmit function is called when the form is submitted. 
It prevents the default form submission behavior and checks if all fields are valid. 
It uses the Object.values method to get an array of all field objects in the state. 
It then uses the every method to check if all fields have a null error and a non-empty value. 
If all fields are valid, an alert is shown with the message 'Form submitted successfully'. 
Otherwise, an alert is shown with the message 'Please correct the errors in the form'.

// Handle Change
The handleChange function is called when a field value changes. 
It dispatches an action of type 'UPDATE_FIELD' with the field name,
new value, and validation function as payload. 
The reducer updates the state accordingly.

// The form is rendered using JSX. 
Each field is represented by a <div> element containing a <label> and an <input> element. 
The value of each input is bound to the corresponding field value in the state, 
and the onChange event is handled by the handleChange function. If a field has an error, 
a <p> element with the class 'error' is rendered to display the error message.

Finally, a submit button is rendered with the text 'Submit' and the class 'submit-btn'. 
When clicked, it triggers the form submission.

*/