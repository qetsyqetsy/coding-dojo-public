/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const Form = () => {
    const { setUsername } = useContext(UserContext);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setUsername(value); // Actualizar el nombre de usuario en el contexto
    };

    return (
        <form>
            <label>
                Change Username:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
        </form>
    );
};

export default Form;
