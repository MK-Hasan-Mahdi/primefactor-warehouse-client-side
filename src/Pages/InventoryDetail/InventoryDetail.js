import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

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
            swal({
                title: "Warning!",
                text: "Please give valid quantity!",
                icon: "warning",
                button: "OK",
            });
        }
        else {
            swal({
                title: "Done!",
                text: "Increased stock quantity",
                icon: "success",
                button: "OK",
            });

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
            supplier: supplier,
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
            });
        // alert msg
        swal({
            title: "Done!",
            text: "Shipped from stock",
            icon: "success",
            button: "OK",
        });
    }



    return (
        <div className='container'>
            <h2 className='text-center mt-1'>INVENTORY ITEM DETAIL</h2>
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
                            <button onClick={handleShippedItem} className='btn-get-started rounded-3 py-2 my-1 '>Shipped</button>
                        </div>
                    </div>

                    <div className='text-center'>
                        <form onSubmit={handleQtyUpdate}>
                            <input type="number" name='inputQuantity' placeholder='Quantity' />
                            <input type="submit" value="Restock" />
                            {/* <button>Restock</button> */}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;
