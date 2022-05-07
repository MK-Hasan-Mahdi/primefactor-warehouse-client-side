import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventory.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);

    const handleAllInventory = () => {
        navigate('/manageitem');
    }
    return (
        <div className='back-color'>
            <div className='container' id='inventory'>
                <h2 className='title-heading text-center p-5'>Inventory Item</h2>
                <div className='row'>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
                <div className='text-center mb-3'>
                    <button onClick={handleAllInventory} className='btn btn-primary btn-lg'>Manage all Inventory</button>
                </div>
            </div>
        </div>
    );
};

export default Inventories;