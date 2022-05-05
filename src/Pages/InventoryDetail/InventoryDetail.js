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
        <div>
            <h2>Inventory Id : {inventoryId}</h2>
            <h3>detail: {inventory.name}</h3>
        </div>
    );
};

export default InventoryDetail;