import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
            <h2>Total products</h2>
            <div className='row'>
                {
                    products.map(product => <Inventory
                        key={product.id}
                        product={product}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Products;