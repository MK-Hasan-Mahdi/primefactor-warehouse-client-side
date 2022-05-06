import React from 'react';
import { Table } from 'react-bootstrap';
import useInventories from '../../hooks/useInventories';

const ManageItem = () => {
    const [inventories, setInventories] = useInventories();
    const handleDeleteItem = (id) => {
        const proceedDelete = window.confirm('confirm delete');
        if (proceedDelete) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItem = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remainingItem);
                })
        }
    }
    return (
        <div className='container d-flex justify-content-center align-items-center my-5'>
            <Table responsive striped bordered hover variant="dark">
                <thead className='text-center'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        inventories.map(inventory => {
                            return (<tr key={inventory._id}>
                                <td>{inventory._id}</td>
                                <td>{inventory.name}</td>
                                <td>{inventory.price}</td>
                                <td>{inventory.quantity}</td>
                                <td>{inventory.supplier}</td>
                                <td><img className='' style={{ height: '100px', width: '150px' }} src={inventory.img} alt="" /></td>
                                <td><button onClick={() => handleDeleteItem(inventory._id)} className='btn btn-danger'>Delete</button></td>
                            </tr>)
                        })

                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ManageItem;