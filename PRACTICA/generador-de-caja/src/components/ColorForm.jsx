// src/components/ColorForm.js
import React, { useState } from 'react';

const ColorForm = ({ onAddColor }) => {
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!color || !size) return;
        onAddColor(color, size);
        setColor('');
        setSize('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Color Name:
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </label>
            <label>
                Size (px):
                <input
                    type="number"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
            </label>
            <button type="submit">Add</button>
        </form>
    );
};

export default ColorForm;
