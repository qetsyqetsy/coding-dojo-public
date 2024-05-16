import React from "react";

const Form = props => {

        const { inputs, setInputs } = props; 

        const onChange = e => {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        };
    return(
        <form>
            <div className="form-group">
            <label htmlFor="firstName"> First Name</label>
            <input onChange={onChange} type="text" name="firstName"></input>
            </div>
            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={onChange} type="text" name="lastName"></input>
            </div>

            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="text" name="email"></input>

            <div className="form-group">

            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="password" name="password"></input>

            </div>
            <div className="form-group">

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChange} type="password" name="confirmPassword"></input>
            </div>
        </form>
    );
}; 

export default Form; 