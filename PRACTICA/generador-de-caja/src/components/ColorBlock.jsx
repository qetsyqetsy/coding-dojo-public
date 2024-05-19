// src/components/ColorBlock.js
import React from 'react';

const ColorBlock = ({ color, size }) => {
    const blockStyle = {
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-block',
        marginRight: '10px',
        marginBottom: '10px',
        border: '1px solid #333',
    };

    return <div className="color-block" style={blockStyle}></div>;
};

export default ColorBlock;
