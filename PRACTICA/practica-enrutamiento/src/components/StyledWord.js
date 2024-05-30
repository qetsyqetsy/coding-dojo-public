import React from 'react'; 
import { useParams } from 'react-router-dom'; 

const StyledWord = () => {
	const { word, color, background } = useParams();
	const style = {
		color: color,
		backgroundColor: background, 
	};

	return <h1 style={style}>The word is: {word}</h1>;
};

export default StyledWord; 
