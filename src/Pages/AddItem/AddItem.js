import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddItem = () => {
    const [user] = useAuthState(auth);
    // console.log(user);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newInvetoryItem = {
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value,
            quantity: event.target.quantity.value,
            img: event.target.img.value,
        };

        // upload inventory item
        const url = `https://warm-island-25044.herokuapp.com/inventory`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newInvetoryItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // toast.success("added succsessfully");
            });

        //my items 
        const myItem = {
            email: user.email,
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value,
            quantity: event.target.quantity.value,
            img: event.target.img.value,
        };
        const myItemurl = `https://warm-island-25044.herokuapp.com/myitem`;
        fetch(myItemurl, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(myItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
        event.target.reset();
    };

    return (
        <div className='mx-auto w-50'>
            <h2 className='text-center mt-2'>ADD NEW INVENTORY ITEM</h2>
            <form className=" form-field d-flex flex-column" onSubmit={handleSubmit}>
                <input className="form-field d-flex align-items-center" placeholder="Item Name" name="name" />
                <textarea className="form-field d-flex align-items-center" placeholder="Description" required name="description" />
                <input className="form-field d-flex align-items-center" placeholder="Price" type="number" required name="price" />
                <input className="form-field d-flex align-items-center" placeholder="Quantity" type="number" required name="quantity" />
                <input className="form-field d-flex align-items-center" placeholder="Photo URL" type="text" required name="img" />
                <div className='text-center'>
                    <input type="submit" className="btn btn-primary mt-3 w-50" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;

