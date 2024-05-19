import React, { useState } from 'react';
import ColorBlock from './components/ColorBlock';
import ColorForm from './components/ColorForm';
import './App.css';

function App() {
    const [blocks, setBlocks] = useState([]);

    const addColorBlock = (color, size) => {
        setBlocks([...blocks, { color, size }]);
    };

    return (
        <div className="App">
            <h1 className="app-title">Color Block App</h1>
            <ColorForm onAddColor={addColorBlock} />
            <div className="color-block-container">
                {blocks.map((block, index) => (
                    <ColorBlock
                        key={index}
                        color={block.color}
                        size={block.size}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;