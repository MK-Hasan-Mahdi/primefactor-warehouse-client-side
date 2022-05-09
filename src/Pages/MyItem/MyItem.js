import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/myitem?email=${email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user])



    return (
        <div>
            <h2>my item {myItems.length} </h2>
        </div>
    );
};

export default MyItem;