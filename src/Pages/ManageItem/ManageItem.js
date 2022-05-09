import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';

const ManageItem = () => {
    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate();
    const handleDeleteItem = (id) => {
        const proceedDelete = window.confirm('confirm delete?');
        if (proceedDelete) {
            const url = `https://warm-island-25044.herokuapp.com/inventory/${id}`;
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

    const handleAddNewItem = () => {
        navigate('/additem')
    }

    return (
        <div className='container'>
            <h2 className='text-center mt-2'>All Inventory Items</h2>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <Table responsive striped bordered hover variant="dark">
                    <thead className='text-center'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
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
            <div className='text-center mb-3'>
                <button onClick={handleAddNewItem} className='btn btn-primary btn-lg'>Add New Item</button>
            </div>
        </div>
    );
};

export default ManageItem;