import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(output => {
                console.log(output);
            })

    };
    return (
        <div className='mx-auto w-50'>
            <h2 className='text-center mt-2'>Add New Inventory Item</h2>
            <form className='d-flex flex-column my-5 mb-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Item Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='mb-2' {...register("description")} />
                <input placeholder='Price' className='mb-2' type="number" {...register("price")} />
                <input placeholder='Quantity' className='mb-2' type="number" {...register("quantity")} />
                <input placeholder='Supplier' className='mb-2' type="text" {...register("supplier")} />
                <input placeholder='Photo URL' className='mb-2' type="text" {...register("img")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;