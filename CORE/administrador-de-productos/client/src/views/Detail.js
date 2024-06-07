import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Detail = (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => {
                console.log('Product Detail:', res.data); // Log the product detail
                setProduct(res.data);
            })
            .catch(err => console.error('Error fetching product details:', err)); // Handle any errors
    }, [props.id]);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

export default Detail;
