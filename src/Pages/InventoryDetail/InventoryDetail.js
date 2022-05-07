import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    console.log(inventoryId);
    const [inventory, setInventory] = useState({});
    const { _id, name, description, price, quantity, img } = inventory;
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, []);

    const handleQtyUpdate = event => {
        event.preventDefault();
        const qty = event.target.inputQuantity.value;
        console.log(qty);


        const newQuantity = parseInt(inventory.quantity) + parseInt(qty);
        const newQuantityObj = { name: name, description: description, price: price, quantity: newQuantity, img: img };
        console.log(newQuantityObj);

        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantityObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
            })
        // event.target.reset()

    }




    return (
        <div className='container'>
            <h2 className='text-center mt-1'>Inventory Item Detail</h2>
            <div className='d-flex m-4 justify-content-center'>
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

                    <div>
                        <form onSubmit={handleQtyUpdate}>
                            <input type="number" name='inputQuantity' placeholder='Quantity' />
                            <input type="submit" value="Restock" />
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;
