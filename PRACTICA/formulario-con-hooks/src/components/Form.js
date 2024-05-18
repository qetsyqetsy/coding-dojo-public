// Import the necessary dependencies from the React library
import React, { useState } from "react";

// Define a function to validate the form inputs
const validateForm = (inputs) => {
    const errors = {};

    // Validate first name
    if (inputs.firstName.trim() !== "" && inputs.firstName.length < 2) {
        errors.firstName = "First name must have at least 2 characters";
    }

    // Validate last name
    if (inputs.lastName.trim() !== "" && inputs.lastName.length < 2) {
        errors.lastName = "Last name must have at least 2 characters";
    }

    // Validate email
    if (inputs.email.trim() !== "" && inputs.email.length < 5) {
        errors.email = "Email must have at least 5 characters";
    }

    // Validate password
    if (inputs.password.trim() !== "" && inputs.password.length < 8) {
        errors.password = "Password must have at least 8 characters";
    }

    // Validate confirm password
    if (
        inputs.confirmPassword.trim() !== "" &&
        inputs.confirmPassword !== inputs.password
    ) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
};

// Define the Form component
const Form = ({ inputs, setInputs }) => {
    // Define state variables for errors
    const [errors, setErrors] = useState({});

    // Define the onChange event handler for input fields
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));

        // Check if the input value is not empty
        if (value.trim() !== "") {
            // Validate the form inputs
            const formErrors = validateForm({
                ...inputs,
                [name]: value,
            });
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: formErrors[name],
            }));
        } else {
            // Clear the error for the input field if it is empty
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: undefined,
            }));
        }
    };

    // Define the onSubmit event handler for the form
    const onSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Validate the form inputs
        const formErrors = validateForm(inputs);
        setErrors(formErrors);
    };

    // Render the form component
    return (
        <form onSubmit={onSubmit} className="form-container">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    onChange={onChange}
                    type="text"
                    name="firstName"
                    className="form-input"
                />

                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                    onChange={onChange}
                    type="text"
                    name="lastName"
                    className="form-input"
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    onChange={onChange}
                    type="text"
                    name="email"
                    className="form-input"
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    onChange={onChange}
                    type="password"
                    name="password"
                    className="form-input"
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    onChange={onChange}
                    type="password"
                    name="confirmPassword"
                    className="form-input"
                />
                {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                )}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

// Export the Form component as the default export
export default Form;
