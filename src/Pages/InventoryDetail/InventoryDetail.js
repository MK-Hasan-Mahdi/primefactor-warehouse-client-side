import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    // console.log(inventoryId);
    const [inventory, setInventory] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [])
    return (
        <div className='container'>

            <div className='d-flex m-5 justify-content-center'>
                <div className="card" style={{ width: "50rem" }}>
                    <img src={inventory.img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h3 className="card-title">{inventory.name}</h3>
                        <p>Id : {inventoryId}</p>
                        <p className="card-text"><small>{inventory.description}</small></p>
                    </div>
                    <ul className="list-group list-group-light list-group-small">
                        <li className="list-group-item px-4"> Price: {inventory.price} </li>
                        <li className="list-group-item px-4"> Quantity: {inventory.quantity} </li>
                        <li className="list-group-item px-4"> Sold: no </li>
                        <li className="list-group-item px-4"> Supplier: {inventory.supplier} </li>
                    </ul>
                    <div className="card-body">
                        <div className='d-flex  justify-content-center'>
                            <button className='btn btn-primary rounded-3 py-2 my-1 buy-btn'>Delivered</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;