import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, img, price, quantity, description, supplier } = product;
    const navigate = useNavigate();
    const navigateToInventoryDetail = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <div className="card-body py-3">
                    <img src={img} className="card-img-top w-100 rounded-3" alt="..."></img>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Supplier: {supplier}</p>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <button onClick={() => navigateToInventoryDetail(id)} className='btn btn-primary rounded-3 py-2 my-1 buy-btn'>Manage</button>
                </div>
            </div>
        </div>
    );
};

export default Product;