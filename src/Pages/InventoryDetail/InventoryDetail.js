import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    // console.log(inventoryId);
    const [inventory, setInventory] = useState({});
    const { _id, name, description, price, quantity, supplier, img } = inventory;
    useEffect(() => {
        const url = `https://warm-island-25044.herokuapp.com/inventory/${inventoryId}`
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, []);

    // inventory item's stock update
    const handleQtyUpdate = event => {
        event.preventDefault();
        const qty = event.target.inputQuantity.value;
        // console.log(qty);
        if (qty <= 0) {
            toast('give valid qty')
        }
        else {

            const newQuantity = parseInt(inventory.quantity) + parseInt(qty);
            const newQuantityObj =
            {
                name: name,
                description: description,
                price: price,
                quantity: newQuantity,
                supplier: supplier,
                img: img
            };
            // console.log(newQuantityObj);
            setInventory(newQuantityObj);

            const url = `https://warm-island-25044.herokuapp.com/inventory/${inventoryId}`
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
        }
        event.target.reset();
    }

    // invetory item's stock deliver/shipment
    const handleShippedItem = () => {
        const newInvItemQuantity = quantity - 1;
        const newInventory = {
            name: name,
            description: description,
            price: price,
            quantity: newInvItemQuantity,
            img: img
        };
        setInventory(newInventory);

        const url = `https://warm-island-25044.herokuapp.com/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newInventory)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })
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
                        <li className="list-group-item px-4"> Sold:  </li>
                        <li className="list-group-item px-4"> Supplier: {inventory.supplier} </li>
                    </ul>
                    <div className="card-body">
                        <div className='d-flex  justify-content-center'>
                            <button onClick={handleShippedItem} className='btn btn-primary rounded-3 py-2 my-1 buy-btn'>Shipped</button>
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
