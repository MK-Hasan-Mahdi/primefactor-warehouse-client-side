import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://warm-island-25044.herokuapp.com/myitem?email=${email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user]);

    // handle cancel/delete by user
    const handleDeleteItem = (id) => {
        const proceedDelete = window.confirm('confirm delete?');
        if (proceedDelete) {
            const url = `https://warm-island-25044.herokuapp.com/myitem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItem = myItems.filter(myItem => myItem._id !== id);
                    setMyItems(remainingItem);
                })
        }
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
                            myItems.map(myItem => {
                                return (<tr key={myItem._id}>
                                    <td>{myItem._id}</td>
                                    <td>{myItem.name}</td>
                                    <td>{myItem.price}</td>
                                    <td>{myItem.quantity}</td>

                                    <td><button onClick={() => handleDeleteItem(myItem._id)} className='btn btn-danger'>Delete</button></td>
                                </tr>)
                            })

                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyItem;