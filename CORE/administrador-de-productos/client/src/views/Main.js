import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log('API Response:', res.data); // Log the API response
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error('Error fetching products:', err)); // Handle any errors
    }, []);

    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList products={products} />}
        </div>
    );
};

export default Main;
