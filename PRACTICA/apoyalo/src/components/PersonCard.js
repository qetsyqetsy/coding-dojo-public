import React, {useState} from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor}) => {
    const [personAge, setPersonAge] = useState(age);

    const handleBirthday = () => {
        setPersonAge(personAge + 1);
    }
    return (
        <div>
            <h2>{firstName} {lastName}</h2>
            <p>Age: {personAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleBirthday}>Celebrate Birthday</button>
        </div>
    );
};

export default PersonCard;

