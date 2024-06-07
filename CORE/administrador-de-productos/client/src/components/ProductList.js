import React from 'react';

const ProductList = ({ products }) => {
    console.log('Products:', products); // Log the products array

    return (
        <div>
            {products.map((product) => (
                <a href={`/products/${product._id}`} key={product._id}>
                    <p>{product.title}</p>
                </a>
            ))}
        </div>
    );
};

export default ProductList;
